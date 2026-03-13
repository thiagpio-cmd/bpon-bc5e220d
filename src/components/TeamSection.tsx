const TeamSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <div className="flex flex-col gap-7 reveal">
            <div>
              <div className="label-pill w-fit mb-5">Atendimento consultivo</div>
              <h2 className="font-display font-black text-3xl lg:text-4xl text-headline leading-[1.12] tracking-tight">
                Quem vai falar com você entende de operação financeira.
              </h2>
            </div>
            <div className="space-y-4 font-body text-base text-body leading-relaxed">
              <p>
                O diagnóstico inicial é conduzido por alguém que entende a diferença entre financeiro desorganizado e financeiro estruturado — e que já viu esse cenário em empresas reais.
              </p>
              <p>
                Não é uma triagem de vendas. É uma conversa técnica sobre a operação, os gargalos existentes e o que pode ser organizado com método.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { label: "Proximidade", sub: "Com a liderança" },
                { label: "Critério", sub: "Técnico e prático" },
                { label: "Clareza", sub: "Na comunicação" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1.5 p-4 rounded-2xl bg-surface-tint border border-primary/12 text-center">
                  <span className="font-display font-bold text-sm text-headline">{item.label}</span>
                  <span className="font-body text-xs text-body">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end reveal reveal-delay-2">
            <div className="w-full max-w-[380px]">
              <div className="rounded-3xl bg-gradient-to-br from-deep to-deep/90 border border-white/10 shadow-elevated p-8 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.6" strokeOpacity="0.8"/>
                      <path d="M4 20c0-3.7 3.6-6.5 8-6.5s8 2.8 8 6.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.8"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white">Equipe BPOn</p>
                    <p className="font-body text-xs text-white/40">Consultoria Financeira</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-body text-[11px] text-emerald-400 font-medium">Disponível para diagnóstico</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/8 border border-white/10">
                  <p className="font-body text-sm text-white/70 leading-relaxed">
                    "O diagnóstico começa por entender como o financeiro funciona hoje e onde estão as fragilidades — não por vender um serviço padrão."
                  </p>
                </div>

                <div className="space-y-2.5">
                  {["Operação financeira", "Rotina e processo", "Leitura gerencial"].map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/70" />
                      <span className="font-body text-xs text-white/50">{tag}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#diagnostico"
                  className="w-full text-center font-body text-sm font-bold px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-blue"
                >
                  Conversar com a equipe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
