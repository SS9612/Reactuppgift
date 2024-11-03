import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/Silicon.svg';
import './styles.css';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/main">
          <img src={logo} alt="silicon-logo" className="logo" />
        </Link>

        <nav id="main-menu" className="navbar">
          <Link className="nav-link" to="/features">Features</Link>
          <Link className="nav-link contact-link" to="/contact">Contact</Link>
        </nav>

        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input 
              id="darkmode-switch" 
              type="checkbox" 
              checked={isDarkMode} 
              onChange={toggleDarkMode} 
            />
            <span className="slider round"></span>
          </label>
        </div>

        <Link id="auth-signin" to="/signin" className="btn-primary">
        <i class="fa-regular fa-user"></i>
          <span>Sign in / up</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
