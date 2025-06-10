import React, { useState } from 'react';
import Navbar from '../layouts/navbar/Navbar';
import Footer from '../layouts/footer/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { COLORS, TEXTS } from '../constants/data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const contactTiles = [
  {
    title: 'Phone Number',
    value: '+1 234 567 890',
    icon: (
      <svg width="32" height="32" fill="none" stroke={COLORS.PRIMARY} strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/></svg>
    ),
  },
  {
    title: 'Email Address',
    value: 'info@omnivus.com',
    icon: (
      <svg width="32" height="32" fill="none" stroke={COLORS.PRIMARY} strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6 12 13 2 6"/></svg>
    ),
  },
  {
    title: 'Office Location',
    value: '12/A, London, UK',
    icon: (
      <svg width="32" height="32" fill="none" stroke={COLORS.PRIMARY} strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
  },
  {
    title: 'Social Network',
    value: 'fb.com/example',
    icon: (
      <svg width="32" height="32" fill="none" stroke={COLORS.PRIMARY} strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2Z"/></svg>
    ),
  },
];

const Contact = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const toggleVideoModal = () => setIsVideoModalOpen(!isVideoModalOpen);

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      <div className="bg-[#F8F6F3]">
        {/* Hero Section */}
        <section className="relative w-full pt-16 pb-20 flex flex-col items-center justify-center text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#002248] mb-4 tracking-tight">Contact Us</h1>
          <div className="text-base md:text-lg font-semibold text-[#7b8ca0] flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span className="mx-1">|</span>
            <span className="text-[#7b8ca0]">Contact</span>
          </div>
        </section>
        {/* Contact Info & Map */}
        <div className="w-full py-12 mb-12">
          <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-0 h-full border border-[#e0d8c8]">
              {contactTiles.map((tile, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center aspect-square min-h-[180px] h-full rounded-none text-center bg-transparent
                    ${idx < 2 ? 'border-b border-[#e0d8c8]' : ''}
                    ${idx % 2 === 0 ? 'border-r border-[#e0d8c8]' : ''}
                  `}
                >
                  <div className="mb-4">{tile.icon}</div>
                  <div className="text-xl font-bold text-[#002248] mb-2">{tile.title}</div>
                  <div className="text-base text-[#7b8ca0]">{tile.value}</div>
                </div>
              ))}
            </div>
            <div className="w-full h-full shadow bg-[#F8F6F3] rounded-none aspect-square flex items-stretch">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.650441857727!2d90.4125183153637!3d23.8103329845617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7afc6b6b6b7%3A0x7b7b7b7b7b7b7b7b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>
        {/* Get in Touch Section */}
        <section className="w-full bg-[#f3ede6] py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            {/* Contact Form */}
            <form className="w-full md:w-1/2 flex flex-col gap-6 bg-[#f3ede6] p-8 rounded-lg relative">
              <span className="text-[#2563eb] font-semibold text-lg mb-2">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#002248] mb-8">Estimate For Your Projects.</h2>
              <input type="text" placeholder="Enter your name" className="bg-white px-4 py-3 text-lg focus:outline-none focus:border-[#2563eb] rounded-none" />
              <input type="email" placeholder="Enter your email" className="bg-white px-4 py-3 text-lg focus:outline-none focus:border-[#2563eb] rounded-none" />
              <textarea placeholder="Enter your message" rows={4} className="bg-white px-4 py-3 text-lg focus:outline-none focus:border-[#2563eb] resize-none rounded-none" />
              <button type="submit" className="bg-[#008080] text-white text-lg font-semibold px-12 py-4 rounded-none hover:bg-[#006666] transition-colors mt-4 self-start">Submit</button>
            </form>
            {/* Video/Image with Play Button */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                  alt="Get in Touch Video"
                  className="w-full h-full object-cover border-r-[8px] border-b-[8px] border-[#008080] aspect-square"
                />
                {/* Play Button with Ripple Animation */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ pointerEvents: 'auto' }}
                  onClick={toggleVideoModal}
                >
                  <motion.span
                    className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-teal text-white text-4xl shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(13,89,219,0.7)",
                        "0 0 0 20px rgba(13,89,219,0.0)",
                        "0 0 0 0 rgba(13,89,219,0.7)"
                      ]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  >
                    <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" stroke="white" strokeWidth="0.5" strokeLinejoin="round" strokeLinecap="round"/>
                    </svg>
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </div>
          {/* Video Modal */}
          {isVideoModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div
                className="relative bg-white shadow-2xl flex flex-col"
                style={{
                  width: '70vw',
                  height: '70vh',
                  maxWidth: '100vw',
                  maxHeight: '100vh',
                  minWidth: '320px',
                  minHeight: '200px',
                  overflow: 'auto',
                }}
              >
                <button
                  className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-800 z-10"
                  onClick={toggleVideoModal}
                  aria-label="Close modal"
                >
                  &times;
                </button>
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Contact Video"
                  className="w-full h-full border-none"
                  style={{ width: '100%', height: '100%', minHeight: '200px' }}
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </section>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Contact; 