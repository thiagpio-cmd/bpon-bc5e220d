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
    <section id="solucao" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(222,60%,7%) 0%, hsl(218,70%,9%) 100%)" }}>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(210 80% 72% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 72% / 1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      {/* Top glow */}
      <div className="absolute -top-40 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.08) 0%, transparent 65%)" }} />

      <div className="container mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <div className="mb-14 lg:mb-16 reveal max-w-xl">
          <span className="label-pill-dark mb-5 inline-block">Diagnóstico</span>
          <h2 className="font-display font-black text-[2.2rem] lg:text-[3rem] text-white leading-[1.05] tracking-[-0.025em] mt-3">
            Esses sintomas<br />
            <span className="text-shimmer">são familiares?</span>
          </h2>
          <p className="font-body text-[14px] leading-relaxed mt-5" style={{ color: "hsl(210 25% 55%)" }}>
            São os mais comuns que a BPOn encontra antes de estruturar uma operação.
          </p>
        </div>

        {/* Grid — bordered cells */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden" style={{ border: "1px solid hsl(210 30% 22%)" }}>
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex flex-col gap-4 p-7 lg:p-8 relative overflow-hidden
                ${i < 3 ? "border-b" : ""}
                ${i % 3 !== 2 ? "lg:border-r" : ""}
                ${i % 2 === 0 ? "sm:border-r" : ""}
                hover:bg-white/[0.03] transition-colors duration-250`}
              style={{
                borderColor: "hsl(210 30% 20%)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, hsl(220 79% 46% / 0.07) 0%, transparent 100%)" }} />

              {/* Accent line */}
              <div className="w-5 h-[2px] rounded-full group-hover:w-8 transition-all duration-300"
                style={{ background: "hsl(220 79% 50% / 0.55)" }} />

              {/* Title — visível e forte */}
              <h3 className="font-display font-bold text-[14px] leading-snug relative"
                style={{ color: "hsl(210 40% 88%)" }}>
                {pain.title}
              </h3>

              {/* Text */}
              <p className="font-body text-[13px] leading-relaxed relative"
                style={{ color: "hsl(210 20% 52%)" }}>
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 lg:p-6 rounded-xl reveal"
          style={{ border: "1px solid hsl(210 30% 18%)", background: "hsl(220 50% 9% / 0.6)" }}>
          <p className="font-display font-semibold text-[14px] leading-snug" style={{ color: "hsl(210 30% 65%)" }}>
            Se mais de um desses soa verdadeiro, a BPOn pode ajudar.
          </p>
          <a
            href="#diagnostico"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-[13px] tracking-wide hover:bg-primary/90 transition-all shadow-blue whitespace-nowrap"
          >
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
