"use client";

import { motion } from "framer-motion";

const educationData = [
  {
    icon: "🎓",
    title: "B.Tech - Computer Science Engineering",
    subtitle: "Parul Institute of Technology",
    period: "2024 - 2028",
  },
  {
    icon: "🏫",
    title:
      "Smt. P.A.S Sarvajanik Marathi Highschool and A.M. Vhora Junior College",
    subtitle: "Higher Secondary Education, PCMB",
    period: "2023",
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-14 py-2">
      <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg tracking-wide text-center sm:text-left">
        Education
      </h2>

      <div className="space-y-6 sm:space-y-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="relative group hover:bg-gray-800/50 rounded-2xl border border-gray-700 overflow-hidden shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 items-start">
              {/* Icon Tile */}
              <div className="w-16 h-16 rounded-xl bg-gray-800/70 backdrop-blur-lg flex items-center justify-center text-3xl shadow-md border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {edu.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {edu.title}
                </h3>
                <p className="text-gray-300 mt-2">{edu.subtitle}</p>
                <span className="text-blue-300 text-sm font-medium mt-2">
                  {edu.period}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
