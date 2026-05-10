import { motion } from "framer-motion";
import {
  stats,
  summary,
  highlights,
} from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10"
    >
      <div className="grid grid-cols-12 gap-6 md:gap-8">
        {/* Left Heading */}
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff5500] mb-4">
            [ 01 ] About
          </div>

          <h2 className="font-black text-4xl md:text-5xl tracking-tighter leading-none">
            Engineer
            <br />
            <span className="text-neutral-500">
              first.
            </span>
          </h2>
        </div>

        {/* Right Content */}
        <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-4 md:gap-6">
          {/* Summary Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-8 border border-white/10 bg-[#0a0a0a] p-8"
          >
            <p className="font-mono text-base md:text-lg text-neutral-200 leading-relaxed">
              {summary}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
                Currently
              </div>

              <p className="font-mono text-sm text-neutral-400 leading-relaxed">
                Seeking a Full-Stack AI Developer
                Internship where I can build
                production-grade AI features,
                modern web systems, and
                scalable user experiences.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="border border-white/10 -mt-px -ml-px md:ml-0 p-6 bg-[#0a0a0a] hover:bg-[#111] transition-colors group"
              >
                <div className="font-black text-4xl md:text-5xl text-[#ff5500] group-hover:translate-x-1 transition-transform">
                  {s.value}
                </div>

                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <div className="col-span-12 mt-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-4">
              ▸ Highlights
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="border border-white/10 -mt-px md:-ml-px first:ml-0 p-6 bg-[#050505] flex gap-4"
                >
                  <span className="font-mono text-xs text-[#ff5500]">
                    0{i + 1}
                  </span>

                  <p className="font-mono text-sm text-neutral-300 leading-relaxed">
                    {h}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}