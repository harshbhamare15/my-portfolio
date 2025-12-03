"use client";

export default function Hackathons() {
  return (
    <section
      id="hackathons"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 sm:my-20 py-2"
    >
      <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg tracking-wide text-center sm:text-left">
        Hackathon
      </h2>
      <h3 className="text-gray-400 text-base sm:text-lg text-center mb-2">
        I 💗 building things
      </h3>
      <p className="text-gray-400 text-sm sm:text-lg text-center mb-8 leading-relaxed">
        During my time in university, I attended 3 hackathons. People from
        around the country would come together and build incredible things in 2
        –3 days. It was eye-opening to see the endless possibilities brought to
        life by a group of motivated and passionate individuals.
      </p>

      {/* Hackathon Cards */}
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Card 1 */}
        <div className="relative border border-gray-700 hover:bg-gray-800/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-blue-800/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r to-transparent blur-2xl -z-10" />
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">
            May 24th - May 26th, 2025
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
            AIML Hackathon @ Parul University
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
            Offline
            <br />
            Participated in an AI-powered product innovation challenge in 2024,
            focusing on developing intelligent solutions for real-world problems
            using machine learning and automation.
          </p>
          <div className="flex flex-wrap items-center gap-1 xs:gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full">
              AI & ML
            </span>
            <span className="text-xs sm:text-sm bg-purple-500/10 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">
              Innovation
            </span>
            <span className="text-xs sm:text-sm bg-pink-500/10 text-pink-400 border border-pink-500/30 px-3 py-1 rounded-full">
              2025
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative border border-gray-700 hover:bg-gray-800/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-blue-800/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r to-transparent blur-2xl -z-10" />
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">
            Aug 2025
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
            Google Cloud Agentic AI, Bengaluru
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
            Offline
            <br />
            Participated in Google Cloud Agentic AI Day, powered by Hack2skill,
            proposing an AI-driven solution. Gained insights into Google Cloud,
            Agentic AI, and collaboration on cloud-based innovations.
          </p>
          <div className="flex flex-wrap items-center gap-1 xs:gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full">
              AI Agents
            </span>
            <span className="text-xs sm:text-sm bg-purple-500/10 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">
              Cloud-based Innovation
            </span>
            <span className="text-xs sm:text-sm bg-pink-500/10 text-pink-400 border border-pink-500/30 px-3 py-1 rounded-full">
              2025
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative border border-gray-700 hover:bg-gray-800/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-blue-800/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r to-transparent blur-2xl -z-10" />
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-4">
            Nov 29th - Nov 30th, 2025
          </p>
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
            Cardano Hackathon Asia - IBW Edition, Bengaluru
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
            Offline
            <br />
            Shortlisted for the Cardano Hackathon Asia 2025 – IBW Edition. Being
            selected among talented builders is a proud moment and motivates me
            to continue exploring blockchain innovations.
          </p>
          <div className="flex flex-wrap items-center gap-1 xs:gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full">
              Blockchain
            </span>
            <span className="text-xs sm:text-sm bg-purple-500/10 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">
              Cardano Ecosystem
            </span>
            <span className="text-xs sm:text-sm bg-pink-500/10 text-pink-400 border border-pink-500/30 px-3 py-1 rounded-full">
              2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
