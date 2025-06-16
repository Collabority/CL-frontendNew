import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react'; // Import the ExternalLink icon from lucide-react

// Mock Data for Domains and Jobs
const allDomains = [
  { id: 'all', name: 'All Domains' },
  { id: 'cloud', name: 'Cloud & DevOps' },
  { id: 'dev', name: 'Software Development' },
  { id: 'data', name: 'Data & Analytics' },
  { id: 'cyber', name: 'Cybersecurity' },
  { id: 'consult', name: 'Consulting & Strategy' },
  { id: 'infra', name: 'Infrastructure & Ops' },
];

const allJobs = [
  {
    id: 'job1',
    title: 'Senior Cloud Architect',
    location: 'Remote',
    domainId: 'cloud',
    description: 'Design and implement scalable cloud solutions on AWS/Azure. Requires strong expertise in cloud infrastructure and security.',
    applyLink: '#apply-cloud-arch',
  },
  {
    id: 'job2',
    title: 'DevOps Engineer',
    location: 'Pune, India',
    domainId: 'cloud',
    description: 'Automate deployment pipelines and manage infrastructure as code. Experience with CI/CD tools (Jenkins, GitLab CI) is a plus.',
    applyLink: '#apply-devops',
  },
  {
    id: 'job3',
    title: 'Full Stack Developer (React/Node.js)',
    location: 'Bangalore, India',
    domainId: 'dev',
    description: 'Develop robust web applications using modern JavaScript frameworks and Node.js backend. Strong problem-solving skills required.',
    applyLink: '#apply-fs-dev',
  },
  {
    id: 'job4',
    title: 'Data Scientist',
    location: 'Hyderabad, India',
    domainId: 'data',
    description: 'Analyze complex datasets, build predictive models, and extract actionable insights. Proficiency in Python/R and ML libraries.',
    applyLink: '#apply-data-sci',
  },
  {
    id: 'job5',
    title: 'Cybersecurity Consultant',
    location: 'London, UK',
    domainId: 'cyber',
    description: 'Provide expert advice on security policies, risk assessment, and compliance. Experience with security frameworks is essential.',
    applyLink: '#apply-cyber-consult',
  },
  {
    id: 'job6',
    title: 'IT Strategy Consultant',
    location: 'New York, USA',
    domainId: 'consult',
    description: 'Advise clients on digital transformation and technology roadmap development. Strong analytical and communication skills.',
    applyLink: '#apply-it-strategy',
  },
  {
    id: 'job7',
    title: 'Systems Administrator',
    location: 'Frankfurt, Germany',
    domainId: 'infra',
    description: 'Manage and maintain server infrastructure, ensuring high availability and performance. Familiarity with Linux/Windows servers.',
    applyLink: '#apply-sys-admin',
  },
  {
    id: 'job8',
    title: 'Junior Cloud Engineer',
    location: 'Remote',
    domainId: 'cloud',
    description: 'Assist in cloud environment setup and maintenance. Great opportunity for freshers with basic cloud knowledge.',
    applyLink: '#apply-junior-cloud',
  },
  {
    id: 'job9',
    title: 'Backend Developer (Python/Django)',
    location: 'Delhi, India',
    domainId: 'dev',
    description: 'Develop robust backend services and APIs. Experience with Django/Flask and database management.',
    applyLink: '#apply-backend',
  },
  {
    id: 'job10',
    title: 'Business Intelligence Analyst',
    location: 'Mumbai, India',
    domainId: 'data',
    description: 'Create dashboards and reports, providing insights to drive business decisions. Proficiency in SQL and BI tools (e.g., Tableau, Power BI).',
    applyLink: '#apply-bi-analyst',
  },
];

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
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-sm text-secondary font-medium mb-3">{job.location}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>
                <a
                  href={job.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm
                             text-white bg-secondary hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                             transition duration-150 ease-in-out"
                >
                  Apply Now
                  {/* Lucide React ExternalLink icon */}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
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
