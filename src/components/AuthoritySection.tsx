import { Building2, Users2, Award, TrendingUp } from "lucide-react";

const metrics = [
  { icon: Building2, value: "+20 anos", label: "Base institucional", detail: "Grupo Ubercentral atuando desde 2002 em Uberlândia" },
  { icon: Users2, value: "Equipe especializada", label: "Financeiro e gerencial", detail: "Profissionais dedicados à operação do cliente" },
  { icon: Award, value: "Base contábil integrada", label: "Contador + BPO", detail: "Estrutura que cobre operação e obrigações fiscais" },
  { icon: TrendingUp, value: "Atuação consultiva", label: "Além da execução", detail: "Leitura gerencial e apoio à decisão da liderança" },
];

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-24 lg:py-32 bg-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(210 80% 72% / 1) 1px, transparent 0)", backgroundSize: "44px 44px" }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[350px] pointer-events-none" style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.07) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14 lg:mb-16">
          <div className="reveal">
            <span className="label-pill-dark mb-5 inline-block">Credibilidade</span>
            <h2 className="font-display font-black text-[2rem] lg:text-[2.8rem] text-white leading-[1.07] tracking-[-0.025em] mb-5 mt-1">
              Estrutura de quem já{" "}
              <span className="text-gradient-primary">opera há décadas.</span>
            </h2>
            <p className="font-body text-[14px] text-white/50 leading-relaxed max-w-md">
              A BPOn não nasceu como startup. É parte de um grupo com base contábil e empresarial construída ao longo de mais de 20 anos em Uberlândia, com CRC registrado e estrutura que sustenta operação real.
            </p>
          </div>
          <div className="reveal reveal-delay-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated" style={{ aspectRatio: "16/9" }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=85&auto=format&fit=crop&crop=center" alt="Sede Grupo Ubercentral — Uberlândia MG" className="w-full h-full object-cover opacity-75" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="font-body text-[11px] text-white/70 font-medium">Grupo Ubercentral · Uberlândia, MG</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className={`reveal reveal-delay-${i + 1} group p-5 rounded-xl border border-white/7 bg-white/[0.03] hover:bg-white/[0.055] hover:border-primary/22 transition-all duration-250`}>
                <div className="w-8 h-8 rounded-lg bg-primary/12 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon size={14} className="text-primary" strokeWidth={1.8} />
                </div>
                <p className="font-display font-bold text-[14px] text-white/88 mb-0.5">{metric.value}</p>
                <p className="font-display font-semibold text-[11px] text-primary/65 mb-2">{metric.label}</p>
                <p className="font-body text-[12px] text-white/38 leading-relaxed">{metric.detail}</p>
              </div>
            );
          })}
        </div>

        <div className="reveal reveal-delay-5 pt-5 border-t border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {["Grupo Ubercentral", "Uberlândia — MG", "CNPJ 09.281.566/0001-03", "CRC MG-012100/O"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-4">
                <span className="font-body text-[11px] text-white/32">{item}</span>
                {i < arr.length - 1 && <span className="font-body text-[11px] text-white/15 ml-4">·</span>}
              </span>
            ))}
          </div>
          <a href="#diagnostico" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-[13px] tracking-wide hover:bg-primary/90 transition-all duration-200 shadow-blue w-fit flex-shrink-0">
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
