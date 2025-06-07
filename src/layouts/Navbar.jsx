import React from 'react';
import { NavLink } from 'react-router-dom';
import CollaboryLogo from '../assets/collabory-logo.png'; 
import ActionButton from '../components/ActionButton'; 

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'text-[#008080] font-bold' : 'text-gray-700 hover:text-[#008080]';

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo Image */}
        <div className="flex items-center">
          <img src={CollaboryLogo} alt="Collabory Logo" className="h-12" /> {/* Adjust height as needed */}
        </div>

        <div className="flex items-center space-x-9">
          <div className="flex space-x-9">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
          </div>

          <ActionButton text="Free Consulting" onClick={() => console.log('Free Consulting clicked')} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 