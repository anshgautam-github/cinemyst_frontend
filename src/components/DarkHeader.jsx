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
        <button onClick={() => alert('Castings portal coming soon!')} className="nav-link" style={{background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>Castings</button>
        <button onClick={() => alert('Flicks coming soon!')} className="nav-link" style={{background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>Flicks</button>
        <button onClick={() => alert('Community coming soon!')} className="nav-link" style={{background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>Community</button>
      </nav>
      <div className="header-cta">
        <button className="glow-btn" onClick={() => alert('Network registration opening soon!')}>
          <Sparkles size={16} style={{marginRight: '8px'}} />
          Join Network
        </button>
      </div>
    </header>
  );
};
export default DarkHeader;
