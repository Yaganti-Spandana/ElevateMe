// src/templates/creative/CreativeResumeEditor.js
import React, { useState, useRef,useEffect,useCallback } from "react";
import resumeData from "../components/ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../css/CreativeResumeEditor.css";
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";
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
const CreativeResumeEditor = () => {
  const templateId = "creative";
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
  name: template.common.name || "",
  title: template.common.title || "",
  tagline: template.common.tagline || "",
  photo: template.common.photo || "",
  portfolio: template.common.portfolio || "",
  address: template.common.address || "",
  summary: template.common.summary || "",

  contact: {
    email: template.common.contact?.email || "",
    phone: template.common.contact?.phone || "",
    linkedin: template.common.contact?.linkedin || "",
  },

  social: template.common.social || {
    behance: "",
    dribbble: "",
    medium: "",
    github:"",
  },

  skills: template.common.skills || [],
  languages: template.common.languages || [],
  
});
const [experience, setExperience] = useState([...template.experience || []]);
  const [education, setEducation] = useState([...template.education || []]);
  const [projects, setProjects] = useState([...template.projects || []]);
  const [certifications, setCertifications] = useState([...template.certifications || []]);
const [languages, setLanguages] = useState([...template.common.languages || []]);

const handlePhotoUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setCommon({ ...common, photo: reader.result });
  };

  reader.readAsDataURL(file);
};
// refs
const resumeRef = useRef(null);
const measureRef = useRef(null);

// pages
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
    container.querySelectorAll(".header-block, .section-block5")
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
}, [
  common,
  experience,
  education,
  projects,
  certifications,
  languages,
  showPreview,
  splitIntoPages
]);
useEffect(() => {
  const saved = localStorage.getItem("resumeData");
  if (saved) {
    const data = JSON.parse(saved);
    setCommon(data.common);
    setExperience(data.experience);
    setEducation(data.education);
    setProjects(data.projects);
    setCertifications(data.certifications);
    setLanguages(data.languages);
  }
}, []);

  // =========================
  // PDF DOWNLOAD
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
  
  const ResumeInner = () => (
  <>
    <header className="header-block">
      <div className="flex5"><div>
      <div className="photo-circle5">
  {common.photo ? (
    <img
      src={common.photo}
      alt="profile"
      className="profile-img5"
    />
  ) : (
    <div className="photo-placeholder5">Photo</div>
  )}
</div>

      <h1>{common.name}</h1>
      <h2>{common.title}</h2></div>
      <div className="creative">
      {common.tagline && <p className="tagline">{common.tagline}</p>}

      <p>
        {common.contact?.email} <br></br>{common.contact?.phone} <br></br>
        {common.contact?.linkedin}
      </p>

      {common.portfolio && <p>{common.portfolio}</p>}
      {common.address && <p>{common.address}</p>}

      <p>
        {common.social?.behance} <br></br> {common.social?.dribbble}<br></br> {common.social?.medium}
      </p></div></div>
    </header>

    {common.summary && (
      <section className="section-block5">
        <h3>Professional Summary</h3>
        <p>{common.summary}</p>
      </section>
    )}

    {common.skills?.length > 0 && (
      <section className="section-block5">
        <h3>Skills</h3>
        <ul>
        {common.skills.map((skill, idx) => (
            <div key={idx} className="pdf-section1">
              <li> <div className="skill-gap">{skill}</div></li>
            </div>
          ))}</ul>
      </section>
    )}

    {experience?.length > 0 && (
      <section className="section-block5">
        <h3>Experience</h3>
        {experience.map((exp, idx) => (
          <div key={idx}>
            <strong>{exp.role}</strong> @ {exp.company} ({exp.duration})
            <p>{exp.desc}</p>
          </div>
        ))}
      </section>
    )}

    {education?.length > 0 && (
      <section className="section-block5">
        <h3>Education</h3>
        <ul>
        {education.map((edu, idx) => (
          <div key={idx}>
            <li><strong>{edu.degree}</strong> - {edu.institution} ({edu.year})</li>
          </div>
        ))}</ul>
      </section>
    )}

    {projects?.length > 0 && (
      <section className="section-block5">
        <h3>Projects</h3>
        {projects.map((proj, idx) => (
          <div key={idx}>
            <strong>{proj.title}</strong>
            <p>{proj.desc}</p>
          </div>
        ))}
      </section>
    )}

    {certifications?.length > 0 && (
      <section className="section-block5">
        <h3>Certifications</h3>
        <ul>
          {certifications.map((c, idx) => (
            <li key={idx}>
              {c.title} - {c.issuer} ({c.year})
            </li>
          ))}
        </ul>
      </section>
    )}


    {languages?.length > 0 && (
      <section className="section-block5">
        <h3>Languages</h3>
        <ul>
          {languages.map((c, idx) => (
            <li key={idx}>
              {c.name} - {c.level}
            </li>
          ))}
        </ul>
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

window.open(`/portfolio/creative/${portfolioId}`, "_blank");

ReactGA.event({
    category: "Portfolio",
    action: "Create Portfolio",
    label: portfolioId
  });
};
  return (
    <><Navbar/>
    <div className="creative-editor-container">
      {(!isMobile || !showPreview) && (
      <div className="creative-editor-sidebar">
        <h2>Creative Resume Editor</h2>
        <label>Tagline</label>
<input
  value={common.tagline}
  onChange={(e) => setCommon({ ...common, tagline: e.target.value })}
/>
<label>Profile Photo</label>
<input type="file" accept="image/*" onChange={handlePhotoUpload} />

        <label>Name</label>
        <input value={common.name} onChange={(e) => setCommon({ ...common, name: e.target.value })} />
        <label>Title</label>
        <input value={common.title} onChange={(e) => setCommon({ ...common, title: e.target.value })} />
        <label>Phone</label> 
          <input value={common.contact?.phone || ""} 
          onChange={(e) => setCommon({ ...common, contact: { ...common.contact, phone: e.target.value }, }) } /> 
          <label>LinkedIn</label> 
          <input value={common.contact?.linkedin || ""} 
          onChange={(e) => setCommon({ ...common, contact: { ...common.contact, linkedin: e.target.value }, }) } /> 
          
          
        <label>Portfolio</label>
<input
  value={common.portfolio}
  onChange={(e) => setCommon({ ...common, portfolio: e.target.value })}
/>
<label>Address</label>
<input
  value={common.address}
  onChange={(e) => setCommon({ ...common, address: e.target.value })}
/>
<label>Summary</label>
<textarea
  value={common.summary}
  onChange={(e) => setCommon({ ...common, summary: e.target.value })}
/>
<h3>Skills</h3>
        <input
  value={common.skills.join(", ")}
  onChange={(e) =>
    setCommon({
      ...common,
      skills: e.target.value.split(",").map((s) => s.trim())
    })
  }
/>
<label>Behance</label>
<input
  value={common.social?.behance || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      social: { ...common.social, behance: e.target.value }
    })
  }
/>
<label>Dribbble</label>
<input
  value={common.social?.dribbble || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      social: { ...common.social, dribbble: e.target.value }
    })
  }
/>
<label>Medium</label>
<input
  value={common.social?.medium || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      social: { ...common.social, medium: e.target.value }
    })
  }
