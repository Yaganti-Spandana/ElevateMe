import React, { useState, useRef, useEffect } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/ExperiencedResumeEditor.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const ExperiencedResumeEditor = () => {

  const templateId = "experienced";
  const template = resumeData[templateId];

  const A4_HEIGHT_PX = 842; // correct preview height
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

  const measureRef = useRef(null);
  const resumeRef = useRef(null);
  const [pages, setPages] = useState([]);

  // ======================
  // PAGE SPLITTING
  // ======================
const PAGE_PADDING = 56;   // 28 top + 28 bottom
const SAFE_BUFFER = 40;    // ⭐ increased for safety

const USABLE_PAGE_HEIGHT =
  A4_HEIGHT_PX - PAGE_PADDING - SAFE_BUFFER;
  const splitIntoPages = (container) => {

    const sections = Array.from(
      container.querySelectorAll(".header-block3, .section-block")
    );

     const pages = [];
  let currentPage = [];
  let currentHeight = 0;

  sections.forEach((section) => {
    const height = Math.ceil(section.offsetHeight);

    // 🔴 If single section taller than page
    if (height >= USABLE_PAGE_HEIGHT) {
      if (currentPage.length) {
        pages.push([...currentPage]);
        currentPage = [];
        currentHeight = 0;
      }

      pages.push([section]);
      return;
    }

    // 🟢 SMART OVERFLOW CHECK
    if (currentHeight + height > USABLE_PAGE_HEIGHT){
      pages.push([...currentPage]);
      currentPage = [];
      currentHeight = 0;
    }

    currentPage.push(section);
    currentHeight += height;
  });

  if (currentPage.length) {
    pages.push(currentPage);
  }

  // safety fallback
  if (!pages.length && sections.length) {
    pages.push(sections);
  }

  return pages;
};

  useEffect(() => {

    if (!measureRef.current) return;

    const raf = requestAnimationFrame(() => {
      const result = splitIntoPages(measureRef.current);
      setPages(result);
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
  showPreview
]);

  // ======================
  // PDF DOWNLOAD
  // ======================

  const handleDownload = async () => {
  if (!resumeRef.current) return;

  const pages = resumeRef.current.querySelectorAll(".pdf-page2");

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
  // ======================
  // HELPERS
  // ======================

  const updateArrayField = (array, setArray, index, field, value) => {

    const updated = [...array];
    updated[index][field] = value;
    setArray(updated);

  };

  const addField = (setArray, obj) => {
    setArray(prev => [...prev, obj]);
  };

  const deleteArrayItem = (array, setArray, index) => {
    setArray(array.filter((_, i) => i !== index));
  };

  // ======================
  // RESUME PREVIEW
  // ======================

  const ResumeInner = () => (
    <>

      <div className="header-block3">
        <div className="wrap">
        <h1>{common.name}</h1><h3 className="gap3">{common.title}</h3><div className="semi-circle"></div></div>
        <div className="wrap3"><div className="wrap4">
        <p>{common.email}</p>  <p>{common.phone}</p></div>
        <div className="wrap4">
        
          <p>{common.linkedin}</p> <p> {common.github}</p>  </div><div className="wrap4"><p>{common.portfolio}</p>
        
        <p>{common.location}</p></div></div>
        <p>{common.summary}</p>

      </div>

      <div className="section-block">

        <h3>Experience</h3>

        {experience.map((exp, i) => (

          <div key={i}>

            <strong>{exp.role}</strong> — {exp.company}

            <p style={{fontSize:"15px"}}>
              {exp.location} | {exp.startDate} - {exp.endDate}
            </p>

            <p>{exp.desc}</p>

            {exp.teamSize && (
              <p>Team Size: {exp.teamSize}</p>
            )}

            {exp.technologies && (
              <p>Tech: {exp.technologies}</p>
            )}

            {exp.achievements && (
              <p>Achievements: {exp.achievements}</p>
            )}

          </div>

        ))}

      </div>

      <div className="section-block">

        <h3>Education</h3>

        {education.map((edu, i) => (
          <div key={i}>
            <p style={{marginLeft:"5px",fontSize:"20px"}}>{edu.degree}</p><div style={{display:"flex"}}> <p style={{marginLeft:"5px",fontSize:"18px"}}>{edu.institution}</p> -<p style={{textAlign:"right",fontSize:"15px"}}>({edu.year})</p></div>
          </div>
        ))}

      </div>

      <div className="section-block">

        <h3>Projects</h3>

        {projects.map((proj, i) => (
          <div key={i}>
            <strong>{proj.title}</strong>
            <p>{proj.desc}</p>
          </div>
        ))}

      </div>

      <div className="section-block">

        <h3>Skills</h3>
        <p>{skills.join(", ")}</p>

      </div>
      <div className="section-block">

<h3>Achievements</h3>

<ul>
{achievements.map((ach, i) => (
<li key={i}>{ach}</li>
))}
</ul>

</div>
<div className="section-block">

<h3>Languages</h3>

<p>{languages.join(", ")}</p>

</div>
<div className="section-block">

<h3>Interests</h3>

<ul>
{interests.map((ach, i) => (
<li key={i}>{ach}</li>
))}
</ul>

</div>

      <div className="section-block">

        <h3>Certifications</h3>

        <ul>
          {certifications.map((cert, i) => (
            <li key={i}>
              {typeof cert === "object" ? cert.name : cert}
            </li>
          ))}
        </ul>

      </div>

    </>
  );

  const handleCreatePortfolio = () => {

  if (!common.name || common.name.trim() === "") {
    alert("Please enter your name before creating portfolio");
    return;
  }

  const portfolioData = {
    common,
    experience,
    education,
    projects,
    skills,
    certifications,
    achievements,
    languages,
    interests
  };

  const username = common.name
    .toLowerCase()
    .replace(/\s+/g, "");

  const uniqueId = Math.random().toString(36).substring(2,8);

  const portfolioId = username + "-" + uniqueId;

  localStorage.setItem(
    "portfolio_" + portfolioId,
    JSON.stringify(portfolioData)
  );

  window.open(`/portfolio/experienced/${portfolioId}`, "_blank");
};
  return (
<><Navbar/>
    <div className="experienced-editor-container">

      {/* ================= SIDEBAR ================= */}

      {(!isMobile || !showPreview) && (
      <div className="experienced-editor-sidebar"> 
      <h2>Experienced Resume Editor</h2> 
      <label>Name</label> 
      <input value={common.name} 
      onChange={(e) => setCommon({ ...common, name: e.target.value })} /> 
      <label>Title</label>
       <input value={common.title} 
       onChange={(e) => setCommon({ ...common, title: e.target.value })} /> 
       <label>Email</label> 
       <input value={common.email} 
       onChange={(e) => setCommon({ ...common, email: e.target.value })} /> 
       <label>Phone</label> 
       <input value={common.phone} 
       onChange={(e) => setCommon({ ...common, phone: e.target.value })} /> 
       <label>LinkedIn</label> 
       <input value={common.linkedin} 
       onChange={(e) => setCommon({ ...common, linkedin: e.target.value })} />
        <label>GitHub</label> 
        <input value={common.github} 
        onChange={(e) => setCommon({ ...common, github: e.target.value })} /> 
        <label>Portfolio</label> 
        <input value={common.portfolio} 
        onChange={(e) => setCommon({ ...common, portfolio: e.target.value })} /> 
        <label>Address</label> 
        <input value={common.address} 
        onChange={(e) => setCommon({ ...common, address: e.target.value })} /> 
        <label>Professional Summary</label> 
        <textarea value={common.summary} 
        onChange={(e) => setCommon({ ...common, summary: e.target.value })} />
        <h3>Languages</h3>

<input
value={languages.join(", ")}
onChange={(e) =>
setLanguages(e.target.value.split(",").map((l) => l.trim()))
}
/>
         {/* EXPERIENCE */} 
         <h3>Experience</h3> 
         {experience.map((exp, idx) => ( <div key={idx} className="dynamic-field"> 
         <input placeholder="Role" value={exp.role} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "role", e.target.value) } /> 
         <input placeholder="Company" value={exp.company} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "company", e.target.value) } /> 
         <input placeholder="Location" value={exp.location} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "location", e.target.value) } /> 
         <input placeholder="Start Date" value={exp.startDate} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "startDate", e.target.value) } /> 
         <input placeholder="End Date" value={exp.endDate} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "endDate", e.target.value) } /> 
         <input placeholder="Team Size" value={exp.teamSize} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "teamSize", e.target.value) } /> 
         <input placeholder="Technologies (comma separated)" value={exp.technologies} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "technologies", e.target.value) } /> 
         <textarea placeholder="Achievements" value={exp.achievements} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "achievements", e.target.value) } /> 
         <textarea placeholder="Description" value={exp.desc} 
         onChange={(e) => updateArrayField(experience, setExperience, idx, "desc", e.target.value) } /> 
         <button className="delete-btn" 
         onClick={() => deleteArrayItem(experience, setExperience, idx)}>Delete</button> </div> ))} 
         <button onClick={() => addField(setExperience, { role: "", company: "", location: "", startDate: "", endDate: "", teamSize: "", technologies: "", achievements: "", desc: "" }) } className="add" > + Add Experience </button> 
         {/* EDUCATION */} 
         <h3>Education</h3> 
         {education.map((edu, idx) => ( <div key={idx}> 
          <div className="dynamic-field"> 
            <input placeholder="Degree" value={edu.degree} 
            onChange={(e) => updateArrayField(education, setEducation, idx, "degree", e.target.value) } /> 
            <input placeholder="Institution" value={edu.institution} 
            onChange={(e) => updateArrayField(education, setEducation, idx, "institution", e.target.value) } /> 
            <input placeholder="Year" value={edu.year} onChange={(e) => updateArrayField(education, setEducation, idx, "year", e.target.value) } /> 
            <button className="delete-btn" onClick={() => deleteArrayItem(education, setEducation, idx)}>Delete</button> </div> </div> ))} 
            <button className="add" onClick={() => addField(setEducation, { degree: "", institution: "", year: "" })}>+ Add Education</button> 
            {/* PROJECTS */} 
            <h3>Projects</h3> 
            {projects.map((proj, idx) => ( 
              <div className="dynamic-field"> 
              <div key={idx}> <input placeholder="Project Title" value={proj.title} 
              onChange={(e) => updateArrayField(projects, setProjects, idx, "title", e.target.value) } /> 
              <textarea placeholder="Description" value={proj.desc} 
              onChange={(e) => updateArrayField(projects, setProjects, idx, "desc", e.target.value) } /> 
              <button className="delete-btn" onClick={() => deleteArrayItem(projects, setProjects, idx)}>Delete</button> </div> </div> ))}
              <button className="add" onClick={() => addField(setProjects, { title: "", desc: "" })}>+ Add Project</button> 
              {/* SKILLS */} 
              <h3>Skills</h3> 
              <input value={skills.join(", ")} 
              onChange={(e) => setSkills(e.target.value.split(",").map((s) => s.trim())) } /> 


