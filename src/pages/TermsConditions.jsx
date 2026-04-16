import React from 'react';
import DarkHeader from '../components/DarkHeader';
import Footer from '../components/Footer';
import './PageText.css';

const TermsConditions = () => {
  return (
    <div className="cinematic-app">
      <DarkHeader />
      <main className="content-area text-page">
        <h1 className="page-title">Terms and <span className="text-gradient-gold">Conditions</span></h1>
        <div className="glass-panel text-content">
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using CineMyst, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.</p>

          <h2>2. User Accounts and Portfolios</h2>
          <p>You are responsible for safeguarding your account. You must ensure that the content you upload to your portfolio is authentic, legally yours, and does not violate any copyright or intellectual property laws.</p>

          <h2>3. Code of Conduct</h2>
          <p>CineMyst is built to empower genuine talent. Harassment, spam, fraudulent casting calls, and abusive behavior will result in an immediate and permanent ban from the platform.</p>

          <h2>4. Intellectual Property</h2>
          <p>The platform design, brand, and underlying code are the intellectual property of CineMyst. You retain all rights to the media you upload to your portfolio.</p>

          <h2>5. Limitation of Liability</h2>
          <p>CineMyst simply facilitates connections. We are not responsible for the outcome of any casting, hiring, or collaborations that occur as a result of using the platform.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default TermsConditions;
