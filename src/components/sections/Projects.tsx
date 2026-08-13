"use client";

import { projects } from "@/data/content";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-[var(--color-bg-base)]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest">04</span>
            <div className="h-[1px] w-8 bg-[var(--color-border)]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">Selected Work</span>
          </div>
          <h2 className="heading-display text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-[var(--color-text-primary)]">
            Digital Products
          </h2>
        </motion.div>

        <div className="border-t border-[var(--color-border)]">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative border-b border-[var(--color-border)] py-12 md:py-16 transition-colors duration-500 hover:border-[var(--color-accent)]/30"
            >
              {/* Subtle background glow on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-[var(--color-bg-elevated)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -mx-6 px-6 sm:-mx-12 sm:px-12`}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
                {/* Meta & Title */}
                <div className="md:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[12px] text-[var(--color-text-muted)] block mb-6 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                      {project.number}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className="hidden md:flex items-center gap-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">View Details</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transform group-hover:translate-x-2 transition-transform duration-500 ease-out">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
                    </svg>
                  </div>
                </div>

                {/* Description & Tech */}
                <div className="md:col-span-7 flex flex-col justify-between md:pl-8 lg:pl-16 md:border-l border-[var(--color-border)] transition-colors duration-500 group-hover:border-[var(--color-border-hover)]">
                  <p className="text-[var(--color-text-secondary)] text-[16px] sm:text-[18px] leading-[1.8] font-light mb-12 max-w-xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono tracking-widest text-[var(--color-text-muted)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-4 py-2 transition-all duration-300 group-hover:border-[var(--color-border-focus)] group-hover:text-[var(--color-text-secondary)] uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
