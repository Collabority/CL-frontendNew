import React, { useEffect, useState } from "react";
import banner from "../assets/banner.webp";
import banner_img from "../assets/banner-img.webp";
import { ArrowLeft, ArrowRight, Video } from "../components/Icons";
import { Link } from "react-router-dom";
import {
  bgColorMap,
  colorMap,
  hoverTextColors,
  latestServices,
  portfolioImages,
  services,
} from "../constants/Data";
import dottedImage from "../assets/dotted_image.webp";
import {
  useAnimateElementById,
  useAnimateElementsByClass,
} from "../utils/useScrollAnimation";
import tileGallery01 from "../assets/tileGallery01.webp";
import tileGallery02 from "../assets/tileGallery02.webp";


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


  return (
    <main className="min-h-screen bg-white font-sans">
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
                <span className="text-2xl font-semibold text-blue-950 tracking-widest">
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
                  <button className="group inline-flex items-center gap-2 mt-4 justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-800 hover:bg-blue-950 text-white text-sm sm:text-base md:text-base rounded font-medium w-full sm:w-auto max-w-xs sm:max-w-none transition-colors duration-300 ease-in-out">
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
          <h6 className="text-base sm:text-base font-semibold text-blue-700 tracking-wider">
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
                className="relative overflow-hidden flex flex-col items-center text-center p-6 rounded-lg shadow-lg cursor-pointer group bg-white text-black transition-all duration-500 ease-in-out hover:bg-blue-600 hover:text-white hover:shadow-xl hover:scale-105 transform"
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
      <section className="bg-blue-50 py-12 sm:py-20 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-5 lg:gap-5">
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
          <h4 className="text-blue-800 font-semibold text-sm sm:text-base tracking-widest">
            CORE FEATURES
          </h4>
          <h1 className="text-blue-950 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto sm:mx-0 text-center sm:text-left break-words">
            Get More Good Experience.
          </h1>

          <h2 className="text-blue-400 mt-6 sm:mt-10 font-medium text-lg sm:text-xl lg:text-3xl">
            Our knowledge of computers will help us
          </h2>
          <p className="text-sm sm:text-base text-sky-500 mt-6 sm:mt-10 font-medium leading-relaxed">
            Does any industry face a more complex audience journey and marketing
            sales process than B2B technology? Consider the number of people who
            influence a sale, the length of the decision-making cycle, the
            competing interests of the people who purchase, implement, manage,
            and use the technology. It's a lot meaningful content here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-6 sm:mt-10 justify-center lg:justify-start">
            <button className="bg-blue-700 rounded text-white font-serif py-3 px-6 hover:bg-blue-950 transition-colors w-full sm:w-auto">
              Learn More
            </button>
            <button className="bg-gray-400 rounded text-white font-serif py-3 px-6 hover:bg-blue-950 flex gap-2 items-center justify-center transition-colors w-full sm:w-auto">
              <Video /> Intro Video
            </button>
          </div>
        </div>
      </section>

      {/* Our Latest Services */}
      <section className="flex flex-col mt-12 sm:mt-20 justify-center items-center px-4 py-4">
        <div className="flex flex-col mb-12 sm:mb-20 text-center">
          <h3 className="font-semibold tracking-widest text-blue-700 text-base sm:text-lg">
            OUR LATEST SERVICES
          </h3>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl">
            We Offer Better Solution
          </h1>
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl">
            For Your IT Business
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 max-w-7xl">
          {latestServices.map((key, index) => (
            <div
              key={index}
              className="flex flex-col p-10 cursor-pointer text-black bg-blue-50 transition-all duration-1000 opacity-0 translate-y-20 animate-on-scroll"
            >
              <div
                className={`${
                  colorMap[key.color]
                } text-3xl sm:text-5xl mb-2 group-hover:text-${
                  colorMap[key.color]
                }-500`}
              >
                {key.icon}
              </div>

              <h2 className="font-semibold text-xl sm:text-2xl mb-2">
                {key.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantiutotam
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Case Study */}
      <section className="flex flex-col bg-blue-600 mt-12 sm:mt-20">
        <div className="px-4 sm:px-12 py-8 sm:py-12 mt-6 sm:mt-10 w-full max-w-screen-xl mx-auto">
          <h3 className="text-white font-medium text-lg sm:text-xl mb-4 text-center lg:text-left">
            Latest Case Studies
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
            {/* Left Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-center lg:text-left">
              Reads Our Recent <br /> Case Studies
            </h1>

            {/* Right Arrow Buttons */}
            <div className="flex gap-4 shrink-0">
              <button className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full bg-white text-blue-900 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row px-4 sm:px-12 py-8 sm:py-12 mt-6 sm:mt-10 w-full max-w-screen-xl mx-auto gap-6 sm:gap-7">
          {portfolioImages.map((src, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-lg flex-1"
            >
              <img
                src={src}
                alt={`Portfolio ${idx}`}
                className="w-full object-cover"
              />

              {/* Overlay Content */}
              <div
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                      opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4"
              >
                <h6 className="text-white text-base sm:text-lg font-semibold">
                  IT / Solutions
                </h6>
                <h4 className="text-white text-lg sm:text-2xl font-bold">
                  How To Improve <br /> IT Knowledge
                </h4>

                {/* Arrow Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-blue-700 flex items-center justify-center shadow-md hover:bg-blue-700 hover:text-white transition">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default Home;
