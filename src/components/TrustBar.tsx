import { CalendarClock, ClipboardCheck, LineChart, Timer } from "lucide-react";

const items = [
  { icon: Timer, label: "Diagnóstico em 1 dia útil", sub: "Retorno comercial sem compromisso" },
  { icon: ClipboardCheck, label: "Onboarding em até 15 dias", sub: "Operação plugada com método" },
  { icon: CalendarClock, label: "Fechamento até o 5º dia útil", sub: "Cadência mensal previsível" },
  { icon: LineChart, label: "Reunião gerencial mensal", sub: "Leitura do resultado com a liderança" },
];

const TrustBar = () => (
  <div className="relative z-10 border-b border-divider" style={{ background: "hsl(var(--surface))" }}>
    <div className="container mx-auto px-6 lg:px-8">
      <div className="py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-divider">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label}
              className="flex items-center gap-3 lg:px-6 first:lg:pl-0 last:lg:pr-0 group cursor-default">
              <div className="icon-sm icon-bg flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Icon size={14} className="text-primary" strokeWidth={1.8} />
              </div>
              <div className="min-w-0">
                <p className="font-display font-bold text-[12.5px] text-headline leading-tight truncate">{item.label}</p>
                <p className="font-body text-[11px] text-body leading-tight mt-0.5">{item.sub}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default TrustBar;
