import React, { useState, useRef, useEffect,useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/HeadingHighlitghtEditor.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const A4_HEIGHT_PX = 842; // correct preview height
const BorderHighlightEditor = () => {
  const templateId = "border_highlight";
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

  const [common, setCommon] = useState({ ...template.common,
    contact: template.common.contact || {
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  },
  name: template.common.name || "",
  skills: template.common.skills || [],});
  const [experience, setExperience] = useState([...template.experience || []]);
  const [education, setEducation] = useState([...template.education || []]);
  const [projects, setProjects] = useState([...template.projects || []]);
  const [certifications, setCertifications] = useState([...template.certifications || []]);

  const resumeRef = useRef(null);
  const measureRef = useRef(null);
  const [pages, setPages] = useState([]);

  // =========================
  // PAGE SPLIT
  // =========================
const PAGE_PADDING = 56;   // 28 top + 28 bottom
const SAFE_BUFFER = 40;    // ⭐ increased for safety

const USABLE_PAGE_HEIGHT =
  A4_HEIGHT_PX - PAGE_PADDING - SAFE_BUFFER;
const splitIntoPages = useCallback((container) => {
  if (!container) return [];

  const sections = Array.from(
    container.querySelectorAll(".header-block1, .section-block1,.section-block12")
  );

 const pages = [];
  let currentPage = [];
  let currentHeight = 0;

  sections.forEach((section) => {
    const height = Math.ceil(section.offsetHeight);

    if (height >= USABLE_PAGE_HEIGHT) {
      if (currentPage.length) {
        pages.push([...currentPage]);
        currentPage = [];
        currentHeight = 0;
      }

      pages.push([section]);
      return;
    }

    if (currentHeight + height > USABLE_PAGE_HEIGHT) {
      pages.push([...currentPage]);
      currentPage = [];
      currentHeight = 0;
    }

    currentPage.push(section);
    currentHeight += height;
  });

  if (currentPage.length) pages.push(currentPage);
  if (!pages.length && sections.length) pages.push(sections);

  return pages;
}, [USABLE_PAGE_HEIGHT]);
 useEffect(() => {
  if (!measureRef.current) return;

  const raf = requestAnimationFrame(() => {
    const calculated = splitIntoPages(measureRef.current);
    setPages(calculated);
  });

  return () => cancelAnimationFrame(raf);
}, [common, experience, education, projects, certifications,showPreview,splitIntoPages  ]);


  // =========================
  // PDF DOWNLOAD
  // =========================
   const handleDownload = async () => {
    if (!resumeRef.current) return;
  
    const pages = resumeRef.current.querySelectorAll(".pdf-page1");
  
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
  // HELPERS
  // =========================
  const updateArrayField = (array, setArray, index, field, value) => {
    const updated = [...array];
    updated[index][field] = value;
    setArray(updated);
  };

  const addNewField = (setArray, defaultObj) => {
    setArray((prev) => [...prev, defaultObj]);
  };

  const deleteArrayItem = (array, setArray, index) => {
    setArray(array.filter((_, i) => i !== index));
  };
  
  // =========================
  // CONTENT
  // =========================
  const ResumeInner = () => (
    <>
      <div className="header-block1">
      <h1 className="heading1">{common.name}</h1>
      <h2 className="subheading1">{common.title}</h2>

      <div className="contact1">
        <div className="con"><h3>Email:</h3><p>{common.contact?.email}</p></div> <br></br>
        <div className="con"><h3>phone:</h3><p>{common.contact?.phone}</p></div> <br></br>{" "}
        <div className="con"><h3>LinkedIn:</h3><p>{common.contact?.linkedin}</p></div> <br></br>
        <div className="con"><h3>Github: </h3><p>{common.contact?.github}</p></div>
      </div>
    </div>

      {common.summary && (
        <section className="section-block1">
          <h3 className="section-heading1">Professional Summary</h3>
          <p className="summary">{common.summary}</p>
        </section>
      )}

      {common.skills?.length > 0 && (
        <section className="section-block1">
          <h3 className="section-heading1">Skills</h3>
          {common.skills.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <p>{"=>"}</p> <div className="skill-gap">{skill}</div>
            </div>
          ))}
        </section>
      )}
      {education?.length > 0 && (
        <section className="section-block1">
          <h3 className="section-heading1">Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="pdf-section">
              <div className="deg2">
              {edu.degree} </div> 
              <div className="ins2">{edu.institution}</div> 
              <div className="year2"> ({edu.year})</div>
            </div>
          ))}
        </section>
      )}
      {experience?.length > 0 && (
        <section className="section-block1">
          <h3 className="section-heading1">Work Experience</h3>
          {experience.map((exp, idx) => (
            <div key={idx} className="pdf-section12">
              <div className="ed3">
              <strong className="deg3">{exp.role}</strong> @<strong className="ins3"> {exp.company}</strong><strong className="year3">({exp.duration})</strong></div>
              <p>{exp.desc}</p>
            </div>
          ))}
        </section>
      )}

      

      {projects?.length > 0 && (
        <section className="section-block1">
          <h3 className="section-heading1">Projects</h3>
          {projects.map((proj, idx) => (
            <div key={idx} className="pdf-section12">
              <strong>{proj.title}</strong>
              <p>{proj.desc}</p>
            </div>
          ))}
        </section>
      )}

      {certifications?.length > 0 && (
        <section className="section-block1">
          <h3 className="section-heading1">Certifications</h3>
          {certifications.map((cert, idx) => (
            <div key={idx} className="pdf-section13">
              {"=>"}{cert.name}
            </div>
          ))}
        </section>
      )}
    </>
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

