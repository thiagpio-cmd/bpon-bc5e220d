import { Eye, Target, AlignLeft } from "lucide-react";

const insights = [
  {
    icon: Eye,
    title: "Clareza",
    description: "A base azul reforça confiança, estabilidade e leitura racional — os pilares de uma consultoria financeira séria.",
  },
  {
    icon: Target,
    title: "Redução de fricção",
    description: "Um CTA principal por bloco melhora foco e reduz dispersão. O visitante sabe o que fazer a seguir.",
  },
  {
    icon: AlignLeft,
    title: "Hierarquia visual",
    description: "Mais respiro, contraste e organização conduzem o olhar com facilidade do headline ao ponto de conversão.",
  },
];

const ValuePerceptionStrip = () => {
  return (
    <section className="py-12 lg:py-14 bg-white border-y border-divider">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {insights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4 items-start">
                {/* Number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                  <span className="font-display font-bold text-xs text-primary/50 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-primary/6 flex items-center justify-center border border-primary/12">
                    <Icon size={18} className="text-primary" />
                  </div>
                </div>
                {/* Text */}
                <div>
                  <p className="font-display font-bold text-sm text-headline mb-1">{item.title}</p>
                  <p className="font-body text-sm text-body leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePerceptionStrip;
