import { Banknote, TrendingUp, CalendarCheck, Activity, ArrowUpRight, Check } from "lucide-react";

const pillars = [
  { icon: Banknote, title: "Caixa", text: "Visibilidade real sobre posição, compromissos e disponível. A liderança para de operar na estimativa." },
  { icon: TrendingUp, title: "Margem", text: "Base organizada para entender o que entra, o que sai e o que efetivamente sobra na operação." },
  { icon: CalendarCheck, title: "Compromissos", text: "Todos os compromissos financeiros sob controle: programados, conferidos e acompanhados com critério." },
  { icon: Activity, title: "Ritmo operacional", text: "Cadência financeira definida: rotinas que rodam com previsibilidade, sem depender de improviso." },
];

const deliverables = [
  "Reunião gerencial mensal com a diretoria",
  "Dashboard de caixa, margem e indicadores-chave",
  "Apoio em decisões de preço, custo e investimento",
  "Leitura próxima da operação, sem custo de executivo interno",
];

const CFOVisionSection = () => {
  return (
    <section className="section-py bg-surface overflow-hidden relative">
      {/* Decorative tint blocks */}
      <div
        className="absolute top-0 right-0 w-2/3 h-full pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(var(--surface-tint)) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none opacity-50"
        style={{ background: "radial-gradient(circle at 20% 80%, hsl(var(--surface-tint)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 reveal">
          <div className="flex items-center gap-3 mb-5">
            <div className="label-pill">CFO as a Service</div>
            <div className="h-px w-12 bg-divider" />
            <span className="font-body text-xs uppercase tracking-[0.18em] text-body/70">Camada estratégica</span>
          </div>
          <h2 className="font-display font-black text-3xl lg:text-[2.6rem] text-headline leading-[1.1] tracking-tight mb-5">
            Visão de CFO ao lado da liderança,{" "}
            <span className="text-gradient-primary">sem o custo de um executivo interno.</span>
          </h2>
          <p className="font-body text-lg text-body leading-relaxed max-w-2xl">
            Mais que executar a rotina: a Fintex BPO acompanha indicadores, conduz a reunião gerencial mensal e apoia decisões de caixa, margem e prioridades com leitura próxima da diretoria.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left: Featured panel */}
          <div className="lg:col-span-5 reveal">
            <div className="relative h-full p-8 lg:p-10 rounded-2xl border border-primary/25 bg-surface-tint overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary/8 blur-3xl pointer-events-none" />

              <div className="relative flex flex-col h-full gap-8">
                <div>
                  <div className="label-pill w-fit mb-5">O que entra no escopo</div>
                  <h3 className="font-display font-bold text-2xl lg:text-[1.65rem] text-headline leading-tight tracking-tight">
                    Da rotina financeira à mesa de decisão.
                  </h3>
                </div>

                <ul className="flex flex-col gap-3.5">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-primary/35 bg-primary/12 flex items-center justify-center mt-0.5">
                        <Check size={11} className="text-primary" strokeWidth={3} />
                      </div>
                      <span className="font-body text-sm text-body leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-divider">
                  <a
                    href="#diagnostico"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] shadow-blue hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
                  >
                    Quero leitura gerencial assim
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pillars grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`reveal reveal-delay-${i + 1} card-hover group flex flex-col gap-5 p-7 rounded-2xl border border-divider bg-surface shadow-card`}
                >
                  <div className="flex items-center justify-between">
                    <div className="icon-md icon-bg">
                      <Icon size={18} className="text-primary" strokeWidth={1.8} />
                    </div>
                    <span className="font-display font-bold text-xs text-body/40 tabular-nums">0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-headline mb-2">{pillar.title}</h3>
                    <p className="font-body text-sm text-body leading-relaxed">{pillar.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CFOVisionSection;
