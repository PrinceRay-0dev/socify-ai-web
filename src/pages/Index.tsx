import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TeamCarousel from "@/components/TeamCarousel";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TeamCarousel />
    </div>
  );
};

export default Index;