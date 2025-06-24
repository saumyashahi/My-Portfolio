import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2 className="modal-title">Let's Connect</h2>
        <p className="modal-subtitle">Find me on these platforms:</p>
        <div className="modal-links">
          <a href="https://github.com/saumyashahi" target="_blank" rel="noopener noreferrer" className="modal-link-item">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/saumya-shahi-31a892255/" target="_blank" rel="noopener noreferrer" className="modal-link-item">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:saumya.shahi.22@iitkottayam.ac.in" className="modal-link-item">
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal; 