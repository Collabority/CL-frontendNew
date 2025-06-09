import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'PAGES', path: '/pages' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACT', path: '/contact' },
];

const socialIcons = [
  { icon: <i className="fab fa-facebook-f" />, url: '#' },
  { icon: <i className="fab fa-twitter" />, url: '#' },
  { icon: <i className="fab fa-behance" />, url: '#' },
  { icon: <i className="fab fa-linkedin-in" />, url: '#' },
  { icon: <i className="fab fa-youtube" />, url: '#' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShow(window.scrollY < 10 || window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full bg-gradient-to-r from-[#eaf1fb] to-[#f7faff] border-b border-[#dbeafe] text-sm text-[#7b8ca0] flex items-center justify-between px-8 py-2">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><i className="far fa-envelope" /> info@webmail.com</span>
          <span className="flex items-center gap-2"><i className="fas fa-phone-alt" /> 786 875 864 75 7</span>
        </div>
        <div className="flex items-center gap-2">
          {socialIcons.map((s, i) => (
            <a key={i} href={s.url} className="text-[#7b8ca0] hover:text-[#0D59DB] text-base">{s.icon}</a>
          ))}
        </div>
      </div>
      {/* Main Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-[#eaf1fb] to-[#f7faff]'
        } ${show ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ boxShadow: scrolled ? '0 2px 16px 0 rgba(0,0,0,0.04)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/website_logo_1.webp" alt="OmniVus Logo" className="h-10 w-auto" />
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-2 font-bold text-sm tracking-wide transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-[#ACC1DB]' : 'text-[#68A1BB] hover:text-[#0D59DB]'
                }`}
              >
                {item.name}
                {item.name !== 'CONTACT' && (
                  <span className="ml-1 text-[#b0b9c8] font-bold">+</span>
                )}
                {location.pathname === item.path && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#ACC1DB] rounded-full" />
                )}
              </Link>
            ))}
          </div>
          {/* Get a Quote Button */}
          <button className="ml-8 px-8 py-3 bg-[#2563eb] text-white font-bold rounded-lg shadow hover:bg-blue-700 transition-all duration-200 text-base">Get A Quote</button>
        </div>
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-[92px] md:h-[110px]" />
    </>
  );
};

export default Navbar;
