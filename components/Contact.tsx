import React from "react";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-6 pb-22 text-center">
      {/* Badge */}
      <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
        Contact
      </span>

      {/* Heading */}
      <h2 className="text-5xl font-black text-black mb-5">Get in Touch</h2>

      {/* Description */}
      <p className="text-gray-500 text-base max-w-lg mx-auto leading-relaxed">
        Want to chat or Hire me? Just shoot me a dm{" "}
        <a
          href="https://x.com/i/chat/pin/new?from=%2Fi%2Fchat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline hover:text-blue-500 transition-colors"
        >
          with a direct question on twitter
        </a>{" "}
        and I&apos;ll respond as fast as possible to discuss the possibilities.
        I will ignore all soliciting.
      </p>
    </section>
  );
}
