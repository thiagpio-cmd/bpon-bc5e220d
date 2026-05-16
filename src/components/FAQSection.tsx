import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 reveal">
            <p className="eyebrow mb-5">FAQ</p>
            <h2 className="font-display font-bold text-headline text-[1.8rem] lg:text-[2.2rem] leading-[1.1] tracking-tight">
              Perguntas frequentes.
            </h2>
          </div>

          <div className="flex flex-col gap-2 reveal reveal-delay-2">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-divider rounded-xl bg-surface overflow-hidden transition-all"
                style={{ borderColor: open === i ? "hsl(var(--primary) / 0.3)" : undefined }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-display font-semibold text-[14.5px] text-headline">{f.q}</span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 transition-transform ${open === i ? "rotate-180 text-primary" : "text-body/50"}`}
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 border-t border-divider/60">
                    <p className="font-body text-[13.5px] text-body leading-relaxed pt-3">{f.a}</p>
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
