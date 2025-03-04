// import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from '../assets/img1.png' // Adjust path as needed

const Footer = () => {
   return (
      <footer className="bg-gray-900 text-white py-1 md:py-2  ">
         <div className="container mx-auto flex flex-row justify-between items-center">
            {/* Logo Section */}
            <Link to="/">
               <div className="mb-2 md:text-2xl text-xs flex items-center font-bold uppercase px-3 md:py-2">
                  <p className="text-orange-600 translate-y-1">Smart</p>
                  <p className="text-green-700 translate-y-1">Canteen</p>
                  <img className="w-4 h-3 md:w-9 md:h-8 ml-1 " src={logo} alt="Logo" />
               </div>
            </Link>
 
            

            {/* Copyright */}
            <p className="text-[0.45rem] md:text-sm text-gray-400  md:py-2 ">© {new Date().getFullYear()} Smart Canteen. All rights reserved.</p>

            {/* Social Media Links */}
            <div className="flex gap-2 md:space-x-6 px-3 text-xs md:text-xl" >
               <a className="py-2" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-white hover:text-blue-500 " />
               </a>
               <a className="py-2" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white hover:text-pink-500 " />
               </a>
               <a className="py-2" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white hover:text-blue-400 " />
               </a>
               <a className="py-2" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-white hover:text-blue-600 " />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
