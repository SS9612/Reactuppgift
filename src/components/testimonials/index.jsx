import React from 'react';
import './styles.css';
import testimonialImg from '../../assets/testimonalimg.svg';

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <div className="container">
        <div className="TestimonialsTXT">
          <p>Clients Are<br />Loving Our App</p>
        </div>
        <div className="TestimonialsIMG">
          <img src={testimonialImg} alt="Testimonial" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
