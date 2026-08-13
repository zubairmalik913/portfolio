"use client";

import { aboutData } from "@/data/content";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Statement & Details */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest">01</span>
                <div className="h-[1px] w-8 bg-[var(--color-border)]" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-accent)] font-medium">About</span>
              </div>
              
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] tracking-tight text-[var(--color-text-primary)] mb-12">
                Building at the intersection of technology and digital growth.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              {aboutData.details.map((detail, i) => (
                <div key={detail.label} className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-[var(--color-border)] pb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] w-32 shrink-0">
                    {detail.label}
                  </span>
                  <span className="text-[14px] text-[var(--color-text-secondary)] font-medium group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                    {detail.value}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7 lg:pt-24 relative">
            {/* Animated vertical connection line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[-2rem] top-24 bottom-0 w-[1px] bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border)] to-transparent origin-top hidden lg:block"
            />
            
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[var(--color-text-secondary)] text-[16px] leading-[2] font-light">
                  <span className="text-[var(--color-text-primary)] font-medium">As a Computer Science student</span>, I am developing my expertise in building scalable, modern web applications. My approach focuses on combining strong technical foundations with practical problem-solving.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[var(--color-text-secondary)] text-[16px] leading-[2] font-light">
                  Beyond just writing code, I have <span className="text-[var(--color-text-primary)] font-medium">two years of practical experience managing Google Ads</span> campaigns. This unique background allows me to understand not just how a digital product is built, but how it reaches and converts its target audience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-[var(--color-text-secondary)] text-[16px] leading-[2] font-light">
                  My goal is to bridge the gap between development and marketing, delivering comprehensive solutions that look great, function perfectly, and achieve real business objectives.
                </p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
