import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const TeamMemberCard = ({ name, position, image, social }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-6 text-white">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-white/80 mb-4">{position}</p>
          <div className="flex space-x-4">
            <a
              href={social.linkedin}
              className="text-white hover:text-primary-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </a>
            <a
              href={social.twitter}
              className="text-white hover:text-primary-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a
              href={social.facebook}
              className="text-white hover:text-primary-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard; 