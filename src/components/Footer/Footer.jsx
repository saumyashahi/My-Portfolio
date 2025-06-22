import React from 'react';
import './Footer.css';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Saumya Shahi. All Rights Reserved.
        </div>
        <div className="footer-actions">
          <div className="footer-socials">
            <a href="https://github.com/saumyashahi" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/saumya-shahi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="mailto:saumyashahi05@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </div>
          <button className="theme-toggle-button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 