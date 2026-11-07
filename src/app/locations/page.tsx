import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Concierge from "@/components/Concierge";
import {
  MapPin,
  Star,
  Check,
  ArrowRight,
  Phone,
  Clock,
  Sparkles,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas & Locations | The Ezekiel Technique — Hollywood, CA",
  description:
    "Explore our primary Hollywood studio and regional performance coaching service areas across Los Angeles, Santa Monica, Burbank, Bel Air, and San Diego.",
};

const AREAS_LIST = [
  {
    slug: "hollywood",
    name: "Hollywood (Primary Studio)",
    badge: "Headquarters",
    headline: "Elite Performance Coaching in the Heart of Hollywood",
    location: "1938 Argyle Avenue, Hollywood, CA 90068",
    distance: "In-Studio · Central Hollywood",
    description:
      "Our flagship sound-treated training facility located minutes from Paramount Pictures, Netflix, and top talent agencies. Offering private 1-on-1 coaching, biometric calibration, and audition simulations.",
    highlights: [
      "Sound-treated private calibration studio",
      "Minutes from Paramount Pictures and major casting offices",
      "Confidential private entrance for high-profile talent",
      "Same-day emergency audition prep available",
    ],
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    badge: "Westside Hub",
    headline: "High-Performance Coaching for Santa Monica & Westside Talent",
    location: "Serving Santa Monica, Venice & Silicon Beach",
    distance: "25-35 minutes via I-10 / Remote Available",
    description:
      "Premier coaching protocols for actors, creators, and executive speakers located in Santa Monica and Silicon Beach. High-stakes performance science tailored for maximum impact.",
    highlights: [
      "Flexible hybrid training (in-studio & live high-def video)",
      "Keynote & public speaking calibration for tech & studio executives",
      "Vessel preservation tailored for rigorous shoot schedules",
      "Comprehensive performance anxiety reprogramming",
    ],
  },
  {
    slug: "burbank",
    name: "Burbank",
    badge: "Studio District",
    headline: "Performance Coaching Minutes from Burbank Studios",
    location: "Serving Warner Bros., Disney & Universal Lots",
    distance: "12-15 minutes via Barham Blvd / Cahuenga Pass",
    description:
      "Strategic training for working actors, voice performers, and creatives across Burbank's Warner Bros., Disney, and independent production lots.",
    highlights: [
      "Ideal location for mid-production calibration between takes",
      "Voice and vessel preservation for voice actors and animation talent",
      "Rapid audition prep for series regulars and pilots",
      "Direct guidance grounded in 15 years of Hollywood coaching",
    ],
  },
  {
    slug: "bel-air",
    name: "Bel Air",
    badge: "Private Talent",
    headline: "Private & Confidential Performance Coaching for Bel Air",
    location: "Discreet Studio & Private Residence Sessions",
    distance: "20 minutes / Private Studio & In-Home Options",
    description:
      "Discreet, custom-tailored performance coaching for elite actors, industry leaders, and public figures in Bel Air seeking mastery at the absolute edge of their capability.",
    highlights: [
      "Strict medical-grade privacy and non-disclosure standards",
      "Bespoke neuro-calibration and exertion mastery protocols",
      "Custom scheduling accommodating private productions and tours",
      "Comprehensive vocal, cognitive, and physical longevity care",
    ],
  },
  {
    slug: "san-diego",
    name: "San Diego",
    badge: "Intensives & Remote",
    headline: "Performance Coaching & Intensive Training for San Diego",
    location: "Serving San Diego County & La Jolla",
    distance: "Weekend Intensives / Remote Protocols",
    description:
      "Dedicated weekend intensives and remote coaching protocols for actors, keynote speakers, and performers across San Diego County.",
    highlights: [
      "Intensive 2-day weekend immersions at our Hollywood studio",
      "Targeted remote neuro-calibration and rehearsal sessions",
      "Audition transformation under genuine high-stakes pressure",
      "Comprehensive vocal and physical instrument conditioning",
    ],
  },
];

export default function LocationsIndexPage() {
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
            <span className="text-gold-400">Service Areas</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
              Hollywood Studio & Regional Hubs
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.1] tracking-tight">
            Based in Hollywood.{" "}
            <span className="text-gradient-gold">Calibrated Everywhere.</span>
          </h1>

          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Our private studio is located in Hollywood, California. We provide
            in-person intensives for local and traveling performers, as well as
            comprehensive remote protocols worldwide.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-ink-400">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
              <span className="text-ink-200 font-medium ml-1">5.0 Google Rating</span>
            </div>
            <span>•</span>
            <span className="text-ink-200 font-medium">Hollywood 90068</span>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS_LIST.map((area) => (
              <div
                key={area.slug}
                className="group relative rounded-3xl bg-glass-strong border-glass p-8 shadow-premium hover:border-gold-400/30 transition-all duration-500 flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gold-400/5 blur-2xl group-hover:bg-gold-400/12 transition-all duration-700 pointer-events-none" />

                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Building className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-[11px] font-semibold text-gold-300 uppercase tracking-wider">
                      {area.badge}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-ink-50 mb-1 group-hover:text-gold-200 transition-colors">
                    {area.name}
                  </h2>
                  <p className="text-xs text-gold-400 font-medium mb-4">
                    {area.distance}
                  </p>

                  <p className="text-sm text-ink-300 leading-relaxed mb-6 line-clamp-3">
                    {area.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    {area.highlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-ink-200">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/locations/${area.slug}`}
                    className="text-sm font-semibold text-gold-400 group-hover:text-gold-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Area Guide</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="tel:4246539123"
                    className="text-xs text-ink-400 hover:text-gold-300 transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global Remote Callout */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <div className="rounded-3xl gradient-gold p-8 lg:p-12 text-ink-950 shadow-gold-lg relative overflow-hidden">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Outside Southern California?
            </h2>
            <p className="text-ink-900/80 mb-6 max-w-xl mx-auto text-base">
              Over 40% of our clients train via our dedicated live remote
              calibration sessions from New York, London, Atlanta, and worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-ink-950 text-ink-50 font-semibold px-8 py-4 rounded-full hover:bg-ink-900 transition-all duration-300 text-sm"
              >
                Inquire About Remote Protocols
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

