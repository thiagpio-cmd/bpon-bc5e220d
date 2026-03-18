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
  return (
    <section id="solucao" className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "hsl(218 55% 8%)" }}>

      {/* Fundo com variação sutil */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 80% 20%, hsl(220 79% 46% / 0.06) 0%, transparent 65%)" }} />

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

        {/* Grid de cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{ background: "hsl(218 40% 14%)" }}>
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex flex-col gap-3.5 p-7 lg:p-8 relative transition-colors duration-200`}
              style={{ background: "hsl(218 55% 8%)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "hsl(220 55% 10%)")}
              onMouseLeave={e => (e.currentTarget.style.background = "hsl(218 55% 8%)")}
            >
              {/* Número discreto */}
              <span className="font-display font-black text-[2.8rem] leading-none select-none absolute top-5 right-6 tabular-nums"
                style={{ color: "hsl(220 79% 46% / 0.07)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Acento */}
              <div className="w-6 h-[2px] rounded-full group-hover:w-10 transition-all duration-300"
                style={{ background: "hsl(220 79% 52%)" }} />

              {/* Título — bem visível */}
              <h3 className="font-display font-bold text-[14px] leading-snug pr-8"
                style={{ color: "hsl(210 50% 92%)" }}>
                {pain.title}
              </h3>

              {/* Texto */}
              <p className="font-body text-[13px] leading-relaxed"
                style={{ color: "hsl(210 18% 56%)" }}>
                {pain.text}
              </p>
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
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-[13px] hover:opacity-90 transition-all shadow-blue whitespace-nowrap">
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
