import React, { useState } from "react";
import Herosection from "../components/Herosection";
import ServiceCard from "../components/ServiceCard";
import NewsFeedCard from "../components/NewsFeedCard";
import { Eye, Film, PenTool, Globe, Laptop2, Rocket } from "lucide-react";

const services = [
  {
    title: "Custom IT Solutions",
    icon: <Laptop2 className="w-8 h-8" />,
    image: "/s1.jpeg",
    description:
      "Secure, scalable, and future-ready IT infrastructures — from cloud deployments to system integrations — customized for your business needs.",
  },
  {
    title: "Digital Marketing Strategy",
    icon: <Globe className="w-8 h-8" />,
    image: "/s2.jpeg",
    description:
      "Performance-driven campaigns built on research, creative targeting, and analytics — designed to maximize your ROI.",
  },
  {
    title: "UI/UX & Visual Design",
    icon: <Eye className="w-8 h-8" />,
    image: "/s3.jpeg",
    description:
      "We craft human-centered designs that are beautiful, functional, and conversion-optimized across web and mobile platforms.",
  },
  {
    title: "Video Production & Editing",
    icon: <Film className="w-8 h-8" />,
    image: "/s4.jpeg",
    description:
      "Bring your brand to life with high-quality videos — from concept to editing — perfect for digital campaigns, product demos, or storytelling.",
  },
  {
    title: "Brand Identity Development",
    icon: <PenTool className="w-8 h-8" />,
    image: "/s5.jpeg",
    description:
      "Define your brand’s voice, tone, and visual identity to create memorable, consistent experiences across every channel.",
  },
  {
    title: "Tech-Driven Campaigns",
    icon: <Rocket className="w-8 h-8" />,
    image: "/s6.jpeg",
    description:
      "We merge technology and creativity to launch automated, multi-channel campaigns that drive measurable business growth.",
  },
];

const newsFeeds = [
  {
    title: "5 Trends Shaping the Future of Enterprise IT in 2025",
    description:
      "From AI-driven automation to zero-trust security models, explore what's defining the next wave of enterprise IT solutions.",
    image: "/h1.jpeg",
    date: "June 15, 2025",
  },
  {
    title: "Why SMBs Are Moving to Managed IT Services",
    description:
      "More small and mid-size businesses are outsourcing their IT to cut costs and boost efficiency. Here's what to consider before making the move.",
    image: "/h2.jpeg",
    date: "June 12, 2025",
  },
  {
    title: "Building Scalable Cloud Infrastructure: Our DevOps Playbook",
    description:
      "Learn how we helped a logistics company scale its operations 3x using AWS, Kubernetes, and an automated CI/CD pipeline.",
    image: "/h3.jpeg",
    date: "June 5, 2025",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <main className="bg-white min-h-screen flex flex-col font-poppins">
      <Herosection title="Services" breadcrumb="Home | Services" />

      {/* Services Section */}
      <section className="py-16 lg:px-40 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center -m-4">
            {services.map((service, i) => (
              <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-6">
                <ServiceCard service={service} />
              </div>
            ))}
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



      {/* News Feed Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center max-w-xl mx-auto mb-12 mt-8">
          <h2 className="text-white text-4xl font-bold mb-4">News Feeds</h2>
          <p className="text-gray-400 text-base mt-4">
            Stay up to date with the latest trends, insights, and innovations shaping IT, digital marketing, and creative technology.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsFeeds.map((news, index) => (
            <NewsFeedCard key={index} news={news} />
          ))}
        </div>
      </section>
    </main>
  );
}
