import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { newsfeed } from "../constants/Data";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import NewsLetter from "../components/NewsLetter";
import {
  useAnimateElementById,
  useAnimateElementsByClass,
} from "../utils/useScrollAnimation";
import instance from "../lib/instance";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const Services = () => {
  useAnimateElementById("slideUpImage");
  useAnimateElementsByClass("animate-on-scroll");

  const [showVideo, setShowVideo] = useState(false);
  const [dbServices, setDbServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await instance.get("/services/all");
        setDbServices(response.data?.data?.services || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <main className="bg-white font-poppins overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <PageHeader
        title="Services"
        breadcrumb={
          <div className="flex gap-2">
            <Link to="/">Home |</Link>
            <Link to="/about">About</Link>
          </div>
        }
      />

      {/* Intro Section */}
      <section className="py-10 sm:py-20 px-4 sm:px-8 md:px-14 lg:px-20 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row md:flex-col sm:gap-8">
          <motion.img
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 object-cover"
            src="src/assets/services-op-1.webp"
            alt="services-op-1"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <div
            id="slideUpImage"
            className="px-0 sm:px-6 lg:px-24 -mt-10 sm:-mt-20 transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll"
          >
            <img
              className="border-8 border-white w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 object-cover"
              src="src/assets/services-op-2.webp"
              alt="services-op-2"
            />
          </div>
        </div>

        <div className="mt-6 md:mt-20 w-full md:w-1/2">
          <div className="flex gap-4 text-[#008080] font-medium">
            <h4>Digital Growth Strategies</h4>
            <span className="hidden sm:block">______</span>
          </div>
          <h2 className="text-gray-900 text-2xl sm:text-6xl font-bold mt-4 leading-tight">
            Fueling Visibility, <br className="hidden sm:block" /> Driving Results
          </h2>
          <p className="mt-6 text-sm opacity-50 leading-6">
            At Collabority, we go beyond traditional marketing to deliver
            integrated strategies that drive real business growth. From
            performance marketing and content planning to audience targeting and
            brand positioning — every move is data-backed and result-oriented.
            Our focus is on helping your brand scale faster, smarter, and
            stronger in the digital era.
          </p>
          <Link to="/contact">
            <button className="bg-[#008080] px-6 py-3 mt-8 rounded text-white hover:bg-gray-900">
              Make A Call
            </button>
          </Link>
        </div>
      </section>

      {/* Intro Video Section */}
      <section className="bg-gray-900 py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-1/2">
          <h4 className="text-gray-500 font-semibold tracking-widest text-sm">
            INTRO VIDEO
          </h4>
          <h1 className="text-white text-2xl sm:text-5xl font-extrabold mt-5">
            Enabling Smarter <br className="hidden sm:block" /> Digital Growth
          </h1>
          <h5 className="text-gray-500 text-base mt-6">
            Delivering integrated IT, marketing, and design solutions for digital
            transformation.
          </h5>
          <p className="text-gray-300 text-sm mt-6">
            At Collabority, we empower brands through innovative IT solutions,
            impactful marketing strategies, creative design, and professional
            video production.
          </p>
          <Link to="/services-details">
            <button className="bg-[#008080] px-6 py-3 mt-8 rounded text-white hover:bg-white hover:text-[#008080]">
              Learn More
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 relative max-w-xl">
          <img
            src="https://html.webtend.net/omnivus/assets/img/intro-thumb.jpg"
            className="rounded w-full"
            alt="Intro"
          />
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="bg-[#008080] p-5 rounded-full text-white text-2xl hover:bg-gray-900">
              <FaPlay />
            </span>
          </button>
        </div>

        {showVideo && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
            <div className="bg-[#008080] p-2 rounded max-w-4xl w-full relative">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-3 -right-3 bg-white rounded-full w-8 h-8"
              >
                ✕
              </button>
              <div className="aspect-video">
                <iframe
                  className="w-full h-full rounded"
                  src="https://youtube.com/embed/9xwazD5SyVg"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Services Grid Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-40 bg-[#F8F6F3]">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
          Latest Services
        </h1>

        {loading ? (
          <p className="text-center">Loading Services...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dbServices.map((service, i) => (
              <ServiceCard key={service._id || i} service={service} />
            ))}
          </div>
        )}
      </section>

      {/* Product Based Services Section */}
      <section className="py-14 sm:py-20 px-4 sm:px-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-6">
          Our Product-Based Services
        </h2>
        <p className="text-center text-gray-600 mb-12">
          From validating ideas to launching products, Collabority empowers
          businesses with end-to-end tech, creative, and marketing solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-3">
              🚀 MVP to Market Fast
            </h3>
            <p>
              We prototype and develop Minimum Viable Products (MVPs) using agile
              workflows.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-3">
              🎨 Full-Stack Creative Studio
            </h3>
            <p>
              Our in-house design team builds immersive interfaces and visual
              systems.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border">
            <h3 className="text-xl font-semibold mb-3">
              📊 Smart Marketing & Analytics
            </h3>
            <p>
              Performance-oriented digital campaigns combining content,
              automation, and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="bg-gray-800 py-14">
        <h2 className="text-3xl sm:text-5xl text-[#008080] font-extrabold text-center mb-6">
          News Feed
        </h2>

        <div className="flex flex-wrap justify-center gap-8 px-4">
          {newsfeed.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-full sm:w-80 overflow-hidden rounded animate-on-scroll"
            >
              <img
                src={item.image}
                alt={item.post}
                className="w-full h-56 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center px-4">
                <p className="text-white text-sm">{item.des}</p>
                <Link to="/blog">
                  <button className="mt-4 text-white text-2xl">→</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />

      <ScrollToTop />
    </main>
  );
};

export default Services;
