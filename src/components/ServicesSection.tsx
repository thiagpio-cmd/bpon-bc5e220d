import {
  Receipt, ArrowDownToLine, RefreshCw, TrendingUp,
  Bell, FileBarChart, FolderOpen, Calendar
} from "lucide-react";

const services = [
  { icon: Receipt, label: "Contas a pagar" },
  { icon: ArrowDownToLine, label: "Contas a receber" },
  { icon: RefreshCw, label: "Conciliação bancária" },
  { icon: TrendingUp, label: "Fluxo de caixa" },
  { icon: Bell, label: "Cobranças" },
  { icon: FileBarChart, label: "Relatórios gerenciais" },
  { icon: FolderOpen, label: "Organização documental" },
  { icon: Calendar, label: "Calendário financeiro" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-py bg-background relative">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-14 reveal">
          <span className="eyebrow">Serviços</span>
          <h2 className="font-display font-bold text-headline text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] leading-[1.08] tracking-[-0.03em] mt-4">
            O que a Fintex BPO <span className="text-primary">pode assumir</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 reveal reveal-delay-2">
          {services.map(({ icon: Icon, label }) => (
            <div key={label} className="card-soft p-5 flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-primary-soft flex items-center justify-center shrink-0">
                <Icon size={16} className="text-primary" />
              </div>
              <span className="font-display font-medium text-headline text-[14.5px] leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
