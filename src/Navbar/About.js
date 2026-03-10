import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <><Navbar/>
    <main className="about-page">

      <div className="about-container">

        <h1 className="about-title">About Our @ElevateMe</h1>

        <p className="about-description">
          Our @ElevateMe helps users create professional resumes quickly
          using modern and attractive templates. The platform is designed to
          make resume creation simple, efficient, and accessible for everyone.
        </p>

        <div className="about-sections">

          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              Our mission is to simplify resume creation by providing easy-to-use
              tools and professional templates that help people showcase their
              skills, education, and achievements effectively.
            </p>
          </div>

          <div className="about-card">
            <h2>What We Offer</h2>
            <ul>
              <li>Multiple modern resume templates</li>
              <li>Simple editing interface</li>
              <li>Clean and professional layouts</li>
              <li>Fast resume creation</li>
              <li>User-friendly experience</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>Who Can Use It?</h2>
            <p>
              Students, fresh graduates, and professionals can use this platform
              to create polished resumes that stand out in job applications.
            </p>
          </div>

        </div>

      </div>

    </main><Footer/></>
  );
};

export default About;