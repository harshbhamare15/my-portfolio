"use client";

const projects = [
  {
    title: "Netflix-Clone",
    desc: "A responsive Netflix-inspired web app built using HTML, CSS, and JavaScript, featuring a sleek UI and dynamic movie browsing experience.",
    link: "https://github.com/harshbhamare15/Netflix-Clone",
    tags: ["HTML", "CSS"],
  },
  {
    title: "Spotify-Clone",
    desc: "A modern Spotify-inspired music streaming interface with playlist management, interactive controls, and a clean responsive layout.",
    link: "https://github.com/harshbhamare15/Spotify-Clone",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Reaction-Speed-Tester",
    desc: "A fun and interactive game built with JavaScript that measures your reaction time and helps improve focus and reflex speed.",
    link: "https://github.com/harshbhamare15/Reaction-Speed-Tester",
    tags: ["JavaScript", "Game UI", "Web App"],
  },
  {
    title: "TodoList",
    desc: "A simple and efficient task management web app that allows users to add, edit, and delete tasks with a clean, user-friendly interface.",
    link: "https://github.com/harshbhamare15/TodoList",
    tags: ["JavaScript", "React"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-14 py-2"
    >
      <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg tracking-wide text-center sm:text-left">
        Project
      </h2>
      <h3 className="text-gray-400 text-base sm:text-lg text-center mb-2">
        Check out my latest work
      </h3>
      <p className="text-gray-400 text-sm sm:text-lg text-center mb-8 leading-relaxed">
        I’ve worked on a variety of projects — from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border border-gray-700 hover:bg-gray-800/50 rounded-2xl p-4 xs:p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-white">
              {p.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1 xs:gap-2 mb-4">
              {p.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs sm:text-sm bg-blue-500/10 text-blue-400 border border-blue-500/30 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm sm:text-base font-medium text-blue-400 hover:text-blue-300 transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
