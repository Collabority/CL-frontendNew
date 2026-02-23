import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AboutProvider } from "./context/AboutContext";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

const AboutUs = lazy(() => import("./pages/AboutUs"));
const Career = lazy(() => import("./pages/Career"));
const OpenRoles = lazy(() => import("./pages/OpenRoles"));
const Services = lazy(() => import("./pages/services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ServicesDetails = lazy(() => import("./pages/ServicesDetails"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogGrid = lazy(() => import("./pages/BlogGrid"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const RelatedBlogDetails = lazy(() => import("./pages/RelatedBlogDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageLoader = () => (
  <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
    <div className="w-12 h-12 border-[3px] border-teal-50 border-t-[#008080] rounded-full animate-spin" />
    <span className="sr-only">Loading Collabority...</span>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <AboutProvider>
      <div className="App min-h-screen bg-white">
        <ScrollToTop />

        <AnimatePresence mode="wait" initial={false}>
          <Suspense fallback={<PageLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services-details" element={<ServicesDetails />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />

              {/* Career section */}
              <Route path="/career" element={<Career />} />
              <Route path="/open-roles" element={<OpenRoles />} />
              <Route path="/job/:id" element={<JobDetails />} />

              {/* Blog routes */}
              <Route path="/blog" element={<BlogGrid />} />
              <Route path="/blog/post/:id" element={<BlogDetails />} />
              <Route path="/blog-details/:id" element={<BlogDetails />} />
              <Route path="/blog/insight/:key" element={<RelatedBlogDetails />} />
              <Route path="/blog-details/insight/:key" element={<RelatedBlogDetails />} />

              {/* 404 fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
    </AboutProvider>
  );
}

export default App;