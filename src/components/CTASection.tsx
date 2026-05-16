import DiagnosticForm from "./DiagnosticForm";

const CTASection = () => {
  return (
    <section id="diagnostico" className="surface-deep relative overflow-hidden section-py x-cross">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16 reveal">
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow-num">05 / Próximo passo</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display font-bold text-white text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em]">
              Pronto para ter mais controle sobre o financeiro da sua{" "}
              <span className="text-primary italic">empresa?</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <p className="font-body text-lg text-white/70 leading-relaxed font-light max-w-md">
              Solicite um diagnóstico e entenda onde sua operação financeira pode ganhar mais
              clareza, rotina e previsibilidade.
            </p>

            <div className="mt-10 border-t border-primary/30 pt-8">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-4xl font-bold text-white">01</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                  Preenchimento
                </span>
              </div>
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-display text-4xl font-bold text-white">02</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">
                  Análise da equipe
                </span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl font-bold text-primary">03</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  Retorno em 1 dia útil
                </span>
              </div>
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-white/30 mt-12 italic">
              // Menos ruído. Mais lógica financeira.
            </p>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="border border-primary/30 bg-deep/40 backdrop-blur-sm">
              <div className="px-7 py-5 border-b border-primary/30 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary font-bold">
                    Diagnóstico financeiro
                  </span>
                  <h3 className="font-display font-bold text-white text-[17px] mt-1">
                    Solicite o seu agora.
                  </h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Resp. 1 dia útil
                </span>
              </div>
              <div className="p-7">
                <DiagnosticForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
