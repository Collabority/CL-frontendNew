import React from "react";
import Navbar from "../layouts/Navbar";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";
import { portfolioPage, serviceCarousel } from "../constants/Data";
import { FaComment } from "react-icons/fa6";
import ScrollToTop from "../components/ScrolltoTop";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-white font-poppins">
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
          <h1 className="text-center font-semibold text-6xl text-gray-900">
            See Our Portfolios
          </h1>
        </div>
        <div className="flex flex-col m-10">
          {portfolioPage.map((item, idx) =>
            idx % 2 == 0 ? (
              <div
                key={idx}
                className="flex gap-10 justify-center items-center pl-10"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[400px] rounded shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"/>

                {/* Bold Vertical Line */}
                <div className="w-[4px] h-[300px] bg-black"></div>

                {/* Text Content */}
                <div className="px-32 flex flex-col">
                  <h1 className="text-4xl font-bold text-black">
                    {item.title}
                  </h1>
                  <p className="mt-8 text-gray-400">{item.text}</p>
                </div>
              </div>
            ) : (
              <div
                key={idx}
                className="flex gap-10 justify-center items-center pr-10"
              >
                <div className="px-32 flex flex-col">
                  <h1 className="text-4xl font-bold">{item.title}</h1>
                  <p className="mt-8 text-gray-400">{item.text}</p>
                </div>
                {/* Bold Vertical Line */}
                <div className="w-[4px] h-[300px] bg-black"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[400px] rounded shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"/>
              </div>
            )
          )}
        </div>
      </section>

      <section className="bg-[#F8F6F3]">
        <div className="flex flex-col lg:flex-row px-4 sm:px-12 py-12 w-full max-w-screen-xl mx-auto gap-6 lg:gap-7 items-center">
          <div className="flex flex-col justify-start lg:mr-64 mt-8 lg:mt-16 mb-8 lg:mb-16 text-center lg:text-left flex-1">
            <h4 className="font-semibold text-xs sm:text-sm text-[#008080]">
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
      </section>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Portfolio;
