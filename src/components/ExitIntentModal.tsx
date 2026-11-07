"use client";

import { useState, useEffect } from "react";
import { Sparkles, X, ArrowRight, Phone } from "lucide-react";

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 &&
        !sessionStorage.getItem("exit-intent-shown")
      ) {
        setIsOpen(true);
        sessionStorage.setItem("exit-intent-shown", "1");
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const closeModal = () => {
    setIsOpen(false);
    setDismissed(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-ink-950/80 backdrop-blur-md"
        onClick={closeModal}
      />
      <div className="relative w-full max-w-lg rounded-3xl bg-glass-strong border-glass shadow-premium overflow-hidden animate-scale-in">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-glass-light border-glass flex items-center justify-center text-ink-300 hover:text-gold-300 transition-colors duration-300 z-10 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 sm:p-8 lg:p-10 text-center">
          <div className="inline-flex w-16 h-16 rounded-2xl gradient-gold items-center justify-center mb-6 animate-pulse-glow shadow-gold">
            <Sparkles className="w-8 h-8 text-ink-950" />
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink-50 mb-3">
            Wait — before you go
          </h3>

          <p className="text-ink-300 leading-relaxed mb-6">
            Take the 60-second Quest and discover your personalised performance
            protocol. No contact required. No pressure. Just clarity on what you
            need to reach the next level.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#quest"
              onClick={closeModal}
              className="group relative inline-flex items-center justify-center gap-2 gradient-gold text-ink-950 font-semibold text-base px-7 py-3.5 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
            >
              <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
              <span className="relative z-10 flex items-center gap-2">
                Take the Quest
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>

            <a
              href="tel:4246539123"
              className="inline-flex items-center justify-center gap-2 bg-glass-light border-glass text-ink-50 font-semibold text-base px-7 py-3.5 rounded-full hover:border-gold-400/40 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              (424) 653-9123
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

