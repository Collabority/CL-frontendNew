import React, { useEffect, useState, memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  FaTwitter, 
  FaRegLightbulb, 
  FaCommentAlt, 
  FaChevronDown, 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaQuoteLeft,
  FaShareNodes,
  FaBookmark
} from 'react-icons/fa6';

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
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.button 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }}
              onClick={() => navigate(-1)} 
              className="group flex items-center gap-3 text-[#008080] text-[10px] font-black tracking-[0.3em] mb-12 uppercase"
            >
              <FaArrowLeft className="group-hover:-translate-x-2 transition-transform" /> Back to Insights
            </motion.button>
            
            <div className="flex items-center gap-3 mb-8">
               <span className="bg-teal-50 text-[#008080] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-teal-100">
                  {blog.category}
               </span>
               <span className="text-gray-300 text-[10px] font-black uppercase tracking-widest">4 Min Read</span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-[#002248] leading-[1] mb-12 tracking-tighter"
            >
              {blog.title}
            </motion.h1>
            
            <div className="flex items-center gap-6 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
               <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-[#008080]" /> June 24, 2026
               </div>
               <div className="w-1.5 h-1.5 bg-gray-200 rounded-full" />
               <div className="flex items-center gap-2">
                  <FaBookmark className="text-[#008080]" /> Published by Collabority
               </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 md:py-32">
        
        <motion.figure 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 relative"
        >
          <div className="absolute inset-0 bg-[#008080] rounded-[3rem] blur-[80px] opacity-5 -z-10" />
          <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[2s]" 
            />
          </div>
          <figcaption className="text-center mt-8 text-xs text-gray-400 font-bold uppercase tracking-widest opacity-60">
            &mdash; Visualizing the future of {blog.category}
          </figcaption>
        </motion.figure>

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
                      className="group bg-[#F8F6F3] p-8 rounded-3xl border border-transparent hover:border-[#008080]/20 flex gap-6 items-start transition-all"
                    >
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#008080] group-hover:text-white transition-colors">
                        <FaRegLightbulb className="text-xl" />
                      </div>
                      <p className="text-lg font-bold text-[#002248] leading-snug">{item}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {idx === 1 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="my-24 relative p-12 md:p-20 bg-[#002248] rounded-[4rem] text-center overflow-hidden shadow-2xl shadow-blue-900/20"
                >
                  <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#008080] rounded-full blur-[120px] opacity-20" />
                  <span className="text-[#008080] text-[10px] font-black tracking-[0.4em] uppercase mb-8 block">Collabority Partner</span>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tighter leading-[1.1]">
                    Unlock your brand's <br /> full potential.
                  </h3>
                  <button className="bg-[#008080] text-white font-black px-14 py-6 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#002248] transition-all shadow-xl active:scale-95">
                    Start Your Project
                  </button>
                </motion.div>
              )}
            </div>
          ))}

          <div className="mt-32 p-12 md:p-20 bg-[#F8F6F3] rounded-[4rem] text-center border border-gray-100">
            <div className="w-20 h-20 bg-[#002248] rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-xl rotate-12 group hover:rotate-0 transition-transform duration-500">
                <FaShareNodes className="text-3xl text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#002248] mb-6 tracking-tighter">Spread the Word.</h3>
            <p className="text-gray-400 text-lg mb-12 max-w-sm mx-auto font-medium">
              If these insights sparked an idea, share them with your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}`}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-4 bg-[#002248] text-white font-black px-10 py-5 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-[#008080] transition-all"
              >
                <FaTwitter /> Share on X
              </a>
            </div>
          </div>
        </article>

        <section className="mt-40 pt-32 border-t border-gray-100 text-center relative">
          <div className="absolute -top-14 left-1/2 -translate-x-1/2">
            <img 
                src={authorInfo.avatar} 
                className="w-32 h-32 md:w-44 md:h-44 rounded-[3.5rem] object-cover ring-[16px] ring-white shadow-2xl rotate-3" 
                alt={authorInfo.name} 
            />
            <div className="absolute -bottom-2 -right-2 bg-[#008080] w-12 h-12 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                <FaQuoteLeft size={16} />
            </div>
          </div>
          <div className="mt-12">
            <p className="text-[#008080] font-black text-[10px] tracking-[0.4em] uppercase mb-4">The Mind Behind</p>
            <h4 className="text-4xl md:text-6xl font-black text-[#002248] mb-4 tracking-tighter">{authorInfo.name}</h4>
            <p className="text-gray-400 font-black text-[10px] mb-10 uppercase tracking-[0.2em]">{authorInfo.title}</p>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed italic font-medium opacity-80">
              "{authorInfo.bio}"
            </p>
          </div>
        </section>

        <div className="mt-40 text-center">
          <button 
            onClick={() => setShowComments(!showComments)}
            className="group inline-flex items-center gap-6 text-[10px] font-black text-[#002248] bg-white border-2 border-gray-100 px-12 py-6 rounded-3xl hover:border-[#008080] hover:text-[#008080] transition-all active:scale-95"
          >
            <FaCommentAlt className="text-lg" /> 
            {showComments ? 'Hide Discussions' : 'Read Comments'}
            <FaChevronDown className={`transition-transform duration-500 ${showComments ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showComments && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-16 max-w-2xl mx-auto"
              >
                <div className="bg-[#F8F6F3] p-16 rounded-[4rem] border border-gray-100 flex flex-col items-center">
                   <div className="w-12 h-12 border-4 border-[#008080] border-t-transparent rounded-full animate-spin mb-6" />
                   <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">
                     Connecting to Insight Stream...
                   </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default memo(RelatedBlogDetails);