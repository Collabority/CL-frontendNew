import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div className="relative overflow-hidden shadow-lg group font-poppins">
      <div className="h-74 relative">
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
        <div className="mb-3">{service.icon}</div>
        <h4 className="text-xl font-semibold mb-2 text-center">
          <a href="#" className="hover:underline">
            {service.title}
          </a>
        </h4>
        <p className="text-sm text-center">{service.description}</p>
      </div>
    </div>
  );
}
