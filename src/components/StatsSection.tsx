"use client";

import { useState, useEffect, useRef } from "react";
import { Users, Award, TrendingUp, Star } from "lucide-react";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: typeof Users;
}

const STATS_DATA: StatItem[] = [
  { label: "Clients Trained", value: 1200, suffix: "+", icon: Users },
  { label: "Years in Hollywood", value: 15, suffix: "", icon: Award },
  { label: "Success Rate", value: 98, suffix: "%", icon: TrendingUp },
  { label: "5-Star Reviews", value: 247, suffix: "", icon: Star },
];

const TRUST_BADGES = [
  "Featured in Backstage",
  "Hollywood Chamber Member",
  "SAG-AFTRA Trusted Coach",
  "Award-Winning Methodology",
];

function useCountUp(target: number, duration: number = 2000, start: boolean = true) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({ stat }: { stat: StatItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animatedValue = useCountUp(stat.value, 2000, inView);
  const Icon = stat.icon;

  return (
    <div ref={cardRef} className="relative group">
      <div className="relative p-8 rounded-2xl bg-glass-light border-glass hover-lift hover:border-gold-400/30 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
        {/* Ambient glow behind card on hover */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold-400/5 blur-2xl group-hover:bg-gold-400/10 transition-all duration-500 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-gold-400" />
            </div>
            <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold tabular-nums">
              {animatedValue}
              {stat.suffix}
            </div>
          </div>
          <div className="text-sm text-ink-300 font-medium">{stat.label}</div>
        </div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase">
            By the Numbers
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-ink-50 tracking-tight">
            A track record built on{" "}
            <span className="text-gradient-gold">results</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {STATS_DATA.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>

        {/* Trust credentials badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 lg:gap-12">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-ink-400 hover:text-gold-300 transition-colors duration-300 cursor-default"
            >
              <Star className="w-4 h-4 text-gold-400/60" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

