import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import { FaCode, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const toRotate = ['Quantum Researcher', 'GSoC Contributor', 'Cybersecurity Enthusiast'];

  // Parallax state
  const [parallax, setParallax] = useState(0);
  const heroRef = useRef();

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingSpeed = isDeleting ? 60 : 120;
    const timeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum]);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const offset = Math.max(0, -rect.top);
      setParallax(offset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-availability anim-load anim-delay-1">
          <FaCode />
          <span>Eager to learn & contribute</span>
        </div>
        <h1 className="anim-load anim-delay-2">
          Hi, I'm <span className="highlight">Saumya</span>
        </h1>
        <p className="hero-pitch anim-load anim-delay-3">
          <span className="dynamic-text">{text}</span>
          <span className="cursor">|</span>
        </p>
        <p className="hero-sub-pitch anim-load anim-delay-4">
          From C++, web dev to post quantum crypto, I turn complex challenges into elegant & secure solutions.
        </p>
        <div className="hero-buttons anim-load anim-delay-5">
          <Link to="/work" className="cta-btn primary">
            See My Work
          </Link>
          <Link to="/blog" className="cta-btn secondary">
            Read My Blog <FaArrowRight className="btn-icon" />
          </Link>
        </div>
        {/* <div className="hero-location">
          <FaMapMarkerAlt />
          <span>New Delhi, India</span>
        </div> */}
      </div>
      <div className="hero-image-container anim-load anim-delay-2">
        <img
          src="/saumya_picture.jpg"
          alt="Developer"
          className="hero-image"
          loading="lazy"
        />
        <div className="sparkle one"></div>
        <div className="sparkle two"></div>
        <div className="sparkle three"></div>
      </div>
    </section>
  );
};

export default Hero;
 