"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Zap,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Check,
  RotateCcw,
  Trophy,
  Clock,
  Target,
  Star,
  Phone,
} from "lucide-react";

interface Option {
  label: string;
  value: string;
  desc: string;
}

interface Question {
  id: string;
  question: string;
  subtitle: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "discipline",
    question: "What is your craft?",
    subtitle: "Choose your primary discipline. This calibrates the entire protocol.",
    options: [
      { label: "Acting", value: "acting", desc: "Stage, film, or television" },
      {
        label: "Public Speaking",
        value: "speaking",
        desc: "Keynotes, presentations, leadership",
      },
      {
        label: "Music Performance",
        value: "music",
        desc: "Live vocals, instrumental, touring",
      },
      {
        label: "Other Performance",
        value: "other",
        desc: "Dance, comedy, athletics, and more",
      },
    ],
  },
  {
    id: "goal",
    question: "What do you need to conquer?",
    subtitle: "Your primary goal determines which protocol we recommend.",
    options: [
      {
        label: "Emotional Range",
        value: "exertion",
        desc: "Break through your emotional ceiling",
      },
      {
        label: "Sustainability",
        value: "vessel",
        desc: "Protect your instrument for the long haul",
      },
      {
        label: "Mental Game",
        value: "science",
        desc: "Master pressure, focus, and flow",
      },
      {
        label: "Specific Event",
        value: "high-stakes",
        desc: "Nail an audition, keynote, or performance",
      },
    ],
  },
  {
    id: "experience",
    question: "Where are you in your journey?",
    subtitle: "We scale the protocol to your level. There are no wrong answers.",
    options: [
      { label: "Emerging", value: "emerging", desc: "Building my foundation" },
      {
        label: "Working Pro",
        value: "working",
        desc: "Active in my field, seeking an edge",
      },
      {
        label: "Established",
        value: "established",
        desc: "Recognized name, refining mastery",
      },
      {
        label: "Elite",
        value: "elite",
        desc: "Top of my field, maintaining peak",
      },
    ],
  },
  {
    id: "urgency",
    question: "How soon do you need results?",
    subtitle: "Timeline affects intensity and program design.",
    options: [
      {
        label: "This Month",
        value: "urgent",
        desc: "I have something coming up fast",
      },
      {
        label: "1-3 Months",
        value: "soon",
        desc: "Preparing for an upcoming opportunity",
      },
      {
        label: "3-6 Months",
        value: "medium",
        desc: "Building toward a long-term goal",
      },
      { label: "Ongoing", value: "ongoing", desc: "Continuous development" },
    ],
  },
  {
    id: "format",
    question: "How do you want to train?",
    subtitle: "Both formats deliver equivalent outcomes.",
    options: [
      {
        label: "In-Person",
        value: "in-person",
        desc: "At our Hollywood studio",
      },
      {
        label: "Remote",
        value: "remote",
        desc: "Live video sessions from anywhere",
      },
      {
        label: "Hybrid",
        value: "hybrid",
        desc: "Combine in-person and remote",
      },
    ],
  },
];

const PROTOCOL_RECOMMENDATIONS: Record<
  string,
  { name: string; desc: string; duration: string; intensity: string }
> = {
  exertion: {
    name: "Acting Exertion Mastery",
    desc: "A rigorous intensive that expands your emotional and physical range to the absolute edge.",
    duration: "12-week intensive",
    intensity: "High",
  },
  vessel: {
    name: "Vessel Preservation",
    desc: "Systematic protection and strengthening of your body and voice for a career that lasts decades.",
    duration: "Ongoing program",
    intensity: "Moderate",
  },
  science: {
    name: "Performance Science Protocols",
    desc: "Evidence-based methods from sports psychology and neuroscience, adapted for performers.",
    duration: "8-week protocol",
    intensity: "Medium-High",
  },
  "high-stakes": {
    name: "High-Stakes Performance Training",
    desc: "Targeted preparation for the audition, keynote, or performance that cannot fail.",
    duration: "6-week intensive",
    intensity: "Very High",
  },
};

