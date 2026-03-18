import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import MethodSection from "@/components/MethodSection";
import ForWhomSection from "@/components/ForWhomSection";
import HumanSection from "@/components/HumanSection";
import AuthoritySection from "@/components/AuthoritySection";
import CasesSection from "@/components/CasesSection";
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
        {/* ── Bloco 1: Âncora escura — proposta de valor ── */}
        <HeroSection />

        {/* ── Bloco 2: Jornada de descoberta — seções claras alternadas ── */}
        <div className="relative">
          <PainPointsSection />
          <ServicesSection />

          {/* ── Bloco 3: Âncora escura — método ── */}
          <MethodSection />

          <ForWhomSection />
          <HumanSection />
          <AuthoritySection />
          <CasesSection />
          <FAQSection />
        </div>

        {/* ── Bloco 4: Âncora escura — conversão ── */}
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
