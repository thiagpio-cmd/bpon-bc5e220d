import { Check, ArrowRight } from "lucide-react";
import { useState } from "react";

const blocks = [
  {
    tag: "Estrutura",
    title: "Rotina financeira",
    description: "O ponto de partida. Sem processo definido, qualquer operação é frágil.",
    items: [
      "Desenho e documentação do processo financeiro",
      "Definição de agenda operacional e responsabilidades",
      "Organização do fluxo de aprovações e conferências",
      "Padronização de controles e critérios de lançamento",
    ],
  },
  {
    tag: "Operação",
    title: "Execução recorrente",
    description: "Rotina financeira executada com critério, cadência e rastreabilidade.",
    items: [
      "Contas a pagar e receber com controle de vencimentos",
      "Conciliação bancária entre banco, sistema e operação",
      "Atualização de fluxo de caixa e posição disponível",
      "Acompanhamento de cobrança e execução financeira",
    ],
  },
  {
    tag: "Gestão",
    title: "Leitura executiva",
    description: "Fechamento mensal e indicadores para quem precisa decidir com clareza.",
    items: [
      "Fechamento gerencial mensal consolidado",
      "Indicadores financeiros e análise de desempenho",
      "Análise de resultado e variações relevantes",
      "Reporte executivo direto para a liderança decidir",
    ],
  },
];

const ServicesSection = () => {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null);

  return (
    <section id="servicos" className="py-20 lg:py-28 section-alt-2 section-divide-top">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header — duas colunas com contraste de peso */}
        <div className="mb-12 lg:mb-16 reveal flex flex-col lg:flex-row gap-8 lg:items-end lg:justify-between">
          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-5">
              O que a BPOn entrega
            </p>
            <h2 className="font-display font-black text-headline leading-[1.04] tracking-[-0.028em]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
              Três frentes integradas.<br />
              Uma operação completa.
            </h2>
          </div>
          <p className="font-body text-[13.5px] text-body leading-relaxed lg:max-w-xs lg:text-right">
            Não é uma lista de tarefas avulsas. É uma estrutura integrada — da operação
            diária ao fechamento que orienta a gestão.
          </p>
        </div>

        {/* 3 blocos — tipografia grande como âncora, sem border-top animation, sem numeros */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {blocks.map((block, i) => (
            <div
              key={block.tag}
              className={`reveal reveal-delay-${i + 1} flex flex-col p-7 lg:p-8 rounded-2xl border transition-all duration-300 cursor-default`}
              style={{
                background: hoveredBlock === i ? "hsl(var(--surface-tint))" : "hsl(var(--surface))",
                borderColor: hoveredBlock === i ? "hsl(var(--primary) / 0.22)" : "hsl(var(--divider))",
                boxShadow: hoveredBlock === i ? "0 8px 32px hsl(var(--primary) / 0.07)" : "none",
                transform: hoveredBlock === i ? "translateY(-3px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredBlock(i)}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              {/* Tag textual — sem pill colorida */}
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.14em] text-primary mb-4">
                {block.tag}
              </p>

              {/* Título grande */}
              <h3 className="font-display font-black text-[1.6rem] leading-[1.1] tracking-[-0.02em] text-headline mb-2">
                {block.title}
              </h3>
              <p className="font-body text-[12.5px] text-body leading-relaxed mb-6">
                {block.description}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-divider mb-6" />

              <ul className="mt-auto flex flex-col gap-3">
                {block.items.map((item, j) => (
                  <li key={item} className="flex items-start gap-2.5"
                    style={{
                      opacity: hoveredBlock === i ? 1 : 0.78,
                      transform: hoveredBlock === i ? "translateX(2px)" : "translateX(0)",
                      transition: `all 0.22s ease ${j * 0.04}s`,
                    }}>
                    <Check size={13} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="font-body text-[12.5px] text-body leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-6 reveal reveal-delay-4 cta-strip">
          <p className="font-body text-[13px] text-body text-center sm:text-left">
            A BPOn atua integrada com a contabilidade, ERP e a liderança da empresa.
          </p>
          <a href="#diagnostico"
            className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] shadow-blue hover:opacity-90 hover:scale-[1.02] transition-all duration-300 whitespace-nowrap flex-shrink-0">
            Quero estruturar meu financeiro
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
