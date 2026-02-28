import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaXmark, FaPhone, FaArrowRight } from "react-icons/fa6";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import PageHeader from "../components/PageHeader";
import ServiceCard from "../components/ServiceCard";
import NewsLetter from "../components/NewsLetter";
import ScrollToTop from "../components/ScrollToTop";
import Seo from "../components/Seo";
import instance from "../lib/instance";

const Services = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [dbServices, setDbServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await instance.get("/services/all");
        setDbServices(response.data?.data?.services || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <main className="min-h-screen bg-white font-poppins overflow-x-hidden selection:bg-[#008080] selection:text-white">
      <Seo 
        title="Our Services | IT, Marketing & Design - Collabority"
        description="Transform your business with Collabority's integrated digital services including software development, growth marketing, and creative design."
        path="/services"
      />
      
      <Navbar />

      <PageHeader
        title="Our Capabilities"
        breadcrumb={
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20" aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Services</span>
          </nav>
        }
      />

      {/* 1. IMPACT INTRO SECTION */}
      
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <img
              className="w-[85%] rounded-[3rem] shadow-2xl shadow-gray-200 border border-gray-100 object-cover aspect-[4/5]"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
              alt="Strategy session at Collabority"
            />
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-12 -right-0 w-[60%] z-20"
          >
            <img
              className="border-[15px] border-white rounded-[2.5rem] shadow-2xl w-full aspect-square object-cover"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
              alt="Creative collaboration"
            />
          </motion.div>

          {/* Decorative element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#008080]/5 rounded-full blur-[100px] -z-10" />
        </div>

        <div className="w-full lg:w-1/2">
          <span className="text-[#008080] font-black tracking-[0.4em] uppercase text-[10px] mb-8 block bg-teal-50 inline-block px-4 py-2 rounded-full border border-teal-100">
            Growth Partners
          </span>
          <h2 className="text-[#002248] text-4xl md:text-7xl font-black mb-8 leading-[1] tracking-tighter">
            Fueling Visibility, <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008080] to-blue-600">Driving Results.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 font-medium">
            We bridge the gap between complex engineering and human-centric design. 
            At Collabority, we don't just provide services—we build digital assets 
            that compound in value.
          </p>
          
          <Link to="/contact">
            <button className="group bg-[#002248] text-white flex items-center gap-6 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#008080] transition-all shadow-xl active:scale-95">
              <FaPhone aria-hidden="true" /> 
              Start a Conversation
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>
      </section>

      {/* 2. SERVICES GRID SECTION */}
      <section className="bg-[#F8F6F3] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#002248] tracking-tighter mb-4">Core Expertise</h2>
            <div className="w-20 h-1.5 bg-[#008080] mx-auto rounded-full" />
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-[#008080] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dbServices.map((service, index) => (
                <ServiceCard key={service._id || index} service={service} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. PREMIUM VIDEO CTA */}
      <section className="bg-[#002248] py-24 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#008080]/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
          <div className="w-full lg:w-1/2">
            <span className="text-[#008080] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Company Culture</span>
            <h2 className="text-white text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
              Enabling Smarter <br /> Digital Growth.
            </h2>
            <p className="text-white/60 text-xl mb-12 max-w-lg leading-relaxed font-medium">
              Take a look behind the curtain at how we integrate IT, marketing, and design 
              to solve the world's most complex business problems.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-4 text-white font-black text-[10px] uppercase tracking-widest border-b-2 border-[#008080] pb-3 hover:text-[#008080] transition-all group"
            >
              Partner With Us 
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  className="w-full aspect-video object-cover transition-transform duration-[2s] group-hover:scale-110"
                  alt="Collabority workspace preview"
                />
                <div className="absolute inset-0 bg-blue-950/40 group-hover:bg-blue-950/20 transition-all duration-700" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white text-[#002248] w-24 h-24 rounded-[2rem] flex items-center justify-center text-2xl shadow-2xl transition-colors group-hover:bg-[#008080] group-hover:text-white"
                  >
                    <FaPlay className="ml-1" aria-hidden="true" />
                  </motion.div>
                </div>
              </div>
              
              {/* Floating label */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl hidden md:block">
                <p className="text-[10px] font-black text-[#002248] uppercase tracking-widest">Watch Showreel (2:14)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal Overlay */}
        <AnimatePresence>
          {showVideo && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 bg-[#002248]/95 z-[100] flex items-center justify-center p-6 md:p-12"
            >
              <button 
                onClick={() => setShowVideo(false)}
                aria-label="Close video"
                className="absolute top-10 right-10 text-white/50 text-4xl hover:text-white transition-colors"
              >
                <FaXmark aria-hidden="true" />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-6xl aspect-video rounded-[3rem] overflow-hidden shadow-2xl bg-black border border-white/10"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9xwazD5SyVg?autoplay=1"
                  title="Collabority Showreel"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default memo(Services);