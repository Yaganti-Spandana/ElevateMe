import React from "react";
import "./Terms.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Terms = () => {
return (
<> <Navbar /> <main className="terms-page">


    <div className="terms-container">

      <h1 className="terms-title">Terms of Service</h1>

      <p className="terms-intro">
        By accessing and using the @ElevateMe platform, you agree to comply
        with the following terms and conditions. Our platform allows users
        to create professional resumes and design invitation cards using
        customizable templates. Please read these terms carefully before
        using our services.
      </p>

      <div className="terms-sections">

        <div className="terms-card">
          <h2>Use of Our Services</h2>
          <p>
            @ElevateMe is designed to help users create resumes and
            invitation designs quickly and easily. You agree to use the
            platform responsibly and only for lawful purposes.
          </p>
        </div>

        <div className="terms-card">
          <h2>User Responsibilities</h2>
          <ul>
            <li>Provide accurate information in your resume or designs</li>
            <li>Do not misuse or attempt to harm the platform</li>
            <li>Respect intellectual property rights</li>
            <li>Follow applicable laws and regulations</li>
          </ul>
        </div>

        <div className="terms-card">
          <h2>Intellectual Property</h2>
          <p>
            All templates, designs, and content available on @ElevateMe are
            the property of the platform and are protected by copyright and
            intellectual property laws.
          </p>
        </div>

        <div className="terms-card">
          <h2>Limitation of Liability</h2>
          <p>
            We are not responsible for any losses, damages, or issues
            resulting from the use of our website, resume templates, or
            invitation card designs.
          </p>
        </div>

        <div className="terms-card">
          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time.
            Any updates will be posted on this page to keep users informed.
          </p>
        </div>

        <div className="terms-card">
          <h2>Contact</h2>
          <p>
            If you have questions regarding these Terms of Service,
            please contact us through the Contact page on our website.
          </p>
        </div>

      </div>

    </div>

  </main>
  <Footer />
</>

);
};

export default Terms;
