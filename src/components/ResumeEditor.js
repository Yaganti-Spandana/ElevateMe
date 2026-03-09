import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import resumeData from "./ResumeData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumeEditor = () => {
  const { templateId } = useParams(); // e.g., "simple" or "modern"
  const template = resumeData[templateId];

  const [common, setCommon] = useState(template.common);
  const [experience, setExperience] = useState(template.experience);
  const [education, setEducation] = useState(template.education);

  const resumeRef = useRef(null);

  const handleDownload = () => {
    if (resumeRef.current) {
      html2canvas(resumeRef.current, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${common.name}_Resume.pdf`);
      });
    }
  };

  const updateArrayField = (array, setArray, index, field, value) => {
    const updated = [...array];
    updated[index][field] = value;
    setArray(updated);
  };

  return (
    <div style={{ display: "flex", gap: 20, padding: 20, flexWrap: "wrap" }}>
      {/* Sidebar for editing */}
      <div style={{ flex: "1 1 300px", maxWidth: 350, background: "#f7f7f7", padding: 20, borderRadius: 10 }}>
        <h2>Edit {templateId} Resume</h2>

        {/* Common fields */}
        <label>Name</label>
        <input value={common.name} onChange={(e) => setCommon({ ...common, name: e.target.value })} style={{ width: "100%", marginBottom: 5 }} />
        <label>Title</label>
        <input value={common.title} onChange={(e) => setCommon({ ...common, title: e.target.value })} style={{ width: "100%", marginBottom: 5 }} />
        <label>Summary</label>
        <textarea value={common.summary} onChange={(e) => setCommon({ ...common, summary: e.target.value })} style={{ width: "100%", marginBottom: 10 }} />

        <h3>Contact</h3>
        <input value={common.contact.email} onChange={(e) => setCommon({ ...common, contact: { ...common.contact, email: e.target.value } })} style={{ width: "100%", marginBottom: 3 }} />
        <input value={common.contact.phone} onChange={(e) => setCommon({ ...common, contact: { ...common.contact, phone: e.target.value } })} style={{ width: "100%", marginBottom: 3 }} />
        <input value={common.contact.linkedin} onChange={(e) => setCommon({ ...common, contact: { ...common.contact, linkedin: e.target.value } })} style={{ width: "100%", marginBottom: 10 }} />

        {/* Experience */}
        <h3>Experience</h3>
        {experience.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: 10 }}>
            <input placeholder="Role" value={exp.role} onChange={(e) => updateArrayField(experience, setExperience, idx, "role", e.target.value)} style={{ width: "100%", marginBottom: 2 }} />
            <input placeholder="Company" value={exp.company} onChange={(e) => updateArrayField(experience, setExperience, idx, "company", e.target.value)} style={{ width: "100%", marginBottom: 2 }} />
            <input placeholder="Duration" value={exp.duration} onChange={(e) => updateArrayField(experience, setExperience, idx, "duration", e.target.value)} style={{ width: "100%", marginBottom: 2 }} />
            <textarea placeholder="Description" value={exp.desc} onChange={(e) => updateArrayField(experience, setExperience, idx, "desc", e.target.value)} style={{ width: "100%", marginBottom: 5 }} />
          </div>
        ))}

        {/* Education */}
        <h3>Education</h3>
        {education.map((edu, idx) => (
          <div key={idx} style={{ marginBottom: 10 }}>
            <input placeholder="Degree" value={edu.degree} onChange={(e) => updateArrayField(education, setEducation, idx, "degree", e.target.value)} style={{ width: "100%", marginBottom: 2 }} />
            <input placeholder="Institution" value={edu.institution} onChange={(e) => updateArrayField(education, setEducation, idx, "institution", e.target.value)} style={{ width: "100%", marginBottom: 2 }} />
            <input placeholder="Year" value={edu.year} onChange={(e) => updateArrayField(education, setEducation, idx, "year", e.target.value)} style={{ width: "100%", marginBottom: 5 }} />
          </div>
        ))}

        <h3>Skills</h3>
        <input value={common.skills.join(", ")} onChange={(e) => setCommon({ ...common, skills: e.target.value.split(",").map(s => s.trim()) })} style={{ width: "100%", marginBottom: 10 }} />

        <button onClick={handleDownload} style={{ padding: "10px 20px", borderRadius: 8, backgroundColor: "#4f46e5", color: "white", fontWeight: "bold", width: "100%" }}>
          Download PDF
        </button>
      </div>

      {/* Preview */}
      <div ref={resumeRef} style={{ flex: "2 1 600px", padding: 20, borderRadius: 10, backgroundColor: templateId === "modern" ? "#f9f9f9" : "#fff" }}>
        <h1 style={{ fontSize: templateId === "modern" ? 32 : 28, color: templateId === "modern" ? "#4f46e5" : "#000" }}>{common.name}</h1>
        <h2 style={{ fontSize: 20, marginBottom: 10 }}>{common.title}</h2>
        <p>{common.summary}</p>
        <p>Contact: {common.contact.email} | {common.contact.phone} | {common.contact.linkedin}</p>

        <h3>Experience</h3>
        {experience.map((exp, idx) => (
          <div key={idx}>
            <strong>{exp.role}</strong> @ {exp.company} ({exp.duration})
            <p>{exp.desc}</p>
          </div>
        ))}

        <h3>Education</h3>
        {education.map((edu, idx) => (
          <div key={idx}>
            <strong>{edu.degree}</strong> - {edu.institution} ({edu.year})
          </div>
        ))}

        <h3>Skills</h3>
        <p>{common.skills.join(", ")}</p>
      </div>
    </div>
  );
};

export default ResumeEditor;