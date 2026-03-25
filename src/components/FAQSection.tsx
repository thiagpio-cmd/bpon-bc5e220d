import { useState } from "react";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "Já tenho contador. Onde a BPOn entra?",
    a: "Contador e BPO financeiro são funções distintas. O contador cuida do fiscal, tributário e obrigações acessórias. A BPOn cuida da rotina operacional financeira: contas a pagar e receber, conciliação, fluxo de caixa e fechamento gerencial. As duas frentes se complementam — sem sobreposição e sem lacuna.",
    open: true,
  },
  {
    q: "Em quanto tempo a operação começa a rodar com previsibilidade?",
    a: "As primeiras semanas já entregam rotina organizada, controles funcionando e base mais confiável de dados. O fechamento gerencial consistente e os indicadores se consolidam ao longo dos primeiros meses, conforme a operação amadurece. Em geral, o cliente já sente diferença concreta no primeiro mês.",
    open: false,
  },
  {
    q: "Como funciona a implantação na prática?",
    a: "A implantação começa com um diagnóstico da operação atual: como o financeiro funciona hoje, quais controles existem, quem é responsável por cada frente e onde estão os gargalos. A partir daí, estruturamos a rotina, definimos a cadência e iniciamos a operação de forma assistida — sem ruptura brusca.",
    open: false,
  },
  {
    q: "A BPOn substitui meu ERP?",
    a: "Não. A BPOn trabalha com o ERP, plataforma ou planilha já em uso. Não exigimos troca de ferramenta. ERP é ferramenta. Processo é outra coisa. A maioria das empresas tem sistema e continua com financeiro desorganizado porque falta quem opere com critério e cadência. Se houver necessidade de ajuste ou migração, isso é avaliado no diagnóstico com transparência.",
    open: false,
  },
  {
    q: "Como vocês se integram com meu contador e equipe interna?",
    a: "A BPOn opera em conjunto com o contador — sem sobreposição de funções. Alinhamos fluxo de informações, prazos e responsabilidades entre as partes. Com a equipe interna, definimos um modelo claro de comunicação e cadência, respeitando o que já funciona e organizando o que está fragmentado.",
    open: false,
  },
  {
    q: "Qual o nível de envolvimento da liderança?",
    a: "Baixo no operacional, alto no gerencial. A liderança não precisa acompanhar cada lançamento. O que muda é que, mensalmente, recebe um fechamento claro, com indicadores e análise — para tomar decisões com base em dados reais, não estimativas.",
    open: false,
  },
  {
    q: "O diagnóstico é realmente sem compromisso?",
    a: "Sim. O diagnóstico inicial é uma análise real da operação financeira da empresa, sem custo e sem compromisso de contratação. A partir daí, se houver aderência dos dois lados, apresentamos uma proposta. A decisão é inteiramente sua.",
    open: false,
  },
  {
    q: "Vocês atendem empresa com mais de uma unidade?",
    a: "Sim. A BPOn tem estrutura para atender empresas com múltiplas unidades operacionais, filiais ou centros de custo. A organização do processo financeiro nesse contexto é especialmente relevante — e exatamente o tipo de desafio para o qual o diagnóstico serve.",
    open: false,
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 section-alt section-divide-top">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-5 reveal">
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-5">
                Perguntas frequentes
              </p>
              <h2 className="font-display font-black text-[1.9rem] lg:text-[2.2rem] text-headline leading-[1.04] tracking-[-0.022em]">
                Respostas para quem está avaliando a BPOn.
              </h2>
            </div>
            <p className="font-body text-[13.5px] text-body leading-relaxed">
              Dúvidas comuns antes de avançar. Se a sua não está aqui,
              o diagnóstico é o melhor caminho para uma resposta precisa.
            </p>
            <div className="flex flex-col gap-2.5 pt-2">
              <a href="#diagnostico"
                className="inline-flex w-fit items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:bg-primary/90 transition-all duration-200 shadow-blue group">
                Solicitar diagnóstico
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
              <a href="https://wa.me/5534992812444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 px-5 py-2 rounded-lg border border-divider bg-surface font-body text-[13px] text-body hover:text-headline hover:border-primary/20 transition-all duration-200 group">
                <MessageCircle size={13} className="text-emerald-500" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3 flex flex-col gap-2 reveal reveal-delay-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-divider rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  borderColor: open === i ? "hsl(var(--primary) / 0.22)" : "hsl(var(--divider))",
                  background: open === i ? "hsl(var(--surface-tint))" : "hsl(var(--surface))",
                }}>
                <button
                  className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left transition-colors duration-150"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display font-semibold text-[13.5px] leading-snug"
                    style={{ color: open === i ? "hsl(var(--headline))" : "hsl(var(--headline) / 0.85)" }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={15}
                    className={`flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                      open === i ? "rotate-180 text-primary" : "text-body/60"
                    }`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 border-t border-divider/60">
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
