import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";

import Navbar from "../layouts/Navbar";
import PageHeader from "../components/PageHeader";
import NewsLetter from "../components/NewsLetter";
import Footer from "../layouts/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Seo from "../components/Seo";
import instance from "../lib/instance";

const BlogGrid = () => {
  const navigate = useNavigate();
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogItems, setBlogItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await instance.get("/blogs/recent");
        setBlogItems(response.data.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const totalPages = Math.ceil(blogItems.length / blogsPerPage);
  
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * blogsPerPage;
    return blogItems.slice(start, start + blogsPerPage);
  }, [blogItems, currentPage]);

  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(newPage);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <main className="bg-[#FDFDFD] min-h-screen font-poppins selection:bg-[#008080] selection:text-white">
      <Seo 
        title="Insights & Articles | Collabority Blog" 
        description="Stay updated with the latest trends in IT solutions, digital marketing, and tech staffing."
        path="/blog"
        keywords="tech blog, IT industry insights, digital transformation, Collabority"
      />

      <Navbar />

      <header>
        <PageHeader
          title="Insights & Articles"
          breadcrumb={
            <nav className="flex gap-2 text-xs md:text-sm font-medium opacity-80" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#008080] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-400">Blogs</span>
            </nav>
          }
        />
      </header>

      <section className="px-5 py-12 md:py-20 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-96 bg-gray-100 animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : paginatedBlogs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-32 text-gray-400"
            >
              No articles found. Check back soon!
            </motion.div>
          ) : (
            <motion.div 
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {paginatedBlogs.map((blog, index) => (
                <motion.article
                  key={blog._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => navigate(`/blog-details/${blog._id}`)}
                  className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#008080]/10 transition-all duration-500 cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-[#008080] text-xs px-4 py-1.5 rounded-full font-bold shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-gray-400 text-xs mb-4 font-semibold uppercase tracking-widest">
                      <Calendar className="w-4 h-4 text-[#008080]" />
                      <time dateTime={blog.createdAt}>{formatDate(blog.createdAt)}</time>
                      <span className="text-gray-200">|</span>
                      <Clock className="w-4 h-4 text-[#008080]" />
                      5 Min Read
                    </div>
                    
                    <h3 className="text-[#002248] text-xl md:text-2xl font-bold leading-tight line-clamp-2 group-hover:text-[#008080] transition-colors mb-4">
                      {blog.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center text-[#008080] text-sm font-black uppercase tracking-widest">
                      Read Article 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {totalPages > 1 && (
          <nav className="flex justify-center items-center gap-3 mt-20">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-[#008080] hover:text-white disabled:opacity-20 transition-all shadow-sm"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-12 h-12 rounded-full font-black text-sm transition-all ${
                    currentPage === i + 1
                      ? "bg-[#008080] text-white shadow-xl shadow-[#008080]/20 scale-110"
                      : "bg-white text-gray-400 hover:text-[#008080] border border-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-[#008080] hover:text-white disabled:opacity-20 transition-all shadow-sm"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </nav>
        )}
      </section>

      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default BlogGrid;