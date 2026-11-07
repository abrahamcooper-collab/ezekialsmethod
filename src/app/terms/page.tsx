import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Concierge from "@/components/Concierge";
import { Award, Check, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | The Ezekiel Technique — Hollywood, CA",
  description:
    "Terms of Service, studio policies, and coaching protocol agreements for The Ezekiel Technique.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 antialiased selection:bg-gold-400/30 selection:text-gold-200">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center gap-2 text-xs text-ink-400 uppercase tracking-widest font-semibold">
            <Link href="/" className="hover:text-gold-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-gold-400">Terms of Service</span>
          </div>
        </div>

        {/* Content Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
              <FileCheck className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
                Studio Standards
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-50 mb-4">
              Terms & Studio Protocols
            </h1>
            <p className="text-sm text-ink-400">
              Last updated: January 2026 · The Ezekiel Technique, Hollywood, CA
            </p>
          </div>

          <div className="rounded-3xl bg-glass-strong border-glass p-8 lg:p-12 shadow-premium space-y-8 text-ink-200 leading-relaxed text-sm">
            <section>
              <h2 className="font-display text-xl font-bold text-ink-50 mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-400" />
                1. Professional Scope & Craft Conditioning
              </h2>
              <p>
                The Ezekiel Technique delivers elite performance coaching, somatic
                conditioning, acting exertion training, and sports psychology
                protocols. Services provided are intended for professional artists,
                public speakers, and performers seeking craft mastery.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-ink-50 mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-gold-400" />
                2. Results Guarantee Policy
              </h2>
              <p>
                We stand behind our methodology. If a client attends all scheduled
                sessions, completes the required out-of-studio calibration drills,
                and fully engages with the designated protocol without experiencing
                meaningful, measurable improvement, we continue coaching at no
                additional charge until the target capability is achieved.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-ink-50 mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-gold-400" />
                3. Studio Attendance & Scheduling
              </h2>
              <p>
                Private sessions at our Hollywood facility or remote video studio
                require 24-hour advance notice for rescheduling, except in cases
                of sudden production call sheet adjustments or emergency studio
                auditions, which our team accommodates with priority.
              </p>
            </section>

            <section className="pt-6 border-t border-white/5">
              <h3 className="font-semibold text-ink-50 mb-2">Direct Contact</h3>
              <p>
                For questions regarding studio terms, contracts, or invoicing:{" "}
                <a
                  href="mailto:connect@ezekieltechnique.com"
                  className="text-gold-300 hover:underline"
                >
                  connect@ezekieltechnique.com
                </a>{" "}
                or call{" "}
                <a href="tel:4246539123" className="text-gold-300 hover:underline">
                  (424) 653-9123
                </a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
      <StickyBar />
      <Concierge />
    </div>
  );
}
