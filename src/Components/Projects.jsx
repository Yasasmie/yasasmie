import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaGithub, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from "react-icons/fa";

// Icon mapping
const languagesIconsMap = {
  React: <FaReact className="text-cyan-400" title="React" size={22} />,
  NodeJS: <FaNodeJs className="text-green-500" title="NodeJS" size={22} />,
  Database: <FaDatabase className="text-yellow-400" title="Database" size={22} />,
  HTML5: <FaHtml5 className="text-orange-600" title="HTML5" size={40} />,
  CSS3: <FaCss3Alt className="text-blue-600" title="CSS3" size={40} />,
  JavaScript: <FaJsSquare className="text-yellow-300" title="JavaScript" size={40} />,
  PHP: <FaPhp className="text-indigo-700" title="PHP" size={40} />,
    TailwindCSS: (
    <span
      className="text-teal-400 font-bold"
      title="TailwindCSS"
      style={{ fontSize: 40 }}
    >
      TW
    </span>
  ),
};

// Wave text split
const waveText = "MY PROJECTS".split("");

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

const ProjectCard = ({
  title,
  imageUrl,
  description,
  languages,
  onClick,
  delay,
  animate,
}) => (
  <motion.div
    onClick={onClick}
    className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-lg p-6 max-w-md mx-auto sm:mx-0 cursor-pointer transform transition-transform duration-500 hover:scale-105"
    initial={{ opacity: 0, y: 20 }}
    animate={animate}
    transition={{ delay: delay / 1000, ease: "easeOut" }}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => { if (e.key === "Enter") onClick(); }}
    aria-label={`Open details for project ${title}`}
  >
    <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 text-center">{title}</h3>
    {imageUrl && (
      <img
        src={imageUrl}
        alt={`${title} screenshot`}
        className="rounded-md mb-4 max-h-40 w-full object-cover"
      />
    )}
    <div className="flex justify-center space-x-4 mb-6">
      {languages.map((lang) => (
        <div key={lang} title={lang} className="flex items-center">
          {languagesIconsMap[lang] || <span className="text-gray-400">{lang}</span>}
        </div>
      ))}
    </div>
    <button
      type="button"
      className="w-full inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-pink-400 mt-3"
      aria-label={`View more details about ${title}`}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
    >
      View More
      <motion.span
        className="ml-2"
        animate={{ x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <FaArrowRight />
      </motion.span>
    </button>
  </motion.div>
);

const ProjectDetailsPopup = ({ project, onClose }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    aria-modal="true"
    role="dialog"
    style={{
      backdropFilter: "blur(6px)",
      background: "rgba(38, 39, 48, 0.15)",
    }}
  >
    <motion.div
      className="relative rounded-2xl shadow-2xl mx-4 w-full max-w-md"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      style={{
        background: "linear-gradient(135deg,#312e81 0%,#4b1797 100%)", // decreased pink with stronger purple-blue
        color: "#fff",
        boxShadow: "0 8px 32px rgba(40, 40, 56, 0.24)",
      }}
    >
      <div className="p-6">
        <div className="flex justify-center mb-5">
          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              className="rounded-md max-h-32 w-auto"
              style={{ boxShadow: "0 4px 16px rgba(91,33,182,0.24)" }}
            />
          )}
        </div>
        <h3 className="text-2xl font-bold text-yellow-200 mb-2 text-center">
          {project.title}
        </h3>
        <div className="flex justify-center space-x-4 mb-4">
          {project.languages.map((lang) => (
            <span key={lang}>
              {languagesIconsMap[lang] || (
                <span className="text-gray-200">{lang}</span>
              )}
            </span>
          ))}
        </div>
        <p className="text-gray-300 text-center mb-4">{project.description}</p>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 font-semibold px-5 py-2 rounded-full transition hover:bg-gray-300"
            aria-label="Close project details"
          >
            Close
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={`View ${project.title} on GitHub`}
          >
            View on GitHub
            <FaGithub className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "Portfolio Website",
      imageUrl: "/projects/portfolio.png",
      description:
        "The personal portfolio website is built using React.js for a fast and interactive user interface, Node.js for backend logic, Tailwind CSS for modern and responsive styling, and Framer Motion for smooth animations. EmailJS integration enables seamless contact form submissions, allowing direct email communication without backend email servers. This combination creates a professional, visually appealing, and highly functional portfolio to showcase skills and projects effectively.",
      languages: ["React", "NodeJS", "TailwindCSS"],
      url: "https://yourportfolio.com",
    },
    {
      title: "Aromi Site",
      imageUrl: "/projects/aromi.png",
      description:
        "Aromi site is a specialized website for Aromi Fashion Academy, focused on pattern making and fashion designing. It is developed using React.js for a dynamic frontend experience, Node.js for backend server logic, and CSS for styling to create a modern, responsive platform tailored to the needs of fashion students and instructors.",
      languages: ["React", "NodeJS", "CSS3"],
      url: "https://github.com/Yasasmie/Aromi",
    },
    {
      title: "E-commerce Website",
      imageUrl: "/projects/thusitha.png",
      description:
        "Thusitha Engineering is a university group project that developed a full-featured e-commerce website for a hardware shop using HTML, CSS, JavaScript, PHP, and SQL. The platform offers an intuitive shopping experience with user authentication, product browsing, and order placement.My contribution focused on creating the checkout page, where I implemented three critical CRUD operations: inserting user details during checkout, editing those details in the dashboard, and deleting them as needed. Additionally, I integrated an automated email notification system that sends confirmation emails to users upon successful checkout. This part of the project ensures seamless order processing and efficient user data management through the admin dashboard.",
      languages: ["HTML5", "CSS3", "JavaScript", "PHP", "Database"],
      url: "https://github.com/Yasasmie/Thusitha-Engineering.git",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className={`min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-purple-800 px-4 sm:px-8 md:px-16 lg:px-24 py-10 sm:py-12 lg:py-16 transition-all duration-300 ${
          selectedProject ? "filter blur-sm pointer-events-none select-none" : ""
        }`}
      >
        {/* Wave animated heading */}
        <motion.h2
          className="text-yellow-200 text-4xl sm:text-5xl md:text-6xl font-extrabold mb-12 text-center flex justify-center space-x-1 select-none"
          aria-label="My Projects"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
            hidden: {},
          }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              languages={project.languages}
              delay={index * 300}
              onClick={() => setSelectedProject(project)}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            />
          ))}
        </motion.div>
      </section>

      {/* Popup for project details */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailsPopup
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
