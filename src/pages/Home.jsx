import React from 'react';
import Hero from '../components/Hero';
import Logos from '../components/Logos';
import AppFeatures from '../components/AppFeatures';
import Sliders from '../components/Sliders';
import Upperfeatures from '../components/Upperfeatures';
import Bottomfeatures from '../components/Bottomfeatures';
import Testimonials from '../components/testimonals';
import FAQ from '../components/faq';
import Subscribe from '../components/subscribe';
import Header from '../components/header';
import Footer from '../components/footer';

function Home() {
  return (
    <>
    <Header />
      <Hero />
      <Logos />
      <AppFeatures />
      <Sliders />
      <Upperfeatures />
      <Bottomfeatures />
      <Testimonials />
      <FAQ />
      <Subscribe />
      <Footer />
    </>
  );
}

export default Home;
