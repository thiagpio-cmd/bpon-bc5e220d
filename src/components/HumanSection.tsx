const HumanSection = () => {
  return (
    <section className="relative py-0 overflow-hidden min-h-[80vh] flex items-center bg-deep">

      {/* Full-bleed editorial background photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85&auto=format&fit=crop"
          alt="Reunião consultiva de liderança financeira"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218,82%,7%)]/95 via-[hsl(218,82%,9%)]/80 to-[hsl(218,82%,9%)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218,82%,7%)]/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-28 lg:py-36">
        <div className="max-w-2xl">

          <span className="label-pill-dark">Por trás da operação</span>

          <h2 className="font-display font-black text-[2.4rem] lg:text-[3.4rem] xl:text-[4rem] text-white leading-[1.0] tracking-[-0.02em] mt-6">
            Quando o financeiro<br />
            ganha método,<br />
            <span className="text-shimmer">a liderança ganha clareza.</span>
          </h2>

          <div className="mt-8 space-y-4 font-body text-base lg:text-lg text-white/60 leading-relaxed max-w-xl">
            <p>
              Há um empresário que acorda cedo, gerencia equipe, atende cliente, negocia com fornecedor — e ainda precisa saber se a empresa vai fechar o mês no positivo.
            </p>
            <p>
              O problema não é esforço. É que o financeiro não tem estrutura para sustentar essa demanda com clareza.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { num: "01", text: "Rotina com processo" },
              { num: "02", text: "Caixa previsível" },
              { num: "03", text: "Menos improviso" },
              { num: "04", text: "Leitura gerencial" },
            ].map((item) => (
              <div key={item.num} className="flex flex-col gap-2 p-4 rounded-xl border border-white/10 bg-white/6 hover:bg-white/10 transition-colors">
                <span className="font-display font-black text-xs text-primary">{item.num}</span>
                <span className="font-body text-sm text-white/70 leading-snug">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4 pt-8 border-t border-white/12">
            <div className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=200&q=80&auto=format&fit=crop&crop=face"
                alt="Especialista BPOn"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-white">Equipe BPOn</p>
              <p className="font-body text-xs text-white/45 mt-0.5">Consultoria Financeira · Grupo Ubercentral</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-body text-[11px] text-emerald-400 font-medium">Disponível para diagnóstico</span>
              </div>
            </div>
            <a
              href="#diagnostico"
              className="ml-auto hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-body font-bold text-sm hover:bg-primary/90 transition-all shadow-blue"
            >
              Conversar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanSection;
