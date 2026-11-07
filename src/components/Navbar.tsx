"use client";

import { useState, useEffect } from "react";
import { Phone, Zap, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "The Quest", href: "#quest" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-glass-strong border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-gold group-hover:scale-110 transition-transform duration-300 border border-gold-400/20 bg-ink-900 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="The Ezekiel Technique"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-xl gradient-gold blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold text-ink-50 leading-none">
                The Ezekiel
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold mt-0.5">
                Technique
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-ink-200 hover:text-gold-300 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="tel:4246539123"
              className="hidden md:flex items-center gap-2 text-sm text-ink-100 hover:text-gold-300 transition-colors duration-300 group"
            >
              <span className="w-9 h-9 rounded-full border-glass bg-glass-light flex items-center justify-center group-hover:border-gold-400/40 transition-colors duration-300">
                <Phone className="w-4 h-4 text-gold-400" />
              </span>
              <span className="font-medium">(424) 653-9123</span>
            </a>

            <a
              href="#quest"
              className="hidden sm:inline-flex gradient-gold text-ink-950 font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] relative overflow-hidden group"
            >
              <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
              <span className="relative z-10 flex items-center gap-1.5">
                <Zap className="w-4 h-4 fill-ink-950" />
                Begin Your Quest
              </span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl border-glass bg-glass-light flex items-center justify-center text-ink-100 hover:text-gold-300 transition-colors duration-300"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-md animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-ink-900 border-l border-white/5 p-6 animate-slide-right overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-gold-400/20 shadow-gold bg-ink-900 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="The Ezekiel Technique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-display text-base font-bold text-ink-50">
                    The Ezekiel
                  </div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-gold-400 font-semibold">
                    Technique
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-xl border-glass bg-glass-light flex items-center justify-center text-ink-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3.5 rounded-xl text-ink-100 hover:bg-gold-400/10 hover:text-gold-300 transition-all duration-300 text-base font-medium animate-fade-up"
                  style={{
                    animationDelay: `${idx * 60}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
              <a
                href="tel:4246539123"
                className="flex items-center gap-3 text-ink-100 hover:text-gold-300 transition-colors duration-300"
              >
                <span className="w-10 h-10 rounded-full border-glass bg-glass-light flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold-400" />
                </span>
                <div>
                  <div className="text-xs text-ink-400 uppercase tracking-wider">
                    Call Now
                  </div>
                  <div className="font-medium">(424) 653-9123</div>
                </div>
              </a>

              <a
                href="#quest"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full gradient-gold text-ink-950 font-semibold text-center py-3.5 rounded-full hover:shadow-gold-lg transition-all duration-300"
              >
                Begin Your Quest
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

