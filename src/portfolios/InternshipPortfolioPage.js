import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function InternshipPortfolioPage() {
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
          color: "#a2b7d6",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "15px",
          zIndex: 1000
        }}
      >
        <span onClick={() => scrollTo("home")}>Home</span>
        <span onClick={() => scrollTo("skills")}>Skills</span>
        <span onClick={() => scrollTo("projects")}>Projects</span>
        <span onClick={() => scrollTo("internships")}>Internships</span>
        <span onClick={() => scrollTo("education")}>Education</span>
        <span onClick={() => scrollTo("contact")}>Contact</span>
      </nav>

      {/* HERO */}
      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{
          padding: "80px 40px",
          textAlign: "center",
          background: "#a2b7d6"
        }}
      >
        <h1 style={{ fontSize: "40px" }}>{data.common.name}</h1>
        <h3>{data.common.title}</h3>
        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
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
        style={{ padding: "60px 40px" ,background: "#a2b7d6"}}
      >
        <h2>Skills</h2>
        <p>{data.common.skills?.join(", ")}</p>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px", background: "#a2b7d6" }}
      >
        <h2>Projects</h2>

        {data.projects?.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "10px",
              background:"#a2b7d6"
            }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* INTERNSHIPS */}
      {data.internships?.length > 0 && (
        <motion.section
          id="internships"
          initial="hidden"
          whileInView="visible"
          variants={sectionAnimation}
          transition={{ duration: 0.6 }}
          style={{ padding: "60px 40px",background:"#a2b7d6" }}
        >
          <h2>Internships</h2>

          {data.internships.map((item, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <h3>{item.role} @ {item.company}</h3>
              <p>{item.duration}</p>
              <p>{item.desc}</p>
            </div>
          ))}
        </motion.section>
      )}

      {/* EDUCATION */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px", background:"#a2b7d6" }}
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

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background:"#a2b7d6" }}
      >
        <h2>Contact</h2>
        <p>Email: {data.common.contact?.email}</p>
        <p>Phone: {data.common.contact?.phone}</p>
        <p>LinkedIn: {data.common.contact?.linkedin}</p>
        <p>GitHub: {data.common.contact?.github}</p>
      </motion.section>

    </div>
  );
}

export default InternshipPortfolioPage;