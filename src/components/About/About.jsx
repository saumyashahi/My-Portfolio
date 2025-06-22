import React from 'react';
import './About.css';
import { FaGraduationCap, FaCode, FaFlask, FaRocket, FaShieldAlt, FaSearch, FaPalette, FaLightbulb } from 'react-icons/fa';

const journeyData = [
  {
    icon: <FaGraduationCap />,
    date: 'First Year',
    title: 'Discovering the Spark',
    description: "Ventured into coding with C and C++, discovering a new passion for logic and problem-solving. First steps in web development with HTML, CSS, and JavaScript laid the groundwork for future projects.",
  },
  {
    icon: <FaCode />,
    date: 'Second Year',
    title: 'From Coursework to Creation',
    description: "Contributed to my college's official placement portal and dove into open source with Sugar Labs, turning theoretical knowledge into real-world impact and setting my sights on Google Summer of Code.",
  },
  {
    icon: <FaFlask />,
    date: 'Third Year',
    title: 'A Deep Dive into the Abstract',
    description: "Fell in love with the complexities of Quantum Computing and Cybersecurity. This new fascination led me to a DRDO-funded research project at NITK, exploring the frontiers of quantum cryptanalysis.",
  },
  {
    icon: <FaRocket />,
    date: 'Present Day',
    title: 'Launching into the Future',
    description: "Accepted into Google Summer of Code with Sugar Labs while continuing quantum research. Attended the ACM India Summer School on Cryptography at IIT Bombay, constantly learning and pushing the boundaries of what's possible.",
  },
];

const highlightsData = [
    { text: 'Cybersecurity + Quantum', icon: <FaShieldAlt /> },
    { text: 'GSoC @ Sugar Labs', icon: <FaCode /> },
    { text: 'Research @ NITK (DRDO)', icon: <FaSearch /> },
    { text: 'IIIT Kottayam, CSE', icon: <FaGraduationCap /> },
    { text: 'Singer, Dancer, Sketcher', icon: <FaPalette /> },
    { text: 'Always Curious', icon: <FaLightbulb /> },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1 className="about-title">About Me</h1>
        <svg className="arrow" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.2899 44.5C36.7899 43.1 36.7899 37.1 40.0899 33.7C44.7899 28.7 33.3899 18.2 25.4899 20.1C17.5899 22 20.3899 31.9 20.3899 31.9" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.4899 24.1L25.4899 20.1L29.4899 24.7" stroke="var(--text-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="about-content">
        <div className="about-image-stack">
          <div className="image-card card-1"></div>
          <div className="image-card card-2"></div>
          <div className="image-card card-3">
            <img src="https://avatars.githubusercontent.com/u/147405306?v=4" alt="Saumya Shahi" />
          </div>
        </div>
        <div className="about-text">
          <h2>A curious mind driven by code, questions, and creativity.</h2>
          <p>
            From my first lines of C++ to diving deep into quantum cryptography, my journey has been a non-stop exploration of how logic can be made beautiful and secure. I thrive on turning complex challenges into elegant solutions.
          </p>
        </div>
      </div>

      <div className="journey-section">
        <h2 className="journey-title text-accent">My Journey So Far</h2>
        <div className="journey-story">
          <p>
            My journey into tech wasn't a straight line. I stepped into my first C++ class without any prior coding experience, just a spark of curiosity. That spark quickly caught fire as I discovered the beauty of logic and the thrill of turning lines of code into something real.
          </p>
          <p>
            That initial passion led me from basic web development to my first major project: our college's placement portal. It was a whirlwind of learning on the fly with a talented team and my first taste of real-world collaboration. This experience pushed me to dive deeper, leading me to open source and the incredible community at Sugar Labs.
          </p>
          <p>
            But my path took a surprising turn when I stumbled upon Quantum Computing and Cybersecurity. The complexity and the challenge were magnetic. I found myself cold-emailing professors, driven by a need to understand more, which led me to a DRDO-funded research project at NITK, exploring the fascinating world of quantum cryptanalysis.
          </p>
          <p>
            The summer that followed was a blur of intensity. I was accepted into Google Summer of Code, attended the ACM India Summer School at IIT Bombay, and continued my quantum research. Juggling all three was demanding and filled with moments of self-doubt, but being surrounded by brilliant peers showed me how much there was still to learn and ignited my drive even further.
          </p>
          <p>
            That experience taught me that passion isn't just about the 'aha' moments, but about the relentless pursuit of knowledge. My journey is ongoing, and I'm always excited for the next problem to solve.
          </p>
        </div>
      </div>
      
      <div className="highlights-section">
        {highlightsData.map((item, index) => (
            <div className="sticky-note" key={index}>
                <div className="sticky-note-icon">{item.icon}</div>
                <p>{item.text}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default About; 