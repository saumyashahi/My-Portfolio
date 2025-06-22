import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        Saumya Shahi
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/work" className="nav-links" onClick={closeMobileMenu}>
            Work
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
            Gallery
          </Link>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="connect-button">Connect with me!</button>
      </div>
    </nav>
  );
};

export default Navbar; 