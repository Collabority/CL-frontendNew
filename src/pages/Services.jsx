import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { newsfeed, servicesCards } from "../constants/data";
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

import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const Services = () => {
  // for the image to animate
  useAnimateElementById("slideUpImage");

  // for grid-elements to animate.
  useAnimateElementsByClass("animate-on-scroll");

  const [showVideo, setShowVideo] = useState(false);
  return (
    <main className="bg-white min-h-screen flex flex-col font-poppins">
      <Navbar />
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
      <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-10 lg:gap-5">
        {/* Left Images */}
        <div className="flex flex-col sm:flex-row lg:flex-col sm:gap-8 w-full lg:w-1/2 sm:ml-0 lg:ml-32">
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
        <div className="mt-10 lg:mt-40 flex flex-col lg:text-left lg:w-1/2">
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
          <button className="bg-[#008080] px-6 py-3 w-full sm:w-1/4 mt-8 rounded text-white font-medium hover:bg-gray-900 hover:text-white">
            <Link to="/contact">Make A Call</Link>
          </button>
        </div>
      </section>

      <section className="bg-gray-900 min-h-screen py-12 sm:py-20 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-5 lg:gap-5">
        {/* Text Section */}
        <div className="flex flex-col ml-0 sm:ml-0 lg:ml-32 w-full lg:w-1/2">
          <h4 className="text-gray-500 font-semibold tracking-widest text-sm">
            INTRO VIDEO
          </h4>
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold leading-tight mt-5">
            Enabling Smarter <br className="hidden sm:block" /> Digital Growth
          </h1>
          <h5 className="text-gray-500 text-base sm:text-lg font-base leading-6 sm:leading-7 mt-6">
            Delivering integrated IT, marketing, and design{" "}
            <br className="hidden sm:block" /> solutions for digital
            transformation.
          </h5>
          <p className="text-gray-300 text-sm font-base leading-6 sm:leading-7 mt-6">
            At Collabority, we empower brands through innovative IT solutions,
            impactful <br className="hidden sm:block" /> marketing strategies,
            creative design, and professional video production. Our{" "}
            <br className="hidden sm:block" /> approach is rooted in
            understanding your business goals and crafting digital{" "}
            <br className="hidden sm:block" />
            experiences that deliver real value. Whether it's transforming
            operations through <br className="hidden sm:block" /> technology or
            enhancing brand presence with compelling media, we provide{" "}
            <br className="hidden sm:block" /> end-to-end solutions for seamless
            digital transformation and lasting growth.
          </p>
          <button className="bg-[#008080] w-full sm:w-1/2 lg:w-1/3 rounded mt-8 text-white py-3 px-6 hover:bg-white hover:text-[#008080] transition-colors">
            <Link to="/services-details">Learn More</Link>
          </button>
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
          <div className="relative w-full max-w-lg sm:max-w-3xl lg:ml-32">
            {/* Image */}
            <img
              src="https://html.webtend.net/omnivus/assets/img/intro-thumb.jpg"
              className="w-full object-cover h-auto"
              alt="Intro"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setShowVideo(true)}
                className="bg-[#008080] rounded-full p-5 text-white text-2xl hover:bg-gray-900 flex gap-2 items-center justify-center transition-colors"
              >
                <FaPlay />
              </button>

              {/* Video Modal */}
              {showVideo && (
                <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
                  <div className="relative bg-[#008080] rounded-lg max-w-4xl w-full p-1 pointer-events-auto">
                    {/* Close Button */}
                    <button
                      onClick={() => setShowVideo(false)}
                      className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold text-red-300"
                    >
                      ✕
                    </button>

                    {/* Video Player */}
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-40 flex-grow bg-[#F8F6F3]">
        <h1 className="text-3xl sm:text-5xl font-bold text-blue-950 text-center mb-10">
          Latest Services
        </h1>
        <div className="container mx-auto transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll">
          <div className="flex flex-wrap justify-center -m-4">
            {servicesCards.map((service, i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-4 sm:p-6">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
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

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-12 px-4">
          {newsfeed.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-white w-full sm:w-80 text-center overflow-hidden rounded shadow-lg transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll"
              id="slideUpImage"
            >
              {/* Image with hover effect */}
              <img
                src={item.image}
                alt={item.post}
                className="w-full h-100 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-rotate-1"
              />

              {/* Semi-transparent overlay on hover */}
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
      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Services;
