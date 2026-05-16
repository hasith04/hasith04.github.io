import Section from "./Section";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section
      id="experience"
      label="( Experience )"
      title={
        <>
          A timeline that's
          <br />
          <span className="font-serif italic font-normal">just beginning.</span>
        </>
      }
    >
      <div className="relative max-w-4xl">
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-border via-border/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pl-14 md:pl-20"
        >
          <div className="absolute left-2.5 md:left-4.5 top-2 w-3 h-3 rounded-full bg-cream shadow-[0_0_24px_oklch(0.55_0.28_275)]" />
          <div className="glass-strong rounded-3xl p-6 md:p-8 hover-lift">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
              <span className="text-mono-label text-muted-foreground">May 2026 — Jun 2026 · 45 Days</span>
              <span className="text-mono-label text-muted-foreground">Internship</span>
            </div>
            <h3 className="text-display text-2xl md:text-4xl text-cream mb-2 tracking-tight">
              Java Intern <span className="text-muted-foreground font-serif italic font-normal">at</span> Slash Mark
            </h3>
            <p className="text-foreground/80 leading-relaxed max-w-2xl">
              Working on Java programming, problem-solving, and software development fundamentals —
              translating textbook patterns into code that ships.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
