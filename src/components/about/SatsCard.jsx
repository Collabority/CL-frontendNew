import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCheckCircle,
  faTrophy,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faUsers: faUsers,
  faCheckCircle: faCheckCircle,
  faTrophy: faTrophy,
  faStar: faStar,
};

const StatsCard = ({ icon, number, label }) => {
  return (
    <div className="bg-beige rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal text-white text-2xl mb-4">
        <FontAwesomeIcon
          icon={iconMap[icon]}
          className="text-primary-600 text-2xl"
        />
      </div>
      <h3 className="text-4xl font-bold text-gray-900 mb-2">{number}</h3>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
};

export default StatsCard; 