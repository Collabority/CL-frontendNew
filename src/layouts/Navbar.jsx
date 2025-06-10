import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CollaboryLogo from '../assets/collabory-logo.png'; 
import ActionButton from '../components/Button'; 

const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  const location = useLocation();

  const linkClass = ({ isActive }) =>
    isActive ? 'text-[#008080] font-bold' : 'text-gray-700 hover:text-[#008080]';

  const servicesActiveClass = location.pathname === '/services' || location.pathname === '/services-details'
    ? 'text-[#008080] font-bold'
    : 'text-gray-700 hover:text-[#008080]';

  const blogActiveClass = location.pathname === '/blog-grid' || location.pathname === '/blog-details'
    ? 'text-[#008080] font-bold'
    : 'text-gray-700 hover:text-[#008080]';

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img src={CollaboryLogo} alt="Collabory Logo" className="h-12" />
        </div>

        <div className="flex items-center space-x-7">
          <div className="flex space-x-9">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <span className={`cursor-pointer ${servicesActiveClass}`}>Services <span className="text-sm pl-1">+</span></span>
              {isServicesDropdownOpen && (
                <div className="absolute left-0 top-full w-40 bg-white shadow-lg z-10 py-0.5 border-t-4 border-[#008080]">
                  <NavLink
                    to="/services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/services-details"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Services Details
                  </NavLink>
                </div>
              )}
            </div>

            {/* Blog dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsBlogDropdownOpen(true)}
              onMouseLeave={() => setIsBlogDropdownOpen(false)}
            >
              <span className={`cursor-pointer ${blogActiveClass}`}>Blog <span className="text-sm pl-1">+</span></span>
              {isBlogDropdownOpen && (
                <div className="absolute left-0 top-full w-40 bg-white shadow-lg z-10 py-0.5 border-t-4 border-[#008080]">
                  <NavLink
                    to="/blog-grid"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsBlogDropdownOpen(false)}
                  >
                    Blog Grid
                  </NavLink>
                  <NavLink
                    to="/blog-details"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsBlogDropdownOpen(false)}
                  >
                    Blog Details
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>

          <ActionButton text="Free Consulting" onClick={() => console.log('Free Consulting clicked')} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 