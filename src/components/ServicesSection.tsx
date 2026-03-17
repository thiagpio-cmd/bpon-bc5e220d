import { Check } from "lucide-react";

const blocks = [
  {
    number: "01",
    title: "Estruturação da rotina financeira",
    description: "O ponto de partida é construir a base. Sem processo definido, qualquer operação é frágil.",
    items: [
      "Organização de processos e controles financeiros",
      "Definição de cadência, agenda e responsabilidades",
      "Estruturação do fluxo de informações e aprovações",
    ],
  },
  {
    number: "02",
    title: "Operação financeira recorrente",
    description: "A rotina financeira executada com critério, cadência e rastreabilidade real.",
    items: [
      "Contas a pagar e receber com controle de vencimentos",
      "Conciliação financeira entre banco, operação e sistema",
      "Acompanhamento de caixa, cobrança e execução financeira",
    ],
  },
  {
    number: "03",
    title: "Gestão e leitura executiva",
    description: "Fechamento mensal, indicadores e análises para quem precisa de base confiável para decidir.",
    items: [
      "Fechamento gerencial mensal consolidado",
      "Indicadores financeiros e análise de desempenho",
      "Apoio direto à liderança na tomada de decisão",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-28 lg:py-36 bg-surface relative overflow-hidden">

      {/* Decorative left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 lg:mb-20 reveal flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="label-pill">O que a BPOn entrega</span>
            <h2 className="font-display font-black text-[2.2rem] lg:text-[3rem] xl:text-[3.4rem] text-headline leading-[1.0] tracking-[-0.02em] mt-5 max-w-xl">
              Três frentes que cobrem{" "}
              <span className="text-gradient-primary">toda a operação</span>{" "}
              financeira.
            </h2>
          </div>
          <p className="font-body text-sm text-body max-w-xs leading-relaxed lg:text-right lg:mb-1">
            Não é uma lista de tarefas. É uma estrutura integrada — da operação diária à leitura que orienta a gestão.
          </p>
        </div>

        {/* 3 service blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-divider rounded-2xl overflow-hidden shadow-card">
          {blocks.map((block, i) => (
            <div
              key={block.number}
              className={`reveal reveal-delay-${i + 1} group flex flex-col p-8 lg:p-9 bg-surface hover:bg-surface-tint transition-colors duration-300 relative
                ${i < blocks.length - 1 ? "border-b lg:border-b-0 lg:border-r border-divider" : ""}
              `}
            >
              {/* Top accent on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-full" />

              {/* Number */}
              <span className="font-display font-black text-[3.5rem] leading-none text-primary/10 group-hover:text-primary/18 transition-colors duration-300 mb-4 select-none">
                {block.number}
              </span>

              {/* Title */}
              <h3 className="font-display font-bold text-[17px] text-headline mb-3 leading-snug">
                {block.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-body leading-relaxed mb-6">
                {block.description}
              </p>

              {/* Items */}
              <ul className="mt-auto flex flex-col gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-primary/8 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors">
                      <Check size={11} className="text-primary" strokeWidth={2.5} />
                    </span>
                    <span className="font-body text-sm text-body leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center reveal reveal-delay-4">
          <p className="font-body text-sm text-muted-foreground">
            A BPOn atua de forma integrada com a contabilidade, o ERP e a liderança da empresa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
