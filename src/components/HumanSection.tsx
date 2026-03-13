const HumanSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — editorial photo block */}
          <div className="relative order-2 lg:order-1 reveal">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-elevated">
              {/* Real editorial photo — executive discussion */}
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85&auto=format&fit=crop"
                alt="Reunião executiva de consultoria financeira"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218,82%,10%)]/70 via-transparent to-transparent" />

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display font-black text-[1.6rem] text-white leading-[1.2]">
                  "Quando o financeiro<br />
                  <span className="text-primary/80">ganha método,</span><br />
                  a decisão ganha base."
                </p>
                <p className="font-body text-xs text-white/50 mt-2">BPOn — Consultoria Financeira</p>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -right-3 lg:-right-6 glass-card rounded-2xl shadow-elevated border border-divider px-5 py-4 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
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
                <div key={item.num} className="flex items-start gap-3 p-4 rounded-xl bg-surface-tint border border-primary/12">
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
