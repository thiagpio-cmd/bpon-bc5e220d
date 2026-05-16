import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "O que é BPO Financeiro?",
    a: "BPO Financeiro é a terceirização das rotinas financeiras de uma empresa, como contas a pagar, contas a receber, conciliação bancária, fluxo de caixa, cobranças e relatórios.",
  },
  {
    q: "A Fintex BPO substitui a contabilidade?",
    a: "Não. A Fintex BPO atua na rotina financeira e gerencial. A contabilidade cuida das obrigações fiscais, contábeis e tributárias.",
  },
  {
    q: "Minha empresa precisa trocar de sistema?",
    a: "Não necessariamente. Primeiro avaliamos o sistema atual, os processos e o nível de controle da empresa. A troca só faz sentido quando melhora a rotina e a gestão.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-py bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <span className="eyebrow">FAQ</span>
          <h2 className="font-display font-bold text-headline text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] mt-4">
            Perguntas <span className="text-primary">frequentes</span>.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto reveal reveal-delay-2 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`card-soft transition-all ${isOpen ? "ring-1 ring-primary/20" : ""}`}>
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display font-semibold text-headline text-[16.5px] md:text-[17.5px]">
                    {f.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center text-primary transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    <Plus size={16} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="font-body text-[14.5px] text-body leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
