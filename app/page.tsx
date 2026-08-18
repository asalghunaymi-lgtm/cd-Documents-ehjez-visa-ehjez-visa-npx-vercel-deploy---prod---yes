import { Hero } from "@/components/home/hero";
import { DestinationsSection } from "@/components/home/destinations-section";
import { HowItWorks } from "@/components/home/how-it-works";
import { TrustSection } from "@/components/home/trust-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DestinationsSection />
      <HowItWorks />
      <TrustSection />
      <CtaSection />
    </>
  );
}
