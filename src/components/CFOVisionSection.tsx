import { Banknote, TrendingUp, CalendarCheck, Activity } from "lucide-react";

const pillars = [
  {
    icon: Banknote,
    title: "Caixa",
    text: "Visibilidade real sobre posição, compromissos e disponível. A liderança para de operar na estimativa.",
  },
  {
    icon: TrendingUp,
    title: "Margem",
    text: "Base organizada para entender o que entra, o que sai e o que efetivamente sobra na operação.",
  },
  {
    icon: CalendarCheck,
    title: "Compromissos",
    text: "Todos os compromissos financeiros sob controle — programados, conferidos e acompanhados com critério.",
  },
  {
    icon: Activity,
    title: "Ritmo operacional",
    text: "Cadência financeira definida: rotinas que rodam com previsibilidade, sem depender de improviso.",
  },
];

const CFOVisionSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-section-blue text-deep-foreground" id="solucao">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left header */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary/80 uppercase">
                Visão gerencial aplicada
              </span>
              <div className="w-10 h-0.5 bg-primary/60 mt-3 mb-6" />
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-deep-foreground leading-[1.15]">
                Disciplina operacional com leitura de gestão.
              </h2>
            </div>
            <p className="font-body text-base text-deep-foreground/65 leading-relaxed">
              A BPOn estrutura a operação com disciplina e acompanha o financeiro com visão gerencial próxima da liderança. O resultado é uma base que sustenta decisão, priorização e planejamento.
            </p>
            <a
              href="#diagnostico"
              className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-deep-foreground hover:bg-white/15 font-body font-medium text-sm transition-all duration-200"
            >
              Solicitar diagnóstico
            </a>
          </div>

          {/* Right — 4 pillars */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group flex flex-col gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary/90" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-base text-deep-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="font-body text-sm text-deep-foreground/60 leading-relaxed">
                      {pillar.text}
                    </p>
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
