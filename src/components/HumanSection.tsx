import { Calendar, Users, FileText, Link } from "lucide-react";
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

const HumanSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="relacao" className="py-24 lg:py-32 bg-background">
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
                    {/* Left accent */}
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

          {/* Direita — bloco de destaque claro */}
          <div className="reveal reveal-delay-2">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated"
              style={{
                background: "hsl(var(--surface-tint))",
                border: "1px solid hsl(var(--primary) / 0.12)",
              }}>

              {/* Linha de acento topo */}
              <div className="h-1 w-full"
                style={{ background: "linear-gradient(to right, hsl(var(--primary)), hsl(214 80% 65%), transparent)" }} />

              <div className="p-10 lg:p-12 flex flex-col gap-8">

                {/* Stat principal */}
                <div className="flex items-end gap-4">
                  <div>
                    <p className="font-display font-black leading-none text-gradient-primary mb-1"
                      style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)" }}>
                      +20
                    </p>
                    <p className="font-body text-[13px] text-body">
                      anos de base institucional
                    </p>
                  </div>
                  {/* Decoração */}
                  <div className="mb-2 flex flex-col gap-1.5 opacity-20">
                    {[0, 1, 2, 3].map((r) => (
                      <div key={r} className="flex gap-1.5">
                        {[0, 1, 2, 3].map((c) => (
                          <div key={c} className="w-1.5 h-1.5 rounded-full bg-primary" />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-divider" />

                {/* Quote */}
                <blockquote className="relative pl-5"
                  style={{ borderLeft: "3px solid hsl(var(--primary) / 0.35)" }}>
                  <p className="font-display font-semibold text-[15px] leading-[1.55] text-headline">
                    "A BPOn mantém a rotina ativa e apresenta os resultados para quem decide — sem intermediários e sem ruído."
                  </p>
                </blockquote>

                <div className="w-full h-px bg-divider" />

                {/* Bullets */}
                <div className="flex flex-col gap-2">
                  {[
                    "Grupo Ubercentral · Uberlândia, MG",
                    "Base contábil integrada ao BPO",
                    "Operação financeira recorrente",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 group cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary/50 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                      <span className="font-body text-[12px] text-body group-hover:text-headline transition-colors duration-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href="#diagnostico"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-[13px] hover:opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-blue">
                  Solicitar diagnóstico
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanSection;
