"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Canva",
  "Git",
  "Github",
  "C",
  "Java",
  "Python",
  "SQL",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-2">
      <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg tracking-wide text-center sm:text-left">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center sm:justify-start gap-2 xs:gap-3 sm:gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            className="flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 xs:py-3 sm:py-4 rounded-full
                       bg-gradient-to-tr hover:bg-blue-500/20 border border-blue-400
                       backdrop-blur-sm shadow-sm hover:shadow-md
                       transition-transform duration-200 hover:-translate-y-1 cursor-pointer
                       text-xs sm:text-sm font-medium text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
