"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown, CircleHelp } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

const FAQS: FAQ[] = [
  {
    q: "Who is The Ezekiel Technique designed for?",
    a: "We work with actors, performers, and public speakers who are serious about reaching the elite level of their craft. Our clients range from working professionals who want to break through a plateau, to established artists preparing for career-defining moments. If you perform under pressure and want to do it better, this is for you.",
  },
  {
    q: "What makes this different from traditional acting or speaking coaching?",
    a: "Traditional coaching focuses on technique and delivery. We focus on the instrument itself — your nervous system, your emotional capacity, your physical vessel, and your cognitive performance under pressure. We use protocols drawn from sports psychology, neuroscience, and behavioural science, adapted specifically for performers. The result is not better notes. It is a fundamentally more capable performer.",
  },
  {
    q: "Do you offer in-person or remote sessions?",
    a: "Both. Our primary studio is in Hollywood, California, where we conduct immersive in-person intensives. For clients who cannot travel, we offer comprehensive remote programs with live video sessions and personalised protocol delivery. The quality of outcomes is equivalent across both formats.",
  },
  {
    q: "How long is a typical program?",
    a: "Programs range from 6-week intensives to ongoing relationships measured in years. Your assessment will determine the right timeline for your goals. High-Stakes Performance Training is our shortest program at 6 weeks. Vessel Preservation is an ongoing program. Most clients see significant transformation within the first 4 weeks.",
  },
  {
    q: "What happens in the initial assessment?",
    a: "The assessment is a comprehensive 90-minute evaluation covering your physical capabilities, vocal health, emotional range, cognitive performance under pressure, and career goals. You receive a detailed calibration report that identifies your strengths, blind spots, and the specific protocol that will deliver the highest return on your investment.",
  },
  {
    q: "Is this only for experienced performers?",
    a: "No. While many of our clients are established professionals, we also work with emerging performers who want to build their foundation correctly from the start. The protocols are scaled to your current level and goals. What matters is your commitment to the work.",
  },
  {
    q: "How much does training cost?",
    a: "Investment varies based on the program, intensity, and duration. Our quest-based quote system gives you a personalised estimate based on your goals, experience level, and needs. We are transparent about pricing and will never pressure you. The assessment is the first step.",
  },
  {
    q: "Do you work with performers outside of acting?",
    a: "Absolutely. Our clients include public speakers, corporate executives, musicians, dancers, athletes, and anyone who must deliver peak performance under pressure. The protocols are adapted to your specific performance context.",
  },
  {
    q: 'What is "vessel preservation" and why does it matter?',
    a: "Your body and voice are your instrument. Vessel preservation is the systematic practice of maintaining, protecting, and strengthening that instrument over the course of a career. Without it, performers face burnout, injury, vocal damage, and shortened careers. With it, you can perform at your peak for decades.",
  },
  {
    q: "Can you help with performance anxiety?",
    a: "Performance anxiety is one of the most common reasons performers seek us out. Our performance science protocols directly address the neurological and physiological mechanisms of anxiety, teaching you to transform nervous energy into fuel. This is not about managing anxiety. It is about mastering it.",
  },
  {
    q: "What is the success rate?",
    a: "Our clients report a 98% satisfaction rate and measurable improvements in their performance outcomes. However, the results depend entirely on your commitment to the work. We provide the protocol, the expertise, and the environment. You bring the dedication.",
  },
  {
    q: "Do you offer guarantees?",
    a: "We guarantee that if you fully engage with the protocol and complete the program as designed, you will experience meaningful, measurable improvement in your performance capabilities. If you do not, we will continue working with you at no additional cost until you do.",
  },
  {
    q: "How do I get started?",
    a: "The first step is the assessment. You can request one through our quest-based quote system, call us directly, or fill out the contact form. We will schedule your assessment and begin the calibration process. Most clients start within two weeks of their first contact.",
  },
  {
    q: "Are sessions confidential?",
    a: "Completely. We operate with the same discretion as a medical professional. Your work with us, your assessment results, and your progress are strictly confidential. Many of our clients are public figures, and we have never breached that trust.",
  },
  {
    q: "Can you help me prepare for a specific audition or performance?",
    a: "Yes. Our High-Stakes Performance Training is specifically designed for targeted preparation. Whether it is a career-defining audition, a major keynote, or a live performance that cannot fail, we will build a focused protocol to ensure you deliver your absolute best when it matters most.",
  },
  {
    q: "What should I bring to my first session?",
    a: "Bring yourself, comfortable clothing you can move in, water, and an open mind. For the assessment, you do not need to prepare any material. We will guide you through everything. For ongoing sessions, your coach will advise you on any specific items needed.",
  },
];

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return FAQS;
    const q = searchQuery.toLowerCase();
    return FAQS.filter(
      (item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <section id="faq" className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-850 to-ink-900" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            Questions
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.1] tracking-tight">
            Everything you need to{" "}
            <span className="text-gradient-gold">know</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Search or browse below. Can&apos;t find your answer? Call us — we&apos;re
            happy to help.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-glass-light border-glass text-ink-50 placeholder-ink-400 focus:outline-none focus:border-gold-400/40 transition-all duration-300"
          />
        </div>

        {/* FAQs Accordion List */}
        <div className="mt-8 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <CircleHelp className="w-10 h-10 text-ink-500 mx-auto mb-3" />
              <p className="text-ink-400">
                No results found. Try a different search or call us.
              </p>
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-ink-800 border-gold-400/30"
                      : "bg-glass-light border-glass hover:border-gold-400/15"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                  >
                    <span className="font-semibold text-ink-50 text-base">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-ink-300 leading-relaxed text-sm">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Link */}
        <div className="mt-10 text-center">
          <p className="text-ink-400 text-sm">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-gold-300 font-medium hover:text-gold-200 transition-colors duration-300"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

