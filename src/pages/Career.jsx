import React from "react";
import MainIllustration from "../assets/main.png";
import LeftLaurelPng from "../assets/image1.png";
import RightLaurelPng from "../assets/image2.png";
import { allDomains, allJobs, awards, roles } from "../constants/data";
import Navbar from "../layouts/Navbar";
import { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";
import { useRef } from "react";
import ClientTestimonial from "../components/ClientTestimonial";
import { motion } from "framer-motion";
import ScrollToTop from "../components/ScrollToTop";

const Career = () => {
  // State for the single filter for all roles
  const [selectedDomain, setSelectedDomain] = useState("all");

  // State to store jobs filtered by the selected domain
  const [filteredJobs, setFilteredJobs] = useState([]);

  // Effect to filter jobs based on selected domain
  useEffect(() => {
    let currentFilteredJobs = [];
    if (selectedDomain === "all") {
      currentFilteredJobs = allJobs;
    } else {
      currentFilteredJobs = allJobs.filter(
        (job) => job.domainId === selectedDomain
      );
    }
    setFilteredJobs(currentFilteredJobs);
  }, [selectedDomain]); // Depend only on the single selectedDomain state

  const [email, setEmail] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleRoleChange = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for signing up!");
  };

  const openRolesRef = useRef(null);

  const test = [
    {
      img: "https://images.unsplash.com/photo-1653379672421-40c464f335e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZGlhbiUyMHdvbWVuJTIwY29ycG9yYXRlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
      text: "Working at Collabority has been a game-changer for my career. The team values creativity, encourages experimentation, and gives you full ownership of your ideas. They truly cares about digital authenticity and user trust.",
      name: "Ananya Shah",
      post: "Creative Lead, Collabority",
    },
    {
      img: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWVufGVufDB8fDB8fHww",
      text: "At Collabority, I don’t just write code—I help build tools that combat misinformation and protect real people. The supportive environment, flexible work culture, and meaningful purpose make it the most fulfilling job I’ve ever had.",
      post: "Software Engineer, Collabority",
      name: "Raj Mehra",
    },
    {
      img: "https://images.unsplash.com/photo-1599668946438-519e96061e60?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbiUyMHdvbWVufGVufDB8fDB8fHww",
      text: "Collabority is more than just a workplace—it’s a mission I proudly stand behind. I get to work with passionate, sharp minds every day, all while helping spread awareness about deepfakes and digital safety. The energy here is unmatched!",
      name: "Fatima Khan",
      post: "Marketing Strategist, Collabority",
    },
  ];

  return (
    <main className="min-h-screen bg-white font-poppins">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-10 px-5 bg-white text-center">
        <div className="mb-1 max-w-[800px]">
          <h1 className="text-[3.5em] font-bold text-[#24221E] mb-[30px] leading-[1.2] max-[640px]:text-[2em] max-[640px]:leading-[1.3]">
            Breaking the status
            <br />
            quo to make an
            <br />
            impact on humanity
          </h1>
          <button
            onClick={() =>
              openRolesRef.current.scrollIntoView({ behaviour: "smooth" })
            }
            className="bg-[#008080] text-white py-3 px-6 rounded-[10px] text-base font-bold cursor-pointer transition-colors duration-300 hover:bg-gray-900 max-[640px]:text-sm max-[640px]:px-4 max-[640px]:py-2"
          >
            See open roles
          </button>

          <div className="mt-1 w-full h-[300px] bg-transparent flex items-center justify-center text-[#666] text-lg rounded-none overflow-hidden max-[640px]:h-[200px]">
            <img
              src={MainIllustration}
              alt="Main Illustration"
              className="max-w-full h-full object-contain block mx-auto"
            />
          </div>
        </div>

        <div className="flex justify-center flex-nowrap gap-10 mt-4 w-full max-w-[1200px] max-[640px]:flex-wrap max-[640px]:gap-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-1 max-[640px]:flex-col max-[640px]:gap-2"
            >
              <img
                src={LeftLaurelPng}
                alt="Left Laurel"
                className="w-6 h-6 object-contain max-[640px]:w-4 max-[640px]:h-4"
              />
              <div className="flex-none bg-transparent p-0 rounded-none shadow-none flex flex-col items-center text-center">
                <p className="text-[0.8em] text-[#6F6D6B] max-[640px]:text-[0.7em]">
                  {award.title}
                </p>
                <p className="text-[1.1em] font-bold text-[#24221E] max-[640px]:text-base">
                  {award.awardName}
                </p>
                <p className="text-[0.8em] text-[#6F6D6B] max-[640px]:text-[0.7em]">
                  By {award.by}
                </p>
              </div>
              <img
                src={RightLaurelPng}
                alt="Right Laurel"
                className="w-6 h-6 object-contain max-[640px]:w-4 max-[640px]:h-4"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Open Roles Section */}
      <section ref={openRolesRef} className="min-h-screen bg-gray-50">
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
              <label htmlFor="domain-filter" className="sr-only">
                Filter roles by domain
              </label>
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
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-secondary transition">
                        {job.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary text-secondary font-medium capitalize">
                        {allDomains.find((d) => d.id === job.domainId)?.name ||
                          "General"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{job.location}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {job.description}
                    </p>
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                No Matching Roles Found
              </h2>
              <p className="text-gray-600 text-lg">
                Adjust your domain selection or check back later for new
                opportunities.
              </p>
            </div>
          )}
        </main>
      </section>

      {/* Application Process */}
      <section className="w-full min-h-screen bg-[url('/src/assets/image3.avif')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 max-[640px]:px-3 max-[640px]:py-10">
        {/* Heading */}
        <div className="text-center mb-6 max-[640px]:mb-4">
          <h1 className="text-5xl font-semibold max-[640px]:text-3xl max-[640px]:leading-tight">
            Our transparent <br /> application process
          </h1>
        </div>

        {/* Paragraph */}
        <div className="max-w-xl text-left mt-4 flex flex-col gap-6 max-[640px]:gap-4 max-[640px]:text-sm">
          <p className="text-xl font-normal max-[640px]:text-base max-[640px]:font-medium">
            <b className="font-semibold">1. Submit your application:</b>
            <span className="block text-base mt-1 max-[640px]:text-sm max-[640px]:mt-1.5">
              Follow the steps to complete the online application and respond to
              the longer-form application questions.
            </span>
            <span className="block text-base max-[640px]:text-sm">
              We encourage candidates to spend time reading
              <Link to="/blog-details" className="text-[#008080] underline">
                our blog
              </Link>
              to get to know our company, values and products.
            </span>
          </p>

          <p className="text-xl font-light max-[640px]:text-base max-[640px]:font-normal">
            <b className="font-semibold">2. Interviews and task assignment:</b>
            <span className="block text-base mt-1 max-[640px]:text-sm max-[640px]:mt-1.5">
              Once your application has passed an internal review, you’ll
              receive an email from{" "}
              <Link
                to="mailto:info@collabority.in"
                className="text-[#008080] underline"
              >
                info@collabority.com
              </Link>{" "}
              to schedule your first interview with someone from the Collabority
              team over Google Meet.
            </span>
            <span className="block text-base max-[640px]:text-sm">
              You may be requested to complete a task assignment that highlights
              your technical capabilities and communication skills.
            </span>
            <span className="block text-base max-[640px]:text-sm">
              Once we’ve evaluated your task assignment, you may be invited to
              two additional interviews with two other Collabority employees.
            </span>
          </p>

          <p className="text-xl font-light max-[640px]:text-base max-[640px]:font-normal">
            <b className="font-semibold">3. Decision:</b>
            <span className="block text-base mt-1 max-[640px]:text-sm max-[640px]:mt-1.5">
              You’ll always hear back from us via our{" "}
              <Link
                to="mailto:hello@collabority.in"
                className="text-[#008080] underline"
              >
                hello@collabority.com
              </Link>{" "}
              email address – we manually review and respond to every
              candidate’s application.
            </span>
            <span className="block text-base max-[640px]:text-sm">
              If the hiring committee has agreed to hire you, you’ll receive an
              official offer to join our team.
            </span>
          </p>

          <p className="text-xl font-light max-[640px]:text-base max-[640px]:font-normal">
            <b className="font-semibold">4. Onboarding and mentorship:</b>
            <span className="block text-base mt-1 max-[640px]:text-sm max-[640px]:mt-1.5">
              Leading up to your start date, you’ll be invited to a meticulously
              crafted project that outlines your first months at Collabority.
            </span>
            <span className="block text-base max-[640px]:text-sm">
              You’ll also be paired with a mentor and have the opportunity to
              spend a week working with them in person wherever they’re located.
            </span>
          </p>
        </div>
      </section>

      {/* Company Benifits */}
      <section className="min-h-screen flex flex-col">
        <div className="text-center mb-6 pt-32 max-[640px]:pt-20 max-[640px]:px-4">
          <h1 className="text-5xl font-semibold max-[640px]:text-2xl max-[640px]:leading-snug">
            A company that supports <br /> your ambitious goals <br /> and
            personal wellbeing
          </h1>
        </div>

        <div className="flex flex-col">
          {/* --- BLOCK 1 --- */}
          <div className="flex gap-40 max-[640px]:flex-col max-[640px]:gap-8 max-[640px]:px-4">
            <motion.div
              className="flex flex-col justify-center items-center gap-6 mt-24 max-[640px]:mt-0"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_768/https%3A%2F%2Fdoist.com%2Fstatic%2Fimages%2Fcareers-page%2Fperks%2Fillustration-perks-basics.png"
                className="w-[45%] max-[640px]:w-[80%]"
              />
              <h1 className="text-center font-medium text-3xl max-[640px]:text-xl">
                The basics
              </h1>
            </motion.div>

            <div className="flex flex-col mt-14 pl-20 max-[640px]:mt-6 max-[640px]:pl-0 max-[640px]:gap-8">
              <div className="flex flex-col gap-1">
                <div className="flex gap-4 items-center max-[640px]:gap-2">
                  <img
                    src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Fdoist.com%2Fstatic%2Ficons%2Fglobe.svg"
                    className="w-[4%] max-[640px]:w-6"
                  />
                  <h3 className="text-lg font-medium max-[640px]:text-base">
                    Work from anywhere
                  </h3>
                </div>
                <p className="pl-11 text-gray-600 max-[640px]:pl-0 max-[640px]:text-sm">
                  Employees at Collabority can work from anywhere in the world.
                  We never place restrictions on locations.
                </p>
              </div>

              <div className="flex flex-col gap-1 mt-12 max-[640px]:mt-8">
                <div className="flex gap-4 items-center max-[640px]:gap-2">
                  <img
                    src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Fdoist.com%2Fstatic%2Ficons%2Fclock.svg"
                    className="w-[4%] max-[640px]:w-6"
                  />
                  <h3 className="text-lg font-medium max-[640px]:text-base">
                    Design your own schedule
                  </h3>
                </div>
                <p className="pl-11 text-gray-600 max-[640px]:pl-0 max-[640px]:text-sm">
                  Work during the time of day that’s best for you. Employees are
                  encouraged to work 8-hour days and no more than 40 hours/week.
                </p>
              </div>

              <div className="flex flex-col gap-1 mt-12 max-[640px]:mt-8">
                <div className="flex gap-4 items-center pl-3 max-[640px]:pl-0 max-[640px]:gap-2">
                  <img
                    src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Fdoist.com%2Fstatic%2Ficons%2Fdollar.svg"
                    className="w-[2%] max-[640px]:w-6"
                  />
                  <h3 className="text-lg font-medium max-[640px]:text-base">
                    Negotiation-free compensation package
                  </h3>
                </div>
                <p className="pl-11 text-gray-600 max-[640px]:pl-0 max-[640px]:text-sm">
                  Our formula-based salaries are calculated based on
                  industry-benchmarked skills and geographical location – no
                  stressful negotiation required.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-300 mt-10" />

          {/* --- BLOCK 2 --- */}
          <div className="flex gap-40 max-[640px]:flex-col max-[640px]:gap-8 max-[640px]:px-4">
            <motion.div
              className="flex flex-col justify-center items-center gap-6 mt-24 max-[640px]:mt-0"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_768/https%3A%2F%2Fdoist.com%2Fstatic%2Fimages%2Fcareers-page%2Fperks%2Fillustration-perks-skills.png"
                className="w-[45%] max-[640px]:w-[80%]"
              />
              <h1 className="text-center font-medium text-3xl max-[640px]:text-xl">
                Expand your <br /> professional skills
              </h1>
            </motion.div>

            <div className="flex flex-col mt-14 pl-10 max-[640px]:mt-6 max-[640px]:pl-0 max-[640px]:gap-8">
              <div className="flex flex-col gap-1">
                <div className="flex gap-4 items-center max-[640px]:gap-2">
                  <img
                    src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Fdoist.com%2Fstatic%2Ficons%2Fcase.svg"
                    className="w-[4%] max-[640px]:w-6"
                  />
                  <h3 className="text-lg font-medium max-[640px]:text-base">
                    Continue your education
                  </h3>
                </div>
                <p className="pl-11 text-gray-600 max-[640px]:pl-0 max-[640px]:text-sm">
                  You’ll have a recurring budget to spend on attending
                  conferences, taking courses, and purchasing books.
                </p>
              </div>

              <div className="flex flex-col gap-1 mt-12 max-[640px]:mt-8">
                <div className="flex gap-4 items-center max-[640px]:gap-2">
                  <img
                    src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Fdoist.com%2Fstatic%2Ficons%2Fticket.svg"
                    className="w-[4%] max-[640px]:w-6"
                  />
                  <h3 className="text-lg font-medium max-[640px]:text-base">
                    Collaborate in-person at retreats
                  </h3>
                </div>
                <p className="pl-11 text-gray-600 max-[640px]:pl-0 max-[640px]:text-sm">
                  Our team- and company-wide retreats are unforgettable. The
                  connections that we make in person inspire us throughout the
                  year.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-300 mt-10" />

          {/* --- BLOCK 3 --- */}
          <div className="flex gap-40 max-[640px]:flex-col max-[640px]:gap-8 max-[640px]:px-4">
            <motion.div
              className="flex flex-col justify-center items-center gap-6 mt-24 max-[640px]:mt-0"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_768/https%3A%2F%2Fdoist.com%2Fstatic%2Fimages%2Fcareers-page%2Fperks%2Fillustration-perks-environment.png"
                className="w-[45%] max-[640px]:w-[80%]"
              />
              <h1 className="text-center font-medium text-3xl max-[640px]:text-xl">
                Craft your ideal <br /> work environment
              </h1>
            </motion.div>

            <div className="flex flex-col mt-14 pl-10 max-[640px]:mt-6 max-[640px]:pl-0 max-[640px]:gap-8 mb-10">
              <div className="flex flex-col gap-1">
                <div className="flex gap-4 items-center max-[640px]:gap-2">
                  <img
                    src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Fdoist.com%2Fstatic%2Ficons%2Fbuilding.svg"
                    className="w-[4%] max-[640px]:w-6"
                  />
                  <h3 className="text-lg font-medium max-[640px]:text-base">
                    Cozy up at a coworking space
                  </h3>
                </div>
                <p className="pl-11 text-gray-600 max-[640px]:pl-0 max-[640px]:text-sm">
                  Find the coworking space that’s right for you and Collabority
                  will cover the expense.
                </p>
              </div>

              <div className="flex flex-col gap-1 mt-12 max-[640px]:mt-8">
                <div className="flex gap-4 items-center max-[640px]:gap-2">
                  <img
                    src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Fdoist.com%2Fstatic%2Ficons%2Fapps.svg"
                    className="w-[4%] max-[640px]:w-6"
                  />
                  <h3 className="text-lg font-medium max-[640px]:text-base">
                    Subscribe to apps and services
                  </h3>
                </div>
                <p className="pl-11 text-gray-600 max-[640px]:pl-0 max-[640px]:text-sm">
                  You’ll have a monthly budget to spend on services that help
                  you do your job: home internet, work apps, music subscription,
                  etc.
                </p>
              </div>

              <div className="flex flex-col gap-1 mt-12 max-[640px]:mt-8">
                <div className="flex gap-4 items-center max-[640px]:pl-0 max-[640px]:gap-2">
                  <img
                    src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_480/https%3A%2F%2Fdoist.com%2Fstatic%2Ficons%2Fcomputer.svg"
                    className="w-[4%] max-[640px]:w-6"
                  />
                  <h3 className="text-lg font-medium max-[640px]:text-base">
                    Purchase the hardware you need
                  </h3>
                </div>
                <p className="pl-13 text-gray-600 max-[640px]:pl-0 max-[640px]:text-sm">
                  Every employee at Collabority has access to a recurring budget
                  to spend on work-related equipment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonial */}
      <ClientTestimonial
        title1="Space to Shape your Career"
        title2="What our Employees Say"
        data={test}
      />
      <hr className="border-t border-gray-300" />
      {/* Notified Section */}

      <div className="min-h-screen bg-[#F8F6F3] flex flex-col justify-center py-12 px-4">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-start justify-center gap-2 md:gap-40">
          <form
            className="flex-1 max-w-lg pl-2 md:pl-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <div className="text-base font-semibold text-gray-900 mb-1">
                Nothing available that matches your skillset?
              </div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Sign up for future updates
              </h2>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-900 mb-1"
              >
                Your email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="hello@collabority.in"
                className="w-full rounded-lg border border-gray-300 bg-[#F8F6F3] px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#008080] text-base"
              />
            </div>
            <div className="mb-8">
              <div className="font-semibold text-gray-900 mb-2">
                Which roles would you like to be notified about?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 ">
                {roles.map((role) => (
                  <label
                    key={role}
                    className="flex items-center text-gray-900 text-sm cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-[#008080] rounded mr-3 border-gray-300 focus:ring-[#008080]"
                      checked={selectedRoles.includes(role)}
                      onChange={() => handleRoleChange(role)}
                    />
                    {role}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 bg-[#008080] hover:bg-[#006666] text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm transition-colors text-lg"
            >
              Get notified
            </button>
          </form>
          <div className="flex-1 flex items-center justify-center md:pr-8">
            <img
              src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2240/https%3A%2F%2Fdoist.com%2Fstatic%2Fimages%2Fcareers-page%2Fsignup-for-updates%2Fillus.png"
              alt="Sign up for updates illustration"
              className="w-full max-w-[450px] h-auto"
            />
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Career;
