import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import EditorialSection from "@/components/EditorialSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import ApproachSection from "@/components/ApproachSection";
import MissionSection from "@/components/MissionSection";
import FitSection from "@/components/FitSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      <Navigation />
      <Hero />
      <ProblemSection />
      <EditorialSection />
      <PortfolioPreview />
      <ApproachSection />
      <MissionSection />
      <FitSection />
      <CTASection />
    </div>
  );
};

export default Index;
