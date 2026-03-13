import { AlertCircle } from "lucide-react";

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
    title: "Atrasos, esquecimentos e dependência de uma pessoa",
    text: "O financeiro vive na cabeça de alguém. Quando essa pessoa falta, a operação fica exposta.",
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
    title: "Crescimento antes do financeiro estar estruturado",
    text: "A operação escala, mas a estrutura financeira não acompanha — o risco cresce invisível.",
  },
];

const PainPointsSection = () => {
  return (
    <section id="solucao" className="py-24 lg:py-32 bg-deep overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 80% 50%, hsl(221,83%,53%) 0%, transparent 60%)" }} />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="mb-14 max-w-2xl reveal">
          <div className="label-pill w-fit mb-5" style={{ background: "hsl(221 83% 53% / 0.12)", borderColor: "hsl(221 83% 53% / 0.25)", color: "hsl(221 83% 72%)" }}>
            Diagnóstico
          </div>
          <h2 className="font-display font-black text-3xl lg:text-4xl text-deep-foreground leading-[1.12] tracking-tight">
            Quando o financeiro perde método,{" "}
            <span className="text-shimmer">a operação inteira perde clareza.</span>
          </h2>
          <p className="font-body text-base text-deep-foreground/55 leading-relaxed mt-4">
            Esses são os sintomas mais comuns que a BPOn encontra antes de estruturar a operação.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((pain, i) => (
            <div
              key={pain.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 6)} group flex flex-col gap-3 p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/7 hover:border-white/15 transition-all duration-200`}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-display font-black text-4xl text-white/6 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <AlertCircle size={15} className="text-primary/60 flex-shrink-0 mt-1" />
              </div>
              <h3 className="font-display font-bold text-[15px] text-white/90 leading-snug">
                {pain.title}
              </h3>
              <p className="font-body text-sm text-white/45 leading-relaxed">
                {pain.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
