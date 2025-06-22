import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [title, setTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const fullTitle = 'Featured Works';

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (title.length < fullTitle.length) {
                    setTitle(fullTitle.substring(0, title.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 3000); // Pause before deleting
                }
            } else {
                if (title.length > 0) {
                    setTitle(title.substring(0, title.length - 1));
                } else {
                    setIsDeleting(false);
                }
            }
        };

        const typingSpeed = isDeleting ? 80 : 150;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [title, isDeleting, fullTitle]);

    const projectData = [
        {
          title: 'REV-X | Peer Project Review',
          image: '/project-revx.png', // You'll need to add this image to /public
          githubUrl: 'https://github.com/saumya-shahi/rev-x',
          color: 'blue'
        },
        {
          title: 'IIITK Placement Cell Website',
          image: '/project-placement.png', // You'll need to add this image to /public
          githubUrl: 'https://github.com/saumya-shahi/placement-cell-website',
          color: 'yellow'
        },
        {
            title: 'MusicBlocks v4 (Masonry)',
            image: '/project-musicblocks.png', // You'll need to add this image to /public
            githubUrl: 'https://github.com/sugarlabs/musicblocks-v4',
            color: 'pink'
        },
      ];

  return (
    <section className="projects-section">
        <div className="projects-header">
            <h2 className="projects-title">
                <span className="highlight-proj">
                    {title}
                    <span className="cursor-proj">|</span>
                </span>
            </h2>
        </div>
      
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className={`project-card card-proj-${project.color}`}>
            <div className="project-bubble bubble-1"></div>
            <div className="project-bubble bubble-2"></div>
            <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-button">
                See Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-button-container">
        <a href="https://github.com/saumya-shahi" target="_blank" rel="noopener noreferrer" className="portfolio-button">
            Check my Portfolio
        </a>
      </div>
    </section>
  );
};

export default Projects; 