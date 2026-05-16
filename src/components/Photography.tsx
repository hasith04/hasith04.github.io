import { useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import p1 from "@/assets/photo1.jpg";
import p2 from "@/assets/photo2.jpg";
import p3 from "@/assets/photo3.jpg";
import p4 from "@/assets/photo4.jpg";
import p5 from "@/assets/photo5.jpg";

const photos = [
  { src: p1, caption: "Frame 01" },
  { src: p2, caption: "Frame 02" },
  { src: p3, caption: "Frame 03" },
  { src: p4, caption: "Frame 04" },
  { src: p5, caption: "Frame 05" },
];

export default function Photography() {
  const [front, setFront] = useState(0);
  const cycle = () => setFront((f) => (f + 1) % photos.length);

  const posFor = (i: number) => {
    const offset = (i - front + photos.length) % photos.length;
    // Spread cards fanned out behind the front one
    const configs = [
      { rotate: 3, x: 0, y: 0 },
      { rotate: -6, x: -36, y: 28 },
      { rotate: 8, x: 36, y: 44 },
      { rotate: -10, x: -64, y: 60 },
      { rotate: 12, x: 64, y: 76 },
    ];
    const c = configs[Math.min(offset, configs.length - 1)];
    return { ...c, zIndex: photos.length - offset };
  };

  return (
    <Section
      id="photo"
      label="( Pixels of Jaiii )"
      title={
        <>
          Frames I've
          <br />
          <span className="font-serif italic font-normal">held still.</span>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-5 space-y-4">
          <p className="text-lg text-foreground/80 max-w-md leading-relaxed">
            A stack of moments — click any frame to bring it forward.
          </p>
          <p className="text-mono-label text-muted-foreground">
            {String(front + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")} ·{" "}
            {photos[front].caption}
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5]">
            {photos.map((p, i) => (
              <motion.button
                key={p.caption}
                type="button"
                onClick={cycle}
                aria-label={`Bring ${p.caption} to front`}
                animate={posFor(i)}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className="absolute inset-0 rounded-3xl overflow-hidden glass-strong origin-bottom-left cursor-pointer"
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <a
          href="https://www.instagram.com/pixelsofjaiii"
          target="_blank"
          rel="noreferrer"
          className="glass rounded-full px-6 py-3 text-sm hover:bg-white/10 transition"
        >
          See more on @pixelsofjaiii →
        </a>
      </div>
    </Section>
  );
}
