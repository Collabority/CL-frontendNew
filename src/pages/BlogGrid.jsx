import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import { ArrowLeft, ArrowRight, Calendar, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../layouts/Footer";
import ScrollToTop from "../components/ScrollToTop";

// Base blog entries
const baseBlogs = [
  {
    title: "Empowering Businesses with Seamless IT Solutions",
    image: "/blogimages/b1.png",
    category: "IT SOLUTIONS",
    date: "June 12, 2025",
  },
  {
    title: "Result-Driven Marketing Strategies for Brand Growth",
    image: "/blogimages/b2.png",
    category: "MARKETING",
    date: "June 10, 2025",
  },
  {
    title: "Creative Design & Professional Video Production",
    image: "/blogimages/b3.png",
    category: "DESIGN & VIDEO",
    date: "June 8, 2025",
  },
  {
    title: "Result-Driven Marketing Strategies for Brand Growth",
    image: "/blogimages/b2.png",
    category: "MARKETING",
    date: "June 10, 2025",
  },
];

// Repeat to form 12 blogs
const allBlogs = Array.from({ length: 12 }, (_, i) => {
  const blog = baseBlogs[i % baseBlogs.length];
  return {
    id: i + 1,
    ...blog,
    image: `/blogimages/b${(i % baseBlogs.length) + 1}.png`,
  };
});

const BlogGrid = () => {
  const blogsPerPage = 3;
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const paginatedBlogs = allBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div>
      <Navbar />

      {/* Hero-Section */}
      <PageHeader
        title="Blogs"
        breadcrumb={
          <div className="flex gap-2">
            <Link to="/">Home</Link>
            <p>|</p>
            <Link to="/blog-details">BlogDetails</Link>
          </div>
        }
      />

      <div className="p-4 sm:p-6 md:p-10 max-w-7xl mx-auto">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {paginatedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="relative mt-20 w-full h-[300px] sm:h-[360px] md:h-[420px] lg:h-[400px] overflow-hidden shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => window.location.href = `/blog-details`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70 p-4 sm:p-6 flex flex-col justify-between">
                <span className="bg-secondary text-black text-xs px-2 py-1 rounded w-fit font-semibold">
                  {blog.category}
                </span>
                <div className="mb-4">
                  <h3 className="text-white text-sm sm:text-base md:text-base lg:text-lg font-bold leading-tight mb-2">
                    {blog.title}
                  </h3>
                  <div className="flex justify-between items-center text-white text-xs sm:text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blog.date}
                    </span>
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 py-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-secondary bg-primary hover:bg-[#008080] hover:text-white disabled:opacity-60"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-bold text-sm flex items-center justify-center ${
              currentPage === i + 1
                ? "bg-secondary text-[#008080]"
                : "text-secondary bg-primary hover:bg-secondary hover:text-[#008080]"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-secondary bg-primary hover:bg-[#008080] hover:text-white disabled:opacity-60"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* NewsLetter Section */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogGrid;