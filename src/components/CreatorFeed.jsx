import React from 'react';
import { Heart, MessageSquare, Send, Plus } from 'lucide-react';
import './CreatorFeed.css';

const CreatorFeed = () => {
  return (
    <div className="feed-container">
      <div className="section-header">
        <div className="section-subtitle">
          <span className="pink-dot"></span> Community
        </div>
        <h3 className="section-title">Latest From Creators</h3>
      </div>

      <div className="post-card">
        <div className="post-header">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" alt="Ananya" className="post-avatar" />
          <div className="post-author-info">
            <h4 className="post-author-name">Ananya Agrawal</h4>
            <p className="post-author-meta">Filmmaker · 1h</p>
          </div>
        </div>
        
        <p className="post-text">Keep glowing ✨🎥</p>
        
        <div className="post-image-grid-container">
          <div className="post-images">
            <img src="https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&w=400&q=80" alt="Post img 1" className="post-img img-left" />
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80" alt="Post img 2" className="post-img img-right" />
          </div>
          <button className="add-btn">
            <Plus size={28} color="#FFFFFF" strokeWidth={3} />
          </button>
        </div>

        <div className="post-actions">
          <div className="action-left">
            <button className="post-action-btn"><Heart size={20} color="#A095A3" /> <span className="action-count">0</span></button>
            <button className="post-action-btn"><MessageSquare size={20} color="#A095A3" /> <span className="action-count">0</span></button>
          </div>
          <button className="post-action-btn"><Send size={20} color="#A095A3" /></button>
        </div>
      </div>
    </div>
  );
};

export default CreatorFeed;
