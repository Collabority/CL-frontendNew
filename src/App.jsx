import React from 'react';
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutProvider } from './context/AboutContext';
import AboutUs from './pages/about/AboutUs';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Footer from './layouts/footer/Footer';

function App() {
  return (
    <AboutProvider>
    <div className="App min-h-screen bg-beige">
    <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
      <ScrollToTop />
      <Footer />
    </div>
    </AboutProvider>
  );
}

export default App;
