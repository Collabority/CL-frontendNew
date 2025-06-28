import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import {
  bgColorMap,
  colorMap,
  hoverTextColors,
  services,
  servicesCardsData,
} from "../constants/data";
import PageHeader from "../components/PageHeader";
import dottedImage from "../assets/dotted_image.webp";
import { FaComment } from "react-icons/fa";
import {
  useAnimateElementById,
  useAnimateElementsByClass,
} from "../utils/useScrollAnimation";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const ServicesDetails = () => {
  useAnimateElementById("slideUpImage");
  useAnimateElementsByClass("animate-on-scroll");

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const imagesArray = [
    {
      image:
        "https://img.freepik.com/free-vector/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration_1284-68939.jpg?ga=GA1.1.376547967.1733342161&semt=ais_hybrid&w=740",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/3d-man-doing-online-marketing-illustration_1027215-236.jpg?ga=GA1.1.376547967.1733342161&semt=ais_hybrid&w=740",
    },
    {
      image:
        "https://img.freepik.com/free-vector/graphic-design-workplace-illustration_1284-17029.jpg?ga=GA1.1.376547967.1733342161&semt=ais_hybrid&w=740",
    },
    {
      image:
        "https://img.freepik.com/premium-psd/clapper-camera-production-cinema-movie-film-3d_66255-3269.jpg?ga=GA1.1.376547967.1733342161&semt=ais_hybrid&w=740",
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <PageHeader
        title="Services Details"
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

      <section className="py-12 sm:py-16 bg-white">
        <div className="text-center mb-8 sm:mb-12 px-4 max-w-3xl mx-auto">
          <h6 className="text-base sm:text-base font-semibold text-[#008080] tracking-wider">
            SERVICES
          </h6>
          <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-blue-950">
            What We Do
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;

            const bgColor = bgColorMap[service.color] || "bg-gray-200";
            const iconColor = colorMap[service.color] || "text-gray-600";
            const iconHoverText =
              hoverTextColors[service.color] || "group-hover:text-gray-800";

            return (
              <div
                key={idx}
                className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-lg shadow-lg cursor-pointer group bg-white text-black transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white hover:shadow-xl hover:scale-105 transform transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll"
              >
                {/* Hover Dotted Background */}
                <div
                  className="absolute inset-0 bg-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                  style={{ backgroundImage: `url(${dottedImage})` }}
                />

                {/* Icon Circle */}
                <div
                  className={`${bgColor} w-20 h-20 sm:w-28 sm:h-28 rounded-full flex items-center justify-center transition-colors duration-300 group-hover:bg-white z-20`}
                >
                  <Icon
                    className={`text-2xl sm:text-4xl ${iconColor} transition-colors duration-300 ${iconHoverText}`}
                  />
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-semibold mb-4 mt-4 sm:mt-6 z-20">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-gray-500 group-hover:text-white mb-6 sm:mb-10 text-sm sm:text-base leading-relaxed z-20">
                  {service.des}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex justify-center gap-4 flex-wrap">
          {imagesArray.map((item, idx) => {
            const fromLeft = idx < 2;

            return (
              <motion.img
                key={idx}
                src={item.image}
                className="w-[20%]"
                initial={{ x: fromLeft ? -200 : 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: idx * 0.2,
                }}
                whileHover={{
                  y: [0, -15, 0], // bounce vertically
                  transition: { repeat: Infinity, duration: 0.6 },
                }}
              />
            );
          })}
        </div>
      </section>

      {/* Details Section */}
      <section className="flex flex-col mt-10">
        <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 px-4">
          Explore Our Services
        </h1>
        <div className="w-full flex flex-col pt-10 gap-10">
          <div className="flex flex-col bg-[#F8F6F3] px-4 sm:px-10">
            {servicesCardsData.map((item, idx) =>
              idx % 2 === 0 ? (
                <div
                  key={idx}
                  className="flex flex-col lg:flex-row gap-10 justify-center items-center py-10"
                >
                  {/* Image */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] sm:h-[350px] lg:h-[400px] w-auto max-w-md rounded shadow-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 18,
                    }}
                  />

                  {/* Bold Vertical Line */}
                  <div className="w-[4px] h-[200px] lg:h-[300px] bg-black hidden sm:block"></div>

                  {/* Text Content */}
                  <div className="px-4 sm:px-8 lg:px-32 flex flex-col max-w-[700px] text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                      {item.title}
                    </h1>
                    <p className="mt-4 text-gray-500 leading-relaxed hover:text-gray-900 text-sm sm:text-base">
                      {expandedIndex === idx
                        ? item.fullDescription
                        : item.shortDescription}
                    </p>
                    <button
                      onClick={() => toggleReadMore(idx)}
                      className="mt-2 text-blue-500 underline text-sm w-fit self-center lg:self-start"
                    >
                      {expandedIndex === idx ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  key={idx}
                  className="flex flex-col lg:flex-row-reverse gap-10 justify-center items-center py-10"
                >
                  {/* Image */}
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-[300px] sm:h-[350px] lg:h-[400px] w-auto max-w-md rounded shadow-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  {/* Bold Vertical Line */}
                  <div className="w-[4px] h-[200px] lg:h-[300px] bg-black hidden sm:block"></div>

                  {/* Text Content */}
                  <div className="px-4 sm:px-8 lg:px-32 flex flex-col max-w-[700px] text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                      {item.title}
                    </h1>
                    <p className="mt-4 text-gray-500 leading-relaxed hover:text-gray-900 text-sm sm:text-base">
                      {expandedIndex === idx
                        ? item.fullDescription
                        : item.shortDescription}
                    </p>
                    <button
                      onClick={() => toggleReadMore(idx)}
                      className="mt-2 text-blue-500 underline text-sm w-fit self-center lg:self-start"
                    >
                      {expandedIndex === idx ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 w-full h-full scale-x-[-1] bg-[url('/src/assets/image3.avif')] bg-cover bg-center z-0"></div>

        <div className="relative z-10 bg-white/10">
          {" "}
          {/* optional overlay */}
          <div className="flex flex-col lg:flex-row px-4 sm:px-12 py-12 w-full max-w-screen-xl mx-auto gap-6 lg:gap-7 items-center">
            <div className="flex flex-col justify-start lg:mr-64 mt-8 lg:mt-16 mb-8 lg:mb-16 text-center lg:text-left flex-1">
              <h4 className="font-semibold text-xs sm:text-sm text-white ml-10">
                CALL TO ACTION
              </h4>
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-gray-900 leading-tight">
                Connect with Us to
              </h1>
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-gray-900 leading-tight">
                make Your Brand.
              </h1>
            </div>
            <div className="flex-shrink-0">
              <Link to="/contact">
                <button className="flex items-center cursor-pointer p-4 gap-3 bg-[#008080] text-white rounded hover:bg-gray-900 transition-colors">
                  <FaComment />
                  <span className="font-medium">Contact Us</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default ServicesDetails;
