import { ArrowRight, Check } from "lucide-react";

const rotinas = [
  "Contas a pagar",
  "Contas a receber",
  "Conciliação bancária",
  "Fluxo de caixa",
  "Relatórios gerenciais",
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background">
      <div className="hero-halo" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10 pt-20 lg:pt-28 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center reveal">
          <span className="chip mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            BPO Financeiro para empresas em crescimento
          </span>

          <h1 className="font-display font-extrabold text-headline text-[2.5rem] sm:text-[3.5rem] lg:text-[4.5rem] leading-[1.02] tracking-[-0.035em]">
            O financeiro da sua empresa, <br className="hidden md:block" />
            <span className="text-gradient">com método e previsibilidade.</span>
          </h1>

          <p className="mt-7 font-body text-[17px] lg:text-[19px] text-body leading-relaxed max-w-2xl mx-auto">
            A Fintex BPO assume contas a pagar, contas a receber, conciliação, cobranças e
            relatórios — para sua empresa operar com clareza e ganhar tempo de gestão.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#diagnostico" className="btn-primary group">
              Solicitar diagnóstico
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#metodo" className="btn-ghost">
              Ver como funciona
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check size={14} className="text-primary" /> Resposta em 1 dia útil</span>
            <span className="flex items-center gap-1.5"><Check size={14} className="text-primary" /> Sem compromisso</span>
            <span className="flex items-center gap-1.5"><Check size={14} className="text-primary" /> Equipe sênior</span>
          </div>
        </div>

        {/* Visual mock / product preview */}
        <div className="mt-20 lg:mt-24 max-w-5xl mx-auto reveal reveal-delay-2">
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.25)]">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="ml-3 text-[11px] font-medium text-muted-foreground">fintex.bpo / painel financeiro</span>
            </div>

            <div className="p-6 lg:p-8 grid grid-cols-12 gap-5">
              {/* KPIs */}
              <div className="col-span-12 grid grid-cols-3 gap-4">
                {[
                  { l: "Saldo consolidado", v: "R$ 1.284.530", d: "+12,4%" },
                  { l: "A pagar (7 dias)", v: "R$ 287.140", d: "32 títulos" },
                  { l: "A receber (7 dias)", v: "R$ 412.880", d: "48 títulos" },
                ].map((k) => (
                  <div key={k.l} className="rounded-xl border border-border p-4 bg-background/60">
                    <p className="text-[11px] font-medium text-muted-foreground">{k.l}</p>
                    <p className="mt-2 font-display font-bold text-headline text-[18px] lg:text-[20px] tracking-tight">{k.v}</p>
                    <p className="mt-1 text-[11px] text-primary font-medium">{k.d}</p>
                  </div>
                ))}
              </div>

              {/* Cashflow chart */}
              <div className="col-span-12 lg:col-span-7 rounded-xl border border-border p-5 bg-background/60">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">Fluxo de caixa</p>
                    <p className="font-display font-semibold text-headline text-[15px]">Últimos 30 dias</p>
                  </div>
                  <span className="chip !py-1 !px-2.5 !text-[11px]">Projetado</span>
                </div>
                <svg viewBox="0 0 400 120" className="w-full h-28">
                  <defs>
                    <linearGradient id="cf" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 90 L40 80 L80 85 L120 60 L160 65 L200 45 L240 50 L280 30 L320 35 L360 20 L400 25 L400 120 L0 120 Z" fill="url(#cf)" />
                  <path d="M0 90 L40 80 L80 85 L120 60 L160 65 L200 45 L240 50 L280 30 L320 35 L360 20 L400 25" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />
                </svg>
              </div>

              {/* Rotinas list */}
              <div className="col-span-12 lg:col-span-5 rounded-xl border border-border p-5 bg-background/60">
                <p className="text-[11px] font-medium text-muted-foreground mb-3">Rotinas em operação</p>
                <ul className="space-y-2.5">
                  {rotinas.map((r) => (
                    <li key={r} className="flex items-center gap-2.5 text-[13.5px] text-headline">
                      <span className="w-5 h-5 rounded-full bg-primary-soft flex items-center justify-center">
                        <Check size={11} className="text-primary" />
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
