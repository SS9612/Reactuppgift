import React from 'react';
import './styles.css';
import BellIcon from '../../assets/Bell-IMG.svg';

const Subscribe = () => {
  return (
    <section id="subscribe-section">
    <div className="subscribe-container">
        <div className="subscribe-headline">
            <img className="Bell-IMG" src="images/Bell-IMG.svg" alt="Bell-IMG" />
            <p className="h1-Desktop">Subscribe to our newsletter to stay<br /> informed about latest updates</p>
        </div>
        <div className="subscribe-content">
            <div className="subscribe-txt-icon">
                <i className="fa-regular fa-envelope"></i>
                <p>Your Email</p>
            </div>
            <div className="subscribe-button">
                <a id="Subscribe" href="#" className="btn-primary">
                    <span>Subscribe</span>
                </a>
            </div>
        </div>
    </div>
</section>
  );
};

export default Subscribe;
