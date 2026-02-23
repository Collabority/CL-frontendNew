import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; 
import { FaTwitter, FaInstagram, FaRegHeart, FaRegComment, FaRetweet } from 'react-icons/fa6';

import BlogSidebar from "../components/BlogSidebar";
import BlogPost from "../components/BlogPost"; 
import PageHeader from "../components/PageHeader";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import NewsLetter from "../components/NewsLetter";
import ScrollToTop from "../components/ScrollToTop";
import Seo from "../components/Seo";
import instance from "../lib/instance"; 

const INSTAGRAM_FEED = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
];

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await instance.get(`/blogs/blog/${id}`);
        setBlog(response.data.data);
      } catch (err) { 
        console.error("Fetch Error:", err); 
      } finally { 
        setLoading(false); 
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center font-black text-xl text-[#008080] animate-pulse">
        LOADING INSIGHTS...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="h-screen flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold">Article Not Found</h2>
        <Link to="/blog" className="text-[#008080] font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <main className="bg-[#FDFDFD] selection:bg-[#008080] selection:text-white">
      <Seo 
        title={blog.title} 
        description={blog.summary || blog.description?.substring(0, 160)}
        path={`/blog/${id}`}
        keywords={`${blog.category}, Collabority, ${blog.tags?.join(', ')}`}
      />

      <Navbar />
      
      <header>
        <PageHeader 
          title={blog.title} 
          breadcrumb={<Link to="/blog" className="hover:text-[#008080] transition-colors">Blog</Link>} 
        />
      </header>

      <div className="container mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl">
        
        <section className="lg:col-span-8">
          <article className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 mb-10">
            <BlogPost blog={blog} />

            <footer className="mt-20 pt-12 border-t border-gray-100 space-y-16">
              <div>
                <h3 className="text-xl font-black mb-8 flex items-center text-[#002248] uppercase tracking-tighter">
                  <FaInstagram className="mr-3 text-[#E4405F] text-2xl" /> Latest from Instagram
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {INSTAGRAM_FEED.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-xl">
                      <img 
                        src={img} 
                        className="aspect-square object-cover hover:scale-110 transition-transform duration-500 cursor-pointer" 
                        alt="Collabority social feed" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black mb-8 flex items-center text-[#002248] uppercase tracking-tighter">
                  <FaTwitter className="mr-3 text-[#1DA1F2] text-2xl" /> Trending Conversations
                </h3>
                <div className="space-y-4">
                  {[1, 2].map(i => (
                    <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-[#008080]/20 transition-all group">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                        "Exploring the future of IT with Collabority. Innovation isn't just a goal; it's our daily process." 
                        <span className="block mt-2 text-[#2563eb] font-bold">#Innovation #TechTrends</span>
                      </p>
                      <div className="flex gap-8 text-gray-400">
                        <button className="hover:text-red-500 flex items-center gap-2 transition-colors"><FaRegHeart /> <span className="text-[10px] font-bold">24</span></button>
                        <button className="hover:text-green-500 flex items-center gap-2 transition-colors"><FaRetweet /> <span className="text-[10px] font-bold">12</span></button>
                        <button className="hover:text-blue-500 flex items-center gap-2 transition-colors"><FaRegComment /> <span className="text-[10px] font-bold">8</span></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </footer>
          </article>
        </section>

        <aside className="hidden lg:block lg:col-span-4 sticky top-24 h-fit">
          <BlogSidebar />
        </aside>

      </div>

      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default BlogDetails;