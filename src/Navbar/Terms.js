import React from "react";
import "./Terms.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Terms = () => {
  return (
    <><Navbar/>
    <main className="terms-page">

      <div className="terms-container">

        <h1 className="terms-title">Terms of Service</h1>

        <p className="terms-intro">
          By accessing and using our @ElevateMe website, you agree to comply
          with the following terms and conditions. Please read these terms
          carefully before using our services.
        </p>

        <div className="terms-sections">

          <div className="terms-card">
            <h2>Use of Our Services</h2>
            <p>
              Our @ElevateMe is intended to help users create professional
              resumes. You agree to use the platform responsibly and only for
              lawful purposes.
            </p>
          </div>

          <div className="terms-card">
            <h2>User Responsibilities</h2>
            <ul>
              <li>Provide accurate information in your resume</li>
              <li>Do not misuse or attempt to harm the platform</li>
              <li>Respect intellectual property rights</li>
              <li>Follow applicable laws and regulations</li>
            </ul>
          </div>

          <div className="terms-card">
            <h2>Intellectual Property</h2>
            <p>
              All website content, templates, and designs are the property of
              our platform and are protected by copyright laws.
            </p>
          </div>

          <div className="terms-card">
            <h2>Limitation of Liability</h2>
            <p>
              We are not responsible for any losses or damages resulting from
              the use of our website or resume templates.
            </p>
          </div>

          <div className="terms-card">
            <h2>Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Any
              updates will be posted on this page.
            </p>
          </div>

          <div className="terms-card">
            <h2>Contact</h2>
            <p>
              If you have questions about these terms, please contact us through
              the Contact page on our website.
            </p>
          </div>

        </div>

      </div>

    </main><Footer/></>
  );
};

export default Terms;