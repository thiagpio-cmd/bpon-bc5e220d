import { Check } from "lucide-react";

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
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 lg:mb-16 reveal grid lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="label-pill mb-5 inline-block">O que a BPOn entrega</span>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.8rem] text-headline leading-[1.05] tracking-[-0.025em]">
              Três frentes integradas.<br />
              <span className="text-gradient-primary">Uma operação completa.</span>
            </h2>
          </div>
          <p className="font-body text-[14px] text-body leading-relaxed lg:max-w-sm lg:text-right lg:self-end">
            Não é uma lista de tarefas. É uma estrutura integrada — da operação
            diária ao fechamento que orienta a gestão.
          </p>
        </div>

        {/* 3 blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-divider rounded-2xl overflow-hidden shadow-card">
          {blocks.map((block, i) => (
            <div
              key={block.number}
              className={`reveal reveal-delay-${i + 1} group flex flex-col p-8 lg:p-9 bg-surface hover:bg-surface-tint transition-colors duration-250 relative
                ${i < blocks.length - 1 ? "border-b lg:border-b-0 lg:border-r border-divider" : ""}
              `}
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Number — watermark grande */}
              <span className="font-display font-black text-[4rem] leading-none text-primary/6 group-hover:text-primary/12 transition-colors duration-300 mb-5 select-none">
                {block.number}
              </span>

              <h3 className="font-display font-bold text-[16px] text-headline mb-2.5 leading-snug">
                {block.title}
              </h3>
              <p className="font-body text-[13px] text-body leading-relaxed mb-7">
                {block.description}
              </p>

              <ul className="mt-auto flex flex-col gap-3 pt-5 border-t border-divider">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-md bg-primary/8 border border-primary/18 flex items-center justify-center flex-shrink-0 mt-[1px] group-hover:bg-primary/14 transition-colors">
                      <Check size={9} className="text-primary" strokeWidth={3} />
                    </span>
                    <span className="font-body text-[13px] text-body leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center font-body text-[12px] text-muted-foreground reveal reveal-delay-4">
          A BPOn atua de forma integrada com a contabilidade, o ERP e a liderança da empresa.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
