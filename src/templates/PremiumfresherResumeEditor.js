import React, { useState, useRef, useMemo, useEffect,useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/PremiumfresherResumeEditor.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import ReactGA from 'react-ga4';
import menuIcon from "../images/logo.png";
import menuIcon1 from "../images/logo1.jpeg";
const A4_HEIGHT_PX = 842; // A4 height in px
const useGA = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (!GA_MEASUREMENT_ID) {
      console.warn("GA_MEASUREMENT_ID is not defined");
      return;
    }

    ReactGA.initialize(GA_MEASUREMENT_ID);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);
};
const PremiumfresherResumeEditor = () => {
  const templateId = "premiumfresher";
  const template = resumeData[templateId];
  const [showPreview, setShowPreview] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useGA();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [common, setCommon] = useState({
  ...template.common,
  contact: template.common.contact || {
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    address: "",
  },
  skillsInput: template.common.skills?.join(", ") || "",
  languagesInput: template.common.languages?.join(", ") || "",
  toolsInput: template.common.tools?.join(", ") || "",
});
  const [experience, setExperience] = useState([...template.experience || []]);
  const [education, setEducation] = useState([...template.education || []]);
  const [projects, setProjects] = useState([...template.projects || []]);
  const [certifications, setCertifications] = useState([...template.certifications || []]);

  const resumeRef = useRef(null);
  const measureRef = useRef(null);
  const [pages, setPages] = useState([]);

  // =========================
  // Parse Skills / Languages / Tools
  // =========================
  const parsedCommon = useMemo(() => {
  const parse = (text) => {
    if (!text) return [];
    if (Array.isArray(text)) return text;
    return String(text)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  };

  return {
    ...common,
    skills: parse(common.skillsInput || common.skills),
    languages: parse(common.languagesInput || common.languages),
    tools: parse(common.toolsInput || common.tools),
  };
}, [common]);

  const hasSkills = parsedCommon.skills.length > 0;
  const hasLanguages = parsedCommon.languages.length > 0;
  const hasTools = parsedCommon.tools.length > 0;

  // =========================
  // PAGE SPLIT
  // =========================
  const PAGE_PADDING = 56;   // 28 top + 28 bottom
  const SAFE_BUFFER = 40;    // extra safety
  const USABLE_PAGE_HEIGHT = A4_HEIGHT_PX - PAGE_PADDING - SAFE_BUFFER;

const splitIntoPages = useCallback((container) => {
  if (!container) return [];

  const leftSections = Array.from(
    container.querySelectorAll(".premiumfresher_modern-left6 .premiumfresher_section-block")
  );

  

  const split = (sections) => {
    const pages = [];
    let current = [];
    let height = 0;

    sections.forEach((section) => {
      const h = Math.ceil(section.offsetHeight);

      if (height + h > USABLE_PAGE_HEIGHT) {
        pages.push([...current]);
        current = [];
        height = 0;
      }

      current.push(section);
      height += h;
    });

    if (current.length) pages.push(current);

    return pages;
  };

  const leftPages = split(leftSections);

  const totalPages = Math.max(leftPages.length);

  const finalPages = [];

  for (let i = 0; i < totalPages; i++) {
    finalPages.push([
      ...(leftPages[i] || [])
    ]);
  }

  return finalPages;
}, [USABLE_PAGE_HEIGHT]);

  // =========================
  // Photo upload
  // =========================
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setCommon({ ...common, photo: reader.result });
    reader.readAsDataURL(file);
  };

  // =========================
  // Measure pages dynamically
  // =========================
  useEffect(() => {
    if (!measureRef.current) return;

    const raf = requestAnimationFrame(() => {
      const calculated = splitIntoPages(measureRef.current);
      setPages(calculated);
    });

    return () => cancelAnimationFrame(raf);
  }, [common, experience, education, projects, certifications,showPreview,splitIntoPages]);

  // =========================
  // Load saved resume
  // =========================
  useEffect(() => {
  const saved = localStorage.getItem("premiumfresher");
  if (saved) {
    const data = JSON.parse(saved);
    setCommon(data.common);
    setExperience(data.experience);
    setEducation(data.education);
    setProjects(data.projects);
    setCertifications(data.certifications);
  }
}, []);

