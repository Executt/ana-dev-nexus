import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SectionsGrid } from "@/components/SectionsGrid";
import { StatsSection } from "@/components/StatsSection";
import { HighlightsSection } from "@/components/HighlightsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SectionsGrid />
        <StatsSection />
        <HighlightsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
