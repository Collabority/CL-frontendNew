import React, { memo } from "react";
import { FaComment } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden group">
      
      {/* MEDIA: Optimized background with horizontal flip for visual balance */}
      <div 
        className="absolute inset-0 w-full h-full scale-x-[-1] bg-[url('/src/assets/image3.webp')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        aria-hidden="true"
      />
      
      {/* Overlay: Glassmorphism and brand gradient */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] bg-gradient-to-r from-white via-white/80 to-transparent" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-24 w-full max-w-7xl mx-auto gap-12">
        
        {/* CONTENT: Brand Messaging */}
        <div className="flex flex-col text-center md:text-left items-center md:items-start flex-1">
          <span className="font-black text-[10px] text-[#008080] mb-6 tracking-[0.4em] uppercase">
            Start the Conversation
          </span>
          <h2 className="font-black text-4xl sm:text-5xl lg:text-7xl text-[#002248] leading-[1.1] tracking-tighter">
            Let's build your <br className="hidden lg:block" />
            legacy together<span className="text-[#008080]">.</span>
          </h2>
        </div>

        {/* ACTION: High-conversion button */}
        <div className="flex-shrink-0">
          <Link 
            to="/contact"
            aria-label="Navigate to contact page"
          >
            <button className="flex items-center gap-4 bg-[#002248] text-white px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl hover:bg-[#008080] transition-all duration-500 transform hover:-translate-y-2 active:scale-95">
              <FaComment className="text-lg" aria-hidden="true" />
              <span>Get in Touch</span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default memo(ContactSection);