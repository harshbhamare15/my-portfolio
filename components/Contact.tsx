"use client";

export default function Contact() {
  return (
    <section className="relative px-4 sm:px-6 md:px-16 py-2 sm:py-15 -mt-20">
      <h2 className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg tracking-wide text-center sm:text-left">
        Contact
      </h2>
      <div className="flex flex-col items-center text-center sm:items-center sm:text-center">
        <h3 className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8">
          Get in Touch
        </h3>
        <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-10 leading-relaxed max-w-full sm:max-w-lg">
          Want to chat or Hire me? Just shoot me a dm with a direct question on
          twitter and I&apos;ll respond as fast as possible to discuss the
          possibilities. I will ignore all soliciting.
        </p>
        <a
          href="https://x.com/messages"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 mb-6 sm:mb-10"
        >
          Send Message
        </a>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-4 sm:mt-10">
          <a
            href="https://github.com/harshbhamare15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/harshbhamare15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/harshbhamare15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transition-colors duration-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
