import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "O que é BPO Financeiro?",
    a: "BPO Financeiro é a terceirização das rotinas financeiras de uma empresa, como contas a pagar, contas a receber, conciliação bancária, fluxo de caixa, cobranças e relatórios gerenciais.",
  },
  {
    q: "A Fintex BPO substitui a contabilidade?",
    a: "Não. A Fintex BPO atua na rotina financeira e gerencial. A contabilidade segue cuidando das obrigações fiscais, contábeis e tributárias.",
  },
  {
    q: "Minha empresa precisa trocar de sistema?",
    a: "Não necessariamente. Avaliamos o sistema atual e os processos antes de qualquer mudança. A troca só faz sentido quando melhora a rotina e a gestão.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-py bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 reveal">
            <h2 className="font-display font-semibold text-headline text-[1.7rem] lg:text-[2.1rem] leading-[1.15] tracking-tight">
              Perguntas frequentes.
            </h2>
          </div>

          <div className="reveal reveal-delay-2">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-divider/70 first:border-t">
                  <button
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display font-medium text-[15.5px] text-headline">
                      {f.q}
                    </span>
                    {isOpen ? (
                      <Minus size={16} className="flex-shrink-0 text-primary" />
                    ) : (
                      <Plus size={16} className="flex-shrink-0 text-body/60" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="font-body text-[14px] text-body leading-relaxed pb-5 pr-10">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
