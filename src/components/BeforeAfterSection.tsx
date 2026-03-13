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
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            O que muda na prática
          </span>
          <div className="divider-primary mt-3 mb-6" />
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
            O impacto real de uma rotina financeira estruturada.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Before */}
          <div className="rounded-2xl border border-divider bg-surface p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
              <span className="font-display font-semibold text-sm text-body uppercase tracking-widest">Sem estrutura</span>
            </div>
            <div className="space-y-3">
              {before.map((item) => (
                <div key={item} className="flex items-center gap-3 py-2.5 border-b border-divider last:border-0">
                  <div className="w-5 h-5 rounded-full border border-divider bg-muted flex items-center justify-center flex-shrink-0">
                    <span className="text-muted-foreground text-xs font-bold leading-none">–</span>
                  </div>
                  <span className="font-body text-sm text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-primary/20 bg-surface-tint p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-display font-semibold text-sm text-primary uppercase tracking-widest">Com a BPOn</span>
            </div>
            <div className="space-y-3">
              {after.map((item) => (
                <div key={item} className="flex items-center gap-3 py-2.5 border-b border-primary/10 last:border-0">
                  <div className="w-5 h-5 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs font-bold leading-none">✓</span>
                  </div>
                  <span className="font-body text-sm text-headline">{item}</span>
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
