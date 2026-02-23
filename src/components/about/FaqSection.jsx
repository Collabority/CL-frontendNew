import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "../../constants/faqData";

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden transition-all duration-500">
      {/* 1. OPTIMIZED BACKGROUND IMAGE AND USE WEBP VIA -- NODE CONVERTER.CJS */}
      <div className="absolute inset-0 z-0">
        <img 
          //Pointing to your new optimized webp folder
          src="/webp/faq-bg.webp" 
          className="w-full h-full object-cover" 
          alt="" //Empty alt because it is purely decorative background
          aria-hidden="true" 
          loading="lazy" //Lazy load as this is usually further down the page
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-md" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#2563eb] font-bold text-sm md:text-base tracking-widest uppercase">
              FAQ
            </span>
            <span className="w-8 h-1 bg-blue-200 rounded-full inline-block" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#0a2256] leading-tight">
            Get Every Answer<br />From Here.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 md:space-y-6">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const contentId = `faq-content-${idx}`;
            const buttonId = `faq-button-${idx}`;
            
            return (
              <div 
                key={idx} 
                className={`
                  w-full shadow-lg overflow-hidden transition-all duration-300
                  ${isOpen ? 'bg-white ring-2 ring-blue-100' : 'bg-[#fdf6f0]'}
                  rounded-2xl md:rounded-[2rem]
                `}
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  // FIX: ARIA labels for accessibility
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="w-full flex items-center justify-between px-5 py-5 md:px-8 md:py-8 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Icon */}
                    <span className="flex-shrink-0 text-[#3b82f6]">
                      <svg 
                        width="24" height="24" 
                        aria-hidden="true"
                        className="w-5 h-5 md:w-7 md:h-7" 
                        viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <rect x="14" y="2" width="8" height="2" rx="1" transform="rotate(45 14 2)" />
                        <path d="M15 7l-1.5-1.5M9 17l-1.5 1.5M7 9l-1.5-1.5M17 15l1.5 1.5M8 8l8 8M21 21l-6-6" />
                      </svg>
                    </span>

                    <span 
                      className={`font-bold transition-colors duration-200
                      ${isOpen ? 'text-[#2563eb]' : 'text-[#4a5b7d]'}
                      text-sm sm:text-base md:text-xl lg:text-xl`}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus/Minus Toggle Icon */}
                  <span className="flex-shrink-0 ml-4 text-[#3b82f6]">
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isOpen ? (
                        <svg width="24" height="24" className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 12H4"/></svg>
                      ) : (
                        <svg width="24" height="24" className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4"/></svg>
                      )}
                    </motion.div>
                  </span>
                </button>

                {/* Animated Answer Section */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 md:px-8 md:pb-8 pl-12 md:pl-20 text-[#7b8bb2] text-sm md:text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;