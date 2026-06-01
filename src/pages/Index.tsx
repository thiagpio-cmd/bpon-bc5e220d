import { Helmet } from "react-helmet-async";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import PainPointsSection from "@/components/PainPointsSection";
import ServicesSection from "@/components/ServicesSection";
import ForWhomCasesSection from "@/components/ForWhomCasesSection";

import FAQSection, { faqs } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useScrollReveal();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Fintex BPO | BPO Financeiro com Leitura Gerencial</title>
        <meta
          name="description"
          content="Organize o financeiro da sua empresa com processo, rotina, fluxo de caixa, conciliação e fechamento gerencial. Solicite um diagnóstico com a Fintex BPO."
        />
        <link rel="canonical" href="https://fintexbpo.lovable.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fintexbpo.lovable.app/" />
        <meta property="og:title" content="Fintex BPO | BPO Financeiro com Leitura Gerencial" />
        <meta
          property="og:description"
          content="BPO Financeiro com leitura gerencial: rotina, fluxo de caixa, conciliação e fechamento mensal para PMEs no Brasil."
        />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <main>
        {/* ── Bloco 1: Âncora escura — proposta de valor ── */}
        <HeroSection />
        <TrustBar />

        {/* ── Bloco 2: Dores → Solução ── */}
        <div className="relative">
          <PainPointsSection />
          <ServicesSection />

          {/* ── Bloco 3: Para quem + Casos ── */}
          <ForWhomCasesSection />

          {/* ── Bloco 5: FAQ ── */}
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
