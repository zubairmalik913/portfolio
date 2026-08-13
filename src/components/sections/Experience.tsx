"use client";

import { googleAdsSkills } from "@/data/content";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="section-padding bg-[var(--color-bg-elevated)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-0 w-[50vw] h-[1px] bg-gradient-to-l from-[var(--color-accent)] to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-[50vw] h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left — Narrative */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest">03</span>
                <div className="h-[1px] w-8 bg-[var(--color-border)]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">Marketing</span>
              </div>

              <h2 className="heading-display text-[clamp(2.5rem,6vw,4rem)] tracking-tighter leading-[0.9] text-[var(--color-text-primary)] mb-8">
                Google<br/>Ads<br/><span className="text-[var(--color-text-secondary)]">Specialist.</span>
              </h2>

              <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--color-border)] bg-[var(--color-bg-base)] rounded-full mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
                </span>
                <span className="text-[11px] font-mono tracking-widest text-[var(--color-text-primary)] uppercase">2 Years Experience</span>
              </div>

              <div className="space-y-6 border-l border-[var(--color-border)] pl-6">
                <p className="text-[var(--color-text-secondary)] text-[15px] leading-[1.8]">
                  I have practical experience managing Google Ads campaigns, focusing on targeted lead generation and business growth.
                </p>
                <p className="text-[var(--color-text-secondary)] text-[15px] leading-[1.8]">
                  My objective is to build campaigns that reach the right audience and improve advertising performance through careful budget management and continuous optimization.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Capabilities List */}
          <div className="lg:col-span-7">
            <div className="border-t border-[var(--color-border)]">
              {googleAdsSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative border-b border-[var(--color-border)] py-6 flex items-center justify-between cursor-default overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-[var(--color-bg-base)] origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  
                  <div className="relative z-10 flex items-center gap-6 md:gap-12 w-full px-4">
                    <span className="font-mono text-[11px] text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-[16px] sm:text-[20px] font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300 flex-1">
                      {skill}
                    </span>
                    <motion.svg
                      animate={{ x: hoveredIndex === index ? 0 : -10, opacity: hoveredIndex === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[var(--color-accent)]"
                    >
                      <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
