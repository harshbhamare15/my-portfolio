import React from "react";

interface Hackathon {
  logo: string;
  logoBg: string;
  name: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
  sourceUrl?: string;
  websiteUrl?: string;
}

const hackathons: Hackathon[] = [
  {
    logo: "◉",
    logoBg: "bg-green-700 text-white",
    name: "Cardano Hackathon Asia - IBW Edition, Bengaluru",
    period: "Nov 29th - Nov 30th, 2025",
    location: "Bengaluru, India",
    description:
      "Shortlisted for the Cardano Hackathon Asia 2025 – IBW Edition. Being selected among talented builders is a proud moment and motivates me to continue exploring blockchain innovations.",
    tags: ["Blockchain", "Cardano Ecosystem"],
  },
  {
    logo: "◉",
    logoBg: "bg-amber-300 text-white",
    name: "Google Cloud Agentic AI, Bengaluru",
    period: "Aug 2025",
    location: "Bengaluru, India",
    description:
      "Participated in Google Cloud Agentic AI Day, powered by Hack2skill, proposing an AI-driven solution. Gained insights into Google Cloud, Agentic AI, and collaboration on cloud-based innovations.",
    tags: ["AI Agents", "Cloud-based Innovation"],
  },
  {
    logo: "◉",
    logoBg: "bg-sky-500 text-white",
    name: "AIML Hackathon",
    period: "May 24th - May 26th, 2025",
    location: "Vadodara, India",
    description:
      "Participated in an AI-powered product innovation challenge in 2024, focusing on developing intelligent solutions for real-world problems using machine learning and automation.",
    tags: ["AI & ML", "Innovation", "Web App"],
  },
];

export default function Hackathon() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          Hackathons
        </span>
        <h2 className="text-6xl font-stretch-1000% text-black leading-tight mb-4">
          I <span className="text-[#7C3AED]">♥</span> building things
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto">
          During my time in university, I attended 3 hackathons. People from
          around the country would come together and build incredible things in
          2 –3 days. It was eye-opening to see the endless possibilities brought
          to life by a group of motivated and passionate individuals.
        </p>
      </div>

      {/* Hackathon List */}
      <div className="space-y-0">
        {hackathons.map((h, idx) => (
          <div key={idx}>
            <div className="flex gap-4 py-6">
              {/* Logo */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${h.logoBg}`}
              >
                {h.logo}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-xs text-gray-600 mb-0.5">{h.period}</p>
                <h3 className="text-base font-bold text-black mb-0.5">
                  {h.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{h.location}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {h.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {h.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-black px-2.5 py-1 rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons — only show if url exists */}
                {(h.sourceUrl || h.websiteUrl) && (
                  <div className="flex gap-2">
                    {h.sourceUrl && (
                      <a
                        href={h.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        ⚡ Source
                      </a>
                    )}
                    {h.websiteUrl && (
                      <a
                        href={h.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-black text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        🌐 Website
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            {idx < hackathons.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>
    </section>
  );
}
