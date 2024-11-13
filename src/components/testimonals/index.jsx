import React, { useEffect, useState } from 'react';
import './styles.css';
import { fetchTestimonials } from '../../services/apiService';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTestimonials()
      .then(data => {
        setTestimonials(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error loading testimonials: {error.message}</p>;

  return (
    <section id="Testimonials">
      <div className="container">
        <div className="TestimonialsTXT">
          <p>Clients are<br />Loving Our App</p>
        </div>
        <div className="TestimonialsList">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="TestimonialCard">
              <div className="QuoteIcon">
                <FaQuoteLeft />
              </div>
              <div className="Stars">
                {Array.from({ length: testimonial.starRating }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="TestimonialText">{testimonial.comment}</p>
              <div className="AuthorInfo">
                <img src={testimonial.avatarUrl} alt={testimonial.author} className="AuthorAvatar" />
                <div className="AuthorDetails">
                  <span className="AuthorName">{testimonial.author}</span>
                  <span className="AuthorRole">{testimonial.jobRole}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
