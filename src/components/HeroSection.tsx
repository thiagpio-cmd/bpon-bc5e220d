import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden bg-deep">

      {/* ── Full-bleed editorial photo ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&auto=format&fit=crop"
          alt="Escritório executivo BPOn"
          className="w-full h-full object-cover animate-ken-burns"
          loading="eager"
          fetchPriority="high"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(218,82%,7%)]/95 via-[hsl(218,82%,9%)]/80 to-[hsl(218,82%,9%)]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218,82%,7%)]/80 via-transparent to-transparent" />
        {/* Blue accent glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(221,83%,53%) 0%, transparent 65%)", transform: "translate(20%,-20%)" }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 container mx-auto px-6 lg:px-8">
        <div className="flex flex-col flex-1 justify-center pt-10 pb-24 lg:pb-32 max-w-[680px]">

          {/* Eyebrow */}
          <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
            <span className="label-pill-dark">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              BPO Financeiro · Grupo Ubercentral
            </span>
          </div>

          {/* H1 — massive, editorial */}
          <div className="mt-7 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <h1 className="font-display font-black text-[3rem] sm:text-[3.8rem] lg:text-[4.8rem] xl:text-[5.2rem] leading-[0.95] tracking-[-0.02em] text-white">
              Financeiro<br />
              <span className="text-shimmer">estruturado.</span><br />
              <span className="text-white/90">Empresa no</span><br />
              <span className="text-white/70 font-black">controle.</span>
            </h1>
          </div>

          {/* Divider line */}
          <div className="mt-8 mb-6 w-10 h-[3px] bg-primary rounded-full animate-fade-up" style={{ animationDelay: "0.25s" }} />

          {/* Sub */}
          <p className="font-body text-lg lg:text-xl text-white/65 leading-relaxed max-w-[480px] animate-fade-up" style={{ animationDelay: "0.30s" }}>
            A BPOn organiza a rotina financeira da sua empresa com método, previsibilidade e visão gerencial — para que você dirija o negócio com base real.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-9 animate-fade-up" style={{ animationDelay: "0.40s" }}>
            <a
              href="#diagnostico"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-body font-bold text-sm shadow-blue-lg hover:bg-primary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Solicitar diagnóstico
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#solucao"
              className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border border-white/20 bg-white/8 text-white font-body font-semibold text-sm hover:bg-white/14 hover:border-white/35 transition-all duration-200"
            >
              Ver como funciona
            </a>
          </div>

          {/* Proof row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 pt-8 border-t border-white/12 animate-fade-up" style={{ animationDelay: "0.50s" }}>
            {[
              { num: "+20", label: "anos de base empresarial" },
              { num: "BPO", label: "operacional completo" },
              { num: "CFO", label: "visão gerencial aplicada" },
            ].map((p) => (
              <div key={p.num} className="flex items-baseline gap-2">
                <span className="font-display font-black text-xl text-primary">{p.num}</span>
                <span className="font-body text-xs text-white/45">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float opacity-60">
        <span className="font-body text-[10px] tracking-[0.2em] text-white/40 uppercase">Scroll</span>
        <ChevronDown size={16} className="text-white/40" />
      </div>

    </section>
  );
};

export default HeroSection;
