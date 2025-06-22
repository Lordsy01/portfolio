import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience.</h2>
      <p>Career Highlights:Experience that Matters.</p>
      <div className="experience-item">
        <h3>Software and IT Training (SIT)</h3>
        <p> At SEED.lnc, I gained hands-on experience in web development and programming.
          I worked on real-life projects and learned modern tools and technologies that prepared me for the tech industry.</p>
        <ul>
          <li>HTML, CSS, and JavaScript for frontend development</li>
          <li>Responsive Web Design</li>
          <li>React.js </li>
          <li>Python Programming</li>
          <li>Git & GitHub for version control</li>
          <li>Debugging and testing web applications</li>
        </ul>

        <h3>SECRETARY/CASHIER</h3>
        <p>NTOHBIZ'S Documentation | 2022-present</p>
        <ul>
          <li>Handling typing, printing, filling and general office support tasks. Proficient in Microsoft Office tools</li>
          <li>i also handle money, recieves payments and give out receipts </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;