/>
<label>Github</label>
<input
  value={common.social?.github || ""}
  onChange={(e) =>
    setCommon({
      ...common,
      social: { ...common.social, github: e.target.value }
    })
  }
/>
        <h3>Experience</h3>
        {experience.map((exp, idx) => (
          <div key={idx} className="dynamic-field">
            <input placeholder="Role" value={exp.role} onChange={(e) => updateArrayField(experience, setExperience, idx, "role", e.target.value)} />
            <input placeholder="Company" value={exp.company} onChange={(e) => updateArrayField(experience, setExperience, idx, "company", e.target.value)} />
            <input placeholder="Duration" value={exp.duration} onChange={(e) => updateArrayField(experience, setExperience, idx, "duration", e.target.value)} />
            <textarea placeholder="Description" value={exp.desc} onChange={(e) => updateArrayField(experience, setExperience, idx, "desc", e.target.value)} />
          <button className="delete-btn" onClick={() => deleteArrayItem(experience, setExperience, idx)}>Delete</button> </div> ))} 
              <button className="add" onClick={() => addNewField(setExperience, { role: "", company: "", duration: "", desc: "" })}>+ Add Experience</button> 

        <h3>Education</h3>
        {education.map((edu, idx) => (
          <div key={idx} className="dynamic-field">
            <input placeholder="Degree" value={edu.degree} onChange={(e) => updateArrayField(education, setEducation, idx, "degree", e.target.value)} />
            <input placeholder="Institution" value={edu.institution} onChange={(e) => updateArrayField(education, setEducation, idx, "institution", e.target.value)} />
            <input placeholder="Year" value={edu.year} onChange={(e) => updateArrayField(education, setEducation, idx, "year", e.target.value)} />
          <button className="delete-btn" 
                onClick={() => deleteArrayItem(education, setEducation, idx)}>Delete</button> </div> ))} 
                <button className="add" onClick={() => addNewField(setEducation, { degree: "", institution: "", year: "" })}>+ Add Education</button> 

        <h3>Projects</h3>
        {projects.map((proj, idx) => (
          <div key={idx} className="dynamic-field">
            <input placeholder="Project Title" value={proj.title} onChange={(e) => updateArrayField(projects, setProjects, idx, "title", e.target.value)} />
            <textarea placeholder="Description" value={proj.desc} onChange={(e) => updateArrayField(projects, setProjects, idx, "desc", e.target.value)} />
          <button className="delete-btn" onClick={() => deleteArrayItem(projects, setProjects, idx)}>Delete</button> </div> ))} 
                  <button className="add" onClick={() => addNewField(setProjects, { title: "", desc: "" })}>+ Add Project</button> 
        {certifications && (
  <div className="editor-section">
    <h3>Certifications</h3>

    {certifications.map((cert, index) => (
      <div key={index} className="dynamic-field">

        <input
          type="text"
          placeholder="Certification Title"
          value={cert.title}
          onChange={(e) => {
            const updated = [...certifications];
            updated[index].title = e.target.value;
            setCertifications(updated);
          }}
        />

        <input
          type="text"
          placeholder="Issuer"
          value={cert.issuer}
          onChange={(e) => {
            const updated = [...certifications];
            updated[index].issuer = e.target.value;
            setCertifications(updated);
          }}
        />

        <input
          type="text"
          placeholder="Year"
          value={cert.year}
          onChange={(e) => {
            const updated = [...certifications];
            updated[index].year = e.target.value;
            setCertifications(updated);
          }}
        />

        <button
          onClick={() =>
            setCertifications(certifications.filter((_, i) => i !== index))
          }  className="delete-btn"
        >
          Remove
        </button>

      </div>
    ))}

    <button
      onClick={() =>
        setCertifications([
          ...certifications,
          { title: "", issuer: "", year: "" }
        ])
      } className="add"
    >
      + Add Certification
    </button>
  </div>
)}

  <div className="editor-section">
    <h3>Languages</h3>

    {languages.map((cert, index) => (
      <div key={index} className="dynamic-field">

        <input
          type="text"
          placeholder="Language"
          value={cert.name}
          onChange={(e) => {
            const updated = [...languages];
            updated[index].title = e.target.value;
            setLanguages(updated);
          }}
        />

        <input
          type="text"
          placeholder="level"
          value={cert.level}
          onChange={(e) => {
            const updated = [...languages];
            updated[index].issuer = e.target.value;
            setLanguages(updated);
          }}
        />

        <button
          onClick={() =>
            setLanguages(languages.filter((_, i) => i !== index))
          }  className="delete-btn"
        >
          Remove
        </button>

      </div>
    ))}

    <button
      onClick={() =>
        setLanguages([
          ...languages,
          { name: "", level: "" }
        ])
      } className="add"
    >
      + Add Language
    </button>
  </div>


        

        {!isMobile && (<>
<button className="download-btn no-print" 
style={{marginTop: "2px", width: "90%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
onClick={handleDownload}>
Download PDF
</button>
<button className="download-btn" 
style={{marginTop: "2px", width: "90%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
onClick={handleCreatePortfolio}>
Create Portfolio Link
</button></>
)}
          {isMobile && (
  <button
    className="download-btn no-print"
    style={{marginTop: "2px", width: "90%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}
    onClick={() => setShowPreview(true)}
  >
    Preview Resume
  </button>
)}

        </div>)}
        {(!isMobile || (isMobile && showPreview)) && (
      <div className="creative-editor-preview" >
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
<div key={pageIndex} className="pdf-page">

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
<button className="download-btn" onClick={handleCreatePortfolio}
style={{marginTop: "2px", width: "90%", padding: "12px,", backgroundColor:  "#1d4ed8", color: "white", border: "none", borderRadius: "30px",height:"30px", cursor: "pointer", fontWeight: "600", transition: "0.2s"}}>
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
    <Footer /></>
  );
};


export default CreativeResumeEditor;