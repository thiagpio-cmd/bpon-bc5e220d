import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative surface-deep overflow-hidden">
      {/* X mark — discreet */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 pointer-events-none flex items-center opacity-[0.025] select-none"
      >
        <svg viewBox="0 0 100 100" className="h-[110%] w-auto translate-x-[20%]" fill="none">
          <path d="M15 15 L85 85 M85 15 L15 85" stroke="hsl(214 100% 70%)" strokeWidth="3" strokeLinecap="square" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl py-24 lg:py-32">
          <h1 className="font-display font-semibold text-white text-[2rem] sm:text-[2.4rem] lg:text-[3rem] leading-[1.1] tracking-tight">
            BPO Financeiro para empresas que precisam de mais controle.
          </h1>

          <p className="font-body text-[15px] lg:text-[17px] text-white/65 mt-6 leading-relaxed max-w-2xl">
            A Fintex BPO organiza contas a pagar, contas a receber, conciliação, cobranças e
            relatórios para sua empresa ter uma rotina financeira mais previsível.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-10">
            <a
              href="#diagnostico"
              className="group inline-flex items-center justify-center gap-2 font-body font-medium text-sm px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Solicitar diagnóstico
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 font-body text-sm px-6 py-3 rounded-md text-white/80 hover:text-white transition-colors"
            >
              Ver como funciona
            </a>
          </div>

          <p className="font-body text-[12.5px] text-white/40 mt-8 max-w-xl">
            Para empresas que cresceram e precisam profissionalizar o financeiro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
