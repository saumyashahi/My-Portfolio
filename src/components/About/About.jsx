import React, { useRef, useEffect } from 'react';
import './About.css';
import { FaGraduationCap, FaCode, FaFlask, FaRocket, FaShieldAlt, FaSearch, FaPalette, FaLightbulb, FaLaptopCode, FaUserSecret, FaCodeBranch, FaUniversity, FaUserShield } from 'react-icons/fa';

const journeyData = [
  {
    icon: <FaGraduationCap />,
    title: 'Finding My Rhythm in Code',
    description:
    "I entered college without any coding background. My first language was C with C++, and I still remember the satisfaction of solving my first logic problem and writing hello world in C. I soon began exploring web development and React, which helped me work on real projects like my college's placement portal where my major contribution was the design and navigation components. I volunteered for the GDSC team at IIIT Kottayam, where I discovered my love for design and UI/UX.",
  },
  {
    icon: <FaLaptopCode />,
    title: 'Turning Curiosity Into Contribution',
    description:
      "In my second year, I dove into open source with Sugar Labs and Google Developer Student Clubs. I contributed to design and navigation components, started solving DSA problems, and mentored others in C++, while building confidence in collaborative tech work. I also found joy in sharing knowledge, helping juniors, and organizing cultural and coding events at IIIT Kottayam. I was the part of the organizing team of TEDxIIITKottayam, which taught me execution under pressure — it was a great experience.",
  },
      {
    icon: <FaUserShield/>,
    title: 'Diving Deeper: Quantum Meets Cyber',
    description:
    "The turning point came when I discovered Quantum Computing and Cybersecurity. It felt challenging, abstract, and beautiful. I stared exploring the field, and read a part of the book <i>Dancing with Qubits</i> by Scott Aaronson (trust me it really is as fun as it sounds), which made me fall in love with the endless possibilities quantum computing has to offer. So, I thought to myself, why not research more in this feild. I landed on intersection of cybersecurityand Quantum Computing. I began cold-emailing professors, which eventually led me to a DRDO-funded research internship at NITK — focused on quantum distinguishers, Simon's algorithm, Grover's algorithm, and key recovery attacks in Generalized Feistel networks.",
    },
  {
    icon: <FaUserSecret />,
    title: 'Research, GSoC, and Growth',
    description:
    "This summer has been my most intense yet — balancing Google Summer of Code with Sugar Labs (Music Blocks Masonry Module), continuing research at NITK, brainstorming every single idea, nights spent in fixing bugs (yes, vibe coding up this website) and attending the ACM India Summer School on Cryptography at IIT Bombay. It's been sleepless, surreal, and transformative. ",
  },
  {
    icon: <FaUserSecret />,
    title: 'Excited for the next chapter',
    description:
    "I'm now stepping into my third year with more clarity and hunger. I want to publish my research, explore and learn more by doing research internships, and build tools that make security simple, accessible, and futuristic. I am thankful to all that happened this summer and the way it all aligned, my interest in the research feild has grown even higher and not just theoretical, I want to put every piece of work I do to solve a problem and make a positive impact in the community. Looking forward to the next chapter of my journey.",
  },
];

const highlightsData = [
  { text: 'Cybersecurity + Quantum Focus', icon: <FaShieldAlt /> },
  { text: 'GSoC 2025 @ Sugar Labs', icon: <FaCodeBranch /> },
  { text: 'Quantum Research (DRDO, NITK)', icon: <FaFlask /> },
  { text: 'IIIT Kottayam, CSE + Cybersecurity', icon: <FaUniversity /> },
  { text: 'Creative Soul: Music, Dance, Art', icon: <FaPalette /> },
  { text: 'Lifelong Learner + Self-Starter', icon: <FaLightbulb /> },
];

const About = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

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
            <img src="https://avatars.githubusercontent.com/u/147405306?v=4" alt="Saumya Shahi" loading="lazy" />
          </div>
        </div>
        <div className="about-text">
          <h2>A curious mind blending code, creativity, and cryptography.</h2>
          <p>
            I'm Saumya — a developer, researcher, and creative explorer on a journey to build meaningful things at the intersection of cybersecurity and quantum computing. Whether I'm writing code, sketching out ideas, or crafting in a dance routine, I'm always led by creativity & curiosity.
          </p>
        </div>
      </div>

      <div className="journey-section">
        <h2 className="journey-title text-accent">My Journey So Far</h2>
        <div className="journey-timeline creative-timeline">
          <div className="timeline-center-line" />
          {journeyData.map((item, index) => (
            <div
              className={`journey-item journey-animate-${index % 2 === 0 ? 'left' : 'right'}`}
              key={index}
              ref={el => cardRefs.current[index] = el}
            >
              <div className="journey-icon">
                {item.icon}
              </div>
              <div className="journey-content">
                <h3 className="journey-item-title">{item.title}</h3>
                <p className="journey-description" dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            </div>
          ))}
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
