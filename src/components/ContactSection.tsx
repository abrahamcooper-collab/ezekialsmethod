"use client";

import { useState, useCallback } from "react";
import {
  User,
  Phone,
  Mail,
  Sparkles,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Send,
  Check,
  Calendar,
} from "lucide-react";

const PROTOCOLS_LIST = [
  "Acting Exertion Mastery",
  "Vessel Preservation",
  "Performance Science Protocols",
  "High-Stakes Performance Training",
];

const STEPS_CONFIG = [
  {
    id: "name",
    label: "Your Name",
    icon: User,
    type: "text",
    placeholder: "Jane Doe",
  },
  {
    id: "phone",
    label: "Phone Number",
    icon: Phone,
    type: "tel",
    placeholder: "(424) 555-0100",
  },
  {
    id: "email",
    label: "Email Address",
    icon: Mail,
    type: "email",
    placeholder: "jane@example.com",
  },
];

export default function ContactSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 4;

  const isValid = useCallback(() => {
    if (currentStep === 0) return formData.name.trim().length > 1;
    if (currentStep === 1) return formData.phone.trim().length > 6;
    if (currentStep === 2) return formData.email.trim().includes("@");
    if (currentStep === 3) return formData.service.length > 0;
    return false;
  }, [currentStep, formData]);

  const handleNext = async () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSubmitting(true);
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } catch (err) {
        console.error("Submission error:", err);
      } finally {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  if (isSubmitted) {
    const firstName = formData.name.split(" ")[0] || "there";
    return (
      <section id="contact" className="relative py-24 lg:py-32 noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex w-20 h-20 rounded-3xl gradient-gold items-center justify-center mb-6 animate-pulse-glow shadow-gold-lg">
            <Check className="w-10 h-10 text-ink-950 stroke-[3]" />
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-ink-50 mb-4">
            Your request has been received
          </h3>
          <p className="text-ink-300 text-lg leading-relaxed mb-8">
            Thank you, {firstName}. We will contact you within 24 hours at{" "}
            <span className="text-ink-100 font-medium">{formData.phone}</span> to
            schedule your assessment. Your transformation starts now.
          </p>
          <a
            href="tel:4246539123"
            className="inline-flex items-center gap-2 text-gold-300 font-semibold hover:text-gold-200 transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            Or call us now: (424) 653-9123
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 noise-overlay overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            Begin
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.1] tracking-tight">
            Let&apos;s build your{" "}
            <span className="text-gradient-gold">protocol</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-xl mx-auto">
            Four quick steps. We will design your personalised training plan and
            schedule your assessment.
          </p>
        </div>

        {/* Lead Form Card */}
        <div className="mt-12 rounded-3xl bg-glass-strong border-glass p-8 lg:p-10 shadow-premium">
          {/* Step Indicator Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              {[...Array(totalSteps)].map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentStep
                      ? "w-8 gradient-gold"
                      : idx < currentStep
                      ? "w-2 bg-gold-400/50"
                      : "w-2 bg-ink-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-ink-400 font-medium tabular-nums">
              Step {currentStep + 1} of {totalSteps}
            </span>
          </div>

          {/* Form Step Inputs */}
          <div key={currentStep} className="animate-fade-up">
            {currentStep < 3 ? (
              <div>
                <label className="block">
                  <div className="flex items-center gap-2 mb-3">
                    {(() => {
                      const Icon = STEPS_CONFIG[currentStep].icon;
                      return <Icon className="w-5 h-5 text-gold-400" />;
                    })()}
                    <span className="font-display text-xl font-bold text-ink-50">
                      {STEPS_CONFIG[currentStep].label}
                    </span>
                  </div>
                  <input
                    type={STEPS_CONFIG[currentStep].type}
                    value={
                      formData[
                        STEPS_CONFIG[currentStep].id as keyof typeof formData
                      ]
                    }
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        [STEPS_CONFIG[currentStep].id]: e.target.value,
                      }))
                    }
                    placeholder={STEPS_CONFIG[currentStep].placeholder}
                    className="w-full px-5 py-4 rounded-2xl bg-glass-light border-glass text-ink-50 placeholder-ink-500 focus:outline-none focus:border-gold-400/40 transition-all duration-300 text-lg"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && isValid()) {
                        handleNext();
                      }
                    }}
                  />
                </label>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  <span className="font-display text-xl font-bold text-ink-50">
                    Which program interests you?
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  {PROTOCOLS_LIST.map((program) => (
                    <button
                      key={program}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, service: program }))
                      }
                      className={`text-left p-4 rounded-xl border text-sm font-medium transition-all duration-300 cursor-pointer ${
                        formData.service === program
                          ? "bg-gold-400/10 border-gold-400/40 text-gold-200"
                          : "bg-glass-light border-glass text-ink-300 hover:border-gold-400/25"
                      }`}
                    >
                      {program}
                    </button>
                  ))}
                </div>

                <label className="block mt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-5 h-5 text-gold-400" />
                    <span className="font-medium text-ink-100">
                      Anything else? (Optional)
                    </span>
                  </div>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Tell us about your goals, upcoming auditions, or challenges..."
                    rows={3}
                    className="w-full px-5 py-4 rounded-2xl bg-glass-light border-glass text-ink-50 placeholder-ink-500 focus:outline-none focus:border-gold-400/40 transition-all duration-300 resize-none text-sm"
                  />
                </label>
              </div>
            )}

            {/* Step Controls (Back & Continue/Submit) */}
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
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

              <button
                type="button"
                onClick={handleNext}
                disabled={!isValid() || isSubmitting}
                className={`group relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 overflow-hidden px-7 py-3.5 text-sm ${
                  isValid() && !isSubmitting
                    ? "gradient-gold text-ink-950 hover:shadow-gold-lg hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
                    : "bg-ink-700 text-ink-500 cursor-not-allowed"
                }`}
              >
                {isValid() && !isSubmitting && (
                  <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-ink-950/30 border-t-ink-950 rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : currentStep === totalSteps - 1 ? (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request</span>
                    </>
                  ) : (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Privacy Guarantee Note */}
          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-ink-400">
            <Check className="w-3.5 h-3.5 text-accent-400 stroke-[3]" />
            <span>
              No payment required. No obligation. Completely confidential.
            </span>
          </div>
        </div>

        {/* Footer Contact Alternatives */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-ink-400">
          <span>Prefer to talk?</span>
          <a
            href="tel:4246539123"
            className="inline-flex items-center gap-2 text-gold-300 font-semibold hover:text-gold-200 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            (424) 653-9123
          </a>
          <span className="text-ink-600 hidden sm:inline">·</span>
          <a
            href="#quest"
            className="inline-flex items-center gap-2 text-gold-300 font-semibold hover:text-gold-200 transition-colors duration-300"
          >
            <Calendar className="w-4 h-4" />
            Take the Quest first
          </a>
        </div>
      </div>
    </section>
  );
}

