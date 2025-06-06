import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600';

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        <div className="flex flex-col">
          <div className="text-blue-600 text-2xl font-bold">
            OmniVus.
          </div>
          <div className="text-gray-500 text-sm">
            IT Service & Technology
          </div>
        </div>

        <div className="flex items-center space-x-9">
          <div className="flex space-x-9">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center space-x-2">
            <span>Free Consulting</span>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 