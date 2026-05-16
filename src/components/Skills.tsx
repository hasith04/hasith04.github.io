import Section from "./Section";
import { motion } from "framer-motion";

const tech = [
  { name: "Java", level: 70 },
  { name: "Python (Basic)", level: 45 },
  { name: "Web Fundamentals", level: 60 },
  { name: "Android Modding", level: 88 },
  { name: "Bootloader & Root", level: 85 },
  { name: "Custom ROMs", level: 82 },
  { name: "System Tweaking", level: 78 },
];

const creative = [
  "Graphic Design", "Photography", "Video Editing", "Branding", "Creative Direction",
];

export default function Skills() {
  return (
    <Section
      id="skills"
      label="( Skills )"
      title={
        <>
          Tools I reach for —
          <br />
          <span className="font-serif italic font-normal">technical & creative.</span>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 glass-strong rounded-3xl p-6 md:p-10">
          <p className="text-mono-label text-muted-foreground mb-8">Technical</p>
          <div className="space-y-5">
            {tech.map((t, i) => (
              <div key={t.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground">{t.name}</span>
                  <span className="text-muted-foreground tabular-nums">{t.level}%</span>
                </div>
                <div className="h-px bg-border relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-cream to-accent"
                    style={{ height: "1.5px", top: "-0.25px" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 space-y-3">
          <div className="glass-strong rounded-3xl p-6 md:p-8">
            <p className="text-mono-label text-muted-foreground mb-6">Creative</p>
            <div className="flex flex-wrap gap-2">
              {creative.map((c) => (
                <span
                  key={c}
                  className="rounded-full px-4 py-2 text-sm border border-border bg-white/[0.02] hover:bg-white/[0.06] transition"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden">
            <div className="glow-blob" style={{
              width: 300, height: 300, top: "-50%", right: "-30%",
              background: "radial-gradient(circle, oklch(0.55 0.28 275) 0%, transparent 70%)",
            }} />
            <p className="text-mono-label text-muted-foreground mb-2 relative">Always learning</p>
            <p className="text-display text-2xl text-cream tracking-tight relative leading-snug">
              Curiosity is the <span className="font-serif italic font-normal">only</span> real prerequisite.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
