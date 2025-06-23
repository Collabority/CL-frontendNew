import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { allJobs } from '../constants/jobData';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = allJobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">Job not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-8 lg:px-16 text-gray-800">
      {/* 🔙 Back to Roles */}
      <div className="max-w-7xl mx-auto mb-6">
        <Link
          to="/career"
          className="inline-block text-secondary hover:underline text-sm font-medium mb-4"
        >
          ← Back to Roles
        </Link>
      </div>

      <div className='text-center mb-6'>
            <h1 className="text-4xl font-bold mb-2 text-secondary">{job.title}</h1>
            <p className="text-gray-600 text-lg">
              {job.location} · Collabority
            </p>
          </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* ==== LEFT: Job Details ==== */}
        <div className="lg:col-span-3 space-y-8">
          {/* Header */}
          

          {/* About the Role */}
          <section className='bg-white p-6 rounded-lg'>
            <h2 className="text-xl font-semibold mb-2">About the Role</h2>
            <p className="text-gray-700 leading-relaxed">{job.about}</p>
          </section>

          {/* Responsibilities */}
          {job.responsibilities && (
            <section className='bg-white p-6 rounded-lg'>
              <h2 className="text-xl font-semibold mb-2">Key Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          {job.requirements && (
            <section className='bg-white p-6 rounded-lg'>
              <h2 className="text-xl font-semibold mb-2">Requirements</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Why Join Us */}
          {job.whyJoin && (
            <section className='bg-white p-6 rounded-lg'>
              <h2 className="text-xl font-semibold mb-2">Why Join Us</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                {job.whyJoin.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* ==== RIGHT: Suggestions ==== */}
        <aside className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">More Open Positions</h2>
          {allJobs
            .filter(j => j.id !== job.id)
            .slice(0, 3)
            .map((suggested) => (
              <div
                key={suggested.id}
                className="border border-gray-200 rounded-lg bg-white p-4 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-md font-medium text-gray-900 mb-1">{suggested.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{suggested.location}</p>
                <Link
                  to={`/job/${suggested.id}`}
                  className="text-sm text-secondary hover:underline"
                >
                  View Details →
                </Link>
              </div>
            ))}
        </aside>
      </div>

      {/* ==== Application Form ==== */}
      <section className="max-w-4xl mx-auto mt-16 bg-primary p-6 rounded-xl shadow-md border">
        <h2 className="text-2xl font-bold mb-6 text-center">Apply for this role</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border px-4 py-2 rounded-md bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border px-4 py-2 rounded-md bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Resume (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              className="w-full border px-4 py-2 rounded-md bg-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Cover Letter</label>
            <textarea
              rows="5"
              className="w-full border px-4 py-2 rounded-md bg-white"
              placeholder="Why do you want this role?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-secondary hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-md transition"
          >
            Submit Application
          </button>
        </form>
      </section>
    </div>
  );
};

export default JobDetails;
