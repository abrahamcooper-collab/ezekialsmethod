import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Concierge from "@/components/Concierge";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | The Ezekiel Technique — Hollywood, CA",
  description:
    "Privacy Policy and client confidentiality protocols for The Ezekiel Technique performance coaching in Hollywood, CA.",
};

export default function PrivacyPolicyPage() {
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
            <span className="text-gold-400">Privacy Policy</span>
          </div>
        </div>

        {/* Content Article */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20 mb-6">
              <Lock className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-300">
                Medical-Grade Discretion
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink-50 mb-4">
              Privacy & Confidentiality Policy
            </h1>
            <p className="text-sm text-ink-400">
              Last updated: January 2026 · The Ezekiel Technique, Hollywood, CA
            </p>
          </div>

          <div className="rounded-3xl bg-glass-strong border-glass p-8 lg:p-12 shadow-premium space-y-8 text-ink-200 leading-relaxed text-sm">
            <section>
              <h2 className="font-display text-xl font-bold text-ink-50 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-gold-400" />
                1. Our Commitment to Elite Discretion
              </h2>
              <p>
                At The Ezekiel Technique, we operate with the highest standards of
                professional discretion and confidentiality. Many of our clients are
                high-profile working actors, public figures, corporate executives, and
                industry leaders. All training sessions, biometric calibrations,
                audition preparations, and personal discussions are held under strict
                confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-ink-50 mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-gold-400" />
                2. Information We Collect
              </h2>
              <p className="mb-3">
                We collect personal information only when directly and voluntarily
                submitted by you:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-ink-300">
                <li>Contact information (name, telephone number, email address)</li>
                <li>Performance background, craft discipline, and career goals</li>
                <li>Upcoming audition or keynote parameters submitted via our intake form</li>
                <li>Biometric and calibration notes recorded during private sessions</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-ink-50 mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-gold-400" />
                3. How We Use Your Information
              </h2>
              <p>
                Information collected is used strictly to design bespoke training
                protocols, schedule in-studio or remote sessions, and calibrate
                your performance goals. We never sell, rent, lease, or share client
                identities, phone numbers, or training details with casting
                directors, agents, production companies, or third parties without
                express written consent.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-ink-50 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-gold-400" />
                4. Confidential Studio Entrance
              </h2>
              <p>
                Our Hollywood studio at 1938 Argyle Avenue features private arrival
                protocols and staggered scheduling to ensure high-profile talent
                can train with complete anonymity and security.
              </p>
            </section>

            <section className="pt-6 border-t border-white/5">
              <h3 className="font-semibold text-ink-50 mb-2">Questions Regarding Discretion</h3>
              <p>
                For questions regarding non-disclosure agreements (NDAs) or custom
                privacy arrangements, contact our intake desk directly at{" "}
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
