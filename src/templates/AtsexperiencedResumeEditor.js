import React, { useState, useRef, useEffect, useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/AtsexperiencedResumeEditor.css";
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
const AtsexperiencedResumeEditor = () => {
  const templateId = "atsexperienced";
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
  const [experience, setExperience] = useState([...template.experience || []]);
  const [achievements, setAchievements] = useState([...template.achievements || []]);
  const [interests, setInterests] = useState([...template.interests || []]);
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
    container.querySelectorAll(".atsprofessional_header-block, .atsexperienced_section-block")
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
  experience,
  achievements,
  interests,
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
    setExperience(data.experience);
    setCertifications(data.certifications);
    setAchievements(data.achievements);
    setInterests(data.interests);
    setLanguages(data.languages);
  }
}, []);

  // =========================
  // PDF DOWNLOAD
  // =========================
   const handleDownload = async () => {
    if (!resumeRef.current) return;
  
    const pages = resumeRef.current.querySelectorAll(".atsexperienced_pdf-page");
  
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
        <div className="atsexperienced_contact">
        <p style={{color:"#201202",marginTop:"0px",marginBottom:"0px"}}>📨 {common.contact?.email}</p><p style={{color:"#201202",marginTop:"0px",marginBottom:"0px"}}>📱 {common.contact?.phone}</p>
        <p style={{color:"#201202",marginTop:"0px",marginBottom:"0px"}}>💼 {common.contact?.linkedin} </p><p style={{color:"#201202",marginTop:"0px",marginBottom:"0px"}}>🐙 {common.contact?.github}</p>
        <p style={{color:"#201202",marginTop:"0px",marginBottom:"0px"}}>💼 {common.contact?.portfolio} </p><p style={{color:"#201202",marginTop:"0px",marginBottom:"0px"}}>🐙 {common.contact?.address}</p>
      </div>
      <div className="atsexperienced_name">
      <h3 className="atsexperienced_headingcareer">{common.name}</h3>
      <h4 className="atsexperienced_subheadingcareer">{common.title}</h4>
      </div>
    </div>

      {common.summary && (
        <section className="atsexperienced_section-block">
          <h3 className="atsexperienced_section-headingcareer">Professional Summary:</h3>
          <p className="atsexperienced_summary ">{common.summary}</p>
        </section>
      )}

      {common.skills?.length > 0 && (
        <section  className="atsexperienced_section-block">
          <h3 className="atsexperienced_section-headingcareer">Skills</h3>
          <p style={{fontSize:'12px'}}>{common.skills.join(", ")}</p>
        </section>
      )}


    {education?.length > 0 && (
        <section className="atsexperienced_section-block">
          <h3 className="atsexperienced_section-headingcareer">Education:</h3>
          {education.map((edu, idx) => (
            <div key={idx} className="atsfresher_pdf-section" style={{marginTop:"5px"}}>
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Degree-{edu.degree}</h4>
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Institution-{edu.institution}</h4> 
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Year- {edu.year}</h4>
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Grade-{edu.grade}</h4>
              <p style={{marginTop:"0px",marginBottom:"-20px",fontSize:"10px"}}> Details-{edu.details}</p>
            </div>
          ))}
        </section>
      )}
      {experience?.length > 0 && (
        <section className="atsexperienced_section-block">
          <h3 className="atsexperienced_section-headingcareer" style={{marginBottom:"5px"}}>Experience:</h3>
          {experience.map((intern, idx) => (
            <div key={idx} className="atsfresher_pdf-section">

<h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Company-{intern.company}</h4>
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Role-{intern.role}</h4> 
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Duration- {intern.duration}</h4>
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Location-{intern.location}</h4>
              <p style={{marginTop:"0px",marginBottom:"-20px",fontSize:"10px"}}> Description-{intern.desc}</p>
            </div>
          ))}
        </section>
      )}
      {projects?.length > 0 && (
        <section className="atsexperienced_section-block">
          <h3 className="atsexperienced_section-headingcareer">Projects:</h3>
          {projects.map((proj, idx) => (
            <div key={idx} className="atsfresher_pdf-section" style={{fontSize:"12px"}}>

              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Title-{proj.title}</h4>
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Description-{proj.desc}</h4> 
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Project Demo-{proj.link}</h4>
              <h4 style={{marginTop:"0px",marginBottom:"0px",fontSize:"11px"}}>Technologies Used</h4>
              <p style={{marginTop:"0px",marginBottom:"-10px",fontSize:"9px"}}> {proj.technologies.map((skill, idx) => 
            <div key={idx}>
              <div style={{fontSize:"11px"}}>{skill}</div>
            </div>
          )}</p>
            </div>
          ))}
        </section>
      )}

      {certifications?.length > 0 && (
      <section className="atsexperienced_section-block">
        <h3 className="atsexperienced_section-headingcareer">Certifications:</h3>
        <ul className="atsfresher_listcareer" style={{marginTop:"10px"}}>
        {certifications.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li className="atsfresher_skill-gapcareer"> <div style={{fontSize:"11px",marginTop:"5px"}}>{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}
      {achievements?.length > 0 && (
      <section className="atsexperienced_section-block">
        <h3 className="atsexperienced_section-headingcareer">Achievements:</h3>
        <ul className="atsfresher_listcareer" style={{marginTop:"10px"}}>
        {achievements.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li className="atsfresher_skill-gapcareer"> <div style={{fontSize:"11px",marginTop:"5px"}}>{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}
    {interests?.length > 0 && (
      <section className="atsexperienced_section-block">
        <h3 className="atsexperienced_section-headingcareer">interests:</h3>
        <ul className="atsfresher_listcareer" style={{marginTop:"10px"}}>
        {interests.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li className="atsfresher_skill-gapcareer"> <div style={{fontSize:"11px",marginTop:"5px"}}>{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}
    {languages?.length > 0 && (
      <section className="atsexperienced_section-block">
        <h3 className="atsexperienced_section-headingcareer">Languages</h3>
        <ul className="atsfresher_listcareer" style={{marginTop:"10px"}}>
        {languages.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li className="atsfresher_skill-gapcareer"> <div style={{fontSize:"11px",marginTop:"5px"}}>{skill}</div></li>
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
    experience,
    interests,
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

  window.open(`/portfolio/atsexperienced/${portfolioId}`, "_blank");
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
          <h2 style={{fontSize:"18px"}}>Ats Friendly Experienced Resume Editor</h2>

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
                <input placeholder="Details" value={edu.details} 
                onChange={e => updateArrayField(education, setEducation, idx, "details", e.target.value)} /> 
                <button className="delete-btn" 
                onClick={() => deleteArrayItem(education, setEducation, idx)}>Delete</button> </div> ))} 
                <button className="add" onClick={() => addNewField(setEducation, { degree: "", institution: "", year: "",grade: "",coursework:"" })}>+ Add Education</button> 
          
<h3>experience</h3>
{experience.map((item, idx) => (
  <div key={idx} className="dynamic-field">
    <input
      placeholder="Company"
      value={item.company}
      onChange={e =>
        updateArrayField(experience, setExperience, idx, "company", e.target.value)
      }
    />
    <input
      placeholder="Role"
      value={item.role}
      onChange={e =>
        updateArrayField(experience, setExperience, idx, "role", e.target.value)
      }
    />
    <input
      placeholder="Duration"
      value={item.duration}
      onChange={e =>
        updateArrayField(experience, setExperience, idx, "duration", e.target.value)
      }
    />
    <input
      placeholder="Location"
      value={item.location}
      onChange={e =>
        updateArrayField(experience, setExperience, idx, "location", e.target.value)
      }
    />
    <textarea
      placeholder="Description"
      value={item.desc}
      onChange={e =>
        updateArrayField(experience, setExperience, idx, "desc", e.target.value)
      }
    />
    <button
      className="delete-btn"
      onClick={() => deleteArrayItem(experience, setExperience, idx)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() =>
    addNewField(setExperience, {
  role: "",
  company: "",
  duration: "",
  location:"",
  desc: "",

})
  }
>
  + Add Experience
</button>
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
{certifications.map((item, idx) => (
  <div key={idx} className="dynamic-field">
    <input
      placeholder="Certification"
      value={item}
      onChange={(e) => {
        const updated = [...certifications];
        updated[idx] = e.target.value;
        setCertifications(updated);
      }}
    />
    <button
      className="delete-btn"
      onClick={() => deleteArrayItem(certifications, setCertifications, idx)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() => setCertifications([...certifications, ""])}
>
  + Add Certification
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

<h3>Interests</h3>
{interests.map((item, idx) => (
  <div key={idx} className="dynamic-field">
    <input
      placeholder="Interest"
      value={item}
      onChange={(e) => {
        const updated = [...interests];
        updated[idx] = e.target.value;
        setInterests(updated);
      }}
    />
    <button
      className="delete-btn"
      onClick={() => deleteArrayItem(interests, setInterests, idx)}
    >
      Delete
    </button>
  </div>
))}

<button
  className="add"
  onClick={() => setInterests([...interests, ""])}
>
  + Add Interest
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
<div className="atsexperienced_resume-content">
<ResumeInner />
</div>
</div>

{/* preview pages */}

<div className="resume-pages" ref={resumeRef}>

{pages.length === 0 ? (
<div style={{padding:"20px"}}>Loading preview...</div>
) : (
pages.map((pageSections,pageIndex)=>(
<div key={pageIndex} className="atsexperienced_pdf-page">

<div className="atsexperienced_resume-content">
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

export default AtsexperiencedResumeEditor;