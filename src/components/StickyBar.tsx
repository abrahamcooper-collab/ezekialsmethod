"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowRight } from "lucide-react";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? scrollY / totalScroll : 0;
      // Show when scrolled down past initial view
      setVisible(progress > 0.15 && progress < 0.95);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 animate-fade-up hidden md:flex">
      <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-glass-strong border-glass shadow-premium">
        <a
          href="tel:4246539123"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-ink-100 hover:text-gold-300 transition-colors duration-300 text-sm font-medium"
        >
          <Phone className="w-4 h-4 text-gold-400" />
          (424) 653-9123
        </a>
        <div className="w-px h-6 bg-white/10" />
        <a
          href="#quest"
          className="group relative inline-flex items-center gap-2 gradient-gold text-ink-950 font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-gold transition-all duration-300 hover:scale-[1.03] overflow-hidden"
        >
          <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
          <span className="relative z-10 flex items-center gap-1.5">
            Begin Your Quest
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </div>
  );
}

