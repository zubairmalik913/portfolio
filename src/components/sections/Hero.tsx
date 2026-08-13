"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 20 },
  },
};

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 0.2,
    transition: { duration: 2, ease: "easeInOut", delay: 0.8 },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent opacity-50" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent opacity-50 hidden lg:block" />

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center"
        >
          {/* Left — Typography */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[var(--color-accent)]" />
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--color-accent)]">
                Full Stack Development · Google Ads
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-display text-[clamp(3.5rem,8vw,7rem)] tracking-tighter leading-[0.95]">
              <span className="block text-[var(--color-text-secondary)] font-normal text-[clamp(2rem,4vw,3.5rem)] mb-2 tracking-tight">Muhammad</span>
              Zubair<span className="text-[var(--color-accent)]">.</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4 max-w-[500px]">
              <p className="font-[family-name:var(--font-display)] text-xl sm:text-2xl text-[var(--color-text-primary)] font-medium leading-snug">
                Full Stack Developer <span className="text-[var(--color-text-muted)] font-normal">&</span> Google Ads Specialist
              </p>
              <p className="text-[var(--color-text-secondary)] text-[15px] sm:text-[16px] leading-[1.8]">
                Building modern web applications while combining technical development with practical digital marketing experience.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-text-primary)] text-[var(--color-bg-base)] text-[13px] font-bold tracking-widest uppercase overflow-hidden transition-all duration-500 hover:bg-[var(--color-accent)] hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="hidden lg:flex items-center gap-8 pt-12 border-t border-[var(--color-border)] opacity-60">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">Available For</span>
                <span className="text-[12px] font-medium text-[var(--color-text-secondary)]">Digital Solutions</span>
              </div>
              <div className="w-[1px] h-8 bg-[var(--color-border)]" />
              <div className="flex flex-col gap-1">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">Location</span>
                <span className="text-[12px] font-medium text-[var(--color-text-secondary)]">Pakistan</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Art Directed Photo */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] lg:w-[400px] lg:h-[520px]"
            >
              {/* Animated architectural frame */}
              <svg className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M 0,10 L 0,0 L 10,0"
                  fill="none"
                  stroke="var(--color-text-primary)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M 90,0 L 100,0 L 100,10"
                  fill="none"
                  stroke="var(--color-text-primary)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M 100,90 L 100,100 L 90,100"
                  fill="none"
                  stroke="var(--color-text-primary)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
                <motion.path
                  d="M 10,100 L 0,100 L 0,90"
                  fill="none"
                  stroke="var(--color-text-primary)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                />
              </svg>

              <div className="w-full h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--color-accent)] mix-blend-overlay opacity-10 z-10 transition-opacity duration-700 group-hover:opacity-0" />
                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src="/zubair2.jpeg"
                    alt="Muhammad Zubair"
                    fill
                    className="object-cover object-top grayscale-[20%] contrast-125"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 400px"
                  />
                </motion.div>
                {/* Internal gradient shadow for depth */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,6,8,0.8)] pointer-events-none z-20" />
              </div>

              {/* Floating metadata */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6"
              >
                <div className="w-[1px] h-12 bg-[var(--color-border)]" />
                <span className="text-[10px] text-[var(--color-text-muted)] tracking-[0.3em] uppercase [writing-mode:vertical-lr] rotate-180">
                  EST. 2024
                </span>
                <div className="w-[1px] h-12 bg-[var(--color-border)]" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-[10%] hidden lg:flex items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">Scroll</span>
        <div className="w-12 h-[1px] bg-[var(--color-border)] relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full w-full bg-[var(--color-accent)] origin-left"
            animate={{ scaleX: [0, 1, 0], translateX: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
