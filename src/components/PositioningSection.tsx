const PositioningSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-section">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section label */}
          <span className="font-body text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Posicionamento
          </span>

          {/* Divider line */}
          <div className="w-12 h-px bg-primary/40 mt-3 mb-8" />

          {/* Headline */}
          <h2 className="font-display font-bold text-3xl lg:text-4xl xl:text-[42px] text-headline leading-[1.15] mb-8">
            Consultoria financeira para empresas que precisam organizar{" "}
            <span className="text-gradient-primary">rotina, caixa</span> e critério de gestão.
          </h2>

          {/* Body */}
          <p className="font-body text-base lg:text-lg text-body leading-relaxed">
            A BPOn nasce com a mesma base operacional de BPO que sustenta empresas em crescimento. O trabalho não se limita a executar tarefas. Ele organiza a rotina financeira, reduz risco operacional, melhora a leitura do caixa e cria uma base confiável para acompanhar o negócio com mais segurança.
          </p>

          {/* Stat row */}
          <div className="grid grid-cols-3 gap-8 mt-14 pt-10 border-t border-divider">
            {[
              { number: "360°", label: "Cobertura da rotina financeira" },
              { number: "Real", label: "Leitura do caixa e dos indicadores" },
              { number: "Estrutura", label: "Como base para crescimento" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display font-extrabold text-2xl lg:text-3xl text-gradient-primary mb-1">
                  {item.number}
                </p>
                <p className="font-body text-xs text-muted-foreground leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
