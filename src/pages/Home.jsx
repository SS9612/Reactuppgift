import React from 'react';
import Navbar from '../components/Header';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import AppFeatures from '../components/AppFeatures';
import Sliders from '../components/Sliders';
import Upperfeatures from '../components/Upperfeatures';
import Bottomfeatures from '../components/Bottomfeatures';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Logos />
      <AppFeatures />
      <Sliders />
      <Upperfeatures />
      <Bottomfeatures />
      <Testimonials />
      <FAQ />
      <Subscribe/>
      <Footer/>
    </>
  );
};

export default Home;
