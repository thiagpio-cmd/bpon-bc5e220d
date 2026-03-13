import { ArrowRight, ChevronRight } from "lucide-react";

const proofChips = [
  "Empresa do Grupo Ubercentral",
  "Base empresarial desde 2002",
  "Atendimento consultivo",
  "Leitura gerencial aplicada",
];

const pillars = [
  { label: "Contas a pagar", status: "Sob critério", dot: "primary" },
  { label: "Contas a receber", status: "Acompanhado", dot: "primary" },
  { label: "Conciliação", status: "Base confiável", dot: "accent" },
  { label: "Fluxo de caixa", status: "Visibilidade real", dot: "primary" },
  { label: "Fechamento gerencial", status: "Leitura consistente", dot: "accent" },
];

const HeroSection = () => {
  return (
    <section className="gradient-hero pt-4 pb-20 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-14 lg:pt-20">
          {/* Left */}
          <div className="flex flex-col gap-7 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1.5 rounded-full border border-primary/25 bg-surface-tint">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="font-body text-xs font-medium text-primary tracking-wide">
                BPO Financeiro com leitura gerencial
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-[2.4rem] lg:text-5xl xl:text-[52px] leading-[1.1] text-headline tracking-tight">
              Seu financeiro precisa{" "}
              <span className="text-gradient-primary">sustentar</span>{" "}
              crescimento, rotina e decisão.
            </h1>

            {/* Subheadline */}
            <p className="font-body text-base lg:text-lg text-body leading-relaxed max-w-lg">
              A BPOn organiza contas a pagar, a receber, conciliação, fluxo de caixa e fechamento gerencial com método e visão empresarial — para que a liderança tenha base real para acompanhar o negócio.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#diagnostico"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-card"
              >
                Solicitar diagnóstico financeiro
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-divider bg-surface hover:border-primary/30 hover:bg-surface-tint text-headline font-body font-medium text-sm transition-all duration-200"
              >
                Entender como funciona
                <ChevronRight size={15} className="text-body" />
              </a>
            </div>

            {/* Proof chips */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-divider">
              {proofChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 font-body text-xs text-body px-3 py-1.5 rounded-full bg-surface border border-divider"
                >
                  <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Operational Panel */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="w-full max-w-[420px] relative">
              {/* Subtle glow */}
              <div className="absolute -inset-6 bg-primary/5 rounded-3xl blur-2xl pointer-events-none" />

              <div className="relative rounded-2xl border border-divider bg-surface shadow-elevated overflow-hidden">
                {/* Panel header */}
                <div className="px-6 py-5 border-b border-divider bg-surface-elevated">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-display font-bold text-sm text-headline">Rotina Financeira</p>
                      <p className="font-body text-xs text-body mt-0.5">BPOn · Visão operacional</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-body text-[11px] font-medium text-emerald-700">Em estruturação</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-0.5 bg-divider">
                  <div className="h-full w-4/5 bg-gradient-to-r from-primary to-primary/40" />
                </div>

                {/* Items */}
                <div className="px-6 py-3 divide-y divide-divider">
                  {pillars.map((pillar) => (
                    <div key={pillar.label} className="flex items-center justify-between py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-1 h-7 rounded-full flex-shrink-0 ${pillar.dot === "accent" ? "bg-primary/40" : "bg-primary/70"}`} />
                        <span className="font-body text-sm font-medium text-headline">{pillar.label}</span>
                      </div>
                      <span className="font-body text-xs text-body bg-surface-elevated px-2.5 py-1 rounded-full border border-divider">
                        {pillar.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Panel footer */}
                <div className="px-6 py-4 bg-surface-elevated border-t border-divider">
                  <p className="font-body text-xs text-body">
                    Base confiável para leitura gerencial da operação
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all ${i === 0 ? "w-8 bg-primary" : i < 4 ? "w-5 bg-primary/30" : "w-5 bg-divider"}`}
                      />
                    ))}
                  </div>
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
