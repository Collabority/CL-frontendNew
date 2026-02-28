import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

/**
 * TestimonialCard - Social proof component for Collabority.
 * Designed to build trust with a clean, editorial layout.
 */
const TestimonialCard = ({ name, position, content, image }) => {
  return (
    <div className="bg-[#F8F6F3] p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group relative border border-transparent hover:border-teal-100 flex flex-col h-full">
      
      {/* DECORATIVE: Quote Icon with brand styling */}
      <div className="absolute top-8 right-10">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          aria-hidden="true"
          className="text-[#008080] opacity-10 text-5xl group-hover:opacity-20 transition-opacity"
        />
      </div>
      
      {/* CONTENT: Client feedback */}
      <blockquote className="relative z-10 flex-grow">
        <p className="text-xl text-[#002248] mb-10 font-medium leading-relaxed italic">
          "{content}"
        </p>
      </blockquote>

      {/* AUTHOR_INFO: Professional bio footer */}
      <div className="flex items-center mt-auto pt-8 border-t border-gray-200/50">
        <div className="relative w-14 h-14 flex-shrink-0">
          <img
            src={image} 
            alt={`Portrait of ${name}`}
            loading="lazy"
            className="w-full h-full rounded-2xl border-2 border-white shadow-md object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
          />
          {/* Decorative accent dot */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#008080] rounded-full border-2 border-white" aria-hidden="true" />
        </div>
        
        <div className="ml-5">
          <h4 className="text-md font-black text-[#002248] uppercase tracking-tight">
            {name}
          </h4>
          <p className="text-[#008080] text-[10px] font-black uppercase tracking-widest mt-1">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(TestimonialCard);