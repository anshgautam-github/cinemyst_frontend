import React from 'react';
import { Bell, MessageCircle } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-text">
        <span className="logo-dark">Cine</span>
        <span className="logo-gradient">Myst</span>
      </div>
      <div className="header-actions">
        <button className="action-btn">
          <Bell size={20} color="#531149" strokeWidth={2.5} />
        </button>
        <div className="divider"></div>
        <button className="action-btn">
          <MessageCircle size={20} color="#531149" strokeWidth={2.5} />
        </button>
      </div>
    </header>
  );
};

export default Header;
