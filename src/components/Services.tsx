import Section from "./Section";
import { motion } from "framer-motion";
import {
  Palette, Film, Camera, Sparkles, Globe, Smartphone, Wrench, Cog,
} from "lucide-react";

const services = [
  { Icon: Palette, title: "Graphic Design", desc: "Posters, identities & visual systems." },
  { Icon: Film, title: "Video Editing", desc: "Cinematic cuts with rhythm and pacing." },
  { Icon: Camera, title: "Photography", desc: "Cinematic stills, portraits & street." },
  { Icon: Sparkles, title: "Branding & Direction", desc: "Cohesive aesthetics, end-to-end." },
  { Icon: Globe, title: "Portfolio Websites", desc: "Premium, animated, Apple-feel sites." },
  { Icon: Smartphone, title: "Android Modding", desc: "Custom ROMs, kernels, theming." },
  { Icon: Wrench, title: "Rooting & Bootloader", desc: "Unlock, root, recover — safely." },
  { Icon: Cog, title: "Tech Consultation", desc: "Setup help, debloat, optimization." },
];

export default function Services() {
  return (
    <Section
      id="services"
      label="( Services )"
      title={
        <>
          What I can build
          <br />
          <span className="font-serif italic font-normal">with you.</span>
        </>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group glass hover-lift rounded-2xl p-6 min-h-52 flex flex-col justify-between cursor-default"
          >
            <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center group-hover:bg-cream group-hover:text-background transition-colors">
              <s.Icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-display text-lg text-cream mb-1.5 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
