import { MessageCircle } from "lucide-react";
import DiagnosticForm from "./DiagnosticForm";

const CTASection = () => {
  return (
    <section id="diagnostico" className="py-28 lg:py-36 relative overflow-hidden"
      style={{ background: "hsl(222 38% 14%)" }}>

      {/* Background — azul médio, confortável */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 20% 40%, hsl(214 70% 28% / 0.35) 0%, transparent 65%)" }} />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 60% 60% at 85% 70%, hsl(214 80% 46% / 0.08) 0%, transparent 65%)" }} />

        {/* Grade pontilhada discreta */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(210 80% 75% / 1) 1px, transparent 0)",
            backgroundSize: "44px 44px",
          }} />

        {/* Linha topo */}
        <div className="absolute top-0 left-0 w-full h-[1px]"
          style={{ background: "linear-gradient(to right, transparent, hsl(214 60% 55% / 0.3), transparent)" }} />

        {/* Formas decorativas */}
        <div className="absolute top-24 right-32 w-20 h-20 border border-blue-400/10 rounded-2xl rotate-12 animate-float-slow pointer-events-none hidden lg:block" />
        <div className="absolute bottom-28 left-20 w-3 h-3 rounded-full bg-blue-400/20 animate-pulse pointer-events-none hidden lg:block" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Esquerda — copy */}
          <div className="flex flex-col gap-7 reveal">
            <div>
              <span className="label-pill-dark">Próximo passo</span>
              <h2 className="font-display font-black text-[2.1rem] lg:text-[2.9rem] xl:text-[3.1rem] leading-[1.02] tracking-[-0.022em] mt-6"
                style={{ color: "hsl(210 50% 95%)" }}>
                Organizar o financeiro<br />
                começa por uma<br />
                <span className="text-shimmer">leitura certa.</span>
              </h2>
            </div>

            <p className="font-body text-[15px] leading-relaxed max-w-md"
              style={{ color: "hsl(210 22% 62%)" }}>
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
                    style={{
                      background: "hsl(214 80% 55% / 0.14)",
                      border: "1px solid hsl(214 80% 55% / 0.30)",
                    }}>
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="hsl(214,80%,68%)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-body text-[13px]"
                    style={{ color: "hsl(210 22% 68%)" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <div className="pt-4 flex items-center gap-4"
              style={{ borderTop: "1px solid hsl(214 28% 22%)" }}>
              <a
                href="https://wa.me/5534992812444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-body font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{
                  border: "1px solid hsl(214 28% 26%)",
                  background: "hsl(214 40% 18%)",
                  color: "hsl(210 30% 75%)",
                }}>
                <MessageCircle size={14} />
                Falar no WhatsApp
              </a>
              <span className="font-body text-xs" style={{ color: "hsl(210 15% 40%)" }}>(34) 99281-2444</span>
            </div>
          </div>

          {/* Direita — formulário */}
          <div className="reveal reveal-delay-2">
            <div className="rounded-2xl overflow-hidden shadow-elevated"
              style={{ border: "1px solid hsl(214 28% 24%)" }}>
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
