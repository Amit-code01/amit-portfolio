import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";

import {
  HiArrowUpRight,
} from "react-icons/hi2";

import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff5500]/5 blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="grid grid-cols-12 gap-6 md:gap-8 mb-16 relative z-10">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff5500] mb-4">
            [ 03 ] Selected Work
          </div>

          <h2 className="font-black text-4xl md:text-5xl tracking-tighter leading-none">
            Shipped
            <br />
            <span className="text-neutral-500">
              to prod.
            </span>
          </h2>
        </div>

        <div className="col-span-12 md:col-span-9 flex items-end">
          <p className="font-mono text-sm md:text-base text-neutral-400 max-w-2xl leading-relaxed">
            Real-world AI-powered products
            built from scratch — from UI and
            backend architecture to deployment
            and AI integrations.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-0 relative z-10">
        {projects.map((p, idx) => (
          <motion.article
            key={p.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
            }}
            className="group border-t border-white/10 last:border-b py-12 md:py-16 grid grid-cols-12 gap-4 md:gap-8 hover:bg-[#0a0a0a]/80 transition-all duration-500 px-2 md:px-4 backdrop-blur-sm"
          >
            {/* Number */}
            <div className="col-span-2 md:col-span-1 font-mono text-xs md:text-sm text-[#ff5500] tracking-[0.2em] pt-2">
              {String(idx + 1).padStart(
                2,
                "0"
              )}
            </div>

            {/* Left */}
            <div className="col-span-10 md:col-span-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
                {p.year} · {p.tagline}
              </div>

              <h3 className="font-black text-3xl md:text-5xl tracking-tighter leading-[0.95] mb-4 transition-all duration-500 group-hover:text-[#ff5500] group-hover:translate-x-1">
                {p.name}
              </h3>

              <div className="flex flex-wrap items-center gap-4">
                {/* GitHub */}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-[#ff5500] transition-colors"
                >
                  <FaGithub size={14} />

                  View Code

                  <HiArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                {/* Live Demo */}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-[#ff5500] transition-colors"
                  >
                    Live Demo

                    <HiArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-4">
              <p className="font-mono text-sm text-neutral-300 leading-relaxed mb-5">
                {p.description}
              </p>

              <ul className="space-y-2">
                {p.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="font-mono text-xs text-neutral-500 flex gap-2 leading-relaxed"
                  >
                    <span className="text-[#ff5500]">
                      ▸
                    </span>

                    {b}
                  </li>
                ))}
              </ul>
            </div>

{/* Image */}
<div className="col-span-12 md:col-span-3">
  <div
    className="
      relative overflow-hidden
      border border-white/10
      aspect-[4/3]
      bg-black rounded-sm
      transition-all duration-500
      group-hover:scale-[1.04]
      group-hover:-translate-y-2
      group-hover:shadow-[0_0_40px_rgba(255,85,0,0.18)]
      group-hover:border-[#ff5500]/40
    "
  >
    {/* Glow Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff5500]/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

{p.video ? (
  <video
    src={p.video}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
) : (
  <img
    src={p.image}
    alt={p.name}
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />
)}

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

    {/* Shine Effect */}
    <div className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/10 skew-x-[-25deg] group-hover:left-[140%] transition-all duration-1000 z-20" />

    {/* Stack */}
    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-20">
      {p.stack
        .slice(0, 3)
        .map((s, i) => (
          <span
            key={i}
            className="
              font-mono text-[9px]
              px-2 py-1
              bg-black/80 backdrop-blur
              border border-white/20
              text-neutral-200
              uppercase tracking-wider
            "
          >
            {s}
          </span>
        ))}
    </div>
  </div>
</div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}