import DiagnosticForm from "./DiagnosticForm";

const CTASection = () => {
  return (
    <section id="diagnostico" className="surface-deep relative overflow-hidden section-py">
      {/* Decorative X */}
      <div
        aria-hidden="true"
        className="absolute -left-24 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.04] pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M15 15 L85 85 M85 15 L15 85" stroke="hsl(214 100% 60%)" strokeWidth="4" strokeLinecap="square" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <p className="eyebrow eyebrow-light mb-5">Próximo passo</p>
            <h2 className="font-display font-bold text-white text-[1.9rem] lg:text-[2.6rem] leading-[1.08] tracking-tight">
              Pronto para ter mais controle sobre o financeiro da sua empresa?
            </h2>
            <p className="font-body text-[15px] text-white/65 leading-relaxed mt-6 max-w-lg">
              Solicite um diagnóstico e entenda onde sua operação financeira pode ganhar mais
              clareza, rotina e previsibilidade.
            </p>

            <p className="font-body text-[12px] text-white/40 italic mt-10">
              Menos ruído. Mais lógica financeira.
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-2xl shadow-deep border border-white/5">
              <div className="px-6 py-5 border-b border-divider">
                <h3 className="font-display font-bold text-[15px] text-headline">
                  Solicite seu diagnóstico financeiro
                </h3>
                <p className="font-body text-[12px] text-body mt-0.5">Resposta em até 1 dia útil</p>
              </div>
              <div className="p-6">
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
