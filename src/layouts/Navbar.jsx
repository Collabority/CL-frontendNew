import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CollaboryLogo from '../assets/collabory-logo.png'; 

const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();

  const desktopLinkClass = ({ isActive }) =>
    isActive ? 'text-[#008080] font-bold' : 'text-gray-700 hover:text-[#008080]';

  const desktopServicesActiveClass = location.pathname.startsWith('/services')
    ? 'text-[#008080] font-bold'
    : 'text-gray-700 hover:text-[#008080]';

  const desktopBlogActiveClass = location.pathname.startsWith('/blog')
    ? 'text-[#008080] font-bold'
    : 'text-gray-700 hover:text-[#008080]';

  return (
    <nav className="bg-white shadow-md z-50 relative"> 
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* logo */}
        <div className="flex items-center">
          <img src={CollaboryLogo} alt="Collabory Logo" className="h-12" />
        </div>

        {/* Mobile menu button*/}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-7">
          <div className="flex space-x-9">
            <NavLink to="/" className={desktopLinkClass}>Home</NavLink>

            {/* Services dropdown (Desktop)*/}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <span className={`cursor-pointer ${desktopServicesActiveClass}`}>Services <span className="text-sm pl-1">+</span></span>
              {isServicesDropdownOpen && (
                <div className="absolute left-0 top-full w-25 bg-white shadow-lg z-10 py-0.5 border-t-4 border-[#008080]">
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

            {/* Blog dropdown (Desktop) */}
            <div
              className="relative group"
              onMouseEnter={() => setIsBlogDropdownOpen(true)}
              onMouseLeave={() => setIsBlogDropdownOpen(false)}
            >
              <span className={`cursor-pointer ${desktopBlogActiveClass}`}>Blog <span className="text-sm pl-1">+</span></span>
              {isBlogDropdownOpen && (
                <div className="absolute left-0 top-full w-25 bg-white shadow-lg z-10 py-0.5 border-t-4 border-[#008080]">
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
            <NavLink to="/about" className={desktopLinkClass}>About</NavLink>
            <NavLink to="/career" className={desktopLinkClass}>Career</NavLink>
            <NavLink to="/contact" className={desktopLinkClass}>Contact</NavLink>
          </div>
        </div>
      </div>

      {/* menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto">

          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
            <img src={CollaboryLogo} alt="Collabory Logo" className="h-12" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-4 py-8 flex flex-col space-y-4">
            <NavLink to="/" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>

            {/* Services dropdown (mobile)*/}
            <div>
              <span
                className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 cursor-pointer flex justify-between items-center ${location.pathname.startsWith('/services') ? 'text-[#008080] font-bold' : ''}`}
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Services <span className="text-sm pl-1">{isServicesDropdownOpen ? '-' : '+'}</span>
              </span>
              {isServicesDropdownOpen && (
                <div className="pl-8 pt-2 pb-2 space-y-2 bg-gray-50">
                  <NavLink
                    to="/services"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                    onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to="/services-details"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                    onClick={() => { setIsServicesDropdownOpen(false); setIsMobileMenuOpen(false); }}
                  >
                    Services Details
                  </NavLink>
                </div>
              )}
            </div>

            {/* Blog dropdown (mobile)*/}
            <div>
              <span
                className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 cursor-pointer flex justify-between items-center ${location.pathname.startsWith('/blog') ? 'text-[#008080] font-bold' : ''}`}
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
              >
                Blog <span className="text-sm pl-1">{isBlogDropdownOpen ? '-' : '+'}</span>
              </span>
              {isBlogDropdownOpen && (
                <div className="pl-8 pt-2 pb-2 space-y-2 bg-gray-50">
                  <NavLink
                    to="/blog-grid"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                    onClick={() => { setIsBlogDropdownOpen(false); setIsMobileMenuOpen(false); }}
                  >
                    Blog Grid
                  </NavLink>
                  <NavLink
                    to="/blog-details"
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                    onClick={() => { setIsBlogDropdownOpen(false); setIsMobileMenuOpen(false); }}
                  >
                    Blog Details
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/about" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/about' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
            <NavLink to="/career" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/career' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Career</NavLink>
            <NavLink to="/contact" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/contact' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>


          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 