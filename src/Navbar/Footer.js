// src/components/Footer.js
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ElevateMe. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link> | Developed By <a
            href="https://yaganti-spandana.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="dev-link"
          >
            SPANDANA YAGANTI
          </a>
      </div>
    </footer>
  );
};

export default Footer;