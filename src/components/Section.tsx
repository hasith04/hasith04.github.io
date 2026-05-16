import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id?: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, label, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative px-6 md:px-10 py-24 md:py-36 ${className}`}>
      <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-3"
        >
          <p className="text-mono-label text-muted-foreground">{label}</p>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-9 text-display text-4xl md:text-7xl tracking-[-0.04em] leading-[1.05] text-cream"
        >
          {title}
        </motion.h2>
      </div>
      {children}
    </section>
  );
}