// Save changes whenever common/experience/... updates
useEffect(() => {
  localStorage.setItem(
    "premiumfresher",
    JSON.stringify({ common, experience, education, projects, certifications })
  );
}, [common, experience, education, projects, certifications]);

  // =========================
  // PDF Download
  // =========================
   const handleDownload = async () => {
    if (!resumeRef.current) return;
  
    const pages = resumeRef.current.querySelectorAll(".premiumfresher_pdf-page");
  
    const pdf = new jsPDF("p", "mm", "a4");
  
    for (let i = 0; i < pages.length; i++) {
  
      const canvas = await html2canvas(pages[i], {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff"
      });
  
      const imgData = canvas.toDataURL("image/png");
  
      const imgWidth = 210; // A4 width in mm
      const imgHeight = 297; // A4 height in mm
  
      if (i > 0) {
        pdf.addPage();
      }
  
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        imgWidth,
        imgHeight
      );
    }
  
    pdf.save(`${common.name || "Resume"}_Resume.pdf`);

    ReactGA.event({
        category: "Resume",
        action: "Download PDF",
        label: `${common.name || "Unknown"}_Resume.pdf`
      });
  };
  // =========================
  // Helpers
  // =========================
  const updateArrayField = (array, setArray, index, field, value) => {
    const updated = [...array];
    updated[index][field] = value;
    setArray(updated);
  };

  const addNewField = (setArray, defaultObj) => setArray((prev) => [...prev, defaultObj]);
  const deleteArrayItem = (array, setArray, index) => setArray(array.filter((_, i) => i !== index));

  // =========================
  // Resume Inner Content
  // =========================
  const ResumeInner = () => (
    <>
      <main className="premiumfresher_modern-left6">
        <section className="premiumfresher_section-block" style={{display:"flex"}}>
        <div >
            <h1 className="modern-name6" style={{margin:"0px"}}>{common.name}{ }</h1>
    <h1 className="modern-title6" style={{margin:"0px"}}>{common.title}</h1>
    <h3 className="premiumfresher_section-title6">Contact</h3>
          <p style={{fontSize:"13px",margin:"0px"}}>📩 {common.contact?.email}</p>
          <p style={{fontSize:"13px",margin:"0px"}}>📞 {common.contact?.phone}</p>
          <p style={{fontSize:"13px",margin:"0px"}}>🖇️ {common.contact?.linkedin}</p>
          <p style={{fontSize:"13px",margin:"0px"}}>🌐 {common.contact?.address}</p>
    </div>
     <div className="photo-circle6" style={{marginLeft:"120px",marginRight:"20px",backgroundColor:"rgb(26, 116, 206)",border:"2px solid rgb(251, 251, 252)",width:"170px",height:"170px"}}>
  {common.photo ? (
    <img
      src={common.photo}
      alt="profile"
    />
  ) : (
    <div className="premiumfresher_photo-placeholder" style={{marginLeft:"0px",backgroundColor:'black',border:"2px solid white",color:"white"}}></div>
  )}
</div>
    </section>
        <div className="premiumfresher_section-block" style={{width:"300px"}}>
          <h3 className="premiumfresher_section-title6">Summary</h3>
          <p className="body-text" style={{margin:"0px"}}>{common.summary}</p>
        </div>

         {/* Education */}
        {education.length > 0 && (
          <section className="premiumfresher_section-block" style={{width:"300px"}}>
            <h3 className="premiumfresher_section-title6">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="item-block">
                  <strong style={{fontSize:"13px"}}>{edu.degree}</strong>
                  <div >{edu.institution}</div>
                <div className="duration6">{edu.year}</div>
              </div>
            ))}
          </section>
        )}
        {/* Projects */}
        {projects.length > 0 && (
          <section className="premiumfresher_section-block" style={{width:"300px"}}>
            <h3 className="premiumfresher_section-title6">Projects</h3>
            {projects.map((p, i) => (
              <div key={i} className="item-block">
                <strong>{p.title}</strong>
                <p className="body-text">{p.desc}</p>
              </div>
            ))}
          </section>
        )}
        {/* Experience */}
        {experience.length > 0 && (
          <section className="premiumfresher_section-block" style={{width:"350px"}}>
            <h3 className="premiumfresher_section-title6">Internship</h3>
            {experience.map((exp, i) => (
              <div key={i} className="item-block">
                  <strong>{exp.role}</strong>
                  <div>{exp.company}</div>
                <div className="duration6">{exp.duration}</div>
                <p className="body-text"  style={{fontSize:"15px"}}>{exp.desc}</p>
                <strong>Highlights:</strong>
                <p className="body-text"  style={{fontSize:"10px"}}>
                     {exp.highlights.map((s, i) => (
              <p key={i}  style={{fontSize:"10px"}}>{s}</p>
            ))}
                </p>
              </div>
            ))}
          </section>
        )}


        {hasSkills && (
          <div className="premiumfresher_section-block" style={{width:"250px",textAlign:"center"}}>
            <h3 className="premiumfresher_section-title6">Skills</h3>
            {parsedCommon.skills.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        )}
        <section className="premiumfresher_section-block" style={{display:"flex"}}><div style={{marginLeft:"20px"}}>
        {hasLanguages && (
          <>
            <h3 className="premiumfresher_section-title6">Languages</h3>
            {parsedCommon.languages.map((l, i) => (
              <p key={i} style={{fontSize:'12px'}}>{l}</p>
            ))}
          </>
        )}</div>
        <div style={{marginLeft:"50px"}}>
        {hasTools && (
          <>
            <h3 className="premiumfresher_section-title6">Tools</h3>
            {parsedCommon.tools.map((t, i) => (
              <p key={i} style={{fontSize:'12px'}}>{t}</p>
            ))}
          </>
        )}</div></section></main></>
  );

  const handleCreatePortfolio = () => {

  const portfolioData = {
    common,
    experience,
    education,
    projects,
    certifications
  };

  const username = common.name
    ?.toLowerCase()
    .replace(/\s+/g, "");

  const uniqueId = Math.random().toString(36).substring(2,8);

const portfolioId = username + "-" + uniqueId;

localStorage.setItem(
  "portfolio_" + portfolioId,
  JSON.stringify(portfolioData)
);

window.open(`/portfolio/premiumfresher/${portfolioId}`, "_blank");
ReactGA.event({
    category: "Portfolio",
    action: "Create Portfolio",
    label: portfolioId
  });
};
  // =========================
  // Render
  // =========================
  return (
    <><Navbar/>
    <div className="app-container">
      <div className="editor-container"><div>
        {(!isMobile || !showPreview) && (
        <div className="editor-sidebar">
          {/* Sidebar editor content */}
          <h2>Premium Fresher Resume Editor</h2>

          {/* Photo */}
          <h3>Profile Photo</h3>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          {common.photo && (
            <img
              src={common.photo}
              alt="preview"
              style={{ width: 80, height: 80, objectFit: "cover", borderRadius: "50%", marginBottom: 12 }}
            />
          )}

          {/* Basic Info */}
          <label>Name</label>
          <input value={common.name || ""} onChange={(e) => setCommon({ ...common, name: e.target.value })} />
          <label>Title</label>
          <input value={common.title || ""} onChange={(e) => setCommon({ ...common, title: e.target.value })} />
          <label>Summary</label>
          <textarea value={common.summary || ""} onChange={(e) => setCommon({ ...common, summary: e.target.value })} />

          {/* Contact */}
          <h3>Contact</h3>
          {["email", "phone", "linkedin", "address"].map((field) => (
            <input
              key={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={common.contact?.[field] || ""}
              onChange={(e) => setCommon({ ...common, contact: { ...common.contact, [field]: e.target.value } })}
            />
          ))}

          {/* Skills / Languages / Tools */}
          {["Skills", "Languages", "Tools"].map((section) => (
            <div key={section}>
              <h3>{section}</h3>
              <textarea
                value={common[`${section.toLowerCase()}Input`] || ""}
                onChange={(e) =>
                  setCommon((p) => ({ ...p, [`${section.toLowerCase()}Input`]: e.target.value }))
                }
              />
            </div>
          ))}

          {/* Experience */}
          <h3>Internship</h3>
          {experience.map((exp, idx) => (
            <div key={idx} className="dynamic-field">
              <input
                placeholder="Role"
                value={exp.role || ""}
                onChange={(e) => updateArrayField(experience, setExperience, idx, "role", e.target.value)}
              />
              <input
                placeholder="Company"
                value={exp.company || ""}
                onChange={(e) => updateArrayField(experience, setExperience, idx, "company", e.target.value)}
              />
              <input
                placeholder="Duration"
                value={exp.duration || ""}
                onChange={(e) => updateArrayField(experience, setExperience, idx, "duration", e.target.value)}
              />
              <textarea
                placeholder="Description"
                value={exp.desc || ""}
                onChange={(e) => updateArrayField(experience, setExperience, idx, "desc", e.target.value)}
              />
              <button className="delete-btn" onClick={() => deleteArrayItem(experience, setExperience, idx)}>
                Delete
              </button>
            </div>
          ))}
          <button className="add" onClick={() => addNewField(setExperience, { role: "", company: "", duration: "", desc: "" })}>
            + Add Experience
          </button>

          {/* Projects */}
          <h3>Projects</h3>
          {projects.map((proj, idx) => (
            <div key={idx} className="dynamic-field">
              <input
                placeholder="Project Title"
                value={proj.title || ""}
                onChange={(e) => updateArrayField(projects, setProjects, idx, "title", e.target.value)}
              />
              <textarea
                placeholder="Description"
                value={proj.desc || ""}
                onChange={(e) => updateArrayField(projects, setProjects, idx, "desc", e.target.value)}
              />
              <button className="delete-btn" onClick={() => deleteArrayItem(projects, setProjects, idx)}>Delete</button>
            </div>
          ))}
          <button className="add" onClick={() => addNewField(setProjects, { title: "", desc: "" })}>+ Add Project</button>

          {/* Education */}
          <h3>Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="dynamic-field">
              <input
                placeholder="Degree"
                value={edu.degree || ""}
                onChange={(e) => updateArrayField(education, setEducation, idx, "degree", e.target.value)}
              />
              <input
                placeholder="Institution"
                value={edu.institution || ""}
                onChange={(e) => updateArrayField(education, setEducation, idx, "institution", e.target.value)}
              />
              <input
                placeholder="Year"
                value={edu.year || ""}
                onChange={(e) => updateArrayField(education, setEducation, idx, "year", e.target.value)}
              />
              <button className="delete-btn" onClick={() => deleteArrayItem(education, setEducation, idx)}>Delete</button>
            </div>
          ))}
          <button className="add" onClick={() => addNewField(setEducation, { degree: "", institution: "", year: "" })}>+ Add Education</button>

           {!isMobile && (<>
<button className="download-btn no-print" onClick={handleDownload}>
Download PDF
</button>
<button className="download-btn" onClick={handleCreatePortfolio}>
Create Portfolio Link
</button></>
)}
          {isMobile && (
  <button
    className="download-btn no-print"
    onClick={() => setShowPreview(true)}
  >
    Preview Resume
  </button>
)}
        </div>)}
{(!isMobile || !showPreview) && (
  <>
<div className="template-info-section">
  <h2>About This Resume Template</h2>

  <div className="template-info-grid">

    <div className="info-card">
      <h3>Template Name</h3>
      <p>Premium Fresher Resume</p>
    </div>

    <div className="info-card">
      <h3>Created By</h3>
      <div style={{display:"flex"}}>
        <img
          src={menuIcon}
          alt="creator"
          style={{height:"50px", width:"50px"}}
        />
        <p>@ElevateMe</p>
      </div>
    </div>

    <div className="info-card">
      <h3>Template Author</h3>
      <p>Designed by</p>

      <div style={{display:"flex", paddingLeft:"20px"}}>
        <img
          src={menuIcon1}
          alt="author"
          style={{
            height:"50px",
            width:"50px",
            borderRadius:"20px"
          }}
        />

        <a
          href="https://yaganti-spandana.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color:"rgb(26, 116, 206)",
            marginTop:"15px"
          }}
        >
          SPANDANA YAGANTI
        </a>
      </div>
    </div>

    <div className="info-card">
      <h3>Version</h3>
      <p>Version 1.0</p>
    </div>

    <div className="info-card">
      <h3>Template Language</h3>
      <p>English</p>
    </div>

    <div className="info-card">
      <h3>Category</h3>
      <p>Premium Fresher / Graduate Resume</p>
    </div>

    <div className="info-card">
      <h3>Best For</h3>
      <p>
        Campus Placements, Internships, Graduate Hiring,
        Entry-Level Professional Roles
      </p>
    </div>

    <div className="info-card">
      <h3>Design Style</h3>
      <p>
        Premium, Executive, Modern, Corporate Design
      </p>
    </div>

    <div className="info-card">
      <h3>ATS Friendly</h3>
      <p>
        Yes ✓ Optimized for Applicant Tracking Systems
      </p>
    </div>

    <div className="info-card">
      <h3>Profile Features</h3>
      <p>
        Professional Photo, Premium Header,
        Contact Information, Personal Branding
      </p>
    </div>

    <div className="info-card">
      <h3>Sections Included</h3>
      <p>
        Summary, Education, Projects, Internships,
        Skills, Languages, Tools, Contact Details
      </p>
    </div>

    <div className="info-card">
      <h3>Technical Sections</h3>
      <p>
        Skills, Tools, Languages, Projects,
        Internship Highlights
      </p>
    </div>

    <div className="info-card">
      <h3>Page Format</h3>
      <p>A4 • One Page / Multi Page Support</p>
    </div>

    <div className="info-card">
      <h3>Download Format</h3>
      <p>PDF Export Available</p>
    </div>

    <div className="info-card">
      <h3>Customization</h3>
      <p>
        Upload Profile Photo, Edit Content,
        Add Sections, Personalize Skills
      </p>
    </div>

    <div className="info-card">
      <h3>Ideal Roles</h3>
      <p>
        Software Engineer, Frontend Developer,
        Backend Developer, Data Analyst,
        Product Associate
      </p>
    </div>

    <div className="info-card">
      <h3>Portfolio Builder</h3>
      <p>
        Create an online professional portfolio
        directly from your resume.
      </p>
    </div>

    <div className="info-card">
      <h3>Portfolio Features</h3>
      <p>
        Showcase projects, education, internships,
        technical skills, and achievements online.
      </p>
    </div>

    <div className="info-card">
      <h3>Share Portfolio</h3>
      <p>
        Generate a unique shareable portfolio link
        for recruiters and hiring managers.
      </p>
    </div>

    <div className="info-card">
      <h3>Portfolio Compatibility</h3>
      <p>
        Mobile Friendly • Desktop Friendly • Share Anywhere
      </p>
    </div>

    <div className="info-card">
      <h3>Recruiter Benefits</h3>
      <p>
        Helps recruiters quickly review projects,
        internship experience, tools, and skills.
      </p>
    </div>

    <div className="info-card">
      <h3>Last Updated</h3>
      <p>May 2026</p>
    </div>

    <div className="info-card">
      <h3>Tags</h3>
      <p>
        Premium Resume, Fresher Resume,
        Graduate Resume, ATS Resume,
        Campus Placement
      </p>
    </div>

  </div>
