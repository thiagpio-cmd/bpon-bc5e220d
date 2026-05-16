import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const faturamentoOptions = [
  "Até R$ 50 mil por mês",
  "R$ 50 mil a R$ 120 mil por mês",
  "R$ 120 mil a R$ 300 mil por mês",
  "R$ 300 mil a R$ 1 milhão por mês",
  "Acima de R$ 1 milhão por mês",
];

const applyPhoneMask = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const capitalizeName = (value: string): string =>
  value.replace(/\b\w/g, (c) => c.toUpperCase());

const DiagnosticForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});

  const set = (id: string, v: string) => setForm((p) => ({ ...p, [id]: v }));

  const valid =
    form.nome?.trim() &&
    form.empresa?.trim() &&
    (form.whatsapp?.replace(/\D/g, "").length ?? 0) >= 10 &&
    form.email?.includes("@") &&
    form.faturamento &&
    form.desafio?.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    try {
      await supabase.functions.invoke("send-lead-email", {
        body: {
          nome: form.nome?.trim(),
          empresa: form.empresa?.trim(),
          email: form.email?.trim() || null,
          whatsapp: form.whatsapp || null,
          faturamento: form.faturamento || null,
          desafio: form.desafio?.trim() || null,
          mensagem: form.mensagem?.trim() || null,
        },
      });
    } catch (err) {
      console.error("Erro ao enviar formulário:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-soft flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M4 10l4 4 8-8" stroke="hsl(var(--primary))" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <h3 className="font-display font-bold text-[19px] text-headline mb-2">
            Recebemos suas informações.
          </h3>
          <p className="font-body text-[14px] text-body max-w-md leading-relaxed">
            A equipe da Fintex BPO vai analisar seu cenário e entrar em contato em até 1 dia útil.
          </p>
        </div>
      </div>
    );
  }

  const inputCls =
    "w-full px-3.5 py-2.5 rounded-lg bg-background border border-border font-body text-[14px] text-headline placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-[12.5px] font-medium text-headline">Nome</label>
          <input
            required
            value={form.nome || ""}
            onChange={(e) => set("nome", capitalizeName(e.target.value))}
            placeholder="Seu nome"
            className={inputCls}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-[12.5px] font-medium text-headline">Empresa</label>
          <input
            required
            value={form.empresa || ""}
            onChange={(e) => set("empresa", e.target.value)}
            placeholder="Nome da empresa"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-[12.5px] font-medium text-headline">WhatsApp</label>
          <input
            required
            inputMode="numeric"
            maxLength={15}
            value={form.whatsapp || ""}
            onChange={(e) => set("whatsapp", applyPhoneMask(e.target.value))}
            placeholder="(00) 00000-0000"
            className={inputCls}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-body text-[12.5px] font-medium text-headline">E-mail</label>
          <input
            required
            type="email"
            value={form.email || ""}
            onChange={(e) => set("email", e.target.value.trim())}
            placeholder="voce@empresa.com.br"
            className={inputCls}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-[12.5px] font-medium text-headline">Faturamento mensal</label>
        <select
          required
          value={form.faturamento || ""}
          onChange={(e) => set("faturamento", e.target.value)}
          className={`${inputCls} appearance-none cursor-pointer`}
        >
          <option value="" disabled>Selecionar...</option>
          {faturamentoOptions.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-[12.5px] font-medium text-headline">Principal desafio financeiro</label>
        <input
          required
          value={form.desafio || ""}
          onChange={(e) => set("desafio", e.target.value)}
          placeholder="Ex: caixa desorganizado, cobrança manual..."
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="font-body text-[12.5px] font-medium text-headline">Mensagem <span className="text-muted-foreground font-normal">(opcional)</span></label>
        <textarea
          rows={3}
          value={form.mensagem || ""}
          onChange={(e) => set("mensagem", e.target.value)}
          placeholder="Conte mais sobre o contexto da sua operação..."
          className={`${inputCls} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={!valid || loading}
        className="btn-primary group mt-2 w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? "Enviando..." : "Solicitar diagnóstico financeiro"}
        {!loading && <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />}
      </button>

      <p className="font-body text-[12px] text-muted-foreground leading-relaxed text-center">
        Os dados são usados exclusivamente para contato consultivo da Fintex BPO.
      </p>
    </form>
  );
};

export default DiagnosticForm;
