import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const educationData = [
  {
    title: "BSc (Hons) in Computer Science",
    subtitle: "University of Bedfordshire",
    period: "2025 - Present",
    motion: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
  },
  {
    title: "Higher National Diploma in IT",
    subtitle: "SLIIT CITY UNI",
    period: "2023 - 2025",
    motion: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
  },
  {
    title: "Foundation in IT",
    subtitle: "SLIIT CITY UNI",
    period: "2022 - 2023",
    motion: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
  },
  {
    title: "GCE Ordinary Level Examination",
    subtitle: "St. Joseph's Balika Maha Vidyalaya",
    period: "2010 - 2021",
    motion: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
  },
];

const gradients = [
  { from: "#1e40af", via: "#2563eb", to: "#1e3a8a" },
  { from: "#4c1d95", via: "#6b21a8", to: "#7c3aed" },
];

const TagCard = ({
  number,
  title,
  subtitle,
  period,
  details,
  gradient,
  right,
  motionProps,
}) => (
  <motion.div
    {...motionProps}
    transition={{ duration: 0.8, ease: "easeOut", delay: number * 0.3 }}
    className="relative flex w-full max-w-4xl mx-auto my-8"
    style={{ minHeight: 140 }}
  >
    {/* Tag shape */}
    <div
      className={`flex-1 flex items-center ${right ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`h-[110px] ${
          right ? "w-[72%] rounded-l-full rounded-r-none pl-20 pr-6" : "w-[70%] rounded-r-full pr-20 pl-6"
        } shadow-lg flex items-center`}
        style={{
          background: `linear-gradient(135deg, ${gradient.from} 0%, ${gradient.via} 50%, ${gradient.to} 100%)`,
          boxShadow: "0 8px 32px 0 rgb(80 80 160 / 25%)",
        }}
      >
        <div className={`text-white leading-tight ${right ? "text-right w-full" : ""}`}>
          <div className="font-extrabold text-3xl mb-1">{title}</div>
          <div className="text-blue-200 uppercase text-base font-semibold mb-1">{subtitle}</div>
          <div className="text-blue-300 text-sm font-semibold mb-3">{period}</div>
          {details && <div className="text-white text-lg leading-relaxed">{details}</div>}
        </div>
      </div>
    </div>
    {/* Overlapping Circular Number - switched side */}
    <div
      className={`absolute top-1/2 -translate-y-1/2 z-20 ${
        right ? "left-0 ml-0 sm:ml-6" : "right-0 mr-0 sm:mr-6"
      }`}
    >
      <div
        className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-200 font-bold text-2xl select-none"
        style={{ color: gradient.from, fontFamily: "Montserrat, Arial, sans-serif" }}
      >
        <span>{number.toString().padStart(2, "0")}</span>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const waveText = "Education".toUpperCase().split("");
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

  return (
    <section
      id="education"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 px-6 sm:px-12 md:px-20 py-12 flex flex-col items-center"
    >
      <motion.h2
        className="text-yellow-400 text-6xl font-extrabold mb-12 text-center flex justify-center space-x-2 select-none"
        aria-label="Education"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {waveText.map((letter, index) =>
          letter === " " ? (
            <span key={index} style={{ width: "0.6em" }} />
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

      <div className="w-full flex flex-col space-y-6">
        {educationData.map((card, idx) => (
          <TagCard
            key={card.title}
            number={idx + 1}
            title={card.title}
            subtitle={card.subtitle}
            period={card.period}
            details={card.details}
            gradient={gradients[idx % gradients.length]}
            right={idx % 2 === 1}
            motionProps={
              inView
                ? { initial: { opacity: 0, x: idx % 2 === 0 ? -100 : 100 }, animate: { opacity: 1, x: 0 } }
                : { initial: { opacity: 0, x: 0 }, animate: { opacity: 0, x: 0 } }
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
