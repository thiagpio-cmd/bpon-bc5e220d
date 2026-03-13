import { MessageCircle, ArrowRight } from "lucide-react";
import DiagnosticForm from "./DiagnosticForm";

const CTASection = () => {
  return (
    <section id="diagnostico" className="py-28 lg:py-36 bg-deep relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&q=75&auto=format&fit=crop"
          alt="Planejamento financeiro executivo"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(218,82%,7%)]/98 via-[hsl(218,82%,9%)]/95 to-[hsl(220,70%,14%)]/90" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(221,83%,53%) 0%, transparent 65%)", transform: "translate(20%,-20%)" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — CTA copy */}
          <div className="flex flex-col gap-7 reveal">
            <div>
              <span className="label-pill-dark">Próximo passo</span>
              <h2 className="font-display font-black text-[2.2rem] lg:text-[3rem] xl:text-[3.2rem] text-white leading-[1.0] tracking-[-0.02em] mt-6">
                Organizar o financeiro<br />
                começa por uma<br />
                <span className="text-shimmer">leitura certa.</span>
              </h2>
            </div>

            <p className="font-body text-base lg:text-lg text-white/60 leading-relaxed max-w-md">
              O primeiro passo é entender a operação atual — gargalos, estrutura existente e o nível de visibilidade que a liderança tem hoje. A partir daí, a BPOn organiza o que precisa ser estruturado.
            </p>

            {/* What happens */}
            <div className="space-y-3">
              {[
                "Diagnóstico técnico da operação atual",
                "Identificação dos gargalos e prioridades",
                "Proposta de estruturação sob medida",
                "Sem compromisso de contratação imediata",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="hsl(221,83%,65%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-body text-sm text-white/65">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-4">
              <a
                href="https://wa.me/5534992812444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 bg-white/8 text-white font-body font-semibold text-sm hover:bg-white/14 transition-all"
              >
                <MessageCircle size={15} />
                Falar no WhatsApp
              </a>
              <span className="font-body text-xs text-white/30">(34) 99281-2444</span>
            </div>
          </div>

          {/* Right — form card */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl border border-white/10 bg-white shadow-deep overflow-hidden">
              <div className="px-7 py-5 border-b border-divider bg-background">
                <p className="font-display font-bold text-base text-headline">Solicitar diagnóstico financeiro</p>
                <p className="font-body text-xs text-body mt-0.5">Resposta em até 1 dia útil</p>
              </div>
              <div className="p-7">
                <DiagnosticForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
