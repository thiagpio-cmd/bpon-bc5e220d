import { ArrowRight } from "lucide-react";

const profiles = [
  {
    title: "Empresa em crescimento com financeiro desorganizado",
    text: "Receita crescendo, controles fragmentados e rotina operada no improviso. A estrutura não acompanhou o volume.",
  },
  {
    title: "Gestão que precisa de caixa legível e previsível",
    text: "Liderança decidindo sem base financeira consolidada. Sem fluxo confiável, sem fechamento mensal, sem visão do resultado.",
  },
  {
    title: "Operação dependente de uma única pessoa",
    text: "Risco de concentração, sem processo documentado e sem continuidade se essa pessoa sair ou faltar.",
  },
  {
    title: "ERP ou planilha sem processo real por trás",
    text: "Ferramenta existe, mas falta quem opere com critério, cadência e responsabilidade sobre os dados gerados.",
  },
];

const ForWhomSection = () => {
  return (
    <section id="para-quem" className="py-20 lg:py-28 section-alt section-divide-top section-from-dark">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Header — layout assimétrico */}
        <div className="mb-12 lg:mb-16 reveal">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-primary mb-5">
            Para quem é
          </p>
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <h2 className="font-display font-black text-headline leading-[1.04] tracking-[-0.028em]"
              style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)" }}>
              A BPOn funciona melhor<br />
              para quem já opera.
            </h2>
            <div className="lg:max-w-[320px]">
              <p className="font-body text-[13px] text-body leading-relaxed">
                Empresas com operação em andamento, volume financeiro real e necessidade
                concreta de organizar rotina, caixa e gestão.
              </p>
            </div>
          </div>
        </div>

        {/* Perfis — lista estilo editorial, sem números decorativos */}
        <div className="flex flex-col divide-y divide-divider border border-divider rounded-2xl overflow-hidden">
          {profiles.map((profile, i) => (
            <div
              key={profile.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group flex flex-col sm:flex-row gap-4 sm:gap-8 sm:items-start px-6 py-6 bg-surface hover:bg-surface-tint transition-colors duration-200 cursor-default`}
            >
              {/* Letra indicadora — leve e refinada */}
              <span className="font-display font-black text-[3rem] leading-none select-none flex-shrink-0 transition-colors duration-300"
                style={{
                  color: "hsl(var(--primary) / 0.10)",
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1,
                }}>
                {String.fromCharCode(65 + i)}
              </span>
              <div className="pt-1">
                <h3 className="font-display font-bold text-[14px] text-headline mb-1.5 leading-snug">
                  {profile.title}
                </h3>
                <p className="font-body text-[12.5px] text-body leading-relaxed">{profile.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fit ideal — inline, não card */}
        <p className="font-body text-[12.5px] text-body leading-relaxed mt-5 reveal">
          <span className="font-semibold text-headline">Fit ideal:</span>{" "}
          empresa ativa, volume financeiro real e necessidade de processo contínuo — não demandas pontuais.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center reveal">
          <a href="#diagnostico"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-[13px] hover:opacity-90 transition-all duration-200 shadow-blue group">
            Ver se a BPOn é para minha empresa
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ForWhomSection;
