import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import HumanSection from "@/components/HumanSection";
import PainPointsSection from "@/components/PainPointsSection";
import ForWhomSection from "@/components/ForWhomSection";
import ServicesSection from "@/components/ServicesSection";
import CFOVisionSection from "@/components/CFOVisionSection";
import MethodSection from "@/components/MethodSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AuthoritySection from "@/components/AuthoritySection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <PositioningSection />
        <HumanSection />
        <PainPointsSection />
        <ForWhomSection />
        <ServicesSection />
        <CFOVisionSection />
        <MethodSection />
        <BeforeAfterSection />
        <AuthoritySection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
