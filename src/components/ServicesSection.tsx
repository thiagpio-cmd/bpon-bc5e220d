import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const blocks = [
  {
    number: "01",
    title: "Estruturação da rotina financeira",
    description: "O ponto de partida. Sem processo definido, qualquer operação é frágil.",
    items: [
      "Organização de processos e controles financeiros",
      "Definição de cadência, agenda e responsabilidades",
      "Estruturação do fluxo de informações e aprovações",
    ],
    completion: 33,
  },
  {
    number: "02",
    title: "Operação financeira recorrente",
    description: "Rotina financeira executada com critério, cadência e rastreabilidade.",
    items: [
      "Contas a pagar e receber com controle de vencimentos",
      "Conciliação financeira entre banco, operação e sistema",
      "Acompanhamento de caixa, cobrança e execução",
    ],
    completion: 66,
  },
  {
    number: "03",
    title: "Gestão e leitura executiva",
    description: "Fechamento mensal e indicadores para quem precisa decidir com clareza.",
    items: [
      "Fechamento gerencial mensal consolidado",
      "Indicadores financeiros e análise de desempenho",
      "Apoio direto à liderança na tomada de decisão",
    ],
    completion: 100,
  },
];

const ServicesSection = () => {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 lg:mb-14 reveal grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="label-pill mb-4 inline-block">O que a BPOn entrega</span>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.7rem] text-headline leading-[1.05] tracking-[-0.024em] mt-3">
              Três frentes integradas.<br />
              <span className="text-gradient-primary">Uma operação completa.</span>
            </h2>
          </div>
          <p className="font-body text-[13.5px] text-body leading-relaxed lg:max-w-sm lg:text-right lg:self-end">
            Não é uma lista de tarefas. É uma estrutura integrada — da operação
            diária ao fechamento que orienta a gestão.
          </p>
        </div>

        {/* 3 blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-divider rounded-2xl overflow-hidden shadow-card">
          {blocks.map((block, i) => (
            <div
              key={block.number}
              className={`reveal reveal-delay-${i + 1} flex flex-col p-7 lg:p-8 bg-surface relative
                ${i < blocks.length - 1 ? "border-b lg:border-b-0 lg:border-r border-divider" : ""}
              `}
              style={{
                background: hoveredBlock === i ? "hsl(var(--surface-tint))" : undefined,
                transition: "background 0.25s ease",
              }}
              onMouseEnter={() => setHoveredBlock(i)}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary transition-transform duration-400 origin-left"
                style={{ transform: hoveredBlock === i ? "scaleX(1)" : "scaleX(0)" }} />

              {/* Number */}
              <span className="font-display font-black text-[3.5rem] leading-none select-none mb-4 transition-all duration-400"
                style={{
                  color: hoveredBlock === i ? "hsl(var(--primary) / 0.11)" : "hsl(var(--primary) / 0.06)",
                  transform: hoveredBlock === i ? "translateX(3px)" : "translateX(0)",
                }}>
                {block.number}
              </span>

              <h3 className="font-display font-bold text-[15px] text-headline mb-2 leading-snug">
                {block.title}
              </h3>
              <p className="font-body text-[12.5px] text-body leading-relaxed mb-5">
                {block.description}
              </p>

              {/* Progress bar */}
              <div className="w-full h-[3px] rounded-full mb-5 overflow-hidden" style={{ background: "hsl(var(--divider))" }}>
                <div className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
                  style={{ width: hoveredBlock === i ? `${block.completion}%` : "0%" }} />
              </div>

              <ul className="mt-auto flex flex-col gap-2.5 pt-5 border-t border-divider">
                {block.items.map((item, j) => (
                  <li key={item} className="flex items-start gap-2.5"
                    style={{
                      opacity: hoveredBlock === i ? 1 : 0.75,
                      transform: hoveredBlock === i ? "translateX(3px)" : "translateX(0)",
                      transition: `all 0.25s ease ${j * 0.05}s`,
                    }}>
                    <span className="w-[18px] h-[18px] rounded-md flex items-center justify-center flex-shrink-0 mt-[1px]"
                      style={{
                        background: hoveredBlock === i ? "hsl(var(--primary) / 0.13)" : "hsl(var(--primary) / 0.07)",
                        border: "1px solid hsl(var(--primary) / 0.16)",
                      }}>
                      <Check size={9} className="text-primary" strokeWidth={3} />
                    </span>
                    <span className="font-body text-[12.5px] text-body leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-5 reveal reveal-delay-4 cta-strip">
          <p className="font-body text-[13px] text-body text-center sm:text-left">
            A BPOn atua de forma integrada com a contabilidade, o ERP e a liderança da empresa.
          </p>
          <a
            href="#diagnostico"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] shadow-blue hover:opacity-90 hover:scale-[1.02] transition-all duration-300 whitespace-nowrap flex-shrink-0"
          >
            Quero estruturar meu financeiro
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
