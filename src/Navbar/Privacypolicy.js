import React from "react";
import "./Privacypolicy.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <><Navbar/>
    <main className="privacy-page">

      <div className="privacy-container">

        <h1 className="privacy-title">Privacy Policy</h1>

        <p className="privacy-intro">
          Your privacy is important to us. This Privacy Policy explains how
          our @ElevateMe website collects, uses, and protects your
          personal information when you use our platform.
        </p>

        <div className="privacy-sections">

          <div className="privacy-card">
            <h2>Information We Collect</h2>
            <p>
              We may collect information such as your name, email address,
              and resume details when you use our resume builder tools.
              This information is used only to provide and improve our services.
            </p>
          </div>

          <div className="privacy-card">
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To help you create and manage your resume</li>
              <li>To improve website functionality</li>
              <li>To respond to your queries or feedback</li>
              <li>To enhance user experience</li>
            </ul>
          </div>

          <div className="privacy-card">
            <h2>Data Protection</h2>
            <p>
              We take reasonable security measures to protect your information
              from unauthorized access, misuse, or disclosure.
            </p>
          </div>

          <div className="privacy-card">
            <h2>Third-Party Services</h2>
            <p>
              Our website may contain links to third-party services. We are
              not responsible for the privacy practices of those websites.
            </p>
          </div>

          <div className="privacy-card">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page.
            </p>
          </div>

          <div className="privacy-card">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us through the Contact page of our website.
            </p>
          </div>

        </div>

      </div>

    </main><Footer/></>
  );
};

export default PrivacyPolicy;