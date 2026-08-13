"use client";

import { learningItems } from "@/data/content";
import { motion } from "framer-motion";

export default function Learning() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bg-subtle)] border-t border-[var(--color-border)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest">07</span>
              <div className="h-[1px] w-8 bg-[var(--color-border)]" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">Growth</span>
            </div>
            <h2 className="heading-display text-[clamp(2rem,4vw,3rem)] tracking-tight text-[var(--color-text-primary)]">
              Currently Learning
            </h2>
          </div>
          <p className="text-[var(--color-text-secondary)] text-[14px] font-light max-w-sm mb-2">
            Continuously expanding my technical stack through hands-on practice and real-world implementation.
          </p>
        </motion.div>
      </div>

      {/* Flowing Typographic List */}
      <div className="relative w-full flex overflow-x-hidden border-y border-[var(--color-border)] py-8 bg-[var(--color-bg-base)]">
        <motion.div
          className="flex whitespace-nowrap items-center gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {/* We duplicate the array to create a seamless loop */}
          {[...learningItems, ...learningItems].map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-8">
              <span className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300 select-none">
                {item}
              </span>
              <span className="text-[var(--color-accent)] opacity-50">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
