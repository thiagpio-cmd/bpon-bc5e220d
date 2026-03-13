import { ArrowRight, ChevronRight, TrendingUp, Shield, Zap } from "lucide-react";

const pillars = [
  { label: "Contas a pagar", status: "Sob critério", pct: 92 },
  { label: "Contas a receber", status: "Acompanhado", pct: 88 },
  { label: "Conciliação", status: "Base confiável", pct: 95 },
  { label: "Fluxo de caixa", status: "Visibilidade real", pct: 80 },
  { label: "Fechamento gerencial", status: "Consistente", pct: 85 },
];

const proofChips = [
  { icon: Shield, text: "Grupo Ubercentral" },
  { icon: TrendingUp, text: "Desde 2002" },
  { icon: Zap, text: "Leitura gerencial aplicada" },
];

const HeroSection = () => {
  return (
    <section className="gradient-hero overflow-hidden pb-24 lg:pb-32">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(221,83%,53%) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-16 lg:pt-24">

          {/* ——— LEFT ——— */}
          <div className="flex flex-col gap-8 animate-fade-up">

            {/* Label */}
            <div className="label-pill w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              BPO Financeiro com leitura gerencial
            </div>

            {/* H1 */}
            <div className="flex flex-col gap-4">
              <h1 className="font-display font-black text-[2.6rem] lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.05] text-headline tracking-tight">
                Seu financeiro precisa{" "}
                <em className="not-italic text-shimmer">sustentar</em>
                <br />crescimento,<br />
                <span className="text-primary">rotina</span> e decisão.
              </h1>
              <p className="font-body text-base lg:text-lg text-body leading-relaxed max-w-[500px]">
                A BPOn organiza contas a pagar, receber, conciliação, fluxo de caixa e fechamento gerencial — para que a liderança tenha base real, não estimativa.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#diagnostico"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-body font-bold text-sm shadow-blue hover:shadow-blue hover:bg-primary/90 transition-all duration-200 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                Solicitar diagnóstico
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-divider bg-surface hover:border-primary/40 hover:bg-surface-tint text-headline font-body font-semibold text-sm transition-all duration-200"
              >
                Como funciona
                <ChevronRight size={15} className="text-body" />
              </a>
            </div>

            {/* Proof chips */}
            <div className="flex flex-wrap gap-2.5 pt-2 border-t border-divider">
              {proofChips.map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-1.5 font-body text-xs text-body px-3.5 py-2 rounded-full bg-surface border border-divider shadow-card">
                  <Icon size={11} className="text-primary" />
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* ——— RIGHT — Dashboard card ——— */}
          <div className="flex justify-center lg:justify-end animate-fade-in animate-float-slow">
            <div className="w-full max-w-[400px] relative">

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-3xl scale-110 pointer-events-none" />

              <div className="relative rounded-2xl border border-primary/20 bg-surface shadow-elevated overflow-hidden">

                {/* Header */}
                <div className="px-6 py-5 border-b border-divider bg-gradient-to-r from-deep to-deep/90">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-sm text-white">Rotina Financeira</p>
                      <p className="font-body text-xs text-white/50 mt-0.5">BPOn · Painel operacional</p>
                    </div>
                    <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                      <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-pulse-ring" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="font-body text-[11px] font-semibold text-emerald-300">Ativo</span>
                    </div>
                  </div>
                </div>

                {/* Items with progress bars */}
                <div className="px-6 py-2 divide-y divide-divider">
                  {pillars.map((pillar, i) => (
                    <div key={pillar.label} className="py-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-sm font-medium text-headline">{pillar.label}</span>
                        <span className="font-body text-xs text-body bg-surface-elevated px-2.5 py-0.5 rounded-full border border-divider">
                          {pillar.status}
                        </span>
                      </div>
                      <div className="h-1.5 bg-divider rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60"
                          style={{
                            width: `${pillar.pct}%`,
                            animation: `fade-up 0.8s ease-out ${0.1 * i}s both`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-surface-elevated border-t border-divider flex items-center justify-between">
                  <p className="font-body text-xs text-body">Base estruturada para decisão gerencial</p>
                  <span className="font-display font-bold text-xs text-primary">100%</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-surface rounded-2xl shadow-elevated border border-divider px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <TrendingUp size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-xs text-headline">Empresa do Grupo</p>
                  <p className="font-body text-[11px] text-body">Ubercentral · desde 2002</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
