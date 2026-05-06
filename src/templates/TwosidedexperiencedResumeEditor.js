import React, { useState, useRef, useEffect,useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/TwosidedexperiencedResumeEditor.css";
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
const TwosidedexperiencedResumeEditor = () => {
  const templateId = "twosidedexperienced";
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
     name: template.common.name || "",
     title: template.common.title || "",
     email: template.common.email || "",
     phone: template.common.phone || "",
     linkedin: template.common.linkedin || "",
     github: template.common.github || "",
     portfolio: template.common.portfolio || "",
     location: template.common.location|| "",
     summary: template.common.summary || ""
   });
 
   const [experience, setExperience] = useState(template.experience || []);
   const [education, setEducation] = useState(template.education || []);
   const [projects, setProjects] = useState(template.projects || []);
   const [skills, setSkills] = useState(template.skills || []);
   const [certifications, setCertifications] = useState(template.certifications || []);
 
   const [achievements, setAchievements] = useState(template.achievements || []);
 const [languages, setLanguages] = useState(template.languages || []);
 const [interests, setInterests] = useState(template.interests || []);

  const resumeRef = useRef(null);
  const measureRef = useRef(null);
  const [pages, setPages] = useState([]);


  // =========================
  // PAGE SPLIT
  // =========================
  const PAGE_PADDING = 56;   // 28 top + 28 bottom
  const SAFE_BUFFER = 40;    // extra safety
  const USABLE_PAGE_HEIGHT = A4_HEIGHT_PX - PAGE_PADDING - SAFE_BUFFER;

const splitIntoPages = useCallback((container) => {
  if (!container) return [];

  const leftSections = Array.from(
    container.querySelectorAll(".twosidedexperienced_modernleft6 .section-block")
  );

  const rightSections = Array.from(
    container.querySelectorAll(".twosidedexperienced_modern-right6 .twosidedexperienced_side-section6")
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
  const rightPages = split(rightSections);

  const totalPages = Math.max(leftPages.length, rightPages.length);

  const finalPages = [];

  for (let i = 0; i < totalPages; i++) {
    finalPages.push([
      ...(leftPages[i] || []),
      ...(rightPages[i] || [])
    ]);
  }

  return finalPages;
}, [USABLE_PAGE_HEIGHT]);


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
  }, [
    common,
  experience,
  education,
  projects,
  skills,
  certifications,
  achievements,
  languages,
  interests,
  showPreview,splitIntoPages
  ]);

  // =========================
  // Load saved resume
  // =========================
  useEffect(() => {
  const saved = localStorage.getItem("twosidedexperienced");
  if (saved) {
    const data = JSON.parse(saved);
    setCommon(data.common);
    setExperience(data.experience);
    setEducation(data.education);
    setProjects(data.projects);
    setCertifications(data.certifications);
    setSkills(data.skills);
    setAchievements(data.achievements);
    setLanguages(data.languages);
    setInterests(data.interests);
  }
}, []);

