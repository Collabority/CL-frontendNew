import React from 'react';
import { motion } from 'framer-motion';
import historyTimelineData from "../../constants/historyTimelineData";

const HistoryTimeline = () => {
  return (
    <section id="history" className="py-12 md:py-24 bg-[#F8F6F2] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-10 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-[#002248] mb-2 md:mb-4"
          >
            Our History
          </motion.h2>
          <p className="text-xs md:text-base text-gray-500 max-w-xl mx-auto px-4">
            A journey of innovation, growth, and digital excellence.
          </p>
        </div>

        <div className="relative">
          {/* THE VERTICAL LINE */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 bottom-0 w-[2px] bg-blue-100 left-3 md:left-1/2 transform md:-translate-x-1/2 z-0" 
          />

          <div className="space-y-8 md:space-y-24">
            {historyTimelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              /**
               * PERFORMANCE FIX: 
               * We assume historyTimelineData image paths are updated to point to your new '/webp/' directories.
               * Example: item.image should be "src/assets/webp/timeline-2024.webp"
               */

              return (
                <article 
                  key={idx} 
                  className={`relative flex items-center md:justify-between ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* THE DOT */}
                  <div 
                    aria-hidden="true"
                    className="absolute left-3 md:left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-12 md:h-12 rounded-full border-[3px] md:border-4 border-white bg-[#008080] shadow-md z-10 flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 md:w-4 md:h-4 bg-white rounded-full"></div>
                  </div>

                  {/* CONTENT CARD */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[45%] pl-10 md:pl-0" 
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                      
                      <div className="h-32 sm:h-48 md:h-72 overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={`Our milestone in ${item.year}: ${item.title}`} 
                          className="w-full h-full object-cover"
                          loading="lazy" /** PERFORMANCE: Critical for timeline items often below the fold */
                        />
                        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm px-3 py-0.5 md:px-5 md:py-1.5 rounded-full text-[#008080] font-bold text-[10px] md:text-sm shadow-sm">
                          <span className="sr-only">Year:</span> {item.year}
                        </div>
                      </div>
                      
                      <div className="p-4 md:p-10">
                        <h3 className="text-base md:text-2xl font-bold text-[#002248] mb-1 md:mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-snug md:leading-relaxed text-[11px] md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <div className="hidden md:block w-[45%]" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTimeline;