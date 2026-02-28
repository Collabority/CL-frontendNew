import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PageHeader from "../components/PageHeader";
import NewsLetter from "../components/NewsLetter";
import Seo from "../components/Seo";
import instance from "../lib/instance";
import { COLORS } from "../constants/Data";

const CONTACT_TILES = [
  {
    title: "Phone Number",
    value: "+91 83193 01961",
    link: "tel:+918319301961",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Email Address",
    value: "hello@collabority.in",
    link: "mailto:hello@collabority.in",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 6 12 13 2 6" />
      </svg>
    ),
  },
  {
    title: "Office Location",
    value: "Ghaziabad, Uttar Pradesh",
    link: "https://www.google.com/maps", 
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Social Network",
    value: "LinkedIn Profile",
    link: "https://www.linkedin.com/company/collaborityofficial/",
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const Contact = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", subject: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const toggleVideoModal = () => setIsVideoModalOpen(!isVideoModalOpen);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key === 'email' ? 'from' : key, form[key]));

    try {
      const response = await instance.post("contact/submitQuery", formData);
      if (response.status === 200) {
        setStatus({ type: "success", message: "Message sent! We will get back to you shortly." });
        setForm({ name: "", email: "", message: "", subject: "" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-poppins selection:bg-[#008080] selection:text-white">
      <Seo 
        title="Contact Us | Collabority IT Solutions" 
        description="Connect with Collabority for custom IT solutions and digital transformation in Ghaziabad."
        path="/contact"
      />
      <Navbar />
      
      <div className="bg-[#F8F6F3]">
        <PageHeader
          title="Contact Us"
          breadcrumb={
            <nav className="flex gap-2 text-sm font-bold uppercase tracking-widest opacity-60" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#008080]">Home</Link>
              <span>/</span>
              <span className="text-[#008080]">Contact</span>
            </nav>
          }
        />

        <section className="container mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#e0d8c8] border border-[#e0d8c8] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#e0d8c8] gap-px">
              {CONTACT_TILES.map((tile, idx) => (
                <motion.a
                  key={idx}
                  href={tile.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ backgroundColor: "#ffffff" }}
                  className="flex flex-col items-center justify-center p-12 text-center bg-[#F8F6F3] transition-all group"
                >
                  <div className="mb-6 text-[#008080] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
                    {tile.icon}
                  </div>
                  <h3 className="text-sm font-black text-[#002248] uppercase tracking-widest mb-2">
                    {tile.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium group-hover:text-[#008080] transition-colors break-all">
                    {tile.value}
                  </p>
                </motion.a>
              ))}
            </div>

            <div className="w-full h-full min-h-[400px] bg-gray-100">
              <iframe
                title="Collabority Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112067.112061!2d77.3391!3d28.6692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb45150d43%3A0x574100c6d32095!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                className="w-full h-full grayscale contrast-125"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-24 lg:py-40">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <span className="text-[#2563eb] font-black uppercase text-sm tracking-[0.3em]">Direct Inquiry</span>
                <h2 className="text-4xl md:text-6xl font-black text-[#002248] leading-tight tracking-tighter">
                  Estimate For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008080] to-[#2563eb]">Projects.</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-gray-50 px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#008080] focus:bg-white outline-none transition-all font-medium" required />
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-gray-50 px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#008080] focus:bg-white outline-none transition-all font-medium" required />
              </div>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help?" className="w-full bg-gray-50 px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#008080] focus:bg-white outline-none transition-all font-medium" required />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project details..." rows={5} className="w-full bg-gray-50 px-6 py-4 rounded-xl border-2 border-transparent focus:border-[#008080] focus:bg-white outline-none transition-all font-medium resize-none" required />
              
              <button 
                type="submit" 
                className="w-full md:w-auto bg-[#008080] text-white font-black uppercase tracking-widest px-12 py-5 rounded-2xl hover:bg-[#002248] transition-all shadow-xl shadow-teal-900/20 disabled:opacity-50 active:scale-95" 
                disabled={loading}
              >
                {loading ? "Transmitting..." : "Send Message →"}
              </button>

              <AnimatePresence>
                {status.message && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`font-bold ${status.type === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                    {status.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#008080] to-[#2563eb] rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80" 
                  alt="Consultation" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <motion.button 
                  whileHover={{ scale: 1.1 }} 
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-white text-[#008080] flex items-center justify-center shadow-2xl border-8 border-white/20" 
                  onClick={toggleVideoModal}
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#002248]/95 backdrop-blur-xl p-6" 
            onClick={toggleVideoModal}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black" 
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all text-2xl font-bold" onClick={toggleVideoModal}>×</button>
              <iframe src="https://www.youtube.com/embed/AExAZLYf65Q?autoplay=1" title="Collabority Intro" className="w-full h-full border-none" allow="autoplay; encrypted-media" allowFullScreen />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <NewsLetter />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default memo(Contact);