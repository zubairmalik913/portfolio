import { siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[var(--color-border)] bg-[var(--color-bg-base)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tighter text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 inline-block mb-2"
              aria-label="Back to top"
            >
              MZ<span className="text-[var(--color-accent)]">.</span>
            </a>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] font-medium">
              {siteConfig.title}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">LinkedIn</a>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-[12px] uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300">Instagram</a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[12px] text-[var(--color-text-secondary)]">
              © {new Date().getFullYear()} {siteConfig.name}.
            </p>
            <p className="text-[10px] text-[var(--color-text-muted)] mt-2 uppercase tracking-widest">
              Independent Creative
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
