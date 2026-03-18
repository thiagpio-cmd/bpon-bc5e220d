import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[96vh] flex flex-col overflow-hidden" style={{ background: "hsl(var(--deep))" }}>

      {/* ── Geometric gradient background — original, no stock photo ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Base deep navy */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(150deg, hsl(222,60%,7%) 0%, hsl(218,70%,10%) 50%, hsl(215,80%,8%) 100%)" }} />

        {/* Primary blue diagonal bleed — left anchor */}
        <div className="absolute -left-32 top-0 w-[55vw] h-full opacity-100 pointer-events-none"
          style={{ background: "linear-gradient(105deg, hsl(220,79%,14%) 0%, hsl(220,79%,9%) 55%, transparent 100%)" }} />

        {/* Electric blue radial — top left glow */}
        <div className="absolute -top-24 -left-24 w-[700px] h-[700px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 30%, hsl(220,79%,46%/0.22) 0%, transparent 60%)" }} />

        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 w-full h-64 pointer-events-none"
          style={{ background: "linear-gradient(0deg, hsl(222,70%,6%) 0%, transparent 100%)" }} />

        {/* Grid lines — ultra-subtle */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(hsl(210 80% 72% / 1) 1px, transparent 1px), linear-gradient(90deg, hsl(210 80% 72% / 1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }} />

        {/* Right-side abstract accent shape */}
        <div className="absolute right-0 top-0 w-[45vw] h-full overflow-hidden opacity-100 pointer-events-none">
          {/* Vertical band */}
          <div className="absolute right-0 top-0 w-full h-full"
            style={{ background: "linear-gradient(to left, hsl(218,82%,6%) 0%, transparent 100%)" }} />
          {/* Blue accent lines */}
          <div className="absolute top-[15%] right-[10%] w-px h-[40vh] opacity-20"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(220,79%,55%), transparent)" }} />
          <div className="absolute top-[25%] right-[18%] w-px h-[30vh] opacity-12"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(220,79%,55%), transparent)" }} />
          <div className="absolute top-[8%] right-[28%] w-px h-[55vh] opacity-8"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(220,79%,55%), transparent)" }} />
          {/* Diagonal line */}
          <svg className="absolute right-0 top-0 w-full h-full opacity-[0.06]" viewBox="0 0 800 900" preserveAspectRatio="xMidYMid slice">
            <line x1="200" y1="0" x2="800" y2="900" stroke="hsl(220,79%,55%)" strokeWidth="1" />
            <line x1="350" y1="0" x2="950" y2="900" stroke="hsl(220,79%,55%)" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Floating dot cluster — top right */}
        <div className="absolute top-16 right-16 w-32 h-32 opacity-[0.12] pointer-events-none hidden lg:block"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(210 80% 72% / 1) 1px, transparent 0)",
            backgroundSize: "12px 12px",
          }} />
        <div className="absolute bottom-24 right-40 w-24 h-24 opacity-[0.07] pointer-events-none hidden lg:block"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(210 80% 72% / 1) 1px, transparent 0)",
            backgroundSize: "10px 10px",
          }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col flex-1 justify-center pt-10 pb-28 lg:pb-36 max-w-[700px]">

          {/* Eyebrow */}
          <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <span className="label-pill-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              BPO Financeiro · Grupo Ubercentral
            </span>
          </div>

          {/* H1 */}
          <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <h1 className="font-display font-black text-[2.8rem] sm:text-[3.6rem] lg:text-[4.6rem] xl:text-[5rem] leading-[0.96] tracking-[-0.025em] text-white">
              Financeiro<br />
              <span className="text-shimmer">terceirizado.</span><br />
              <span className="text-white/85">Operação com</span><br />
              <span className="text-white/60 font-black">método.</span>
            </h1>
          </div>

          {/* Divider */}
          <div className="mt-8 mb-7 w-10 h-[2px] bg-primary rounded-full animate-fade-up" style={{ animationDelay: "0.22s" }} />

          {/* Sub */}
          <p className="font-body text-[15px] lg:text-[17px] text-white/55 leading-relaxed max-w-[480px] animate-fade-up" style={{ animationDelay: "0.28s" }}>
            Para empresas que já operam e precisam organizar o financeiro, criar previsibilidade e ter base gerencial confiável para decidir.
          </p>

          {/* Deliverable chips */}
          <div className="flex flex-wrap gap-2 mt-7 animate-fade-up" style={{ animationDelay: "0.34s" }}>
            {[
              "Contas a pagar e receber",
              "Fluxo de caixa",
              "Fechamento gerencial",
              "Indicadores financeiros",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold font-body"
                style={{
                  background: "hsl(220 79% 46% / 0.10)",
                  border: "1px solid hsl(220 79% 46% / 0.22)",
                  color: "hsl(210 80% 70%)",
                }}
              >
                <span className="w-1 h-1 rounded-full bg-primary/60" />
                {chip}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-9 animate-fade-up" style={{ animationDelay: "0.42s" }}>
            <a
              href="#diagnostico"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-body font-bold text-sm shadow-blue-lg hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Solicitar diagnóstico
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-body font-semibold text-sm transition-all duration-200"
              style={{
                border: "1px solid hsl(210 80% 72% / 0.18)",
                background: "hsl(220 79% 46% / 0.06)",
                color: "hsl(210 80% 80%)",
              }}
            >
              Como funciona
            </a>
          </div>

          {/* Proof row */}
          <div className="flex flex-wrap gap-x-7 gap-y-2 mt-10 pt-8 animate-fade-up" style={{ animationDelay: "0.52s", borderTop: "1px solid hsl(210 80% 72% / 0.10)" }}>
            {[
              { num: "2002", label: "Grupo Ubercentral" },
              { num: "BPO", label: "operação recorrente" },
              { num: "CFO", label: "leitura gerencial mensal" },
            ].map((p) => (
              <div key={p.num} className="flex items-baseline gap-2">
                <span className="font-display font-black text-lg text-primary">{p.num}</span>
                <span className="font-body text-xs text-white/35">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float opacity-40">
        <span className="font-body text-[10px] tracking-[0.2em] text-white/40 uppercase">Scroll</span>
        <ChevronDown size={16} className="text-white/40" />
      </div>

    </section>
  );
};

export default HeroSection;
