import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-browser-controls">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
      </div>
      <div className="navbar-address-bar">
        <span>LORDSY.</span>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#about" className="navbar-link ">About</a>
          <a href="#skills" className="navbar-link ">Skills</a>
          <a href="#experience" className="navbar-link ">Experience</a>
        </div>
      </div>
    
    </nav>
  );
}

export default Navbar;