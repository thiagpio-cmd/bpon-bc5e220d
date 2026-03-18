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
    <section id="solucao" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "hsl(218 55% 8%)" }}>

      {/* Fundo */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 80% 20%, hsl(220 79% 46% / 0.06) 0%, transparent 65%)" }} />

      {/* Animated floating accent */}
      <div className="absolute top-20 right-16 w-16 h-16 border border-primary/10 rounded-xl rotate-45 animate-float-slow pointer-events-none hidden lg:block" />
      <div className="absolute bottom-32 left-12 w-8 h-8 border border-primary/15 rounded-lg -rotate-12 animate-float pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal max-w-lg">
          <span className="label-pill-dark mb-5 inline-block">Diagnóstico</span>
          <h2 className="font-display font-black text-[2.1rem] lg:text-[2.8rem] leading-[1.05] tracking-[-0.025em] mt-3"
            style={{ color: "hsl(0 0% 96%)" }}>
            Esses sintomas<br />
            <span className="text-shimmer">são familiares?</span>
          </h2>
          <p className="font-body text-[14px] leading-relaxed mt-4"
            style={{ color: "hsl(210 20% 58%)" }}>
            São os mais comuns que a BPOn encontra antes de estruturar uma operação.
          </p>
        </div>

        {/* Grid de cards com hover interativo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{ background: "hsl(218 40% 14%)" }}>
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex flex-col gap-3.5 p-7 lg:p-8 relative cursor-default`}
              style={{
                background: activeCard === i ? "hsl(220 55% 11%)" : "hsl(218 55% 8%)",
                transition: "background 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Top accent bar — grows on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-500"
                style={{
                  background: "hsl(220 79% 52%)",
                  transform: activeCard === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                }} />

              {/* Número discreto com glow on hover */}
              <span className="font-display font-black text-[2.8rem] leading-none select-none absolute top-5 right-6 tabular-nums transition-all duration-500"
                style={{
                  color: activeCard === i ? "hsl(220 79% 46% / 0.15)" : "hsl(220 79% 46% / 0.07)",
                  transform: activeCard === i ? "scale(1.1)" : "scale(1)",
                }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Acento animado */}
              <div className="h-[2px] rounded-full transition-all duration-500"
                style={{
                  background: "hsl(220 79% 52%)",
                  width: activeCard === i ? "40px" : "24px",
                }} />

              <h3 className="font-display font-bold text-[14px] leading-snug pr-8 transition-colors duration-300"
                style={{ color: activeCard === i ? "hsl(210 60% 95%)" : "hsl(210 50% 92%)" }}>
                {pain.title}
              </h3>

              <p className="font-body text-[13px] leading-relaxed transition-colors duration-300"
                style={{ color: activeCard === i ? "hsl(210 18% 66%)" : "hsl(210 18% 56%)" }}>
                {pain.text}
              </p>

              {/* Glow de fundo no hover */}
              <div className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  opacity: activeCard === i ? 1 : 0,
                  background: "radial-gradient(ellipse at 50% 0%, hsl(220 79% 46% / 0.05) 0%, transparent 70%)",
                }} />
            </div>
          ))}
        </div>

        {/* Strip CTA */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-xl reveal"
          style={{ border: "1px solid hsl(218 40% 16%)", background: "hsl(218 50% 10% / 0.7)" }}>
          <p className="font-body text-[13px] leading-snug"
            style={{ color: "hsl(210 25% 62%)" }}>
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
