import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-3d-ball">
      <div className="loader-bubble bubble1"></div>
      <div className="loader-bubble bubble2"></div>
      <div className="loader-bubble bubble3"></div>
      <div className="loader-bubble bubble4"></div>
      <div className="loader-bubble bubble5"></div>
      <div className="loader-ball-core"></div>
    </div>
  </div>
);

export default Loader; 