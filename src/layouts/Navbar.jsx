import React, { useState, useEffect, memo } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import CollaboryLogoPng from "../assets/collabory-logo.png";
import CollaboryLogoWebp from "../assets/webp/collabory-logo.webp"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm py-2" : "bg-white py-3"
      }`}>
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          
          <Link to="/" className="flex-shrink-0">
            <picture>
              <source srcSet={CollaboryLogoWebp} type="image/webp" />
              <img
                src={CollaboryLogoPng}
                alt="Collabority Logo"
                width="160"
                height="44"
                fetchpriority="high"
                className="h-9 md:h-11 w-auto object-contain"
              />
            </picture>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => 
                  `text-sm font-semibold transition-colors ${isActive ? "text-[#008080]" : "text-gray-600 hover:text-[#008080]"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-800 z-[120]"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[110] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[70%] max-w-[280px] bg-white z-[115] shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col p-6 pt-20 space-y-1">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Menu</p>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `block py-3 px-4 rounded-lg text-base font-medium transition-all ${
                  isActive ? "bg-[#008080]/10 text-[#008080]" : "text-gray-700 active:bg-gray-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="pt-6">
            <Link 
              to="/contact" 
              className="block w-full text-center bg-[#008080] text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-[#008080]/20 active:scale-95 transition-transform"
            >
              Get Started
            </Link>
          </div>

          <div className="mt-auto pt-10">
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-100">
               <p className="text-[10px] font-bold text-[#008080] uppercase">Special Offer</p>
               <p className="text-xs text-gray-600 mt-1">Get 20% off on your first IT Consultation.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);