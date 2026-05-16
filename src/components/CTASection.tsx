import DiagnosticForm from "./DiagnosticForm";

const CTASection = () => {
  return (
    <section id="diagnostico" className="surface-deep section-py">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="reveal">
            <h2 className="font-display font-semibold text-white text-[1.8rem] lg:text-[2.3rem] leading-[1.12] tracking-tight">
              Quer entender onde seu financeiro pode ganhar controle?
            </h2>
            <p className="font-body text-[15px] text-white/65 leading-relaxed mt-6 max-w-lg">
              Solicite um diagnóstico e veja como organizar sua rotina financeira com mais clareza
              e previsibilidade.
            </p>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-xl border border-white/5">
              <div className="px-6 py-5 border-b border-divider">
                <h3 className="font-display font-semibold text-[15px] text-headline">
                  Solicitar diagnóstico
                </h3>
                <p className="font-body text-[12px] text-body mt-0.5">
                  Resposta em até 1 dia útil
                </p>
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
