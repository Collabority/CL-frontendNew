import React, { useState, useRef, useEffect } from 'react';
import { useAbout } from '../../context/AboutContext';
import Navbar from '../../layouts/navbar/Navbar';
import Footer from '../../layouts/footer/Footer';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import HistoryTimeline from '../../components/about/HistoryTimeline';
import FaqSection from '../../components/about/FaqSection';

// Restore serviceCards array for the animated tiles (with images)
const serviceCards = [
  {
    title: "Design & Development",
    desc: "The functional goal of technical content is to help people use a product.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Technical Support",
    desc: "The functional goal of technical content is to help people use a product.",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Digital Marketing",
    desc: "The functional goal of technical content is to help people use a product.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
];

const AboutUs = () => {
  const aboutData = useAbout();
  const [openFaqs, setOpenFaqs] = useState({});
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [tilesVisible, setTilesVisible] = useState([false, false, false]);
  const tilesRef = useRef([]);

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
    <div className="min-h-screen bg-beige font-poppins">
      <Navbar />

      {/* Hero/Breadcrumb Section */}
      <section className="relative w-full bg-[#F8F6F3] pt-16 pb-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#002248] mb-4 tracking-tight">About Us</h1>
        <div className="text-base md:text-lg font-semibold text-[#7b8ca0] flex items-center justify-center gap-2">
          <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <span className="mx-1">|</span>
          <span className="text-[#7b8ca0]">About</span>
        </div>
      </section>

      {/* Experience/Intro Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/2">
            <div className="text-[#2563eb] font-bold text-lg mb-2">25 Years Of Experience</div>
            <h2 className="text-6xl font-extrabold text-[#002248] leading-tight mb-4">
              Not only explore<br />
              for job done.
            </h2>
              </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-base text-[#7b8ca0] mb-4">Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It's a lot meaningful content here.</p>
            <Link to="#" className="text-[#2563eb] font-semibold text-base">Read More</Link>
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
                </div>
                <a
                  href="#"
                  className="mt-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Read More
                </a>
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
                src="data:image/jpeg;base64,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"
                alt="Intro Video"
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
            <span className="text-[#2563eb] font-semibold text-lg mb-2">Intro Video</span>
            <h1 className="text-6xl font-extrabold text-[#002248] mb-8" style={{ lineHeight: '1.3' }}>How we growth our<br />business.</h1>
            <h2 className="text-2xl text-[#68A1BB] font-light mb-8" style={{ lineHeight: '2.6rem' }}>
              The introduction of cloud and mobile<br />technologies into enterprise software.
            </h2>
            <p className="text-[#68A1BB] text-base font-light mb-10 max-w-xl" style={{ lineHeight: '2.1rem' }}>
              hether you are building an enterprise web portal or a state-of-the-art website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools in abundance, allowing maintained PHP frameworks provide those tools in abundance, allowing developers to save time, re-use code, and streamline the back end. As software development tools continuously.
            </p>
            <button className="bg-teal text-white text-lg font-semibold px-8 py-4 rounded-none shadow hover:bg-teal/80 transition-colors">Learn More</button>
          </div>
        </div>
      </section>
      <HistoryTimeline />
      <div>
        <FaqSection />
      </div>
      <footer className="relative bg-darkblue text-white py-16 overflow-hidden">
        {/* Blue circle bottom left */}
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-[#2563eb] rounded-tr-full opacity-30 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">OmniVus.</h3>
            <p className="mb-4">The web has changed a lot since Vitaly posted his first article back in 2006. The team at Smashing has changed too, as have the things that we bring to our community conferences, books, and our membership added to the online magazine.</p>
            <p>One thing that hasn't changed is that we're a small team — with most of us not working</p>
          </div>
          {/* Pages/Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Career</li>
              <li>Refund</li>
              <li>Terms</li>
              <li>Details</li>
              <li>Contact</li>
              <li>Business</li>
              <li>Affiliate</li>
            </ul>
          </div>
          {/* Working Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4">Working Hours</h4>
            <ul className="space-y-2">
              <li>Monday - Friday: 7:00 - 17:00</li>
              <li>Saturday: 7:00 - 12:00</li>
              <li>Sunday and holidays: 8:00 - 10:00</li>
            </ul>
            <p className="mt-4"><span className="font-bold">For more then 30 years</span>, IT Service has been a reliable partner in the field of logistics and cargo forwarding.<br /><a href="#" className="text-[#4fd1c5] underline">Discover More</a></p>
          </div>
        </div>
        <div className="text-center mt-12 text-white/70">Copyright By@ WebTend - 2021</div>
      </footer>
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
