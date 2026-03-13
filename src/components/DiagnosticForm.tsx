import { useState } from "react";
import { ArrowRight } from "lucide-react";

const fields = [
  { id: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome", required: true, fullWidth: true },
  { id: "empresa", label: "Empresa", type: "text", placeholder: "Nome da empresa", required: true },
  { id: "whatsapp", label: "WhatsApp", type: "tel", placeholder: "(34) 99999-9999", required: true },
  { id: "email", label: "E-mail", type: "email", placeholder: "voce@empresa.com.br", required: true },
  { id: "cidade", label: "Cidade / UF", type: "text", placeholder: "Uberlândia / MG", required: false },
];

const selectFields = [
  {
    id: "faturamento",
    label: "Faixa de faturamento mensal",
    options: ["Até R$ 100 mil", "R$ 100 mil – R$ 500 mil", "R$ 500 mil – R$ 2 mi", "Acima de R$ 2 mi", "Prefiro não informar"],
  },
  {
    id: "segmento",
    label: "Segmento",
    options: ["Serviços", "Comércio", "Indústria", "Construção", "Tecnologia", "Saúde", "Outro"],
  },
  {
    id: "pessoas",
    label: "Quantas pessoas cuidam do financeiro hoje?",
    options: ["Somente eu", "1 pessoa dedicada", "2 a 3 pessoas", "4 ou mais"],
  },
  {
    id: "ferramenta",
    label: "Usa ERP ou planilhas?",
    options: ["Planilhas Excel / Google Sheets", "ERP (Omie, Bling, Totvs, SAP...)", "Sistema próprio", "Nenhum sistema estruturado"],
  },
];

const DiagnosticForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-6 text-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14l6 6 10-10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-headline mb-2">
            Diagnóstico solicitado com sucesso.
          </h3>
          <p className="font-body text-sm text-body max-w-md leading-relaxed">
            A equipe da BPOn vai analisar as informações e entrar em contato para dar continuidade ao diagnóstico. Em geral respondemos em até 1 dia útil.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Text fields grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {fields.map((field) => (
          <div
            key={field.id}
            className={`flex flex-col gap-1.5 ${field.fullWidth ? "sm:col-span-2" : ""}`}
          >
            <label htmlFor={field.id} className="font-body text-xs font-medium text-headline">
              {field.label}
              {field.required && <span className="text-primary ml-0.5">*</span>}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={form[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="px-4 py-3 rounded-lg border border-divider bg-surface font-body text-sm text-headline placeholder:text-body/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200"
            />
          </div>
        ))}
      </div>

      {/* Select fields */}
      <div className="grid sm:grid-cols-2 gap-4">
        {selectFields.map((field) => (
          <div key={field.id} className="flex flex-col gap-1.5">
            <label htmlFor={field.id} className="font-body text-xs font-medium text-headline">
              {field.label}
            </label>
            <select
              id={field.id}
              value={form[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="px-4 py-3 rounded-lg border border-divider bg-surface font-body text-sm text-headline focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200 appearance-none cursor-pointer"
            >
              <option value="" disabled>Selecionar...</option>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Desafio */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="desafio" className="font-body text-xs font-medium text-headline">
          Qual o principal desafio financeiro hoje?
        </label>
        <textarea
          id="desafio"
          rows={3}
          placeholder="Descreva brevemente o contexto atual..."
          value={form["desafio"] || ""}
          onChange={(e) => handleChange("desafio", e.target.value)}
          className="px-4 py-3 rounded-lg border border-divider bg-surface font-body text-sm text-headline placeholder:text-body/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none"
        />
      </div>

      {/* Mensagem complementar */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="mensagem" className="font-body text-xs font-medium text-headline">
          Mensagem complementar
          <span className="text-body ml-1 font-normal">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          rows={2}
          placeholder="Alguma informação adicional que queira compartilhar..."
          value={form["mensagem"] || ""}
          onChange={(e) => handleChange("mensagem", e.target.value)}
          className="px-4 py-3 rounded-lg border border-divider bg-surface font-body text-sm text-headline placeholder:text-body/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all duration-200 resize-none"
        />
      </div>

      {/* Privacy note */}
      <p className="font-body text-xs text-body/60">
        Seus dados serão usados apenas para contato consultivo da equipe BPOn. Nenhuma informação é compartilhada com terceiros.
      </p>

      {/* Submit */}
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 w-full sm:w-auto sm:self-start px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-card"
      >
        Solicitar diagnóstico financeiro
        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </form>
  );
};

export default DiagnosticForm;
