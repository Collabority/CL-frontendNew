import React, { useState, useEffect, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import MainIllustration from "../assets/main.png";
import LeftLaurelPng from "../assets/image1.png";
import RightLaurelPng from "../assets/image2.png";
import { infoData as awards } from "../constants/Data";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Seo from "../components/Seo";
import instance from "../lib/instance";

const Career = () => {
  const navigate = useNavigate();
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await instance.get("/career/get-jobs");
        if (response.data.success) {
          setFetchedJobs(response.data.data.jobs.slice(0, 4));
        }
      } catch (error) { 
        console.error("Job Fetch Error:", error); 
      } finally { 
        setLoading(false); 
      }
    };
    fetchJobs();
  }, []);

  return (
    <main className="min-h-screen bg-white font-poppins overflow-x-hidden selection:bg-[#008080] selection:text-white">
      <Seo 
        title="Careers | Join Our Innovative Team" 
        description="Explore job opportunities at Collabority. We're looking for passionate developers, designers, and marketers."
        path="/career"
        keywords="IT jobs, software developer careers, Collabority hiring, tech jobs India"
      />

      <Navbar />
      
      <section className="flex flex-col items-center justify-center pt-24 md:pt-36 pb-12 px-6 text-center bg-gradient-to-b from-gray-50 to-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[950px] w-full"
        >
          <h1 className="text-3xl md:text-7xl font-black text-[#24221E] leading-[1.1] mb-8 tracking-tighter">
            Breaking the status quo <br className="hidden md:block" /> to make an <span className="text-[#008080]">impact.</span>
          </h1>
          
          <Link 
            to="/open-roles" 
            className="bg-[#008080] text-white font-black py-4 px-10 rounded-2xl text-sm md:text-base transition-all shadow-xl shadow-teal-900/20 hover:bg-[#006666] active:scale-95 inline-block uppercase tracking-widest"
          >
            See open roles
          </Link>

          <div className="mt-12 md:mt-20 w-full flex justify-center">
            <motion.img 
              src={MainIllustration} 
              alt="Team collaboration" 
              className="w-full max-w-[300px] md:max-w-[700px] h-auto"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-16 mt-16 md:mt-24 max-w-[1200px] w-full px-4 border-t border-gray-100 pt-12">
          {awards.map((award, index) => (
            <div key={index} className="flex items-center gap-3">
              <img src={LeftLaurelPng} alt="" className="w-5 h-5 md:w-8 md:h-8 opacity-40" />
              <div className="flex flex-col items-center">
                <p className="text-[8px] md:text-[10px] uppercase font-black text-gray-400 tracking-[0.2em]">{award.title}</p>
                <p className="text-[10px] md:text-base font-bold text-[#24221E]">{award.awardName}</p>
              </div>
              <img src={RightLaurelPng} alt="" className="w-5 h-5 md:w-8 md:h-8 opacity-40" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-5xl font-black text-[#24221E] tracking-tighter">Latest Roles</h2>
            <p className="text-gray-500 mt-2 font-medium">Join us in building the future of digital solutions.</p>
          </div>
          <button 
            onClick={() => navigate("/open-roles")}
            className="text-[#008080] font-black text-sm uppercase tracking-widest hover:underline"
          >
            All opportunities →
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {loading ? (
            [1, 2, 3, 4].map(n => <div key={n} className="h-40 bg-gray-50 animate-pulse rounded-2xl" />)
          ) : (
            fetchedJobs.map((job) => (
              <article key={job._id}>
                <Link to={`/job/${job._id}`} className="block h-full p-8 rounded-2xl bg-[#F8F6F3] border border-transparent hover:border-[#008080]/20 hover:bg-white hover:shadow-2xl hover:shadow-teal-900/5 transition-all group">
                  <span className="text-[10px] font-black text-[#008080] uppercase tracking-widest">{job.department}</span>
                  <h3 className="text-lg md:text-xl font-bold mt-2 leading-tight group-hover:text-[#008080] transition-colors">{job.title}</h3>
                  <div className="mt-6 flex items-center text-[#008080] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </div>
                </Link>
              </article>
            ))
          )}
        </div>
      </section>

      
      <section className="py-20 md:py-32 bg-[#24221E] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-6xl font-black mb-16 md:mb-24 text-center tracking-tighter">How we hire</h2>
          <div className="grid gap-12 md:gap-20">
            {[
              { num: "01", title: "Apply", desc: "Submit your resume for an online application review by our talent team." },
              { num: "02", title: "Task", desc: "Showcase your technical skills through a practical, real-world challenge." },
              { num: "03", title: "Chat", desc: "A conversational interview to meet your future team and discuss culture." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-12 items-start"
              >
                <span className="text-4xl md:text-7xl font-black text-[#008080] opacity-50">{step.num}</span>
                <div>
                  <h4 className="text-xl md:text-3xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm md:text-xl leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default memo(Career);