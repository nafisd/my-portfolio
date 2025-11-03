"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedHero() {
  const fullText =
    "Nafis is a Front-End Developer with an engineering background, passionate about crafting modern, responsive, and user-friendly applications. Skilled in Laravel (Blade) and Flutter, he builds scalable web and mobile interfaces with a strong focus on clean UI/UX and maintainable design.";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(id);
    }, 35);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-10">
      {/* Profile Image */}
      <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0">
        <motion.img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* Text */}
      <div className="flex-1 text-left space-y-4">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight"
        >
          Nafis Difaudin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-2xl text-gray-300 leading-relaxed"
        >
          {text}
          <span className="inline-block w-1 h-6 bg-white ml-1 align-middle animate-pulse" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href="https://github.com/yourusername"
            data-magnet
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="mailto:yourmail@example.com"
            data-magnet
            className="border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
