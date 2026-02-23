import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaLocationDot
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#001529] text-gray-300 pt-16 pb-8 overflow-hidden font-poppins border-t border-gray-800">
      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#008080] to-transparent opacity-40" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-gray-800 pb-12 mb-8">
          
          {/* Brand & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="text-white text-3xl font-black tracking-tighter inline-block">
              COLLABORITY<span className="text-[#008080]">.</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Innovate, Elevate, Dominate. We bridge the gap between technology and brand growth through high-end IT and creative marketing solutions.
            </p>
            <nav className="flex gap-4" aria-label="Social media links">
              {[
                { icon: <FaXTwitter />, link: "https://x.com/Collabority", label: "Twitter", hover: "hover:text-white" },
                { icon: <FaFacebookF />, link: "#", label: "Facebook", hover: "hover:text-[#1877F2]" },
                { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn", hover: "hover:text-[#0A66C2]" },
                { icon: <FaInstagram />, link: "#", label: "Instagram", hover: "hover:text-[#E4405F]" },
                { icon: <FaYoutube />, link: "#", label: "YouTube", hover: "hover:text-[#FF0000]" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800/30 flex items-center justify-center transition-all duration-300 ${social.hover} hover:-translate-y-1 hover:bg-gray-800`}
                >
                  {social.icon}
                </a>
              ))}
            </nav>
          </div>

          {/* Sitelink Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:px-8">
            {[
              { title: "Company", items: ["Home", "Services", "About", "Portfolio"] },
              { title: "Resources", items: ["Blog", "Career", "Contact", "Privacy"] }
            ].map((col) => (
              <nav key={col.title} className="space-y-4">
                <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">{col.title}</h4>
                <ul className="space-y-3 text-sm">
                  {col.items.map((item) => (
                    <li key={item}>
                      <Link 
                        to={`/${item.toLowerCase()}`} 
                        className="hover:text-[#008080] transition-colors flex items-center group w-fit"
                      >
                        <span className="h-[1px] w-0 group-hover:w-3 bg-[#008080] transition-all duration-300 mr-0 group-hover:mr-2" />
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* Local SEO Contact Column */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Connect</h4>
            <address className="not-italic space-y-4 text-sm">
              <a href="mailto:hello@collabority.in" className="flex items-center gap-4 group w-fit">
                <div className="w-10 h-10 rounded-xl bg-gray-800/30 flex items-center justify-center group-hover:bg-[#008080]/20 transition-all duration-300">
                  <FaEnvelope className="text-[#008080]" />
                </div>
                <span className="group-hover:text-white transition-colors">hello@collabority.in</span>
              </a>
              <a href="tel:+918320154665" className="flex items-center gap-4 group w-fit">
                <div className="w-10 h-10 rounded-xl bg-gray-800/30 flex items-center justify-center group-hover:bg-[#008080]/20 transition-all duration-300">
                  <FaPhone className="text-[#008080]" />
                </div>
                <span className="group-hover:text-white transition-colors">+91 832 015 4665</span>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 mt-1 rounded-xl bg-gray-800/30 flex items-center justify-center">
                  <FaLocationDot className="text-[#008080]" />
                </div>
                <span className="leading-relaxed text-gray-400">
                  Ghaziabad, Uttar Pradesh,<br />
                  <span className="text-gray-500">India, 201001</span>
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-800/50 pt-8">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
            Shift: <span className="text-gray-400">Mon - Fri (09:00 - 17:00 IST)</span>
          </p>
          <div className="text-[11px] text-gray-500">
            &copy; {currentYear} <span className="text-white font-semibold">Collabority</span>. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);