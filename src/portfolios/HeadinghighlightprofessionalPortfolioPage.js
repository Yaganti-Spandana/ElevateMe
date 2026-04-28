import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function HeadinghighlightprofessionalPortfolioPage() {
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
          color: "rgb(10, 88, 94)",
          background:"rgb(249, 252, 252)",
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
          background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)"
        }}
      >
        <h1>{data.common?.name || "Your Name"}</h1>
        <p style={{fontSize:"13px"}}>{data.common?.title || "Title"}</p>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          {data.common.summary}
        </p>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          {data.common.contact?.email} <br></br>
{data.common.contact?.phone} <br></br>
{data.common.contact?.linkedin}<br></br>
{data.common.contact?.github}
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)" }}
      >
        <h2>Skills</h2>
        <p>{data.common.skills.join(", ")}</p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)"}}
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
              borderRadius: "10px",background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)"
            }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <p>Technologies Used-{p.tech}</p>
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
        style={{ padding: "60px 40px",background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)" }}
      >
        <h2>Experience</h2>

        {data.experience?.map((exp, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h3>{exp.company}</h3>
            <p>{exp.role}</p>
            <p>{exp.desc}</p>
            <p>{exp.duration}</p>
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
        style={{ padding: "60px 40px",background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)"}}
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

      {/* certifications */}
      <motion.section
        id="certifications"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)"}}
      >
        <h2>Certifications</h2>

        {data.certifications?.map((edu, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <h3>{edu.name}</h3>
            <p>{edu.issuer}</p>
          </div>
        ))}
      </motion.section>

      {/* Achievements */}
            <motion.section
              id="achievements"
              initial="hidden"
              whileInView="visible"
              variants={sectionAnimation}
              transition={{ duration: 0.6 }}
              style={{ padding: "60px 40px" ,background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)"}}
            >
              <h2>Achievements</h2>
              <h4>{data.achievements.map((skill, idx) => 
                  <div key={idx} style={{fontSize:"11px",marginTop:"10px"}}>
                    <li> <div>{skill}</div></li>
                  </div>
                )}</h4>
            </motion.section>

            {/* Languages */}
                  <motion.section
                    id="languages"
                    initial="hidden"
                    whileInView="visible"
                    variants={sectionAnimation}
                    transition={{ duration: 0.6 }}
                    style={{ padding: "60px 40px" ,background: "rgb(10, 88, 94)",color:"rgb(249, 252, 252)"}}
                  >
                    <h2>Languages</h2>
                    <h4>{data.languages.map((skill, idx) => 
                        <div key={idx} style={{fontSize:"11px",marginTop:"10px"}}>
                          <li> <div>{skill}</div></li>
                        </div>
                      )}</h4>
                  </motion.section>

    </div>
  );
}

export default HeadinghighlightprofessionalPortfolioPage;