</div>
</>
)}</div>
        {/* Preview */}
        {(!isMobile || (isMobile && showPreview)) && (
        <div className="editor-preview-wrapper">
          {/* hidden measure */}
          <div className="resume-measure" ref={measureRef}>
            <div className="resume-content">
              <ResumeInner />
            </div>
          </div>

          {/* visible pages */}
          <div className="resume-pages" ref={resumeRef}>
  {pages.map((pageSections, pageIndex) => (
    <div key={pageIndex} className="premiumfresher_pdf-page">
      <div className="resume-content">
        <main className="premiumfresher_modern-left6">
          {pageSections.filter(s => s.classList.contains('premiumfresher_section-block')).map((section, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: section.outerHTML }} />
          ))}
        </main>
      </div>
    </div>
  ))}
<br></br>
{isMobile && (
<>
<button
className="download-btn"
style={{marginTop: "2px", width: "100%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
onClick={handleDownload}
>
Download PDF
</button>
<button className="download-btn" 
onClick={handleCreatePortfolio}
style={{marginTop: "2px", width: "100%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
>
Create Portfolio Link
</button>
<button
className="download-btn"
style={{marginTop: "2px", width: "90%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
onClick={()=>setShowPreview(false)}
>
Back To Editor
</button>
</>
)}
</div>
</div>

)}
        </div>
      </div>
      <Footer /></>
  );
};

export default PremiumfresherResumeEditor;