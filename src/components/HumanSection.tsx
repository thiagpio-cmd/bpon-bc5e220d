import { Calendar, Users, FileText, Link, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const workingModel = [
  {
    icon: Users,
    title: "Ponto de contato definido",
    text: "Equipe responsável com nome, agenda e responsabilidades claras — não atendimento rotativo ou sistema.",
  },
  {
    icon: Calendar,
    title: "Agenda financeira recorrente",
    text: "Cadência semanal e mensal com a liderança para acompanhar a rotina e antecipar pontos críticos.",
  },
  {
    icon: FileText,
    title: "Fechamento e reporte mensal",
    text: "Consolidação completa com leitura executiva — apresentada para quem precisa decidir.",
  },
  {
    icon: Link,
    title: "Integração com contabilidade e operação",
    text: "Trabalha integrada com o contador, ERP e processos internos — sem sobreposição e sem lacuna.",
  },
];

const checklistItems = [
  { label: "Conciliação bancária realizada", done: true },
  { label: "Contas a pagar quitadas", done: true },
  { label: "Fluxo de caixa atualizado", done: true },
  { label: "Indicadores de desempenho", done: true },
  { label: "Reporte à liderança", done: false },
];

const RoutineMockup = () => {
  const done = checklistItems.filter((i) => i.done).length;
  const total = checklistItems.length;
  const pct = Math.round((done / total) * 100);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-elevated select-none"
      style={{
        background: "hsl(var(--surface-tint))",
        border: "1px solid hsl(var(--primary) / 0.12)",
      }}
    >
      {/* Top accent */}
      <div className="h-[3px] w-full"
        style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(214 80% 65%), transparent)" }} />

      <div className="p-8 lg:p-10 flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-1">
              Agenda Mensal
            </p>
            <h3 className="font-display font-black text-[17px] text-headline leading-snug">
              Rotina Financeira<br />
              <span className="text-gradient-primary">Março / 2025</span>
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-14 h-14 rounded-xl flex-shrink-0"
            style={{ background: "hsl(var(--primary) / 0.08)", border: "1px solid hsl(var(--primary) / 0.15)" }}>
            <span className="font-display font-black text-[18px] text-gradient-primary leading-none">{pct}%</span>
            <span className="font-body text-[8px] text-muted-foreground uppercase tracking-wide mt-0.5">Concluído</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-[6px] rounded-full overflow-hidden" style={{ background: "hsl(var(--divider))" }}>
          <div
            className="h-full rounded-full transition-all duration-1000"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(to right, hsl(var(--primary)), hsl(214 80% 65%))",
              boxShadow: "0 0 10px hsl(var(--primary) / 0.4)",
            }}
          />
        </div>

        {/* Checklist */}
        <div className="flex flex-col gap-2.5">
          {checklistItems.map((item, i) => (
            <div
              key={item.label}
              className="flex items-center gap-3 group cursor-default"
              style={{ opacity: item.done ? 1 : 0.6 }}
            >
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: item.done ? "hsl(var(--primary) / 0.15)" : "hsl(var(--surface))",
                  border: `1px solid ${item.done ? "hsl(var(--primary) / 0.35)" : "hsl(var(--divider))"}`,
                }}
              >
                {item.done && <Check size={10} className="text-primary" strokeWidth={3} />}
              </div>
              <span className={`font-body text-[13px] leading-snug ${item.done ? "text-body" : "text-muted-foreground"}`}>
                {item.label}
              </span>
              {!item.done && i === checklistItems.findIndex((x) => !x.done) && (
                <span className="ml-auto px-2 py-0.5 rounded-full text-[9px] font-semibold font-body"
                  style={{ background: "hsl(38 90% 55% / 0.12)", border: "1px solid hsl(38 90% 55% / 0.25)", color: "hsl(38 90% 55%)" }}>
                  Em andamento
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-divider" />

        {/* Badge institucional */}
        <div className="flex items-center gap-3 p-3 rounded-xl"
          style={{ background: "hsl(var(--primary) / 0.05)", border: "1px solid hsl(var(--primary) / 0.1)" }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "hsl(var(--primary) / 0.12)", border: "1px solid hsl(var(--primary) / 0.2)" }}>
            <span className="font-display font-black text-[11px] text-primary">+20</span>
          </div>
          <div>
            <p className="font-display font-bold text-[12px] text-headline">Grupo Ubercentral</p>
            <p className="font-body text-[11px] text-muted-foreground">Anos de base institucional · Uberlândia, MG</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#diagnostico"
          className="group flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-[13px] hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-blue"
        >
          Solicitar diagnóstico
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

const HumanSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="relacao" className="py-24 lg:py-32 section-alt-2 section-divide-top">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Esquerda — copy */}
          <div className="reveal flex flex-col gap-7">
            <div>
              <div className="label-pill mb-5">Como a relação funciona</div>
              <h2 className="font-display font-black text-[2rem] lg:text-[2.6rem] text-headline leading-[1.07] tracking-[-0.022em] mb-4 mt-3">
                Você tem acesso à equipe,{" "}
                <span className="text-gradient-primary">não a um sistema.</span>
              </h2>
              <p className="font-body text-[14px] text-body leading-relaxed">
                A BPOn mantém a rotina financeira ativa e apresenta os resultados
                diretamente para quem decide. Acompanhamento próximo, comunicação
                clara, responsabilidades bem definidas.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {workingModel.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-divider bg-surface relative overflow-hidden cursor-default"
                    style={{
                      background: hoveredCard === i ? "hsl(var(--surface-tint))" : undefined,
                      transition: "all 0.25s ease",
                      transform: hoveredCard === i ? "translateX(5px)" : "translateX(0)",
                      boxShadow: hoveredCard === i ? "0 4px 16px hsl(var(--primary) / 0.07)" : "none",
                    }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-r-full transition-all duration-300"
                      style={{
                        opacity: hoveredCard === i ? 1 : 0,
                        transform: hoveredCard === i ? "scaleY(1)" : "scaleY(0)",
                        transformOrigin: "center",
                      }} />
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: hoveredCard === i ? "hsl(var(--primary) / 0.14)" : "hsl(var(--primary) / 0.07)",
                        border: "1px solid hsl(var(--primary) / 0.14)",
                        transform: hoveredCard === i ? "scale(1.1) rotate(-3deg)" : "scale(1)",
                      }}>
                      <Icon size={14} className="text-primary" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-[13px] text-headline mb-0.5">{item.title}</h3>
                      <p className="font-body text-[13px] text-body leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Direita — Routine mockup */}
          <div className="reveal reveal-delay-2">
            <RoutineMockup />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HumanSection;
