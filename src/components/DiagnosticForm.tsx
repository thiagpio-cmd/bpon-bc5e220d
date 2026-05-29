import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const faturamentoOptions = [
  "Até R$ 100 mil/mês",
  "R$ 100 mil a R$ 500 mil/mês",
  "R$ 500 mil a R$ 2 mi/mês",
  "Acima de R$ 2 mi/mês",
  "Prefiro não informar",
];

const extraSelectFields = [
  {
    id: "segmento",
    label: "Segmento",
    options: ["Serviços", "Comércio", "Indústria", "Construção", "Tecnologia", "Saúde", "Outro"],
  },
  {
    id: "pessoas",
    label: "Pessoas no financeiro",
    options: ["Somente eu", "1 pessoa dedicada", "2 a 3 pessoas", "4 ou mais"],
  },
  {
    id: "ferramenta",
    label: "Ferramenta principal",
    options: [
      "Planilhas Excel / Google Sheets",
      "ERP (Omie, Bling, Totvs, SAP...)",
      "Sistema próprio",
      "Nenhum sistema estruturado",
    ],
  },
];

// Phone mask: (XX) XXXXX-XXXX or (XX) XXXX-XXXX
const applyPhoneMask = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

// Capitalize each word
const capitalizeName = (value: string): string =>
  value.replace(/\b\w/g, (c) => c.toUpperCase());

const DiagnosticForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});
  const [showExtra, setShowExtra] = useState(false);
  const [lgpdAccepted, setLgpdAccepted] = useState(false);

  const handleChange = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (value: string) => {
    handleChange("whatsapp", applyPhoneMask(value));
  };

  const handleNameChange = (value: string) => {
    handleChange("nome", capitalizeName(value));
  };

  const handleEmpresaChange = (value: string) => {
    handleChange("empresa", value);
  };

  const step1Valid =
    form["nome"]?.trim() &&
    (form["whatsapp"]?.replace(/\D/g, "").length >= 10 || form["email"]?.includes("@")) &&
    form["empresa"]?.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lgpdAccepted) return;
    setLoading(true);
    try {
      await supabase.functions.invoke("send-lead-email", {
        body: {
          nome: form["nome"]?.trim(),
          empresa: form["empresa"]?.trim(),
          email: form["email"]?.trim() || null,
          whatsapp: form["whatsapp"] || null,
          faturamento: form["faturamento"] || null,
          desafio: form["desafio"]?.trim() || null,
          cidade: form["cidade"]?.trim() || null,
          segmento: form["segmento"] || null,
          pessoas: form["pessoas"] || null,
          ferramenta: form["ferramenta"] || null,
        },
      });
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const WHATSAPP_NUMBER = "5531981184086";
  const whatsappMessage = encodeURIComponent(
    `Olá! Sou ${form["nome"] || ""}${form["empresa"] ? ` da ${form["empresa"]}` : ""}. Acabei de solicitar um diagnóstico no site da Fintex BPO.`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  useEffect(() => {
    if (!submitted) return;
    const t = setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 1500);
    return () => clearTimeout(t);
  }, [submitted, whatsappUrl]);

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
        <div className="absolute inset-0 bg-headline/70 backdrop-blur-sm" />
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-elevated p-8 flex flex-col items-center text-center gap-5">
          <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
              <path d="M6 14l6 6 10-10" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-headline mb-2">
              Diagnóstico solicitado com sucesso.
            </h3>
            <p className="font-body text-sm text-body leading-relaxed">
              Redirecionando você para o WhatsApp da Fintex BPO para iniciar a conversa agora.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-body font-semibold text-sm transition-all duration-200 shadow-elevated"
          >
            <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 6.4C14.3 6.4 6.4 14.3 6.4 24c0 3.4.95 6.6 2.6 9.3l.4.7-1.7 6.2 6.4-1.7.7.4A17.46 17.46 0 0 0 24 41.6c9.7 0 17.6-7.9 17.6-17.6S33.7 6.4 24 6.4zM17.3 15.2c.3 0 .6 0 .9.01.3 0 .6.01.9.7.35.8 1.15 2.8 1.25 3.0.1.2.15.45.02.7-.13.25-.2.4-.4.62-.2.22-.42.48-.6.65-.2.18-.4.37-.18.73.23.36 1.0 1.65 2.15 2.67 1.48 1.32 2.73 1.73 3.1 1.92.37.2.59.17.81-.1.22-.27.93-1.08 1.18-1.45.25-.37.5-.31.84-.18.34.12 2.17 1.02 2.54 1.21.37.18.62.28.71.43.1.15.1.87-.2 1.71-.3.84-1.74 1.6-2.4 1.7-.64.1-1.25.14-4.1-1.08-3.46-1.44-5.65-4.95-5.82-5.18-.17-.22-1.4-1.86-1.4-3.54 0-1.68.88-2.5 1.2-2.84.3-.35.67-.44.9-.44z" fill="white"/>
            </svg>
            Falar agora no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setForm({});
              setStep(1);
              setLgpdAccepted(false);
              setShowExtra(false);
            }}
            className="font-body text-xs text-body/60 hover:text-headline transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-lg border font-body text-sm text-headline placeholder:text-body/45 focus:outline-none focus:ring-2 transition-all duration-200" +
    " bg-white border-divider focus:border-primary/50 focus:ring-primary/10";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-1">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => (s === 2 && step1Valid ? setStep(2) : s === 1 ? setStep(1) : null)}
              className={`w-6 h-6 rounded-full flex items-center justify-center font-body font-bold text-[11px] transition-all duration-200 ${
                step === s
                  ? "bg-primary text-primary-foreground shadow-blue"
                  : s < step
                  ? "bg-emerald-500 text-white"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {s < step ? "✓" : s}
            </button>
            <span
              className={`font-body text-[11px] ${
                step === s ? "text-headline font-medium" : "text-body/60"
              }`}
            >
              {s === 1 ? "Identificação" : "Contexto"}
            </span>
            {s < 2 && <ChevronRight size={12} className="text-body/30" />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-4 animate-fade-in">
          {/* Nome */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nome" className="font-body text-xs font-semibold text-headline">
              Nome completo <span className="text-primary">*</span>
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              required
              autoComplete="name"
              value={form["nome"] || ""}
              onChange={(e) => handleNameChange(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* Empresa */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="empresa" className="font-body text-xs font-semibold text-headline">
              Empresa <span className="text-primary">*</span>
            </label>
            <input
              id="empresa"
              type="text"
              placeholder="Nome da empresa"
              required
              autoComplete="organization"
              value={form["empresa"] || ""}
              onChange={(e) => handleEmpresaChange(e.target.value)}
              className={inputClass}
            />
          </div>

          {/* WhatsApp + E-mail */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="whatsapp" className="font-body text-xs font-semibold text-headline">
                WhatsApp <span className="text-primary">*</span>
              </label>
              <input
                id="whatsapp"
                type="tel"
                placeholder="(34) 99999-9999"
                required
                inputMode="numeric"
                autoComplete="tel"
                maxLength={15}
                value={form["whatsapp"] || ""}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-body text-xs font-semibold text-headline">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="voce@empresa.com.br"
                autoComplete="email"
                value={form["email"] || ""}
                onChange={(e) => handleChange("email", e.target.value.trim())}
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="button"
            disabled={!step1Valid}
            onClick={() => setStep(2)}
            className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-blue disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4 animate-fade-in">
          {/* Faturamento */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="faturamento"
              className="font-body text-xs font-semibold text-headline"
            >
              Faixa de faturamento mensal <span className="text-primary">*</span>
            </label>
            <select
              id="faturamento"
              required
              value={form["faturamento"] || ""}
              onChange={(e) => handleChange("faturamento", e.target.value)}
              className={`${inputClass} appearance-none cursor-pointer`}
            >
              <option value="" disabled>
                Selecionar...
              </option>
              {faturamentoOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <p className="font-body text-[11px] text-body/60">
              Usamos apenas para direcionar o diagnóstico ao porte da sua operação.
            </p>
          </div>

          {/* Desafio */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="desafio" className="font-body text-xs font-semibold text-headline">
              Principal desafio financeiro hoje <span className="text-primary">*</span>
            </label>
            <textarea
              id="desafio"
              rows={3}
              required
              placeholder="Descreva brevemente o contexto atual..."
              value={form["desafio"] || ""}
              onChange={(e) => handleChange("desafio", e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Accordion extra */}
          <div className="rounded-lg border border-divider overflow-hidden">
            <button
              type="button"
              onClick={() => setShowExtra((v) => !v)}
              className="w-full flex items-center justify-between px-4 py-3 bg-surface hover:bg-surface-tint transition-colors duration-200 group"
            >
              <span className="font-body text-xs font-medium text-body group-hover:text-headline transition-colors duration-200">
                Informações complementares{" "}
                <span className="text-body/45 font-normal">(opcional)</span>
              </span>
              <ChevronDown
                size={14}
                className="text-muted-foreground transition-transform duration-300"
                style={{ transform: showExtra ? "rotate(180deg)" : "rotate(0deg)" }}
              />
            </button>
            {showExtra && (
              <div className="px-4 pb-4 pt-3 flex flex-col gap-4 border-t border-divider bg-surface/50">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cidade"
                    className="font-body text-xs font-medium text-headline"
                  >
                    Cidade / UF
                  </label>
                  <input
                    id="cidade"
                    type="text"
                    placeholder="Sua cidade / UF"
                    autoComplete="address-level2"
                    value={form["cidade"] || ""}
                    onChange={(e) => handleChange("cidade", e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {extraSelectFields.map((field) => (
                    <div key={field.id} className="flex flex-col gap-1.5">
                      <label
                        htmlFor={field.id}
                        className="font-body text-xs font-medium text-headline"
                      >
                        {field.label}
                      </label>
                      <select
                        id={field.id}
                        value={form[field.id] || ""}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Selecionar...
                        </option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* LGPD */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                checked={lgpdAccepted}
                onChange={(e) => setLgpdAccepted(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-200 ${
                  lgpdAccepted
                    ? "bg-primary border-primary"
                    : "bg-white border-divider group-hover:border-primary/40"
                }`}
              >
                {lgpdAccepted && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                    <path
                      d="M1 3.5l2.5 2.5 5-5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className="font-body text-[11.5px] text-body leading-relaxed">
              Li e concordo com a{" "}
              <span className="text-primary font-medium cursor-pointer hover:underline">
                Política de Privacidade
              </span>{" "}
              e autorizo o contato consultivo da equipe Fintex BPO.
            </span>
          </label>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-5 py-3.5 rounded-lg border border-divider bg-surface font-body font-medium text-sm text-body hover:text-headline hover:border-primary/20 transition-all duration-200"
            >
              Voltar
            </button>
            <button
              type="submit"
              disabled={!lgpdAccepted || !form["faturamento"] || !form["desafio"]?.trim() || loading}
              className="group flex-1 flex items-center justify-center gap-2 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary/90 transition-all duration-200 shadow-blue disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Solicitar diagnóstico"}
              {!loading && (
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              )}
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default DiagnosticForm;
