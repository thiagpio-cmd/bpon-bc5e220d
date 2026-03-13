const TeamSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left copy */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Atendimento consultivo
              </span>
              <div className="divider-primary mt-3 mb-6" />
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
                Quem vai falar com você entende de operação financeira.
              </h2>
            </div>
            <div className="space-y-4 font-body text-base text-body leading-relaxed">
              <p>
                O diagnóstico inicial é conduzido por alguém que entende a diferença entre financeiro desorganizado e financeiro estruturado — e que já viu esse cenário acontecer em empresas reais.
              </p>
              <p>
                Não é uma triagem de vendas. É uma conversa técnica sobre a operação, os gargalos existentes e o que pode ser organizado com método.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { label: "Proximidade", sub: "Com a liderança" },
                { label: "Critério", sub: "Técnico e prático" },
                { label: "Clareza", sub: "Na comunicação" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 p-4 rounded-xl bg-surface border border-divider text-center">
                  <span className="font-display font-bold text-sm text-headline">{item.label}</span>
                  <span className="font-body text-xs text-body">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Team placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[400px]">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-surface to-background border border-divider shadow-elevated p-8 flex flex-col gap-6">
                {/* Avatar placeholder */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-tint border-2 border-divider flex items-center justify-center flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="10" r="5" stroke="hsl(221,83%,53%)" strokeWidth="1.8"/>
                      <path d="M4 24c0-4.4 4.5-8 10-8s10 3.6 10 8" stroke="hsl(221,83%,53%)" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-sm text-headline">Equipe BPOn</p>
                    <p className="font-body text-xs text-body">Consultoria Financeira</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="font-body text-[11px] text-emerald-600 font-medium">Disponível</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-tint border border-primary/15">
                  <p className="font-body text-sm text-body leading-relaxed">
                    "O diagnóstico começa por entender como o financeiro funciona hoje e onde estão as fragilidades — não por vender um serviço padrão."
                  </p>
                </div>

                <div className="space-y-2">
                  {["Operação financeira", "Rotina e processo", "Leitura gerencial"].map((tag) => (
                    <div key={tag} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary/50" />
                      <span className="font-body text-xs text-body">{tag}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#diagnostico"
                  className="w-full text-center font-body text-sm font-semibold px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
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
