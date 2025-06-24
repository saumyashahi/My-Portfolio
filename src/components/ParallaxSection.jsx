import React, { useEffect, useState, useRef } from 'react';
import './ParallaxSection.css';

const SAMPLE_IMAGE = '';

const ParallaxSection = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      setOffset(scrollY - rect.top + 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax-section" ref={sectionRef}>
      <div
        className="parallax-image-wrapper"
        style={{
          transform: `translateY(${offset * 0.18}px) scale(1.08)`
        }}
      >
        
      </div>
      <div className="parallax-content simple-quote-content">
        <blockquote className="simple-parallax-quote">
          “<br></br>If your dreams for the future don't scare you, maybe you're not thinking big enough.<br />
          <span className="parallax-quote-accent">Constantly challenge yourself—don't just exist, LIVE.</span>”
        </blockquote>
      </div>
    </section>
  );
};

export default ParallaxSection; 