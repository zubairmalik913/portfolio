"use client";

import { skillsData } from "@/data/content";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding bg-[var(--color-bg-subtle)] relative border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest">02</span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">Technical Expertise</span>
          </div>
          <h2 className="heading-display text-[clamp(2rem,5vw,3rem)] tracking-tight text-[var(--color-text-primary)]">
            Core Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: groupIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredCategory(group.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative"
            >
              {/* Category Header */}
              <div className="flex items-baseline gap-4 mb-6 pb-4 border-b border-[var(--color-border)] transition-colors duration-500 group-hover:border-[var(--color-accent)]/50">
                <span className="font-mono text-[10px] text-[var(--color-text-muted)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  0{groupIdx + 1}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-[14px] font-bold tracking-widest uppercase text-[var(--color-text-primary)]">
                  {group.category}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {group.items.map((skill, skillIdx) => (
                  <motion.li
                    key={skill}
                    animate={{
                      x: hoveredCategory === group.category ? 8 : 0,
                      color: hoveredCategory === group.category ? "var(--color-text-primary)" : "var(--color-text-secondary)"
                    }}
                    transition={{ duration: 0.3, delay: skillIdx * 0.03, ease: "easeOut" }}
                    className="flex items-center gap-3 text-[14px] font-medium"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredCategory === group.category ? 1 : 0 }}
                      className="w-1 h-1 bg-[var(--color-accent)] rounded-full"
                    />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
