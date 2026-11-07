"use client";

import { useState } from "react";
import { TrendingUp, ChevronRight, ArrowRight } from "lucide-react";

interface CaseStudy {
  name: string;
  category: string;
  problem: string;
  solution: string;
  process: string;
  results: string[];
  image: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    name: "The Transformation of M.W.",
    category: "Acting Exertion Mastery",
    problem:
      'A talented but restrained actor consistently told by casting directors he was "too safe." His performances were technically correct but emotionally flat. He was losing roles to actors with half his training.',
    solution:
      "A 12-week exertion mastery intensive focused on breaking through his emotional ceiling. We used progressive physical and psychological overload to expand his capacity for vulnerability, rage, grief, and joy.",
    process:
      "Weeks 1-4: Baseline exertion mapping and emotional range assessment. Weeks 5-8: Progressive overload with real-time scene work. Weeks 9-12: Integration under simulated audition and on-set conditions.",
    results: [
      "Booked series regular role within 6 weeks of completion",
      'Cast director feedback shifted from "safe" to "electric"',
      "Emotional range expanded by 340% per assessment metrics",
    ],
    image:
      "https://images.pexels.com/photos/6896221/pexels-photo-6896221.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    name: "The Executive Who Found Her Voice",
    category: "Performance Science Protocols",
    problem:
      "A senior executive delivering keynotes to 5,000+ audiences experienced debilitating performance anxiety. Despite deep expertise, she would freeze, rush, and lose command of the room.",
    solution:
      "An 8-week performance science protocol combining arousal regulation, flow-state training, and mental rehearsal. We rebuilt her relationship with adrenaline from threat to fuel.",
    process:
      "Weeks 1-2: Neurological assessment and anxiety mapping. Weeks 3-5: Arousal regulation protocols and breathing frameworks. Weeks 6-8: Live simulation with increasing audience sizes and stakes.",
    results: [
      "Delivered keynote to 8,000 with zero anxiety symptoms",
      "Speaking invitations increased 3x within one quarter",
      "Self-reported confidence: 4/10 → 9/10",
    ],
    image:
      "https://images.pexels.com/photos/9275222/pexels-photo-9275222.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    name: "The Performer Who Lasted",
    category: "Vessel Preservation",
    problem:
      "A Broadway lead experiencing vocal strain and physical exhaustion by Wednesday of each week. His doctor recommended reducing his schedule. His career was at risk.",
    solution:
      "A comprehensive vessel preservation program addressing vocal technique, postural alignment, tension patterns, and nervous system recovery. We rebuilt his instrument from the ground up.",
    process:
      "Month 1: Vocal assessment and technique reconstruction. Month 2: Postural and tension pattern correction. Month 3: Integration into 8-show weeks with ongoing monitoring.",
    results: [
      "Completed full 8-show weeks with zero vocal incidents",
      "Recovery time between performances reduced by 60%",
      "Contract extended for additional 18 months",
    ],
    image:
      "https://images.pexels.com/photos/6899930/pexels-photo-6899930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = CASE_STUDIES[activeTab];

  return (
    <section id="case-studies" className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-850" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            Case Studies
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.1] tracking-tight">
            Proof, not <span className="text-gradient-gold">promises</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Detailed accounts of real transformations. The problem, the protocol,
            and the measurable results.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.name}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? "gradient-gold text-ink-950 shadow-gold"
                  : "bg-glass-light border-glass text-ink-300 hover:text-gold-300 hover:border-gold-400/25"
              }`}
            >
              {study.category}
            </button>
          ))}
        </div>

        {/* Case Study Content Grid */}
        <div
          key={activeTab}
          className="mt-12 grid lg:grid-cols-5 gap-8 animate-fade-up"
        >
          {/* Left Column (Image & Badge) */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-premium">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs text-gold-300 font-semibold tracking-[0.2em] uppercase mb-1">
                  {current.category}
                </div>
                <h3 className="font-display text-xl font-bold text-ink-50">
                  {current.name}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column (Problem, Solution, Process, Results) */}
          <div className="lg:col-span-3 space-y-5">
            {/* The Problem */}
            <div className="rounded-2xl bg-glass-light border-glass p-5">
              <div className="text-xs text-red-400/80 uppercase tracking-wider mb-2 font-semibold">
                The Problem
              </div>
              <p className="text-ink-200 leading-relaxed text-sm">
                {current.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="rounded-2xl bg-glass-light border-glass p-5">
              <div className="text-xs text-gold-400 uppercase tracking-wider mb-2 font-semibold">
                The Solution
              </div>
              <p className="text-ink-200 leading-relaxed text-sm">
                {current.solution}
              </p>
            </div>

            {/* The Process */}
            <div className="rounded-2xl bg-glass-light border-glass p-5">
              <div className="text-xs text-accent-400 uppercase tracking-wider mb-2 font-semibold">
                The Process
              </div>
              <p className="text-ink-200 leading-relaxed text-sm">
                {current.process}
              </p>
            </div>

            {/* The Results */}
            <div className="rounded-2xl bg-gold-400/5 border border-gold-400/20 p-5">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-gold-400" />
                <span className="text-xs text-gold-400 uppercase tracking-wider font-semibold">
                  The Results
                </span>
              </div>
              <ul className="space-y-2">
                {current.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-2 text-sm text-ink-100"
                  >
                    <ChevronRight className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <a
            href="#quest"
            className="group relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 overflow-hidden px-8 py-4 text-base gradient-gold text-ink-950 shadow-gold hover:shadow-gold-lg hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
            <span className="relative z-10 flex items-center gap-2">
              Start Your Transformation
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

