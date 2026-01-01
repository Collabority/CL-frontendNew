import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { newsfeed, servicesCards } from "../constants/Data";
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
import { useEffect } from "react";
import instance from "../lib/instance";

import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const Services = () => {
  // for the image to animate
  useAnimateElementById("slideUpImage");

  // for grid-elements to animate.
  useAnimateElementsByClass("animate-on-scroll");

  const [showVideo, setShowVideo] = useState(false);
  
  // 3. State for Services
  const [dbServices, setDbServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // 4. Fetch Services from Admin Panel
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await instance.get("/services/all");
        // Accessing data structure based on your ServicesDetails.jsx logic
        const data = response.data?.data?.services || []; 
        setDbServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <main className="bg-white min-h-screen flex flex-col font-poppins overflow-x-hidden">
      <Navbar />
      {/* Hero-Section */}
      <PageHeader
        title="Services"
        breadcrumb={
          <>
            <div className="flex gap-2">
              <Link to="/">Home</Link>
              <p>|</p>
              <Link to="/about">About</Link>
            </div>
          </>
        }
      />
      {/* intro */}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-14 lg:px-20 flex flex-col md:flex-row gap-10 md:gap-8">
        {/* Left Images */}
        <div className="flex flex-col sm:flex-row md:flex-col sm:gap-8 w-full md:w-1/2 sm:ml-0 md:ml-12">
          <div className="flex-shrink-0 relative z-10">
            <motion.img
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 object-cover"
              src="src/assets/services-op-1.webp"
              alt="services-op-1"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <div
            className="px-0 sm:px-6 lg:px-24 flex-shrink-0 -mt-12 sm:-mt-20 lg:-mt-42 z-20 transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll"
            id="slideUpImage"
          >
            <img
              className="border-10 border-white w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 object-cover"
              src="src/assets/services-op-2.webp"
              alt="services-op-2"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="mt-10 md:mt-20 flex flex-col md:text-left md:w-1/2">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 text-[#008080] font-medium">
            <h4 className="text-sm sm:text-base">Digital Growth Strategies</h4>
            <h4 className="hidden sm:block">______</h4>
          </div>
          <h2 className="text-gray-900 text-3xl sm:text-6xl font-bold mt-4 leading-[2.5rem] sm:leading-[4.5rem]">
            Fueling Visibility, <br className="hidden sm:block" /> Driving
            Results
          </h2>
          <p className="mt-6 text-xs sm:text-sm opacity-[50%] leading-5">
            At Collabority, we go beyond traditional marketing to deliver
            integrated strategies that drive real business growth. From
            performance marketing and content planning to audience targeting and
            brand positioning — every move is data-backed and result-oriented.
            Our focus is on helping your brand scale faster, smarter, and
            stronger in the digital era.
          </p>
          <button className="bg-[#008080] px-6 py-3 w-full sm:w-1/2 md:w-1/3 mt-8 rounded text-white font-medium hover:bg-gray-900 hover:text-white">
            <Link to="/contact">Make A Call</Link>
          </button>
        </div>
      </section>

      {/* Intro-Video Section */}
      <section className="bg-gray-900 min-h-screen sm:py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-8">
        {/* LEFT CONTENT */}
        <div className="flex flex-col w-full md:w-1/2 md:pr-6">
          <h4 className="text-gray-500 font-semibold tracking-widest text-sm">
            INTRO VIDEO
          </h4>
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold leading-tight mt-5">
            Enabling Smarter <br className="hidden sm:block" /> Digital Growth
          </h1>
          <h5 className="text-gray-500 text-base sm:text-lg leading-6 sm:leading-7 mt-6">
            Delivering integrated IT, marketing, and design{" "}
            <br className="hidden sm:block" />
            solutions for digital transformation.
          </h5>
          <p className="text-gray-300 text-sm leading-6 sm:leading-7 mt-6">
            At Collabority, we empower brands through innovative IT solutions,
            impactful
            <br className="hidden sm:block" /> marketing strategies, creative
            design, and professional video production. Our{" "}
            <br className="hidden sm:block" /> approach is rooted in
            understanding your business goals and crafting digital{" "}
            <br className="hidden sm:block" />
            experiences that deliver real value.
          </p>
          <div className="mt-8">
            <Link to="/services-details">
              <button className="bg-[#008080] w-full sm:w-1/2 md:w-2/3 lg:w-1/3 rounded text-white py-3 px-6 hover:bg-white hover:text-[#008080] transition-colors">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT VIDEO/IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md sm:max-w-xl md:max-w-lg lg:max-w-2xl">
            <img
              src="https://html.webtend.net/omnivus/assets/img/intro-thumb.jpg"
              className="w-full object-cover h-auto rounded"
              alt="Intro"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setShowVideo(true)}
                className="bg-[#008080] rounded-full p-5 text-white text-2xl hover:bg-gray-900 flex items-center justify-center transition-colors"
              >
                <FaPlay />
              </button>
            </div>

            {/* VIDEO MODAL */}
            {showVideo && (
              <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                <div className="relative bg-[#008080] rounded-lg max-w-4xl w-full p-1 pointer-events-auto">
                  <button
                    onClick={() => setShowVideo(false)}
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold text-red-300"
                  >
                    ✕
                  </button>
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded"
                      src="https://youtube.com/embed/9xwazD5SyVg?"
                      title="Intro Video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-8 md:px-16 lg:px-40 flex-grow bg-[#F8F6F3]">
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-950 text-center mb-10">
          Latest Services
        </h1>

        <div className="container mx-auto transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll">
          <div className="flex flex-wrap justify-center -m-4 md:-m-5">
            
            {/* 5. Render Loading State or Data */}
            {loading ? (
              <div className="w-full text-center py-20 text-gray-500">Loading Services...</div>
            ) : dbServices.length > 0 ? (
              dbServices.map((service, i) => (
                <div
                  key={service._id || i}
                  className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4 md:p-5 h-[400px]" // Fixed height for uniformity
                >
                  {/* Pass the dynamic service object */}
                  <ServiceCard service={service} />
                </div>
              ))
            ) : (
              <div className="w-full text-center py-20">No services found.</div>
            )}

          </div>
        </div>
      </section>

      {/* Product-Based Services */}
      <section className="relative py-20 px-6 sm:px-10 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Our Product-Based Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            From validating ideas to launching products, Collabority empowers businesses with
            end-to-end tech, creative, and marketing solutions — built for scale, speed, and success.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-left text-gray-800">
          <div className="bg-primary rounded-xl shadow-md p-6 border hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-secondary mb-3">
              🚀 MVP to Market Fast
            </h3>
            <p className="mb-4">
              We prototype and develop Minimum Viable Products (MVPs) using agile workflows to get your product in front of real users quickly.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
              <li>Wireframing & UX strategy</li>
              <li>Frontend & backend development</li>
              <li>Launch support & iteration</li>
            </ul>
          </div>

          <div className="bg-primary rounded-xl shadow-md p-6 border hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-secondary mb-3">
              🎨 Full-Stack Creative Studio
            </h3>
            <p className="mb-4">
              Our in-house design team builds immersive interfaces and visual systems that are on-brand and user-first.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
              <li>UI/UX design systems</li>
              <li>Branding & motion graphics</li>
              <li>Interactive web & mobile design</li>
            </ul>
          </div>

          <div className="bg-primary rounded-xl shadow-md p-6 border hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold text-secondary mb-3">
              📊 Smart Marketing & Analytics
            </h3>
            <p className="mb-4">
              Our digital campaigns are performance-oriented — combining content, automation, and tracking to maximize growth.
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
              <li>SEO & inbound funnels</li>
              <li>Social & paid ad strategy</li>
              <li>Performance dashboards</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-4">
            Whether you're a startup building from scratch or a growing brand scaling up — we’ve got you covered.
          </p>
          <button className="inline-flex items-center gap-2 bg-secondary text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-secondary border border-secondary transition">
            Request a Free Quote
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* News feed */}

      <section className="bg-gray-800 py-16">
        <div className="text-center px-4">
          <h1 className="text-3xl text-[#008080] sm:text-5xl font-extrabold mb-4">
            News Feed
          </h1>
          <p className="font-medium text-white text-sm sm:text-base">
            Helping brands thrive with the perfect blend of
          </p>
          <p className="font-medium text-white text-sm sm:text-base">
            strategy, creativity, and technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-x-10 gap-y-12 mt-12 px-4">
          {newsfeed.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-white w-full sm:w-80 text-center overflow-hidden rounded shadow-lg transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll"
              id="slideUpImage"
            >
              {/* Image with breakpoint-specific height */}
              <img
                src={item.image}
                alt={item.post}
                className="w-full lg:h-100 md:h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-rotate-1"
              />

              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1/2 bg-black/50 transition-all duration-500 ease-in-out flex flex-col items-center justify-center px-4">
                <p className="text-sm sm:text-base text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-md">
                  {item.des}
                </p>
                <Link to="/blog">
                  <button className="mt-4 opacity-0 cursor-pointer group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-500 text-white text-2xl drop-shadow-md">
                    →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Services;
