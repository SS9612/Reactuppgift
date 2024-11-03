import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </React.Fragment>
  )
);

export default router;