import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container simple-footer">
      <div className="footer-content">
        <p>&copy; {2025} Lordsy.</p>
        <a href="#home" className="footer-link">Back to Top</a>
      </div>
    </footer>
  );
}

export default Footer;