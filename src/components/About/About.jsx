import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About me.</h2>
      <p className="about-description">
        Developing beautiful and functional websites is what I love doing, and that's why I give my all in every new challenge.
      </p>

      <div className="about-sections">
        <div className="my-stack-section">
          <h3>My Stack.</h3>
          <div className="stack-badges">
            <span className="badge">✨ JavaScript Proficiency</span>
            <span className="badge">⭐ Python</span>
            <span className="badge">💜 html/css</span>
            <span className="badge">📝 Bootstrap</span>
            <span className="badge">🚀 Problem Solving</span>
            <span className="badge">💡 c/c++</span>
          </div>
        </div>
        {/* <div className="my-special-place-section"> */}
          {/* <h3>My Special Place.</h3> */}
          {/* <div className="globe-placeholder"> */}
            {/* http://www.maphill.com/cameroon/nord-ouest/3d-maps/satellite-map/ */}
            {/* You would integrate a 3D globe library here, e.g., react-globe or Three.js */}
            {/* <p>Interactive Globe Placeholder</p> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default About;