import React from 'react';
import slider1 from '../../assets/Slider 1.svg';
import slider2 from '../../assets/Slider 2.svg';
import slider3 from '../../assets/Slider 3.svg';
import './styles.css';

const Sliders = () => {
  return (
    <section id="sliders">
      <div className="container">
        <div className="sliders-header">
          <p className="sliders-title">How Does It Work?</p>
        </div>

        <div className="sliders-desktop-wrapper">
          <div className="Desktopimagessliders">
            <div id="slider-1" className="slider-images">
              <img src={slider1} alt="Slider 1" />
            </div>
            <div id="slider-2" className="slider-images">
              <img src={slider2} alt="Slider 2" />
            </div>
            <div id="slider-3" className="slider-images">
              <img src={slider3} alt="Slider 3" />
            </div>
          </div>
          <div className="Desktop-bottomtext">
            <p className="Desktop-bottom-title">Latest transaction history</p>
            <p className="Desktop-bottom-subtitle">
              Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique
              quisque hac in consectetur condimentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sliders;

