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
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
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