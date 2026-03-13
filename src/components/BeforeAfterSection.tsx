import { X, Check } from "lucide-react";

const before = [
  "Caixa sem leitura confiável",
  "Controles dependentes de uma pessoa",
  "Fechamento feito no aperto",
  "Decisão baseada em estimativa",
  "Rotina financeira por improviso",
  "Dados espalhados e sem padrão",
];

const after = [
  "Caixa com posição clara e atualizada",
  "Rotina estruturada e processual",
  "Fechamento gerencial com critério",
  "Decisão com base financeira real",
  "Cadência financeira que funciona",
  "Base centralizada e confiável",
];

const BeforeAfterSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-14 reveal">
          <div className="label-pill w-fit mb-5">O que muda na prática</div>
          <h2 className="font-display font-black text-3xl lg:text-4xl text-headline leading-[1.12] tracking-tight">
            O impacto real de uma rotina financeira estruturada.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">

          {/* Before — warmer neutral gray */}
          <div className="reveal rounded-2xl border border-[hsl(215,18%,84%)] bg-[hsl(215,20%,97%)] p-8">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-8 rounded-full bg-[hsl(215,18%,88%)] border border-[hsl(215,18%,80%)] flex items-center justify-center">
                <X size={14} className="text-[hsl(215,16%,52%)]" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-sm text-[hsl(215,20%,42%)] uppercase tracking-widest">Sem estrutura</span>
            </div>
            <div className="space-y-0">
              {before.map((item) => (
                <div key={item} className="flex items-center gap-3 py-3.5 border-b border-[hsl(215,18%,88%)] last:border-0">
                  <div className="w-5 h-5 rounded-full border border-[hsl(215,18%,76%)] bg-[hsl(215,18%,92%)] flex items-center justify-center flex-shrink-0">
                    <X size={10} className="text-[hsl(215,16%,52%)]" strokeWidth={2.5} />
                  </div>
                  <span className="font-body text-sm text-[hsl(215,20%,42%)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After — vivid blue tint */}
          <div className="reveal reveal-delay-2 rounded-2xl border border-primary/25 bg-surface-tint p-8 relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-7 relative">
              <div className="w-8 h-8 rounded-full bg-primary/12 border border-primary/30 flex items-center justify-center">
                <Check size={14} className="text-primary" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-sm text-primary uppercase tracking-widest">Com a BPOn</span>
            </div>
            <div className="space-y-0 relative">
              {after.map((item) => (
                <div key={item} className="flex items-center gap-3 py-3.5 border-b border-primary/12 last:border-0">
                  <div className="w-5 h-5 rounded-full border border-primary/35 bg-primary/12 flex items-center justify-center flex-shrink-0">
                    <Check size={10} className="text-primary" strokeWidth={2.5} />
                  </div>
                  <span className="font-body text-sm text-headline font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
