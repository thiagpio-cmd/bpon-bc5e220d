import { useState } from "react";

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
    <section id="faq" className="section-py bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16 reveal">
          <div className="col-span-12 lg:col-span-3">
            <span className="eyebrow-num">06 / FAQ</span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2 className="font-display font-bold text-headline text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[0.95] tracking-[-0.04em]">
              Perguntas <span className="text-primary italic">frequentes.</span>
            </h2>
          </div>
        </div>

        <div className="border-t border-primary/20 reveal reveal-delay-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-primary/20">
                <button
                  className="w-full grid grid-cols-12 gap-6 items-center py-7 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="col-span-2 md:col-span-1 font-mono text-[11px] text-primary font-bold tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-9 md:col-span-10 font-display font-medium text-headline text-[18px] md:text-[22px] tracking-tight">
                    {f.q}
                  </span>
                  <span
                    className={`col-span-1 text-right font-display text-2xl text-primary transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="grid grid-cols-12 gap-6 pb-7 animate-fade-in">
                    <div className="col-span-2 md:col-span-1" />
                    <p className="col-span-10 font-body text-[15px] text-body leading-relaxed max-w-3xl">
                      {f.a}
                    </p>
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
