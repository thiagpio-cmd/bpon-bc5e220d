import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import InstagramSection from "@/components/InstagramSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <PositioningSection />
        <PainPointsSection />
        <ServicesSection />
        <MethodSection />
        <InstagramSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
