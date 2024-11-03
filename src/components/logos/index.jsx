import React from 'react';
import logo1 from '../../assets/logo1.svg';
import logo2 from '../../assets/logo2.svg';
import logo3 from '../../assets/logo3.svg';
import logo4 from '../../assets/logo4.svg';
import logo5 from '../../assets/logo5.svg';
import logo6 from '../../assets/logo6.svg';
import './styles.css';

const Logos = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section id="logos">
      <div className="container">
        {logos.map((logo, index) => (
          <div key={index} className={`logo-box ${index < 2 ? 'hide-mobile' : ''}`}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
