import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa"; // Default icon

export default function ServiceCard({ service }) {
  // 1. Handle different image field names (Backend usually sends 'coverImage')
  const displayImage = service.coverImage || service.image || "https://placehold.co/600x400";
  
  // 2. Handle description (Backend might have long descriptions, so we truncate)
  const description = service.description || service.metaData?.metaDescription || "No description available.";
  const shortDesc = description.length > 100 ? description.substring(0, 100) + "..." : description;

  return (
    <div className="relative overflow-hidden shadow-lg group font-poppins h-full rounded-lg bg-white">
      <div className="h-64 relative">
        <img
          src={displayImage}
          alt={service.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
        <div className="mb-3 text-2xl text-[#008080]">
            {/* If backend doesn't have icons, show a default one, otherwise show provided icon */}
            {service.icon ? service.icon : <FaLaptopCode />}
        </div>
        
        <h4 className="text-xl font-semibold mb-2 text-center">
          <Link to={`/services-details`} className="hover:text-[#008080] transition-colors">
            {service.title}
          </Link>
        </h4>
        
        <p className="text-sm text-center text-gray-200">
            {shortDesc}
        </p>
        
        <Link to="/services-details" className="mt-4 text-xs font-bold uppercase tracking-widest border-b border-[#008080] pb-1">
            Read More
        </Link>
      </div>
      
      {/* Default View (Visible when not hovering - Optional, keeps card looking good) */}
      <div className="p-4 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent w-full">
         <h3 className="text-white text-lg font-bold text-center">{service.title}</h3>
      </div>
    </div>
  );
}