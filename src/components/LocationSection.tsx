"use client";

import { MapPin, Navigation, Star, Phone, ArrowRight } from "lucide-react";

const SERVING_AREAS = [
  "Hollywood",
  "West Hollywood",
  "Los Feliz",
  "Silver Lake",
  "Burbank",
  "Studio City",
  "North Hollywood",
  "Downtown LA",
  "Beverly Hills",
  "Bel Air",
  "Pacific Palisades",
  "Santa Monica",
];

const LOCATION_FACTS = [
  { icon: Star, label: "5.0 Google Rating", sub: "247 reviews" },
  { icon: MapPin, label: "Hollywood 90068", sub: "Central location" },
  { icon: Phone, label: "(424) 653-9123", sub: "Call for appointment" },
  { icon: Star, label: "Chamber Member", sub: "Hollywood, CA" },
];

export default function LocationSection() {
  return (
    <section className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            Hollywood, California
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.1] tracking-tight">
            Based in the heart of{" "}
            <span className="text-gradient-gold">Hollywood</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Our studio sits in the epicentre of the entertainment world —
            surrounded by the studios, theatres, and stages where our clients
            perform.
          </p>
        </div>

        {/* Content 2-Column Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column: Visual Map / Theatre Image */}
          <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden shadow-premium group">
            <img
              src="https://images.pexels.com/photos/17727343/pexels-photo-17727343.jpeg?auto=compress&cs=tinysrgb&w=940"
              alt="Hollywood El Capitan Studio Location"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-transparent" />

            {/* Glowing Map Pin in Center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-gold-lg animate-pulse-glow">
                  <MapPin className="w-7 h-7 text-ink-950" />
                </div>
                <div className="absolute -inset-4 rounded-full border border-gold-400/30 animate-ping pointer-events-none" />
              </div>
            </div>

            {/* Address Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-glass-strong border-glass">
              <div className="flex items-center gap-3">
                <Navigation className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <div className="font-semibold text-ink-50 text-sm">
                    Hollywood, CA 90068
                  </div>
                  <div className="text-xs text-ink-400">By appointment only</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Studio details & Location attributes */}
          <div className="flex flex-col h-full">
            {/* Top Studio Highlight */}
            <div className="flex gap-4 mb-6">
              <img
                src="https://images.pexels.com/photos/36148709/pexels-photo-36148709.jpeg?auto=compress&cs=tinysrgb&w=940"
                alt="Studio proximity"
                className="w-24 h-24 rounded-2xl object-cover shrink-0"
              />
              <div>
                <h3 className="font-display text-xl font-bold text-ink-50 mb-1">
                  Minutes from the studios
                </h3>
                <p className="text-sm text-ink-300 leading-relaxed">
                  Walking distance from Paramount Pictures and minutes from every
                  major studio in the Hollywood area. Our clients train between
                  auditions, between takes, and between shows.
                </p>
              </div>
            </div>

            {/* 2x2 Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {LOCATION_FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.label}
                    className="p-4 rounded-2xl bg-glass-light border-glass"
                  >
                    <Icon className="w-5 h-5 text-gold-400 mb-2" />
                    <div className="text-sm font-semibold text-ink-100">
                      {fact.label}
                    </div>
                    <div className="text-xs text-ink-400">{fact.sub}</div>
                  </div>
                );
              })}
            </div>

            {/* Serving Performers Across */}
            <div>
              <div className="text-xs text-gold-400 font-semibold tracking-[0.2em] uppercase mb-3">
                Serving Performers Across
              </div>
              <div className="flex flex-wrap gap-2">
                {SERVING_AREAS.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-full bg-glass-light border-glass text-xs text-ink-300 font-medium hover:text-gold-300 hover:border-gold-400/25 transition-all duration-300 cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Schedule CTA */}
            <div className="mt-auto pt-6">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 overflow-hidden px-8 py-4 text-base gradient-gold text-ink-950 shadow-gold hover:shadow-gold-lg hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
                <span className="relative z-10 flex items-center gap-2">
                  Schedule a Studio Visit
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

