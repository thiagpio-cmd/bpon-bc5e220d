const HumanSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — visual editorial block */}
          <div className="relative order-2 lg:order-1 reveal">
            {/* Main visual */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[hsl(218,70%,12%)] to-[hsl(220,65%,22%)] shadow-elevated">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 70%, hsl(221,83%,53%) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(218,67%,40%) 0%, transparent 40%)"
                }} />

              {/* Content inside card */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top — quote */}
                <div>
                  <p className="font-display font-black text-[1.8rem] lg:text-[2rem] text-white leading-[1.2]">
                    "Financeiro<br/>estruturado é<br/>
                    <span className="text-primary/80">decisão segura.</span>"
                  </p>
                  <p className="font-body text-xs text-white/40 mt-3">BPOn — Consultoria Financeira</p>
                </div>

                {/* Bottom — mini metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Clareza", pct: 92 },
                    { label: "Controle", pct: 85 },
                    { label: "Previsib.", pct: 88 },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/8 border border-white/10 rounded-xl p-3">
                      <p className="font-body text-[10px] text-white/40 uppercase tracking-widest mb-2">{m.label}</p>
                      <p className="font-display font-black text-xl text-white">{m.pct}%</p>
                      <div className="mt-1.5 h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/70 rounded-full" style={{ width: `${m.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -right-3 lg:-right-6 bg-surface rounded-2xl shadow-elevated border border-divider px-5 py-4 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-surface-tint border border-primary/20 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 13L7 9L10 12L15 6" stroke="hsl(221,83%,53%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-headline">Operação estruturada</p>
                <p className="font-body text-xs text-body">Base confiável para gestão</p>
              </div>
            </div>
          </div>

          {/* RIGHT — copy */}
          <div className="order-1 lg:order-2 flex flex-col gap-7 reveal reveal-delay-2">
            <div>
              <div className="label-pill w-fit mb-5">Por trás da operação</div>
              <h2 className="font-display font-black text-3xl lg:text-4xl text-headline leading-[1.12] tracking-tight">
                Quando o financeiro ganha método, a liderança ganha clareza.
              </h2>
            </div>

            <div className="space-y-4 font-body text-base text-body leading-relaxed">
              <p>
                Há um empresário que acorda cedo, gerencia equipe, atende cliente, negocia com fornecedor — e ainda precisa entender se a empresa vai fechar o mês no positivo.
              </p>
              <p>
                O problema não é esforço. É que o financeiro não tem estrutura suficiente para sustentar essa demanda com clareza.
              </p>
              <p>
                A BPOn entra para organizar essa rotina com processo, cadência e acompanhamento — para que a liderança tenha base real, e não precise adivinhar o estado do caixa.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { num: "01", text: "Rotina organizada com processo" },
                { num: "02", text: "Caixa com mais previsibilidade" },
                { num: "03", text: "Menos dependência de improviso" },
                { num: "04", text: "Leitura gerencial consistente" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-3 p-4 rounded-xl bg-surface-tint border border-primary/10">
                  <span className="font-display font-black text-xs text-primary mt-0.5 flex-shrink-0">{item.num}</span>
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
