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
    title: "Decisões tomadas sem base consolidada",
    text: "Contratações, investimentos e negociações acontecem sem leitura gerencial confiável.",
  },
  {
    title: "Crescimento sem estrutura financeira por trás",
    text: "A operação escala, mas o financeiro não acompanha — e o risco cresce invisível.",
  },
];

const PainPointsSection = () => {
  return (
    <section id="solucao" className="py-28 lg:py-36 bg-deep relative overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 85% 30%, hsl(221,83%,53%) 0%, transparent 55%), radial-gradient(circle at 10% 80%, hsl(218,82%,5%) 0%, transparent 50%)",
          opacity: 0.12,
        }}
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(hsl(221 83% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(221 83% 60%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <div className="mb-16 lg:mb-20 reveal">
          <span className="label-pill-dark">Diagnóstico</span>
          <h2 className="font-display font-black text-[2.4rem] lg:text-[3.2rem] xl:text-[3.6rem] text-white leading-[1.0] tracking-[-0.02em] mt-6 max-w-2xl">
            Esses sintomas<br />
            <span className="text-shimmer">são familiares?</span>
          </h2>
          <p className="font-body text-base lg:text-lg text-white/50 leading-relaxed mt-5 max-w-lg">
            São os mais comuns que a BPOn encontra antes de estruturar uma operação.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex flex-col gap-4 p-7 lg:p-8 bg-[hsl(218,82%,9%)] hover:bg-[hsl(220,70%,12%)] transition-colors duration-300 relative overflow-hidden`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Number watermark */}
              <span className="font-display font-black text-[5rem] leading-none text-white/[0.04] absolute -right-2 -top-2 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Accent line */}
              <div className="w-8 h-[2px] bg-primary/50 rounded-full group-hover:w-14 group-hover:bg-primary transition-all duration-300" />

              <h3 className="font-display font-bold text-base lg:text-[17px] text-white leading-snug relative">
                {pain.title}
              </h3>
              <p className="font-body text-sm text-white/45 leading-relaxed relative">
                {pain.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-white/10 bg-white/4 reveal">
          <p className="font-display font-bold text-base text-white/80">
            Se mais de um desses soa verdadeiro, a BPOn pode ajudar.
          </p>
          <a
            href="#diagnostico"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body font-bold text-sm hover:bg-primary/90 transition-all shadow-blue whitespace-nowrap"
          >
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
