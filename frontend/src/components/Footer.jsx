import { profile } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 md:px-12 lg:px-24 py-10">
      <div className="grid grid-cols-12 gap-4 items-end">
        <div className="col-span-12 md:col-span-6">
          <div className="font-black text-5xl md:text-7xl tracking-tighter leading-none">
            {profile.name.split(" ")[0]}
            <span className="text-[#ff5500]">
              .
            </span>
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          <div>
            Built with React + Tailwind
          </div>

          <div className="mt-1">
            No templates · designed
            end-to-end
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 md:text-right font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          © {year} {profile.name}

          <div className="mt-1 text-neutral-600">
            All rights reserved
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-12 pt-6 border-t border-white/5 overflow-hidden">
        <div className="flex marquee whitespace-nowrap gap-12 font-black text-3xl md:text-5xl tracking-tighter text-neutral-800">
          {Array.from({ length: 2 }).map(
            (_, k) => (
              <span
                key={k}
                className="flex gap-12"
              >
                <span>
                  AVAILABLE FOR HIRE
                </span>

                <span className="text-[#ff5500]">
                  ★
                </span>

                <span>
                  FULL STACK · AI · LLM
                </span>

                <span className="text-[#ff5500]">
                  ★
                </span>

                <span>
                  RAG · PROMPT ENG ·
                  NEXT.JS
                </span>

                <span className="text-[#ff5500]">
                  ★
                </span>

                <span>
                  SHIPPING TO PROD
                </span>

                <span className="text-[#ff5500]">
                  ★
                </span>
              </span>
            )
          )}
        </div>
      </div>
    </footer>
  );
}