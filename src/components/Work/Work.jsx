import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Work.css';

const projects = [
  {
    title: 'Green Strike',
    description: 'The "Green Strike" logo uses a bold, green lightning bolt cutting through a leaf, symbolizing the impact and speed of sustainable energy initiatives.',
    stack: ['Illustrator', 'Graphic Design'],
    domain: 'Branding',
    githubUrl: '#',
    deployUrl: '#',
  },
  {
    title: 'Google Summer of Code',
    description: 'Developed a new feature for a popular open-source project, focusing on performance and scalability. Worked with a mentor to deliver a high-quality contribution.',
    stack: ['React', 'JavaScript', 'Node.js', 'Firebase'],
    domain: 'Open Source',
    githubUrl: 'https://github.com/saumyashahi',
    deployUrl: '#',
  },
  // Add more projects here
];

const Work = () => {
  return (
    <div className="work-page-container">
      <h1 className="work-page-title">My Work</h1>
      <div className="work-projects-grid">
        {projects.map((project, index) => (
          <div className="work-project-card" key={index}>
            <div className="project-info">
              <h2 className="project-title">
                <span className="highlight-yellow">{project.title}</span>
              </h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.githubUrl} className="project-icon-button" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href={project.deployUrl} className="project-icon-button" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Deploy
                </a>
              </div>
            </div>
            <div className="project-details">
              <div className="detail-item">
                <h4 className="detail-title">Domain</h4>
                <p>{project.domain}</p>
              </div>
              <div className="detail-item">
                <h4 className="detail-title">Tech Stack</h4>
                <div className="tech-stack-pills">
                  {project.stack.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work; 