import React from 'react';
import { Sparkles, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import './DarkHeader.css';

const DarkHeader = () => {
  return (
    <header className="dark-header-container glass-panel">
      <div className="header-logo">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <Video className="logo-icon" size={28} color="#D142ED" />
          <span className="logo-text" style={{color: '#fff'}}>Cine<span className="text-gradient-purple">Myst</span></span>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link active">Discover</Link>
        <a href="#castings" className="nav-link">Castings</a>
        <a href="#flicks" className="nav-link">Flicks</a>
        <a href="#community" className="nav-link">Community</a>
      </nav>
      <div className="header-cta">
        <button className="glow-btn">
          <Sparkles size={16} style={{marginRight: '8px'}} />
          Join Network
        </button>
      </div>
    </header>
  );
};
export default DarkHeader;
