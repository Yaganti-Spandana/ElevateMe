import React from "react";
import "./Privacypolicy.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="privacy-page">
        <div className="privacy-container">
          <h1 className="privacy-title">Privacy Policy</h1>

          <p className="privacy-intro">
            Your privacy is important to us. This Privacy Policy explains how
            @ElevateMe collects, uses, and protects your personal information
            when you use our platform to create resumes, invitation cards, and
            other designs.
          </p>

          <div className="privacy-sections">

            <div className="privacy-card">
              <h2>Information We Collect</h2>
              <p>
                We may collect information such as your name, email address,
                and the details you enter while creating resumes or invitation
                designs on our platform. This information is used only to provide
                and improve our services.
              </p>
            </div>

            <div className="privacy-card">
              <h2>How We Use Your Information</h2>
              <ul>
                <li>To help you create and manage resumes and invitation cards</li>
                <li>To improve website functionality and performance</li>
                <li>To respond to your questions, feedback, or support requests</li>
                <li>To enhance overall user experience on our platform</li>
              </ul>
            </div>

            <div className="privacy-card">
              <h2>AI-Generated Content</h2>
              <p>
                Some images and design elements available in our templates are
                generated using artificial intelligence (AI). These are provided
                to enhance creativity and design flexibility for users. While we
                strive for quality and originality, users are responsible for
                reviewing and ensuring the suitability of generated content for
                their specific use.
              </p>
            </div>

            <div className="privacy-card">
              <h2>Data Protection</h2>
              <p>
                We take reasonable security measures to protect your information
                from unauthorized access, misuse, or disclosure. Your data is
                handled with care to ensure a safe experience while using our
                services.
              </p>
            </div>

            <div className="privacy-card">
              <h2>Third-Party Services</h2>
              <p>
                Our website may contain links to third-party services or tools.
                We are not responsible for the privacy practices of those external
                websites.
              </p>
            </div>

            <div className="privacy-card">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page to keep users informed about how their
                information is handled.
              </p>
            </div>

            <div className="privacy-card">
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us through the Contact page of our website.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;