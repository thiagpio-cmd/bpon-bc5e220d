import { MessageCircle, ArrowRight } from "lucide-react";
import DiagnosticForm from "./DiagnosticForm";

const CTASection = () => {
  return (
    <section id="diagnostico" className="py-28 lg:py-36 relative overflow-hidden">

      {/* Background premium — azul profundo com acento assimétrico */}
      <div className="absolute inset-0 z-0">
        {/* Base */}
        <div className="absolute inset-0"
          style={{ background: "hsl(220 55% 6%)" }} />

        {/* Grande bloco de cor à esquerda — contraste de área */}
        <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
          style={{ background: "linear-gradient(to right, hsl(220 70% 9%) 0%, transparent 100%)" }} />

        {/* Brilho central-superior */}
        <div className="absolute -top-40 left-[20%] w-[700px] h-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 40% 30%, hsl(220 79% 46% / 0.14) 0%, transparent 60%)" }} />

        {/* Brilho inferior direito */}
        <div className="absolute -bottom-20 right-[10%] w-[500px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.07) 0%, transparent 65%)" }} />

        {/* Grade pontilhada sutil */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(210 80% 72% / 1) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }} />

        {/* Linha diagonal decorativa */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" viewBox="0 0 1280 900" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="0" x2="1280" y2="900" stroke="hsl(220 79% 55%)" strokeWidth="1" />
          <line x1="100" y1="0" x2="1280" y2="760" stroke="hsl(220 79% 55%)" strokeWidth="0.6" />
        </svg>

        {/* Linha vertical divisória central */}
        <div className="absolute top-0 left-1/2 w-px h-full pointer-events-none opacity-[0.05] hidden lg:block"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(220 79% 55%), transparent)" }} />

        {/* Barra horizontal topo */}
        <div className="absolute top-0 left-0 w-full h-[2px]"
          style={{ background: "linear-gradient(to right, hsl(220 79% 46%), hsl(220 79% 46% / 0.2), transparent)" }} />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Esquerda — copy */}
          <div className="flex flex-col gap-7 reveal">
            <div>
              <span className="label-pill-dark">Próximo passo</span>
              <h2 className="font-display font-black text-[2.1rem] lg:text-[2.9rem] xl:text-[3.1rem] leading-[1.02] tracking-[-0.022em] mt-6"
                style={{ color: "hsl(0 0% 96%)" }}>
                Organizar o financeiro<br />
                começa por uma<br />
                <span className="text-shimmer">leitura certa.</span>
              </h2>
            </div>

            <p className="font-body text-[15px] leading-relaxed max-w-md"
              style={{ color: "hsl(210 18% 58%)" }}>
              O primeiro passo é entender a operação atual — gargalos, estrutura existente e o
              nível de visibilidade que a liderança tem hoje. A partir daí, a BPOn organiza o
              que precisa ser estruturado.
            </p>

            {/* Checklist */}
            <div className="space-y-3">
              {[
                "Diagnóstico técnico da operação atual",
                "Identificação dos gargalos e prioridades",
                "Proposta de estruturação sob medida",
                "Sem compromisso de contratação imediata",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(220 79% 46% / 0.12)", border: "1px solid hsl(220 79% 46% / 0.28)" }}>
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="hsl(221,83%,65%)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-body text-[13px]"
                    style={{ color: "hsl(210 18% 65%)" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <div className="pt-4 flex items-center gap-4"
              style={{ borderTop: "1px solid hsl(218 35% 15%)" }}>
              <a
                href="https://wa.me/5534992812444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body font-semibold text-sm hover:bg-white/[0.06] transition-all"
                style={{
                  border: "1px solid hsl(210 28% 22%)",
                  background: "hsl(220 50% 9% / 0.6)",
                  color: "hsl(210 28% 72%)",
                }}>
                <MessageCircle size={14} />
                Falar no WhatsApp
              </a>
              <span className="font-body text-xs" style={{ color: "hsl(210 15% 36%)" }}>(34) 99281-2444</span>
            </div>
          </div>

          {/* Direita — formulário */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl overflow-hidden shadow-deep"
              style={{ border: "1px solid hsl(218 35% 18%)", background: "hsl(0 0% 100%)" }}>
              <div className="px-7 py-5 bg-background"
                style={{ borderBottom: "1px solid hsl(var(--divider))" }}>
                <p className="font-display font-bold text-[15px] text-headline">Solicitar diagnóstico financeiro</p>
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
