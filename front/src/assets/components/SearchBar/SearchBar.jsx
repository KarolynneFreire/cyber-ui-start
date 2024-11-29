import React, { useState } from 'react';
import '../SearchBar/SearchBar.css';  // Importe o arquivo CSS para o estilo

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={handleChange}
        placeholder="coloque seu email ..."
      />
      <button className="search-button" onClick={handleSearch}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
