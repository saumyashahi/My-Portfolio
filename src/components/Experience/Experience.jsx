import React, { useEffect, useRef } from 'react';
import './Experience.css';

const Experience = () => {
    const experienceData = [
        {
          type: 'Experience',
          date: 'May 2025 – Present',
          title: 'Contributor @ Google Summer of Code (GSoC)',
          company: 'Sugar Labs',
          location: 'Remote',
          description: [
            'Architected and developed a scalable brick rendering engine for a visual programming environment.',
            'Engineered a core brick-to-AST translation engine, enabling backend extensibility.',
            'Implemented a comprehensive drag-and-drop system in React with custom collision detection.',
          ],
        },
        {
            type: 'Experience',
            date: 'May 2025 - Present',
            title: 'Quantum Research Intern @ DRDO Funded Project',
            company: 'NIT Surathkal',
            location: 'NIT Karnataka, Surathkal',
            description: [
              'Constructed novel quantum distinguishers for Feistel ciphers and Generalized Feistel Networks.',
              'Authored mathematical proofs for cryptanalytic schemes leveraging Simon\'s algorithm.',
              'Implemented and validated cryptographic schemes on IBM Quantum Computers using Qiskit.',
            ],
          },
          {
            type: 'Experience',
            date: 'Summer 2024',
            title: 'Attendee @ ACM Cryptography Summer School',
            company: 'IIT Bombay (IITB Trust Lab)',
            location: 'Mumbai, India',
            description: [
              'Explored advanced topics including homomorphic encryption, ZK-proofs, and post-quantum cryptography.',
              'Gained hands-on experience with OpenSSL, OpenFHE, Circom, and other cryptographic tools.',
              'Achieved 1st place in a team-based internal challenge for cryptographic problem-solving.'
            ],
          },
          {
            type: 'Project',
            date: 'Jan 2025 - April 2025',
            title: 'REV-X | Peer Project Review Platform',
            tech: 'TypeScript, React.js, FastAPI, Supabase, Vite, Figma',
            description: [
              'Led the development of a secure, collaborative platform for 200+ students.',
              'Integrated JWT-based authentication and authorization for robust security.',
              'Architected a full-stack system with a React frontend and a scalable FastAPI backend.',
            ],
          },
          {
            type: 'Project',
            date: 'Jan 2024 - Apr 2024',
            title: 'IIITK Placement Cell Website',
            tech: 'Next.js, React.js, Tailwind CSS, Figma',
            description: [
              'Designed and launched a responsive portal that increased user engagement by 25%.',
              'Developed interactive UI components that reduced recruiter effort by 40% through automation.',
              'Collaborated in a team of 4 to achieve full deployment in under 3 months.',
            ],
          },
      ];

      const itemsRef = useRef([]);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          },
          {
            threshold: 0.1,
          }
        );
    
        const currentItems = itemsRef.current;
    
        currentItems.forEach((item) => {
          if (item) {
            observer.observe(item);
          }
        });
    
        return () => {
            currentItems.forEach((item) => {
                if(item) observer.unobserve(item);
            });
        };
      }, []);

  return (
    <section className="experience-section">
      <h2 className="experience-title">
        <span className="highlight-exp">My Experience</span>
      </h2>
      <div className="timeline-container">
        {experienceData
          .filter(item => item.type === 'Experience')
          .map((item, index) => (
          <div className="timeline-item" key={index} ref={el => {itemsRef.current[index] = el;}}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3 className="timeline-title">{item.title}</h3>
              {item.company && <h4 className="timeline-company">{item.company}</h4>}
              <ul className="timeline-description">
                {item.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              {item.tech && <div className="timeline-tech"><span>Tech:</span> {item.tech}</div>}
              {/* <a href="#" className="timeline-more-btn">Learn More</a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 