import React from 'react';
import { Home, Clapperboard, Film, Users } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className="bottom-nav-wrapper">
      <nav className="bottom-nav-container glass-effect">
        <button className="nav-item active">
          <div className="nav-icon-wrapper active-bg">
             <Home size={22} color="#531149" fill="#531149" />
          </div>
          <span className="nav-label">Home</span>
        </button>
        <button className="nav-item">
          <div className="nav-icon-wrapper">
             <Clapperboard size={22} color="#2A1733" />
          </div>
          <span className="nav-label">Castings</span>
        </button>
        <button className="nav-item">
          <div className="nav-icon-wrapper">
             <Film size={22} color="#2A1733" />
          </div>
          <span className="nav-label">Flicks</span>
        </button>
        <button className="nav-item">
          <div className="nav-icon-wrapper">
             <Users size={22} color="#2A1733" />
          </div>
          <span className="nav-label">1:1</span>
        </button>
        <button className="nav-item">
          <div className="nav-icon-wrapper profile-avatar-wrapper">
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Profile" className="profile-avatar" />
          </div>
        </button>
      </nav>
    </div>
  );
};

export default BottomNav;
