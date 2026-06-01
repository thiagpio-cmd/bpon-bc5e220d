## Análise pré-publicação — Fintex BPO

### Diagnóstico atual

**Formulário de diagnóstico**
- Grava o lead no banco (`lead_submissions`): OK
- Tenta enviar e-mail para `contato@fintexbpo.com.br` via API de e-mail do Lovable: **falha silenciosa** — nenhum domínio de e-mail está configurado, então a API rejeita o envio. Hoje, os leads só existem no banco.
- A edge function `send-lead-email` usa endpoint legado (`email-api.lovable.dev/v1/send`), que não passa pela fila com retry. Vamos migrar para o pipeline padrão (`send-transactional-email`), com template React Email e fila durável.

**SEO**
- `index.html` ainda referencia `https://bpon.lovable.app/` em `canonical`, `og:url` e schema `ProfessionalService` — inconsistente com a publicação atual em `fintexbpo.lovable.app` e com o destino final `fintexbpo.com.br`.
- `sitemap.xml` aponta para `fintexbpo.lovable.app` — também precisa migrar para `fintexbpo.com.br`.
- `Helmet` em `Index.tsx` repete `fintexbpo.lovable.app` (canonical/og) — atualizar para o domínio próprio.
- `robots.txt` está OK.

**Segurança**
- 1 finding: política RLS com `USING (true)` em alguma tabela (provavelmente `lead_submissions` para permitir INSERT anônimo). Vou auditar e, se for um INSERT público legítimo, restringir o `USING/WITH CHECK` para apenas o necessário; se for UPDATE/DELETE aberto, corrigir.

**Build/SPA**
- App roda em rota única `/` com `react-helmet-async` e `react-router`: estável, sem erros pendentes nos últimos commits.

---

### Plano de execução

**1. E-mail transacional para contato@fintexbpo.com.br**
1. Iniciar o setup do domínio de e-mail `fintexbpo.com.br` (subdomínio gerenciado `notify.fintexbpo.com.br`).
   - Vou abrir o diálogo de setup para você adicionar os registros NS no provedor de DNS (Registro.br ou onde o domínio estiver).
2. Após configurar o domínio, rodar `setup_email_infra` (cria filas, tabelas, cron de envio).
3. Rodar `scaffold_transactional_email` (cria a função `send-transactional-email`, página de unsubscribe e template base).
4. Criar template React Email `lead-notification` com o mesmo conteúdo do e-mail atual (Nome, Empresa, contato, faturamento, desafio, complementares), aplicando a identidade Fintex (navy + off-white, Manrope/Inter).
5. Reescrever a edge function `send-lead-email` (ou substituir a chamada no `DiagnosticForm.tsx`) para:
   - Continuar gravando em `lead_submissions`.
   - Invocar `send-transactional-email` com `templateName: "lead-notification"`, destinatário fixo `contato@fintexbpo.com.br`, `idempotencyKey` baseado no `id` do lead, e `templateData` com os campos.
6. Deploy das edge functions atualizadas.
7. Avisar que o e-mail só começa a chegar de verdade quando o DNS verificar (até 72h, geralmente minutos). Até lá, os leads continuam no banco.

**2. SEO — alinhar tudo em https://fintexbpo.com.br**
- `index.html`: trocar `canonical`, `og:url` e `schema.url` de `bpon.lovable.app` para `https://fintexbpo.com.br`.
- `src/pages/Index.tsx` (Helmet): trocar `canonical` e `og:url` para `https://fintexbpo.com.br/`.
- `public/sitemap.xml`: trocar `loc` para `https://fintexbpo.com.br/`.
- `public/robots.txt`: trocar a linha `Sitemap:` para `https://fintexbpo.com.br/sitemap.xml`.
- `public/llms.txt`: revisar referências de URL.

**3. Segurança — RLS**
- Listar tabelas e políticas, identificar a que dispara `RLS Policy Always True`.
- Se for `lead_submissions` com INSERT público (necessário para o formulário anônimo), manter INSERT permitido mas restringir SELECT/UPDATE/DELETE a `service_role` (ou bloquear).
- Marcar o finding como resolvido após o ajuste.

**4. Checagens finais antes de publicar**
- Conferir build sem erros, console limpo, formulário enviando (mock de teste no banco).
- Confirmar que o WhatsApp flutuante e CTAs apontam para o número/anchor corretos.
- Confirmar Open Graph image carregando.
- Recomendar apontar `fintexbpo.com.br` para o Lovable em **Publicar → Domínios** depois do deploy.

---

### Itens técnicos (referência)

```text
arquivos a editar
├─ index.html                              (canonical, og:url, schema.url)
├─ public/sitemap.xml                      (loc)
├─ public/robots.txt                       (Sitemap:)
├─ public/llms.txt                         (URLs)
├─ src/pages/Index.tsx                     (Helmet canonical/og)
├─ src/components/DiagnosticForm.tsx       (invoke send-transactional-email)
└─ supabase/functions/
   ├─ send-lead-email/index.ts             (remover ou simplificar p/ só insert)
   ├─ send-transactional-email/            (novo, via scaffold)
   └─ _shared/transactional-email-templates/
      ├─ registry.ts                       (novo)
      └─ lead-notification.tsx             (novo template branded)
```

---

### O que preciso de você antes ou durante a execução

- Confirmar **onde o domínio fintexbpo.com.br está hospedado** (Registro.br, GoDaddy, Cloudflare etc.) — você vai colar 2 registros NS no painel do provedor quando o diálogo abrir.
- Depois da publicação, **apontar o domínio próprio** em "Publicar → Domínios" no Lovable para que `fintexbpo.com.br` sirva o site (URL canônica que estou planejando).

Se aprovar, sigo nessa ordem: SEO + RLS primeiro (rápido), depois abro o diálogo de setup de domínio de e-mail e, assim que você adicionar os NS, completo o pipeline de e-mail transacional.