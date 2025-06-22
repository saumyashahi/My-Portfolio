import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaCode, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const toRotate = ['Quantum Researcher', 'GSoC Contributor', 'Cybersecurity Enthusiast'];

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
          From C++ fundamentals to quantum cryptography, I thrive on turning complex challenges into elegant, secure solutions.
        </p>
        <div className="hero-buttons anim-load anim-delay-5">
          <button className="hero-btn-primary">Connect with me!</button>
          <button className="hero-btn-secondary">See my Portfolio</button>
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
        />
        <div className="sparkle one"></div>
        <div className="sparkle two"></div>
        <div className="sparkle three"></div>
      </div>
    </section>
  );
};

export default Hero;
 