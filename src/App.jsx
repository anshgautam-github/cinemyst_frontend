import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import IndustryRadar from './components/IndustryRadar';
import CreatorFeed from './components/CreatorFeed';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="mobile-app-container">
      <div className="app-content">
        <Header />
        <SearchBar />
        <IndustryRadar />
        <CreatorFeed />
      </div>
      <BottomNav />
    </div>
  );
}

export default App;
