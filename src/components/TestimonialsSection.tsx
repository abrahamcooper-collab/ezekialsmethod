"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Whitfield",
    role: "Series Lead, Streaming Drama",
    quote:
      "I walked into Ezekiel's studio a competent actor. I walked out a force. The exertion work unlocked something I didn't know I had. My agent asked what changed. Everything changed.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/6456297/pexels-photo-6456297.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Elena Rodriguez",
    role: "TEDx Speaker & Executive",
    quote:
      "I had given presentations to boards for fifteen years and still got sick before every one. The performance science protocols rewired my relationship with pressure. My last keynote, I felt invincible.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/8761542/pexels-photo-8761542.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "James Chen",
    role: "Broadway Performer",
    quote:
      "The vessel preservation work saved my career. Eight shows a week was destroying my voice. Now I finish a run and feel like I could do eight more. This is not coaching. This is mastery engineering.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/6767251/pexels-photo-6767251.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Sofia Almeida",
    role: "Award-Nominated Film Actress",
    quote:
      "The high-stakes training is unlike anything I've encountered. Ezekiel creates pressure that feels real, then teaches you to thrive in it. I booked the lead in my last film because of what I learned here.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/8872474/pexels-photo-8872474.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "David Okafor",
    role: "Motivational Speaker",
    quote:
      "I speak to audiences of ten thousand. After training with Ezekiel, I command them. The difference between good and magnetic is technique, and this is where you learn it.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/8847168/pexels-photo-8847168.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Aria Thompson",
    role: "Theatre Director & Coach",
    quote:
      "I've been in this industry for twenty years and I send every serious actor to Ezekiel. The results are not incremental. They are transformational. This is the gold standard.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/8847179/pexels-photo-8847179.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(5);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = TESTIMONIALS[activeIndex];
  const gridReviews = TESTIMONIALS.slice(0, 3);

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-24 lg:py-32 noise-overlay overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            Client Voices
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.15] sm:leading-[1.1] tracking-tight">
            What performers{" "}
            <span className="text-gradient-gold">say</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            247 five-star reviews from actors, speakers, and performers who
            transformed their craft.
          </p>
        </div>

        {/* Featured Testimonial Card Carousel */}
        <div
          className="mt-10 sm:mt-14 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-3xl bg-glass-strong border-glass p-6 sm:p-8 lg:p-12 shadow-premium overflow-hidden">
            {/* Giant decorative quotation mark */}
            <div className="absolute top-4 sm:top-6 right-6 sm:right-8 opacity-10 pointer-events-none">
              <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-gold-400" />
            </div>

            <div key={activeIndex} className="animate-fade-in">
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-5 sm:mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 sm:w-5 h-4 sm:h-5 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-display text-lg sm:text-2xl lg:text-3xl text-ink-50 leading-relaxed font-medium mb-6 sm:mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-gold-400/30"
                />
                <div>
                  <div className="font-semibold text-ink-50">{current.name}</div>
                  <div className="text-sm text-gold-300">{current.role}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls & Pagination Dots */}
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full bg-glass-light border-glass flex items-center justify-center text-ink-200 hover:text-gold-300 hover:border-gold-400/30 transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-8 gradient-gold"
                      : "w-2 bg-ink-600 hover:bg-ink-500"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-glass-light border-glass flex items-center justify-center text-ink-200 hover:text-gold-300 hover:border-gold-400/30 transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards Preview Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridReviews.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-glass-light border-glass hover-lift hover:border-gold-400/20 transition-all duration-500"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>
              <p className="text-sm text-ink-300 leading-relaxed line-clamp-4 mb-4">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-ink-100">
                    {item.name}
                  </div>
                  <div className="text-xs text-ink-400">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

