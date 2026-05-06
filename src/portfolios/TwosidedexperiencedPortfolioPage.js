import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function TwosidedexperiencedPortfolioPage() {
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
          background: "#ffffff",
          color: "rgb(46, 159, 157)",
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
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("certifications")}>Certifications</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("achievements")}>Achievements</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("languages")}>Languages</span>
        <span style={{ cursor: "pointer" }} onClick={() => scrollTo("interests")}>Interests</span>
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
          padding: "20px 40px",
          textAlign: "center",
          background: "rgb(46, 159, 157)",color:"#ffffff"
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
  {data.common.name}
</h1>

<h3>{data.common.title}</h3>

<p>{data.common.location}</p>

<div style={{ marginTop: "20px", lineHeight: "28px" }}>
  <div>{data.common.email}</div>
  <div>{data.common.phone}</div>
  <div>{data.common.linkedin}</div>
  <div>{data.common.github}</div>
  <div>{data.common.portfolio}</div>
</div>

<p
  style={{
    maxWidth: "800px",
    margin: "30px auto",
    lineHeight: "28px"
  }}
>
  {data.common.summary}
</p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(46, 159, 157)",color:"#ffffff" }}
      >
        <h2>Skills</h2>
<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
  {data.skills?.map((skill, i) => (
    <span
      key={i}
      style={{
        padding: "8px 16px",
        border: "1px solid white",
        borderRadius: "20px"
      }}
    >
      {skill}
    </span>
  ))}
</div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(46, 159, 157)",color:"#ffffff" }}
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

<p>
  <b>Tech Stack:</b> {p.tech}
</p>

<p>
  <b>GitHub:</b> {p.link}
</p>

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
        style={{ padding: "60px 40px",background: "rgb(46, 159, 157)",color:"#ffffff" }}
      >
        <h2>Experience</h2>

        {data.experience?.map((exp, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h3>{exp.role}</h3>

<p>
  <b>{exp.company}</b>
</p>

<p>{exp.location}</p>

<p>{exp.duration}</p>

<p>{exp.desc}</p>
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
        style={{ padding: "60px 40px",background: "rgb(46, 159, 157)",color:"#ffffff"}}
      >
        <h2>Education</h2>

        {data.education?.map((edu, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h3>{edu.degree}</h3>

<p>
  <b>{edu.institution}</b>
</p>

<p>{edu.year}</p>

<p>CGPA: {edu.cgpa}</p>

<p>{edu.details}</p>
          </div>
        ))}
      </motion.section>

      <motion.section
        id="certifications"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(46, 159, 157)",color:"#ffffff" }}
      >
        <h2>Certifications</h2>
{data.certifications?.map((item, i) => (
  <p key={i}>• {item}</p>
))}
      </motion.section>

      <motion.section
        id="achievements"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(46, 159, 157)",color:"#ffffff" }}
      >
        <h2>Achievements</h2>
{data.achievements?.map((item, i) => (
  <p key={i}>• {item}</p>
))}
      </motion.section>

<motion.section
        id="languages"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(46, 159, 157)",color:"#ffffff" }}
      >
        <h2>Languages</h2>
{data.languages?.map((item, i) => (
  <p key={i}>• {item}</p>
))}
      </motion.section>

      <motion.section
        id="interests"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(46, 159, 157)",color:"#ffffff" }}
      >
        <h2>Interests</h2>
{data.interests?.map((item, i) => (
  <p key={i}>• {item}</p>
))}
      </motion.section>
    </div>
  );
}

export default TwosidedexperiencedPortfolioPage;