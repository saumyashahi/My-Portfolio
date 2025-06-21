import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
        Saumya Shahi
      </a>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <a href="#about" className="nav-links" onClick={closeMobileMenu}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#work" className="nav-links" onClick={closeMobileMenu}>
            Work
          </a>
        </li>
        <li className="nav-item">
          <a href="#blogs" className="nav-links" onClick={closeMobileMenu}>
            Blogs
          </a>
        </li>
        <li className="nav-item">
          <a href="#gallery" className="nav-links" onClick={closeMobileMenu}>
            Gallery
          </a>
        </li>
      </ul>
      {/* <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button> */}
      <button className="connect-button">Connect with me!</button>
    </nav>
  );
};

export default Navbar; 