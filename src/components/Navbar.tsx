"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Phone,
  Zap,
  Menu,
  X,
  ChevronDown,
  Drama,
  HeartPulse,
  BrainCircuit,
  Flame,
  MapPin,
  ArrowRight,
  Sparkles,
  Building,
} from "lucide-react";

const CORE_SERVICES = [
  {
    title: "Acting Exertion Mastery",
    desc: "Emotional range & somatic stamina",
    href: "/services/acting-exertion",
    icon: Drama,
    badge: "12-Wk Intensive",
  },
  {
    title: "Vessel Preservation",
    desc: "Voice health & tension release",
    href: "/services/vessel-preservation",
    icon: HeartPulse,
    badge: "Ongoing",
  },
  {
    title: "Performance Science",
    desc: "Arousal regulation & flow states",
    href: "/services/performance-science",
    icon: BrainCircuit,
    badge: "8-Wk Protocol",
  },
  {
    title: "High-Stakes Training",
    desc: "Pressure inoculation & audition prep",
    href: "/services/high-stakes-training",
    icon: Flame,
    badge: "6-Wk Intensive",
  },
];

const SPECIALIZED_SERVICES = [
  {
    title: "Ezekiel Coaching",
    desc: "Private 1-on-1 bespoke calibration",
    href: "/services/ezekiel-coaching",
  },
  {
    title: "Ezekiel Teaching",
    desc: "Selective studio cohorts & masterclasses",
    href: "/services/ezekiel-teaching",
  },
  {
    title: "Audition Strategy",
    desc: "High-stakes casting & chemistry reads",
    href: "/services/auditioning-performance-strategy",
  },
  {
    title: "Neuro Calibration",
    desc: "Sports neuroscience & HRV protocols",
    href: "/services/neuro-calibration",
  },
];

const LOCATIONS_LIST = [
  {
    name: "Hollywood",
    desc: "Flagship Studio · 1938 Argyle Ave",
    href: "/locations/hollywood",
    tag: "Headquarters",
  },
  {
    name: "Santa Monica",
    desc: "Westside & Silicon Beach Talent",
    href: "/locations/santa-monica",
    tag: "Westside",
  },
  {
    name: "Burbank",
    desc: "Minutes from WB & Disney Lots",
    href: "/locations/burbank",
    tag: "Studios",
  },
  {
    name: "Bel Air",
    desc: "Discreet Studio & Private Sessions",
    href: "/locations/bel-air",
    tag: "Private",
  },
  {
    name: "San Diego",
    desc: "Weekend Intensives & Remote",
    href: "/locations/san-diego",
    tag: "Regional",
  },
];

