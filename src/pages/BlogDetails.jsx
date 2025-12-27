import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"; 
import BlogSidebar from "../components/BlogSidebar";
import BlogPost from "../components/BlogPost"; 
import PageHeader from "../components/PageHeader";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import NewsLetter from "../components/NewsLetter";
import ScrollToTop from "../components/ScrollToTop";
import instance from "../lib/instance"; 

const BlogDetails = () => {
  const { id } = useParams(); // ✅ This retrieves the ID from URL
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (!id) return; // Prevent fetching if ID is missing
      
      try {
        setLoading(true);
        // ✅ Matches backend: router.get("/blog/:id", ...)
        const response = await instance.get(`/blogs/blog/${id}`);
        setBlog(response.data.data);
      } catch (err) {
        console.error("Error fetching blog details:", err);
        setError("Failed to load blog. It might have been deleted.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#008080]"></div>
    </div>
  );

  if (error || !blog) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold text-gray-700">Blog Not Found</h2>
      <p className="text-gray-500">{error || "The requested blog post could not be found."}</p>
      <Link to="/blog">
        <button className="px-6 py-2 bg-[#008080] text-white rounded hover:bg-gray-900 transition">
            Back to Blogs
        </button>
      </Link>
    </div>
  );

  return (
    <div className="flex-grow overflow-x-hidden">
      <Navbar />

      <PageHeader
        title={blog.title} 
        breadcrumb={
          <div className="flex gap-2">
            <Link to="/">Home</Link>
            <p>|</p>
            <Link to="/blog">Blog</Link>
            <p>|</p>
            <span className="text-gray-300 truncate max-w-[150px]">{blog.title}</span>
          </div>
        }
      />

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl">
        <div className="lg:col-span-8">
          <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md">
            {/* ✅ Pass dynamic blog data */}
            <BlogPost blog={blog} />

            <h2 className="border-t pt-6 border-gray-200 text-2xl font-bold mb-6 text-gray-900">
              Related Posts
            </h2>
            {/* You can make this dynamic later based on category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               <div className="p-4 border rounded text-center text-gray-500">
                  Related posts coming soon...
               </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4">
           <BlogSidebar />
        </div>
      </div>

      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogDetails;