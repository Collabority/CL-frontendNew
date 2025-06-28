import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import CollaboryLogo from '../assets/collabory-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const desktopLinkClass = ({ isActive }) =>
    isActive ? 'text-[#008080] font-bold' : 'text-gray-700 hover:text-[#008080]';

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* logo */}
        <div className="flex items-center">
          <img src={CollaboryLogo} alt="Collabory Logo" className="h-10 md:h-11 lg:h-12" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center md:space-x-5 lg:space-x-7">
          <div className="flex md:space-x-6 lg:space-x-9">
            <NavLink to="/" className={desktopLinkClass}>Home</NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                location.pathname.startsWith('/services')
                  ? 'text-[#008080] font-bold'
                  : 'text-gray-700 hover:text-[#008080]'
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                location.pathname.startsWith('/blog')
                  ? 'text-[#008080] font-bold'
                  : 'text-gray-700 hover:text-[#008080]'
              }
            >
              Blog
            </NavLink>
            <NavLink to="/about" className={desktopLinkClass}>About</NavLink>
            <NavLink to="/career" className={desktopLinkClass}>Career</NavLink>
            <NavLink to="/portfolio" className={desktopLinkClass}>Portfolio</NavLink>
            <NavLink to="/contact" className={desktopLinkClass}>Contact</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 overflow-y-auto">
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200">
            <img src={CollaboryLogo} alt="Collabory Logo" className="h-10" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-4 py-8 flex flex-col space-y-4">
            <NavLink to="/" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/services" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname.startsWith('/services') ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Services</NavLink>
            <NavLink to="/blog" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname.startsWith('/blog') ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/about" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/about' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
            <NavLink to="/career" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/career' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Career</NavLink>
            <NavLink to="/portfolio" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/portfolio' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Portfolio</NavLink>
            <NavLink to="/contact" className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 ${location.pathname === '/contact' ? 'text-[#008080] font-bold' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