const STANDARD_NAV_LINKS = [
  { label: "The Quest", href: "/#quest" },
  { label: "Process", href: "/#process" },
  { label: "Results", href: "/#case-studies" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  // Mobile accordion toggles
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const servicesDropdownTimer = useRef<NodeJS.Timeout | null>(null);
  const locationsDropdownTimer = useRef<NodeJS.Timeout | null>(null);

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

  const handleServicesMouseEnter = () => {
    if (servicesDropdownTimer.current) clearTimeout(servicesDropdownTimer.current);
    setLocationsDropdownOpen(false);
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesDropdownTimer.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleLocationsMouseEnter = () => {
    if (locationsDropdownTimer.current) clearTimeout(locationsDropdownTimer.current);
    setServicesDropdownOpen(false);
    setLocationsDropdownOpen(true);
  };

  const handleLocationsMouseLeave = () => {
    locationsDropdownTimer.current = setTimeout(() => {
      setLocationsDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-glass-strong border-b border-white/5 py-3 shadow-premium"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`px-3.5 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 cursor-pointer ${
                  servicesDropdownOpen
                    ? "text-gold-300"
                    : "text-ink-200 hover:text-gold-300"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 text-gold-400 ${
                    servicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Services Dropdown Panel */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-[580px] z-50 animate-fade-up">
                  <div className="rounded-3xl bg-glass-strong border border-gold-400/25 p-6 shadow-premium backdrop-blur-2xl">
                    <div className="grid grid-cols-2 gap-6 mb-4">
                      {/* Column 1: Core Protocols */}
                      <div>
                        <div className="text-[10px] uppercase font-semibold text-gold-400 tracking-wider mb-3 px-2 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          Core Protocols
                        </div>
                        <div className="space-y-1">
                          {CORE_SERVICES.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="p-2.5 rounded-xl hover:bg-gold-400/10 transition-all flex items-start gap-3 group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105">
                                  <Icon className="w-4 h-4 text-gold-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs font-semibold text-ink-100 group-hover:text-gold-200 transition-colors flex items-center justify-between">
                                    <span className="truncate">{item.title}</span>
                                  </div>
                                  <div className="text-[11px] text-ink-400 truncate">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Column 2: Advanced Formats */}
                      <div>
                        <div className="text-[10px] uppercase font-semibold text-gold-400 tracking-wider mb-3 px-2">
                          Specialized Programs
                        </div>
                        <div className="space-y-1">
                          {SPECIALIZED_SERVICES.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="p-2.5 rounded-xl hover:bg-gold-400/10 transition-all block group"
                            >
                              <div className="text-xs font-semibold text-ink-100 group-hover:text-gold-200 transition-colors">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-ink-400 truncate">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between px-2">
                      <Link
                        href="/services"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5"
                      >
                        <span>View All 8 Protocols & Syllabus</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] text-ink-500">
                        In-Studio & Remote
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={handleLocationsMouseEnter}
              onMouseLeave={handleLocationsMouseLeave}
            >
              <button
                type="button"
                onClick={() => setLocationsDropdownOpen(!locationsDropdownOpen)}
                className={`px-3.5 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-1.5 cursor-pointer ${
                  locationsDropdownOpen
                    ? "text-gold-300"
                    : "text-ink-200 hover:text-gold-300"
                }`}
              >
                <span>Service Areas</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 text-gold-400 ${
                    locationsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Service Areas Dropdown Panel */}
              {locationsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-[360px] z-50 animate-fade-up">
                  <div className="rounded-3xl bg-glass-strong border border-gold-400/25 p-5 shadow-premium backdrop-blur-2xl">
                    <div className="text-[10px] uppercase font-semibold text-gold-400 tracking-wider mb-3 px-2 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Southern California & Global
                    </div>

                    <div className="space-y-1 mb-3">
                      {LOCATIONS_LIST.map((loc) => (
                        <Link
                          key={loc.href}
                          href={loc.href}
                          onClick={() => setLocationsDropdownOpen(false)}
                          className="p-2.5 rounded-xl hover:bg-gold-400/10 transition-all flex items-center justify-between group"
                        >
                          <div>
                            <div className="text-xs font-semibold text-ink-100 group-hover:text-gold-200 transition-colors">
                              {loc.name}
                            </div>
                            <div className="text-[11px] text-ink-400">
                              {loc.desc}
                            </div>
                          </div>
                          <span className="text-[9px] font-semibold text-gold-400 px-2 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/20">
                            {loc.tag}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between px-2">
                      <Link
                        href="/locations"
                        onClick={() => setLocationsDropdownOpen(false)}
                        className="text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5"
                      >
                        <span>All Service Areas Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[10px] text-ink-500">
                        HQ: Hollywood
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Standard Anchor Nav Links */}
            {STANDARD_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-ink-200 hover:text-gold-300 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-1/2" />
              </Link>
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
              href="/#quest"
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
              className="lg:hidden w-10 h-10 rounded-xl border-glass bg-glass-light flex items-center justify-center text-ink-100 hover:text-gold-300 transition-colors duration-300 cursor-pointer"
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
          <div className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-ink-900 border-l border-white/5 p-6 animate-slide-right overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
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
                className="w-10 h-10 rounded-xl border-glass bg-glass-light flex items-center justify-center text-ink-100 cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Links with Accordions */}
            <nav className="flex flex-col gap-1.5">
              {/* Services Mobile Accordion */}
              <div className="rounded-2xl bg-glass-light border-glass overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full px-4 py-3 text-left font-medium text-ink-100 flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    Services & Protocols
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-400 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="px-4 pb-3 pt-1 space-y-1.5 border-t border-white/5 bg-ink-950/40">
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-gold-300 hover:underline"
                    >
                      View All 8 Protocols Hub →
                    </Link>
                    {CORE_SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-ink-300 hover:text-gold-200"
                      >
                        • {s.title}
                      </Link>
                    ))}
                    {SPECIALIZED_SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-ink-300 hover:text-gold-200"
                      >
                        • {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas Mobile Accordion */}
              <div className="rounded-2xl bg-glass-light border-glass overflow-hidden">
                <button
                  type="button"
                  onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                  className="w-full px-4 py-3 text-left font-medium text-ink-100 flex items-center justify-between cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-400" />
                    Service Areas
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-400 transition-transform ${
                      mobileLocationsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileLocationsOpen && (
                  <div className="px-4 pb-3 pt-1 space-y-1.5 border-t border-white/5 bg-ink-950/40">
                    <Link
                      href="/locations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-gold-300 hover:underline"
                    >
                      All Service Areas Guide →
                    </Link>
                    {LOCATIONS_LIST.map((loc) => (
                      <Link
                        key={loc.href}
                        href={loc.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-ink-300 hover:text-gold-200"
                      >
                        • {loc.name} ({loc.tag})
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Standard Nav Links */}
              {STANDARD_NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-2xl text-ink-100 hover:bg-gold-400/10 hover:text-gold-300 transition-all text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Footer CTA */}
            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
              <a
                href="tel:4246539123"
                className="flex items-center gap-3 text-ink-100 hover:text-gold-300 transition-colors"
              >
                <span className="w-10 h-10 rounded-full border-glass bg-glass-light flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold-400" />
                </span>
                <div>
                  <div className="text-[10px] text-ink-400 uppercase tracking-wider">
                    Call Direct
                  </div>
                  <div className="font-semibold text-sm">(424) 653-9123</div>
                </div>
              </a>

              <a
                href="/#quest"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full gradient-gold text-ink-950 font-semibold text-center py-3.5 rounded-full hover:shadow-gold-lg transition-all text-sm"
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