export default function QuestSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = QUESTIONS[currentStep];
  const isLastQuestion = currentStep === QUESTIONS.length - 1;

  useEffect(() => {
    const answeredCount = Object.keys(answers).length;
    setProgressPercent((answeredCount / QUESTIONS.length) * 100);
  }, [answers]);

  const selectOption = useCallback(
    (value: string) => {
      setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
      setTimeout(() => {
        if (isLastQuestion) {
          setIsCompleted(true);
          setTimeout(() => setShowResults(true), 600);
        } else {
          setCurrentStep((prev) => prev + 1);
        }
      }, 350);
    },
    [currentQuestion, isLastQuestion]
  );

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const restartQuest = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
    setShowResults(false);
  };

  const recommendedProtocol =
    PROTOCOL_RECOMMENDATIONS[answers.goal] ?? PROTOCOL_RECOMMENDATIONS.exertion;

  const levelText =
    answers.experience === "emerging"
      ? "Foundation"
      : answers.experience === "working"
      ? "Professional"
      : answers.experience === "established"
      ? "Advanced"
      : "Elite";

  const formatText =
    answers.format === "in-person"
      ? "In-Person · Hollywood Studio"
      : answers.format === "remote"
      ? "Remote · Live Video"
      : "Hybrid";

  return (
    <section
      id="quest"
      className="relative py-24 lg:py-32 noise-overlay overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
            <Zap className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
              Interactive Experience
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-ink-50 tracking-tight">
            The <span className="text-gradient-gold">Quest</span>
          </h2>
          <p className="mt-4 text-lg text-ink-300 max-w-2xl mx-auto">
            Answer five questions. Receive your personalised performance protocol
            and estimated investment. No contact required. No pressure. Just clarity.
          </p>
        </div>

        {/* Main Quiz Card */}
        <div className="relative rounded-3xl bg-glass-strong border-glass shadow-premium overflow-hidden">
          {/* Top Thin Progress Bar */}
          <div className="h-1 bg-ink-800 relative overflow-hidden">
            <div
              className="h-full gradient-gold transition-all duration-500 ease-out"
              style={{ width: `${showResults ? 100 : progressPercent}%` }}
            />
            <div className="absolute inset-0 shimmer-bg animate-shimmer opacity-30" />
          </div>

          {showResults ? (
            /* Results Screen */
            <div className="p-8 lg:p-12 animate-fade-up">
              <div className="text-center mb-8">
                <div className="inline-flex w-16 h-16 rounded-2xl gradient-gold items-center justify-center mb-4 animate-pulse-glow shadow-gold">
                  <Trophy className="w-8 h-8 text-ink-950" />
                </div>
                <h3 className="font-display text-3xl font-bold text-ink-50 mb-2">
                  Your Protocol is Ready
                </h3>
                <p className="text-ink-300">
                  Based on your answers, here is our recommendation:
                </p>
              </div>

              {/* Protocol Spec Card */}
              <div className="rounded-2xl bg-glass-light border border-gold-400/30 p-6 lg:p-8 mb-6">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gold-400 font-semibold tracking-[0.2em] uppercase mb-2">
                      Recommended Program
                    </div>
                    <h4 className="font-display text-2xl font-bold text-ink-50">
                      {recommendedProtocol.name}
                    </h4>
                    <p className="mt-2 text-ink-300 text-sm leading-relaxed">
                      {recommendedProtocol.desc}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Clock className="w-3.5 h-3.5 text-gold-400/70" />
                      <span className="text-xs text-ink-400 uppercase tracking-wider">
                        Duration
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-ink-100">
                      {recommendedProtocol.duration}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap className="w-3.5 h-3.5 text-gold-400/70" />
                      <span className="text-xs text-ink-400 uppercase tracking-wider">
                        Intensity
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-ink-100">
                      {recommendedProtocol.intensity}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Target className="w-3.5 h-3.5 text-gold-400/70" />
                      <span className="text-xs text-ink-400 uppercase tracking-wider">
                        Level
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-ink-100">
                      {levelText}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Star className="w-3.5 h-3.5 text-gold-400/70" />
                      <span className="text-xs text-ink-400 uppercase tracking-wider">
                        Format
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-ink-100">
                      {formatText}
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimated Investment Card */}
              <div className="rounded-2xl bg-gradient-to-br from-gold-400/10 to-transparent border border-gold-400/20 p-6 mb-8 text-center">
                <div className="text-xs text-gold-400 font-semibold tracking-[0.2em] uppercase mb-2">
                  Estimated Investment
                </div>
                <div className="font-display text-3xl font-bold text-gradient-gold">
                  {answers.urgency === "urgent" && "$3,200 – $5,800"}
                  {answers.urgency === "soon" && "$2,800 – $4,900"}
                  {answers.urgency === "medium" && "$2,400 – $4,200"}
                  {answers.urgency === "ongoing" && "$1,900 – $3,600/mo"}
                  {!answers.urgency && "$2,800 – $4,900"}
                </div>
                <p className="mt-2 text-xs text-ink-400">
                  Final pricing confirmed during your assessment. No payment required to begin.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2 gradient-gold text-ink-950 font-semibold text-base px-8 py-4 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden w-full sm:w-auto text-center"
                >
                  <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
                  <span className="relative z-10 flex items-center gap-2">
                    Book My Assessment
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </a>

                <a
                  href="tel:4246539123"
                  className="inline-flex items-center justify-center gap-2 bg-glass-light border-glass text-ink-50 font-semibold text-base px-8 py-4 rounded-full hover:border-gold-400/40 hover:bg-gold-400/5 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  <Phone className="w-5 h-5 text-gold-400" />
                  Call (424) 653-9123
                </a>

                <button
                  onClick={restartQuest}
                  className="inline-flex items-center justify-center gap-2 text-ink-400 hover:text-gold-300 font-medium text-sm px-4 py-2 transition-colors duration-300 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Restart Quest
                </button>
              </div>
            </div>
          ) : (
            /* Questions View */
            <div className="p-8 lg:p-12">
              {/* Step indicator header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  {QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentStep
                          ? "w-8 gradient-gold"
                          : idx < currentStep
                          ? "w-2 bg-gold-400/40"
                          : "w-2 bg-ink-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-ink-400 font-medium tabular-nums">
                  {currentStep + 1} / {QUESTIONS.length}
                </span>
              </div>

              {/* Question Text */}
              <div className="animate-fade-up">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-50 mb-2">
                  {currentQuestion.question}
                </h3>
                <p className="text-ink-300 mb-8">{currentQuestion.subtitle}</p>

                {/* Options 2x2 Grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentQuestion.options.map((opt, optIdx) => {
                    const isSelected =
                      answers[currentQuestion.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => selectOption(opt.value)}
                        className={`group relative text-left p-5 rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                          isSelected
                            ? "bg-gold-400/10 border-gold-400/40 shadow-gold"
                            : "bg-glass-light border-glass hover:border-gold-400/25 hover:bg-gold-400/5"
                        }`}
                        style={{
                          animationDelay: `${optIdx * 80}ms`,
                        }}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <div className="font-semibold text-ink-50 text-base mb-1">
                              {opt.label}
                            </div>
                            {opt.desc && (
                              <div className="text-sm text-ink-400">
                                {opt.desc}
                              </div>
                            )}
                          </div>
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 shrink-0 mt-0.5 ${
                              isSelected
                                ? "border-gold-400 bg-gold-400"
                                : "border-ink-500 group-hover:border-gold-400/50"
                            }`}
                          >
                            {isSelected && (
                              <Check className="w-3.5 h-3.5 text-ink-950 stroke-[3]" />
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Footer of Question Card */}
                <div className="mt-8 flex items-center justify-between">
                  <button
                    onClick={goBack}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                      currentStep === 0
                        ? "text-ink-600 cursor-not-allowed"
                        : "text-ink-300 hover:text-gold-300 cursor-pointer"
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>

                  <div className="flex items-center gap-1.5 text-xs text-ink-400">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>Your protocol is being calibrated</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

