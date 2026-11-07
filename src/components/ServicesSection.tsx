"use client";

import { useState } from "react";
import { Drama, HeartPulse, BrainCircuit, Flame, Check, ChevronDown, ArrowRight } from "lucide-react";

interface Protocol {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  duration: string;
  benefits: string[];
  icon: typeof Drama;
}

const PROTOCOLS: Protocol[] = [
  {
    id: "acting-exertion",
    number: "01",
    title: "Acting Exertion Mastery",
    short: "Push your emotional and physical range to the absolute edge.",
    description:
      "A rigorous training protocol that expands your emotional bandwidth, physical stamina, and psychological endurance. You learn to sustain peak exertion on command — delivering performances that feel raw, alive, and utterly truthful under any condition.",
    benefits: [
      "Sustained emotional intensity without burnout",
      "Physical stamina for demanding multi-take scenes",
      "On-demand access to deep emotional reserves",
      "Recovery techniques between takes and performances",
    ],
    icon: Drama,
    duration: "12-week intensive",
  },
  {
    id: "vessel-preservation",
    number: "02",
    title: "Vessel Preservation",
    short: "Protect and maintain your instrument for a career that lasts decades.",
    description:
      "Your body and voice are your instrument. This protocol teaches you how to preserve, restore, and strengthen your physical vessel — addressing tension patterns, vocal health, postural integrity, and nervous system regulation so you can perform at your peak for decades, not seasons.",
    benefits: [
      "Vocal health and projection without strain",
      "Tension release and postural realignment",
      "Nervous system regulation for performance anxiety",
      "Longevity strategies for a sustainable career",
    ],
    icon: HeartPulse,
    duration: "Ongoing program",
  },
  {
    id: "performance-science",
    number: "03",
    title: "Performance Science Protocols",
    short: "Evidence-based methods drawn from sports psychology and neuroscience.",
    description:
      "A systematic approach grounded in sports psychology, cognitive neuroscience, and behavioural science. You receive customised protocols for focus, arousal regulation, mental rehearsal, and flow-state induction — the same frameworks used by Olympic athletes and elite military operators, adapted for the stage and screen.",
    benefits: [
      "Flow-state induction on demand",
      "Pre-performance arousal regulation",
      "Mental rehearsal and visualisation frameworks",
      "Cognitive resilience under high-stakes pressure",
    ],
    icon: BrainCircuit,
    duration: "8-week protocol",
  },
  {
    id: "high-stakes-training",
    number: "04",
    title: "High-Stakes Performance Training",
    short: "Deliver your best work when everything is on the line.",
    description:
      "Designed for the audition that changes your career, the keynote that defines your reputation, or the live performance that cannot fail. This training simulates high-stakes environments and trains you to access your full capacity under pressure — turning adrenaline from an enemy into fuel.",
    benefits: [
      "Audition transformation under real pressure",
      "Live performance reliability and consistency",
      "Crisis management and recovery mid-performance",
      "Choking prevention and reversal protocols",
    ],
    icon: Flame,
    duration: "6-week intensive",
  },
];

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-850 to-ink-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            What We Do
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.15] sm:leading-[1.1] tracking-tight">
            Four protocols.{" "}
            <span className="text-gradient-gold">One transformation.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Each program is engineered to address a specific dimension of your
            performance. Together, they create a complete system for elite
            capability under pressure.
          </p>
        </div>

        {/* Protocols Grid */}
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-4 sm:gap-6">
          {PROTOCOLS.map((protocol) => {
            const Icon = protocol.icon;
            const isExpanded = expandedId === protocol.id;

            return (
              <div
                key={protocol.id}
                className={`group relative rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer ${
                  isExpanded
                    ? "bg-ink-800 border-gold-400/30 shadow-gold"
                    : "bg-glass-light border-glass hover:border-gold-400/20"
                }`}
                onClick={() => toggleExpand(protocol.id)}
              >
                {/* Glow ambient background element */}
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gold-400/5 blur-3xl group-hover:bg-gold-400/10 transition-all duration-700 pointer-events-none" />

                <div className="relative p-6 sm:p-8 lg:p-10">
                  {/* Top Row: Icon + Large Number */}
                  <div className="flex items-start justify-between mb-5 sm:mb-6">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/20 transition-all duration-500 group-hover:scale-110">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400" />
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gold-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <span className="font-display text-4xl sm:text-5xl font-bold text-ink-700 group-hover:text-gold-400/20 transition-colors duration-500">
                      {protocol.number}
                    </span>
                  </div>

                  {/* Title & Short description */}
                  <h3 className="font-display text-2xl font-bold text-ink-50 mb-3">
                    {protocol.title}
                  </h3>
                  <p className="text-ink-300 leading-relaxed mb-4">
                    {protocol.short}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 text-xs font-semibold mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                    {protocol.duration}
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-ink-200 text-sm leading-relaxed pt-4 border-t border-white/5">
                        {protocol.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {protocol.benefits.map((benefit) => (
                          <li
                            key={benefit}
                            className="flex items-start gap-2 text-sm text-ink-200"
                          >
                            <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <a
                          href={`/services/${protocol.id}`}
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>Explore Full Syllabus & Outcomes</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-gold-300 font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300">
                      {isExpanded ? "Show less" : "Learn more"}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                    <a
                      href="#quest"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm text-ink-400 hover:text-gold-300 font-medium flex items-center gap-1 transition-all duration-300 hover:gap-2"
                    >
                      <span>Enroll</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#quest"
            className="group relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 overflow-hidden px-8 py-4 text-base gradient-gold text-ink-950 shadow-gold hover:shadow-gold-lg hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
            <span className="relative z-10 flex items-center gap-2">
              Find Your Perfect Program
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

