import React from 'react';
import './IndustryRadar.css';

const IndustryRadar = () => {
  return (
    <div className="radar-wrapper">
      <div className="radar-container">
        <div className="radar-content">
          <h2 className="radar-title">Industry Radar</h2>
          <p className="radar-desc">
            Discover active filmmakers and production teams to follow.
          </p>
          <button className="radar-btn">
            Start Networking
          </button>
        </div>
        <div className="radar-background-graphics">
          <div className="circle-graphic circle-1"></div>
          <div className="circle-graphic circle-2"></div>
        </div>
      </div>
      <div className="pagination-dots">
        <div className="dot active-dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default IndustryRadar;
