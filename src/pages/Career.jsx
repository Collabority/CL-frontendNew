import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react'; // Import the ExternalLink icon from lucide-react
import { allJobs, allDomains } from '../constants/jobData';
import { Link } from 'react-router-dom';


// Main App Component for the Careers Page UI
const Career = () => {
  // State for the single filter for all roles
  const [selectedDomain, setSelectedDomain] = useState('all');
  
  // State to store jobs filtered by the selected domain
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Effect to filter jobs based on selected domain
  useEffect(() => {
    let currentFilteredJobs = [];
    if (selectedDomain === 'all') {
      currentFilteredJobs = allJobs;
    } else {
      currentFilteredJobs = allJobs.filter(job => job.domainId === selectedDomain);
    }
    setFilteredJobs(currentFilteredJobs);
  }, [selectedDomain]); // Depend only on the single selectedDomain state

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-sans {
            font-family: 'Inter', sans-serif;
        }
        /* Custom select arrow styling */
        .custom-select-arrow {
            position: absolute;
            right: 0.75rem;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            color: #4B5563;
        }
        `}
      </style>

      {/* Main Header and overall filter */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 sm:mb-0 text-center sm:text-left">
            Open Roles
          </h1>
          {/* Consolidated Roles Filter Dropdown */}
          <div className="relative w-full sm:w-auto">
            <label htmlFor="domain-filter" className="sr-only">Filter roles by domain</label>
            <select
              id="domain-filter"
              className="block w-full sm:w-48 bg-gray-100 border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg leading-tight
                         focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition duration-150 ease-in-out appearance-none"
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              aria-label="Filter roles by category"
            >
              {allDomains.map((domain) => (
                <option key={domain.id} value={domain.id}>
                  {domain.name}
                </option>
              ))}
            </select>
            <div className="custom-select-arrow">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        {/* Horizontal separator line after the main header/overall filter */}
        <hr className="border-gray-200 mb-8" />

        {/* Job Listings Section or "No Matching Roles" message */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-200 overflow-hidden group"
              >
                <div className="h-1 bg-gradient-to-r from-secondary to-gray-900" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-secondary transition">{job.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary text-secondary font-medium capitalize">
                      {allDomains.find(d => d.id === job.domainId)?.name || 'General'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{job.location}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{job.description}</p>
                  <Link
                    to={`/job/${job.id}`}
                    className="inline-block mt-2 text-sm font-medium text-white bg-gray-900 hover:bg-primary hover:text-secondary hover:border transition px-4 py-2 rounded-md"
                  >
                    View Details
                  </Link>
                </div>
              </div>

            ))}
          </div>
        ) : (
          // Message when no jobs are found based on any filter
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Matching Roles Found</h2>
            <p className="text-gray-600 text-lg">
              Adjust your domain selection or check back later for new opportunities.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Career;
