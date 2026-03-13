import { Banknote, TrendingUp, CalendarCheck, Activity } from "lucide-react";

const pillars = [
  { icon: Banknote, title: "Caixa", text: "Visibilidade real sobre posição, compromissos e disponível. A liderança para de operar na estimativa." },
  { icon: TrendingUp, title: "Margem", text: "Base organizada para entender o que entra, o que sai e o que efetivamente sobra na operação." },
  { icon: CalendarCheck, title: "Compromissos", text: "Todos os compromissos financeiros sob controle — programados, conferidos e acompanhados com critério." },
  { icon: Activity, title: "Ritmo operacional", text: "Cadência financeira definida: rotinas que rodam com previsibilidade, sem depender de improviso." },
];

const CFOVisionSection = () => {
  return (
    <section className="py-24 lg:py-32 gradient-section-blue overflow-hidden relative">
      {/* Decorative radial */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 90% 20%, hsl(221,83%,53%) 0%, transparent 50%)" }} />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-7 reveal">
            <div>
              <div className="label-pill w-fit mb-5" style={{ background: "hsl(221 83% 53% / 0.12)", borderColor: "hsl(221 83% 53% / 0.25)", color: "hsl(221 83% 72%)" }}>
                Visão gerencial aplicada
              </div>
              <h2 className="font-display font-black text-3xl lg:text-[2.2rem] text-deep-foreground leading-[1.12] tracking-tight">
                Disciplina operacional com visão de gestão.
              </h2>
            </div>
            <p className="font-body text-base text-deep-foreground/60 leading-relaxed">
              A BPOn estrutura a operação com disciplina e acompanha o financeiro com visão gerencial próxima da liderança — criando base para decisão, priorização e planejamento.
            </p>
            <a href="#diagnostico" className="inline-flex w-fit items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-deep-foreground font-body font-semibold text-sm hover:bg-white/15 transition-all duration-200">
              Solicitar diagnóstico
            </a>
          </div>

          {/* Right */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`reveal reveal-delay-${i + 1} group flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-200`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center">
                    <Icon size={18} className="text-primary/80" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-deep-foreground mb-2">{pillar.title}</h3>
                    <p className="font-body text-sm text-deep-foreground/55 leading-relaxed">{pillar.text}</p>
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
