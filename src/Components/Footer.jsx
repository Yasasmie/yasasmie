import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="relative w-full bg-gradient-to-br from-[#181C22] to-[#232C36] py-12 px-4 sm:px-0 overflow-hidden">
    {/* Decor SVG arcs: left & right */}
    <svg
      className="absolute left-0 top-0 w-2/5 h-full pointer-events-none"
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: 200, minHeight: 200 }}
    >
      <path
        d="M-60,200 Q70,20 230,80"
        stroke="#a21caf"
        strokeWidth="25"
        fill="none"
      />
      <path
        d="M-80,180 Q90,0 290,60"
        stroke="#14b8a6"
        strokeWidth="18"
        fill="none"
      />
      <path
        d="M-100,190 Q110,40 350,110"
        stroke="#38bdf8"
        strokeWidth="9"
        fill="none"
      />
      <path
        d="M-70,205 Q70,90 280,140"
        stroke="#e7e9ea"
        strokeWidth="10"
        fill="none"
      />
    </svg>
    <svg
      className="absolute right-0 bottom-0 w-1/4 h-2/3 pointer-events-none"
      viewBox="0 0 300 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ minWidth: 120, minHeight: 100 }}
    >
      <path 
        d="M60,100 Q160,30 320,95"
        stroke="#a21caf"
        strokeWidth="16"
        fill="none"
      />
      <path 
        d="M20,110 Q100,20 280,100"
        stroke="#14b8a6"
        strokeWidth="7"
        fill="none"
      />
      <path 
        d="M40,120 Q160,80 260,110"
        stroke="#e7e9ea"
        strokeWidth="8"
        fill="none"
      />
    </svg>

    {/* Main footer content */}
    <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between z-10">
      {/* Left: Brand/Title */}
      <div className="mb-8 md:mb-0">
        <motion.h3
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-extrabold text-yellow-400 tracking-wide"
        >
          YASASMI GUNASINGHE
        </motion.h3>
        
      </div>
      
      {/* Right: social icons */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        className="flex space-x-6"
      >
        <a href="mailto:yasasmigunasinghe@gmail.com" aria-label="Email" className="hover:text-cyan-300 transition">
          <FaEnvelope size={26} />
        </a>
        <a href="https://github.com/Yasasmie" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-300 transition">
          <FaGithub size={26} />
        </a>
        <a href="https://www.linkedin.com/in/yasasmi?utm_source=share&utm_campaign=share_via" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-300 transition">
          <FaLinkedin size={26} />
        </a>
        <a href="https://www.facebook.com/share/1BsjossHUS/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-300 transition">
          <FaFacebook size={26} />
        </a>
        <a href="https://www.instagram.com/yasasmie?igsh=M2Q3amxjazY1eHNj&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-300 transition">
          <FaInstagram size={26} />
        </a>
        <a href="https://www.youtube.com/channel/UCL_oPIHoaxoPPaDwjaZh71A" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-300 transition">
          <FaYoutube size={26} />
        </a>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
