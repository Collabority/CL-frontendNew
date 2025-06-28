import React from "react";
import Navbar from "../layouts/Navbar";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { portfolioPage } from "../constants/data";
import { FaComment } from "react-icons/fa6";
import {
  useAnimateElementById,
  useAnimateElementsByClass,
} from "../utils/useScrollAnimation";
import ScrollToTop from "../components/ScrollToTop";
import ContactSection from "../components/ContactSection";

const Portfolio = () => {
  useAnimateElementById("slideUpImage");
  useAnimateElementsByClass("animate-on-scroll");
  return (
    <main className="min-h-screen bg-white font-poppins overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <PageHeader
        title="Portfolio"
        breadcrumb={
          <>
            <div className="flex gap-2">
              <Link to="/">Home</Link>
              <p>|</p>
              <Link to="/services">Services</Link>
            </div>
          </>
        }
      />
      {/* Portfolio Section */}
      <section className="w-full min-h-screen flex flex-col pt-10 gap-10">
        <div>
          <h1 className="text-center font-semibold text-4xl sm:text-5xl md:text-6xl text-gray-900">
            See Our Portfolios
          </h1>
        </div>

        <div className="flex flex-col m-4 sm:m-6 md:mx-8 md:my-4 gap-12">
          {portfolioPage.map((item, idx) =>
            idx % 2 === 0 ? (
              <div
                key={idx}
                className="flex flex-col md:flex-row gap-8 md:gap-8 justify-center items-center md:px-6"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="lg:w-[40%] md:w-[50%] h-[200px] sm:h-[300px] md:h-[350px] rounded shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 opacity-0 translate-y-20 animate-on-scroll"
                />

                {/* Bold Vertical Line */}
                <div className="hidden md:block w-[3px] h-[220px] bg-black"></div>

                {/* Text Content */}
                <div className="px-4 sm:px-8 md:px-4 lg:px-32 flex flex-col text-center md:text-left md:w-[50%]">
                  <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
                    {item.title}
                  </h1>
                  <p className="mt-4 sm:mt-6 md:mt-6 text-gray-400 text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                className="flex flex-col md:flex-row-reverse gap-8 md:gap-8 justify-center items-center md:px-6"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="lg:w-[40%] md:w-[50%] h-[200px] sm:h-[300px] md:h-[350px] rounded shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 opacity-0 translate-y-20 animate-on-scroll"
                />

                {/* Bold Vertical Line */}
                <div className="hidden md:block w-[3px] h-[220px] bg-black"></div>

                {/* Text Content */}
                <div className="px-4 sm:px-8 md:px-4 lg:px-32 flex flex-col text-center md:text-left md:w-[50%]">
                  <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black">
                    {item.title}
                  </h1>
                  <p className="mt-4 sm:mt-6 md:mt-6 text-gray-400 text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <ContactSection />

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Portfolio;
