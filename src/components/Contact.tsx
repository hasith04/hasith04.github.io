import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin, Instagram, Camera } from "lucide-react";
import Section from "./Section";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(80),
  email: z.string().trim().email("Valid email required").max(160),
  message: z.string().trim().min(1, "Message is required").max(800),
});

const links = [
  { Icon: Mail, label: "jaihaasith@gmail.com", href: "mailto:jaihaasith@gmail.com" },
  { Icon: Github, label: "github.com/hasith04", href: "https://github.com/hasith04" },
  { Icon: Linkedin, label: "in/hasith04", href: "https://www.linkedin.com/in/hasith04" },
  { Icon: Instagram, label: "@jaiiiiiiiii________", href: "https://www.instagram.com/jaiiiiiiiii________" },
  { Icon: Camera, label: "@pixelsofjaiii", href: "https://www.instagram.com/pixelsofjaiii" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSending(true);
    setTimeout(() => {
      window.location.href = `mailto:jaihaasith@gmail.com?subject=From ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + "\n\n— " + form.email)}`;
      setSending(false);
      toast.success("Opening your mail app…");
    }, 400);
  };

  return (
    <Section
      id="contact"
      label="( Contact )"
      title={
        <>
          Have an idea?
          <br />
          <span className="font-serif italic font-normal">Let's talk.</span>
        </>
      }
    >
      <div className="grid grid-cols-12 gap-6">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-7 glass-strong rounded-3xl p-6 md:p-10 space-y-5"
        >
          {([
            { key: "name", label: "Your name", type: "text" },
            { key: "email", label: "Email", type: "email" },
          ] as const).map((f) => (
            <div key={f.key}>
              <label className="text-mono-label text-muted-foreground block mb-2">{f.label}</label>
              <input
                type={f.type}
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="w-full bg-transparent border-b border-border focus:border-cream outline-none py-3 text-lg text-cream placeholder:text-muted-foreground/50 transition-colors"
                placeholder={f.key === "name" ? "Jane Doe" : "you@example.com"}
                maxLength={f.key === "email" ? 160 : 80}
              />
            </div>
          ))}
          <div>
            <label className="text-mono-label text-muted-foreground block mb-2">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              maxLength={800}
              className="w-full bg-transparent border-b border-border focus:border-cream outline-none py-3 text-lg text-cream placeholder:text-muted-foreground/50 transition-colors resize-none"
              placeholder="Tell me what you're building…"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="group mt-4 inline-flex items-center gap-2 bg-cream text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-cream/90 transition disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send Message"}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.form>

        <div className="col-span-12 md:col-span-5 space-y-3">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group glass hover-lift rounded-2xl p-5 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl glass-strong flex items-center justify-center">
                  <l.Icon className="w-4 h-4" />
                </div>
                <span className="text-cream">{l.label}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-cream group-hover:rotate-12 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
