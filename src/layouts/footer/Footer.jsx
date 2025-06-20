import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* logo and text */}
          <div className="col-span-1">
            <div className="text-white text-2xl font-bold mb-4">Collabority</div>
            <p className="text-sm leading-relaxed mb-4">
              At Collabority, we specialize in cutting-edge IT solutions, result-driven marketing strategies, creative design services, and professional video production to help businesses thrive in the digital era.
            </p>
            <p className="text-sm leading-relaxed">
              Our expertise spans multiple domains, ensuring seamless digital transformation and brand growth for our clients.
            </p>
          </div>

          {/* pages links*/}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Career</li>
              <li>Refund</li>
              <li>Terms</li>
              <li>Details</li>
              <li>Contact</li>
              <li>Business</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <p className="text-sm mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm mb-2">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-sm mb-4">Sunday: Closed</p>
            <p className="text-sm mb-2">
              <span className="font-semibold">Empowering Digital Transformation & Brand Growth</span>
            </p>
            <a href="#" className="text-teal-400 hover:text-teal-300 text-sm">› Discover More</a>
          </div>
        </div>

        {/* copyright */}
        <div className="text-center text-sm text-gray-300">
          © 2024 Collabority. All rights reserved.
        </div>
    
      </div>
    </footer>
  );
};

export default Footer; 