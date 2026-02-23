import Navbar from "../layouts/Navbar";
import { useState, useEffect, memo } from "react";
import Footer from "../layouts/Footer";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";
import instance from "../lib/instance";
import { FaArrowLeft, FaLocationDot, FaBriefcase, FaLayerGroup } from "react-icons/fa6";
import Seo from "../components/Seo";

const allDomains = [
  { id: "all", name: "All Domains" },
  { id: "Cloud & DevOps", name: "Cloud & DevOps" },
  { id: "Software Development", name: "Software Development" },
  { id: "Data & Analytics", name: "Data & Analytics" },
];

const OpenRoles = () => {
  const navigate = useNavigate();
  const [selectedDomain, setSelectedDomain] = useState("all");
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const response = await instance.get("/career/get-jobs");
        if (response.data.success) {
          setFetchedJobs(response.data.data.jobs);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = selectedDomain === "all" 
    ? fetchedJobs 
    : fetchedJobs.filter(job => job.department === selectedDomain);

  return (
    <main className="min-h-screen bg-[#F8F6F3] font-poppins relative selection:bg-[#008080] selection:text-white">
      <Seo 
        title="Open Roles | Career Opportunities at Collabority"
        description="Browse our current job openings and join a team of innovators. Find your next role in Cloud, Dev, or Data."
        path="/open-roles"
      />
      
      <Navbar />
      
      {/* Back Button - Refined for better visibility */}
      <div className="fixed top-28 left-6 z-40 hidden lg:block">
        <button 
          onClick={() => navigate("/career")}
          className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-xl text-[10px] font-black uppercase tracking-widest text-[#002248] hover:bg-[#008080] hover:text-white transition-all group active:scale-90"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Career Home
        </button>
      </div>

      <div className="pt-40 md:pt-56 pb-24 px-6 max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
            <div className="text-center md:text-left">
              <span className="text-[#008080] font-black tracking-[0.4em] uppercase text-[10px] bg-teal-50 px-4 py-2 rounded-full border border-teal-100">
                Opportunities
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-[#002248] tracking-tighter mt-6 leading-none">
                Build the <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008080] to-blue-600">Future</span>.
              </h1>
            </div>
            
            <div className="w-full md:w-80">
              <div className="relative group">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <FaLayerGroup className="text-gray-300 group-focus-within:text-[#008080] transition-colors" />
                </div>
                <select
                  id="domain-filter"
                  className="w-full pl-12 pr-10 py-5 rounded-[1.5rem] border-2 border-transparent bg-white shadow-2xl shadow-gray-200/50 font-black text-xs uppercase tracking-widest text-[#002248] outline-none cursor-pointer appearance-none focus:border-[#008080] transition-all"
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                >
                  {allDomains.map((domain) => (
                    <option key={domain.id} value={domain.id}>{domain.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                   ▼
                </div>
              </div>
            </div>
          </div>
        </header>

        {loading ? (
          <div className="flex flex-col justify-center items-center py-32">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-[#008080] border-t-transparent rounded-full"
            />
            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#002248] animate-pulse">Syncing Jobs</p>
          </div>
        ) : (
          <div className="min-h-[400px]">
            {filteredJobs.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredJobs.map((job) => (
                    <motion.div
                      layout
                      key={job._id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="group bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-transparent hover:border-[#008080]/20 hover:shadow-2xl transition-all flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <span className="text-[9px] font-black text-[#008080] uppercase tracking-widest bg-teal-50 px-4 py-2 rounded-xl border border-teal-100">
                          {job.department}
                        </span>
                        <div className="flex items-center gap-2 text-[9px] text-gray-300 font-black uppercase tracking-widest">
                          <FaBriefcase className="text-gray-200" /> {job.jobType || "Full-Time"}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-black text-[#002248] leading-tight mb-4 group-hover:text-[#008080] transition-colors tracking-tight">
                        {job.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-8">
                        <FaLocationDot className="text-[#008080]/40" />
                        {job.jobLocation || job.location}
                      </div>
                      
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-10 flex-grow font-medium">
                        {job.description}
                      </p>
                      
                      <Link
                        to={`/job/${job._id}`}
                        className="relative overflow-hidden block text-center bg-[#002248] text-white font-black uppercase tracking-widest text-[10px] py-5 rounded-2xl hover:bg-[#008080] shadow-xl shadow-blue-900/10 hover:shadow-[#008080]/30 transition-all active:scale-95"
                      >
                        Explore Role
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-center py-32 bg-white rounded-[4rem] border-2 border-dashed border-gray-100"
              >
                <div className="w-20 h-20 bg-gray-50 text-gray-200 rounded-3xl flex items-center justify-center text-3xl mx-auto mb-8 font-black">?</div>
                <h3 className="text-2xl font-black text-[#002248] mb-4 tracking-tight">Quiet on this front...</h3>
                <p className="text-gray-400 text-sm font-medium mb-10 max-w-xs mx-auto">No open roles found in this domain right now. Try exploring all departments.</p>
                <button 
                  onClick={() => setSelectedDomain("all")}
                  className="px-8 py-4 bg-teal-50 text-[#008080] font-black text-[10px] uppercase tracking-widest rounded-2xl border border-teal-100 hover:bg-[#008080] hover:text-white transition-all"
                >
                  Reset Domain Filter
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
      
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default memo(OpenRoles);