import React, { useState, useRef, useMemo, useEffect,useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/ModernResumeEditor.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import '../css/ModernResumeEditor.css'

const A4_HEIGHT_PX = 842; // A4 height in px

const ModernResumeEditor = () => {
  const templateId = "modern";
  const template = resumeData[templateId];
  const [showPreview, setShowPreview] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
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
    container.querySelectorAll(".modern-left .section-block")
  );

  const rightSections = Array.from(
    container.querySelectorAll(".modern-right .side-section")
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
  const saved = localStorage.getItem("modernResumeData");
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
    "modernResumeData",
    JSON.stringify({ common, experience, education, projects, certifications })
  );
}, [common, experience, education, projects, certifications]);

  // =========================
  // PDF Download
  // =========================
   const handleDownload = async () => {
    if (!resumeRef.current) return;
  
    const pages = resumeRef.current.querySelectorAll(".pdf-page");
  
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
    <div className="modern-grid">
      <main className="modern-left">

        {/* Summary */}
        <section className="section-block">
          <h3 className="section-title">Summary</h3>
          <p className="body-text">{common.summary}</p>
        </section>

        {/* Experience */}
        {experience.length > 0 && (
          <section className="section-block">
            <h3 className="section-title">Experience</h3>
            {experience.map((exp, i) => (
              <div key={i} className="item-block">
                <div className="exp">
                  <strong>{exp.role}</strong>
                  <div>{exp.company}</div>
                </div>
                <div className="duration">{exp.duration}</div>
                <p className="body-text">{exp.desc}</p>
              </div>
            ))}
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section className="section-block">
            <h3 className="section-title">Projects</h3>
            {projects.map((p, i) => (
              <div key={i} className="item-block">
                <strong>{p.title}</strong>
                <p className="body-text">{p.desc}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section className="section-block">
            <h3 className="section-title">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="item-block">
                <div className="exp">
                  <strong>{edu.degree}</strong>
                  <div>{edu.institution}</div>
                </div>
                <div className="duration">{edu.year}</div>
              </div>
            ))}
          </section>
        )}
      </main>

      <aside className="modern-right">
        <div className="side-section">
    <h1 className="modern-name">{common.name}</h1>
    <h2 className="modern-title">{common.title}</h2>

    <div className="photo-circle">
  {common.photo ? (
    <img
      src={common.photo}
      alt="profile"
      className="profile-img"
    />
  ) : (
    <div className="photo-placeholder">Photo</div>
  )}
</div></div>

        <div className="side-section">
          <h3>Contact</h3>
          <p>📩 {common.contact?.email}</p>
          <p>📞 {common.contact?.phone}</p>
          <p>🖇️ {common.contact?.linkedin}</p>
          <p>🌐 {common.contact?.address}</p>
        </div>

        {hasSkills && (
          <div className="side-section">
            <h3>Skills</h3>
            {parsedCommon.skills.map((s, i) => (
              <p key={i}>{s}</p>
            ))}
          </div>
        )}

        {hasLanguages && (
          <div className="side-section">
            <h3>Languages</h3>
            {parsedCommon.languages.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        )}

        {hasTools && (
          <div className="side-section">
            <h3>Tools</h3>
            {parsedCommon.tools.map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        )}
      </aside>
    </div>
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

window.open(`/portfolio/modern/${portfolioId}`, "_blank");
};
  // =========================
  // Render
  // =========================
  return (
    <><Navbar/>
    <div className="app-container">
      <div className="editor-container">
        {(!isMobile || !showPreview) && (
        <div className="editor-sidebar">
          {/* Sidebar editor content */}
          <h2>Modern Resume Editor</h2>

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
    <div key={pageIndex} className="pdf-page">
      <div className="resume-content modern-grid">
        <main className="modern-left">
          {pageSections.filter(s => s.classList.contains('section-block')).map((section, idx) => (
            <div key={idx} dangerouslySetInnerHTML={{ __html: section.outerHTML }} />
          ))}
        </main>
        <aside className="modern-right">
          {pageSections.filter(s => s.classList.contains('side-section')).map((section, idx) => (
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

export default ModernResumeEditor;