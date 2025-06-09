import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialCard = ({ name, position, content, image }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
      <FontAwesomeIcon
        icon={faQuoteLeft}
        className="text-primary-500/20 text-4xl absolute top-6 left-6"
      />
      <p className="text-lg text-gray-600 mb-8 relative z-10">{content}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-primary-500 object-cover"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-600">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard; 