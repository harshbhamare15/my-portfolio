"use client";
import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      company: "MetaApply",
      role: "Student Ambassador",
      duration: "Jul 2024 - Present",
      description:
        "Represented MetaApply as a Student Ambassador, promoting global education opportunities, organizing campus outreach programs, and supporting student engagement initiatives.",
    },
    {
      company: "Edu-Versity",
      role: "Student Ambassador",
      duration: "Nov 2024 - Present",
      description:
        "Represented Edu-Versity as a Student Ambassador, promoting online learning opportunities, fostering student engagement, and supporting educational and tech-driven campus events.",
    },
  ];

  return (
    <section id="work" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-2">
      <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg tracking-wide text-center sm:text-left">
        Work Experience
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 xs:gap-5 sm:gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="p-4 xs:p-5 sm:p-6 border border-gray-700 rounded-2xl hover:bg-gray-800/50 transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl sm:text-xl md:text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm sm:text-sm text-gray-400">
              {exp.company} • {exp.duration}
            </p>
            <p className="mt-2 text-gray-300 text-sm sm:text-sm md:text-base">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
