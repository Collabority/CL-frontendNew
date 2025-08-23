import "./App.css";
import {  Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Career from "./pages/Career";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ServicesDetails from "./pages/ServicesDetails";
import JobDetails from "./pages/JobDetails";
import Contact from "./pages/Contact";
import BlogGrid from "./pages/BlogGrid";
import BlogDetails from "./pages/BlogDetails";
import RelatedBlogDetails from "./pages/RelatedBlogDetails";
import { AboutProvider } from "./context/AboutContext";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <>
      <AboutProvider>
        <div className="App min-h-screen bg-beige">
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<BlogGrid />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/services-details" element={<ServicesDetails />} />
            <Route path="/blog-details/:key" element={<RelatedBlogDetails />} />
            <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </div>
      </AboutProvider>
    </>
  );
}

export default App;
