// src/templates/fresher/FresherResumeEditor.js
import React, { useState, useRef, useEffect,useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/FresherResumeEditor.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";

const A4_HEIGHT_PX = 842; // correct preview height

const FresherResumeEditor = () => {
  const templateId = "fresher";
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
  // -----------------------------
  // Helper functions for array state
  // -----------------------------
  const createUpdater = (setArray) => (index, field, value) => {
    setArray(prev => {
      const updated = [...prev];
      if (field) updated[index][field] = value; // object
      else updated[index] = value; // string
      return updated;
    });
  };

  const createDeleter = (setArray) => (index) => {
    setArray(prev => prev.filter((_, i) => i !== index));
  };

  const createAdder = (setArray, defaultVal) => () => {
    setArray(prev => [...prev, defaultVal]);
  };

  // -----------------------------
  // States
  // -----------------------------
  const [common, setCommon] = useState({
  name: template.common.name || "",
  title: template.common.title || "",
  contact: {
    email: template.common.contact?.email || "",
    phone: template.common.contact?.phone || "",
    linkedin: template.common.contact?.linkedin || "",
    github: template.common.contact?.github || "",
  },
  portfolio: template.common.portfolio || "",
  address: template.common.address || "",
  summary: template.common.summary || "",
  skills: template.common.skills || [],
});

  const [experience, setExperience] = useState(
    (template.internships || []).map(exp => ({
      role: exp.role || "",
      company: exp.company || "",
      duration: exp.duration || "",
      desc: exp.desc || "",
    }))
  );

  const [education, setEducation] = useState(
    (template.education || []).map(edu => ({
      degree: edu.degree || "",
      institution: edu.institution || "",
      year: edu.year || "",
      grade: edu.grade || "",
    }))
  );

  const [projects, setProjects] = useState(
    (template.projects || []).map(proj => ({
      title: proj.title || "",
      desc: proj.desc || "",
      link: proj.link || "",
      technologies: proj.technologies || [],
    }))
  );

  const [certifications] = useState(
    (template.certifications || []).map(cert => ({
      name: cert.name || cert.title || "",
      issuer: cert.issuer || "",
      year: cert.year || "",
    }))
  );

  const [achievements, setAchievements] = useState([...template.achievements || []]);
  const [hobbies, setHobbies] = useState([...template.hobbies || []]);
  const [languages, setLanguages] = useState([...template.languages || []]);
  const [extraCurriculars, setExtraCurriculars] = useState([...template.extraCurriculars || []]);

  const resumeRef = useRef(null);
  const measureRef = useRef(null);
  const [pages, setPages] = useState([]);

  // -----------------------------
  // Page split for PDF
  // -----------------------------
  const PAGE_PADDING = 56;   // 28 top + 28 bottom
const SAFE_BUFFER = 40;

const USABLE_PAGE_HEIGHT =
  A4_HEIGHT_PX - PAGE_PADDING - SAFE_BUFFER;

  const splitIntoPages = useCallback((container) => {
  if (!container) return [];

  const sections = Array.from(
    container.querySelectorAll(".header-block4, .section-block4")
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

  const timeout = setTimeout(() => {
    const newPages = splitIntoPages(measureRef.current);
    setPages(newPages);
  }, 120);

  return () => clearTimeout(timeout);
}, [
  common,
  experience,
  education,
  projects,
  certifications,
  achievements,
  hobbies,
  languages,
  extraCurriculars,
  showPreview,splitIntoPages
]);
  // -----------------------------
  // PDF Download
  // -----------------------------
 const handleDownload = async () => {

  const pages = document.querySelectorAll(".pdf-page4");
  if (!pages.length) return;

  const pdf = new jsPDF("p", "mm", "a4");

  for (let i = 0; i < pages.length; i++) {

    const canvas = await html2canvas(pages[i], {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff"
    });

    const imgData = canvas.toDataURL("image/png");

    const imgWidth = 210; // A4 width mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (i > 0) pdf.addPage();

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

  }

  pdf.save(`${common.name || "Resume"}_Resume.pdf`);
};

  // -----------------------------
  // Array Updaters
  // -----------------------------
  const updateExperience = createUpdater(setExperience);
const deleteExperience = createDeleter(setExperience);
const addExperience = createAdder(setExperience, { role: "", company: "", duration: "", desc: "" });

const updateEducation = createUpdater(setEducation);
const deleteEducation = createDeleter(setEducation);
const addEducation = createAdder(setEducation, { degree: "", institution: "", year: "" });

const updateProjects = createUpdater(setProjects);
const deleteProjects = createDeleter(setProjects);
const addProjects = createAdder(setProjects, { title: "", desc: "" });


const updateAchievement = createUpdater(setAchievements);
  const deleteAchievement = createDeleter(setAchievements);
  const addAchievement = createAdder(setAchievements, "New Achievement");

  const updateHobby = createUpdater(setHobbies);
  const deleteHobby = createDeleter(setHobbies);
  const addHobby = createAdder(setHobbies, "New Hobby");

  const updateLanguage = createUpdater(setLanguages);
  const deleteLanguage = createDeleter(setLanguages);
  const addLanguage = createAdder(setLanguages, "New Language");

  const updateExtra = createUpdater(setExtraCurriculars);
  const deleteExtra = createDeleter(setExtraCurriculars);
  const addExtra = createAdder(setExtraCurriculars, "New Activity");

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setCommon({ ...common, photo: reader.result });
    reader.readAsDataURL(file);
  };
  // -----------------------------
  // JSX
  // -----------------------------
  const ResumeInner = () => (
    <div className="col4">
      <div className="header-block4">
        <div className="flex4">
        <div className="photo-circle4">
  {common.photo ? (
    <img
      src={common.photo}
      alt="profile"
      className="profile-img4"
    />
  ) : (
    <div className="photo-placeholder4">Photo</div>
  )}
</div><div className="f11">
        <h1 className="heading4">{common.name}</h1>
        <h2 className="subheading4">{common.title}</h2>
        <div className="contact4">
          {common.contact?.email || "Not Provided"} {"<-|"}<br></br>{common.contact?.phone || "Not Provided"}{"<-|"} <br></br>
          {common.contact?.linkedin || "Not Provided"} {"<-|"}<br></br>{common.contact?.github || "Not Provided"}{"<-|"} <br></br>{common.portfolio && `| ${common.portfolio}`}{"<-|"}
        </div>
        {common.address && <div className="address4">{common.address}</div>}
      </div></div></div>
      <div></div>
      {common.summary && (
        <section className="section-block4">
          <h3 className="section-heading4">Professional Summary</h3>
          <p className="summary4">{common.summary}</p>
        </section>
      )}

      {Array.isArray(common.skills) && common.skills.length > 0 && (
  <section className="section-block4">
    <h3 className="section-heading4">Skills</h3>

    <div className="skills4">
      {common.skills.map((skill, index) => (
        <span key={index} className="skill-item4">
          {skill}
        </span>
      ))}
    </div>

  </section>
)}

      {experience?.length > 0 && (
        <section className="section-block4">
          <h3 className="section-heading4">Work Experience</h3>
          {experience.map((exp, idx) => (
            <div key={idx} className="pdf-section">
              <div className="exp4">
              <strong className="role4">{exp.role}</strong> <p className="company4"> @{exp.company}</p> 
              </div><br></br><p className="duration4">({exp.duration})</p><p>{exp.desc}</p>
            </div>
          ))}
        </section>
      )}

      {education?.length > 0 && (
  <section className="section-block4">
    <h3 className="section-heading4">Education</h3>

    <table className="table4">
      <thead>
        <tr>
          <th>DEGREE</th>
          <th>INSTITUTION</th>
          <th>YEAR</th>
        </tr>
      </thead>

      <tbody>
        {education.map((edu, idx) => (
          <tr key={idx}>
            <td><strong>{edu.degree}</strong></td>
            <td>{edu.institution}</td>
            <td>{edu.year}</td>
          </tr>
        ))}
      </tbody>
    </table>

  </section>
)}

      {projects?.length > 0 && (
        <section className="section-block4">
          <h3 className="section-heading4">Projects</h3>
          {projects.map((proj, idx) => (
            <div key={idx} className="pdf-section">
              <strong>{proj.title}</strong>
              <p>{proj.desc}</p>
            </div>
          ))}
        </section>
      )}

      {certifications?.length > 0 && (
        <section className="section-block4">
          <h3 className="section-heading4">Certifications</h3>
          <ul>
            {certifications.map((ach, idx) => 
            <li key={idx} ><div style={{display:"flex"}}><p className="cert41">{ach.name}</p><p className="cert42">{ach.year}</p><p className="cert43">{ach.issuer}</p></div></li>)}
          </ul>
        </section>
      )}

      {achievements.length > 0 && (
        <section className="section-block4">
          <h3 className="section-heading4">Achievements</h3>
          <ul>
            {achievements.map((ach, idx) => <li key={idx} style={{fontSize:"13px"}}>{ach}</li>)}
          </ul>
        </section>
      )}

      {hobbies.length > 0 && (
        <section className="section-block4">
          <h3 className="section-heading4">Hobbies</h3>
          <p  style={{fontSize:"13px"}}>{hobbies.join(", ")}</p>
        </section>
      )}

      {languages.length > 0 && (
        <section className="section-block4">
          <h3 className="section-heading4">Languages</h3>
          <p  style={{fontSize:"13px"}}>{languages.join(", ")}</p>
        </section>
      )}

      {extraCurriculars.length > 0 && (
        <section className="section-block4">
          <h3 className="section-heading4">Extra-Curricular Activities</h3>
          <ul>
            {extraCurriculars.map((item, idx) => <li key={idx} style={{fontSize:"13px"}}>{item}</li>)}
          </ul>
        </section>
      )}
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

window.open(`/portfolio/fresher/${portfolioId}`, "_blank");
};

  return (
    <>
    <Navbar/>
    <div className="fresher-editor-container">
      {(!isMobile || !showPreview) && (
        <div className="editor-sidebar">
          <h2>Fresher Resume Editor</h2>
          <label>Full Name</label> 
          <input value={common.name} 
          onChange={(e) => setCommon({ ...common, name: e.target.value }) } /> 
          <label>Title</label> 
          <h3>Profile Photo</h3>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          {common.photo && (
            <img
              src={common.photo}
              alt="preview"
              style={{ width: 80, height: 80, objectFit: "cover", borderRadius: "50%", marginBottom: 12 }}
            />
          )}
          <input value={common.title} 
          onChange={(e) => setCommon({ ...common, title: e.target.value }) } /> 
          <h3>Contact Details</h3> 
          <label>Email</label> 
          <input value={common.contact?.email || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      contact: { ...common.contact, email: e.target.value },
    })
  } /> 
          <label>Phone</label> 
          <input value={common.contact?.phone || ""} 
          onChange={(e) => setCommon({ ...common, contact: { ...common.contact, phone: e.target.value }, }) } /> 
          <label>LinkedIn</label> 
          <input value={common.contact?.linkedin || ""} 
          onChange={(e) => setCommon({ ...common, contact: { ...common.contact, linkedin: e.target.value }, }) } /> 
          <label>GitHub</label> 
          <input value={common.contact?.github || ""} 
          onChange={(e) => setCommon({ ...common, contact: { ...common.contact, github: e.target.value }, }) } /> 
          <label>Portfolio</label> 
          <input value={common.portfolio} onChange={e => setCommon({...common, portfolio: e.target.value})} />
          <label>Address</label> 
          <input value={common.address} onChange={e => setCommon({...common, address: e.target.value})} />
          <label>Professional Summary</label> 
          <textarea value={common.summary} 
          onChange={(e) => setCommon({ ...common, summary: e.target.value }) } /> 
          <h3>Skills</h3> 
          <div className="skillsfield"> 
          {common.skills?.map((skill, idx) => ( 
            <div key={idx} className="dynamic-field1"> 
            <div> <input placeholder="Skill" value={skill} className="input1" 
            onChange={(e) => { const updated = [...common.skills]; updated[idx] = e.target.value; setCommon({ ...common, skills: updated }); }} /><br></br> 
            <button className="delete-btn1" 
            onClick={() => { const updated = common.skills.filter((_, i) => i !== idx); setCommon({ ...common, skills: updated }); }} > Delete </button></div> 
            </div> ))}</div> 
            <button className="add" 
            onClick={() => setCommon({ ...common, skills: [...(common.skills || []), ""], }) } > + Add Skill </button> 
            {/* Experience */} 
            <h3>Work Experience</h3> 
            {experience.map((exp, idx) => ( 
              <div key={idx} className="dynamic-field"> 
              <input placeholder="Role" value={exp.role} 
              onChange={e => updateExperience(idx, "role", e.target.value)} /> 
              <input placeholder="Company" value={exp.company} 
              onChange={e => updateExperience( idx, "company", e.target.value)} /> 
              <input placeholder="Duration" value={exp.duration} 
              onChange={e => updateExperience(idx, "duration", e.target.value)} /> 
              <textarea placeholder="Description" value={exp.desc} 
              onChange={e => updateExperience(idx, "desc", e.target.value)} /> 
              <button className="delete-btn" onClick={() => deleteExperience(idx)}>Delete</button> </div> ))} 
              <button className="add" 
              onClick={() => addExperience(setExperience, { role: "", company: "", duration: "", desc: "" })}>+ Add Experience</button> 
              {/* Education */} 
              <h3>Education</h3> 
              {education.map((edu, idx) => ( 
                <div key={idx} className="dynamic-field"> 
                <input placeholder="Degree" value={edu.degree} 
                onChange={e => updateEducation(idx, "degree", e.target.value)} /> 
                <input placeholder="Institution" value={edu.institution} 
                onChange={e => updateEducation(idx, "institution", e.target.value)} /> 
                <input placeholder="Year" value={edu.year} 
                onChange={e => updateEducation(idx, "year", e.target.value)} /> 
                <button className="delete-btn" onClick={() => deleteEducation(idx)}>Delete</button> </div> ))} 
                <button className="add" onClick={() => addEducation(setEducation, { degree: "", institution: "", year: "" })}>+ Add Education</button> 
                {/* Projects */} 
                <h3>Projects</h3> 
                {projects.map((proj, idx) => ( 
                  <div key={idx} className="dynamic-field"> 
                  <input placeholder="Project Title" value={proj.title} 
                  onChange={e => updateProjects( idx, "title", e.target.value)} /> 
                  <textarea placeholder="Description" value={proj.desc} 
                  onChange={e => updateProjects( idx, "desc", e.target.value)} /> 
                  <button className="delete-btn" 
                  onClick={() => deleteProjects( idx)}>Delete</button> </div> ))} 
                  <button className="add" 
                  onClick={() => addProjects(setProjects, { title: "", desc: "" })}>+ Add Project</button>
          <h3>Achievements</h3>
          {achievements.map((ach, idx) => (
            <div key={idx} className="dynamic-field">
              <input value={ach} onChange={e => updateAchievement(idx, null, e.target.value)} placeholder="Achievement" />
              <button onClick={() => deleteAchievement(idx)} className="delete-btn1">Delete</button>
            </div>
          ))}
          <button onClick={addAchievement} className="add">+ Add Achievement</button>

          <h3>Hobbies</h3>
          {hobbies.map((hob, idx) => (
            <div key={idx} className="dynamic-field">
              <input value={hob} onChange={e => updateHobby(idx, null, e.target.value)} placeholder="Hobby" />
              <button onClick={() => deleteHobby(idx)} className="delete-btn1">Delete</button>
            </div>
          ))}
          <button onClick={addHobby} className="add">+ Add Hobby</button>

          <h3>Languages</h3>
          {languages.map((lang, idx) => (
            <div key={idx} className="dynamic-field">
              <input value={lang} onChange={e => updateLanguage(idx, null, e.target.value)} placeholder="Language" />
              <button onClick={() => deleteLanguage(idx)} className="delete-btn1">Delete</button>
            </div>
          ))}
          <button onClick={addLanguage} className="add">+ Add Language</button>

          <h3>Extra-Curricular Activities</h3>
          {extraCurriculars.map((item, idx) => (
            <div key={idx} className="dynamic-field">
              <input value={item} onChange={e => updateExtra(idx, null, e.target.value)} placeholder="Activity" />
              <button onClick={() => deleteExtra(idx)} className="delete-btn1">Delete</button>
            </div>
          ))}
          <button onClick={addExtra} className="add">+ Add Activity</button>

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

        {(!isMobile || (isMobile && showPreview)) && (

      <div className="fresher-editor-preview">
        {/* hidden measure */}
<div className="resume-measure" ref={measureRef}>
<div className="resume-content4">
<ResumeInner />
</div>
</div>

{/* preview pages */}

<div className="resume-pages" ref={resumeRef}>

{pages.length === 0 ? (
<div style={{padding:"20px"}}>Loading preview...</div>
) : (
pages.map((pageSections,pageIndex)=>(
<div key={pageIndex} className="pdf-page4">

<div className="resume-content4">
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
    </div><Footer/>
    </>
  );
};

export default FresherResumeEditor;