import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { DesignShowcaseSection } from "@/components/sections/DesignShowcaseSection";
import { ShareCardsSection } from "@/components/sections/ShareCardsSection";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import { WhyWonderCardSection } from "@/components/sections/WhyWondercard";
import NfcCardPricing from "@/components/sections/NfcCardPricing";

export default function HomePage() {
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        {/* <StatsSection /> */}
        <FeaturesSection />
        <DesignShowcaseSection />
        <ShareCardsSection />
        <AnalyticsSection />
        {/* <WhyWonderCardSection /> */}
        <HowItWorksSection />

        <PricingSection />
        <NfcCardPricing />
        {/* <TestimonialsSection /> */}
        <FAQSection />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
}
