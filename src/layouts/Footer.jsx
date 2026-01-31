import React from "react";
import { Link } from "react-router-dom";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-32 border-b border-gray-700 pb-4 mb-8">
          {/* logo and text */}
          <div className="col-span-1 md:mb-0 mb-8">
            <div className="text-white text-2xl font-bold mb-4">
              Collabority
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Collabority – Innovate, Elevate, Dominate
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              At Collabority, we specialize in cutting-edge IT solutions,
              result-driven marketing strategies, creative design services, and
              professional video production to help businesses thrive in the
              digital era. Our expertise spans multiple domains, ensuring
              seamless digital transformation and brand growth.
            </p>
          </div>

          {/* pages links */}
          <div className="col-span-1 md:ml-6 md:mb-0 mb-8">
            <h4 className="text-lg font-semibold mb-4">Pages</h4>
            <div className="flex flex-wrap text-sm text-gray-400">
              <ul className="w-1/2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-400">›</span>Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-blue-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-400">›</span>Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-400">›</span>About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className="hover:text-blue-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-400">›</span>Career
                  </Link>
                </li>
              </ul>
              <ul className="w-1/2 space-y-2">
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-blue-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-400">›</span>Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:text-blue-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-400">›</span>Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-300 flex items-center"
                  >
                    <span className="mr-2 text-blue-400">›</span>Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* working hours */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Working Hours</h4>
            <p className="text-sm text-gray-400 mb-2">
              Monday - Friday: 9:00 - 17:00
            </p>

            {/* Social Media Section */}
            <h4 className="text-lg font-semibold mb-3 mt-6">Social Media</h4>
            <div className="flex flex-wrap items-center text-gray-400 gap-4 mb-2">
              <a
                href="https://x.com/Collabority"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-[#008080] text-xl"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://facebook.com/collaborityofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-[#1877F3] text-xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/collaborityofficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#0A66C2] text-xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com/@collaborityofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-[#FF0000] text-xl"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/collaborityofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E4405F] text-xl"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="flex flex-col gap-1 text-gray-400 text-sm mt-2">
              <a
                href="mailto:hello@collabority.in"
                className="flex items-center gap-2 hover:text-blue-300"
              >
                <FaEnvelope className="text-base" /> hello@collabority.in
              </a>
              <a
                href="tel:+918320154665"
                className="flex items-center gap-2 hover:text-blue-300"
              >
                <FaPhone className="text-base" /> +91 832 015 4665
              </a>
              <p className="text-sm text-gray-400 mt-4">
              <span className="font-semibold text-white">Address:</span>{" "}
              Ghaziabad, Uttar Pradesh, India, 201001
            </p>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="text-center text-sm text-gray-300">
          Copyright By @ Collabority - 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;
