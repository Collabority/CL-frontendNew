import React, { useState, useRef, useEffect } from 'react';
import { useAbout } from '../context/AboutContext';
import Navbar from '../layouts/Navbar';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import HistoryTimeline from '../components/about/HistoryTimeline';
import FaqSection from '../components/about/FaqSection';
import PageHeader from '../components/PageHeader';
import NewsLetter from '../components/NewsLetter';
import Footer from '../layouts/Footer';

const serviceCards = [
  {
    title: "IT Solutions",
    desc: "Cutting-edge software, cloud integration, and secure infrastructure for modern businesses.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Marketing Strategies",
    desc: "Result-driven digital marketing to boost your brand's reach and engagement.",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Design & Video Production",
    desc: "Creative design and professional video content to help your business thrive in the digital era.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
];

const AboutUs = () => {
  const aboutData = useAbout();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [tilesVisible, setTilesVisible] = useState([false, false, false]);
  const tilesRef = useRef([]);
  const [showMoreIntro, setShowMoreIntro] = useState(false);
  const [expandedTile, setExpandedTile] = useState(null);

  const toggleVideoModal = () => setIsVideoModalOpen(prev => !prev);

  useEffect(() => {
    const observers = tilesRef.current.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setTilesVisible(prev => {
                if (prev[idx]) return prev;
                const updated = [...prev];
                updated[idx] = true;
                return updated;
              });
            }, idx * 180);
          }
        },
        { threshold: 0.2 }
      );
    });

    tilesRef.current.forEach((ref, idx) => {
      if (ref && observers[idx]) observers[idx].observe(ref);
    });

    return () => {
      observers.forEach((observer, idx) => {
        if (observer && tilesRef.current[idx]) observer.disconnect();
      });
    };
  }, []);

  return (
    <div className="bg-beige text-[#002248] overflow-x-hidden">
      <Navbar />
      <PageHeader title="About Us" breadcrumb={
        <div className="flex flex-wrap gap-2 text-md">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/services">Services</Link>
        </div>
      } />

      {/* Intro Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <div className="text-[#2563eb] font-bold text-base sm:text-lg mb-2">Years of Digital Excellence</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
              Collabority: Empowering<br />Digital Transformation
            </h2>
          </div>
          <div className="lg:w-1/2 text-sm sm:text-base text-[#7b8ca0]">
            <p className="mb-4">
            At Collabority, we specialize in IT solutions, marketing, creative design, and video production. Our expertise ensures seamless digital transformation and brand growth for businesses in the digital era.
              <br /><br />
              We deliver custom software, cloud integration, and secure infrastructure to empower your operations. Our marketing team crafts result-driven strategies to boost your brand's reach and engagement.
              <br /><br />
              With a passion for creativity, our designers and video producers create compelling visuals and stories that set you apart from the competition.
              {showMoreIntro && (
                <>
                  <br /><br />
                  Our commitment to excellence and innovation drives us to deliver solutions that not only meet but exceed client expectations. We believe in building long-term partnerships and providing ongoing support to ensure your continued success in the digital world.
                </>
              )}
            </p>
            <button
              className="text-[#008080] font-semibold"
              onClick={() => setShowMoreIntro(!showMoreIntro)}
            >
              {showMoreIntro ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="max-w-screen-xl mx-auto px-4 pb-16 bg-[#F8F6F3]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card, idx) => (
            <div
              key={idx}
              ref={el => tilesRef.current[idx] = el}
              className={`relative overflow-hidden group shadow-lg h-[22rem] sm:h-[26rem] md:h-96 bg-[#e7dbcc] transition-all duration-700 ease-in-out
              ${tilesVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onMouseLeave={() => setExpandedTile(null)}
            >
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-500" />
              {expandedTile === idx && <div className="absolute inset-0 bg-black/50 z-10" />}
              <div className="relative z-20 p-6 flex flex-col h-full justify-end">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white drop-shadow">{card.title}</h3>
                <p className="text-white drop-shadow">{card.desc}</p>
                {expandedTile === idx && (
                  <p className="mt-2 text-sm text-white drop-shadow">
                    {card.title === 'IT Solutions' && 'We provide scalable, secure IT solutions...'}
                    {card.title === 'Marketing Strategies' && 'Our marketing experts use SEO and campaigns...'}
                    {card.title === 'Design & Video Production' && 'We deliver stunning visuals and videos...'}
                  </p>
                )}
                <button
                  className="mt-4 text-white font-medium"
                  onClick={() => setExpandedTile(expandedTile === idx ? null : idx)}
                >
                  {expandedTile === idx ? 'Show Less' : 'Read More'}
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2256]/80 to-transparent z-5 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-[#f3ede6] py-16">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                className="w-full h-[300px] sm:h-[400px] object-cover border-b-[10px] border-l-[10px] border-[#008080] shadow-lg"
                alt="Story" />
              <motion.button whileHover={{ scale: 1.1 }} onClick={toggleVideoModal}
                className="absolute inset-0 flex items-center justify-center">
                <motion.span className="z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-teal text-white"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(13,89,219,0.7)",
                      "0 0 0 20px rgba(13,89,219,0.0)",
                      "0 0 0 0 rgba(13,89,219,0.7)"
                    ]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}>
                  <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" stroke="white" strokeWidth="0.5" />
                  </svg>
                </motion.span>
              </motion.button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <span className="text-[#008080] font-semibold text-lg">Our Story</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold my-4">Helping Businesses Thrive Digitally</h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-xl leading-relaxed">
              We create innovative solutions, drive engagement, and ensure your brand stands out in the digital landscape.
            </p>
            <Link to="/services">
              <button className="bg-[#008080] text-white px-6 py-3 rounded-sm hover:bg-teal/80 text-sm sm:text-base font-semibold">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      <HistoryTimeline />
      <FaqSection />

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative bg-white shadow-2xl w-[95vw] sm:w-[90vw] lg:w-[70vw] h-[70vh] overflow-auto">
            <button
              className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-800 z-10"
              onClick={toggleVideoModal}
              aria-label="Close modal"
            >
              &times;
            </button>
            <iframe
              src="/about"
              title="About Us Modal"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AboutUs;
