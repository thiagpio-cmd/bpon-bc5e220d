import { Banknote, TrendingUp, CalendarCheck, Activity } from "lucide-react";

const pillars = [
  { icon: Banknote, title: "Caixa", text: "Visibilidade real sobre posição, compromissos e disponível. A liderança para de operar na estimativa." },
  { icon: TrendingUp, title: "Margem", text: "Base organizada para entender o que entra, o que sai e o que efetivamente sobra na operação." },
  { icon: CalendarCheck, title: "Compromissos", text: "Todos os compromissos financeiros sob controle: programados, conferidos e acompanhados com critério." },
  { icon: Activity, title: "Ritmo operacional", text: "Cadência financeira definida: rotinas que rodam com previsibilidade, sem depender de improviso." },
];

const CFOVisionSection = () => {
  return (
    <section className="section-py bg-surface overflow-hidden relative">
      {/* Decorative tint block */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-60"
        style={{ background: "linear-gradient(135deg, hsl(var(--surface-tint)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-7 reveal">
            <div>
              <div className="label-pill w-fit mb-5">CFO as a Service</div>
              <div className="divider-primary mb-5" />
              <h2 className="font-display font-black text-3xl lg:text-[2.2rem] text-headline leading-[1.12] tracking-tight">
                Visão de CFO ao lado da liderança, sem o custo de um executivo interno.
              </h2>
            </div>
            <p className="font-body text-base text-body leading-relaxed">
              Mais que executar a rotina: a Fintex BPO acompanha indicadores, conduz a reunião gerencial mensal e apoia decisões de caixa, margem e prioridades com leitura próxima da diretoria.
            </p>
            <a
              href="#diagnostico"
              className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body font-semibold text-sm shadow-blue hover:shadow-blue-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Quero leitura gerencial assim
            </a>
          </div>

          {/* Right */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`reveal reveal-delay-${i + 1} card-hover flex flex-col gap-4 p-6 rounded-2xl border border-divider bg-surface shadow-card`}
                >
                  <div className="icon-md icon-bg">
                    <Icon size={18} className="text-primary" strokeWidth={1.7} />
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
