import { ArrowRight } from "lucide-react";

const indicators = [
  "Contas a pagar",
  "Contas a receber",
  "Conciliação",
  "Fluxo de caixa",
  "Relatórios gerenciais",
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative surface-deep overflow-hidden">
      {/* Giant X mark in background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-end opacity-[0.04] select-none"
      >
        <svg viewBox="0 0 100 100" className="h-[140%] w-auto translate-x-[15%]" fill="none">
          <path d="M15 15 L85 85 M85 15 L15 85" stroke="hsl(214 100% 60%)" strokeWidth="4" strokeLinecap="square" />
        </svg>
      </div>

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 30%, hsl(214 100% 30% / 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl py-20 lg:py-32">
          <p className="eyebrow eyebrow-light mb-6">BPO Financeiro</p>

          <h1 className="font-display font-black text-white text-[2.25rem] sm:text-[2.8rem] lg:text-[3.6rem] leading-[1.05] tracking-tight">
            BPO Financeiro para empresas que precisam de{" "}
            <span className="text-primary">rotina, caixa e previsibilidade.</span>
          </h1>

          <p className="font-body text-[15px] lg:text-[17px] text-white/65 mt-6 leading-relaxed max-w-2xl">
            A Fintex BPO assume contas a pagar, contas a receber, conciliação, cobranças e relatórios
            para sua empresa operar com mais controle.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-9">
            <a
              href="#diagnostico"
              className="group inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-6 py-3.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-blue"
            >
              Solicitar diagnóstico financeiro
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 font-body font-medium text-sm px-6 py-3.5 rounded-lg border border-white/15 text-white/85 hover:bg-white/5 hover:border-white/25 transition-all"
            >
              Ver como funciona
            </a>
          </div>

          <p className="font-body text-[12.5px] text-white/45 mt-5 max-w-xl leading-relaxed">
            Para empresas em crescimento que precisam profissionalizar o financeiro sem montar uma
            estrutura interna pesada.
          </p>

          {/* Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="font-body text-[11px] uppercase tracking-[0.14em] text-white/35 mb-4">
              Rotinas que assumimos
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5">
              {indicators.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 font-body text-[13px] text-white/70">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <p className="font-body text-[12px] text-white/40 mt-10 italic">
            Menos ruído. Mais lógica financeira.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
