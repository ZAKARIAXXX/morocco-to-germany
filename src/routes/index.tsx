import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/landing/Background";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Timeline } from "@/components/landing/Timeline";
import { SocialProof } from "@/components/landing/SocialProof";
import { Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ausbildung Bridge — Morocco to a Paid German Ausbildung" },
      {
        name: "description",
        content:
          "The fastest, safest path from Morocco to a paid German Ausbildung. Professional CVs, motivation letters, expert 1:1 guidance and visa support.",
      },
      { property: "og:title", content: "Ausbildung Bridge — Morocco to a Paid German Ausbildung" },
      {
        property: "og:description",
        content:
          "Professional documents, expert guidance, and personalized support to land a paid Ausbildung in Germany — without the stress.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <HowItWorks />
        <Features />
        <Timeline />
        <SocialProof />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
