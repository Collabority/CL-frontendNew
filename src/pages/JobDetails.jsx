import { Link, useParams } from "react-router-dom";
import { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaSuitcase, FaLocationDot, FaClock, FaChartLine } from "react-icons/fa6";

import instance from "../lib/instance.js";
import JobApplicationForm from "../components/jobs/jobApplication.jsx"; 
import Seo from "../components/Seo";

const JobDetails = () => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const formatList = (str) => (str ? str.split("\n").filter(Boolean) : []);

  useEffect(() => {
    async function fetchJobDetails() {
      try {
        setLoading(true);
        const res = await instance.get(`/career/jobs/${id}`);
        if (res.data.success) {
          setJob(res.data.data);
        }
      } catch (err) {
        setError("This position is no longer accepting applications.");
      } finally {
        setLoading(false);
      }
    }
    fetchJobDetails();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F6F3]">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-12 h-12 border-4 border-[#008080] border-t-transparent rounded-full mb-4"
      />
      <p className="text-[#002248] font-black uppercase tracking-widest text-xs">Fetching Career Details</p>
    </div>
  );
  
  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F6F3] p-6 text-center">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center text-3xl mb-6">!</div>
        <h2 className="text-3xl font-black text-[#002248] mb-4">{error || "Role Not Found"}</h2>
        <Link to="/career" className="inline-flex items-center gap-2 px-8 py-4 bg-[#008080] text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl shadow-teal-900/20 hover:bg-[#002248] transition-all">
          <FaArrowLeft /> View Openings
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#F8F6F3] min-h-screen py-12 lg:py-24 px-4 font-poppins selection:bg-[#008080] selection:text-white">
      <Seo 
        title={`${job.title} | Careers at Collabority`} 
        description={`Apply for the ${job.title} position at Collabority. Join our ${job.department} team in ${job.jobLocation}.`}
        path={`/job/${id}`}
      />
      
      <div className="max-w-5xl mx-auto">
        {/* Navigation */}
        <div className="mb-10">
          <Link
            to="/career"
            className="group inline-flex items-center gap-3 text-[#008080] font-black text-xs uppercase tracking-[0.2em] transition-all"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to All Roles
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100"
        >
          {/* Header Info */}
          <header className="p-8 md:p-16 bg-gradient-to-b from-white to-[#F8F6F3]/30 border-b border-gray-100">
            <div className="flex flex-col items-center text-center">
              <span className="px-4 py-1.5 rounded-full bg-[#008080]/10 text-[#008080] font-black text-[10px] uppercase tracking-widest mb-6 border border-[#008080]/10">
                {job.department}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-[#002248] mb-8 tracking-tighter leading-tight">
                {job.title}
              </h1>
              
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                <div className="flex items-center gap-2">
                  <FaLocationDot className="text-[#008080]" /> {job.jobLocation}
                </div>
                <div className="flex items-center gap-2">
                  <FaSuitcase className="text-[#008080]" /> {job.jobType}
                </div>
                <div className="flex items-center gap-2">
                  <FaChartLine className="text-[#008080]" /> {job.experienceLevel} Level
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-[#008080]" /> {job.jobPeriod}
                </div>
              </div>

              <div className="mt-12 p-1 rounded-2xl bg-white shadow-xl shadow-teal-900/5 border border-gray-100 inline-flex items-center">
                <div className="px-8 py-4 bg-[#002248] rounded-xl text-white font-black text-xl md:text-2xl tracking-tighter">
                  ₹{(job.minSalary || 0).toLocaleString()} - ₹{(job.maxSalary || 0).toLocaleString()}
                </div>
                <div className="px-6 text-gray-400 font-black text-[10px] uppercase tracking-widest">
                  Annual Comp
                </div>
              </div>
            </div>
          </header>

          <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Content */}
            <div className="lg:col-span-8 space-y-16">
              <section>
                <h2 className="text-sm font-black text-[#008080] uppercase tracking-[0.3em] mb-6">01. About the Role</h2>
                <p className="text-gray-500 text-lg leading-relaxed whitespace-pre-line font-medium">
                  {job.description}
                </p>
              </section>

              {job.keyResponsibities && (
                <section>
                  <h2 className="text-sm font-black text-[#008080] uppercase tracking-[0.3em] mb-8">02. Responsibilities</h2>
                  <ul className="space-y-6">
                    {formatList(job.keyResponsibities).map((item, idx) => (
                      <li key={idx} className="flex gap-5 group">
                        <div className="mt-1 w-6 h-6 rounded-lg bg-teal-50 text-[#008080] flex items-center justify-center shrink-0 font-black text-[10px] group-hover:bg-[#008080] group-hover:text-white transition-colors">
                          {idx + 1}
                        </div>
                        <p className="text-gray-500 text-lg leading-snug font-medium">{item}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {job.jobRequirements && (
                <section>
                  <h2 className="text-sm font-black text-[#008080] uppercase tracking-[0.3em] mb-8">03. Requirements</h2>
                  <ul className="space-y-6">
                    {formatList(job.jobRequirements).map((item, idx) => (
                      <li key={idx} className="flex gap-5">
                        <div className="mt-2 w-2 h-2 bg-[#008080] rounded-full shrink-0 shadow-[0_0_10px_rgba(0,128,128,0.4)]" />
                        <p className="text-gray-500 text-lg leading-snug font-medium">{item}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right Column: Sticky Sidebar / POC */}
            <div className="lg:col-span-4">
              <div className="sticky top-10 space-y-8">
                {job.hiringManager && (
                  <div className="bg-[#F8F6F3] p-8 rounded-[2rem] border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#008080]/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                    <p className="text-[10px] text-[#008080] uppercase tracking-[0.2em] font-black mb-6">Hiring Manager</p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-[#002248] text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform">
                        {job.hiringManager.name?.charAt(0)}
                      </div>
                      <div>
                        <p className="font-black text-lg text-[#002248] tracking-tight">{job.hiringManager.name}</p>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">{job.hiringManager.title}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="p-8 bg-[#008080] rounded-[2rem] text-white shadow-2xl shadow-teal-900/20">
                  <h4 className="font-black text-xl mb-4 tracking-tight">Collabority Culture</h4>
                  <p className="text-sm text-teal-50/70 leading-relaxed font-medium mb-6">
                    We believe in radical ownership and creative freedom. Join a team where your work actually matters.
                  </p>
                  <div className="space-y-3">
                    {["Flexible Hours", "Hybrid Work", "Skill Stipends"].map((perk, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest bg-white/10 p-3 rounded-xl border border-white/10">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" /> {perk}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Form Section */}
          <section id="apply-form" className="bg-[#F8F6F3]/30 border-t border-gray-100 p-8 md:p-16">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-[#008080] font-black uppercase tracking-[0.3em] text-[10px]">Submission</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#002248] tracking-tighter mt-4 mb-4">Launch Your Career</h2>
                <p className="text-gray-400 font-medium">Complete the form below and our team will review your profile within 48 hours.</p>
              </div>
              <div className="bg-white p-2 rounded-[2.5rem] shadow-2xl shadow-gray-200">
                 <JobApplicationForm jobId={job._id} />
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default memo(JobDetails);