import React from "react";
import { FaComment } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="relative">
      <div className="absolute inset-0 w-full h-full scale-x-[-1] bg-[url('/src/assets/image3.avif')] bg-cover bg-center z-0"></div>
      <div className="relative z-10 bg-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-12 py-16 w-full max-w-screen-xl mx-auto gap-8">
          {/* Text Section */}
          <div className="flex flex-col text-center md:text-left items-center md:items-start flex-1">
            <h4 className="font-semibold text-xs sm:text-sm text-[#008080] mb-2">
              CALL TO ACTION
            </h4>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-gray-900 leading-tight">
              Connect with Us to
            </h1>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-gray-900 leading-tight mb-6">
              make Your Brand.
            </h1>
          </div>

          {/* Button Section */}
          <div className="flex-shrink-0">
            <Link to="/contact">
              <button className="flex items-center gap-3 bg-[#008080] text-white px-6 py-3 rounded hover:bg-gray-100 hover:text-[#008080] transition-colors">
                <FaComment />
                <span className="font-medium">Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
