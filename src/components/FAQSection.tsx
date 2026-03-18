import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Já tenho contador. Onde a BPOn entra?",
    a: "Contador e BPO financeiro são funções distintas. O contador cuida do fiscal, tributário e obrigações acessórias. A BPOn cuida da rotina operacional financeira: contas a pagar e receber, conciliação, fluxo de caixa e fechamento gerencial. As duas frentes se complementam — sem sobreposição e sem lacuna.",
  },
  {
    q: "Já uso ERP. Ainda faz sentido contratar a BPOn?",
    a: "Sim. ERP é ferramenta. Processo é outra coisa. A maioria das empresas tem sistema e continua com financeiro desorganizado porque falta quem opere com critério e cadência. A BPOn trabalha com o ERP que você já usa — ou indica adaptações quando necessário.",
  },
  {
    q: "Vocês atendem empresas do meu porte?",
    a: "A BPOn é voltada para empresas com operação ativa, algum volume financeiro e necessidade real de estrutura. Não trabalhamos com demandas pré-receita, pontuais ou de muito baixo volume. O diagnóstico é o momento certo para avaliar se há aderência.",
  },
  {
    q: "Como funciona a implantação na prática?",
    a: "A implantação começa com um diagnóstico da operação atual: como o financeiro funciona hoje, quais controles existem, quem é responsável por cada frente e onde estão os gargalos. A partir daí, estruturamos a rotina, definimos a cadência e iniciamos a operação de forma assistida — sem ruptura brusca.",
  },
  {
    q: "Em quanto tempo a operação começa a rodar?",
    a: "As primeiras semanas já entregam rotina organizada, controles funcionando e base mais confiável de dados. O fechamento gerencial consistente e os indicadores se consolidam ao longo dos primeiros meses, conforme a operação amadurece.",
  },
  {
    q: "Vocês trabalham com o sistema que já uso?",
    a: "Sim. A BPOn trabalha com o ERP, plataforma ou planilha já em uso. Não exigimos troca de ferramenta. Se houver necessidade de ajuste ou migração, isso é avaliado e discutido no diagnóstico, com transparência sobre o que muda e por quê.",
  },
  {
    q: "A BPOn substitui um financeiro interno?",
    a: "Depende da situação. A BPOn pode substituir completamente uma estrutura interna frágil ou individual, complementar um time existente assumindo partes específicas da operação, ou atuar como principal referência do financeiro. A definição é feita com base no diagnóstico da situação atual.",
  },
  {
    q: "Há acompanhamento gerencial além da operação?",
    a: "Sim. A operação financeira é executada com critério, mas o resultado é apresentado de forma gerencial — indicadores, fechamento mensal e análise de desempenho diretamente para a liderança. O objetivo não é só executar: é fazer com que os dados gerem clareza para quem decide.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-5 reveal">
            <div>
              <div className="label-pill w-fit mb-4">Perguntas frequentes</div>
              <h2 className="font-display font-black text-[1.9rem] lg:text-[2.2rem] text-headline leading-[1.08] tracking-[-0.022em] mt-3">
                Respostas para quem está avaliando a BPOn.
              </h2>
            </div>
            <p className="font-body text-[13.5px] text-body leading-relaxed">
              Dúvidas comuns antes de avançar. Se a sua não está aqui,
              o diagnóstico é o melhor caminho para uma resposta precisa.
            </p>
            <a
              href="#diagnostico"
              className="inline-flex w-fit items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:bg-primary/90 transition-all duration-200 shadow-blue"
            >
              Solicitar diagnóstico
            </a>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 flex flex-col gap-2 reveal reveal-delay-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-divider rounded-xl bg-surface overflow-hidden">
                <button
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left hover:bg-surface-tint transition-colors duration-150"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display font-semibold text-[13.5px] text-headline leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={15}
                    className={`flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                      open === i ? "rotate-180 text-primary" : "text-body"
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-4 border-t border-divider">
                    <p className="font-body text-[13px] text-body leading-relaxed pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
