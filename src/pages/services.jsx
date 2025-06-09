import React, { useState } from "react";
import Herosection from "../components/Herosection";
import ServiceCard from "../components/ServiceCard";
import PricingToggle from "../components/PricingToggle";
import PricingCard from "../components/PricingCard";
import NewsFeedCard from "../components/NewsFeedCard";

import { pricingData } from "../constants/pricingData";
import { Eye, Gavel, MapPin, Globe, Laptop2, Umbrella } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    icon: <Eye className="w-8 h-8" />,
    image: "/s1.jpeg",
    description:
      "The functional goal of technical content is to help people use a product successfully. The business goal must tie the content.",
  },
  {
    title: "Consulting",
    icon: <Gavel className="w-8 h-8" />,
    image: "/s2.jpeg",
    description:
      "A product manager is responsible for product planning and execution throughout the product lifecycle.",
  },
  {
    title: "Location Strategy",
    icon: <MapPin className="w-8 h-8" />,
    image: "/s3.jpeg",
    description:
      "Planning is the process of thinking about the activities required to achieve a desired goal.",
  },
  {
    title: "Marketing Strategy",
    icon: <Globe className="w-8 h-8" />,
    image: "/s4.jpeg",
    description:
      "Understanding your audience and customers is essential for creating marketing strategies.",
  },
  {
    title: "App Development",
    icon: <Laptop2 className="w-8 h-8" />,
    image: "/s5.jpeg",
    description:
      "Developing apps requires coding, testing, and maintenance throughout the app lifecycle.",
  },
  {
    title: "Risk Management",
    icon: <Umbrella className="w-8 h-8" />,
    image: "/s6.jpeg",
    description:
      "Identifying and managing risks is crucial to ensure project success.",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <main className="bg-white min-h-screen flex flex-col font-poppins">
    
    <Herosection/>

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

      {/* Pricing Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="max-w-xl">
              <span className="text-gray-900 font-semibold text-sm">
                PLANS ______
              </span>
              <h2 className="text-4xl font-extrabold mt-2 mb-4 text-gray-900">
                Here are our plans
              </h2>
            </div>
            <PricingToggle activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {pricingData[activeTab].map((plan, i) => (
              <PricingCard key={i} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
      <div className="max-w-xl mx-auto text-center mb-8">
        <h1 className="text-gray-900 text-3xl md:text-4xl font-extrabold mt-6 mb-6">Our Product Based Services</h1>
      </div>

      <p className="text-center text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mb-6">
        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
      </p>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border border-black rounded-lg p-6 sm:p-8 mt-8 bg-primary text-white">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 max-w-6xl mx-auto text-base md:text-lg text-white">
            <p className="flex-1 text-gray-900">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore wisi enim ad minim veniam.
            </p>
            <p className="flex-1 text-gray-900">
              Mirum est notare quam littera gothica, quam nunc putamus parum, anteposuerit litterarum formas duis dolore te feugait nulla facilisi.
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-secondary font-semibold px-6 py-3 text-md rounded-lg text-white hover:bg-white hover:text-secondary hover:border hover:border-secondary transition">
              Request a free quote
            </button>
          </div>
        </div>
      </div>
    </section>


      {/* News Feed Section */}
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 text-center max-w-xl mx-auto mb-12 mt-8">
          <h2 className="text-white text-4xl font-bold mb-4">News Feeds</h2>
          <p className="text-gray-400 text-base mt-4">
            Does any industry face a more complex audience journey and marketing
            sales process than B2B technology.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <NewsFeedCard key={num} imageNum={num} />
          ))}
        </div>
      </section>

      
    </main>
  );
}
