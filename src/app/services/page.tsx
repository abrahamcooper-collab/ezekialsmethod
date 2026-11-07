import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Concierge from "@/components/Concierge";
import { SERVICES_DATA } from "./[slug]/page";
import {
  Drama,
  HeartPulse,
  BrainCircuit,
  Flame,
  Star,
  Check,
  ArrowRight,
  Phone,
  Clock,
  Zap,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Training Protocols & Services | The Ezekiel Technique — Hollywood, CA",
  description:
    "Explore all 8 elite performance coaching protocols designed for actors, keynote speakers, and high-stakes performers. Hollywood, California.",
};

const PROTOCOL_ICONS: Record<string, typeof Drama> = {
  "acting-exertion": Drama,
  "vessel-preservation": HeartPulse,
  "performance-science": BrainCircuit,
  "high-stakes-training": Flame,
  "ezekiel-coaching": Drama,
  "ezekiel-teaching": HeartPulse,
  "auditioning-performance-strategy": Flame,
  "neuro-calibration": BrainCircuit,
};

export default function ServicesIndexPage() {
  const allServices = Object.values(SERVICES_DATA);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 antialiased selection:bg-gold-400/30 selection:text-gold-200">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-xs text-ink-400 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-gold-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">Services & Protocols</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
              Complete Training Directory
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.15] sm:leading-[1.1] tracking-tight">
            Elite Protocols.{" "}
            <span className="text-gradient-gold">Measurable Mastery.</span>
          </h1>

          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Explore our bespoke training protocols engineered for working actors,
            broadway performers, and keynote speakers. Select a program below for
            the full syllabus and curriculum structure.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-ink-400">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
              <span className="text-ink-200 font-medium ml-1">5.0 · 247 Reviews</span>
            </div>
            <span>•</span>
            <span className="text-ink-200 font-medium">1,200+ Performers Calibrated</span>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            {allServices.map((service, idx) => {
              const Icon = PROTOCOL_ICONS[service.id] || Sparkles;
              return (
                <div
                  key={service.id}
                  className="group relative rounded-3xl bg-glass-strong border-glass p-6 sm:p-8 lg:p-10 shadow-premium hover:border-gold-400/30 transition-all duration-500 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gold-400/5 blur-3xl group-hover:bg-gold-400/12 transition-all duration-700 pointer-events-none" />

                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-7 h-7 text-gold-400" />
                      </div>
                      <span className="font-display text-4xl font-bold text-ink-700 group-hover:text-gold-400/20 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h2 className="font-display text-2xl font-bold text-ink-50 mb-2 group-hover:text-gold-200 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-xs text-gold-400 font-medium uppercase tracking-wider mb-3">
                      {service.subtitle}
                    </p>

                    <p className="text-sm text-ink-300 leading-relaxed mb-6">
                      {service.overview}
                    </p>

                    {/* Specs Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-[11px] text-gold-300 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {service.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-glass-light border-glass text-[11px] text-ink-300 font-medium">
                        <Zap className="w-3.5 h-3.5 text-gold-400" />
                        {service.intensity}
                      </span>
                    </div>

                    {/* Key Highlights List */}
                    <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                      {service.highlights.slice(0, 3).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-ink-200">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={`/services/${service.id}`}
                      className="text-sm font-semibold text-gold-400 group-hover:text-gold-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>View Full Curriculum & Outcomes</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                      href="/#quest"
                      className="text-xs text-ink-400 hover:text-gold-300 font-medium transition-colors"
                    >
                      Enroll Now
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Global Calibration Assessment Callout */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="rounded-3xl gradient-gold p-8 lg:p-12 text-ink-950 shadow-gold-lg relative overflow-hidden">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Unsure which protocol fits your instrument?
            </h2>
            <p className="text-ink-900/80 mb-6 max-w-xl mx-auto text-base">
              Take our 5-question interactive Quest to receive a customized protocol
              recommendation and investment breakdown calibrated to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#quest"
                className="inline-flex items-center justify-center gap-2 bg-ink-950 text-ink-50 font-semibold px-8 py-4 rounded-full hover:bg-ink-900 transition-all duration-300 text-sm"
              >
                Take the Quest Quiz
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:4246539123"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-ink-950 font-semibold px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                (424) 653-9123
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyBar />
      <Concierge />
    </div>
  );
}

