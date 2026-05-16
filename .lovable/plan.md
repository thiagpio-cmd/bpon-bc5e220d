## Rebrand completo: BPOn → Fintex BPO

Transformar o site atual em uma landing page premium, enxuta e focada em conversão, com nova identidade visual e marca **Fintex BPO**.

### 1. Identidade visual (design system)

Atualizar `src/index.css` e `tailwind.config.ts` com a nova paleta em HSL:
- Preto profundo `#0B0D0D` — background principal
- Branco gelo `#F5F7FA` — surface clara
- Azul elétrico `#1677FF` — primary / CTA
- Grafite `#1A1D23` — surfaces escuras
- Azul petróleo `#0F2A3A` — accent escuro
- Cinza neutro `#E6EBE8` — divider / muted

Tipografia: **Satoshi** (títulos, via Fontshare) + **Inter** (corpo). Carregar via `<link>` no `index.html`.

Elemento visual proprietário: símbolo **X** (SVG inline) usado discretamente como fundo do hero e detalhe nos cards, em baixa opacidade.

### 2. Estrutura da landing page (10 seções)

Reescrever `src/pages/Index.tsx` para conter apenas:

```
Header  →  Hero  →  Problema  →  Solução  →  Serviços
       →  Como funciona  →  Para quem  →  CTA final + Form
       →  FAQ (3 perguntas)  →  Footer
```

Componentes a recriar/substituir (manter nomes ou trocar conforme conveniência):
- `Header.tsx` — fixo escuro, logo Fintex à esquerda, links + botão "Solicitar diagnóstico"
- `HeroSection.tsx` — H1, sub, 2 CTAs, microcopy, indicadores; X grande de fundo
- `ProblemSection.tsx` (novo) — 5 cards curtos de dores
- `SolutionSection.tsx` (novo) — 3 cards principais
- `ServicesSection.tsx` — grid 4 colunas com 8 itens, sem textos longos
- `MethodSection.tsx` — 4 etapas numeradas (timeline)
- `ForWhomSection.tsx` — critérios de ICP
- `CTASection.tsx` + `DiagnosticForm.tsx` — formulário com novos campos/opções e nova mensagem de confirmação
- `FAQSection.tsx` — apenas 3 perguntas
- `Footer.tsx` — logo, tagline, links curtos, copyright Fintex

Componentes a **remover** da árvore (não deletar arquivos necessariamente, só não importar): `TrustBar`, `PainPointsSection` (substituído), `HumanSection`, `AuthoritySection`, `CasesSection`, `BeforeAfterSection`, `CFOVisionSection`, `InstagramSection`, `PositioningSection`, `TeamSection`, `WhatsAppButton` (manter ou remover — remover para enxugar).

### 3. Logo e favicon

Como não há arquivos da nova marca enviados, gerar via `imagegen`:
- `src/assets/logo-fintex.png` — wordmark "fintex bpo" branco para header/footer
- `public/favicon.png` — símbolo X em azul elétrico sobre fundo escuro
- Atualizar `BPOnLogo.tsx` → `FintexLogo.tsx` (ou reusar arquivo, trocando asset)
- Atualizar `<link rel="icon">` no `index.html` e remover `favicon.ico` antigo

### 4. SEO

Atualizar `index.html`:
- `<title>`: "Fintex BPO | BPO Financeiro para Empresas"
- `<meta name="description">`: conforme briefing
- `<link rel="canonical">`: https://bpon.lovable.app/ (manter domínio atual)
- OG tags e JSON-LD Organization com nome "Fintex BPO"
- H1 único na hero conforme briefing

### 5. Formulário de diagnóstico

Atualizar `DiagnosticForm.tsx`:
- Campos: Nome, Empresa, WhatsApp, E-mail, Faturamento (select com 5 faixas novas), Principal desafio, Mensagem
- Mensagem de sucesso conforme briefing
- Manter integração com edge function `send-lead-email` (apenas atualizar copy "Fintex BPO" nos e-mails)

### 6. Conteúdo

Aplicar todos os textos exatos do briefing nas respectivas seções. Tom: direto, consultivo, premium. Tagline "Menos ruído. Mais lógica financeira." no hero (secundário) e footer.

### Detalhes técnicos

- Manter React + Vite + Tailwind + shadcn — nenhuma mudança de stack.
- Tokens semânticos no `index.css`; nenhum hex hardcoded em componentes.
- Responsivo mobile-first; CTA visível acima da dobra no mobile.
- Edge function `supabase/functions/send-lead-email/index.ts`: atualizar assunto e remetente para "Fintex BPO" (manter envio para `comercial@bpon.com.br` salvo orientação contrária).
- Sobre "Resete toda a parte de DNS": DNS é gerenciado fora do código (painel do Lovable + KingHost). Não há nada a alterar no repositório para isso — orientarei separadamente caso queira refazer a configuração no painel.

### Não-objetivos

- Não criar páginas extras.
- Não preservar seções antigas (TrustBar, Cases, Authority, Human, Team, etc.).
- Não alterar stack, roteamento ou backend além do copy do e-mail.
