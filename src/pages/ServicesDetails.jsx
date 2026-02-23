import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import PageHeader from "../components/PageHeader";
import ScrollToTop from "../components/ScrollToTop";
import ContactSection from "../components/ContactSection";
import Seo from "../components/Seo";
import instance from "../lib/instance";
import dottedImage from "../assets/dotted_image.webp";

import {
  bgColorMap,
  colorMap,
  hoverTextColors,
  services,
} from "../constants/Data";

const ServicesDetails = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const imagesArray = [
    { image: "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg", alt: "Illustration of UI/UX designers building a website" },
    { image: "https://img.freepik.com/premium-photo/3d-man-doing-online-marketing-illustration_1027215-236.jpg", alt: "3D character analyzing digital marketing metrics" },
    { image: "https://img.freepik.com/free-vector/graphic-design-workplace-illustration_1284-17029.jpg", alt: "Graphic design workstation with creative tools" },
    { image: "https://img.freepik.com/premium-psd/clapper-camera-production-cinema-movie-film-3d_66255-3269.jpg", alt: "3D movie production clapperboard and camera" },
  ];

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await instance.get("/services/all");
        setServiceData(response.data.data.services);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceData();
  }, []);

  return (
    <main className="min-h-screen bg-white font-poppins overflow-x-hidden selection:bg-[#008080] selection:text-white">
      <Seo 
        title="Service Excellence | Deep Dive into Collabority Solutions"
        description="Detailed insights into our digital growth, IT, and creative services. Explore how we scale brands through integrated tech and design."
        path="/services-details"
      />
      
      <Navbar />

      <PageHeader
        title="Service Deep-Dive"
        breadcrumb={
          <nav aria-label="Breadcrumb" className="flex gap-3 text-[10px] font-black uppercase tracking-widest text-white/60">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20" aria-hidden="true">/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="text-white/20" aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Details</span>
          </nav>
        }
      />

      {/* 1. "EXPERT PILLARS" Grid */}
      <section className="py-24 md:py-32 bg-white">
        <div className="text-center mb-24 px-6 max-w-4xl mx-auto">
          <span className="text-[#008080] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">The Collabority Standard</span>
          <h2 className="text-4xl md:text-7xl font-black text-[#002248] leading-[1] tracking-tighter">
            Architecting <br /> Future-Ready Brands<span className="text-[#008080]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const bgColor = bgColorMap[service.color] || "bg-gray-100";
            const iconColor = colorMap[service.color] || "text-gray-600";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative overflow-hidden p-12 rounded-[3rem] border border-gray-100 text-center group bg-white transition-all duration-700 hover:bg-[#002248] hover:shadow-[0_40px_80px_-15px_rgba(0,34,72,0.3)]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-repeat opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                  style={{ backgroundImage: `url(${dottedImage})`, backgroundSize: '120px' }}
                />

                <div className={`${bgColor} w-24 h-24 rounded-[2rem] mx-auto flex items-center justify-center mb-10 transition-all duration-700 group-hover:bg-white group-hover:rotate-[15deg] group-hover:scale-110 shadow-sm`}>
                  <Icon className={`text-4xl ${iconColor}`} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-black mb-4 group-hover:text-white transition-colors tracking-tight">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-white/60 text-sm leading-relaxed font-medium">
                  {service.des}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 2. VISUAL CAROUSEL/GRID SECTION */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="flex justify-center gap-8 flex-wrap px-6">
          {imagesArray.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, rotate: idx % 2 === 0 ? 2 : -2 }}
              className="relative"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-[180px] md:w-[240px] rounded-[2.5rem] shadow-2xl border-4 border-white object-cover aspect-square"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CASE-STUDY STYLE DEEP DIVE */}
      <section className="py-32 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-black text-[#002248] tracking-tighter leading-none mb-6">
                Explore the <br />Full Scope.
              </h2>
              <div className="w-24 h-2 bg-[#008080] rounded-full" />
            </div>
            <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">
              Scroll to discover &mdash;
            </p>
          </div>

          

          <div className="space-y-48">
            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="w-12 h-12 border-4 border-[#008080] border-t-transparent rounded-full animate-spin" />
                </div>
            ) : serviceData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const contentId = `service-description-${idx}`;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
                >
                  <motion.div 
                    initial={{ x: isEven ? -60 : 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 group"
                  >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#008080] rounded-[4rem] rotate-3 -z-10 opacity-5 group-hover:rotate-6 transition-transform duration-700" aria-hidden="true" />
                        <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-white border border-gray-100">
                            <img
                              src={item.coverImage}
                              alt={`${item.title} project showcase`}
                              className="w-full h-[450px] lg:h-[600px] object-cover hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                        {/* Number Badge */}
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#002248] rounded-[2rem] flex items-center justify-center text-white text-3xl font-black shadow-2xl z-20">
                            0{idx + 1}
                        </div>
                    </div>
                  </motion.div>

                  <div className="w-full lg:w-1/2 text-left">
                    <span className="text-[#008080] font-black text-[10px] tracking-[0.4em] uppercase block mb-6">
                      Capability Spotlight
                    </span>
                    <h3 className="text-4xl lg:text-6xl font-black text-[#002248] mb-10 leading-[1.1] tracking-tighter">
                      {item.title}
                    </h3>
                    
                    <div className="relative text-gray-500 text-lg md:text-xl leading-relaxed font-medium mb-12">
                      <div id={contentId} className="space-y-6">
                        <p>
                          {expandedIndex === idx 
                            ? (item.description || item.desription) 
                            : item.metaData.metaDescription}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => toggleReadMore(idx)}
                        aria-expanded={expandedIndex === idx}
                        aria-controls={contentId}
                        aria-label={expandedIndex === idx ? `Collapse details for ${item.title}` : `Expand details for ${item.title}`}
                        className="mt-8 group flex items-center gap-4 text-[#008080] font-black text-[10px] tracking-widest uppercase"
                      >
                        <span className="border-b-2 border-[#008080] pb-1 group-hover:text-[#002248] group-hover:border-[#002248] transition-all">
                            {expandedIndex === idx ? "Contract View" : "Expose Full Strategy"}
                        </span>
                        <motion.div 
                            animate={{ rotate: expandedIndex === idx ? 180 : 0 }}
                            className="w-8 h-8 rounded-full border border-teal-100 flex items-center justify-center bg-teal-50"
                        >
                            ↓
                        </motion.div>
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-8 border-t border-gray-100">
                        <Link 
                          to="/contact" 
                          className="bg-[#002248] text-white px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#008080] transition-all shadow-xl active:scale-95"
                        >
                            Request Brief
                        </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY SECTION */}
      <section className="py-32 bg-[#002248] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: `url(${dottedImage})` }} />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-12 tracking-tighter">Scale with Certainty.</h2>
            <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
                Our data-driven methodology eliminates guesswork, ensuring that every design choice and code snippet contributes directly to your ROI.
            </p>
            <div className="mt-16 flex justify-center gap-12">
                <div className="text-left">
                    <p className="text-[#008080] text-4xl font-black">98%</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Client Retention</p>
                </div>
                <div className="w-[1px] h-12 bg-white/10" />
                <div className="text-left">
                    <p className="text-[#008080] text-4xl font-black">250+</p>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Deployments</p>
                </div>
            </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default memo(ServicesDetails);