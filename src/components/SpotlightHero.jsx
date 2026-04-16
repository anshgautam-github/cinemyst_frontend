import React from 'react';
import { PlayCircle, Award } from 'lucide-react';
import './SpotlightHero.css';

const SpotlightHero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="badge glass-panel">
          <Award size={16} color="#F5A623" />
          <span className="text-gradient-gold">Authentic Opportunities</span>
        </div>
        <h1 className="hero-title">
          Step Into The <br/><span className="text-gradient-purple">Spotlight.</span>
        </h1>
        <p className="hero-subtitle">
          Break the barriers. In India's film industry, genuine talent deserves a direct stage. Connect, discover, and be discovered without the middlemen.
        </p>
        <div className="hero-buttons">
          <a href="#talent" className="glow-btn" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box'}}>Explore Talent</a>
          <button className="glow-btn-gold hero-btn-alt" onClick={() => alert('Casting portal opening soon!')}>
            <PlayCircle size={20} style={{marginRight: '8px'}} />
            Post a Casting
          </button>
        </div>
      </div>
      <div className="hero-visual">
         <div className="visual-circle circle-back"></div>
         <div className="visual-circle circle-front"></div>
         <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" alt="Cinematic Talent" className="hero-img glass-panel" />
      </div>
    </section>
  );
};
export default SpotlightHero;
