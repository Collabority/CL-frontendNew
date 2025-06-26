import React, { useState, useRef, useEffect } from 'react';
import { useAbout } from '../context/AboutContext';
import Navbar from '../layouts/Navbar';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import HistoryTimeline from '../components/about/HistoryTimeline';
import FaqSection from '../components/about/FaqSection';
import PageHeader from '../components/PageHeader';

// Restore serviceCards array for the animated tiles (with images)
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
  const [openFaqs, setOpenFaqs] = useState({});
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [tilesVisible, setTilesVisible] = useState([false, false, false]);
  const tilesRef = useRef([]);
  const [showMoreIntro, setShowMoreIntro] = useState(false);
  const [expandedTile, setExpandedTile] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleVideoModal = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  useEffect(() => {
    const observers = tilesRef.current.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setTilesVisible((prev) => {
                if (prev[idx]) return prev;
                const updated = [...prev];
                updated[idx] = true;
                return updated;
              });
            }, idx * 180); // stagger delay
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
    <div className="min-h-screen bg-beige">
      <Navbar />

      {/* Hero/Breadcrumb Section */}
      <PageHeader title="About Us" breadcrumb="Home | About" />

      {/* Experience/Intro Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="text-[#2563eb] font-bold text-lg mb-2">Years of Digital Excellence</div>
            <h2 className="text-6xl font-extrabold text-[#002248] leading-tight mb-4">
              Collabority: Empowering<br />
              Digital Transformation
            </h2>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-base text-[#7b8ca0] mb-4">
              At Collabority, we specialize in IT solutions, marketing, creative design, and video production. Our expertise ensures seamless digital transformation and brand growth for businesses in the digital era. 
              <br /><br />
              We deliver custom software, cloud integration, and secure infrastructure to empower your operations. Our marketing team crafts result-driven strategies to boost your brand's reach and engagement. With a passion for creativity, our designers and video producers create compelling visuals and stories that set you apart from the competition. 
              <br /><br />
              Whether you're a startup or an established enterprise, Collabority is your trusted partner for innovation, growth, and digital excellence. Let us help you thrive in a rapidly evolving digital landscape.
              {showMoreIntro && (
                <span>
                  <br /><br />
                  Our commitment to excellence and innovation drives us to deliver solutions that not only meet but exceed client expectations. We believe in building long-term partnerships and providing ongoing support to ensure your continued success in the digital world.
                </span>
              )}
            </p>
            <button
              className="text-[#2563eb] font-semibold text-base focus:outline-none"
              onClick={() => setShowMoreIntro((prev) => !prev)}
            >
              {showMoreIntro ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </section>

      {/* Animated Tiles Hover Section */}
      <section className="container mx-auto px-4 pb-16 bg-[#F8F6F3]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {serviceCards.map((card, idx) => (
            <div
              key={idx}
              ref={el => tilesRef.current[idx] = el}
              className={`relative overflow-hidden group shadow-lg w-full max-w-sm h-96 rounded-none bg-[#e7dbcc] flex flex-col justify-end transition-all duration-700 ease-in-out
                ${tilesVisible[idx] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onMouseLeave={() => setExpandedTile(null)}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10 p-8 flex flex-col items-start w-full h-full justify-end">
                <div
                  className="transition-transform duration-300 group-hover:-translate-y-4"
                >
                  <h3 className="text-xl font-semibold mb-2 text-white drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-white drop-shadow-md">
                    {card.desc}
                  </p>
                  {expandedTile === idx && (
                    <div className="mt-2 text-white drop-shadow-md">
                      {card.title === 'IT Solutions' && 'We provide scalable, secure, and innovative IT solutions tailored to your business needs, including software development, cloud migration, and IT consulting.'}
                      {card.title === 'Marketing Strategies' && 'Our marketing experts use data-driven strategies, SEO, and creative campaigns to maximize your brand visibility and engagement.'}
                      {card.title === 'Design & Video Production' && 'From branding to motion graphics, our creative team delivers stunning visuals and impactful videos to elevate your brand.'}
                    </div>
                  )}
                </div>
                <button
                  className="mt-4 text-white font-medium opacity-100 transition-opacity duration-300 focus:outline-none"
                  onClick={() => setExpandedTile(expandedTile === idx ? null : idx)}
                >
                  {expandedTile === idx ? 'Show Less' : 'Read More'}
                </button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2256]/80 to-transparent z-5 pointer-events-none transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="w-full bg-[#f3ede6] py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Image with Play Button and Blue Border */}
          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Our Story - Business Solutions"
                className="w-[480px] h-[540px] object-cover border-b-[12px] border-l-[12px] border-[#008080] shadow-lg"
              />
              {/* Play Button with Ripple Animation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ pointerEvents: 'auto' }}
                onClick={toggleVideoModal}
              >
                <motion.span
                  className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full bg-teal text-white text-4xl shadow-lg"
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
                  }}
                >
                  <svg className="w-10 h-10" fill="white" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" stroke="white" strokeWidth="0.5" strokeLinejoin="round" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </motion.button>
            </div>
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <span className="text-[#2563eb] font-semibold text-lg mb-2">Our Story</span>
            <h1 className="text-6xl font-extrabold text-[#002248] mb-8" style={{ lineHeight: '1.3' }}>Helping Businesses<br />Thrive Digitally</h1>
            <h2 className="text-2xl text-[#68A1BB] font-light mb-8" style={{ lineHeight: '2.6rem' }}>
              Collabority delivers IT, marketing, design, and video expertise for your brand's success.
            </h2>
            <p className="text-[#68A1BB] text-base font-light mb-10 max-w-xl" style={{ lineHeight: '2.1rem' }}>
              We partner with you to create innovative solutions, drive engagement, and ensure your business stands out in the digital landscape. Our team's passion and experience make us your trusted digital growth partner.
            </p>
            <button className="bg-teal text-white text-lg font-semibold px-8 py-4 rounded-none shadow hover:bg-teal/80 transition-colors">Learn More</button>
          </div>
        </div>
      </section>
      <HistoryTimeline />
      <div>
        <FaqSection />
      </div>
      {/* Modal for About Us page */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className="relative bg-white shadow-2xl flex flex-col"
            style={{
              width: '70vw',
              height: '70vh',
              maxWidth: '100vw',
              maxHeight: '100vh',
              minWidth: '320px',
              minHeight: '200px',
              overflow: 'auto',
            }}
          >
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
              style={{ width: '100%', height: '100%', minHeight: '200px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
