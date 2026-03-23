import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 py-10 px-4 md:px-20 overflow-hidden">
      {/* subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="font-bold text-white text-lg">Chayan Bez</p>
          <p className="text-gray-500 text-sm">MERN Stack Developer</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-xl text-gray-500">
          <a href="https://github.com/chayanbez2003-max" target="_blank" rel="noopener noreferrer"
            className="hover:text-white hover:scale-125 transition-all duration-200" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chayan-bez-b74505281/" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-125 transition-all duration-200" aria-label="LinkedIn">
            <CiLinkedin />
          </a>
          <a href="https://x.com/ChayanBez" target="_blank" rel="noopener noreferrer"
            className="hover:text-gray-200 hover:scale-125 transition-all duration-200" aria-label="Twitter">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/chayanbez/" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-400 hover:scale-125 transition-all duration-200" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-gray-500 text-sm">
            © 2025 <span className="text-purple-400 font-semibold">chayanbez2003-max</span>
          </p>
          <p className="text-xs text-gray-600 mt-1">Designed & Developed by Chayan Bez</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
