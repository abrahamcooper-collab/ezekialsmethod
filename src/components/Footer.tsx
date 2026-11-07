"use client";

import { Star, Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const PROTOCOLS_FOOTER = [
  { id: "acting-exertion", title: "Acting Exertion Mastery" },
  { id: "vessel-preservation", title: "Vessel Preservation" },
  { id: "performance-science", title: "Performance Science Protocols" },
  { id: "high-stakes-training", title: "High-Stakes Performance Training" },
];

const EXPLORE_LINKS = [
  { label: "Services", href: "#services" },
  { label: "The Quest", href: "#quest" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#case-studies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const TRUST_TAGS = [
  { icon: Shield, label: "Results Guaranteed" },
  { icon: Star, label: "5.0 Rating" },
  { icon: Shield, label: "Fully Confidential" },
  { icon: Star, label: "15 Years in Hollywood" },
];

const SOCIAL_LINKS = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: YoutubeIcon, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative noise-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Pre-Footer Action Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-gold-400/10 via-gold-400/5 to-transparent border border-gold-400/20 p-8 lg:p-12 mb-16 text-center overflow-hidden relative">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-ink-50 mb-4">
              Your edge is one decision away
            </h3>
            <p className="text-ink-300 max-w-xl mx-auto mb-6">
              Join 1,200+ performers who transformed their craft with The Ezekiel
              Technique.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#quest"
                className="group relative inline-flex items-center justify-center gap-2 gradient-gold text-ink-950 font-semibold text-base px-8 py-4 rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] overflow-hidden"
              >
                <span className="absolute inset-0 shimmer-bg animate-shimmer opacity-50" />
                <span className="relative z-10 flex items-center gap-2">
                  Begin Your Quest
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>

              <a
                href="tel:4246539123"
                className="inline-flex items-center justify-center gap-2 bg-glass-light border-glass text-ink-50 font-semibold text-base px-8 py-4 rounded-full hover:border-gold-400/40 hover:bg-gold-400/5 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-gold-400" />
                (424) 653-9123
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Brand Info & Socials */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-gold border border-gold-400/20 bg-ink-900 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="The Ezekiel Technique"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-display text-lg font-bold text-ink-50">
                  The Ezekiel Technique
                </div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold-400 font-semibold">
                  Performance Coaching
                </div>
              </div>
            </div>

            <p className="text-sm text-ink-400 leading-relaxed max-w-xs mb-6">
              Elite performance coaching for actors, performers, and public
              speakers. Hollywood, California. Train at the absolute edge of what
              you&apos;re capable of.
            </p>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 text-gold-400 fill-gold-400"
                />
              ))}
              <span className="text-sm text-ink-400 ml-2">
                5.0 · 247 reviews
              </span>
            </div>

            <div className="flex gap-2">
              {SOCIAL_LINKS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    aria-label={item.label}
                    className="w-9 h-9 rounded-xl bg-glass-light border-glass flex items-center justify-center text-ink-300 hover:text-gold-300 hover:border-gold-400/30 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold text-ink-50 mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {PROTOCOLS_FOOTER.map((item) => (
                <li key={item.id}>
                  <a
                    href="#services"
                    className="text-sm text-ink-400 hover:text-gold-300 transition-colors duration-300"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h4 className="text-sm font-semibold text-ink-50 mb-4 uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-400 hover:text-gold-300 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-ink-50 mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-ink-400">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href="tel:4246539123"
                  className="hover:text-gold-300 transition-colors duration-300"
                >
                  (424) 653-9123
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-400">
                <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <a
                  href="mailto:connect@ezekieltechnique.com"
                  className="hover:text-gold-300 transition-colors duration-300 break-all"
                >
                  connect@ezekieltechnique.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-400">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Hollywood, CA 90068</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-400">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <div>Mon–Fri: 8AM–8PM</div>
                  <div>Sat: 9AM–4PM</div>
                  <div className="text-ink-600">Sun: By appointment</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-white/5">
          {TRUST_TAGS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 text-ink-400"
              >
                <Icon className="w-4 h-4 text-gold-400/60" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            );
          })}
        </div>

        {/* Legal & Copyright Strip */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-500">
            © 2026 The Ezekiel Technique. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-ink-500 hover:text-gold-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-ink-500 hover:text-gold-300 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs text-ink-500 hover:text-gold-300 transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