// Save changes whenever common/experience/... updates
useEffect(() => {
  localStorage.setItem(
    "twosidedexperienced",
    JSON.stringify({ common, experience, education, projects, certifications, skills, achievements, languages, interests })
  );
}, [common, experience, education, projects, certifications, skills, achievements, languages, interests]);

  // =========================
  // PDF Download
  // =========================
   const handleDownload = async () => {
    if (!resumeRef.current) return;
  
    const pages = resumeRef.current.querySelectorAll(".twosidedexperienced_pdf-page6");
  
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
    <div className="twosidedexperienced_modern-grid6">
      <main className="twosidedexperienced_modernleft6">
        <section className="section-block">
        <div className="flex-black">
            <h1 className="twosided_modern-name6">{common.name}{ }</h1>
    <h1 className="twosided_modern-title6" style={{color:"rgb(46, 159, 157)"}}>{common.title}</h1></div>
    </section>
        <section className="section-block">
          <p style={{fontSize:"15px",marginTop:"0px",marginBottom:"0px",textAlign:"center"}}>📩 {common.email}</p>
          <p style={{fontSize:"15px",marginTop:"0px",marginBottom:"0px",textAlign:"center"}}>📞 {common.phone}</p>
          <p style={{fontSize:"15px",marginTop:"0px",marginBottom:"0px",textAlign:"center"}}>🖇️ {common.linkedin}</p>
          <p style={{fontSize:"15px",marginTop:"0px",marginBottom:"0px",textAlign:"center"}}>🌐 {common.github}</p>
          <p style={{fontSize:"15px",marginTop:"0px",marginBottom:"0px",textAlign:"center"}}>📍 {common.location}</p>
          <p style={{fontSize:"15px",marginTop:"0px",marginBottom:"0px",textAlign:"center"}}>🌐 {common.portfolio}</p>
        </section>
        {/* Projects */}
        {projects.length > 0 && (
          <section className="section-block">
            <h3 className="twosidedexperienced_section-title6">Projects</h3>
            {projects.map((p, i) => (
              <div key={i} className="item-block" style={{textAlign:"center"}}>
                <strong style={{fontSize:"17px"}}>{p.title}</strong>
                <div style={{fontSize:"15px"}}>{p.tech}</div>
                <div style={{fontSize:"15px"}}>{p.link}</div>
                <p className="body-text" style={{fontSize:"13px"}}>{p.desc}</p>
              </div>
            ))}
          </section>
        )}
        {/* Education */}
        {education.length > 0 && (
          <section className="section-block" style={{textAlign:"center"}}>
            <h3 className="twosidedexperienced_section-title6">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="item-block" style={{marginBottom:"20px"}}>
                  <strong style={{fontSize:"15px",marginBottom:"3px dotted rgb(105, 34, 34)"}}>{edu.degree}</strong>
                  <div  style={{fontSize:"11px"}}>{edu.institution}</div>
                <div   style={{fontSize:"14px",color:"rgb(46, 159, 157)",marginTop:"0px",marginBottom:"0px"}}className="duration6">{edu.year}</div>
                <div   style={{fontSize:"14px",color:"rgb(46, 159, 157)",marginTop:"0px",marginBottom:"0px"}}className="duration6">{edu.cgpa}</div>
                <div   style={{fontSize:"15px",color:"rgb(46, 159, 157)",marginTop:"0px",marginBottom:"0px"}}className="duration6">{edu.details}</div>
              </div>
            ))}
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="section-block">
            <h3 className="twosidedexperienced_section-title6">Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="item-block" style={{textAlign:"center"}}>
                  <strong>{exp.role}</strong>
                  <div style={{display:"flex", fontSize:"13px"}}>
  <p style={{marginTop:"0px",marginRight:"5px"}}>{exp.company} </p> | <p style={{marginTop:"0px",marginLeft:"5px"}}> {exp.location}</p>
</div>
                <div className="duration6" style={{color:"rgb(46, 159, 157)",fontSize:"15px"}}>{exp.duration}</div>
                <p className="body-text" style={{fontSize:"14px"}}>{exp.desc}</p>
              </div>
            ))}
          </section>
        )}
      </main>

      <aside className="twosidedexperienced_modern-right6">
{/* Summary */}
        <section className="twosidedexperienced_side-section6" style={{marginTop:"-20px"}}>
          <h3 className="twosidedexperienced_section-title6">Summary</h3>
          <p className="body-text" style={{fontSize:"13px"}}>{common.summary}</p>
        </section>
        {skills?.length > 0 && (
        <section className="twosidedexperienced_side-section6">
          <h3 className="twosidedexperienced_section-title6">Skills</h3>
          {skills.map((cert, idx) => (
            <div key={idx} style={{fontSize:"13px",marginBottom:"5px",textAlign:"center"}}>{cert}</div>
          ))}
        </section>
        )}
        {certifications?.length > 0 && (
        <section className="twosidedexperienced_side-section6">
          <h3 className="twosidedexperienced_section-title6">Certifications</h3>
          {certifications.map((cert, idx) => (
            <div key={idx} style={{fontSize:"13px",margin:"0px 0px 20px 0px",textAlign:"center"}}>
              {cert}
            </div>
          ))}
        </section>
        )}
        {achievements?.length > 0 && (
  <div className="twosidedexperienced_side-section6">
    <h3 className="twosidedexperienced_section-title6">Achievements</h3>
    {achievements.map((item, i) => (
      <p key={i} style={{fontSize:"15px",margin:"0px 0px 20px 0px",textAlign:"center"}}>• {item}</p>
    ))}
  </div>
)}

