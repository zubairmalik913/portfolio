"use client";

import { siteConfig } from "@/data/content";
import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zubair-malik-3854503a0",
    href: siteConfig.linkedin,
  },
  {
    label: "Instagram",
    value: "@zubair.malik913",
    href: siteConfig.instagram,
  },
  {
    label: "Facebook",
    value: siteConfig.facebookContact,
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[var(--color-bg-base)] border-t border-[var(--color-border)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {/* Subtle background architecture */}
        <div className="absolute left-[10%] top-0 bottom-0 w-[1px] bg-white" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left - Large Statement */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest">08</span>
                <div className="h-[1px] w-8 bg-[var(--color-border)]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">Contact</span>
              </div>

              <h2 className="heading-display text-[clamp(3rem,6vw,5rem)] tracking-tighter leading-[1] text-[var(--color-text-primary)] mb-8">
                Let&apos;s Build
                <br />
                Something
                <br />
                <span className="text-[var(--color-text-secondary)]">Useful.</span>
              </h2>

              <p className="text-[var(--color-text-secondary)] text-[16px] leading-[1.8] font-light max-w-md mb-12">
                Whether it&apos;s a scalable web application, backend system, or targeted digital advertising campaign, I&apos;m interested in working on practical solutions that create real value.
              </p>

              {/* Ensure button is visible (white bg, dark text) and links to LinkedIn per user request */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-[13px] font-bold tracking-widest uppercase overflow-hidden transition-all duration-500 hover:bg-[var(--color-accent)] hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get in Touch
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M1 13L13 1M13 1H5M13 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right - Contact List */}
          <div className="lg:col-span-6 lg:pt-24">
            <div className="border-t border-[var(--color-border)]">
              {contactLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 border-b border-[var(--color-border)] py-8 transition-colors duration-500 hover:border-[var(--color-border-hover)]"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] w-32 shrink-0">
                    {link.label}
                  </span>
                  
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="font-[family-name:var(--font-display)] text-[16px] sm:text-[18px] font-medium text-[var(--color-text-secondary)] sm:text-right break-all transition-colors duration-300 hover:text-[var(--color-text-primary)]"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <span className="font-[family-name:var(--font-display)] text-[16px] sm:text-[18px] font-medium text-[var(--color-text-secondary)] sm:text-right break-all cursor-default">
                      {link.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
