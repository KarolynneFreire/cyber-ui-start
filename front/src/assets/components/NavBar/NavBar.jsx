import React, { useState, useEffect } from 'react';
import './NavBar.css';

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); 

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    document.body.classList.add('dark-mode'); 
    document.body.classList.remove('light'); 
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">

        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li>
            <a href="#home">Home</a>
            <div className="underline"></div>
          </li>
        </ul>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? '🌙' : '🌞'} 
        </button>

        <button
          className={`hamburger ${menuActive ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default NavBar;


