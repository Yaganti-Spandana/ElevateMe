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
          @ElevateMe is a creative platform that helps users 
          design professional resumes and beautiful invitation 
          cards using modern and customizable templates. 
          Our goal is to make designing simple, fast, and 
          accessible for everyone, whether you are preparing 
          for a job application or creating invitations for special occasions.
        </p>

        <div className="about-sections">

          <div className="about-card">
            <h2>Our Mission</h2>
            <p>
              Our mission is to simplify the design process by 
              providing easy-to-use tools and elegant templates 
              that allow users to create professional resumes and 
              attractive invitation cards without needing advanced design skills.
            </p>
          </div>

          <div className="about-card">
            <h2>What We Offer</h2>
            <ul> <li>Multiple modern resume templates</li> 
            <li>Beautiful wedding and event invitation templates</li> 
            <li>Simple drag-and-edit interface</li> 
            <li>Clean and professional layouts</li> 
            <li>Fast and easy design creation</li> 
            <li>User-friendly experience</li> </ul>
          </div>

          <div className="about-card">
            <h2>Who Can Use It?</h2>
            <p>
              Students, fresh graduates, professionals, and anyone planning 
              special events can use @ElevateMe to create polished resumes 
              and stylish invitations that leave a lasting impression.

            </p>
          </div>

        </div>

      </div>

    </main><Footer/></>
  );
};

export default About;