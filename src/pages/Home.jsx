import React, { useState, lazy, Suspense, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaArrowRight, FaArrowLeft, FaQuoteRight } from "react-icons/fa";
import banner_img from "../assets/banner-img.webp";
import Navbar from "../layouts/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import Seo from "../components/Seo";
import {
  bgColorMap,
  infoData,
  newsSection,
  portfolioImages,
  services,
  colorMap,
} from "../constants/Data";

// Lazy‑loaded components
const ClientTestimonial = lazy(() => import("../components/ClientTestimonial"));
const ContactSection = lazy(() => import("../components/ContactSection"));
const Footer = lazy(() => import("../layouts/Footer"));
const StatisticsSection = lazy(() => import("../components/StatisticsSection"));
const BlogSection = lazy(() => import("../components/BlogSection"));

const SectionSkeleton = ({ height = "400px" }) => (
  <div style={{ height, width: "100%", backgroundColor: "#f8f6f3" }} />
);

const LazySection = ({ children, height }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense fallback={<SectionSkeleton height={height} />}>
          {children}
        </Suspense>
      ) : (
        <SectionSkeleton height={height} />
      )}
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handleNext = () => {
    if (startIndex + 3 < portfolioImages.length) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <main className="min-h-screen bg-white font-poppins overflow-x-hidden selection:bg-[#008080] selection:text-white">
      <Seo
        title="Innovative IT Solutions & Staffing Agency | Collabority"
        description="Collabority is a premier digital transformation agency. We offer IT consulting and custom software development."
        path="/"
      />

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-12 overflow-hidden bg-gradient-to-br from-white to-slate-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#008080]/5 -skew-x-12 translate-x-20 z-0 hidden lg:block" aria-hidden="true" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-8">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full lg:w-3/5 text-center lg:text-left">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-teal-50 text-[#008080] font-black tracking-widest text-[10px] uppercase mb-8 border border-teal-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008080] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#008080]"></span>
                </span>
                Digital Transformation Agency
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-[#002248] leading-[1] mb-8 tracking-tighter">
                We Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008080] via-[#008080] to-blue-600">IT Solutions</span> <br />
                That Matter.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-gray-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Collabority fuses innovative technology with creative design to drive growth. We transform your vision into scalable software.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/services-details" className="group px-10 py-5 bg-[#008080] text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl shadow-teal-900/20 hover:bg-[#002248] transition-all duration-300 flex items-center gap-3 active:scale-95">
                  Explore Services <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button onClick={() => setShowVideo(true)} className="px-10 py-5 bg-white text-[#002248] border-2 border-gray-100 rounded-2xl font-black uppercase tracking-widest text-sm hover:border-[#008080] hover:text-[#008080] transition-all duration-300 flex items-center gap-3">
                  <FaPlay size={12} /> Watch Intro
                </button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.6 }} 
              className="w-full lg:w-2/5 relative"
            >
              <div className="relative z-10">
                <img 
                  src={banner_img} 
                  alt="Collabority IT Services" 
                  width="600" 
                  height="520" 
                  loading="eager" 
                  fetchpriority="high"
                  className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,128,128,0.15)] animate-float" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <span className="text-[#008080] font-black uppercase tracking-[0.3em] text-xs">Our Expertise</span>
              <h2 className="text-4xl lg:text-6xl font-black text-[#002248] tracking-tighter mt-4">Pioneering Digital Solutions</h2>
            </div>
            <Link to="/services-details" className="text-[#008080] font-bold border-b-2 border-[#008080]/20 hover:border-[#008080] transition-all pb-1 uppercase tracking-widest text-sm">View All</Link>
          </header>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <article key={idx} className="group p-10 rounded-[2.5rem] bg-[#F8F6F3] hover:bg-white hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 border border-transparent hover:border-teal-100">
                  <div className={`w-16 h-16 rounded-2xl ${bgColorMap[service.color]} flex items-center justify-center mb-8 transform group-hover:-rotate-12 transition-transform duration-500`}>
                     <Icon className={`text-3xl ${colorMap[service.color]}`} />
                  </div>
                  <h3 className="text-xl font-black text-[#002248] mb-4 group-hover:text-[#008080] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.des}</p>
                  <div className="w-10 h-1 bg-gray-200 group-hover:w-full group-hover:bg-[#008080] transition-all duration-700 rounded-full" />
                </article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-32 bg-[#002248] text-white overflow-hidden rounded-[4rem] lg:mx-6">
        <div className="container mx-auto px-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#008080] font-black tracking-[0.3em] uppercase text-xs">Our Portfolio</span>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mt-4 leading-[1.1]">Selected Case Studies</h2>
            </div>
            <div className="flex gap-4">
              <button onClick={handlePrev} disabled={startIndex === 0} aria-label="Previous Project" className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-[#008080] hover:border-[#008080] transition-all disabled:opacity-20 active:scale-90"><FaArrowLeft /></button>
              <button onClick={handleNext} disabled={startIndex + 3 >= portfolioImages.length} aria-label="Next Project" className="w-14 h-14 rounded-full bg-white text-[#002248] flex items-center justify-center hover:bg-[#008080] hover:text-white transition-all disabled:opacity-20 active:scale-90"><FaArrowRight /></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {portfolioImages.slice(startIndex, startIndex + 3).map((src, idx) => (
                <motion.div key={src.title + idx} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer">
                  <img 
                    src={src.image} 
                    alt={src.title} 
                    width="400" 
                    height="500" 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002248] via-[#002248]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <span className="text-[#008080] font-black text-xs uppercase tracking-[0.2em] mb-2">{src.title}</span>
                    <h4 className="text-2xl font-black mb-6 leading-tight">{src.des}</h4>
                    <Link to="/portfolio" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:text-[#008080]">
                      View Case Study <FaArrowRight />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* STATISTICS – LAZY LOADED */}
      <LazySection height="400px">
        <StatisticsSection data={infoData} />
      </LazySection>

      {/* LAZY-LOADED CLIENT TESTIMONIALS */}
      <LazySection height="600px">
        <ClientTestimonial title1="Feedback" title2="Trust From Clients" />
      </LazySection>

      {/* LAZY-LOADED CONTACT SECTION */}
      <LazySection height="500px">
        <ContactSection />
      </LazySection>

      {/* BLOG – LAZY LOADED */}
      <LazySection height="600px">
        <BlogSection posts={newsSection} />
      </LazySection>

      {/* MODAL */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#002248]/95 z-[999] flex items-center justify-center p-6 backdrop-blur-xl"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 text-white hover:text-[#008080] z-10 text-3xl font-bold"
                aria-label="Close Video"
              >
                ✕
              </button>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/9xwazD5SyVg?autoplay=1"
                title="Collabority Intro"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LAZY-LOADED FOOTER */}
      <LazySection height="400px">
        <Footer />
      </LazySection>

      <ScrollToTop />
    </main>
  );
};

export default memo(Home); 