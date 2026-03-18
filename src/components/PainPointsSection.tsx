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
    <section id="solucao" className="py-24 lg:py-32 relative overflow-hidden bg-background">

      {/* Decoração sutil de fundo */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(var(--primary) / 0.04) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-primary/8 rounded-2xl rotate-12 animate-float-slow pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal max-w-xl">
          <span className="label-pill mb-5 inline-block">Diagnóstico</span>
          <h2 className="font-display font-black text-[2.1rem] lg:text-[2.8rem] leading-[1.05] tracking-[-0.025em] mt-3 text-headline">
            Esses sintomas<br />
            <span className="text-gradient-primary">são familiares?</span>
          </h2>
          <p className="font-body text-[14px] leading-relaxed mt-4 text-body">
            São os mais comuns que a BPOn encontra antes de estruturar uma operação.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex flex-col gap-4 p-7 lg:p-8 relative rounded-xl border cursor-default transition-all duration-300`}
              style={{
                background: activeCard === i ? "hsl(var(--surface-tint))" : "hsl(var(--surface))",
                borderColor: activeCard === i ? "hsl(var(--primary) / 0.22)" : "hsl(var(--border))",
                transform: activeCard === i ? "translateY(-3px)" : "translateY(0)",
                boxShadow: activeCard === i
                  ? "0 8px 28px hsl(var(--primary) / 0.10), 0 2px 8px hsl(218 55% 9% / 0.04)"
                  : "0 1px 3px hsl(218 55% 9% / 0.05)",
              }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Top accent bar — grows on hover */}
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-b-full transition-all duration-500"
                style={{
                  background: "hsl(var(--primary))",
                  transform: activeCard === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }} />

              {/* Número discreto */}
              <span className="font-display font-black text-[3rem] leading-none select-none absolute top-4 right-5 tabular-nums transition-all duration-400"
                style={{
                  color: activeCard === i ? "hsl(var(--primary) / 0.10)" : "hsl(var(--primary) / 0.05)",
                  transform: activeCard === i ? "scale(1.08)" : "scale(1)",
                }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Acento animado */}
              <div className="h-[2px] rounded-full transition-all duration-400"
                style={{
                  background: "hsl(var(--primary))",
                  width: activeCard === i ? "40px" : "20px",
                  opacity: activeCard === i ? 1 : 0.4,
                }} />

              <h3 className="font-display font-bold text-[14px] leading-snug pr-8 transition-colors duration-300 text-headline">
                {pain.title}
              </h3>

              <p className="font-body text-[13px] leading-relaxed text-body">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        {/* Strip CTA */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-xl reveal border border-divider bg-surface">
          <p className="font-body text-[13px] leading-snug text-body">
            Se mais de um desses soa verdadeiro, a BPOn pode ajudar.
          </p>
          <a href="#diagnostico"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-[13px] hover:opacity-90 hover:scale-[1.03] transition-all duration-300 shadow-blue whitespace-nowrap">
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
