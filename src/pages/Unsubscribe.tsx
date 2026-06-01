import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

type Status = "validating" | "valid" | "already" | "invalid" | "submitting" | "done" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const Unsubscribe = () => {
  const [status, setStatus] = useState<Status>("validating");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    document.title = "Cancelar inscrição — Fintex BPO";
    if (!token) {
      setStatus("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_KEY } }
        );
        const data = await res.json();
        if (res.ok && data.valid) setStatus("valid");
        else if (data?.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      } catch {
        setStatus("invalid");
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setStatus("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setStatus("done");
      else if (data?.reason === "already_unsubscribed") setStatus("already");
      else {
        setErrorMsg("Não foi possível processar agora.");
        setStatus("error");
      }
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Erro inesperado.");
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-sm">
        <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-primary">
          Fintex BPO
        </p>
        <h1 className="mt-2 font-display text-2xl font-bold text-headline">
          Cancelar inscrição
        </h1>

        {status === "validating" && (
          <p className="mt-4 font-body text-sm text-muted-foreground">
            Verificando seu link...
          </p>
        )}

        {status === "valid" && (
          <>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              Confirme abaixo para parar de receber comunicações por e-mail da Fintex BPO.
            </p>
            <Button onClick={handleConfirm} className="mt-6 w-full">
              Confirmar cancelamento
            </Button>
          </>
        )}

        {status === "submitting" && (
          <p className="mt-4 font-body text-sm text-muted-foreground">Processando...</p>
        )}

        {status === "done" && (
          <p className="mt-4 font-body text-sm text-headline">
            Inscrição cancelada. Você não receberá mais e-mails deste endereço.
          </p>
        )}

        {status === "already" && (
          <p className="mt-4 font-body text-sm text-headline">
            Este endereço já está cancelado. Nada a fazer.
          </p>
        )}

        {status === "invalid" && (
          <p className="mt-4 font-body text-sm text-muted-foreground">
            Link inválido ou expirado.
          </p>
        )}

        {status === "error" && (
          <p className="mt-4 font-body text-sm text-destructive">
            {errorMsg || "Erro ao processar. Tente novamente em instantes."}
          </p>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
