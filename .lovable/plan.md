## Rebuild visual: Brutalismo Estrutural

Aplicar a direção escolhida (v3) em toda a landing — não só no hero. Manter copy, marca, formulário e backend; trocar a linguagem visual.

### Princípios da nova linguagem

- **Grid 12 colunas visível**: bordas finas `#1677FF/20` formando malhas (sem cards macios).
- **X estrutural**: duas linhas diagonais finas atravessando o viewport como ossatura, não decoração.
- **Tipografia editorial extrema**: Space Grotesk display (até 8xl/9xl), Inter body. Italic azul em palavras-chave.
- **Numeração executiva**: cada bloco prefixado `01 /`, `02 /`...
- **Marquee de fundo**: "FINTEX FINTEX FINTEX" em 20vw com opacity 0.03 como textura.
- **Pílulas de label** sólidas em `#1677FF` (`BPO FINANCEIRO`, `MÉTODO`, etc.).
- **Hover states geométricos**: preenchimento azul 5%, sem sombras/blur.
- **Floating X** fixo no canto inferior direito como assinatura.
- **Barra azul** de 1px no rodapé absoluto.

### Mudanças por arquivo

**`src/index.css`**
- Adicionar fonte `Space Grotesk` (300/400/700) via `@import`, manter Inter.
- Trocar `font-display` para Space Grotesk + Inter 900 como fallback de impacto.
- Substituir `.shadow-card`/`shadow-blue` por utilidades novas: `.edge-grid` (border `#1677FF/20`), `.x-cross` (pseudo-elementos com as 2 diagonais), `.marquee-bg`.
- Remover `.x-bg` antigo e `card-hover` macio; criar `.brutal-hover` (apenas background tint).

**`tailwind.config.ts`**
- Adicionar `fontFamily.display: ["Space Grotesk", ...]`.
- Adicionar cor utilitária `electric` = primary alias para legibilidade do código.

**`src/components/Header.tsx`**
- Substituir por barra superior com meta-info: à esquerda `FINTEX BPO © 2026 / FINANCIAL INTELLIGENCE UNIT`, à direita nav uppercase tracking-widest com numeração `01 / Serviços`, etc. Borda inferior azul/20. Sem sombra ao rolar — só inverte cor de fundo.

**`src/components/HeroSection.tsx`**
- Reescrever com layout 12-col + diagonais X + marquee textual de fundo.
- Pílula sólida azul "BPO FINANCEIRO".
- H1 editorial preservando copy oficial: "BPO Financeiro para empresas que precisam de **rotina, caixa e** *previsibilidade*." — última palavra em italic azul.
- CTA primário com hover expandindo a seta; CTA secundário fantasma com borda.
- Linha de tag "// Escale sem fricção".

**`src/components/ProblemSection.tsx`** e demais seções (`Solution`, `Services`, `Method`, `ForWhom`, `FAQ`)
- Padrão único: header de seção com `00 / TÍTULO` em uppercase + linha azul + headline editorial gigante.
- Conteúdo em grid com bordas (sem cards arredondados). Cada célula numerada `01`, `02`...
- Remover `bg-surface rounded-lg`; usar `border border-[#1677FF]/20` + hover `bg-[#1677FF]/5`.
- `MethodSection`: 4 etapas em fila horizontal full-bleed, numeração massiva (text-7xl) à esquerda de cada passo.
- `ServicesSection`: grid 4 colunas com bordas conectadas (sem gap), número grande no topo.

**`src/components/CTASection.tsx`**
- Headline editorial em coluna esquerda + form em coluna direita dentro de borda azul fina (sem card branco arredondado). Manter `DiagnosticForm` intacto.
- Trocar fundo para `#0B0D0D` puro com X estrutural.

**`src/components/FAQSection.tsx`**
- Lista vertical sem accordion macio: bordas top/bottom azul/20, número à esquerda, pergunta editorial, resposta em coluna recuada.

**`src/components/Footer.tsx`**
- Layout brutalista: grid 12-col com meta "FINTEX BPO © 2026" + nav + barra azul 1px no fundo + floating X marker.

**Novo componente `src/components/FloatingXMark.tsx`**
- Fixed bottom-right, duas linhas SVG cruzadas, hover passa pra azul. Renderizado uma vez em `Index.tsx`.

**`src/components/DiagnosticForm.tsx`**
- Apenas restyling: inputs sem border-radius (rounded-none), borda fina azul/30, foco azul sólido, label uppercase tracking-widest. Lógica intacta.

### Fora de escopo
- Sem mudanças no `supabase/functions/send-lead-email`, schema, edge functions, roteamento, SEO ou DNS.
- Sem alteração de copy oficial além das pílulas/labels brutalistas adicionadas.
- Sem mudança na logo nem na paleta — apenas peso visual.

### Resultado esperado
Landing com identidade editorial-brutalista forte, grid azul visível, tipografia massiva, zero "cards confortáveis", mantendo legibilidade B2B e o formulário convertendo igual.
