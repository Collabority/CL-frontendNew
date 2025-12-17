import { useNavigate, Link, useParams } from "react-router-dom";
import JobApplicationForm from "../components/jobs/jobApplication.jsx";
import { useEffect } from "react";
import instance from "../lib/instance.js";
import { useState } from "react";



const suggestions = [
  {
    _id: "68a6062e1381f9b7f1f03926",
    title: "Backend Developer",
    jobLocation: "Remote",
  },
  {
    _id: "68a6062e1381f9b7f1f03927",
    title: "UI/UX Designer",
    jobLocation: "Ghaziabad",
  },
  {
    _id: "68a6062e1381f9b7f1f03928",
    title: "Project Manager",
    jobLocation: "Remote",
  },
];

const formatList = (str) => (str ? str.split("\n").filter(Boolean) : []);

const JobDetails = () => {
  const [job, setJob] = useState({});
  const { id } = useParams();
  // const navigate = useNavigate();
  useEffect(() => {
    async function fetchJobDetails() {
      // Fetch job details using job ID from URL params
      const res = await instance.get(`/career/get-jobs/${id}`);
      const data = await res.data.data;
      setJob(data);
    }
    fetchJobDetails();
  }, []);
  // const job = tempdata;
  if (!job || !job._id) {
    return <div className="p-8 text-center">Loading job details...</div>;
  }
  return (
    <div className="bg-[#F8F6F3] min-h-screen py-10 px-4 md:px-8 lg:px-16 text-gray-800 font-sans">
      {/* Back to Roles */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/career"
          className="inline-block text-[#008080] hover:underline text-sm font-medium mb-4"
        >
          ← Back to Roles
        </Link>
      </div>

      {/* Job Title & Meta */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-2 text-[#002248]">
          {job.title}
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-[#7b8ca0] text-base">
          <span>{job.department}</span>
          <span className="hidden sm:inline">|</span>
          <span>{job.jobType}</span>
          <span className="hidden sm:inline">|</span>
          <span>{job.jobLocation}</span>
          <span className="hidden sm:inline">|</span>
          <span>{job.experienceLevel} Level</span>
        </div>
        <div className="mt-2 text-[#008080] font-semibold text-lg">
          ₹{job.minSalary.toLocaleString()} - ₹{job.maxSalary.toLocaleString()}{" "}
          / {job.jobPeriod}
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* ==== LEFT: Job Details ==== */}
        <div className="lg:col-span-3 space-y-8">
          {/* About the Role */}
          <section className="bg-white p-6 sm:p-8 rounded-none border border-[#e0d8c8] shadow">
            <h2 className="text-xl font-semibold mb-2 text-[#008080]">
              About the Role
            </h2>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </section>

          {/* Responsibilities */}
          {job.keyResponsibities && (
            <section className="bg-white p-6 sm:p-8 rounded-none border border-[#e0d8c8] shadow">
              <h2 className="text-xl font-semibold mb-2 text-[#008080]">
                Key Responsibilities
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {formatList(job.keyResponsibities).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          {job.jobRequirements && (
            <section className="bg-white p-6 sm:p-8 rounded-none border border-[#e0d8c8] shadow">
              <h2 className="text-xl font-semibold mb-2 text-[#008080]">
                Requirements
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {formatList(job.jobRequirements).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Perks */}
          {job.perks && (
            <section className="bg-white p-6 sm:p-8 rounded-none border border-[#e0d8c8] shadow">
              <h2 className="text-xl font-semibold mb-2 text-[#008080]">
                Perks & Benefits
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {formatList(job.perks).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Instructions */}
          {job.instructions && (
            <section className="bg-white p-6 sm:p-8 rounded-none border border-[#e0d8c8] shadow">
              <h2 className="text-xl font-semibold mb-2 text-[#008080]">
                How to Apply
              </h2>
              <p className="text-gray-700">{job.instructions}</p>
            </section>
          )}

          {/* Hiring Manager */}
          {job?.hiringManager?.name?(
            <section className="bg-white p-6 sm:p-8 rounded-none border border-[#e0d8c8] shadow flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-[#008080] text-white flex items-center justify-center rounded-full text-2xl font-bold uppercase">
                {job.hiringManager.name[0]}
              </div>
              <div>
                <div className="font-semibold text-[#002248]">
                  {job.hiringManager.name}
                </div>
                <div className="text-sm text-[#7b8ca0]">
                  {job.hiringManager.title}
                </div>
                <a
                  href={`mailto:${job.hiringManager.email}`}
                  className="text-[#008080] text-sm hover:underline"
                >
                  {job.hiringManager.email}
                </a>
              </div>
            </section>
          ) : null}

          {/* ==== Application Form ==== */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-center text-[#002248]">
              Apply for this Role
            </h2>

            <JobApplicationForm jobId={job._id} />
          </div>
        </div>

        {/* ==== RIGHT: Suggestions ==== */}
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold text-[#002248] mb-2">
            More Open Positions
          </h2>
          {suggestions.map((suggested) => (
            <div
              key={suggested._id}
              className="border border-[#e0d8c8] rounded-none bg-white p-4 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-md font-medium text-[#008080] mb-1">
                {suggested.title}
              </h4>
              <p className="text-sm text-gray-500 mb-2">
                {suggested.jobLocation}
              </p>
              <Link
                to={`/job/${suggested._id}`}
                className="text-sm text-[#002248] hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default JobDetails;
