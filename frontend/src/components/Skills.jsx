import { motion } from "framer-motion";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-white/10"
    >
      {/* Header */}
      <div className="grid grid-cols-12 gap-6 md:gap-8 mb-12">
        <div className="col-span-12 md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#ff5500] mb-4">
            [ 02 ] Tech Stack
          </div>

          <h2 className="font-black text-4xl md:text-5xl tracking-tighter leading-none">
            Tools
            <br />
            <span className="text-neutral-500">
              of trade.
            </span>
          </h2>
        </div>

        <div className="col-span-12 md:col-span-9 flex items-end">
          <p className="font-mono text-sm md:text-base text-neutral-400 max-w-2xl leading-relaxed">
            A practical technology stack
            focused on shipping scalable,
            production-grade AI systems and
            modern user experiences.
          </p>
        </div>
      </div>

      {/* Skill Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10">
        {skills.map((cat, idx) => (
          <motion.div
            key={cat.category}
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
              delay: idx * 0.08,
            }}
            className="border-white/10 -mt-px -ml-px lg:-ml-px md:[&:nth-child(2n+1)]:ml-0 lg:[&:nth-child(3n+1)]:ml-0 first:ml-0 p-8 bg-[#0a0a0a] hover:bg-[#111] transition-colors group min-h-[220px] flex flex-col"
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
            }}
          >
            {/* Top */}
            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                ///{" "}
                {String(idx + 1).padStart(
                  2,
                  "0"
                )}
              </div>

              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff5500] opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </div>
            </div>

            {/* Title */}
            <h3 className="font-black text-2xl text-white mb-5 tracking-tight">
              {cat.category}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[11px] px-3 py-1.5 border border-white/15 bg-black text-neutral-300 hover:border-[#ff5500] hover:text-[#ff5500] transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}