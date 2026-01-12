import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InfraDashboard } from "@/components/InfraDashboard";
import { SectionsGrid } from "@/components/SectionsGrid";
import { StatsSection } from "@/components/StatsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <InfraDashboard />
        <SectionsGrid />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
