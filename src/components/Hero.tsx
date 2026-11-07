"use client";

import { useState, useEffect } from "react";
import { Star, Sparkles, Phone, Shield, Award, ChevronDown } from "lucide-react";

const HERO_STATS = [
  { icon: Star, label: "5.0 Rating", sub: "Verified reviews" },
  { icon: Shield, label: "Guaranteed", sub: "Results or we continue free" },
  { icon: Award, label: "15 Years", sub: "In Hollywood" },
  { icon: Sparkles, label: "98% Success", sub: "Client outcomes" },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden noise-overlay"
    >
      {/* Background with spotlight image and dark gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms]"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/33625502/pexels-photo-33625502.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            transform: `scale(1.1) translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/80 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-transparent to-ink-950/40" />
      </div>

      {/* Atmospheric glowing ambient lights */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-gold-400/10 blur-[100px] animate-float-slow" />
        <div
          className="absolute bottom-1/4 right-[15%] w-96 h-96 rounded-full bg-accent-500/8 blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-[5%] w-48 h-48 rounded-full bg-gold-300/8 blur-[80px] animate-float-slow"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 sm:pb-20 w-full">
        <div className="max-w-3xl">
          {/* Review badge */}
          <div
            className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-glass-light border-glass mb-6 transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex -space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 text-gold-400 fill-gold-400"
                />
              ))}
            </div>
            <span className="text-xs text-ink-200 font-medium">
              247 five-star reviews · Hollywood, CA
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.08] sm:leading-[1.05] tracking-tight transition-all duration-700 delay-100 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-ink-50">Perform at the </span>
            <span className="text-gradient-gold">absolute edge</span>
            <span className="text-ink-50"> of what you&apos;re capable of.</span>
          </h1>

          {/* Subtext */}
          <p
            className={`mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-ink-300 leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Elite performance coaching for actors, performers, and public speakers in
            Hollywood. Master exertion, preserve your vessel, and deliver under the
            highest stakes — with science-driven protocols used by the world&apos;s
            top performers.
          </p>

          {/* CTAs */}
          <div
            className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3.5 sm:gap-4 transition-all duration-700 delay-500 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#quest"
              className="group relative inline-flex items-center justify-center gap-2 gradient-gold text-ink-950 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
            >
              <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 fill-ink-950" />
                Begin Your Quest
              </span>
            </a>

            <a
              href="tel:4246539123"
              className="group inline-flex items-center justify-center gap-2 bg-glass-light border-glass text-ink-50 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:border-gold-400/40 hover:bg-gold-400/5 transition-all duration-300"
            >
              <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
              <span>Call (424) 653-9123</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div
            className={`mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 transition-all duration-700 delay-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-100">
                    {stat.label}
                  </div>
                  <div className="text-xs text-ink-400">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-xs text-ink-400 tracking-[0.2em] uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-gold-400/60" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
