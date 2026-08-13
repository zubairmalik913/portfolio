"use client";

import { motion } from "framer-motion";

const flowSteps = [
  { label: "Frontend", detail: "HTML / CSS / JS", align: "left" },
  { label: "Backend", detail: "Node.js / Express.js", align: "right" },
  { label: "Database", detail: "MongoDB / SQL", align: "left" },
  { label: "Digital Experience", detail: "Performant & Accessible", align: "center", isHighlight: true },
  { label: "Google Ads", detail: "Targeted Campaigns", align: "right" },
  { label: "Lead Generation", detail: "Business Growth", align: "center", isHighlight: true },
];

export default function FullStack() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-[var(--color-border)]">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[var(--color-border)]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">Unique Value</span>
            <div className="h-[1px] w-12 bg-[var(--color-border)]" />
          </div>
          
          <h2 className="heading-display text-[clamp(2rem,5vw,3.5rem)] tracking-tight text-[var(--color-text-primary)] mb-6">
            Technology <span className="text-[var(--color-text-muted)] font-light mx-2">×</span> Digital Marketing
          </h2>
          <p className="text-[var(--color-text-secondary)] text-[16px] md:text-[18px] leading-[1.8] max-w-2xl mx-auto font-light">
            Understanding both how digital products are built from the ground up, and how to position them so customers actually find them.
          </p>
        </motion.div>

        {/* The Flow Diagram */}
        <div className="relative py-12 max-w-[600px] mx-auto">
          {/* Central Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--color-border-focus)] to-transparent origin-top -translate-x-1/2"
          />

          <div className="flex flex-col gap-12 relative">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center justify-center w-full`}
              >
                {/* Visual node on the central line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--color-bg-base)] border border-[var(--color-accent)] rotate-45 z-10" />
                
                <div 
                  className={`w-1/2 ${
                    step.align === "left" 
                      ? "pr-12 text-right self-start -ml-[50%]" 
                      : step.align === "right" 
                      ? "pl-12 text-left self-end ml-[50%]"
                      : "text-center !w-full bg-[var(--color-bg-base)] z-20 px-8"
                  }`}
                >
                  <h3 className={`font-[family-name:var(--font-display)] text-[clamp(1.25rem,3vw,1.75rem)] font-bold tracking-tight ${step.isHighlight ? "text-[var(--color-accent)]" : "text-[var(--color-text-primary)]"}`}>
                    {step.label}
                  </h3>
                  <p className="text-[12px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] mt-2 font-medium">
                    {step.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
