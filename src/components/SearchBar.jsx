import React from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <Search size={18} color="#9E9E9E" className="search-icon" />
      <input type="text" placeholder="Search creators, posts..." className="search-input" />
    </div>
  );
};

export default SearchBar;
