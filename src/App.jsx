import "./App.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServicesDetails from "./pages/ServicesDetails";
import BlogGrid from "./pages/BlogGrid";
import BlogDetails from "./pages/BlogDetails";
import RelatedBlogDetails from "./pages/RelatedBlogDetails";
import Career from "./pages/Career";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-poppins">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services-details" element={<ServicesDetails />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/blog-details/:key" element={<RelatedBlogDetails />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
