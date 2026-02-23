import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const TeamMemberCard = ({ name, position, image, social }) => {
  return (
    <div className="group bg-beige p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
      
      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-teal mb-4 relative">
        <img
          src={image}
          alt={name}
          loading="lazy" 
          width="80" 
          height="80"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600 mb-4 font-medium">{position}</p>

      <div className="flex space-x-4 mt-2">
        {social.linkedin && (
          <a
            href={social.linkedin}
            aria-label={`${name} LinkedIn Profile`}
            className="text-teal hover:text-primary-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            aria-label={`${name} Twitter Profile`}
            className="text-teal hover:text-primary-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
          </a>
        )}
        {social.facebook && (
          <a
            href={social.facebook}
            aria-label={`${name} Facebook Profile`}
            className="text-teal hover:text-primary-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-xl" />
          </a>
        )}
      </div>
    </div>
  );
};

export default React.memo(TeamMemberCard);