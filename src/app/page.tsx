import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import QuestSection from "@/components/QuestSection";
import TransformationsSection from "@/components/TransformationsSection";
import ProcessSection from "@/components/ProcessSection";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import Concierge from "@/components/Concierge";
import ExitIntentModal from "@/components/ExitIntentModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-950 text-ink-100 antialiased selection:bg-gold-400/30 selection:text-gold-200">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <QuestSection />
        <TransformationsSection />
        <ProcessSection />
        <WhySection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <LocationSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyBar />
      <Concierge />
      <ExitIntentModal />
    </div>
  );
}
