import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../layouts/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../layouts/Footer";
import { portfolioImages as portfolioPage } from "../constants/Data";
import ScrollToTop from "../components/ScrollToTop";
import ContactSection from "../components/ContactSection";
import Seo from "../components/Seo";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-white font-poppins overflow-x-hidden selection:bg-[#008080] selection:text-white">
      <Seo 
        title="Portfolio | Our Masterpieces - Collabority" 
        description="Explore Collabority's portfolio of successful digital transformations, custom software, and creative design projects."
        path="/portfolio"
      />
      
      <Navbar />
      
      <PageHeader
        title="Our Masterpieces"
        breadcrumb={
          <nav className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/60" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-white">Portfolio</span>
          </nav>
        }
      />

      {/* Intro Text - Refined Typography */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#008080] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block bg-teal-50 inline-block px-4 py-2 rounded-full">
            Impact Report
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-[#002248] mb-8 tracking-tighter leading-none">
            Selected <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008080] to-blue-600">Works.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            A curated showcase where complex business logic meets 
            intuitive digital artistry. We don't just build; we craft.
          </p>
        </motion.div>
      </section>

      {/* --- ALTERNATING SHOWCASE LAYOUT --- */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-32 md:gap-56">
          
          {portfolioPage.map((item, idx) => {
            const isReverse = idx % 2 !== 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isReverse ? "lg:flex-row-reverse" : ""}`}
              >
                
                {/* --- IMAGE SIDE --- */}
                <div className="w-full lg:w-3/5 group relative">
                  {/* Floating Backdrop */}
                  <div className={`absolute -inset-6 bg-[#F8F6F3] rounded-[3rem] -z-10 group-hover:bg-teal-50 transition-colors duration-700 ${isReverse ? "rotate-2" : "-rotate-2"}`} />
                  
                  <div className="overflow-hidden rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100 bg-white">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      src={item.image}
                      alt={`${item.title} project showcase`}
                      className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover"
                    />
                  </div>
                  
                  {/* Floating Indicator */}
                  <div className={`absolute top-10 ${isReverse ? "left-10" : "right-10"} bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl border border-white/50 hidden md:block`}>
                    <p className="text-[10px] font-black text-[#002248] uppercase tracking-widest">Year: 2026</p>
                  </div>
                </div>

                {/* --- TEXT SIDE --- */}
                <div className="w-full lg:w-2/5 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
                    <span className="w-12 h-[2px] bg-[#008080] rounded-full"></span>
                    <span className="text-[#008080] font-black tracking-[0.3em] text-[10px] uppercase">
                      Case Study 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-6xl font-black text-[#002248] mb-8 leading-[1] tracking-tighter">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-lg leading-relaxed mb-10 font-medium">
                    {item.text}
                  </p>

                  {/* Industry Badges */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
                    {["Strategy", "Design", "Tech"].map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-6 py-3 bg-[#F8F6F3] text-[#002248] text-[10px] font-black uppercase tracking-widest rounded-xl border border-transparent hover:border-[#008080] hover:bg-white hover:text-[#008080] transition-all cursor-default shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-4 text-[#002248] font-black text-xs uppercase tracking-[0.2em] group border-b-2 border-transparent hover:border-[#008080] pb-2 transition-all"
                  >
                    View Project Details 
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="bg-[#002248] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#008080]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-white text-4xl md:text-7xl font-black mb-10 tracking-tighter leading-none">
            Ready to build your <br />
            <span className="text-[#008080]">Masterpiece?</span>
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-6 bg-[#008080] text-white font-black uppercase tracking-widest text-xs px-12 py-6 rounded-2xl hover:bg-white hover:text-[#002248] transition-all shadow-[0_20px_50px_rgba(0,128,128,0.3)] hover:shadow-none active:scale-95"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <ContactSection />

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default memo(Portfolio);