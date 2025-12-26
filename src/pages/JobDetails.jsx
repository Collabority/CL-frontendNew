import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../lib/instance.js";
import JobApplicationForm from "../components/jobs/jobApplication.jsx"; 

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
        console.error("Error fetching job:", err);
        setError("Job not found or has been removed.");
      } finally {
        setLoading(false);
      }
    }
    fetchJobDetails();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg bg-[#F8F6F3]">Loading job details...</div>;
  
  if (error || !job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F6F3] p-4">
        <h2 className="text-xl text-red-600 font-bold">{error || "Job not found"}</h2>
        <Link to="/career" className="text-[#008080] hover:underline mt-4 block font-medium">← Back to Roles</Link>
      </div>
    );
  }

  return (
    // Outer Wrapper
    <div className="bg-[#F8F6F3] min-h-screen py-10 px-4 md:px-8 font-sans">
      
      {/* ✅ CENTERED MAIN CONTAINER (max-w-4xl makes it look like a document) */}
      <div className="w-full max-w-4xl mx-auto bg-white border border-[#e0d8c8] shadow-sm rounded-xl overflow-hidden">
        
        {/* Header Section with Background */}
        <div className="bg-white p-8 sm:p-10 border-b border-[#e0d8c8]">
          <div className="mb-6">
            <Link
              to="/career"
              className="inline-flex items-center text-[#008080] hover:underline text-sm font-medium transition-colors"
            >
              ← Back to Roles
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#002248]">
              {job.title}
            </h1>
            
            {/* Meta Tags */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-[#7b8ca0] text-sm md:text-base mb-6">
              <span className="bg-gray-100 px-3 py-1 rounded-full">{job.department}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">{job.jobType}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">{job.jobLocation}</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full">{job.experienceLevel} Level</span>
            </div>

            <div className="text-[#008080] font-bold text-xl bg-teal-50 inline-block px-6 py-2 rounded-lg border border-teal-100">
              ₹{(job.minSalary || 0).toLocaleString()} - ₹{(job.maxSalary || 0).toLocaleString()} 
              <span className="text-sm font-normal text-gray-500 ml-1">/ {job.jobPeriod}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-10 space-y-10">
          
          {/* About */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-[#002248] border-b pb-2 border-gray-100">About the Role</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">{job.description}</p>
          </section>

          {/* Responsibilities */}
          {job.keyResponsibities && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#002248] border-b pb-2 border-gray-100">Key Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
                {formatList(job.keyResponsibities).map((item, idx) => (
                  <li key={idx} className="pl-2">{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          {job.jobRequirements && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#002248] border-b pb-2 border-gray-100">Requirements</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
                {formatList(job.jobRequirements).map((item, idx) => (
                  <li key={idx} className="pl-2">{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Perks */}
          {job.perks && (
            <section>
              <h2 className="text-xl font-bold mb-4 text-[#002248] border-b pb-2 border-gray-100">Perks & Benefits</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 leading-relaxed">
                {formatList(job.perks).map((item, idx) => (
                  <li key={idx} className="pl-2">{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Hiring Manager Info (Centered Card) */}
          {job.hiringManager && (
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
               <div className="w-16 h-16 bg-[#008080] text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-sm shrink-0">
                  {job.hiringManager.name?.charAt(0) || "H"}
               </div>
               <div>
                 <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">Hiring Manager</p>
                 <p className="font-bold text-xl text-[#002248]">{job.hiringManager.name}</p>
                 <p className="text-[#008080]">{job.hiringManager.title}</p>
               </div>
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Application Form */}
          <div id="apply-form">
            <h2 className="text-3xl font-extrabold text-center text-[#002248] mb-8">
              Ready to Apply?
            </h2>
            {/* The form itself */}
            <JobApplicationForm jobId={job._id} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobDetails;