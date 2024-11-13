import React from 'react';
import EmailIcon from '/src/assets/emailus.svg';
import CareersIcon from '/src/assets/careers.svg';

const HeroTwo = () => (
  <div className="hero-two">
    <div className="breadcrumb">
      <span>Homepage</span> <span>»</span> <span>Contact</span>
    </div>
    <h1>Contact Us</h1>
    <div className="contact-options">
      <div className="contact-option">
        <div className="icon-wrapper">
          <img src={EmailIcon} alt="Email Icon" />
        </div>
        <div>
          <h3>Email us</h3>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <a href="#">Leave a message →</a>
        </div>
      </div>
      <div className="contact-option">
        <div className="icon-wrapper">
          <img src={CareersIcon} alt="Careers Icon" />
        </div>
        <div>
          <h3>Careers</h3>
          <p>St. ac ipsum leo lorem magna nunc mattis malesuada non vestibulum.</p>
          <a href="#">Send an application →</a>
        </div>
      </div>
    </div>
  </div>
);

export default HeroTwo;
