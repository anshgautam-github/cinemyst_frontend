import React from 'react';
import { Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container glass-panel">
      <div className="footer-content">
        <div className="footer-brand">
          <Video size={24} color="#D142ED" />
          <span className="footer-logo-text">Cine<span className="text-gradient-purple">Myst</span></span>
        </div>
        <p className="footer-tagline">Empowering genuine talent in India's film industry.</p>
      </div>
      <div className="footer-links">
        <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        <Link to="/terms" className="footer-link">Terms and Conditions</Link>
        <a href="#contact" className="footer-link">Contact Us</a>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CineMyst. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
