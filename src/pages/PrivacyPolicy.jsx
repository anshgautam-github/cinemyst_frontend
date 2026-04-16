import React from 'react';
import DarkHeader from '../components/DarkHeader';
import Footer from '../components/Footer';
import './PageText.css';

const PrivacyPolicy = () => {
  return (
    <div className="cinematic-app">
      <DarkHeader />
      <main className="content-area text-page">
        <h1 className="page-title">Privacy <span className="text-gradient-purple">Policy</span></h1>
        <div className="glass-panel text-content">
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly, such as when you create an account, build a portfolio, or communicate with other users on CineMyst. This includes your name, email, role, and uploaded media.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to facilitate direct connections between artists and filmmakers, to improve the CineMyst platform, and to ensure a secure environment for genuine talent.</p>

          <h2>3. Sharing of Information</h2>
          <p>Your public portfolio details are visible to other users globally. We do not sell your personal data to third parties. We only share information when legally required or to protect our users.</p>

          <h2>4. Your Rights</h2>
          <p>You have the right to access, update, or delete your portfolio and personal information at any time through your account settings.</p>

          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@cinemyst.in.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;
