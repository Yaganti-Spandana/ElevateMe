import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";
import menuIcon from "../images/logo.png";   // add menu icon image

const Navbar = () => {

  const [open,setOpen] = useState(false);

  return (
    <div className="nav">
    
      {/* RIGHT CORNER MENU ICON */}
      <div className="menu-icon" onClick={()=>setOpen(!open)}>
        <img src={menuIcon} alt="menu"/>
      </div>

      {/* SIDE NAVBAR */}
      <nav className={`side-navbar ${open ? "active" : ""}`}>

        <div className="navbar-logo">
          <Link to="/" className="lin">
            <svg viewBox="0 0 300 300" width="150" height="150">
              <image
                href={logo}
                x="0"
                y="0"
                width="300"
                height="300"
                clipPath="url(#reactShape)"
              />
              <defs>
                <clipPath id="reactShape">
                  <ellipse cx="150" cy="150" rx="120" ry="50" transform="rotate(40 150 153)" />
                  <ellipse cx="150" cy="150" rx="120" ry="50" transform="rotate(135 155 152)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>

        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resumetemplates" style={{fontSize:"14px"}}>🎓 Resume Templates</Link></li>
          <li><Link to="/invitations" style={{fontSize:"14px"}}>🎉 Invitations</Link></li>
          <li><Link to="/life" style={{fontSize:"14px"}}>🧠⚙️ Life Operating System</Link></li>
          <li><Link to="/learningpaths" style={{fontSize:"14px"}}>🚀 Learning Paths</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </nav>

    </div>
  );
};

export default Navbar;