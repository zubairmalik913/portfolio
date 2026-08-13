"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="section-padding bg-[var(--color-bg-base)] border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest">06</span>
              <div className="h-[1px] w-8 bg-[var(--color-border)]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">Academic</span>
            </div>
            <h2 className="heading-display text-[clamp(2rem,4vw,3rem)] tracking-tight text-[var(--color-text-primary)]">
              Education
            </h2>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 lg:pt-14 relative"
          >
            {/* Animated Left Border */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute left-0 top-0 bottom-0 w-[1px] bg-[var(--color-accent)] origin-top hidden md:block"
            />
            
            <div className="md:pl-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,2vw,2rem)] font-bold text-[var(--color-text-primary)] tracking-tight">
                  BSc Computer Science
                </h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-[var(--color-border)] text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-secondary)]">
                  Currently Pursuing
                </span>
              </div>
              <p className="text-[var(--color-text-secondary)] text-[16px] leading-[1.8] font-light max-w-2xl">
                My academic background provides me with a strong foundation in programming, software engineering, databases, and modern web technologies. This formal education complements my practical, self-driven learning and hands-on project experience.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
