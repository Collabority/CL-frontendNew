import "./App.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ServicesDetails from "./pages/ServicesDetails";
import BlogGrid from "./pages/BlogGrid";
import BlogDetails from "./pages/BlogDetails";

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services-details" element={<ServicesDetails />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-details" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
