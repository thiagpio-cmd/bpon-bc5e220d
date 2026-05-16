const rotinas = [
  "Contas a pagar",
  "Contas a receber",
  "Conciliação",
  "Fluxo de caixa",
  "Relatórios gerenciais",
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative surface-deep overflow-hidden x-cross">
      {/* Marquee background text */}
      <div className="marquee-bg">FINTEX FINTEX FINTEX FINTEX</div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-16 lg:pt-20 pb-24 lg:pb-32">
        {/* Meta row */}
        <div className="flex justify-between items-end border-b border-primary/30 pb-4 mb-12 reveal">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.36em] text-primary font-bold">
              Fintex BPO © 2026
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              BPO Financeiro / São Paulo · Brasil
            </span>
          </div>
          <div className="hidden md:flex gap-6 font-mono text-[10px] uppercase tracking-[0.22em] font-bold">
            <span className="text-white/35">01 / Rotina</span>
            <span className="text-white/35">02 / Caixa</span>
            <span className="text-primary">03 / Previsibilidade</span>
          </div>
        </div>

        {/* Headline */}
        <div className="grid grid-cols-12 gap-y-10 reveal reveal-delay-1">
          <div className="col-span-12 lg:col-span-10 xl:col-span-9">
            <span className="pill-blue mb-6">BPO Financeiro de alto impacto</span>
            <h1 className="font-display font-bold text-white text-[2.6rem] sm:text-[3.6rem] lg:text-[5.6rem] xl:text-[6.4rem] leading-[0.9] tracking-[-0.04em] mt-2">
              BPO Financeiro para empresas que precisam de rotina, caixa e{" "}
              <span className="text-primary italic font-bold">previsibilidade.</span>
            </h1>
          </div>
        </div>

        {/* Sub + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 reveal reveal-delay-2">
          <div>
            <p className="font-body text-lg md:text-xl text-white/75 leading-relaxed max-w-md font-light">
              A Fintex BPO assume contas a pagar, contas a receber, conciliação, cobranças e
              relatórios para sua empresa operar com precisão executiva.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="h-px w-10 bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/55">
                Escale sem fricção
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-end md:items-end gap-6">
            <a href="#diagnostico" className="group btn-brutal-primary w-full md:w-auto">
              <span className="relative z-10">Solicitar diagnóstico financeiro</span>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                →
              </span>
            </a>
            <a href="#metodo" className="btn-brutal-ghost w-full md:w-auto">
              Ver como funciona
            </a>
          </div>
        </div>

        {/* Rotinas brutal grid */}
        <div className="mt-24 reveal reveal-delay-3">
          <div className="flex items-end justify-between mb-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/45">
              Rotinas que assumimos
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              05 áreas
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 brutal-grid">
            {rotinas.map((r, i) => (
              <div key={r} className="brutal-cell p-6 min-h-[110px] flex flex-col justify-between">
                <span className="font-mono text-[10px] text-primary font-bold tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display font-bold text-white text-[15px] uppercase tracking-tight leading-tight">
                  {r}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.36em] text-white/30 mt-16 italic">
          // Menos ruído. Mais lógica financeira.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
