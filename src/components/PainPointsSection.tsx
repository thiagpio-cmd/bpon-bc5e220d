import { useState } from "react";

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
      <div className="absolute bottom-16 left-8 w-16 h-16 border border-primary/8 rounded-2xl rotate-12 animate-float-slow pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal max-w-lg">
          <span className="label-pill mb-4 inline-block">Diagnóstico</span>
          <h2 className="font-display font-black text-[2rem] lg:text-[2.6rem] leading-[1.06] tracking-[-0.024em] mt-3 mb-4 text-headline">
            Esses sintomas<br />
            <span className="text-gradient-primary">são familiares?</span>
          </h2>
          <p className="font-body text-[13.5px] leading-relaxed text-body">
            São os mais comuns que a BPOn encontra antes de estruturar uma operação.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} flex flex-col gap-3.5 p-6 relative rounded-xl border cursor-default transition-all duration-300`}
              style={{
                background: activeCard === i ? "hsl(var(--surface-tint))" : "hsl(var(--surface))",
                borderColor: activeCard === i ? "hsl(var(--primary) / 0.20)" : "hsl(var(--border))",
                transform: activeCard === i ? "translateY(-3px)" : "translateY(0)",
                boxShadow: activeCard === i
                  ? "0 8px 28px hsl(var(--primary) / 0.09), 0 2px 8px hsl(218 55% 9% / 0.04)"
                  : "0 1px 3px hsl(218 55% 9% / 0.04)",
              }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full transition-all duration-500"
                style={{
                  background: "hsl(var(--primary))",
                  transform: activeCard === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }} />

              {/* Número watermark */}
              <span className="font-display font-black text-[2.6rem] leading-none select-none absolute top-3.5 right-4 tabular-nums transition-all duration-300"
                style={{
                  color: activeCard === i ? "hsl(var(--primary) / 0.09)" : "hsl(var(--primary) / 0.05)",
                }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Acento */}
              <div className="h-[2px] rounded-full transition-all duration-300 mt-1"
                style={{
                  background: "hsl(var(--primary))",
                  width: activeCard === i ? "36px" : "18px",
                  opacity: activeCard === i ? 1 : 0.35,
                }} />

              <h3 className="font-display font-bold text-[13.5px] leading-snug pr-10 text-headline">
                {pain.title}
              </h3>
              <p className="font-body text-[12.5px] leading-relaxed text-body">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        {/* Strip CTA */}
        <div className="mt-5 cta-strip reveal">
          <p className="font-body text-[13px] leading-snug text-body">
            Se mais de um desses soa verdadeiro, a BPOn pode ajudar.
          </p>
          <a href="#diagnostico"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-blue whitespace-nowrap">
            Solicitar diagnóstico
          </a>
        </div>

      </div>
    </section>
  );
};

export default PainPointsSection;
