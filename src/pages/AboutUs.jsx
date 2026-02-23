import React, { useState, useRef, useEffect, memo } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import Navbar from '../layouts/Navbar';
import PageHeader from '../components/PageHeader';
import HistoryTimeline from '../components/about/HistoryTimeline';
import FaqSection from '../components/about/FaqSection';
import NewsLetter from '../components/NewsLetter';
import Footer from '../layouts/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Seo from '../components/Seo';

const SERVICE_CARDS = [
  {
    title: "IT Solutions",
    desc: "Cutting-edge software, cloud integration, and secure infrastructure.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    longDesc: "We provide scalable, secure IT solutions including cloud migration and custom software development."
  },
  {
    title: "Marketing Strategies",
    desc: "Result-driven digital marketing to boost your brand's reach.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    longDesc: "Our marketing experts use SEO, PPC, and social campaigns to drive measurable growth."
  },
  {
    title: "Creative Production",
    desc: "Design and professional video content for the digital era.",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
    longDesc: "We deliver stunning visuals and high-production videos that tell your brand's story."
  },
];

const AboutUs = () => {
  const [tilesVisible, setTilesVisible] = useState({});
  const [showMoreIntro, setShowMoreIntro] = useState(false);
  const [expandedTile, setExpandedTile] = useState(null);
  const tilesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute('data-index');
          setTilesVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    }, { threshold: 0.15 });

    tilesRef.current.forEach(tile => tile && observer.observe(tile));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[#FAF9F6] text-[#002248] overflow-x-hidden scroll-smooth selection:bg-[#008080] selection:text-white">
      <Seo 
        title="About Us | Our Journey & Vision" 
        description="Discover how Collabority's decade of innovation empowers digital transformation for global enterprises."
        path="/about"
        keywords="about Collabority, IT solutions history, marketing agency vision"
      />

      <Navbar />
      
      <header id="hero">
        <PageHeader title="About Us" breadcrumb="Home | About Us" />
      </header>

      <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-0.5 w-12 bg-[#2563eb]" />
              <span className="text-[#2563eb] font-bold text-sm tracking-[0.2em] uppercase">Our Legacy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#002248] leading-[0.95] mb-8">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#008080]">Digital Futures</span>
            </h1>

            <div className="inline-flex bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex-col items-center animate-bounce-slow">
               <span className="text-4xl font-black text-[#2563eb]">10+</span>
               <span className="text-[10px] uppercase font-bold text-gray-400">Years of Growth</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
              At <span className="text-[#008080] font-bold">Collabority</span>, we bridge the gap between complex technology and human-centric brand growth.
            </p>
            
            <div className="prose prose-lg text-gray-500">
              <p>We specialize in secure infrastructure, data-driven marketing, and cinematic creative production. </p>
              
              <AnimatePresence>
                {showMoreIntro && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden border-l-4 border-[#008080] pl-6 mt-6 bg-gray-50/50 py-4 rounded-xl"
                  >
                    Our mission is to foster long-term partnerships through transparent consulting and a commitment to emerging tech like AI and Cloud Native architecture.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => setShowMoreIntro(!showMoreIntro)} 
              className="group flex items-center gap-3 text-[#002248] font-bold uppercase text-sm tracking-widest hover:text-[#2563eb] transition-all"
            >
              {showMoreIntro ? 'Show Less' : 'Explore Our Mission'}
              <span className={`transform transition-transform duration-300 ${showMoreIntro ? 'rotate-180' : 'group-hover:translate-x-2'}`}>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {SERVICE_CARDS.map((card, idx) => (
            <article 
              key={idx} 
              data-index={idx}
              ref={el => tilesRef.current[idx] = el}
              className={`group relative h-[32rem] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-1000 transform ${
                tilesVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <img 
                src={card.img} 
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-200">
                  {expandedTile === idx ? card.longDesc : card.desc}
                </p>
                <button 
                  onClick={() => setExpandedTile(expandedTile === idx ? null : idx)} 
                  className="mt-6 w-fit py-2 px-6 border border-white/30 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  {expandedTile === idx ? 'Collapse' : 'Learn More'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <HistoryTimeline />
      <FaqSection />
      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default memo(AboutUs);