import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ValuePerceptionStrip from "@/components/ValuePerceptionStrip";
import PositioningSection from "@/components/PositioningSection";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import InstagramSection from "@/components/InstagramSection";
import FormSection from "@/components/FormSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ValuePerceptionStrip />
        <PositioningSection />
        <PainPointsSection />
        <ServicesSection />
        <MethodSection />
        <InstagramSection />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
