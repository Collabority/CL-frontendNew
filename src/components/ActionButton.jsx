import React from 'react';

const ActionButton = ({ text, onClick }) => {
  return (
    <button 
      className="bg-[#008080] text-white px-6 py-2 rounded-md hover:bg-[#006666] flex items-center space-x-2"
      onClick={onClick} 
    >
      <span>{text}</span>
      {/* Arrow Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  );
};

export default ActionButton; 