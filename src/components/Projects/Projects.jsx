import React from 'react';
import './Projects.css';

function Projects() {
  const handleViewProjectClick = () => {
    alert("Project still in construction");
  };

  
  
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects.</h2>
      <p>The project is still being constructed.</p>
      {/* Add your project components/layout here */}
      <div className="project-card-grid">
        {/* Example Project Card */}
        <div className="project-card">
          <h3>Conundrum</h3>
          <p>Containing many childhood games.</p>
          <button onClick={handleViewProjectClick}>VIEW PROJECT</button>
        </div>
        {/* <div className="project-card">
          <h3>Project Title 2</h3>
          <p>Short description of project 2.</p>
          <button>View Project</button>
        </div> */}
      </div>
    </div>
  );
}

export default Projects;