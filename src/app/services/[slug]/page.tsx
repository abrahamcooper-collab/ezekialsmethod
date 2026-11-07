import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Concierge from "@/components/Concierge";
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
} from "lucide-react";

interface ServiceDetail {
  title: string;
  subtitle: string;
  tagline: string;
  duration: string;
  intensity: string;
  overview: string;
  curriculum: { phase: string; title: string; desc: string }[];
  outcomes: string[];
}

const SERVICES_DATA: Record<string, ServiceDetail> = {
  "ezekiel-coaching": {
    title: "Ezekiel Coaching",
    subtitle: "Private 1-on-1 Performance Mastery & Calibration",
    tagline: "Tailored to your instrument, your demands, and your ceiling.",
    duration: "12-Week Intensive or Ongoing",
    intensity: "High",
    overview:
      "Private coaching sessions with master coaches designed to dismantle emotional resistance, expand physical bandwidth, and achieve sustained flow under high pressure. Used by award-winning actors, television leads, and global keynote speakers.",
    curriculum: [
      {
        phase: "Phase 01",
        title: "Baseline Exertion & Somatic Mapping",
        desc: "Comprehensive diagnostic of your physical, vocal, and nervous system responses under stress.",
      },
      {
        phase: "Phase 02",
        title: "Progressive Psychological Overload",
        desc: "Expanding emotional bandwidth through rigorous, safe, and repeatable scene simulations.",
      },
      {
        phase: "Phase 03",
        title: "Integration & Audition Mastery",
        desc: "Translating extreme intensity into subtle, magnetic screen work and live presentations.",
      },
    ],
    outcomes: [
      "Access full-spectrum emotional vulnerability on command without burnout",
      "Sustain presence across demanding 14-hour multi-take production days",
      "Eliminate performance anxiety through physiological regulation",
      "Deliver consistent, commanding performances that win roles",
    ],
  },
  "ezekiel-teaching": {
    title: "Ezekiel Teaching",
    subtitle: "Masterclasses, Group Intensives & Studio Cohorts",
    tagline: "Rigorous studio environments for serious practitioners.",
    duration: "6-Week Cohorts & Weekend Workshops",
    intensity: "Medium-High",
    overview:
      "Small, highly selective group cohorts studying the core tenets of The Ezekiel Technique. Experience peer accountability, real-time diagnostic critiques, and ensemble exertion work in our dedicated Hollywood studio.",
    curriculum: [
      {
        phase: "Module 01",
        title: "The Architecture of the Vessel",
        desc: "Understanding physical alignment, tension dispersal, and vocal stamina in high-output roles.",
      },
      {
        phase: "Module 02",
        title: "Group Dynamics & Scene Pressure",
        desc: "Navigating unpredictable co-performers, high-stakes scene work, and spontaneous shifts.",
      },
      {
        phase: "Module 03",
        title: "The Discipline of Recovery",
        desc: "Sustaining long-term performance longevity without emotional depletion or physical injury.",
      },
    ],
    outcomes: [
      "Deep understanding of somatic acting science and voice preservation",
      "Peer network of elite, committed Hollywood performers",
      "Real-time feedback and calibration from veteran faculty",
      "Immediate elevation in stage and on-camera presence",
    ],
  },
  "auditioning-performance-strategy": {
    title: "Auditioning in Performance Strategy",
    subtitle: "Converting High Stakes Into Career-Defining Bookings",
    tagline: "Turn adrenaline from your greatest enemy into high-octane fuel.",
    duration: "6-Week Intensive or Single-Session Prep",
    intensity: "Very High",
    overview:
      "Engineered specifically for pilot season, chemistry reads, Broadway auditions, and high-profile keynote addresses. We simulate genuine casting pressure and rewire your instinctual response to judgment.",
    curriculum: [
      {
        phase: "Stage 01",
        title: "Casting Room Neurological Re-Framing",
        desc: "Eliminating the need for approval and replacing it with commanding, grounded authority.",
      },
      {
        phase: "Stage 02",
        title: "Choice Architecture & Risk Calibration",
        desc: "Crafting bold, indelible character choices that make casting directors remember you.",
      },
      {
        phase: "Stage 03",
        title: "Pressure Inoculation & Instant Redirection",
        desc: "Handling sudden notes, cold sides, and hostile rooms with immediate adaptability.",
      },
    ],
    outcomes: [
      "Transform 'safe, competent' auditions into electric, booking-level work",
      "Immediate recovery from unexpected notes or sudden redirects",
      "Total command of the room within the first 10 seconds of entering",
      "Elimination of post-audition regret and overthinking",
    ],
  },
  "neuro-calibration": {
    title: "Neuro Calibration",
    subtitle: "Sports Psychology & Applied Performance Neuroscience",
    tagline: "Evidence-based protocols drawn from Olympic and military science.",
    duration: "8-Week Protocol",
    intensity: "Moderate-High",
    overview:
      "A systematic approach that directly addresses the central nervous system. Using heart-rate variability protocols, arousal regulation, mental rehearsal, and cognitive resilience tools to induce reliable flow states on demand.",
    curriculum: [
      {
        phase: "Protocol 01",
        title: "Autonomic Nervous System Mastery",
        desc: "Real-time down-regulation of panic states and up-regulation of laser focus.",
      },
      {
        phase: "Protocol 02",
        title: "Flow-State Induction Mechanisms",
        desc: "Anchoring and reproducing peak creative flow before stepping on stage or set.",
      },
      {
        phase: "Protocol 03",
        title: "Cognitive Stamina & Memory Retention",
        desc: "Rapid memorization and mental resilience when sleep-deprived or under multi-take fatigue.",
      },
    ],
    outcomes: [
      "Induce optimal creative flow state in under 3 minutes",
      "Maintain flawless focus despite noise, crew distractions, and production chaos",
      "Rapid somatic reset between takes and performance rounds",
      "Sustained psychological stamina across months-long production runs",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | The Ezekiel Technique`,
    description: service.overview,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 antialiased selection:bg-gold-400/30 selection:text-gold-200">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Service Hero */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <Zap className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
              Protocol Focus
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.15] tracking-tight">
            {service.title}
          </h1>

          <p className="mt-3 text-xl text-gold-300 font-medium">
            {service.subtitle}
          </p>

          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-3xl mx-auto">
            {service.overview}
          </p>

          {/* Key Specs Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-ink-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>Duration: <strong className="text-ink-100">{service.duration}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-gold-400" />
              <span>Intensity: <strong className="text-ink-100">{service.intensity}</strong></span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
              <span className="ml-1 text-ink-100">5.0 Verified</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/#quest"
              className="group relative inline-flex items-center justify-center gap-2 gradient-gold text-ink-950 font-semibold text-base px-8 py-4 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
            >
              <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
              <span className="relative z-10 flex items-center gap-2">
                Apply for {service.title}
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

        {/* Curriculum Phases */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <span className="text-xs text-gold-400 uppercase tracking-widest font-semibold">
              Syllabus & Structure
            </span>
            <h2 className="font-display text-3xl font-bold text-ink-50 mt-2">
              How the protocol is delivered
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.curriculum.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-glass-strong border-glass hover:border-gold-400/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-gold-400 font-semibold tracking-widest uppercase">
                    {item.phase}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink-50 mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expected Outcomes */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20">
          <div className="rounded-3xl bg-glass-light border-glass p-8 lg:p-12">
            <h2 className="font-display text-2xl font-bold text-ink-50 mb-6">
              Measurable Performance Outcomes:
            </h2>
            <div className="space-y-4">
              {service.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-ink-200 text-base leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment CTA Box */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="rounded-3xl gradient-gold p-8 lg:p-12 text-ink-950 shadow-gold-lg">
            <h2 className="font-display text-3xl font-bold mb-3">
              Begin with your calibration assessment
            </h2>
            <p className="text-ink-900/80 mb-6 max-w-lg mx-auto">
              Our initial 90-minute assessment establishes your baseline metrics
              and determines exact placement for {service.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-ink-950 text-ink-50 font-semibold px-8 py-4 rounded-full hover:bg-ink-900 transition-all duration-300"
              >
                Book Assessment
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