<h3>Interests</h3>

<input
value={interests.join(", ")}
onChange={(e) =>
setInterests(e.target.value.split(",").map((i) => i.trim()))
}
/>
              <h3>Achievements</h3>

{achievements.map((ach, idx) => (
<div className="dynamic-field" key={idx}>

<input
value={ach}
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
onClick={() => addField(setAchievements, "")}
>
+ Add Achievement
</button>
              {/* CERTIFICATIONS */} 
              <h3>Certifications</h3> 
              {certifications.map((cert, idx) => ( 
                <div className="dynamic-field"> 
                <input key={idx} value={cert} 
                onChange={(e) => { const updated = [...certifications]; updated[idx] = e.target.value; setCertifications(updated); }} /> 
                <button className="delete-btn" 
                onClick={() => deleteArrayItem(certifications, setCertifications, idx)}>Delete</button> 
                </div> ))}
                <button className="add" onClick={() => addField(setCertifications, "")} > + Add Certificate </button> 
                {!isMobile && (<>
<button className="download-btn no-print" 
style={{marginTop: "2px", width: "100%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
onClick={handleDownload}>
Download PDF
</button>
<button className="download-btn" 
style={{marginTop: "2px", width: "100%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
onClick={handleCreatePortfolio}>
Create Portfolio Link
</button></>
)}
          {isMobile && (
  <button
     className="download-btn no-print"
     style={{marginTop: "2px", width: "100%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
    onClick={() => setShowPreview(true)}
  >
    Preview Resume
  </button>
)}

        </div>)}

      {/* ================= PREVIEW ================= */}
      {(!isMobile || (isMobile && showPreview)) && (
      <div className="experienced-editor-preview">

        {/* invisible measure */}
        <div className="resume-measure3" ref={measureRef}>
<div className="resume-content">
<ResumeInner />
</div>
</div>

{/* preview pages */}

<div className="resume-pages3" ref={resumeRef}>

{pages.length === 0 ? (
<div style={{padding:"20px"}}>Loading preview...</div>
) : (
pages.map((pageSections,pageIndex)=>(
<div key={pageIndex} className="pdf-page2">

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
style={{marginTop: "2px", width: "90%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
onClick={handleDownload}
>
Download PDF
</button>
<button className="download-btn" onClick={handleCreatePortfolio}>
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
<Footer/></>
  );

};

export default ExperiencedResumeEditor;