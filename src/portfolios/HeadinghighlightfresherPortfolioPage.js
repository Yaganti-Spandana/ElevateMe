import defaultProfile from "../images/headinghighlightfresher_resume_template/headinghighlightfresher1.png";
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function HeadinghighlightfresherPortfolioPage() {
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
          background: "rgb(94, 10, 49)",
          color: "#fbf8f6",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          padding: "15px",
          zIndex: 1000
        }}
      >
        <span onClick={() => scrollTo("home")}>Home</span>
        <span onClick={() => scrollTo("skills")}>Skills</span>
        <span onClick={() => scrollTo("education")}>Education</span>
        <span onClick={() => scrollTo("internships")}>Internships</span>
        <span onClick={() => scrollTo("projects")}>Projects</span>
        <span onClick={() => scrollTo("certifications")}>Certifications</span>
        <span onClick={() => scrollTo("achievements")}>Achievements</span>
        <span onClick={() => scrollTo("hobbies")}>Hobbies</span>
        <span onClick={() => scrollTo("languages")}>Languages</span>
        <span onClick={() => scrollTo("extraCurriculars")}>Extra Curriculars</span>
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
          background: "#fbf8f6",
          color:"rgb(94, 10, 49)"
        }}
      >
        <div style={{ textAlign: "center" }}>
  {data.common.photo ? (
  <img
    src={data.common.photo}
    alt="profile"
    style={{
      width: "200px",
      height: "200px",
      borderRadius: "10%",
      objectFit: "cover",
      border: "3px solid rgb(94, 10, 49)",
      marginLeft:"43%"
    }}
  />
) : (
  <div
    style={{
      width: "200px",
      height: "200px",
      borderRadius: "10%",
      backgroundImage: `url(${defaultProfile})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "3px solid rgb(94, 10, 49)",
      marginLeft:"43%"
    }}
  />
)}
  <h1>{data.common.name}</h1>
  <h3>{data.common.title}</h3>
  <p>{data.common.summary}</p>
</div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px" ,background: "#fbf8f6",
          color:"rgb(94, 10, 49)"}}
      >
        <h2>Skills</h2>
        <p>{data.common.skills?.join(", ")}</p>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px", background: "#fbf8f6",
          color:"rgb(94, 10, 49)" }}
      >
        <h2>Education</h2>

        {data.education?.map((edu, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <div style={{display:"flex"}}>
            <h3 style={{width:"30%"}} >{edu.institution}</h3>
            <p style={{width:"30%"}}>{edu.degree}</p>
            <p style={{width:"20%"}}>{edu.year}</p>
            <p style={{width:"20%"}}>{edu.grade}</p></div>
            <h4>Course Work:{edu.coursework.map((skill, idx) => 
            <div key={idx} style={{fontSize:"11px",marginTop:"10px"}}>
              <li> <div>{skill}</div></li>
            </div>
          )}</h4>
          </div>
        ))}
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="internships"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px", background: "#fbf8f6",
          color:"rgb(94, 10, 49)" }}
      >
        <h2>Internships</h2>

        {data.internships?.map((edu, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <div style={{display:"flex"}}>
            <h3 style={{width:"30%"}}>{edu.company}</h3>
            <p style={{width:"20%"}}>{edu.role}</p>
            <p style={{width:"20%"}}>{edu.duration}</p></div>
            <p>{edu.desc}</p>
          </div>
        ))}
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px", background: "#fbf8f6",
          color:"rgb(94, 10, 49)" }}
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
              background: "#fbf8f6",
          color:"rgb(94, 10, 49)"
            }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <h6>Demo:{p.link}</h6>
            <h4>Technologies Used:{p.technologies.map((skill, idx) => 
            <div key={idx} style={{fontSize:"11px",marginTop:"10px"}}>
              <li> <div>{skill}</div></li>
            </div>
          )}</h4>
          </motion.div>
        ))}
      </motion.section>

      {/* Certifications */}
      <motion.section
        id="certifications"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px", background: "#fbf8f6",
          color:"rgb(94, 10, 49)" }}
      >
        <h2>Certifications</h2>

        {data.certifications?.map((edu, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <div style={{display:"flex"}}>
            <h3 style={{width:"40%"}}>{edu.title}</h3>
            <p style={{width:"20%"}}>{edu.issuer}</p>
            <p style={{width:"20%"}}>{edu.year}</p></div>
            <p>{edu.details}</p>
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
        style={{ padding: "60px 40px" ,background: "#fbf8f6",
          color:"rgb(94, 10, 49)"}}
      >
        <h2>Achievements</h2>
        <h4>{data.achievements.map((skill, idx) => 
            <div key={idx} style={{fontSize:"11px",marginTop:"10px"}}>
              <li> <div>{skill}</div></li>
            </div>
          )}</h4>
      </motion.section>

      {/* Achievements */}
      <motion.section
        id="hobbies"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px" ,background: "#fbf8f6",
          color:"rgb(94, 10, 49)"}}
      >
        <h2>Hobbies</h2>
        <h4>{data.hobbies.map((skill, idx) => 
            <div key={idx} style={{fontSize:"11px",marginTop:"10px"}}>
              <li> <div>{skill}</div></li>
            </div>
          )}</h4>
      </motion.section>

      {/* Achievements */}
      <motion.section
        id="languages"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px" ,background: "#fbf8f6",
          color:"rgb(94, 10, 49)"}}
      >
        <h2>Languages</h2>
        <h4>{data.languages.map((skill, idx) => 
            <div key={idx} style={{fontSize:"11px",marginTop:"10px"}}>
              <li> <div>{skill}</div></li>
            </div>
          )}</h4>
      </motion.section>

      {/* Achievements */}
      <motion.section
        id="extraCurriculars"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px" ,background: "#fbf8f6",
          color:"rgb(94, 10, 49)"}}
      >
        <h2>Extra Curriculars</h2>
        <h4>{data.extraCurriculars.map((skill, idx) => 
            <div key={idx} style={{fontSize:"11px",marginTop:"10px"}}>
              <li> <div>{skill}</div></li>
            </div>
          )}</h4>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.6 }}
        style={{ padding: "60px 40px",background: "#fbf8f6",
          color:"rgb(94, 10, 49)" }}
      >
        <h2>Contact</h2>
        <p>Email: {data.common.contact?.email}</p>
        <p>Phone: {data.common.contact?.phone}</p>
        <p>LinkedIn: {data.common.contact?.linkedin}</p>
        <p>GitHub: {data.common.contact?.github}</p>
        <p>Portfolio: {data.common.contact?.portfolio}</p>
        <p>Address: {data.common.contact?.address}</p>
      </motion.section>

    </div>
  );
}

export default HeadinghighlightfresherPortfolioPage;