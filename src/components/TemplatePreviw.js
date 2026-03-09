// src/ModernATSTemplateWithPreview.jsx
import React, { useState, useRef } from "react";
import { FaUsers, FaTasks, FaChartLine } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./ModernATSTemplate.css"; // custom CSS

const ModernATSTemplateWithPreview = () => {
  const [headline, setHeadline] = useState("Hire Smarter, Faster, Better");
  const [subtext, setSubtext] = useState(
    "Our modern ATS platform streamlines recruiting so your team can focus on top talent."
  );
  const [features, setFeatures] = useState([
    { icon: <FaUsers size={30} />, title: "Candidate Management", desc: "Track all applicants in one central dashboard." },
    { icon: <FaTasks size={30} />, title: "Automated Workflows", desc: "Reduce repetitive tasks with automation." },
    { icon: <FaChartLine size={30} />, title: "Analytics & Insights", desc: "Make data-driven hiring decisions." },
  ]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const templateRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead captured:", email);
    setSubmitted(true);
    setEmail("");
  };

  const handleDownload = () => {
    if (templateRef.current) {
      html2canvas(templateRef.current, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("Modern_ATS_Template.pdf");
      });
    }
  };

  const handleFeatureChange = (index, field, value) => {
    const updated = [...features];
    updated[index][field] = value;
    setFeatures(updated);
  };

  return (
    <div className="template-editor-container">
      {/* Controls */}
      <div className="controls-panel">
        <h2>Edit Content</h2>
        <div className="control-group">
          <label>Headline</label>
          <input value={headline} onChange={(e) => setHeadline(e.target.value)} />
        </div>
        <div className="control-group">
          <label>Subtext</label>
          <textarea value={subtext} onChange={(e) => setSubtext(e.target.value)} />
        </div>
        {features.map((feature, idx) => (
          <div key={idx} className="control-group feature-edit">
            <label>Feature {idx + 1} Title</label>
            <input
              value={feature.title}
              onChange={(e) => handleFeatureChange(idx, "title", e.target.value)}
            />
            <label>Feature {idx + 1} Description</label>
            <textarea
              value={feature.desc}
              onChange={(e) => handleFeatureChange(idx, "desc", e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleDownload} className="download-btn">
          Download as PDF
        </button>
      </div>

      {/* Preview */}
      <div className="preview-panel" ref={templateRef}>
        {/* Hero */}
        <div className="hero-section">
          <h1>{headline}</h1>
          <p>{subtext}</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="hero-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Get Started</button>
            </form>
          ) : (
            <p className="thank-you-msg">Thanks! We'll be in touch soon.</p>
          )}
        </div>

        {/* Features */}
        <div className="features-section">
          {features.map((feature, idx) => (
            <div className="feature-card" key={idx}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <p>“This ATS transformed our hiring process. It's intuitive and fast.”</p>
              <strong>- Jane D., HR Manager</strong>
            </div>
            <div className="testimonial-card">
              <p>“Automation saved us countless hours. Highly recommend!”</p>
              <strong>- Mike S., Recruiter</strong>
            </div>
            <div className="testimonial-card">
              <p>“Data-driven insights helped us hire top talent efficiently.”</p>
              <strong>- Lisa K., Talent Lead</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernATSTemplateWithPreview;