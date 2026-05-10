import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  HiArrowRight,
  HiDownload,
  HiMail,
} from "react-icons/hi";

import { profile } from "../data/portfolio";

const roles = [
  { line1: "FULL STACK", highlight: "AI", line2: "DEVELOPER" },
  { line1: "SOFTWARE", highlight: "DEVELOPER", line2: "ENGINEER" },
  { line1: "MERN", highlight: "STACK", line2: "DEVELOPER" },
];

export default function Hero() {
  const [index, setIndex] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(
        (prev) =>
          (prev + 1) % roles.length
      );
    }, 2500);

    return () =>
      clearInterval(interval);
  }, []);

  const current = roles[index];

  const scrollTo = (id) => {
    const el =
      document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end pb-20 pt-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Availability */}
      <div className="absolute top-20 right-6 md:right-12 lg:right-24 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#ff5500] rounded-full animate-pulse" />

          <span>
            {profile.available}
          </span>
        </div>
      </div>

      {/* Side Lines */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-px bg-white/5" />

      <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-px bg-white/5" />

      <div className="relative z-10 w-full grid grid-cols-12 gap-6">
        {/* LEFT SIDE */}
        <div className="col-span-12 md:col-span-3 mb-8 md:mb-0 flex md:flex-col justify-between md:justify-end gap-4 order-2 md:order-1">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
              [ 00 ] Portfolio · v2026
            </div>

            <div className="font-mono text-xs text-neutral-400">
              {profile.location}
            </div>
          </div>

          {/* SOCIALS */}
          <div className="hidden md:flex flex-col gap-3 mt-8">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 hover:text-[#ff5500] flex items-center gap-2 transition-colors"
            >
              <FaGithub size={14} />

              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 hover:text-[#ff5500] flex items-center gap-2 transition-colors"
            >
              <FaLinkedin size={14} />

              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 hover:text-[#ff5500] flex items-center gap-2 transition-colors"
            >
              <HiMail size={14} />

              Email
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-12 md:col-span-9 order-1 md:order-2">
          {/* TOP TEXT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[#ff5500] mb-6"
          >
            ▸ {profile.name} —{" "}
            {profile.location}
          </motion.div>

          {/* ROLE ANIMATION */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`line1-${index}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="font-black text-[14vw] md:text-[10vw] lg:text-[9vw] leading-[0.85] tracking-tighter mb-2"
              >
                {current.line1}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`line2-${index}`}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.05,
                }}
                className="font-black text-[14vw] md:text-[10vw] lg:text-[9vw] leading-[0.85] tracking-tighter mb-2"
              >
                <span className="text-[#ff5500]">
                  {current.highlight}
                </span>{" "}
                {current.line2}
<span className="inline-block w-[18px] h-[0.73em] ml-3 bg-[#ff5500] animate-[blink_2s_infinite] relative top-[0.02em]" />
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* TAGLINE */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="font-mono text-sm md:text-base text-neutral-300 max-w-2xl mt-8 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <button
              onClick={() =>
                scrollTo("projects")
              }
              className="group font-mono text-xs uppercase tracking-[0.2em] px-6 py-4 bg-[#ff5500] text-black hover:bg-[#ff7733] transition-colors flex items-center gap-3"
            >
              View Selected Work

              <HiArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-xs uppercase tracking-[0.2em] px-6 py-4 border border-white/30 text-white hover:border-[#ff5500] hover:text-[#ff5500] transition-colors flex items-center gap-3"
            >
              <HiDownload size={16} />

              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}