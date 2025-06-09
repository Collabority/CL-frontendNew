import React from 'react';
import "./App.css";
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutProvider } from './context/AboutContext';
import AboutUs from './pages/about/AboutUs';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <AboutProvider>
    <div className="App min-h-screen bg-beige">
    <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
      <ScrollToTop />
    </div>
    </AboutProvider>
  );
}

export default App;
