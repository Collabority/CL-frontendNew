import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Seo from "../components/Seo";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-white font-poppins">
      <Seo 
        title="404 - Page Not Found | Collabority" 
        description="The page you are looking for doesn't exist or has been moved."
      />
      <Navbar />
      
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Large Stylized 404 */}
          <h1 className="text-[12rem] md:text-[20rem] font-black text-[#002248] leading-none opacity-5 select-none">
            404
          </h1>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#002248] mb-4">
              Lost in Space<span className="text-[#008080]">.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md mx-auto mb-10 font-medium">
              The link you followed might be broken, or the page may have been removed. 
              Let’s get you back on track.
            </p>
            
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#002248] text-white flex items-center gap-4 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#008080] transition-all shadow-xl"
              >
                <FaArrowLeft aria-hidden="true" /> Back to Safety
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-20 filter grayscale">
            {/* You can map small icons or your service logos here to fill space */}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NotFound;