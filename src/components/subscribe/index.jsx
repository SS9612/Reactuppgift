import React, { useState } from 'react';
import './styles.css';
import BellIcon from '../../assets/Bell-IMG.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Vänligen fyll i din e-postadress');
    } else {
      setError('');
      console.log('Subscribed with email:', email);
    }
  };

  return (
    <section id="subscribe-section">
      <div className="subscribe-container">
        <div className="subscribe-headline">
          <img className="Bell-IMG" src={BellIcon} alt="Bell Icon" />
          <p className="h1-Desktop">
            Subscribe to our newsletter to stay<br /> informed about latest updates
          </p>
        </div>
        <div className="subscribe-content">
          <div className="subscribe-txt-icon">
            <i className="fa-regular fa-envelope"></i>
            <input 
              type="email" 
              placeholder="Your Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="subscribe-input"
            />
          </div>
          <div className="subscribe-button">
            <a href="#" onClick={handleSubscribe} className="btn-primary">
              <span>Subscribe</span>
            </a>
          </div>
        </div>
        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
};

export default Subscribe;
