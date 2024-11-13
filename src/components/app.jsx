import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import router from './router';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
