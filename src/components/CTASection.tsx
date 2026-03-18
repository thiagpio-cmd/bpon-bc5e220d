import { MessageCircle, ArrowRight } from "lucide-react";
import DiagnosticForm from "./DiagnosticForm";

const CTASection = () => {
  return (
    <section id="diagnostico" className="py-28 lg:py-36 relative overflow-hidden">

      {/* Background — deep gradient, sem foto */}
      <div className="absolute inset-0 z-0">
        {/* Base */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(145deg, hsl(222,65%,7%) 0%, hsl(218,75%,10%) 50%, hsl(220,70%,8%) 100%)" }} />
        {/* Left blue bleed */}
        <div className="absolute inset-y-0 left-0 w-[55%] pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(220,79%,12%) 0%, transparent 100%)" }} />
        {/* Top glow */}
        <div className="absolute -top-32 left-0 w-[700px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 30%, hsl(220 79% 46% / 0.15) 0%, transparent 60%)" }} />
        {/* Bottom right accent */}
        <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.08) 0%, transparent 65%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(hsl(210 80% 72% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 72% / 1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }} />
        {/* Vertical line accent */}
        <div className="absolute top-0 left-[52%] w-px h-full opacity-[0.06] pointer-events-none hidden lg:block"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(220 79% 55%), transparent)" }} />
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

            <p className="font-body text-[15px] leading-relaxed max-w-md" style={{ color: "hsl(210 20% 55%)" }}>
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
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(220 79% 46% / 0.14)", border: "1px solid hsl(220 79% 46% / 0.30)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="hsl(221,83%,65%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-body text-sm" style={{ color: "hsl(210 20% 65%)" }}>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4" style={{ borderTop: "1px solid hsl(210 30% 18%)" }}>
              <a
                href="https://wa.me/5534992812444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body font-semibold text-sm hover:bg-white/[0.08] transition-all"
                style={{ border: "1px solid hsl(210 30% 22%)", background: "hsl(220 50% 10% / 0.5)", color: "hsl(210 30% 72%)" }}
              >
                <MessageCircle size={15} />
                Falar no WhatsApp
              </a>
              <span className="font-body text-xs" style={{ color: "hsl(210 15% 38%)" }}>(34) 99281-2444</span>
            </div>
          </div>

          {/* Right — form card */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl overflow-hidden shadow-deep"
              style={{ border: "1px solid hsl(210 30% 20%)", background: "hsl(0 0% 100%)" }}>
              <div className="px-7 py-5 bg-background" style={{ borderBottom: "1px solid hsl(var(--divider))" }}>
                <p className="font-display font-bold text-base text-headline">Solicitar diagnóstico financeiro</p>
                <p className="font-body text-xs text-body mt-0.5">Resposta em até 1 dia útil</p>
              </div>
              <div className="p-7 bg-white">
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
