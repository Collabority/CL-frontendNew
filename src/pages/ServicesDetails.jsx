import React, { useState } from "react";
import Navbar from "../layouts/Navbar";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { FaPlay } from "react-icons/fa";
import { newsfeed, pricingData } from "../constants/Data";

const ServicesDetails = () => {
  const [period, setPeriod] = useState("Monthly");

  const handleClick = (value) => {
    setPeriod(value);
  };

  const [showVideo, setShowVideo] = useState(false);
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-4 bg-[#F8F6F3] p-42">
        <h1 className="font-extrabold text-3xl sm:text-6xl lg:text-6xl text-gray-900">
          Services Details
        </h1>
        <div className="font-semibold text-[#008080] text-xl sm:text-xl">
          <div className="flex gap-2">
            <span>
              <Link to="/">Home</Link>
            </span>
            <span>|</span>
            <span>
              <Link to="/about">About</Link>
            </span>
          </div>
        </div>
      </section>

      {/* Details Section */}

      <section className="py-12 sm:py-20 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-5 lg:gap-5">
        {/* Left Images */}
        <div className="flex flex-col ml-32 sm:flex-row lg:flex-col sm:gap-8 w-full lg:w-1/2">
          <div className="mt-0 lg:mt-10 flex-shrink-0 relative z-10">
            <img
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0  object-cover"
              src="src/assets/services-op-1.webp"
              alt="services-op-1"
            />
          </div>
          <div className="px-0 sm:px-6 lg:px-24 flex-shrink-0 -mt-16 sm:-mt-20 lg:-mt-42 z-20">
            <img
              className="border-10 border-white w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 object-cover"
              src="src/assets/services-op-2.webp"
              alt="services-op-2"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="mt-10 lg:mt-40 flex flex-col lg:text-left lg:w-1/2">
          <div className="flex gap-10 text-[#008080] font-medium">
            <h4>Search Enging Optimization</h4>
            <h4>______</h4>
          </div>
          <h2 className="text-gray-900 text-6xl font-bold mt-4 leading-18">
            Nothing to do <br /> anything.
          </h2>
          <p className="mt-16 text-xs opacity-[50%] leading-5">
            Does any industry face a more complex audience journey and marketing{" "}
            <br /> sales process than B2B technology? Consider the number of
            people who <br /> influence a sale, the length of the
            decision-making cycle, the competing <br /> interests of the people
            who purchase, implement, manage, and use the <br /> technology. It’s
            a lot meaningful content here.
          </p>
          <button className="bg-[#008080] p-4 w-1/4 mt-10 rounded text-white font-medium hover:bg-gray-900 hover:text-white">
            <Link to="/contact">Make A Call</Link>
          </button>
        </div>
      </section>

      {/* intro section */}
      <section className="bg-gray-900 h-screen py-12 sm:py-20 px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row gap-5 lg:gap-5">
        <div className="flex flex-col ml-32">
          <h4 className="text-gray-500 font-semibold tracking-widest text-sm">
            INTRO VIDEO
          </h4>
          <h1 className="text-white text-5xl font-extrabold leading-14 mt-5">
            How we growth our <br /> business.
          </h1>
          <h5 className="text-gray-500 text-lg font-base leading-7 mt-6">
            The introduction of cloud and mobile technologies <br /> into
            enterprise software.
          </h5>
          <p className="text-gray-300 text-xs font-base leading-7 mt-6">
            whether you are building an enterprise web portal or a
            state-of-the-art website, <br /> you always need the right modern
            tools. Well-built and maintained PHP <br /> frameworks provide those
            tools in abundance, allowing maintained PHP <br /> frameworks
            provide those tools in abundance, allowing developers to save <br />{" "}
            time, re-use code, and streamline the back end. As software
            development <br /> tools continuously.
          </p>
          <button className="bg-[#008080] w-1/3 rounded mt-8 text-white py-3 px-6 hover:bg-white hover:text-[#008080] transition-colors">
            <Link to="/about">Learn More</Link>
          </button>
        </div>

        <div>
          <div className="relative w-full ml-32 max-w-4xl">
            {/* Image */}
            <img
              src="https://html.webtend.net/omnivus/assets/img/intro-thumb.jpg"
              className="w-full object-cover h-auto"
              alt="Intro"
            />

            {/* Centered Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button onClick={() => setShowVideo(true)}
              className="bg-[#008080] rounded-full p-5 text-white text-2xl transition bg-[#008080] hover:bg-gray-900 flex gap-2 items-center justify-center transition-colors w-full sm:w-auto">
                <FaPlay />
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
                      src = "https://youtube.com/embed/9xwazD5SyVg?"
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

      {/* Price section */}
      <section className="bg-[#F8F6F3] mt-16">
        <div className="flex flex-col lg:flex-row justify-between items-center px-6 py-10 gap-6 max-w-7xl mx-auto">
          <div>
            <p className="font-semibold text-xl text-gray-700">Plans _____</p>
            <h1 className="font-extrabold text-blue-950 text-4xl sm:text-5xl">
              Here are the plans
            </h1>
          </div>
          <div className="flex gap-4 bg-white p-2 rounded-md flex-wrap">
            {["Monthly", "Yearly"].map((type) => (
              <button
                key={type}
                onClick={() => handleClick(type)}
                className={`text-md sm:text-md px-4 py-2 rounded transition-all duration-300 ${
                  period === type
                    ? "bg-[#008080] text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 px-4 pb-12 max-w-7xl mx-auto">
          {pricingData[period].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 text-center w-full sm:w-[48%] md:w-[30%] lg:w-[22%] transition-all duration-300 group hover:bg-[#008080] hover:text-white"
            >
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-white">
                {plan.title}
              </h2>
              <h3 className="text-5xl font-bold my-4">
                <span className="text-lg align-top">$</span>
                {plan.price}
              </h3>
              <p className="text-sm font-bold text-[#008080] group-hover:text-[#F8F6F3]">
                {period === "Monthly" ? "Per Month" : "Per Year"}
              </p>
              <p className="text-gray-900 mb-3 group-hover:text-white">_____</p>
              <p className="text-gray-900 mb-6 group-hover:text-white">
                {plan.description}
              </p>
              <button className="w-full px-6 py-2 bg-[#008080] text-white font-semibold rounded transition group-hover:bg-white group-hover:text-[#008080]">
                Purchase Now
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* News Feed */}
      <section className="bg-gray-800 py-16">
        <div className="text-center px-4">
          <h1 className="text-3xl text-[#008080] sm:text-5xl font-extrabold mb-4">
            News Feed
          </h1>
          <p className="font-medium text-white text-sm sm:text-base">
            Does any industry face a more complex audience journey and
          </p>
          <p className="font-medium text-white text-sm sm:text-base">
            marketing sales process than B2B technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-12 px-4">
          {newsfeed.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center text-white w-full sm:w-80 text-center overflow-hidden rounded shadow-lg"
            >
              {/* Image with hover effect */}
              <img
                src={item.image}
                alt={item.post}
                className="w-full h-100 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:-rotate-1"
              />

              {/* Hover overlay with reduced opacity */}
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-1/2 bg-gray-500 bg-opacity-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center px-4">
                <p className="text-sm sm:text-base text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description ||
                    "Discover more insights and updates on the latest technology trends."}
                </p>
                <button className="mt-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-500 text-white text-2xl">
                  →
                </button>
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

export default ServicesDetails;
