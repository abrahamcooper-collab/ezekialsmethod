"use client";

import { ScanSearch, PenTool, Swords, Trophy } from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: typeof ScanSearch;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Assessment & Calibration",
    description:
      "We begin with a comprehensive evaluation of your current performance capabilities — physical, emotional, vocal, and cognitive. You receive a detailed calibration report identifying your strengths, blind spots, and highest-leverage growth areas.",
    icon: ScanSearch,
  },
  {
    number: "02",
    title: "Protocol Design",
    description:
      "Based on your assessment, we design a bespoke training protocol. Every exercise, drill, and intervention is selected specifically for your instrument, your goals, and the demands of your craft. No generic programs. No wasted effort.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Immersive Training",
    description:
      "You enter intensive, hands-on training sessions — in person at our Hollywood studio or via private sessions. Each session builds on the last, with real-time feedback, pressure simulations, and progressive overload designed to expand your capacity.",
    icon: Swords,
  },
  {
    number: "04",
    title: "Integration & Mastery",
    description:
      "We integrate your new capabilities into real-world contexts — auditions, performances, presentations. You receive ongoing support, refinement, and advanced protocols to ensure your skills compound and your edge sharpens over time.",
    icon: Trophy,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-850 via-ink-900 to-ink-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            The Method
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.1] tracking-tight">
            A process that feels{" "}
            <span className="text-gradient-gold">effortless</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Four precisely engineered steps that take you from where you are to
            the absolute edge of your capability.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20 relative">
          {/* Vertical central guide line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-400/30 to-transparent" />

          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={step.number}
                className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Center glowing icon node */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl gradient-gold flex items-center justify-center shadow-gold">
                      <Icon className="w-6 h-6 text-ink-950" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl gradient-gold blur-lg opacity-40 animate-pulse-glow" />
                  </div>
                </div>

                {/* Content block */}
                <div
                  className={`flex-1 ml-20 lg:ml-0 ${
                    isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                  }`}
                >
                  <div className="inline-block">
                    <span className="font-display text-6xl font-bold text-ink-700 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-bold text-ink-50">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-ink-300 leading-relaxed max-w-md lg:inline-block">
                    {step.description}
                  </p>
                </div>

                {/* Empty column for alternating balance on desktop */}
                <div className="hidden lg:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

