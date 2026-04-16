import React from 'react';
import { Camera, Clapperboard, Edit3, Music } from 'lucide-react';
import './TalentGrid.css';

const talents = [
  { id: 1, name: "Aarika Shenoy", role: "Cinematographer", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80", icon: <Camera size={18} color="#D142ED" /> },
  { id: 2, name: "Vikram Raj", role: "Director", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80", icon: <Clapperboard size={18} color="#F5A623" /> },
  { id: 3, name: "Meera Nair", role: "Screenwriter", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80", icon: <Edit3 size={18} color="#D142ED" /> },
  { id: 4, name: "Rohan Das", role: "Composer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80", icon: <Music size={18} color="#F5A623" /> },
];

const TalentGrid = () => {
  return (
    <section id="talent" className="talent-section">
      <div className="section-header">
        <h2 className="section-title">Discover <span className="text-gradient-purple">Visionaries</span></h2>
        <p className="section-subtitle">Real portfolios, real opportunities. No filters.</p>
      </div>
      <div className="talent-grid">
        {talents.map(talent => (
          <div key={talent.id} className="talent-card glass-panel">
            <div className="card-img-wrapper">
              <img src={talent.image} alt={talent.name} className="talent-img" />
              <div className="card-overlay">
                <button className="glow-btn overlay-btn" onClick={() => alert('Portfolio details coming soon!')}>View Portfolio</button>
              </div>
            </div>
            <div className="card-info">
              <div className="role-badge">
                 {talent.icon}
                 <span>{talent.role}</span>
              </div>
              <h3 className="talent-name">{talent.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TalentGrid;
