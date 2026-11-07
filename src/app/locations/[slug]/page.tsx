import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Concierge from "@/components/Concierge";
import {
  MapPin,
  Star,
  Shield,
  Award,
  Zap,
  Phone,
  ArrowRight,
  Check,
} from "lucide-react";

interface AreaInfo {
  name: string;
  headline: string;
  description: string;
  distance: string;
  highlights: string[];
}

const AREAS: Record<string, AreaInfo> = {
  hollywood: {
    name: "Hollywood",
    headline: "Elite Performance Coaching in Hollywood, California",
    description:
      "Located at 1938 Argyle Avenue in the heartbeat of the entertainment capital. Walking distance from major casting offices and studios, providing world-class performance science, acting exertion, and vessel preservation protocols.",
    distance: "In-Studio · 1938 Argyle Ave",
    highlights: [
      "Minutes from Paramount Pictures and major casting offices",
      "Sound-treated private calibration studio",
      "Same-day emergency audition prep available",
      "Confidential private entrance for high-profile talent",
    ],
  },
  "santa-monica": {
    name: "Santa Monica",
    headline: "High-Performance Coaching for Santa Monica & Westside Talent",
    description:
      "Premier coaching protocols for actors, creators, and executive speakers located in Santa Monica and Silicon Beach. High-stakes performance science tailored for maximum impact.",
    distance: "25-35 minutes via I-10 / Remote Available",
    highlights: [
      "Flexible hybrid training (in-studio & live high-def video)",
      "Vessel preservation tailored for rigorous shoot schedules",
      "Keynote & public speaking calibration for tech & studio executives",
      "Comprehensive performance anxiety reprogramming",
    ],
  },
  "san-diego": {
    name: "San Diego",
    headline: "Performance Coaching & Intensive Training for San Diego",
    description:
      "Dedicated weekend intensives and remote coaching protocols for actors, keynote speakers, and performers across San Diego County.",
    distance: "Weekend Intensives / Remote Protocols",
    highlights: [
      "Targeted remote neuro-calibration and rehearsal sessions",
      "Intensive 2-day weekend immersions at our Hollywood studio",
      "Audition transformation under genuine high-stakes pressure",
      "Comprehensive vocal and physical instrument conditioning",
    ],
  },
  burbank: {
    name: "Burbank",
    headline: "Performance Coaching Minutes from Burbank Studios",
    description:
      "Strategic training for working actors, voice performers, and creatives across Burbank's Warner Bros., Disney, and independent production lots.",
    distance: "12-15 minutes via Barham Blvd / Cahuenga Pass",
    highlights: [
      "Ideal location for mid-production calibration between takes",
      "Voice and vessel preservation for voice actors and animation talent",
      "Rapid audition prep for series regulars and pilots",
      "Direct guidance grounded in 15 years of Hollywood coaching",
    ],
  },
  "bel-air": {
    name: "Bel Air",
    headline: "Private & Confidential Performance Coaching for Bel Air",
    description:
      "Discreet, custom-tailored performance coaching for elite actors, industry leaders, and public figures in Bel Air seeking mastery at the absolute edge of their capability.",
    distance: "20 minutes / Private Studio & In-Home Options",
    highlights: [
      "Strict medical-grade privacy and non-disclosure standards",
      "Bespoke neuro-calibration and exertion mastery protocols",
      "Custom scheduling accommodating private productions and tours",
      "Comprehensive vocal, cognitive, and physical longevity care",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(AREAS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = AREAS[slug];
  if (!area) return { title: "Location Not Found" };
  return {
    title: `${area.headline} | The Ezekiel Technique`,
    description: area.description,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = AREAS[slug];

  if (!area) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 antialiased selection:bg-gold-400/30 selection:text-gold-200">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section for Location */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
              Serving {area.name}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.15] sm:leading-[1.1] tracking-tight">
            Perform at the absolute edge in{" "}
            <span className="text-gradient-gold">{area.name}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink-300 leading-relaxed max-w-3xl mx-auto">
            {area.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#quest"
              className="group relative inline-flex items-center justify-center gap-2 gradient-gold text-ink-950 font-semibold text-base px-8 py-4 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
            >
              <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
              <span className="relative z-10 flex items-center gap-2">
                Begin Your Quest
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>

            <a
              href="tel:4246539123"
              className="inline-flex items-center justify-center gap-2 bg-glass-light border-glass text-ink-50 font-semibold text-base px-8 py-4 rounded-full hover:border-gold-400/40 hover:bg-gold-400/5 transition-all duration-300"
            >
              <Phone className="w-5 h-5 text-gold-400" />
              <span>Call (424) 653-9123</span>
            </a>
          </div>
        </section>

        {/* Location Highlights Card */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20">
          <div className="rounded-3xl bg-glass-strong border-glass p-6 sm:p-8 lg:p-12 shadow-premium">
            <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
              <div>
                <span className="text-xs text-gold-400 uppercase tracking-widest font-semibold">
                  Location Proximity
                </span>
                <h2 className="font-display text-2xl font-bold text-ink-50 mt-1">
                  {area.distance}
                </h2>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-400 fill-gold-400"
                  />
                ))}
              </div>
            </div>

            <h3 className="font-display text-xl font-bold text-ink-50 mb-4">
              Why Performers in {area.name} Train With Ezekiel:
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {area.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-glass-light border-glass flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-ink-200 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Proof Badges */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-glass-light border-glass text-center">
              <Star className="w-6 h-6 text-gold-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-gradient-gold">
                5.0 Rating
              </div>
              <div className="text-xs text-ink-400 mt-1">247 verified reviews</div>
            </div>
            <div className="p-6 rounded-2xl bg-glass-light border-glass text-center">
              <Shield className="w-6 h-6 text-gold-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-gradient-gold">
                Guaranteed
              </div>
              <div className="text-xs text-ink-400 mt-1">Results or continue free</div>
            </div>
            <div className="p-6 rounded-2xl bg-glass-light border-glass text-center">
              <Award className="w-6 h-6 text-gold-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-gradient-gold">
                15 Years
              </div>
              <div className="text-xs text-ink-400 mt-1">Hollywood studio</div>
            </div>
            <div className="p-6 rounded-2xl bg-glass-light border-glass text-center">
              <Zap className="w-6 h-6 text-gold-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-gradient-gold">
                98%
              </div>
              <div className="text-xs text-ink-400 mt-1">Client success rate</div>
            </div>
          </div>
        </section>

        {/* Direct Booking CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="rounded-3xl gradient-gold p-8 lg:p-12 text-ink-950 shadow-gold-lg">
            <h2 className="font-display text-3xl font-bold mb-3">
              Ready to calibrate your performance?
            </h2>
            <p className="text-ink-900/80 mb-6 max-w-lg mx-auto">
              Schedule your 90-minute initial calibration assessment at our
              Hollywood studio or via private live remote session.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-ink-950 text-ink-50 font-semibold px-8 py-4 rounded-full hover:bg-ink-900 transition-all duration-300"
              >
                Schedule Assessment
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:4246539123"
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-ink-950 font-semibold px-8 py-4 rounded-full hover:bg-white/30 transition-all duration-300"
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

