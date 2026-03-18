import { Building2, Users2, Award, TrendingUp } from "lucide-react";

const metrics = [
  { icon: Building2, value: "+20 anos", label: "Base institucional", detail: "Grupo Ubercentral atuando desde 2002 em Uberlândia" },
  { icon: Users2, value: "Equipe especializada", label: "Financeiro e gerencial", detail: "Profissionais dedicados à operação do cliente" },
  { icon: Award, value: "Base contábil integrada", label: "Contador + BPO", detail: "Estrutura que cobre operação e obrigações fiscais" },
  { icon: TrendingUp, value: "Atuação consultiva", label: "Além da execução", detail: "Leitura gerencial e apoio à decisão da liderança" },
];

const AuthoritySection = () => {
  return (
    <section id="autoridade" className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(222,60%,8%) 0%, hsl(218,72%,10%) 60%, hsl(220,65%,8%) 100%)" }}>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(210 80% 72% / 1) 1px, transparent 0)", backgroundSize: "44px 44px" }} />

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.09) 0%, transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[350px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, hsl(220 79% 46% / 0.05) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">

        {/* Header — full width, no image */}
        <div className="reveal mb-14 lg:mb-16 max-w-2xl">
          <span className="label-pill-dark mb-5 inline-block">Credibilidade</span>
          <h2 className="font-display font-black text-[2rem] lg:text-[2.8rem] text-white leading-[1.07] tracking-[-0.025em] mb-5 mt-3">
            Estrutura de quem já{" "}
            <span className="text-shimmer">opera há décadas.</span>
          </h2>
          <p className="font-body text-[15px] leading-relaxed" style={{ color: "hsl(210 20% 55%)" }}>
            A BPOn não nasceu como startup. É parte de um grupo com base contábil e empresarial construída ao longo de mais de 20 anos em Uberlândia, com CRC registrado e estrutura que sustenta operação real.
          </p>
        </div>

        {/* Metrics — 4 cards em grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mb-10 rounded-2xl overflow-hidden" style={{ background: "hsl(210 30% 18%)" }}>
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className={`reveal reveal-delay-${i + 1} group p-6 lg:p-7 flex flex-col gap-4 transition-all duration-250`}
                style={{ background: "hsl(220 55% 9%)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "hsl(220 55% 11%)")}
                onMouseLeave={e => (e.currentTarget.style.background = "hsl(220 55% 9%)")}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: "hsl(220 79% 46% / 0.12)", border: "1px solid hsl(220 79% 46% / 0.22)" }}>
                  <Icon size={15} strokeWidth={1.8} style={{ color: "hsl(220 79% 60%)" }} />
                </div>
                <div>
                  <p className="font-display font-bold text-[15px] mb-1" style={{ color: "hsl(210 40% 90%)" }}>{metric.value}</p>
                  <p className="font-display font-semibold text-[11px] uppercase tracking-[0.08em] mb-2" style={{ color: "hsl(220 79% 58% / 0.75)" }}>{metric.label}</p>
                  <p className="font-body text-[12px] leading-relaxed" style={{ color: "hsl(210 15% 48%)" }}>{metric.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional footer strip */}
        <div className="reveal reveal-delay-5 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid hsl(210 30% 18%)" }}>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {["Grupo Ubercentral", "Uberlândia — MG", "CNPJ 09.281.566/0001-03", "CRC MG-012100/O"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-4">
                <span className="font-body text-[11px]" style={{ color: "hsl(210 15% 40%)" }}>{item}</span>
                {i < arr.length - 1 && <span className="font-body text-[11px]" style={{ color: "hsl(210 15% 26%)" }}>·</span>}
              </span>
            ))}
          </div>
          <a href="#diagnostico"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-[13px] tracking-wide hover:bg-primary/90 transition-all duration-200 shadow-blue w-fit flex-shrink-0">
            Solicitar diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
