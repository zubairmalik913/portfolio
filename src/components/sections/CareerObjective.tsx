"use client";

import { careerObjective } from "@/data/content";
import { useInView } from "@/components/useInView";

export default function CareerObjective() {
  const { ref, isVisible } = useInView();

  return (
    <section className="py-32 sm:py-40 bg-[var(--color-bg-elevated)] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[var(--color-border)]/50" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[var(--color-border)]/50" />
      </div>

      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto px-6 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="section-label inline-block mb-6">08</span>
          <h2 className="heading-display text-4xl sm:text-5xl mb-12">
            {careerObjective.heading}
          </h2>
          
          <div className="space-y-8 text-left sm:text-center">
            {careerObjective.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-[1.8] ${
                  i === 0
                    ? "text-[var(--color-text-primary)] font-[family-name:var(--font-display)] text-[clamp(1.25rem,2.5vw,1.75rem)] font-medium tracking-tight"
                    : "text-[var(--color-text-secondary)] text-[15px] max-w-2xl mx-auto"
                }`}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
