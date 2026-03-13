const TeamSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — copy */}
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

          {/* Right — photo + card overlay */}
          <div className="flex justify-center lg:justify-end reveal reveal-delay-2">
            <div className="w-full max-w-[400px] relative">

              {/* Editorial photo */}
              <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-elevated relative">
                <img
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=700&q=85&auto=format&fit=crop&crop=top"
                  alt="Especialista em consultoria financeira BPOn"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218,82%,10%)]/50 via-transparent to-transparent" />
              </div>

              {/* Floating card at bottom */}
              <div className="absolute bottom-6 left-4 right-4 glass-card rounded-2xl shadow-elevated border border-white/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-body text-xs text-emerald-700 font-semibold">Disponível para diagnóstico</span>
                  </div>
                </div>
                <p className="font-display font-bold text-sm text-headline mt-2">Equipe BPOn</p>
                <p className="font-body text-xs text-body mt-0.5">Consultoria Financeira · Grupo Ubercentral</p>
                <a
                  href="#diagnostico"
                  className="mt-3 w-full text-center block font-body text-xs font-bold px-4 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-blue"
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
