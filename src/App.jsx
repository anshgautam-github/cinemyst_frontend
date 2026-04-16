import React from 'react';
import DarkHeader from './components/DarkHeader';
import SpotlightHero from './components/SpotlightHero';
import TalentGrid from './components/TalentGrid';
import './App.css';

function App() {
  return (
    <div className="cinematic-app">
      <DarkHeader />
      <main className="content-area">
        <SpotlightHero />
        <TalentGrid />
      </main>
    </div>
  );
}

export default App;
