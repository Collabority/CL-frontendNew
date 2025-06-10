import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* logo and text */}
          <div className="col-span-1">
            <div className="text-white text-2xl font-bold mb-4">OmniVus.</div>
            <p className="text-sm leading-relaxed mb-4">
              The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community onferences, books, and our membership added to the online magazine.
            </p>
            <p className="text-sm leading-relaxed">
              One thing that hasn't changed is that we're a small team - with most of us not working
            </p>
          </div>

          {/* pages links*/}
          <div className="col-span-1 md:ml-24">
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link to="/blog" className="hover:text-blue-300">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>

          {/* working hours */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <p className="text-sm mb-2">Monday - Friday: 7:00 - 17:00</p>
            <p className="text-sm mb-2">Saturday: 7:00 - 12:00</p>
            <p className="text-sm mb-4">Sunday and holidays: 8:00 - 10:00</p>
            <p className="text-sm mb-2">
              <span className="font-semibold">For more then 30 years</span>, IT Service has been a reliable partner in the field of logistics and cargo forwarding.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">› Discover More</a>
          </div>
        </div>

        {/* copyright */}
        <div className="text-center text-sm text-gray-300">
          Copyright By@ WebTend - 2025
        </div>
    
      </div>
    </footer>
  );
};

export default Footer; 