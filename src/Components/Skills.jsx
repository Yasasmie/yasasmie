import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaFigma,
  FaBootstrap,
  FaJava,
  FaPython,
  FaPhp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

// Icon mapping with approximations/custom:
const skillsIconsMap = {
  React: <FaReact className="text-cyan-400" title="React" size={40} />,
  HTML5: <FaHtml5 className="text-orange-600" title="HTML5" size={40} />,
  CSS3: <FaCss3Alt className="text-blue-600" title="CSS3" size={40} />,
  JavaScript: <FaJsSquare className="text-yellow-300" title="JavaScript" size={40} />,
  TailwindCSS: (
    <span
      className="text-teal-400 font-bold"
      title="TailwindCSS"
      style={{ fontSize: 40 }}
    >
      TW
    </span>
  ),
  Bootstrap: <FaBootstrap className="text-purple-700" title="Bootstrap" size={40} />,

  Java: <FaJava className="text-red-600" title="Java" size={40} />,
  Python: <FaPython className="text-yellow-600" title="Python" size={40} />,
  PHP: <FaPhp className="text-indigo-700" title="PHP" size={40} />,
  R: (
    <span
      className="text-blue-500 font-bold"
      title="R"
      style={{ fontSize: 40 }}
    >
      R
    </span>
  ),
  C: (
    <span
      className="text-gray-500 font-bold"
      title="C"
      style={{ fontSize: 40 }}
    >
      C
    </span>
  ),
  "C++": (
    <span
      className="text-gray-600 font-bold"
      title="C++"
      style={{ fontSize: 40 }}
    >
      C++
    </span>
  ),
  "C#": (
    <span
      className="text-purple-800 font-bold"
      title="C#"
      style={{ fontSize: 40 }}
    >
      C#
    </span>
  ),

  MySQL: <FaDatabase className="text-yellow-400" title="MySQL" size={40} />,
  Firebase: (
    <span
      className="text-yellow-500 font-bold"
      title="Firebase"
      style={{ fontSize: 40 }}
    >
      FB
    </span>
  ),

  VSCode: (
    <span
      className="text-blue-600 font-bold"
      title="VS Code"
      style={{ fontSize: 40 }}
    >
      VS
    </span>
  ),
  IntelliJ: (
    <span
      className="text-pink-500 font-bold"
      title="IntelliJ IDEA"
      style={{ fontSize: 40 }}
    >
      IJ
    </span>
  ),
  AndroidStudio: (
    <span
      className="text-green-500 font-bold"
      title="Android Studio"
      style={{ fontSize: 40 }}
    >
      AS
    </span>
  ),
  DevC: (
    <span
      className="text-gray-600 font-bold"
      title="Dev C++"
      style={{ fontSize: 40 }}
    >
      DC
    </span>
  ),
  Dreamweaver: (
    <span
      className="text-green-700 font-bold"
      title="Dreamweaver"
      style={{ fontSize: 40 }}
    >
      DW
    </span>
  ),
  PowerBI: (
    <span
      className="text-yellow-500 font-bold"
      title="Power BI"
      style={{ fontSize: 40 }}
    >
      PB
    </span>
  ),
  Figma: <FaFigma className="text-pink-500" title="Figma" size={40} />,
  RStudio: (
    <span
      className="text-blue-700 font-bold"
      title="R Studio"
      style={{ fontSize: 40 }}
    >
      RS
    </span>
  ),
  Canva: (
    <span
      className="text-purple-500 font-bold"
      title="Canva"
      style={{ fontSize: 40 }}
    >
      CV
    </span>
  ),
};

// Skill cards data with your full skills grouped
const skillCardsData = [
  {
    category: "Programming Languages",
    skills: [
      "JavaScript",
      "Java",
      "C",
      "C++",
      "C#",
      "Python",
      "PHP",
      "R",
      "MySQL",
      "Firebase",
    ],
  },
  {
    category: "Frontend Development",
    skills: ["React", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"],
  },
  {
    category: "Development Tools & IDEs",
    skills: [
      "VSCode",
      "IntelliJ",
      "AndroidStudio",
      "DevC",
      "Dreamweaver",
      "RStudio",
    ],
  },
  {
    category: "Design & Visualization",
    skills: ["Figma", "Canva", "PowerBI"],
  },
];

// Wave text split and animations
const waveText = "SKILLS".split("");

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

const SkillCard = ({ category, skills, delay, animate }) => (
  <motion.div
    className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl shadow-2xl p-10 max-w-md mx-auto sm:mx-0"
    initial={{ opacity: 0, y: 20 }}
    animate={animate}
    transition={{ delay: delay / 1000, ease: "easeOut" }}
  >
    <h3 className="text-yellow-400 text-3xl md:text-4xl font-extrabold mb-6 text-center">
      {category}
    </h3>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill) => (
        <div key={skill} className="flex flex-col items-center space-y-2 w-24">
          {skillsIconsMap[skill] || (
            <span className="text-gray-400 text-lg">{skill}</span>
          )}
          <span className="text-gray-300 text-base">{skill}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      id="skills"
      className="min-h-screen bg-gradient-to-b from-pink-900 via-purple-900 to-blue-900 px-6 sm:px-12 md:px-20 lg:px-28 py-14 sm:py-16 lg:py-20"
    >
      {/* Wave animated heading */}
      <motion.h2
        className="text-yellow-200 text-5xl sm:text-6xl md:text-7xl font-extrabold mb-16 text-center flex justify-center space-x-3 select-none"
        aria-label="Skills"
      >
        {waveText.map((letter, index) =>
          letter === " " ? (
            <span key={index} style={{ width: "0.75em" }} />
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
          hidden: {},
        }}
      >
        {skillCardsData.map((card, index) => (
          <SkillCard
            key={card.category}
            category={card.category}
            skills={card.skills}
            delay={index * 300}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
