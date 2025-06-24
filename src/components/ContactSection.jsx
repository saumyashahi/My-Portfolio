import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './ContactSection.css';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="contact-section">
      <div className="sticky-note contact-cta-card">
        <h2 className="contact-title">Let's Connect!</h2>
        <p className="contact-message">
          Open to collaborations, research, and new opportunities.<br />
          Want to chat or work together?
        </p>
        <button
          className="connect-btn"
          onClick={() => setIsModalOpen(true)}
        >
          Connect with me
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ContactSection; 