import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Photo", href: "#photo" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5"
    >
      <div className="flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl glass-strong flex items-center justify-center">
            <span className="text-display text-sm">JH</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm px-4 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block" />

        <a
          href="#contact"
          className="md:hidden flex items-center gap-1.5 glass rounded-full px-4 py-2 text-sm"
        >
          Talk <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.header>
  );
}
