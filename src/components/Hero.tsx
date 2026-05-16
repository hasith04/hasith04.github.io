import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Instagram, Camera } from "lucide-react";
import profile from "@/assets/profile.jpg";
import profile2 from "@/assets/profile2.jpg";
import profile3 from "@/assets/profile3.jpg";
import gradient from "@/assets/gradient.jpg";

const socials = [
  { Icon: Github, href: "https://github.com/hasith04", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/hasith04", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/jaiiiiiiiii________", label: "Instagram" },
  { Icon: Camera, href: "https://www.instagram.com/pixelsofjaiii", label: "Pixels of Jaiii" },
];

const fade: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  const [front, setFront] = useState<0 | 1 | 2>(0);
  const cycle = () => setFront((f) => ((f + 1) % 3) as 0 | 1 | 2);
  const posFor = (i: 0 | 1 | 2) => {
    const offset = (i - front + 3) % 3; // 0 = front, 1 = middle, 2 = back
    if (offset === 0) return { rotate: 3, x: 0, y: 0, zIndex: 3 };
    if (offset === 1) return { rotate: -6, x: -28, y: 24, zIndex: 2 };
    return { rotate: 9, x: 28, y: 40, zIndex: 1 };
  };
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden noise pt-32 pb-10">
      {/* Ambient glow */}
      <div
        className="glow-blob animate-float"
        style={{
          width: 600,
          height: 600,
          top: "30%",
          left: "55%",
          background: "radial-gradient(circle, oklch(0.55 0.28 275) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-blob"
        style={{
          width: 400,
          height: 400,
          top: "10%",
          left: "10%",
          background: "radial-gradient(circle, oklch(0.6 0.2 230) 0%, transparent 70%)",
          opacity: 0.3,
        }}
      />

      <div className="relative z-10 px-6 md:px-10 grid grid-cols-12 gap-6 items-end min-h-[80vh]">
        {/* Left meta */}
        <motion.div
          variants={fade}
          custom={0}
          initial="hidden"
          animate="show"
          className="col-span-12 md:col-span-3 space-y-2"
        >
          <p className="text-mono-label text-muted-foreground">Freelance Designer</p>
          <p className="text-mono-label text-muted-foreground">& CSE Student — Apollo Univ.</p>
        </motion.div>

        <motion.div
          variants={fade}
          custom={1}
          initial="hidden"
          animate="show"
          className="col-span-12 md:col-span-6 space-y-2"
        >
          <p className="text-mono-label text-muted-foreground">Specializing in</p>
          <p className="text-mono-label text-foreground">
            Creative design · Android modding · Modern web
          </p>
        </motion.div>

        <motion.a
          href="#about"
          variants={fade}
          custom={2}
          initial="hidden"
          animate="show"
          className="hidden md:flex col-span-3 items-center justify-end gap-2 text-mono-label text-muted-foreground hover:text-foreground transition"
        >
          [Scroll] <ArrowDown className="w-3 h-3" />
        </motion.a>

        {/* Massive name */}
        <div className="col-span-12 -mt-2">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-display text-cream leading-[0.85] text-[18vw] md:text-[15vw] tracking-[-0.06em] whitespace-nowrap"
            style={{ fontWeight: 500 }}
          >
            Jai <span className="font-serif italic font-normal text-cream/90">Hasith</span>
          </motion.h1>
        </div>
      </div>

      {/* Bottom row with portrait + intro */}
      <div className="relative z-10 px-6 md:px-10 mt-10 grid grid-cols-12 gap-6 items-end">
        <motion.div
          variants={fade}
          custom={5}
          initial="hidden"
          animate="show"
          className="col-span-12 md:col-span-5 space-y-6"
        >
          <p className="text-lg md:text-xl text-foreground/90 max-w-md leading-relaxed">
            Passionate about technology, Android customization, digital creativity, and modern web
            experiences — crafted with intent.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group flex items-center gap-2 bg-cream text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-cream/90 transition-all"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="glass flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-all"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-2 pt-2">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 glass rounded-full flex items-center justify-center hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-4 md:col-start-8 md:-translate-x-6 lg:-translate-x-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl"
              style={{ background: `url(${gradient}) center/cover` }}
            />

            {/* Card C - third */}
            <motion.button
              type="button"
              onClick={cycle}
              aria-label="Bring photo to front"
              animate={posFor(2)}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="absolute inset-0 aspect-[4/5] rounded-3xl overflow-hidden glass-strong origin-bottom-left cursor-pointer"
            >
              <img src={profile3} alt="Jai Hasith" className="w-full h-full object-cover" />
            </motion.button>

            {/* Card B - second */}
            <motion.button
              type="button"
              onClick={cycle}
              aria-label="Bring photo to front"
              animate={posFor(1)}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="absolute inset-0 aspect-[4/5] rounded-3xl overflow-hidden glass-strong origin-bottom-left cursor-pointer"
            >
              <img src={profile2} alt="Jai Hasith" className="w-full h-full object-cover" />
            </motion.button>

            {/* Card A - first (anchor) */}
            <motion.button
              type="button"
              onClick={cycle}
              aria-label="Bring photo to front"
              animate={posFor(0)}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong origin-bottom-left cursor-pointer block w-full text-left"
            >
              <img
                src={profile}
                alt="Jai Hasith — portrait"
                className="w-full h-full object-cover"
                width={896}
                height={1152}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
