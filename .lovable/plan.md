
## Full picture of the current site

The site has a solid technical foundation: good design system in `index.css`, well-structured components, proper scroll reveal hook. The core problems are:

1. **Hero** — Copy is poetic ("Financeiro estruturado. Empresa no controle.") but not commercial. No value proposition, no ICP signal, no concrete deliverables visible.
2. **ServicesSection** — Flat 6-card commodity list. No grouping by perceived value. Looks like any bookkeeping firm.
3. **HumanSection** — Too inspirational, not operational. Feels like a brand manifesto, not a service description.
4. **AuthoritySection** — Has a placeholder ("Espaço para depoimentos e prova social") still visible. No real proof.
5. **No cases/proof section** — Completely missing. Zero social proof.
6. **FAQ** — Only 6 questions, missing key commercial objections about onboarding, size fit, and operational detail.
7. **DiagnosticForm** — 11 fields in one go: too heavy for cold traffic. High abandonment risk.
8. **Page order** — Currently: Hero → Pain → Services → Method → Human → Authority → FAQ → CTA. Missing Cases section. No "For Whom" section visible in Index.
9. **Header** — Topbar disappears on scroll (it's outside sticky header). Scroll behavior is minimal.
10. **SEO** — `index.html` has no meta description, no OG tags.

---

## Files to create
- `src/components/CasesSection.tsx` — new mini-cases/proof section
- `src/components/ForWhomSection.tsx` — re-add (currently excluded from Index)

## Files to edit

| File | What changes |
|------|-------------|
| `index.html` | SEO: title, meta description, OG tags, Twitter card |
| `src/pages/Index.tsx` | Add CasesSection + ForWhomSection to page order |
| `src/index.css` | Stronger shadow-elevated, add scroll-progress utility |
| `src/components/Header.tsx` | Scroll-shrink behavior (h-16 → h-13 on scroll), topbar hides on scroll |
| `src/components/HeroSection.tsx` | Rewrite copy: clear value prop + ICP + 3 concrete deliverable chips + stronger CTAs |
| `src/components/ServicesSection.tsx` | Reorganize into 3 grouped blocks (Estruturação / Operação / Gestão) instead of commodity 6-card grid |
| `src/components/HumanSection.tsx` | Rewrite to focus on operational partnership, not inspiration. Add concrete working model details |
| `src/components/AuthoritySection.tsx` | Remove placeholder text, add 4 proof stats (mini-metrics), improve credibility copy |
| `src/components/CasesSection.tsx` | 3 mini-cases: situation → action → outcome. Elegant, institutional, not fake testimonials |
| `src/components/FAQSection.tsx` | Expand to 8 questions, more commercial/objection-killing answers |
| `src/components/DiagnosticForm.tsx` | Slim to 6 essential fields (nome, empresa, whatsapp, email, faturamento, desafio). Optional fields collapsible |
| `src/components/CTASection.tsx` | Stronger commercial CTA copy, softer urgency |
| `src/components/ForWhomSection.tsx` | Rebuild with ICP description + discrete commercial filter |

---

## Detailed changes

### `index.html`
Add inside `<head>`:
- `<title>BPOn | BPO Financeiro com Leitura Gerencial | Grupo Ubercentral</title>`
- `<meta name="description" content="A BPOn terceiriza o financeiro da sua empresa com processo, rotina, controles e acompanhamento gerencial. Empresa do Grupo Ubercentral, desde 2002.">`
- Open Graph: title, description, image, url, type
- Twitter card tags
- `<link rel="canonical">`

### `Header.tsx`
- Topbar becomes part of the sticky header but fades out/hides after ~80px scroll (currently the topbar is outside the sticky element, so it always scrolls away abruptly)
- After scrolling: header height reduces from `h-[68px]` to `h-[56px]` smoothly via transition
- Add `scrolled` check to topbar: `opacity-0 max-h-0 overflow-hidden` when scrolled
- Logo size also reduces slightly on scroll (from `height={34}` to `height={28}`)
- Nav links gain slightly stronger `text-headline` color on scroll for contrast on white

### `HeroSection.tsx`
Complete copy rewrite. Keep the visual (full-bleed dark, ken-burns). Change:

**Current H1:** "Financeiro estruturado. Empresa no controle."
**New H1:** "Financeiro terceirizado. Operação com método. Decisão com clareza."

Add an eyebrow descriptor that names the service explicitly.

Add a subheadline that qualifies the ICP:
> "Para empresas que já operam e precisam organizar o financeiro, criar previsibilidade e ter uma base gerencial confiável para decidir."

Add a horizontal chips row of 4 concrete deliverables:
- Contas a pagar e receber
- Fluxo de caixa
- Fechamento gerencial  
- Indicadores financeiros

Keep both CTAs. Make secondary CTA "Como funciona" cleaner.

Proof row: change from abstract metrics to more concrete signals:
- "Grupo Ubercentral desde 2002"
- "Operação financeira recorrente"
- "Leitura gerencial mensal"

### `ServicesSection.tsx`
Transform from flat 6-card grid into 3 grouped service blocks:

**Block A — Estruturação da rotina financeira**
- Organização de processos e controles
- Definição de cadência e responsabilidades
- Estruturação do fluxo de informações

**Block B — Operação financeira recorrente**
- Contas a pagar e receber
- Conciliação financeira
- Acompanhamento de caixa e cobrança

**Block C — Gestão e leitura executiva**
- Fechamento gerencial mensal
- Indicadores financeiros
- Apoio à tomada de decisão

Each block has: a numbered label, a group title, a short description of the "why this matters", and 3 bullet sub-items.

This transforms the section from "list of tasks" to "structured service proposition."

### `HumanSection.tsx`
Rewrite focus: operational working model, not inspiration.

New angle: describe HOW the relationship works day-to-day:
- Ponto de contato definido
- Agenda financeira recorrente
- Acompanhamento com a liderança
- Integração com contabilidade e operação

Remove the inspirational quote-style. Replace with a concrete description of the work relationship: "Você tem acesso à equipe, não a um sistema. A BPOn mantém a rotina ativa e apresenta os resultados diretamente para quem decide."

Keep the editorial photo background.

### `ForWhomSection.tsx`  
Rebuild as a clear ICP section with 4 business profiles:
1. Empresa em crescimento com financeiro desorganizado
2. Gestão que precisa de previsibilidade e caixa legível
3. Operação que depende de uma única pessoa no financeiro
4. Empresa com ERP ou planilha mas sem processo real

Add the elegant commercial filter: "A BPOn opera melhor quando existe empresa real, volume financeiro real e necessidade concreta de organização e acompanhamento."

### `AuthoritySection.tsx`
- Remove the dashed-border placeholder text completely
- Add 4 mini-metric cards: `+20 anos`, `Grupo Ubercentral`, `Base contábil integrada`, `Atuação consultiva`
- Make institutional copy more concrete: name Uberlândia, name the accounting background
- Add a structured credibility strip at bottom with: CRC number, CNPJ, founding year

### `CasesSection.tsx` (NEW)
3 mini-case cards. Clean, institutional, no fake quotes. Structure:

```
[Icon] Empresa de serviços
Situação: Financeiro operado em planilhas por uma única pessoa, sem fechamento mensal.
Ajuste: Estruturação da rotina, implantação de controles e fechamento gerencial mensal.
Resultado: Visibilidade de caixa, rotina previsível e leitura mensal para decisão.
```

Three cases: Serviços / Clínica de saúde / Empresa comercial

Section header: "Situações reais que a BPOn resolve."

### `FAQSection.tsx`
Expand to 8 questions. Add:
- "Vocês atendem empresas do meu porte?"
- "Como funciona a implantação na prática?"
- "Vocês trabalham com o sistema que já uso?"

Rewrite existing answers to be more commercially direct and less neutral.

### `DiagnosticForm.tsx`
Reduce from 11+ fields to 6 essential fields:
- Nome *
- Empresa *
- WhatsApp *
- E-mail *
- Faixa de faturamento *
- Principal desafio (textarea) *

Remove: cidade/UF, segmento, pessoas no financeiro, ferramenta, mensagem complementar from the first step.

Add a subtle "+ Adicionar informações complementares" accordion below — expands to show segment, city, tool fields for those who want to qualify further.

This reduces perceived friction significantly.

### `CTASection.tsx`
New headline: "Se o financeiro da empresa pede mais organização, o diagnóstico é o ponto de partida."

New subtext: "Não é uma proposta comercial imediata. É uma leitura técnica da operação atual — para entender onde estão os gargalos e o que precisa ser estruturado."

Make the checklist items more specific and reassuring.

### `Index.tsx` — Final page order
```
Header
HeroSection
PainPointsSection
ServicesSection
MethodSection
ForWhomSection   ← re-added
HumanSection
AuthoritySection
CasesSection     ← new
FAQSection
CTASection
Footer
WhatsAppButton
```

---

## What is NOT changing
- The design system (colors, fonts, shadows) — already solid
- The visual identity (dark hero, alternating sections, blue accents)
- `BPOnLogo.tsx`, `Footer.tsx`, `MethodSection.tsx` — already well-built
- `WhatsAppButton.tsx` — fine as-is
- `useScrollReveal.ts` hook — working correctly
- Animation system in `index.css` — no changes needed
