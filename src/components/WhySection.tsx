"use client";

import { Shield, Award, Zap, Heart, Users, Target, ArrowRight } from "lucide-react";

interface Feature {
  icon: typeof Shield;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Shield,
    title: "Guaranteed Results",
    description:
      "If you fully engage with the protocol and do not experience meaningful improvement, we continue working with you at no additional cost until you do.",
  },
  {
    icon: Award,
    title: "Proven Methodology",
    description:
      "15 years in Hollywood refining a system that has transformed over 1,200 performers. Our protocols are built on sports psychology, neuroscience, and real-world results.",
  },
  {
    icon: Zap,
    title: "Science-Driven",
    description:
      "No vague coaching platitudes. Every technique is grounded in evidence-based performance science — the same frameworks used by Olympic athletes and elite military operators.",
  },
  {
    icon: Heart,
    title: "Vessel-First Philosophy",
    description:
      "We protect and strengthen your instrument first. Most coaching ignores the body and voice. We start there, because a broken instrument cannot perform.",
  },
  {
    icon: Users,
    title: "Elite Community",
    description:
      "Join a network of serious, committed performers who push each other to excel. Our community is selective, supportive, and relentlessly focused on growth.",
  },
  {
    icon: Target,
    title: "Custom-Calibrated",
    description:
      "No generic programs. Every protocol is designed specifically for your instrument, your goals, and the demands of your craft. Your training is as unique as you are.",
  },
];

export default function WhySection() {
  return (
    <section className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-850 to-ink-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            Why Ezekiel
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.1] tracking-tight">
            The difference is{" "}
            <span className="text-gradient-gold">structural</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            We do not offer tips and notes. We engineer performers. Here is what
            sets us apart from every coaching program you have encountered.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative h-full p-7 rounded-2xl bg-glass-light border-glass hover-lift hover:border-gold-400/25 transition-all duration-500 overflow-hidden"
              >
                {/* Radial gold bloom in top right on hover */}
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gold-400/5 blur-3xl group-hover:bg-gold-400/12 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink-50 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Button */}
        <div className="mt-14 text-center">
          <a
            href="#quest"
            className="group relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 overflow-hidden px-8 py-4 text-base gradient-gold text-ink-950 shadow-gold hover:shadow-gold-lg hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
            <span className="relative z-10 flex items-center gap-2">
              Experience the Difference
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

