import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10 px-4 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 md:space-x-8 flex-wrap">
        
        <div className="flex flex-col space-y-2 min-w-[200px]">
          <h2 className="text-2xl font-bold">NextEvent</h2>
          <p className="text-sm sm:text-base text-gray-300">
            Your platform for discovering and managing events effortlessly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-y-3 sm:gap-y-0 sm:gap-x-8 min-w-[180px]">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Events</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3 sm:space-x-4 mt-2 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
            <a
              key={idx}
              href="#"
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 transition-all transform hover:scale-110"
              aria-label="Social Link"
            >
              <Icon className="text-white text-sm sm:text-base" />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-700" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center text-gray-400 text-sm sm:text-base gap-y-2">
        <p>&copy; {new Date().getFullYear()} NextEvent Platform. All rights reserved.</p>
        <div className="flex flex-wrap space-x-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
