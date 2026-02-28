import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

/** @BLOCK: ServiceCard */
function ServiceCard({ service }) {
  if (!service) return null;

  // Optimized fallbacks
  const displayImage = service.coverImage || service.image || "/webp/service-placeholder.webp";
  const description = service.description || service.metaData?.metaDescription || "Expert solutions tailored for your brand.";

  return (
    <article className="relative overflow-hidden shadow-lg group font-poppins h-full rounded-lg bg-white isolate">
      
      <div className="h-64 sm:h-72 relative overflow-hidden bg-gray-200">
        <img
          src={displayImage}
          alt={service.title}
          width="400"
          height="300"
          loading="lazy"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="text-white text-xl font-bold text-center">
            {service.title}
          </h3>
        </div>
      </div>

      <div 
        className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-6 z-10"
        aria-hidden="true"
      >
        <div className="mb-4 text-3xl text-[#008080]">
          {service.icon || <FaLaptopCode aria-hidden="true" />}
        </div>
        
        <h4 className="text-2xl font-bold mb-3 text-center leading-tight">
          {service.title}
        </h4>
        
        <p className="text-sm text-center text-gray-300 line-clamp-3 mb-6">
          {description}
        </p>
        
        <Link 
          to={`/services-details/${service._id || ""}`} 
          className="px-6 py-2 border-2 border-[#008080] text-[#008080] font-bold uppercase text-xs tracking-widest hover:bg-[#008080] hover:text-white transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

export default memo(ServiceCard);