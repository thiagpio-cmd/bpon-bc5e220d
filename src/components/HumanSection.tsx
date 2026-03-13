const HumanSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Image placeholder editorial */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-deep/90 to-deep shadow-elevated">
              {/* Abstract editorial visual */}
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="w-full space-y-4">
                  {/* Simulated editorial metric block */}
                  <div className="flex items-end gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-deep-foreground/40 text-xs font-medium uppercase tracking-widest">Clareza</span>
                      <div className="w-12 h-20 rounded-lg bg-white/10 border border-white/10 relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-primary/60 h-4/5 rounded-t-lg" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-deep-foreground/40 text-xs font-medium uppercase tracking-widest">Controle</span>
                      <div className="w-12 h-20 rounded-lg bg-white/10 border border-white/10 relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-primary/40 h-3/5 rounded-t-lg" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-display text-deep-foreground/40 text-xs font-medium uppercase tracking-widest">Previsib.</span>
                      <div className="w-12 h-20 rounded-lg bg-white/10 border border-white/10 relative overflow-hidden">
                        <div className="absolute bottom-0 w-full bg-primary/70 h-2/3 rounded-t-lg" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 ml-auto text-right">
                      <span className="font-display font-bold text-3xl text-white/90">78%</span>
                      <span className="font-body text-xs text-white/40">das empresas operam<br/>sem leitura gerencial</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="font-display font-semibold text-lg text-white/80 leading-snug">
                      "Financeiro estruturado<br/>é decisão mais segura."
                    </p>
                    <p className="font-body text-xs text-white/40 mt-1">BPOn — Consultoria Financeira</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-4 lg:-right-6 bg-surface rounded-xl shadow-elevated border border-divider px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-tint border border-primary/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13L7 9L10 12L15 6" stroke="hsl(221,83%,53%)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-headline">Base organizada</p>
                <p className="font-body text-xs text-body">Operação com método</p>
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Por trás da operação
              </span>
              <div className="divider-primary mt-3 mb-6" />
            </div>

            <h2 className="font-display font-bold text-3xl lg:text-4xl text-headline leading-[1.15]">
              Quando o financeiro ganha método, a liderança ganha clareza.
            </h2>

            <div className="space-y-4 text-body font-body text-base leading-relaxed">
              <p>
                Há um empresário que acorda cedo, gerencia equipe, atende cliente, negocia com fornecedor e ainda precisa entender se a empresa vai fechar o mês no positivo.
              </p>
              <p>
                O problema não é esforço. É que o financeiro não tem estrutura suficiente para sustentar essa demanda com clareza.
              </p>
              <p>
                A BPOn entra para organizar essa rotina com processo, cadência e acompanhamento — para que a liderança tenha uma base real, e não precise adivinhar o estado do caixa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { num: "01", text: "Rotina organizada com processo" },
                { num: "02", text: "Caixa com mais previsibilidade" },
                { num: "03", text: "Menos dependência de improviso" },
                { num: "04", text: "Leitura gerencial consistente" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-2.5">
                  <span className="font-display font-bold text-xs text-primary/60 mt-0.5 flex-shrink-0">{item.num}</span>
                  <span className="font-body text-sm text-body leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanSection;
