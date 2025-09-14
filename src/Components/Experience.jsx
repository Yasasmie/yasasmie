import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experienceData = [
  {
    position: "Software Engineering Internship",
    company: "Ropelrich Holdings PVT LTD",
    period: "18th August 2025 - Present",
    description:
      "Engaged in real-world software engineering projects, collaborating with cross-functional teams to develop, test, and deploy scalable applications. Gained hands-on experience in full-stack development, agile methodologies, and code optimization.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const waveText = "Experience".toUpperCase().split("");
const letterWaveVariants = {
  animate: (i) => ({
    y: [0, -10, 0, 10, 0],
    transition: {
      delay: i * 0.1,
      repeat: Infinity,
      duration: 3,
      ease: "easeInOut",
    },
  }),
};

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-800"
    >
      <motion.h2
        className="text-5xl font-extrabold mb-12 text-yellow-400 flex justify-center space-x-1 select-none"
        aria-label="Experience"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {waveText.map((letter, index) =>
          letter === " " ? (
            <span key={index} style={{ width: "0.5em" }} />
          ) : (
            <motion.span
              key={index}
              custom={index}
              variants={letterWaveVariants}
              animate="animate"
              className="inline-block"
            >
              {letter}
            </motion.span>
          )
        )}
      </motion.h2>

      <motion.div
        className="max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-black bg-opacity-90 rounded-3xl p-8 mb-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{exp.position}</h3>
            <p className="text-cyan-300 mb-1 font-medium">{exp.company}</p>
            <p className="text-cyan-400 mb-4 italic">{exp.period}</p>
            <p className="text-white text-base leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
