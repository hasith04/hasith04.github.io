import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative px-6 md:px-10 pt-20 pb-10 border-t border-border">
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 md:col-span-8">
          <h3 className="text-display text-5xl md:text-8xl tracking-[-0.05em] leading-[0.9] text-cream">
            Let's build<br />something <span className="font-serif italic font-normal">good</span>.
          </h3>
        </div>
        <div className="col-span-12 md:col-span-4 flex md:justify-end items-end">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 glass rounded-full pl-5 pr-2 py-2 hover:bg-white/10 transition"
          >
            <span className="text-sm">Back to top</span>
            <span className="w-9 h-9 rounded-full bg-cream text-background flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-mono-label text-muted-foreground">
        <span>© 2026 Jai Hasith Chinnakotla</span>
        <span>Designed & Built by Jai Hasith</span>
        <span>v1.0 — Apollo University</span>
      </div>
    </footer>
  );
}
