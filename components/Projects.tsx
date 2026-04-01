import React from "react";
import { Github } from "lucide-react";
import netflixImg from "./images/netflix.png";
import spotifyImg from "./images/spotify.png";
import speedtestImg from "./images/sppedtest.png";
import todolistImg from "./images/todolist.png";

interface Project {
  title: string;
  period: string;
  description: React.ReactNode;
  tags: string[];
  websiteUrl?: string;
  sourceUrl: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "TodoList",
    period: "February 2024 - March 2024",
    description: (
      <>
        A simple and efficient task management web app that allows users to add,
        edit, and delete tasks with a clean, user-friendly interface.
      </>
    ),
    tags: ["JavaScript", "React"],
    sourceUrl: "https://github.com/harshbhamare15/TodoList",
    image: todolistImg.src,
  },
  {
    title: "Reaction-Speed-Tester",
    period: "February 2024 - March 2024",
    description: (
      <>
        A fun and interactive game built with JavaScript that measures your
        reaction time and helps improve focus and reflex speed.
      </>
    ),
    tags: ["JavaScript", "Game UI", "Web App"],
    sourceUrl: "https://github.com/harshbhamare15/Reaction-Speed-Tester",
    image: speedtestImg.src,
  },
  {
    title: "Spotify-Clone",
    period: "February 2024 - March 2024",
    description: (
      <>
        A modern Spotify-inspired music streaming interface with playlist
        management, interactive controls, and a clean responsive layout.
      </>
    ),
    tags: ["HTML", "CSS", "JavaScript"],
    sourceUrl: "https://github.com/harshbhamare15/Spotify-Clone",
    image: spotifyImg.src,
  },
  {
    title: "Netflix-Clone",
    period: "February 2024 - March 2024",
    description: (
      <>
        A responsive Netflix-inspired web app built using HTML, CSS, and
        JavaScript, featuring a sleek UI and dynamic movie browsing experience.
      </>
    ),
    tags: ["HTML", "CSS", "Responsive Design"],
    sourceUrl: "https://github.com/harshbhamare15/Netflix-Clone",
    image: netflixImg.src,
  },
];

export default function Projects() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          My Projects
        </span>
        <h2 className="text-5xl font-stretch-1000% text-black leading-tight mb-4">
          Check out my latest work
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          I&apos;ve worked on a variety of projects, from simple websites to
          complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[16/7.5] object-cover object-top"
            />

            <div className="p-2 flex flex-col flex-1">
              <h3 className="text-base font-bold text-black leading-snug mb-1">
                {project.title}
              </h3>
              <p className="text-xs text-black mb-3">{project.period}</p>
              <div className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">
                {project.description}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 text-black px-2.5 py-1 rounded-full border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-black text-white text-sm font-medium px-2.5 py-0.5 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github size={15} />
                  Source
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
