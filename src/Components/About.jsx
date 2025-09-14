import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const waveLetters = "ABOUT ME".split("");

const letterWaveVariants = {
  animate: (i) => ({
    y: [0, -10, 0, 10, 0],
    transition: {
      delay: i * 0.15,
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  }),
};

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // animation repeats on re-entering viewport
    threshold: 0.2, // 20% visible triggers animation
  });

  return (
    <section className="relative" ref={ref}>
      <motion.section
        id="about"
        className="min-h-screen flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-12 lg:py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: "linear-gradient(to bottom, #0a2540 0%, #3b82f6 100%)",
        }}
      >
        {/* Left side photo */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center items-center mb-12 md:mb-0"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="./yasasmi1.JPG"
            alt="about profile"
            className="rounded-xl max-w-full h-auto shadow-lg"
            style={{ maxWidth: "400px" }}
          />
        </motion.div>

        {/* Right side text */}
        <motion.div
          className="md:w-1/2 w-full max-w-xl text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-200 mb-6 leading-tight flex justify-center md:justify-start space-x-1">
            {waveLetters.map((letter, index) =>
              letter === " " ? (
                <span key={index} style={{ width: "0.5em" }} />
              ) : (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterWaveVariants}
                  animate={inView ? "animate" : ""}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              )
            )}
          </h1>
          <p className="text-white-800 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            I am a passionate final year undergraduate student at the University of Bedfordshire with a strong fascination for Artificial Intelligence and Machine Learning. Alongside my academic pursuits, I am gaining valuable practical experience through my internship at Ropelrich Holdings Pvt Ltd, where I engage in innovative projects that challenge and enhance my technical capabilities.
          </p>
          <p className="text-grey-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
            My studies are focused on AI and ML, exploring how these transformative technologies can revolutionize businesses and enable intelligent decision-making. By balancing rigorous academic work with hands-on application, I am committed to developing intelligent systems that solve complex problems. With a mindset geared towards lifelong learning and innovation, I am eager to build a career that meaningfully contributes to the future of technology and business.
          </p>
          <motion.a
            href="./Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold px-8 py-4 rounded-full text-base sm:text-lg md:text-xl"
            initial={{ backgroundColor: "#f472b6", color: "#ffffff" }}
            whileHover={{
              backgroundColor: "#db34bfff",
              color: "#0a0a0aff",
            }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            Download Resume
            <motion.span
              className="ml-3"
              animate={{ x: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              <FaArrowRight />
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.section>
    </section>
  );
};

export default About;
