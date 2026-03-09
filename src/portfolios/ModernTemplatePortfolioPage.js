import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function ModernTemplatePortfolioPage() {
  const { username } = useParams();
  const storedData = localStorage.getItem("portfolio_" + username);

  if (!storedData) {
    return <h2 style={{ padding: "40px" }}>Portfolio not found</h2>;
  }
  const data = JSON.parse(storedData);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* NAVBAR */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          background: "#111",
          color: "white",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "15px",
          zIndex: 1000
        }}
      >
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("home")}>Home</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("skills")}>Skills</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("projects")}>Projects</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("experience")}>Experience</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("education")}>Education</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("languages")}>Languages</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("tools")}>Tools</span>
      </nav>

      {/* HERO SECTION */}
      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{
          padding: "80px 40px",
          textAlign: "center",
          background: "#f5f5f5"
        }}
      >
        <h1 style={{ fontSize: "40px" }}>{data.common.name}</h1>
        <p style={{fontSize:"13px"}}>{data.common?.title || "Title"}</p>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          {data.common.summary}
        </p>

        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          {data.common.contact?.email} |
{data.common.contact?.phone} |
{data.common.contact?.linkedin}|
{data.common.contact?.address}
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px" }}
      >
        <h2>Skills</h2>
        <p>{data.common.skills.join(", ")}</p>

      </motion.section>
      <motion.section
        id="languages"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px" }}
      >
        <h2>Languages</h2>
        <p>{data.common.languages.join(", ")}</p>

      </motion.section>
      <motion.section
        id="tools"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px" }}
      >
        <h2>Tools</h2>
        <p>{data.common.tools.join(", ")}</p>

      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px", background: "#f5f5f5" }}
      >
        <h2>Projects</h2>

        {data.projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px"
            }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px" }}
      >
        <h2>Experience</h2>

        {data.experience?.map((exp, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.desc}</p>
            <p>{exp.highlights}</p>
          </div>
        ))}
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px", background: "#f5f5f5" }}
      >
        <h2>Education</h2>

        {data.education?.map((edu, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </motion.section>

    </div>
  );
}

export default ModernTemplatePortfolioPage;