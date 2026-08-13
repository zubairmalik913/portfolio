"use client";

import { services } from "@/data/content";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="section-padding relative bg-[var(--color-bg-elevated)] border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest">05</span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">Offerings</span>
          </div>
          <h2 className="heading-display text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-[var(--color-text-primary)] max-w-2xl">
            Comprehensive Digital Solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {/* Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="pb-8 border-b border-[var(--color-border)] mb-8 transition-colors duration-500 group-hover:border-[var(--color-accent)]/50">
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--color-text-primary)]">
                Web Development
              </h3>
            </div>
            <ul className="space-y-4">
              {services.development.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.05) }}
                  className="flex items-start gap-4 text-[var(--color-text-secondary)] text-[16px] font-light"
                >
                  <span className="mt-[0.4rem] w-1.5 h-1.5 bg-[var(--color-border-focus)] rounded-full shrink-0 group-hover:bg-[var(--color-accent)] transition-colors duration-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Google Ads */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="pb-8 border-b border-[var(--color-border)] mb-8 transition-colors duration-500 group-hover:border-[var(--color-accent)]/50">
              <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--color-text-primary)]">
                Google Ads
              </h3>
            </div>
            <ul className="space-y-4">
              {services.marketing.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.05) }}
                  className="flex items-start gap-4 text-[var(--color-text-secondary)] text-[16px] font-light"
                >
                  <span className="mt-[0.4rem] w-1.5 h-1.5 bg-[var(--color-border-focus)] rounded-full shrink-0 group-hover:bg-[var(--color-accent)] transition-colors duration-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
