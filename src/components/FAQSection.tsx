import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Já tenho contador. Onde a BPOn entra?",
    a: "Contador e BPO financeiro são funções diferentes. O contador cuida do fiscal, tributário e obrigações acessórias. A BPOn cuida da rotina operacional financeira — contas a pagar, receber, conciliação, fluxo de caixa e fechamento gerencial. Os dois trabalham juntos, sem sobreposição.",
  },
  {
    q: "Já uso ERP. Ainda faz sentido contratar a BPOn?",
    a: "Sim. ERP é ferramenta. Rotina estruturada é processo. Muitas empresas têm sistema e continuam com financeiro desorganizado porque falta quem opere com critério. A BPOn trabalha com o ERP existente ou indica adaptações quando necessário.",
  },
  {
    q: "Minha empresa tem financeiro interno. A BPOn substitui?",
    a: "Não necessariamente. A BPOn pode complementar o time interno, assumir partes específicas da operação ou ser o principal apoio no financeiro. A definição depende do diagnóstico da situação atual.",
  },
  {
    q: "Em quanto tempo começo a ter mais clareza?",
    a: "As primeiras percepções chegam rapidamente — a rotina organizada, controles funcionando e base mais confiável aparecem nas primeiras semanas. A leitura gerencial consistente se consolida ao longo dos primeiros meses de operação.",
  },
  {
    q: "O diagnóstico inicial analisa o quê?",
    a: "Mapeamos como o financeiro funciona hoje: controles existentes, responsáveis, ferramentas, cadência, gargalos e nível de visibilidade que a liderança tem sobre a operação. É uma leitura técnica e honesta, sem compromisso de contratação imediata.",
  },
  {
    q: "Como funciona o acompanhamento após a implantação?",
    a: "A BPOn mantém a rotina financeira ativa com cadência definida — reuniões de acompanhamento, reportes periódicos, fechamento gerencial e leitura de indicadores. O acompanhamento é contínuo, não pontual.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div>
              <span className="font-body text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                Perguntas frequentes
              </span>
              <div className="divider-primary mt-3 mb-6" />
              <h2 className="font-display font-bold text-3xl lg:text-[2rem] text-headline leading-[1.15]">
                Respostas para quem está avaliando a BPOn.
              </h2>
            </div>
            <p className="font-body text-base text-body leading-relaxed">
              Dúvidas comuns antes de avançar. Se a sua não está aqui, o diagnóstico é o melhor caminho.
            </p>
            <a
              href="#diagnostico"
              className="inline-flex w-fit items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200"
            >
              Solicitar diagnóstico
            </a>
          </div>

          {/* Right — FAQ */}
          <div className="lg:col-span-3 space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-divider rounded-xl bg-surface overflow-hidden transition-all duration-200"
              >
                <button
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display font-semibold text-sm text-headline leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-body flex-shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 border-t border-divider">
                    <p className="font-body text-sm text-body leading-relaxed pt-4">
                      {faq.a}
                    </p>
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
