import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TypingAnimation = ({ texts, typingSpeed = 150 }) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && charIndex < texts[textIndex].length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (deleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(texts[textIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (charIndex === texts[textIndex].length) {
      // Start deleting immediately after typing finishes
      setDeleting(true);
    } else if (charIndex === 0 && deleting) {
      // Move to next text immediately after deleting finishes
      setDeleting(false);
      setTextIndex((textIndex + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, typingSpeed]);

  return (
    <span className="border-r-4 border-yellow-400 pr-2 whitespace-nowrap text-yellow-400 animate-blink text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
      {displayText}
    </span>
  );
};

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section className="relative pt-16" ref={ref}>
      <motion.section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-12 lg:py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: "linear-gradient(to bottom, #0a2540 0%, #ec4899 100%)",
        }}
      >
        {/* Left side text */}
        <motion.div
          className="md:w-1/2 w-full max-w-xl text-center md:text-left mb-12 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-blue-300 uppercase tracking-widest mb-2 text-sm sm:text-base md:text-lg font-semibold">
            YASASMI GUNASINGHE
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 leading-tight">
            HAY! I'M{" "}
            <span className="text-pink-500">YASASMI</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400 mb-8 flex justify-center md:justify-start items-center flex-wrap">
            <span className="mr-2 text-lg sm:text-xl md:text-2xl">I'M A</span>
            <TypingAnimation
              texts={[
                "UI/UX Designer",
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
                "App Developer",
                "QA Analyst",
                "Youtuber",
              ]}
            />
          </h2>
          <p className="text-gray-300 mb-10 max-w-md mx-auto md:mx-0 text-base sm:text-lg md:text-xl leading-relaxed">
            I am a versatile developer and designer with a passion for creating engaging user experiences and robust applications. I also express creativity as a Singer, blending tech expertise with artistic flair.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.div
              className="flex space-x-4 md:space-x-6"
              animate={
                inView ? { x: [0, 10, 0, -10, 0] } : { x: 0 }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <a
                href="https://github.com/Yasasmie"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-gray-800 hover:bg-gray-700 p-3 sm:p-4 rounded-full text-cyan-400 transition"
              >
                <FaGithub size={20} sm={22} md={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/yasasmi?utm_source=share&utm_campaign=share_via"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-gray-800 hover:bg-gray-700 p-3 sm:p-4 rounded-full text-blue-400 transition"
              >
                <FaLinkedinIn size={20} sm={22} md={24} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCL_oPIHoaxoPPaDwjaZh71A"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="bg-gray-800 hover:bg-gray-700 p-3 sm:p-4 rounded-full text-red-600 transition"
              >
                <FaYoutube size={20} sm={22} md={24} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right side photo */}
        <motion.div
          className="md:w-1/2 w-full flex justify-end md:justify-end items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="./yasasmii.png"
            alt="profile"
            className="rounded-xl max-w-full h-auto"
            style={{ maxWidth: "500px" }}
          />
        </motion.div>
      </motion.section>

      {/* Larger Wave SVG at the bottom */}
      <motion.div
        className="absolute bottom-0 left-0 overflow-hidden leading-none rotate-180"
        style={{ width: "100vw", height: "200px" }}
        initial={{ y: 100 }}
        animate={inView ? { y: 0 } : { y: 100 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <svg
          className="relative block w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1000 90"
        >
          <path
            d="M0,0V46.29c56.67,22,117.52,35.2,177,37.54,64.4,2.48,127.4-10.27,188-25.18C466,39.81,526.44,14.43,587,14.43c53.9,0,107.66,24.23,161,29,73.33,6.66,135.24-27,201-41.72,52.72-11.89,108.19-5.84,157,8.35,57.46,17.91,107,43.33,165,54.52V0Z"
            fill="#0a2540"
          />
          <path
            d="M0,0V15.81c56.67,22,117.52,35.2,177,37.54,64.4,2.48,127.4-10.27,188-25.18C466,9.33,526.44-16,587-16c53.9,0,107.66,24.23,161,29,73.33,6.66,135.24-27,201-41.72,52.72-11.89,108.19-5.84,157,8.35,57.46,17.91,107,43.33,165,54.52V0Z"
            opacity="0.5"
            fill="#ec4899"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Home;
