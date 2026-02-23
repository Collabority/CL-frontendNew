import React, { useEffect, useState, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

import {
  FaTwitter,
  FaRegLightbulb,
  FaCommentAlt,
  FaChevronDown,
  FaArrowLeft,
  FaQuoteLeft,
  FaBookmark
} from 'react-icons/fa';

import {
  FaCalendarDays,
  FaShareNodes
} from 'react-icons/fa6';

import { FaCalendarDays } from 'react-icons/fa6';

import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Seo from '../components/Seo';

const RelatedBlogDetails = () => {
  const { key } = useParams();
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const blog = relatedBlogsData.find(b => b.key === key);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [key]);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F6F3] p-8 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-[2rem] flex items-center justify-center text-3xl mb-8">?</div>
        <h2 className="text-4xl font-black text-[#002248] mb-6 tracking-tighter">Insight Lost in Space</h2>
        <button
          onClick={() => navigate('/blog')}
          className="bg-[#008080] text-white font-black px-10 py-4 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-[#002248] transition-all"
        >
          Return to Library
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-poppins selection:bg-[#008080] selection:text-white">
      <Seo
        title={`${blog.title} | Collabority Insights`}
        description={blog.content[0].text.substring(0, 160)}
        path={`/blog/${key}`}
      />

      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#008080] origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar />

      <header className="pt-40 md:pt-60 pb-20 px-6 bg-white border-b border-gray-50">
        <div className="max-w-4xl mx-auto text-center">

          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3 text-[#008080] text-[10px] font-black tracking-[0.3em] mb-12 uppercase"
          >
            <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            Back to Insights
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-black text-[#002248] leading-[1] mb-12 tracking-tighter"
          >
            {blog.title}
          </motion.h1>

          <div className="flex items-center justify-center gap-6 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
            <div className="flex items-center gap-2">
              <FaCalendarDays className="text-[#008080]" />
              June 24, 2026
            </div>

            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />

            <div className="flex items-center gap-2">
              <FaBookmark className="text-[#008080]" />
              Published by Collabority
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-32">
        <article className="max-w-3xl mx-auto">
          {blog.content.map((section, idx) => (
            <div key={idx} className="mb-20">

              {section.heading && (
                <h2 className="text-3xl md:text-5xl font-black text-[#002248] mb-10 tracking-tighter leading-tight">
                  {section.heading}
                </h2>
              )}

              {section.text && (
                <p className="text-xl md:text-2xl text-gray-500 mb-10 font-medium leading-[1.7] tracking-tight">
                  {section.text}
                </p>
              )}

              {section.list && (
                <div className="grid grid-cols-1 gap-6 mb-12">
                  {section.list.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 15 }}
                      className="group bg-[#F8F6F3] p-8 rounded-3xl flex gap-6 items-start transition-all"
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-[#008080] group-hover:text-white transition-colors">
                        <FaRegLightbulb className="text-xl" />
                      </div>
                      <p className="text-lg font-bold text-[#002248] leading-snug">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default memo(RelatedBlogDetails);