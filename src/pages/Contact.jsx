import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HeroTwo from '../components/herotwo';
import ConsultationForm from '../components/consultationForm';
import MapSection from '../components/map';
import './Contact.css';

const Contact = () => (
  <>
   <div className="bg"></div>
    <div className="background-wrapper">
      <Header />
      <div className="contact-page">
        <div className="contact-columns">
          <div className="left-column">
            <HeroTwo />
          </div>
          <div className="right-column">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
    <div className="additional-content">
      <MapSection />
    </div>
    <Footer />
  </>
);

export default Contact;
