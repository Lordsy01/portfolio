import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = [
    {
      category: 'Web Design',
      items: ['Responsive Design', 'User Research', 'Javascript', 'React.JS', 'Next.JS', 'CSS'],
    },
    
    {
      category: 'Secretary',
      items: ['Microsoft Office', 'Printing', 'Photocopy'],
    },
    {
      category: 'Soft Skills',
      items: ['Effective communication', 'Collaboration', 'Commitment', 'Leadership'],
    },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills.</h2>
      <div className="skills-grid">
        {skillsData.map((skillCategory, index) => (
          <div className="skill-category" key={index}>
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;