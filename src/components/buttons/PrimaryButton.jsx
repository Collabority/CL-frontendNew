import React from 'react';
import { motion } from 'framer-motion';

const PrimaryButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-6 py-3 text-white font-medium 
        bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md 
        ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default PrimaryButton;