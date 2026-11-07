import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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
  Shield,
  Award,
  Sparkles,
} from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  duration: string;
  intensity: string;
  overview: string;
  highlights: string[];
  curriculum: { phase: string; title: string; desc: string }[];
  outcomes: string[];
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "acting-exertion": {
    id: "acting-exertion",
    title: "Acting Exertion Mastery",
    subtitle: "Emotional Bandwidth & Somatic Stamina for Screen & Stage",
    tagline: "Push your emotional and physical range to the absolute edge.",
    duration: "12-Week Intensive",
    intensity: "Very High",
    overview:
      "A rigorous training protocol that expands your emotional bandwidth, physical stamina, and psychological endurance. You learn to sustain peak exertion on command — delivering performances that feel raw, alive, and utterly truthful under any condition.",
    highlights: [
      "Access full-throttle emotional vulnerability on demand",
      "Sustain presence across demanding 14-hour multi-take days",
      "Eliminate emotional hangovers through rapid physiological resets",
      "Break through safe performance habits into magnetic screen authority",
    ],
    curriculum: [
      {
        phase: "Phase 01",
        title: "Emotional Ceilings & Somatic Mapping",
        desc: "Diagnosing unconscious suppression mechanisms, physical holding patterns, and fear of high-stakes exposure under camera scrutiny.",
      },
      {
        phase: "Phase 02",
        title: "Progressive Overload in Scene Work",
        desc: "Systematic escalation of emotional, physical, and psychological demands across complex, high-output dramatic scenes with real-time feedback.",
      },
      {
        phase: "Phase 03",
        title: "Integration & Rapid Nervous System Recovery",
        desc: "Mastering the somatic reset between grueling takes so you arrive at take ten with the same electric vitality and presence as take one.",
      },
    ],
    outcomes: [
      "Sustained emotional intensity without burnout or psychic exhaustion",
      "Physical stamina for demanding multi-take film and television scenes",
      "Instantaneous, dependable access to deep emotional reserves",
      "Advanced recovery techniques between consecutive grueling performance runs",
    ],
  },
  "vessel-preservation": {
    id: "vessel-preservation",
    title: "Vessel Preservation",
    subtitle: "Protecting and Maintaining Your Instrument for Multi-Decade Longevity",
    tagline: "Your body and voice are your instrument. Protect them relentlessly.",
    duration: "Ongoing Program",
    intensity: "Restorative & Conditioning",
    overview:
      "Your body and voice are your instrument. This protocol teaches you how to preserve, restore, and strengthen your physical vessel — addressing tension patterns, vocal health, postural integrity, and nervous system regulation so you can perform at your peak for decades, not seasons.",
    highlights: [
      "Vocal projection without hoarseness, nodules, or cord strain",
      "Tension release across jaw, tongue, trapezius, and diaphragm",
      "Nervous system down-regulation after high-arousal scenes",
      "Preventive biomechanics for grueling eight-show theater weeks",
    ],
    curriculum: [
      {
        phase: "Phase 01",
        title: "Vocal Architecture & Resonance Reconstruction",
        desc: "Rebuilding vocal production mechanics to project effortlessly into massive theaters without strain or pitch distortion.",
      },
      {
        phase: "Phase 02",
        title: "Postural Realignment & Tension Dispersal",
        desc: "Deconstructing chronic physical compensations and aligning skeletal structure for fluid, effortless physical expression.",
      },
      {
        phase: "Phase 03",
        title: "Autonomic Nervous System Recovery",
        desc: "Evidence-based protocols for sleep optimization, parasympathetic activation, and rapid somatic recovery after intense production days.",
      },
    ],
    outcomes: [
      "Flawless vocal health and projection across heavy shooting schedules",
      "Natural freedom from performance-induced somatic tension",
      "Rapid regulation of adrenaline surges and performance anxiety",
      "Actionable longevity strategies for a multi-decade professional career",
    ],
  },
  "performance-science": {
    id: "performance-science",
    title: "Performance Science Protocols",
    subtitle: "Applied Sports Psychology & Cognitive Neuroscience for Performers",
    tagline: "Evidence-based methods drawn from Olympic athletes and elite operators.",
    duration: "8-Week Protocol",
    intensity: "High Cognitive Focus",
    overview:
      "A systematic approach grounded in sports psychology, cognitive neuroscience, and behavioural science. You receive customised protocols for focus, arousal regulation, mental rehearsal, and flow-state induction — the same frameworks used by Olympic athletes and elite military operators, adapted for the stage and screen.",
    highlights: [
      "Voluntary flow-state induction under heavy distraction",
      "Adrenaline calibration: turning anxiety into focused precision",
      "Neuro-motor imagery for instantaneous line and movement recall",
      "Unshakable cognitive presence in chaotic live broadcasting environments",
    ],
    curriculum: [
      {
        phase: "Phase 01",
        title: "Arousal Regulation & Physiological Sighs",
        desc: "Mastering the biological switches that modulate heart rate, pupil dilation, and mental clarity in seconds prior to stepping on set.",
      },
      {
        phase: "Phase 02",
        title: "Mental Rehearsal & Motor Imagery Frameworks",
        desc: "Cognitive encoding drills that train neural pathways without physical fatigue, ensuring complete scene mastery before cameras roll.",
      },
      {
        phase: "Phase 03",
        title: "Flow State Induction Mechanisms",
        desc: "Creating personalized environmental and somatic anchors that reliably place your mind into optimal performance flow on cue.",
      },
    ],
    outcomes: [
      "Immediate flow-state entry on command before high-stakes cues",
      "Complete elimination of dry mouth, tremor, and cognitive freeze",
      "Accelerated text and character internalization with 3x efficiency",
      "Relentless focus and consistency regardless of production stress",
    ],
  },
  "high-stakes-training": {
    id: "high-stakes-training",
    title: "High-Stakes Performance Training",
    subtitle: "Peak Delivery When the Margin for Error Is Absolute Zero",
    tagline: "Designed for the audition, keynote, or live show that cannot fail.",
    duration: "6-Week Intensive",
    intensity: "Maximum Pressure Simulation",
    overview:
      "Designed for the audition that changes your career, the keynote that defines your reputation, or the live performance that cannot fail. This training simulates high-stakes environments and trains you to access your full capacity under pressure — turning adrenaline from an enemy into fuel.",
    highlights: [
      "Inoculation against high-stakes audition freeze and room hostility",
      "Instantaneous recovery from unexpected interruptions or flubs",
      "Commanding presence that captures the room within 10 seconds",
      "Emergency anti-choking neuro-protocols tested under live observation",
    ],
    curriculum: [
      {
        phase: "Phase 01",
        title: "Stress Inoculation & Synthetic Stakes",
        desc: "Progressive simulation of high-pressure casting rooms, studio executive screenings, and uncooperative co-stars.",
      },
      {
        phase: "Phase 02",
        title: "Mid-Performance Crisis Mastery",
        desc: "Tactics to seamlessly absorb forgotten lines, unexpected stage failures, or harsh director notes without losing character truth.",
      },
      {
        phase: "Phase 03",
        title: "Audition Transformation & Booking Authority",
        desc: "Calibrating the bold, unapologetic choices that differentiate working actors from the top 1% who consistently book.",
      },
    ],
    outcomes: [
      "Audition transformation under genuine studio and casting pressure",
      "Absolute reliability during high-profile live keynote broadcasts",
      "Immediate reset and recovery mid-performance without breaking presence",
      "Elimination of post-audition second-guessing and regret",
    ],
  },
  "ezekiel-coaching": {
    id: "ezekiel-coaching",
    title: "Ezekiel Coaching",
    subtitle: "Private 1-on-1 Performance Mastery & Calibration",
    tagline: "Tailored to your instrument, your demands, and your ceiling.",
    duration: "12-Week Intensive or Ongoing",
    intensity: "High",
    overview:
      "Private coaching sessions with master coaches designed to dismantle emotional resistance, expand physical bandwidth, and achieve sustained flow under high pressure. Used by award-winning actors, television leads, and global keynote speakers.",
    highlights: [
      "Fully personalized protocol designed around your upcoming roles",
      "Direct 1-on-1 studio sessions in our private Hollywood facility",
      "Comprehensive biometric and somatic calibration reports",
      "On-call audition and set preparation support",
    ],
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
    id: "ezekiel-teaching",
    title: "Ezekiel Teaching",
    subtitle: "Masterclasses, Group Intensives & Studio Cohorts",
    tagline: "Rigorous studio environments for serious practitioners.",
    duration: "6-Week Cohorts & Weekend Workshops",
    intensity: "Medium-High",
    overview:
      "Small, highly selective group cohorts studying the core tenets of The Ezekiel Technique. Experience peer accountability, real-time diagnostic critiques, and ensemble exertion work in our dedicated Hollywood studio.",
    highlights: [
      "Intimate cohort size limited to maximum 8 elite participants",
      "Intensive peer scene-work with real-time diagnostic feedback",
      "Collaborative exertion training and ensemble dynamics",
      "Access to private Ezekiel Technique alumni network",
    ],
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
    id: "auditioning-performance-strategy",
    title: "Auditioning in Performance Strategy",
    subtitle: "Converting High Stakes Into Career-Defining Bookings",
    tagline: "Turn adrenaline from your greatest enemy into high-octane fuel.",
    duration: "6-Week Intensive or Single-Session Prep",
    intensity: "Very High",
    overview:
      "Engineered specifically for pilot season, chemistry reads, Broadway auditions, and high-profile keynote addresses. We simulate genuine casting pressure and rewire your instinctual response to judgment.",
    highlights: [
      "Complete deconstruction of casting director expectations",
      "Simulated callback and test room conditions with cold material",
      "Self-tape calibration: lighting, eye-line, and vocal resonance",
      "Instant adaptation to harsh or conflicting director notes",
    ],
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
    id: "neuro-calibration",
    title: "Neuro Calibration",
    subtitle: "Sports Psychology & Applied Performance Neuroscience",
    tagline: "Evidence-based protocols drawn from Olympic and military science.",
    duration: "8-Week Protocol",
    intensity: "Moderate-High",
    overview:
      "A systematic approach that directly addresses the central nervous system. Using heart-rate variability protocols, arousal regulation, mental rehearsal, and cognitive resilience tools to induce reliable flow states on demand.",
    highlights: [
      "Real-time biofeedback and HRV monitoring during high-stress scenes",
      "Vagal nerve stimulation exercises to halt panic cascades",
      "Pre-sleep cognitive consolidation techniques for lines and blocking",
      "Sustainable energy management across 16-hour shoot cycles",
    ],
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

  // Get other services for exploration
  const otherServices = Object.values(SERVICES_DATA)
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 antialiased selection:bg-gold-400/30 selection:text-gold-200">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-xs text-ink-400 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-gold-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gold-300 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-gold-400">{service.title}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
              Protocol Focus
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.15] tracking-tight">
            {service.title}
          </h1>

          <p className="mt-3 text-xl text-gold-300 font-medium max-w-2xl mx-auto">
            {service.subtitle}
          </p>

          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-3xl mx-auto">
            {service.overview}
          </p>

          {/* Key Specs Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-ink-300">
            <div className="flex items-center gap-2 bg-glass-light border-glass px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>
                Duration: <strong className="text-ink-100">{service.duration}</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 bg-glass-light border-glass px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 text-gold-400" />
              <span>
                Intensity: <strong className="text-ink-100">{service.intensity}</strong>
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-glass-light border-glass px-4 py-2 rounded-full">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
              ))}
              <span className="ml-1 text-ink-100 font-semibold">5.0 Verified</span>
            </div>
          </div>

          {/* CTA Buttons */}
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

        {/* Highlights Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-3xl bg-glass-strong border-glass p-8 lg:p-10 shadow-premium">
            <h2 className="font-display text-2xl font-bold text-ink-50 mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-gold-400" />
              Protocol Architecture & Highlights
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-glass-light border-glass"
                >
                  <Check className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-ink-200 text-sm leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
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
                className="p-8 rounded-3xl bg-glass-strong border-glass hover:border-gold-400/30 transition-all duration-500 flex flex-col justify-between hover-lift"
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
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-20">
          <div className="rounded-3xl bg-glass-light border-glass p-8 lg:p-12">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-ink-50">
                Measurable Performance Outcomes:
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-ink-200 text-sm leading-relaxed">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment CTA Box */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-20">
          <div className="rounded-3xl gradient-gold p-8 lg:p-12 text-ink-950 shadow-gold-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                Begin with your calibration assessment
              </h2>
              <p className="text-ink-900/80 mb-6 max-w-lg mx-auto text-base">
                Our initial 90-minute assessment establishes your baseline metrics
                and determines exact placement for {service.title}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-ink-950 text-ink-50 font-semibold px-8 py-4 rounded-full hover:bg-ink-900 transition-all duration-300 text-sm"
                >
                  Book Assessment
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
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs text-gold-400 uppercase tracking-widest font-semibold">
              Explore More Protocols
            </span>
            <h3 className="font-display text-2xl font-bold text-ink-50 mt-1">
              Complementary Training Programs
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.id}`}
                className="group p-6 rounded-3xl bg-glass-strong border-glass hover:border-gold-400/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] text-gold-400 font-semibold uppercase tracking-wider">
                    {other.duration}
                  </span>
                  <h4 className="font-display text-lg font-bold text-ink-50 mt-1 mb-2 group-hover:text-gold-300 transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs text-ink-300 line-clamp-2 leading-relaxed">
                    {other.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-gold-400">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <StickyBar />
      <Concierge />
    </div>
  );
}
