import React from "react";
import {
  FaTwitter,
  FaPinterestP,
  FaYoutube,
  FaInstagram,
  FaArrowUp,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Logo & Description */}
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 text-2xl font-bold mb-6">
            <Link to="/"><img src="/Logo SVG.svg" alt="Logo" className="w-10 h-10" /></Link>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">SP-City</span>
          </div>
          <p className="leading-relaxed text-gray-300 mb-6">
            At SP-City, we pride ourselves on being a trusted and reputable
            name in the real estate industry with years of experience helping clients find their dream homes.
          </p>
          <div className="flex gap-4">
            <div className="bg-red-600 rounded-lg p-3">
              <span className="text-white font-bold text-sm">500+</span>
            </div>
            <div>
              <div className="text-white font-semibold">Happy Clients</div>
              <div className="text-gray-400 text-sm">Satisfied Customers</div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="animate-fade-in-up animation-delay-300">
          <h3 className="text-xl font-bold text-white mb-6 relative">
            Quick Links
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Our Project", path: "/project" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" }
            ].map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-2 h-2 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-fade-in-up animation-delay-500">
          <h3 className="text-xl font-bold text-white mb-6 relative">
            Contact Info
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Address</div>
                <div className="text-gray-300 text-sm">123 SP City, Prayagraj Uttar Pradesh</div>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Email</div>
                <div className="text-gray-300 text-sm">contact@spcity.com</div>
              </div>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-white" />
              </div>
              <div>
                <div className="text-white font-medium">Phone</div>
                <div className="text-gray-300 text-sm">+91 98765 43210</div>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="animate-fade-in-up animation-delay-700">
          <h3 className="text-xl font-bold text-white mb-6 relative">
            Newsletter
            <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-600"></span>
          </h3>
          <p className="mb-6 text-gray-300">
            Subscribe to get updates on new properties and exclusive offers.
          </p>

          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg outline-none focus:border-red-500 transition-colors duration-300 text-white placeholder-gray-400"
              />
              <button className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white hover:scale-105 transition-transform duration-300 shadow-lg">
                <FaSearch />
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 pt-4">
              {[FaTwitter, FaPinterestP, FaYoutube, FaInstagram].map((Icon, index) => (
                <div key={index} className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer">
                  <Icon className="text-gray-300 hover:text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-400 text-sm">
            Copyright © 2026 SP-City. All rights reserved. || Designed & Developed by <a href="https://digicoders.in/" className="text-red-500 font-semibold hover:underline"> Team Digicoders</a>
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;