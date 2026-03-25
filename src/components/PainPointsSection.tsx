import { useState } from "react";
import { ArrowRight } from "lucide-react";

const painPoints = [
  {
    title: "Empresa faturando sem enxergar o caixa real",
    text: "Receita existe, mas a posição de sobra, pressão e disponível é sempre uma estimativa.",
  },
  {
    title: "Controles espalhados entre planilhas, banco e conversas",
    text: "Não existe fonte única. O dado correto depende de quem digitou por último.",
  },
  {
    title: "Financeiro que vive na cabeça de uma pessoa",
    text: "Quando essa pessoa falta, a operação inteira fica exposta. Nenhum processo segura.",
  },
  {
    title: "Falta de clareza sobre o que entra, sai e sobra",
    text: "A empresa opera sem saber com precisão o que está comprometido e o que está disponível.",
  },
  {
    title: "Decisões tomadas sem base financeira consolidada",
    text: "Contratações, investimentos e negociações acontecem sem leitura gerencial confiável.",
  },
  {
    title: "Crescimento sem estrutura financeira por trás",
    text: "A operação escala, mas o financeiro não acompanha — e o risco cresce invisível.",
  },
];

const PainPointsSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="solucao" className="py-20 lg:py-28 relative overflow-hidden section-alt section-edge-light section-from-dark">

      <div className="absolute top-0 right-0 w-[480px] h-[380px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary) / 0.04) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header — tipografia editorial, sem label-pill */}
        <div className="mb-12 lg:mb-16 reveal">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-5">
            Diagnóstico
          </p>
          <h2 className="font-display font-black leading-[1.03] tracking-[-0.03em] text-headline"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}>
            Esses sintomas
            <br />
            são familiares?
          </h2>
          <p className="font-body text-[13.5px] leading-relaxed text-body mt-5 max-w-md">
            São os mais comuns que a BPOn encontra antes de estruturar uma operação.
          </p>
        </div>

        {/* Grid — sem números decorativos, linhas horizontais como separadores */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-divider rounded-2xl overflow-hidden border border-divider">
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} flex flex-col gap-3 p-6 lg:p-7 cursor-default transition-all duration-250`}
              style={{
                background: activeCard === i ? "hsl(var(--surface-tint))" : "hsl(var(--surface))",
              }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Accent line */}
              <div className="h-px w-8 transition-all duration-400"
                style={{
                  background: "hsl(var(--primary))",
                  width: activeCard === i ? "48px" : "24px",
                  opacity: activeCard === i ? 1 : 0.4,
                }} />

              <h3 className="font-display font-bold text-[14px] leading-snug text-headline">
                {pain.title}
              </h3>
              <p className="font-body text-[12.5px] leading-relaxed" style={{ color: "hsl(var(--body))" }}>
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        {/* Strip CTA */}
        <div className="mt-5 cta-strip reveal">
          <p className="font-body text-[13px] leading-snug text-body">
            Esses sintomas existem na sua operação?{" "}
            <span className="text-headline font-medium">Solicite um diagnóstico.</span>
          </p>
          <a href="#diagnostico"
            className="group flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-blue whitespace-nowrap">
            Solicitar diagnóstico
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