window.open(`/portfolio/border/${portfolioId}`, "_blank");
};
  // =========================
  // JSX
  // =========================
  return (
    <><Navbar />
    <div className="app-container">

      <div className="editor-container">
        {(!isMobile || !showPreview) && (
        <div className="editor-sidebar">
          <h2>Border Hightlighted Editor</h2>

          <label>Full Name</label>
          <input
            value={common.name}
            onChange={(e) =>
              setCommon({ ...common, name: e.target.value })
            }
          />

          <label>Title</label>
          <input
            value={common.title}
            onChange={(e) =>
              setCommon({ ...common, title: e.target.value })
            }
          />
          <h3>Contact Details</h3>

<label>Email</label>
<input
  value={common.contact?.email || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      contact: { ...common.contact, email: e.target.value },
    })
  }
/>

<label>Phone</label>
<input
  value={common.contact?.phone || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      contact: { ...common.contact, phone: e.target.value },
    })
  }
/>

<label>LinkedIn</label>
<input
  value={common.contact?.linkedin || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      contact: { ...common.contact, linkedin: e.target.value },
    })
  }
/>

<label>GitHub</label>
<input
  value={common.contact?.github || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      contact: { ...common.contact, github: e.target.value },
    })
  }
/>

          <label>Professional Summary</label>
          <textarea
            value={common.summary}
            onChange={(e) =>
              setCommon({ ...common, summary: e.target.value })
            }
          />

          <h3>Skills</h3>
<div className="skillsfield">
{common.skills?.map((skill, idx) => (
  <div key={idx} className="dynamic-field1">
    <div>
    <input
      placeholder="Skill"
      value={skill} className="input1"
      onChange={(e) => {
        const updated = [...common.skills];
        updated[idx] = e.target.value;
        setCommon({ ...common, skills: updated });
      }}
    /><br></br>
    <button
      className="delete-btn1"
      onClick={() => {
        const updated = common.skills.filter((_, i) => i !== idx);
        setCommon({ ...common, skills: updated });
      }}
    >
      Delete
    </button></div>
  </div>
))}</div>

<button
  className="add"
  onClick={() =>
    setCommon({
      ...common,
      skills: [...(common.skills || []), ""],
    })
  }
>
  + Add Skill
