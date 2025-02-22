// import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from '../assets/img1.png' // Adjust path as needed

const Footer = () => {
   return (
      <footer className="bg-gray-900 text-white py-1 md:py-2">
         <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center">
            {/* Logo Section */}
            <Link to="/">
               <div className="md:text-2xl flex items-center font-bold uppercase py-1 md:py-2">
                  <p className="text-orange-600 translate-y-1">Smart</p>
                  <p className="text-green-700 translate-y-1">Canteen</p>
                  <img className="w-5 h-5 md:w-9 md:h-8 ml-1 " src={logo} alt="Logo" />
               </div>
            </Link>

            

            {/* Copyright */}
            <p className="text-xs md:text-sm text-gray-400 py-1 md:py-2">© {new Date().getFullYear()} Smart Canteen. All rights reserved.</p>

            {/* Social Media Links */}
            <div className="flex gap-2 md:space-x-6">
               <a className="py-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-white hover:text-blue-500 md:text-2xl" />
               </a>
               <a className="py-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white hover:text-pink-500 md:text-2xl" />
               </a>
               <a className="py-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white hover:text-blue-400 md:text-2xl" />
               </a>
               <a className="py-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-white hover:text-blue-600 md:text-2xl" />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