{languages?.length > 0 && (
  <div className="twosidedexperienced_side-section6">
    <h3 className="twosidedexperienced_section-title6">Languages</h3>
    {languages.map((item, i) => (
      <p key={i}>{item}</p>
    ))}
  </div>
)}

{interests?.length > 0 && (
  <div className="twosidedexperienced_side-section6">
    <h3 className="twosidedexperienced_section-title6">Interests</h3>
    {interests.map((item, i) => (
      <p key={i}>{item}</p>
    ))}
  </div>
)}
      </aside>
    </div>
  );

  const handleCreatePortfolio = () => {
localStorage.clear()
  const portfolioData = {
    common, 
    experience, 
    education, 
    projects, 
    certifications, 
    skills, 
    achievements, 
    languages, 
    interests 
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

window.open(`/portfolio/twosidedexperienced/${portfolioId}`, "_blank");
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
          <h2>Two sided Basic Resume Editor</h2>

          {/* Basic Info */}
          <label>Name</label>
          <input value={common.name || ""} onChange={(e) => setCommon({ ...common, name: e.target.value })} />
          <label>Title</label>
          <input value={common.title || ""} onChange={(e) => setCommon({ ...common, title: e.target.value })} />
          <label>Summary</label>
          <textarea value={common.summary || ""} onChange={(e) => setCommon({ ...common, summary: e.target.value })} />

          <h3>Skills</h3>

{skills.map((skill, idx) => (
  <div key={idx} className="dynamic-field">
    <input
      placeholder="Skill"
      value={skill || ""}
      onChange={(e) => {
        const updated = [...skills];
        updated[idx] = e.target.value;
        setSkills(updated);
      }}
    />

    <button
      className="delete-btn"
      onClick={() =>
        setSkills(skills.filter((_, i) => i !== idx))
      }
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() => setSkills([...skills, ""])}
>
  + Add Skill
</button>

          {/* Experience */}
          <h3>Experience</h3>
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
                placeholder="Location"
                value={exp.location || ""}
                onChange={(e) =>updateArrayField(experience,setExperience,idx,"location",e.target.value)}
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
          <button className="add" onClick={() => addNewField(setExperience, { role: "", company: "",location: "", duration: "", desc: "" })}>
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
              <input
              placeholder="Tech Stack"
              value={proj.tech || ""}
              onChange={(e) =>updateArrayField(projects,setProjects,idx,"tech",e.target.value)}
              />

              <input
              placeholder="Project Link"
              value={proj.link || ""}
              onChange={(e) =>updateArrayField(projects,setProjects,idx,"link",e.target.value)}
              />
              <textarea
                placeholder="Description"
                value={proj.desc || ""}
                onChange={(e) => updateArrayField(projects, setProjects, idx, "desc", e.target.value)}
              />
              <button className="delete-btn" onClick={() => deleteArrayItem(projects, setProjects, idx)}>Delete</button>
            </div>
          ))}
          <button className="add" onClick={() => addNewField(setProjects, { title: "",tech: "",link: "",desc: "" })}>+ Add Project</button>

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
              <input
                placeholder="CGPA"
                value={edu.cgpa || ""}
                onChange={(e) =>updateArrayField(education,setEducation,idx,"cgpa",e.target.value)}
              />

              <textarea
              placeholder="Details"
              value={edu.details || ""}
              onChange={(e) =>updateArrayField(education,setEducation,idx,"details",e.target.value)}
              />
              <button className="delete-btn" onClick={() => deleteArrayItem(education, setEducation, idx)}>Delete</button>
            </div>
          ))}
          <button className="add" onClick={() => addNewField(setEducation, { degree: "", institution: "", year: "",cgpa: "",details: "" })}>+ Add Education</button>

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
          <p>Two Sided Experienced Resume</p>
        </div>

        <div className="info-card">
          <h3>Created By</h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={menuIcon}
              alt="creator"
              style={{ height: "50px", width: "50px" }}
            />
            <p>@ElevateMe</p>
          </div>
        </div>

        <div className="info-card">
          <h3>Template Author</h3>
          <p>
            Designed by
            <div style={{ display: "flex", paddingLeft: "20px" }}>
              <img
                src={menuIcon1}
                alt="author"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "20px"
                }}
              />
              <a
                href="https://yaganti-spandana.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgb(26, 116, 206)",
                  marginTop: "15px"
                }}
              >
                SPANDANA YAGANTI
              </a>
            </div>
            for experienced professionals.
          </p>
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
          <p>Experienced / Professional / Mid-Senior Level</p>
        </div>

        <div className="info-card">
          <h3>Best For</h3>
          <p>
            Experienced Professionals, Career Growth, Leadership Roles
          </p>
        </div>

        <div className="info-card">
          <h3>Design Style</h3>
          <p>Modern, Two Column, Premium Professional</p>
        </div>

        <div className="info-card">
          <h3>ATS Friendly</h3>
          <p>Yes ✓ Optimized for Applicant Tracking Systems</p>
        </div>

        <div className="info-card">
          <h3>Sections Included</h3>
          <p>
            Profile, Summary, Experience, Projects, Skills, Education,
            Certifications, Achievements, Languages, Interests
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
          <p>Edit content, add sections, create portfolio link</p>
        </div>

        <div className="info-card">
          <h3>Ideal Roles</h3>
          <p>
            Software Engineer, Tech Lead, Product Manager, Data Scientist,
            Consultant
          </p>
        </div>

        <div className="info-card">
          <h3>Portfolio Builder</h3>
          <p>
            Create a professional portfolio website instantly from resume
            data.
          </p>
        </div>

        <div className="info-card">
          <h3>Portfolio Features</h3>
          <p>
            Showcase experience, projects, achievements, certifications,
            and skills online.
          </p>
        </div>

        <div className="info-card">
          <h3>Share Portfolio</h3>
          <p>
            Generate a unique portfolio link and share it with recruiters.
          </p>
        </div>

        <div className="info-card">
          <h3>Portfolio Compatibility</h3>
          <p>Mobile Friendly • Desktop Friendly • Shareable Anywhere</p>
        </div>

        <div className="info-card">
          <h3>Last Updated</h3>
          <p>May 2026</p>
        </div>

        <div className="info-card">
          <h3>Tags</h3>
          <p>
            Experienced Resume, ATS Resume, Professional Resume,
            Leadership Resume
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
    <div key={pageIndex} className="twosidedexperienced_pdf-page6">
      <div className="resume-content twosidedexperienced_modern-grid6">
        <main className="twosidedexperienced_modernleft6">
          {pageSections.filter(s => s.classList.contains('section-block')).map((section, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: section.outerHTML }} />
          ))}
        </main>
        <aside className="twosidedexperienced_modern-right6">
          {pageSections.filter(s => s.classList.contains('twosidedexperienced_side-section6')).map((section, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: section.outerHTML }} />
          ))}
        </aside>
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

export default TwosidedexperiencedResumeEditor;