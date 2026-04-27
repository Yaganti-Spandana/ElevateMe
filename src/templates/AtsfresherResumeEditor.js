import React, { useState, useRef, useEffect, useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/AtsfresherResumeEditor.css";
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
const AtsfresherResumeEditor = () => {
  const templateId = "atsfresher";
  const template = resumeData[templateId];
  useGA();
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
    portfolio: "",
  address: "",
  },
  skills: template.common.skills || [],});
  const [education, setEducation] = useState([...template.education || []]);
  const [projects, setProjects] = useState([...template.projects || []]);
  const [certifications, setCertifications] = useState([...template.certifications || []]);
  const [internships, setInternships] = useState([...template.internships || []]);
  const [achievements, setAchievements] = useState([...template.achievements || []]);
  const [hobbies, setHobbies] = useState([...template.hobbies || []]);
  const [languages, setLanguages] = useState([...template.languages || []]);
  const [extraCurriculars, setExtraCurriculars] = useState([...template.extraCurriculars || []]);
    
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
    container.querySelectorAll(".atsprofessional_header-block, .atsprofessional_section-block")
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

  const calculatePages = () => {
    const calculated = splitIntoPages(measureRef.current);
    setPages(calculated);
  };

  const raf = requestAnimationFrame(calculatePages);

  return () => cancelAnimationFrame(raf);
}, [
  common,
  education,
  projects,
  internships,
  achievements,
  hobbies,
  extraCurriculars,
  languages,
  certifications,
  showPreview ,splitIntoPages  // ⭐ IMPORTANT
]);
useEffect(() => {
  const saved = localStorage.getItem("resumeData");
  if (saved) {
    const data = JSON.parse(saved);
    setCommon(data.common);
    setEducation(data.education);
    setProjects(data.projects);
    setInternships(data.internships);
    setCertifications(data.certifications);
    setAchievements(data.achievements);
    setHobbies(data.hobbies);
    setLanguages(data.languages);
    setExtraCurriculars(data.extraCurriculars);
  }
}, []);

  // =========================
  // PDF DOWNLOAD
  // =========================
   const handleDownload = async () => {
    if (!resumeRef.current) return;
  
    const pages = resumeRef.current.querySelectorAll(".atsfresher_pdf-page");
  
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

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setCommon({ ...common, photo: reader.result });
    reader.readAsDataURL(file);
  };
  
  // =========================
  // CONTENT
  // =========================
  const ResumeInner = () => (
    <>
      <div className="atsprofessional_header-block">
        <div className="atsprofessional_name">
            <div className="flex4">
        <div className="atsfresher_photo-circle">
  {common.photo ? (
    <img
      src={common.photo}
      alt="profile"
      className="profile-img4"
    />
  ) : (
    <div className="atsfresher_photo-placeholder"></div>
  )}
</div></div>
      <h3 className="atsfresher_headingcareer">{common.name}</h3>
      <h4 className="atsfresher_subheadingcareer">{common.title}</h4>
      </div>
        <div className="atsfresher_contact">
        <p style={{color:"#201202"}}>📨 {common.contact?.email}</p><p style={{color:"#201202"}}>📱 {common.contact?.phone}</p>
        <p style={{color:"#201202"}}>💼 {common.contact?.linkedin} </p><p style={{color:"#201202"}}>🐙 {common.contact?.github}</p>
        <p style={{color:"#201202"}}>💼 {common.contact?.portfolio} </p><p style={{color:"#201202"}}>🐙 {common.contact?.address}</p>
      </div>
    </div>

      {common.summary && (
        <section className="atsprofessional_section-block">
          <h3 className="atsfresher_section-headingcareer">Professional Summary:</h3>
          <p className="atsfresher_summary" style={{marginTop:"-3px"}}>{common.summary}</p>
        </section>
      )}

      {common.skills?.length > 0 && (
      <section className="atsprofessional_section-block">
        <h3 className="atsfresher_section-headingcareer">Skills:</h3>
        <div className="atsfresher_pdf-section">
        {common.skills.map((skill, idx) => (
            <div style={{fontSize:"10px"}}>{skill}</div>
            
          ))}</div>
      </section>
    )}

    {education?.length > 0 && (
        <section className="atsprofessional_section-block">
          <h3 className="atsfresher_section-headingcareer">Education:</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="atsfresher_pdf-section" style={{marginTop:"-15px"}}>
                <div className="atsfresher_flex">
              <h4 className="atsfresher_deg">{edu.degree}</h4>
              <h4 className="atsfresher_ins">{edu.institution}</h4> 
              <h4 className="atsfresher_ins"> ({edu.year})</h4>
              <h4 className="atsfresher_ins"> ({edu.grade})</h4></div>
              <div><p style={{textAlign:"center",marginTop:"-10px",fontSize:"11px"}}>Course Work</p>{edu.coursework.map((skill, idx) => 
            <div key={idx} style={{fontSize:"11px"}}>
              <li> <div>{skill}</div></li>
            </div>
          )}</div>
            </div>
          ))}
        </section>
      )}
      {internships?.length > 0 && (
        <section className="atsprofessional_section-block">
          <h3 className="atsfresher_section-headingcareer">Internships:</h3>
          {internships.map((intern, idx) => (
            <div key={idx} className="atsfresher_pdf-section" style={{fontSize:"12px"}}>
                <div className="atsfresher_flex">
              <strong className="atsfresher_cert1">{intern.company}</strong>
              <p  className="atsfresher_cert2">{intern.role}</p>
              <p  className="atsfresher_cert2">{intern.duration}</p></div>
              <p style={{fontSize:"9px"}}>{intern.desc}</p>
            </div>
          ))}
        </section>
      )}
      {projects?.length > 0 && (
        <section className="atsprofessional_section-block">
          <h3 className="atsfresher_section-headingcareer">Projects:</h3>
          {projects.map((proj, idx) => (
            <div key={idx} className="atsfresher_pdf-section" style={{fontSize:"12px"}}>
              <strong style={{fontSize:"14px"}}>{proj.title}</strong>
              <p style={{fontSize:"12px"}}>{proj.desc}</p>
              <h5 style={{marginTop:"0px"}}>Demo-{proj.link}</h5>
              <h5 style={{marginTop:"-20px"}}>Technologies Used</h5>
              <div style={{marginTop:"-20px",fontSize:"9px"}}> {proj.technologies.map((skill, idx) => 
            <div key={idx}>
              <div>{skill}</div>
            </div>
          )}</div>
            </div>
          ))}
        </section>
      )}

      {certifications?.length > 0 && (
        <section className="atsprofessional_section-block">
          <h3 className="atsfresher_section-headingcareer">Certifications:</h3>
          {certifications.map((cert, idx) => (
            <div key={idx} className="atsfresher_pdf-section" style={{fontSize:"12px"}}>
                <div className="atsfresher_flex">
              <strong className="atsfresher_cert1">{cert.title}</strong>
              <p className="atsfresher_cert2">{cert.issuer}</p>
              <p className="atsfresher_cert2">{cert.year}</p></div>
              <p style={{fontSize:"9px"}}>{cert.details}</p>
            </div>
          ))}
        </section>
      )}
      {achievements?.length > 0 && (
      <section className="atsprofessional_section-block">
        <h3 className="atsfresher_section-headingcareer">Achievements:</h3>
        <ul className="atsfresher_listcareer" style={{marginTop:"0px"}}>
        {achievements.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li className="atsfresher_skill-gapcareer"> <div>{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}
    {hobbies?.length > 0 && (
      <section className="atsprofessional_section-block">
        <h3 className="atsfresher_section-headingcareer">Hobbies:</h3>
        <ul className="atsfresher_listcareer" style={{marginTop:"0px"}}>
        {hobbies.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li className="atsfresher_skill-gapcareer"> <div>{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}
    {languages?.length > 0 && (
      <section className="atsprofessional_section-block">
        <h3 className="atsfresher_section-headingcareer">Languages</h3>
        <ul className="atsfresher_listcareer" style={{marginTop:"0px"}}>
        {languages.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li className="atsfresher_skill-gapcareer"> <div>{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}
    {extraCurriculars?.length > 0 && (
      <section className="atsprofessional_section-block">
        <h3 className="atsfresher_section-headingcareer">Extra Curriculars:</h3>
        <ul className="atsfresher_listcareer" style={{marginTop:"0px"}}>
        {extraCurriculars.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li className="atsfresher_skill-gapcareer"> <div>{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}
    </>
  );
const handleCreatePortfolio = () => {

  const portfolioData = {
    common,
    education,
    projects,
    certifications,
    internships,
    hobbies,
    extraCurriculars,
    languages,
    achievements,
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

  window.open(`/portfolio/atsfresher/${portfolioId}`, "_blank");
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
          <h2 style={{fontSize:"18px"}}>Ats Friendly Fresher Resume Editor</h2>

          <label>Full Name</label>
          <input
            value={common.name}
            onChange={(e) =>
              setCommon({ ...common, name: e.target.value })
            }
          />
          <h3>Profile Photo</h3>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
          {common.photo && (
            <img
              src={common.photo}
              alt="preview"
              style={{ width: 80, height: 80, objectFit: "cover", borderRadius: "50%", marginBottom: 12 }}
            />
          )}
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
<label>Portfolio</label>
<input
  value={common.contact?.portfolio || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      contact: { ...common.contact, portfolio: e.target.value },
    })
  }
/>
<label>Address</label>
<input
  value={common.contact?.address || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      contact: { ...common.contact, address: e.target.value },
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
                <input placeholder="Grade" value={edu.grade} 
                onChange={e => updateArrayField(education, setEducation, idx, "grade", e.target.value)} /> 
                <input placeholder="Course Work (comma separated)" value={edu.coursework?.join(", ") || ""}
                onChange={e => updateArrayField(education, setEducation, idx,"coursework", e.target.value.split(",").map(item => item.trim()))}/>
                <button className="delete-btn" 
                onClick={() => deleteArrayItem(education, setEducation, idx)}>Delete</button> </div> ))} 
                <button className="add" onClick={() => addNewField(setEducation, { degree: "", institution: "", year: "",grade: "",coursework: [] })}>+ Add Education</button> 
          

          {/* Projects */} 
                <h3>Projects</h3> 
                {projects.map((proj, idx) => ( 
                  <div key={idx} className="dynamic-field"> 
                  <input placeholder="Project Title" value={proj.title} 
                  onChange={e => updateArrayField(projects, setProjects, idx, "title", e.target.value)} /> 
                  <textarea placeholder="Description" value={proj.desc} 
                  onChange={e => updateArrayField(projects, setProjects, idx, "desc", e.target.value)} /> 
                  <input placeholder="Project Link" value={proj.link} 
                onChange={e => updateArrayField(projects, setProjects, idx, "link", e.target.value)} /> 
                <input placeholder="technologies (comma separated)" value={proj.technologies?.join(", ") || ""}
                onChange={e => updateArrayField(projects, setProjects, idx,"technologies", e.target.value.split(",").map(item => item.trim()))}/>
                  <button className="delete-btn" onClick={() => deleteArrayItem(projects, setProjects, idx)}>Delete</button> </div> ))} 
                  <button className="add" onClick={() => addNewField(setProjects, { title: "", desc: "",link: "",technologies: [] })}>+ Add Project</button> 

          {/* Certifications */} 
                  <h3>Certifications</h3> 
                  {certifications.map((cert, idx) => ( 
                    <div key={idx} className="dynamic-field"> 
                    <input placeholder="Certification Name" value={cert.title || ""} 
                    onChange={e => updateArrayField(certifications, setCertifications, idx, "title", e.target.value)} />
                    <input placeholder="Issuer Name" value={cert.issuer || ""} 
                    onChange={e => updateArrayField(certifications, setCertifications, idx, "issuer", e.target.value)} />
                    <input placeholder="Year" value={cert.year || ""} 
                    onChange={e => updateArrayField(certifications, setCertifications, idx, "year", e.target.value)} />
                    <input placeholder="Details" value={cert.details || ""} 
                    onChange={e => updateArrayField(certifications, setCertifications, idx, "details", e.target.value)} /> 
                    <button className="delete-btn" 
                    onClick={() => deleteArrayItem(certifications, setCertifications, idx)}>Delete</button> 
                    </div> ))} 
                    <button className="add" onClick={() => addNewField(setCertifications, { title: "",issuer:"",year:"",details:"" })}>+ Add Certification</button>

          <h3>Internships</h3>
{internships.map((item, idx) => (
  <div key={idx} className="dynamic-field">
    <input
      placeholder="Role"
      value={item.role}
      onChange={e =>
        updateArrayField(internships, setInternships, idx, "role", e.target.value)
      }
    />
    <input
      placeholder="Company"
      value={item.company}
      onChange={e =>
        updateArrayField(internships, setInternships, idx, "company", e.target.value)
      }
    />
    <input
      placeholder="Duration"
      value={item.duration}
      onChange={e =>
        updateArrayField(internships, setInternships, idx, "duration", e.target.value)
      }
    />
    <textarea
      placeholder="Description"
      value={item.desc}
      onChange={e =>
        updateArrayField(internships, setInternships, idx, "desc", e.target.value)
      }
    />
    <button
      className="delete-btn"
      onClick={() => deleteArrayItem(internships, setInternships, idx)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() =>
    addNewField(setInternships, {
  role: "",
  company: "",
  duration: "",
  desc: ""
})
  }
>
  + Add Internship
</button>

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

<h3>Hobbies</h3>
{hobbies.map((item, idx) => (
  <div key={idx} className="dynamic-field">
    <input
      placeholder="Hobby"
      value={item}
      onChange={(e) => {
        const updated = [...hobbies];
        updated[idx] = e.target.value;
        setHobbies(updated);
      }}
    />
    <button
      className="delete-btn"
      onClick={() => deleteArrayItem(hobbies, setHobbies, idx)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() => setHobbies([...hobbies, ""])}
>
  + Add Hobby
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

<h3>Extra Curriculars</h3>
{extraCurriculars.map((item, idx) => (
  <div key={idx} className="dynamic-field">
    <textarea
      placeholder="Activity"
      value={item}
      onChange={(e) => {
        const updated = [...extraCurriculars];
        updated[idx] = e.target.value;
        setExtraCurriculars(updated);
      }}
    />
    <button
      className="delete-btn"
      onClick={() => deleteArrayItem(extraCurriculars, setExtraCurriculars, idx)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() => setExtraCurriculars([...extraCurriculars, ""])}
>
  + Add Activity
</button>
                  

          {!isMobile && (
            <>
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
<div className="editor-preview-wrapper">
{/* hidden measure */}
<div className="resume-measure" ref={measureRef}>
<div className="atsfresher_resume-content">
<ResumeInner />
</div>
</div>

{/* preview pages */}

<div className="resume-pages" ref={resumeRef}>

{pages.length === 0 ? (
<div style={{padding:"20px"}}>Loading preview...</div>
) : (
pages.map((pageSections,pageIndex)=>(
<div key={pageIndex} className="atsfresher_pdf-page">

<div className="atsfresher_resume-content">
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
style={{marginTop: "2px", width: "100%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
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
    </div><Footer /></>
  );
};

export default AtsfresherResumeEditor;