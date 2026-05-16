import { motion } from "framer-motion";
import Section from "./Section";

const stats = [
  { k: "Beginner", v: "Java Developer" },
  { k: "Creative", v: "Designer" },
  { k: "Android", v: "Modding Enthusiast" },
  { k: "Video", v: "Editor" },
  { k: "Pixels", v: "Photographer" },
];

const interests = [
  "Custom ROMs", "Bootloader Unlocking", "AI Tools", "Web Tech", "Productivity Apps", "Branding",
];

export default function About() {
  return (
    <Section
      id="about"
      label="( About )"
      title={
        <>
          A student building at the
          <br />
          <span className="font-serif italic font-normal">intersection</span> of code & creative.
        </>
      }
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 space-y-6">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            B.Tech in Computer Science and Engineering at{" "}
            <span className="text-foreground">Apollo University</span>. Passionate about software
            development, Android customization, creative design, photography, and digital
            experiences that feel intentional.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            I move between writing Java, flashing custom ROMs, framing photographs at golden hour,
            and shaping minimal interfaces. The thread is the same — care for the craft, regardless
            of the medium.
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {interests.map((i) => (
              <span
                key={i}
                className="glass rounded-full px-4 py-1.5 text-xs text-muted-foreground"
              >
                {i}
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3">
          {stats.map((s, idx) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="glass hover-lift rounded-2xl p-5 aspect-square flex flex-col justify-between"
            >
              <span className="text-mono-label text-muted-foreground">{s.k}</span>
              <span className="text-display text-2xl tracking-tight text-cream">{s.v}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
