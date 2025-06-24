import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Work.css';

const initialProjects = [
  {
    id: 'musicblocks',
    title: 'MusicBlocks Masonry Module',
    description: 'Develop a version4 for MusicBlocks, a visual programming tool by Sugar Labs. My work focused on rendering programming "bricks" and translate them into Abstract Syntax Trees (AST) for the program engine to execute.',
    stack: ['TypeScript', 'Javascript', 'React.js', 'OOPs', 'Storybook', 'Zustand', 'SASS', 'SVGs', 'ASTs'],
    domain: 'Open Source Dev, Game Dev, Web dev',
    githubUrl: 'https://github.com/sugarlabs/musicblocks-v4',
    deployUrl: 'https://musicblocks.sugarlabs.org/',
    buildProcess: "The primary challenge was crafting a scalable TypeScript architecture capable of dynamically generating SVG paths for each programming brick. This involved creating a robust brick-to-AST translation engine, which transforms the visual components into abstract syntax trees that our program engine can execute. A key feature was engineering a comprehensive drag-and-drop system with precise collision detection, enabling an intuitive and seamless visual programming workflow for users. I am essentially working on building a visual programming environment for the MusicBlocks program engine that has dynamic rendering capabilities along with interaction logic for proper user feedback.",
    galleryImages: ['/project-musicblocks.png', '/assets/Images/expression-bricks.png', '/assets/Images/nested-bricks.png', '/mbv4-3.png'],
  },
  {
    id: 'revx',
    title: 'REV-X: Peer Review Platform',
    description: 'REV-X is a collaborative platform that facilitates secure project uploads and a peer-rating system. It is designed to encourage constructive feedback, enhance project quality, and promote collaborative work among students.',
    stack: ['Waterfall model', 'Figma', 'TypeScript', 'React.js', 'Python', 'FastAPI', 'Supabase', 'JWT Tokens'],
    domain: 'Ui/Ux design, Group project, Full-Stack Dev',
    githubUrl: 'https://github.com/saumyashahi/RevX',
    deployUrl: 'https://revx-dqx.pages.dev/about',
    buildProcess: "As part of a four-person team, we developed the full-stack architecture for REV-X. I was the sole designer for the Ui feature design and making the platform user friendly. The frontend was built with React.js and TypeScript, while the backend utilized Python with FastAPI. For data management, we integrated Supabase, which provided a scalable database and real-time update capabilities. A major focus was security; we implemented JWT tokens and college email authentication to ensure a secure and trusted environment for the 200+ students using the platform. I presented this project for my SSE coursework and our team was awarded A grade for building Rev-X.",
    galleryImages: ['/project-revx.png', '/rev-x-team.png', '/revx-features.png'],
  },
  {
    id: 'quantum-quest',
    title: 'Quantum Distinguishers',
    description: "A research project focused on constructing quantum distinguishers for Feistel ciphers and Generalized Feistel Networks as part of a DRDO-funded initiative at NITK.",
    stack: ['Python', 'Qiskit', 'Jupyter', 'Kaggle', 'LaTeX'],
    domain: 'Quantum Cryptanalysis, Research',
    githubUrl: '#',
    deployUrl: '#',
    buildProcess: "This research involved establishing mathematical proofs for novel cryptanalytic schemes. The core idea was to use Simon's algorithm to detect a secret period, which distinguishes a Feistel permutation from a random one. I implemented these cryptographic schemes using Python and Qiskit, running simulations on IBM's quantum computers to validate the theoretical findings. I am currently working on the key recovery attacks our distinguishers can perform on the Generalized Feistel Networks.",
    galleryImages: ['/qc-circuit.png', '/qc-graph.png'],
  },
  {
    id: 'placement-cell',
    title: 'IIIT Kottayam Placement Portal',
    description: 'Designed and co-developed the official placement web portal for IIIT Kottayam, significantly improving engagement for both companies and students.',
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'Figma'],
    domain: 'Web Development',
    githubUrl: 'https://github.com/saumyashahi/IIITK-Placement-Website',
    deployUrl: 'https://tpc.iiitkottayam.ac.in/',
    buildProcess: "Our goal was to create a responsive and interactive UI that automated repetitive tasks for recruiters. By crafting custom React.js components, we reduced manual effort for recruiters by an estimated 40%, greatly enhancing their workflow. I was part of a lean, four-developer team that took the project from concept to full deployment in just three months, resulting in a 25% increase in user engagement.",
    galleryImages: ['/project-placement.png', '/tpc-recruiter.png', '/tpc-stats.png'],
  },

];

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="work-project-card">
      <div className="project-main-content">
        <div className="project-info">
          <h2 className="project-title">
            <span className="highlight-yellow">{project.title}</span>
          </h2>
          <p className="project-description">{project.description}</p>
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
          <div className="project-links">
            <a href={project.githubUrl} className="project-icon-button" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href={project.deployUrl} className="project-icon-button" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Deploy
            </a>
          </div>
        </div>
      </div>
      <div className="expand-button-container">
        <div
          role="button"
          tabIndex={0}
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsExpanded(!isExpanded)}
          className="expand-button"
        >
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          <span>{isExpanded ? 'Show Less' : 'More Details'}</span>
        </div>
      </div>
      {isExpanded && (
        <div className="project-expanded-content">
          <h4>How it was built</h4>
          <p>{project.buildProcess}</p>
          {project.galleryImages.length > 0 && (
            <>
              <h4>Project Gallery</h4>
              <div className="mini-gallery">
                {project.galleryImages.map((img, index) => (
                  <img key={index} src={img} alt={`${project.title} gallery ${index + 1}`} loading="lazy" />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const Work = () => {
  return (
    <div className="work-page-container">
      <motion.h1 
        className="work-page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      >
        My Work
      </motion.h1>
      <div className="work-projects-grid">
        {initialProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Work; 