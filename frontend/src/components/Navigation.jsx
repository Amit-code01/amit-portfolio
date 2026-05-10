import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX,} from "react-icons/hi";
import { navLinks, profile } from "../data/portfolio";

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const t = d.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      setTime(`IST ${t}`);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const sections = navLinks.map((l) =>
        document.getElementById(l.id)
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="font-black text-xl tracking-tight hover:text-[#ff5500] transition-colors"
        >
          {profile.initials}
          <span className="text-[#ff5500]">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                active === link.id
                  ? "text-[#ff5500]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            {time}
          </span>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 border border-[#ff5500] text-[#ff5500] hover:bg-[#ff5500] hover:text-black transition-colors"
          >
            Resume ↗
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-black overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left font-mono text-sm uppercase tracking-[0.2em] text-neutral-300"
                >
                  {link.label}
                </button>
              ))}

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.2em] px-4 py-3 border border-[#ff5500] text-[#ff5500] inline-block w-fit"
              >
                Download Résumé ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}