import { Check } from "lucide-react";
import DiagnosticForm from "./DiagnosticForm";

const bullets = [
  "Análise da sua operação financeira atual",
  "Identificação dos principais gargalos",
  "Recomendações práticas — retorno em 1 dia útil",
];

const CTASection = () => {
  return (
    <section id="diagnostico" className="surface-deep relative overflow-hidden section-py">
      {/* gradient halos */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 reveal">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-primary-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-soft" />
              Próximo passo
            </span>
            <h2 className="font-display font-bold text-white text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.05] tracking-[-0.03em] mt-4">
              Pronto para ter mais controle sobre o financeiro da sua empresa?
            </h2>
            <p className="font-body text-[16px] text-white/70 leading-relaxed mt-5 max-w-md">
              Solicite um diagnóstico e entenda onde sua operação financeira pode ganhar mais
              clareza, rotina e previsibilidade.
            </p>

            <ul className="mt-8 space-y-3.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/85 text-[14.5px]">
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-primary-foreground" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-2">
            <div className="rounded-2xl bg-card border border-border p-7 lg:p-8 shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.5)]">
              <div className="mb-6">
                <p className="text-[12px] font-semibold text-primary uppercase tracking-wide">Diagnóstico financeiro</p>
                <h3 className="font-display font-bold text-headline text-[20px] mt-1">
                  Solicite o seu agora.
                </h3>
              </div>
              <DiagnosticForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
