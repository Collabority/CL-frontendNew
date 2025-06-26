import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import BlogPost from "../components/BlogPost";
import { blogsData } from "../constants/blogs";
import PageHeader from "../components/PageHeader";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ScrollToTop from "../components/ScrolltoTop";
import NewsLetter from "../components/NewsLetter";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const navigate = useNavigate();
  const handleRelatedClick = (key) => {
    navigate(`/blog-details/${key}`);
  };

  return (
    <div className="flex-grow">
      <Navbar />
      <PageHeader
        title="News Details"
        breadcrumb={
          <>
            <div className="flex gap-2">
              <Link to="/">Home</Link>
              <p>|</p>
              <Link to="/blog">BlogPage</Link>
            </div>
          </>
        }
      />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl">
        {/* Main content area */}
        <div className="lg:col-span-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Render blogs from data */}
            <BlogPost blog={blogsData[0]} />

            {/* Related posts */}
            <h2 className="border-t pt-6 border-gray-200 text-2xl font-bold mb-6 text-gray-900">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Digital marketing */}
              <motion.div
                className="border-gray-500 overflow-hidden shadow-sm cursor-pointer"
                onClick={() => handleRelatedClick("digital-marketing")}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                  alt="Digital Marketing"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-900 text-sm mb-2 flex items-center">
                    Digital Marketing
                  </p>
                  <h3 className="font-bold text-lg leading-snug mb-2 text-gray-900">
                    Maximizing Reach with Data-Driven Digital Marketing
                  </h3>
                  <p className="text-gray-900 text-sm">
                    Learn how Collabority crafts digital marketing strategies
                    that boost engagement and drive measurable growth.
                  </p>
                </div>
              </motion.div>

              {/* Financial modelling */}
              <motion.div
                className="border-gray-500 overflow-hidden shadow-sm cursor-pointer"
                onClick={() => handleRelatedClick("financial-modelling")}
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                  alt="Financial Modelling"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-900 text-sm mb-2 flex items-center">
                    Financial Modelling
                  </p>
                  <h3 className="font-bold text-lg leading-snug mb-2 text-gray-900">
                    Empowering Decisions with Advanced Financial Modelling
                  </h3>
                  <p className="text-gray-900 text-sm">
                    Discover how our financial modelling expertise helps
                    businesses make informed, strategic decisions.
                  </p>
                </div>
              </motion.div>

              {/* Product management */}
              <motion.div
                className="border-gray-500 overflow-hidden shadow-sm cursor-pointer"
                onClick={() => handleRelatedClick("product-management")}
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                  alt="Product Management"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-900 text-sm mb-2 flex items-center">
                    Product Management
                  </p>
                  <h3 className="font-bold text-lg leading-snug mb-2 text-gray-900">
                    Driving Innovation through Strategic Product Management
                  </h3>
                  <p className="text-gray-900 text-sm">
                    Explore Collabority's approach to building and scaling
                    successful products in dynamic markets.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Sidebar area */}
        <div className="lg:col-span-4">
          <div className="scroll-animate slide-in-right max-w-xs">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogDetails;
