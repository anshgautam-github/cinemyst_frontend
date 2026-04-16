import React from 'react';
import DarkHeader from './components/DarkHeader';
import SpotlightHero from './components/SpotlightHero';
import TalentGrid from './components/TalentGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="cinematic-app">
      <DarkHeader />
      <main className="content-area">
        <SpotlightHero />
        <TalentGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
