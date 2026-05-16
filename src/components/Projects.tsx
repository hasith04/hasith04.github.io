import Section from "./Section";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import gradient from "@/assets/gradient.jpg";

const upcoming = [
  { title: "Android Debloater Tool", tags: ["Android", "Utility"] },
  { title: "AI Fitness Tracker", tags: ["AI", "Mobile"] },
  { title: "Student Productivity App", tags: ["Productivity", "Java"] },
  { title: "Screenshot Organizer", tags: ["Utility", "AI"] },
  { title: "Local Network File Drop", tags: ["Utility", "Web"] },
];

export default function Projects() {
  return (
    <Section
      id="work"
      label="( Selected Work )"
      title={
        <>
          Shipped, building &
          <br />
          <span className="font-serif italic font-normal">soon to ship.</span>
        </>
      }
    >
      {/* Featured */}
      <motion.a
        href="#top"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="group block relative rounded-3xl overflow-hidden glass-strong mb-3 aspect-[16/9] md:aspect-[21/9]"
      >
        <img src={gradient} alt="Portfolio gradient" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="relative h-full flex flex-col justify-between p-6 md:p-12">
          <div className="flex justify-between items-start">
            <span className="text-mono-label text-cream/80">Featured · 2026</span>
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-cream group-hover:text-background transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
          <div>
            <h3 className="text-display text-4xl md:text-7xl text-cream tracking-[-0.04em] leading-[0.95]">
              Portfolio <span className="font-serif italic font-normal">Website</span>
            </h3>
            <p className="text-foreground/70 mt-3 max-w-lg">
              First software-related project — a personal modern portfolio with clean UI,
              animations and an Apple-inspired aesthetic.
            </p>
          </div>
        </div>
      </motion.a>

      {/* Upcoming grid */}
      <div className="mt-16">
        <p className="text-mono-label text-muted-foreground mb-6">Coming soon</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {upcoming.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group glass hover-lift rounded-2xl p-6 aspect-[4/3] flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(circle at 70% 30%, oklch(0.55 0.28 275 / 0.25), transparent 60%)" }} />
              <div className="relative flex justify-between items-start">
                <span className="text-mono-label text-muted-foreground">— Soon</span>
                <span className="w-2 h-2 rounded-full bg-accent/70" />
              </div>
              <div className="relative">
                <h4 className="text-display text-2xl text-cream tracking-tight mb-3 leading-tight">{p.title}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
