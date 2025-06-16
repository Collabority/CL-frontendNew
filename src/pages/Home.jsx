import React, { useEffect, useState } from "react";
import banner from "../assets/banner.webp";
import banner_img from "../assets/banner-img.webp";
import { ArrowLeft, ArrowRight, Video } from "../components/Icons";
import { Link } from "react-router-dom";
import {
  bgColorMap,
  clients,
  colorMap,
  hoverTextColors,
  infoData,
  newsSection,
  portfolioImages,
  serviceCarousel,
  services,
} from "../constants/Data";
import dottedImage from "../assets/dotted_image.webp";
import {
  useAnimateElementById,
  useAnimateElementsByClass,
} from "../utils/useScrollAnimation";
import tileGallery01 from "../assets/tileGallery01.webp";
import tileGallery02 from "../assets/tileGallery02.webp";
import { FaComment, FaCommentDots, FaLaptop } from "react-icons/fa";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  // trigger animation on mouting..
  useEffect(() => {
    setAnimate(true);
  }, []);

  // for the image to animate
  useAnimateElementById("slideUpImage");

  // for grid-elements to animate.
  useAnimateElementsByClass("animate-on-scroll");

  // for slider buttons -->
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 3 < portfolioImages.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // for video playing -->
  const [showVideo, setShowVideo] = useState(false);
  return (
    <main className="min-h-screen bg-white font-poppins">
      {/* Navbar */}

      <Navbar />

      {/* Hero-Section */}
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="h-full w-full flex items-center">
          <section className="w-full">
            <div className="flex justify-between">
              {/* Left Text */}
              <div
                className={`
                pl-10 pt-30
                transition-transform transition-opacity duration-1200 ease-out
                ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }
              `}
              >
                <span className="text-2xl font-semibold text-[#008080] tracking-widest">
                  IT Business Consulting
                </span>
                <h1 className="text-8xl font-extrabold text-blue-950">
                  Best IT Solutions <br className="hidden sm:inline" /> Provider
                  Agency
                </h1>
                <p className="pt-6 font-semibold text-xl text-blue-950">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremda <br /> tium totam rem aperiam eaque ipsa
                  quae ab illo inventore veritatis
                </p>
                <Link to="/" className="w-full sm:w-auto">
                  <button className="group inline-flex items-center gap-2 mt-4 justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#008080] hover:bg-gray-900 text-white text-sm sm:text-base md:text-base rounded font-medium w-full sm:w-auto max-w-xs sm:max-w-none transition-colors duration-300 ease-in-out">
                    Our Services
                    <ArrowRight className="ml-2 narrow-icon" />
                  </button>
                </Link>
              </div>

              {/* Right Image */}
              <div
                className={`
                pr-4
                transition-transform transition-opacity duration-1200 ease-out
                ${
                  animate
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }
              `}
              >
                <img
                  src={banner_img}
                  alt="Work"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* What we do */}
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
                className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-lg shadow-lg cursor-pointer group bg-white text-black transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white hover:shadow-xl hover:scale-105 transform"
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
                  Sed ut perspiciatis unde omnis iste natus error volup
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* core-features */}
      <section className="bg-[#F8F6F3] py-12 sm:py-20 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-5 lg:gap-5">
        {/* Left Images */}
        <div className="flex flex-col pl-10 sm:flex-row lg:flex-col sm:gap-8 w-full lg:w-1/2">
          <div className="mt-0 lg:mt-10 flex-shrink-0 relative z-10">
            <img
              className="border-10 border-white w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0  object-cover"
              src={tileGallery01}
              alt="Gallery 1"
            />
          </div>
          <div
            className="px-0 sm:px-6 lg:px-16 flex-shrink-0 relative -mt-16 sm:-mt-20 lg:-mt-24 z-20 transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll"
            id="slideUpImage"
          >
            <img
              className="border-10 border-white w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 object-cover"
              src={tileGallery02}
              alt="Gallery 2"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="mt-10 lg:mt-28 px-0 flex flex-col text-center lg:text-left w-full lg:w-1/2">
          <h4 className="text-gray-900 font-semibold text-sm sm:text-base tracking-widest">
            CORE FEATURES
          </h4>
          <h1 className="text-blue-950 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto sm:mx-0 text-center sm:text-left break-words">
            Get More Good Experience.
          </h1>

          <h2 className="text-gray-600 mt-6 sm:mt-10 font-medium text-lg sm:text-xl lg:text-3xl">
            Our knowledge of computers will help us
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-6 sm:mt-10 font-medium leading-relaxed">
            Does any industry face a more complex audience journey and marketing
            sales process than B2B technology? Consider the number of people who
            influence a sale, the length of the decision-making cycle, the
            competing interests of the people who purchase, implement, manage,
            and use the technology. It's a lot meaningful content here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6 sm:mt-10 justify-center lg:justify-start">
            <button className="bg-[#008080] rounded text-white py-3 px-6 hover:bg-gray-900 transition-colors w-full sm:w-auto">
              Learn More
            </button>

            <button
              onClick={() => setShowVideo(true)}
              className="bg-gray-500 rounded text-white py-3 px-6 hover:bg-gray-900 flex gap-2 items-center justify-center transition-colors w-full sm:w-auto"
            >
              <Video /> Intro Video
            </button>

            {/* Popup Video (No dark overlay) */}
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
      </section>

      {/* Our Latest Services */}
      <section className="flex flex-col mt-12 sm:mt-20 justify-center items-center px-4 py-4">
        <div className="flex flex-col mb-12 sm:mb-20 text-center">
          <h3 className="font-semibold tracking-widest text-[#008080] text-base sm:text-lg">
            OUR LATEST SERVICES
          </h3>
          <h1 className="font-bold text-blue-950 text-4xl sm:text-5xl lg:text-7xl">
            We Offer Better Solution
          </h1>
          <h1 className="font-bold text-blue-950 text-4xl sm:text-5xl lg:text-7xl">
            For Your IT Business
          </h1>
        </div>
        <div className="flex flex-col">
          {serviceCarousel.map((item, idx) =>
            idx % 2 == 0 ? (
              <div
                key={idx}
                className="flex gap-10 justify-center items-center"
              >
                {/* Image */}
                <img src={item.image} alt={item.title} className="h-[400px]" />

                {/* Bold Vertical Line */}
                <div className="w-[4px] h-[300px] bg-black"></div>

                {/* Text Content */}
                <div className="px-32 flex flex-col">
                  <FaLaptop className="mb-10 text-4xl" />
                  <h1 className="text-4xl font-bold text-black">
                    {item.title}
                  </h1>
                  <p className="mt-8 text-gray-400">{item.para}</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-10 justify-center items-center">
                <div className="px-32 flex flex-col">
                  <FaLaptop className="mb-10 text-4xl" />
                  <h1 className="text-4xl font-bold">{item.title}</h1>
                  <p className="mt-8 text-gray-400">
                    {item.para}
                  </p>
                </div>
                {/* Bold Vertical Line */}
                <div className="w-[4px] h-[300px] bg-black"></div>
                <img
                  src={item.image}
                  alt = {item.title}
                  className="h-[400px]"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Latest Case Study */}
      <section className="flex flex-col bg-gray-900 mt-12 sm:mt-20">
        <div className="px-4 sm:px-12 py-8 sm:py-12 mt-6 sm:mt-10 w-full max-w-screen-xl mx-auto">
          <h3 className="text-[#008080] font-medium text-lg sm:text-xl mb-4 text-center lg:text-left">
            Latest Case Studies
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
            {/* Left Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-center lg:text-left">
              Reads Our Recent <br /> Case Studies
            </h1>

            {/* Right Arrow Buttons */}
            <div className="flex gap-4 shrink-0">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-[#008080] text-white flex px-4 py-2 rounded items-center justify-center hover:bg-blue-900 transition-colors"
                disabled={startIndex === 0}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white text-blue-900 flex px-4 py-2 bg-blue-600 rounded items-center justify-center hover:bg-[#008080] hover:text-white transition-colors"
                disabled={startIndex + 3 >= portfolioImages.length}
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col transition-transform duration-500 ease-in-out sm:flex-row px-4 sm:px-12 py-8 sm:py-12 mt-6 sm:mt-10 w-full max-w-screen-xl mx-auto gap-6 sm:gap-7"
          style={{ transform: `translateX` }}
        >
          {portfolioImages.slice(startIndex, startIndex + 3).map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg flex-1"
            >
              <img
                src={src.image}
                alt={src.title}
                className="w-full object-cover"
              />

              {/* Overlay Content */}
              <div
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4"
              >
                <h6 className="text-white text-base sm:text-lg font-semibold">
                  {src.title}
                </h6>
                <h4 className="text-white text-lg sm:text-2xl font-bold">
                  {src.des}
                </h4>

                {/* Arrow Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-[#008080] hover:text-white transition">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="bg-gray-800 px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-8 sm:gap-12">
          {infoData.map((item, idx) => (
            <div
              key={idx}
              className={`animate-on-scroll opacity-0 translate-y-20 transition-all duration-700 ease-out
        flex flex-col items-center justify-center w-full sm:w-64 p-6 sm:p-8 gap-4 
        rounded-2xl border border-gray-600 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 
        bg-gradient-to-br from-gray-900 to-gray-800 transition-transform duration-300 box-border group`}
            >
              {/* Icon Container */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${item.color} flex items-center justify-center shadow-inner group-hover:rotate-6 transition-transform duration-300`}
              >
                <FaCommentDots className="text-white w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Number Text */}
              <h1 className="text-white text-3xl sm:text-4xl font-extrabold tracking-wide drop-shadow-sm">
                {item.number}
              </h1>

              {/* Label Text */}
              <h6 className="text-sm sm:text-base text-gray-300 font-medium text-center px-2">
                {item.label}
              </h6>
            </div>
          ))}
        </div>
      </section>

      {/* Client testimonial */}
      <section className="bg-[#F8F6F3]">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center py-12 sm:py-16 px-4">
            <h4 className="text-[#008080] font-semibold text-xl sm:text-2xl text-center">
              Client Testimonials
            </h4>
            <h1 className="text-blue-950 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center">
              What our clients say
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start mb-12 sm:mb-16 px-4 sm:px-6 max-w-7xl mx-auto">
            {clients.map((items, idx) => (
              <div key={idx} className="w-full">
                <div
                  className={`bg-white w-full h-auto p-8 border-t-4 border-red-700 text-sm sm:text-base`}
                >
                  {items.text}
                </div>
                <div className="flex gap-3 mt-5">
                  <img
                    src={items.img}
                    alt={items.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col gap-1 sm:gap-3">
                    <h4 className="font-bold text-sm sm:text-base">
                      {items.name}
                    </h4>
                    <h6 className="text-gray-500 text-xs sm:text-sm">
                      {items.post}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-gray-900">
        <div className="flex flex-col lg:flex-row px-4 sm:px-12 py-12 w-full max-w-screen-xl mx-auto gap-6 lg:gap-7 items-center">
          <div className="flex flex-col justify-start lg:mr-64 mt-8 lg:mt-16 mb-8 lg:mb-16 text-center lg:text-left flex-1">
            <h4 className="font-semibold text-xs sm:text-sm text-[#008080]">
              CALL TO ACTION
            </h4>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight">
              Let's Discuss With Us
            </h1>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl text-white leading-tight">
              Your Estimate.
            </h1>
          </div>
          <div className="flex-shrink-0">
            <Link>
              <button className="flex items-center p-4 gap-3 bg-[#008080] text-white rounded hover:bg-gray-100 transition-colors hover:text-[#008080]">
                <FaComment />
                <span className="font-medium">Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="flex flex-col">
        <div className="flex flex-col justify-center items-center pt-12 sm:pt-20 px-4">
          <h4 className="text-[#008080] font-semibold text-xl sm:text-2xl text-center">
            Latest News
          </h4>
          <h1 className="text-blue-950 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center">
            Read Our Latest
          </h1>
          <h1 className="text-blue-950 font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center">
            News & Blog
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 sm:pt-16 mb-12 sm:mb-16 px-4 sm:px-6 max-w-7xl mx-auto">
          {newsSection.map((key, idx) => (
            <div
              key={idx}
              className="bg-[#F8F6F3] flex flex-col justify-start border-2 border-gray-200 rounded-lg overflow-hidden transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll"
            >
              <img
                src={key.img}
                alt={`news-${idx}`}
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="p-4 flex flex-col gap-4">
                <h6 className="text-blue-700 font-bold text-sm">{key.date}</h6>
                <h4 className="font-extrabold text-lg sm:text-xl lg:text-2xl leading-tight">
                  {key.des}
                </h4>
                <div className="flex gap-2 items-center">
                  <Link className="flex items-center text-gray-600 gap-2 text-sm sm:text-base">
                    Read More
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Home;
