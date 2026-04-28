import React, { useState, useRef, useEffect,useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/HeadinghighlightprofessionalResumeEditor.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import ReactGA from 'react-ga4';
const A4_HEIGHT_PX = 842; // correct preview height
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
const HeadinghighlightprofessionalResumeEditor = () => {
  const templateId = "headinghighlightprofessional";
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
  const [achievements, setAchievements] = useState([...template.achievements || []]);
  const [languages, setLanguages] = useState([...template.languages || []]);
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
    container.querySelectorAll(".headinghighlightprofessional_header-block, .section-block1,.section-block12")
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
}, [common, experience, education, projects,achievements,languages, certifications,showPreview,splitIntoPages  ]);


  // =========================
  // PDF DOWNLOAD
  // =========================
   const handleDownload = async () => {
    if (!resumeRef.current) return;
  
    const pages = resumeRef.current.querySelectorAll(".headinghighlightprofeffional_pdf-page");
  
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
      <div className="headinghighlightprofessional_header-block">
      <h1 className="headinghighlightprofessional_heading">{common.name}</h1>
      <h2 className="headinghighlightprofessional_subheading">{common.title}</h2>
      <div className="contact1">
        <p style={{marginTop:"0px",marginBottom:"0px",color:"rgb(249, 252, 252)"}}>Email:{common.contact?.email}</p><br></br>
        <p style={{marginTop:"0px",marginBottom:"0px",color:"rgb(249, 252, 252)"}}>phone:{common.contact?.phone}</p><br></br>{" "}
        <p style={{marginTop:"0px",marginBottom:"0px",color:"rgb(249, 252, 252)"}}>LinkedIn:{common.contact?.linkedin}</p> <br></br>
        <p style={{marginTop:"0px",marginBottom:"0px",color:"rgb(249, 252, 252)"}}>Github: {common.contact?.github}</p>
      </div>
    </div>
    <div></div>
      {common.summary && (
        <section className="section-block1">
          <h3 className="headinghighlightprofessional_section-heading1" style={{marginLeft: "35%"}}>Professional Summary</h3>
          <p className="headinghighlightprofessional_summary">{common.summary}</p>
        </section>
      )}

      {common.skills?.length > 0 && (
        <section className="section-block1">
          <h3 className="headinghighlightprofessional_section-heading1" style={{marginLeft: "45%"}}>Skills</h3>
          {common.skills.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <p style={{marginTop:"-3px"}}>{"=>"}</p> <div className="headinghighlightprofessional_skill-gap">{skill}</div>
            </div>
          ))}
        </section>
      )}
      {education?.length > 0 && (
        <section className="section-block1">
          <h3 className="headinghighlightprofessional_section-heading1" style={{marginLeft: "44%",marginBottom:"0px"}}>Education</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="pdf-section">
              <h3 className="headinghighlightprofessional_deg2">
              {edu.degree} </h3> 
              <div className="headinghighlightprofessional_ins2">{edu.institution} - {edu.year}</div>
            </div>
          ))}
        </section>
      )}
      {experience?.length > 0 && (
        <section className="section-block1">
          <h3 className="headinghighlightprofessional_section-heading1" style={{marginLeft: "40%",marginBottom:"10px"}}>Work Experience</h3>
          {experience.map((exp, idx) => (
            <div key={idx} className="headinghighlightprofessional_pdf-section12">
              <div className="ed3">
              <strong className="headinghighlightprofessional_deg2" style={{width:"40%"}}>{exp.role}</strong> @<strong className="headinghighlightprofessional_deg2" style={{width:"30%"}}> {exp.company}</strong><strong className="headinghighlightprofessional_deg2">({exp.duration})</strong></div>
              <p style={{fontSize:"10px",marginBottom:"0.2px solid rgb(10, 88, 94)"}}>{exp.desc}</p>
            </div>
          ))}
        </section>
      )}

      

      {projects?.length > 0 && (
        <section className="section-block1">
          <h3 className="headinghighlightprofessional_section-heading1" style={{marginLeft: "43%"}}>Projects</h3>
          {projects.map((proj, idx) => (
            <div key={idx} className="headinghighlightprofessional_pdf-section12">
              <strong style={{fontSize:"14px"}}>{proj.title}</strong>
              <p style={{fontSize:"12px",marginTop:"0px"}}>{proj.desc}</p>
              <p style={{fontSize:"12px",marginTop:"-5px"}}>Technologies Used-{proj.tech}</p>
            </div>
          ))}
        </section>
      )}

      {certifications?.length > 0 && (
        <section className="section-block1">
          <h3 className="headinghighlightprofessional_section-heading1" style={{marginLeft: "40%"}}>Certifications</h3>
          {certifications.map((cert, idx) => (
            <div key={idx} className="pdf-section13">
              {"=>"}{cert.name}-{cert.issuer}
            </div>
          ))}
        </section>
      )}
      {achievements?.length > 0 && (
      <section className="section-block1">
        <h3 className="headinghighlightprofessional_section-heading1" style={{marginLeft: "40%"}}>Achievements</h3>
        <ul className="listcareer">
        {achievements.map((skill, idx) => (
            <div key={idx} className="pdf-section13" style={{fontSize:"12px"}}>
              <li className="skill-gapcareer"> <div>{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}
    {languages?.length > 0 && (
      <section className="section-block1">
        <h3 className="headinghighlightprofessional_section-heading1" style={{marginLeft: "40%"}}>Languages</h3>
        <ul className="listcareer">
        {languages.map((skill, idx) => (
            <div key={idx} className="pdf-section13" style={{fontSize:"12px"}}>
              <li className="skill-gapcareer"> <div>{skill}</div></li>
            </div>
          ))}</ul>
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
    certifications,
    achievements,
    languages
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

window.open(`/portfolio/headinghighlightprofessional/${portfolioId}`, "_blank");
ReactGA.event({
    category: "Portfolio",
    action: "Create Portfolio",
    label: portfolioId
  });
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
          <h2 style={{fontSize:"15px"}}>Heading Hightlight Professional Resume Editor</h2>

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
            
                {/* Projects */} 
                <h3>Projects</h3> 
                {projects.map((proj, idx) => ( 
                  <div key={idx} className="dynamic-field"> 
                  <input placeholder="Project Title" value={proj.title} 
                  onChange={e => updateArrayField(projects, setProjects, idx, "title", e.target.value)} /> 
                  <textarea placeholder="Description" value={proj.desc} 
                  onChange={e => updateArrayField(projects, setProjects, idx, "desc", e.target.value)} /> 
                  <textarea placeholder="Technologies" value={proj.tech} 
                  onChange={e => updateArrayField(projects, setProjects, idx, "tech", e.target.value)} /> 
                  <button className="delete-btn" onClick={() => deleteArrayItem(projects, setProjects, idx)}>Delete</button> </div> ))} 
                  <button className="add" onClick={() => addNewField(setProjects, { title: "", desc: "",tech:"" })}>+ Add Project</button> 
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
<h3>Achievements</h3>
{achievements.map((item, idx) => (
  <div key={idx} className="dynamic-field">
    <input
      placeholder="Achievement"
      value={item}
      onChange={(e) => {
        const updated = [...achievements];
        updated[idx] = e.target.value;
        setAchievements(updated);
      }}
    />
    <button
      className="delete-btn"
      onClick={() => deleteArrayItem(achievements, setAchievements, idx)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() => setAchievements([...achievements, ""])}
>
  + Add Achievement
</button>
<h3>Languages</h3>
{languages.map((item, idx) => (
  <div key={idx} className="dynamic-field">
    <input
      placeholder="Language"
      value={item}
      onChange={(e) => {
        const updated = [...languages];
        updated[idx] = e.target.value;
        setLanguages(updated);
      }}
    />
    <button
      className="delete-btn"
      onClick={() => deleteArrayItem(languages, setLanguages, idx)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() => setLanguages([...languages, ""])}
>
  + Add Language
</button>
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

<div
  className="resume-pages"
  ref={resumeRef}
>

{pages.length === 0 ? (
<div style={{padding:"20px"}}>Loading preview...</div>
) : (
pages.map((pageSections,pageIndex)=>(
<div key={pageIndex} className="headinghighlightprofeffional_pdf-page">

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

export default HeadinghighlightprofessionalResumeEditor;