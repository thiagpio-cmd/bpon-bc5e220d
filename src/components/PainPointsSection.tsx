import { AlertCircle } from "lucide-react";

const painPoints = [
  "Empresa faturando sem enxergar o caixa real.",
  "Controles espalhados entre planilhas, banco e conversas soltas.",
  "Atrasos, esquecimentos e dependência de uma única pessoa.",
  "Falta de clareza sobre o que entra, sai e sobra.",
  "Decisões tomadas sem leitura gerencial consistente.",
  "Operação crescendo antes do financeiro estar estruturado.",
];

const PainPointsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Problemas que a BPOn resolve
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
            Quando o financeiro perde método, a{" "}
            <span className="gradient-text-primary">operação inteira</span> perde clareza.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point, i) => (
            <div
              key={point}
              className="group relative flex gap-4 p-5 rounded-xl border border-divider bg-white shadow-card card-hover overflow-hidden"
            >
              {/* Background number */}
              <span className="absolute right-4 top-2 font-display font-extrabold text-5xl text-primary/5 select-none pointer-events-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/6 flex items-center justify-center border border-primary/12">
                <AlertCircle size={16} className="text-primary" />
              </div>

              <p className="font-body text-sm text-foreground leading-snug font-medium pt-1 pr-6">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