</button>
          {/* Experience */} 
          <h3>Work Experience</h3> 
          {experience.map((exp, idx) => ( 
            <div key={idx} className="dynamic-field"> 
            <input placeholder="Role" value={exp.role} 
            onChange={e => 
              updateArrayField(experience, setExperience, idx, "role", e.target.value)} /> 
              <input placeholder="Company" value={exp.company}
              onChange={e => updateArrayField(experience, setExperience, idx, "company", e.target.value)} /> 
              <input placeholder="Duration" value={exp.duration} 
              onChange={e => updateArrayField(experience, setExperience, idx, "duration", e.target.value)} /> 
              <textarea placeholder="Description" value={exp.desc} 
              onChange={e => updateArrayField(experience, setExperience, idx, "desc", e.target.value)} /> 
              <button className="delete-btn" onClick={() => deleteArrayItem(experience, setExperience, idx)}>Delete</button> </div> ))} 
              <button className="add" onClick={() => addNewField(setExperience, { role: "", company: "", duration: "", desc: "" })}>+ Add Experience</button> 
              {/* Education */} 
              <h3>Education</h3> 
              {education.map((edu, idx) => ( 
                <div key={idx} className="dynamic-field"> 
                <input placeholder="Degree" value={edu.degree} 
                onChange={e => updateArrayField(education, setEducation, idx, "degree", e.target.value)} /> 
                <input placeholder="Institution" value={edu.institution} 
                onChange={e => updateArrayField(education, setEducation, idx, "institution", e.target.value)} /> 
                <input placeholder="Year" value={edu.year} 
                onChange={e => updateArrayField(education, setEducation, idx, "year", e.target.value)} /> 
                <button className="delete-btn" 
                onClick={() => deleteArrayItem(education, setEducation, idx)}>Delete</button> </div> ))} 
                <button className="add" onClick={() => addNewField(setEducation, { degree: "", institution: "", year: "" })}>+ Add Education</button> 
                {/* Projects */} 
                <h3>Projects</h3> 
                {projects.map((proj, idx) => ( 
                  <div key={idx} className="dynamic-field"> 
                  <input placeholder="Project Title" value={proj.title} 
                  onChange={e => updateArrayField(projects, setProjects, idx, "title", e.target.value)} /> 
                  <textarea placeholder="Description" value={proj.desc} 
                  onChange={e => updateArrayField(projects, setProjects, idx, "desc", e.target.value)} /> 
                  <button className="delete-btn" onClick={() => deleteArrayItem(projects, setProjects, idx)}>Delete</button> </div> ))} 
                  <button className="add" onClick={() => addNewField(setProjects, { title: "", desc: "" })}>+ Add Project</button> 
                  {/* Certifications */} 
                  <h3>Certifications</h3> 
                  {certifications.map((cert, idx) => ( 
                    <div key={idx} className="dynamic-field"> 
                    <input placeholder="Certification" value={cert.name || ""} 
                    onChange={e => updateArrayField(certifications, setCertifications, idx, "name", e.target.value)} /> 
                    <button className="delete-btn" 
                    onClick={() => deleteArrayItem(certifications, setCertifications, idx)}>Delete</button> 
                    </div> ))} 
                    <button className="add" onClick={() => addNewField(setCertifications, { name: "" })}>+ Add Certification</button>

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

        {/* RIGHT — PREVIEW */}
        {(!isMobile || (isMobile && showPreview)) && (
<div className="editor-preview-wrapper">

{/* MOBILE BACK BUTTON */}



{/* hidden measure */}
<div className="resume-measure" ref={measureRef}>
<div className="resume-content">
<ResumeInner />
</div>
</div>

{/* preview pages */}

<div className="resume-pages" ref={resumeRef}>

{pages.length === 0 ? (
<div style={{padding:"20px"}}>Loading preview...</div>
) : (
pages.map((pageSections,pageIndex)=>(
<div key={pageIndex} className="pdf-page1">

<div className="resume-content">
{pageSections.map((section,idx)=>(
<div
key={idx}
dangerouslySetInnerHTML={{
__html:section.outerHTML
}}
/>
))}
</div>

</div>
))
)}


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
style={{marginTop: "2px", width: "90%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
onClick={handleCreatePortfolio}>
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

     <Footer/></>
    
  );
};

export default BorderHighlightEditor;