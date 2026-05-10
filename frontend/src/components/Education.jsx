import { motion } from "framer-motion";

import {
  HiAcademicCap,
} from "react-icons/hi";

import {
  FaAward,
} from "react-icons/fa";

import {
  education,
  certifications,
} from "../data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff5500]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <div className="grid grid-cols-12 gap-6 md:gap-8 mb-16 relative z-10">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff5500] mb-4">
            [ 04 ] Credentials
          </div>

          <h2 className="font-black text-4xl md:text-6xl tracking-tighter leading-none">
            Education
            <br />

            <span className="text-neutral-500">
              + certs.
            </span>
          </h2>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6 flex items-end">
          <p className="font-mono text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl">
            Building strong engineering
            fundamentals through academic
            learning, cloud technologies,
            and hands-on full-stack AI
            development projects.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-6 relative z-10">
        {/* EDUCATION CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="col-span-12 md:col-span-7 group relative overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-[#ff5500]/30 transition-all duration-500"
        >
          {/* CARD GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#ff5500]/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative p-8 md:p-12">
            {/* TOP */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 flex items-center justify-center">
                <HiAcademicCap
                  size={22}
                  className="text-[#ff5500]"
                />
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  Degree in Progress
                </div>

                <div className="font-mono text-xs text-[#ff5500] mt-1">
                  2023 — 2027
                </div>
              </div>
            </div>

            {/* TITLE */}
            <h3 className="font-black text-3xl md:text-4xl tracking-tight leading-tight mb-4 group-hover:text-[#ff5500] transition-colors">
              {education.degree}
            </h3>

            <p className="font-mono text-lg text-neutral-300 mb-2">
              {education.institution}
            </p>

            <p className="font-mono text-sm text-neutral-500 mb-10">
              {education.location}
            </p>

            {/* COURSEWORK */}
            <div className="pt-8 border-t border-white/10">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-5">
                Relevant Coursework
              </div>

              <div className="flex flex-wrap gap-3">
                {education.coursework.map(
                  (c) => (
                    <span
                      key={c}
                      className="font-mono text-[11px] px-4 py-2 border border-white/10 bg-black hover:border-[#ff5500]/40 hover:text-[#ff5500] transition-all duration-300"
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CERTIFICATIONS */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
          {/* HEADER CARD */}
          <motion.div
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
              duration: 0.6,
            }}
            className="border border-white/10 bg-[#050505] p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/5 blur-3xl rounded-full" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full border border-[#ff5500]/30 bg-[#ff5500]/10 flex items-center justify-center">
                  <FaAward
                    size={18}
                    className="text-[#ff5500]"
                  />
                </div>

                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                  Certifications
                </span>
              </div>

              <h3 className="font-black text-2xl tracking-tight">
                Verified
                <br />
                Cloud Learning
              </h3>
            </div>
          </motion.div>

          {/* CERTIFICATION LIST */}
          {certifications.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
              }}
              className="group relative overflow-hidden border border-white/10 bg-[#0a0a0a] hover:border-[#ff5500]/30 transition-all duration-500"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#ff5500]/5 via-transparent to-transparent" />

              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-black text-lg md:text-xl leading-tight mb-2 group-hover:text-[#ff5500] transition-colors">
                      {c.name}
                    </div>

                    <div className="font-mono text-xs text-neutral-500">
                      {c.issuer}
                    </div>
                  </div>

                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#ff5500] border border-[#ff5500]/30 px-3 py-1 bg-[#ff5500]/5">
                    {c.code}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}