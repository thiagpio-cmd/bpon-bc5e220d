
## What needs fixing

After reading every component, I've identified the core problems:

**1. Logo** — Header and Footer use a hand-drawn SVG "BPOnLogo" component with just text and a tiny icon. The new uploaded logo (`LOGOTIPO_BPON-3.png`) — a professional full lockup with the geometric icon + "bpon" wordmark + "CONSULTORIA FINANCEIRA" tagline — must replace it everywhere.

**2. Colors are muddy and lifeless** — The CSS variables are defined correctly, but many components override them inline with raw HSL values that create inconsistency. Key issues:
- `--background: 220 25% 96%` produces a grayish-blue tint; needs to be a true off-white `#F6F8FC`
- `--headline: 218 70% 11%` is close but not quite the deep navy `#0F2747`
- `--body: 220 18% 44%` is too gray/flat; needs a colder, more distinguished slate
- `--surface-tint: 221 100% 97%` is okay but inconsistently applied
- `--deep` background sections reuse `--headline` color creating no contrast hierarchy
- `gradient-cta` class is used in CTASection but never defined in index.css — it renders as white with no gradient
- `gradient-section-tint` is too weak — barely visible
- `shadow-card` and `shadow-elevated` are too soft — cards look flat

**3. Human images are completely absent** — HumanSection, TeamSection, AuthoritySection, ForWhomSection all have placeholder colored boxes or abstract cards. Need real Unsplash editorial photography embedded directly.

**4. Animation issues** — `animate-float-slow` is used in HeroSection but never defined. The hero card has no float animation currently.

**5. Section rhythm is flat** — All sections use `bg-surface`, `bg-background`, or `bg-deep` without enough visual distinction. Needs better alternation: white → off-white → deep blue → white.

**6. CTASection** uses `gradient-cta` which is undefined → renders as plain surface with no visual presence.

**7. Cards feel template-generic** — Low border contrast, identical padding, no accent hierarchy between card types.

---

## The Plan

### Step 1 — Copy & import the new logo asset
Copy `user-uploads://LOGOTIPO_BPON-3.png` → `src/assets/logo-bpon.png`

### Step 2 — Rebuild `BPOnLogo.tsx`
Replace the SVG hand-drawn mark with the actual PNG logo using an `<img>` tag. Create two variants:
- Default: full logo for header/footer (light backgrounds)
- Invert: white version for dark backgrounds

### Step 3 — Update `Header.tsx` and `Footer.tsx`
Replace `<BPOnLogo />` text component usage to use the new image-based component. Header: logo at full color. Footer: logo rendered at proper size.

### Step 4 — Fix `index.css` (color system overhaul)
Update CSS variables to true brand values:
```
--background: 214 32% 97%      → #F4F7FC (true BPOn off-white)
--surface: 0 0% 100%           → #FFFFFF (stays)
--surface-tint: 213 100% 97%   → #EAF2FF (richer tint)
--headline: 218 82% 10%        → #0C1E3C (richer deep navy)
--body: 215 20% 40%            → #546174 (colder, more distinguished)
--divider: 213 25% 88%         → #D4DDE9 (slightly cooler border)
--deep: 218 82% 10%            → true deep navy matching headline
```

Add missing utilities:
- `gradient-cta` — dark navy with subtle blue overlay
- `animate-float-slow` keyframe reference
- Stronger `shadow-elevated` with more presence
- `shadow-primary-lg` for CTA button glow

### Step 5 — Add human photography throughout
Using high-quality Unsplash editorial photos embedded via URL in 4 key places:

1. **HumanSection** (left visual block) — Replace abstract gradient card with a real editorial photo of a business professional/executive meeting: `https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80` (executive discussion)
2. **TeamSection** (right column dark card) — Add a professional portrait or team: `https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=600&q=80` (professional woman)
3. **ForWhomSection** (left column) — Replace the quote block with a real executive/business photo: `https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80`
4. **AuthoritySection** — Add a real office/team context image alongside the institutional proof

### Step 6 — Fix CTASection
Define and apply `gradient-cta` properly — deep navy to slightly lighter navy with a blue radial accent on the right side. Make this section feel premium, not plain.

### Step 7 — Elevate card and section visual weight
- ServicesSection cards: add a thin left-border accent in primary color on hover, stronger icon backgrounds
- BeforeAfterSection: give the "Before" column a warmer gray, the "After" column a more visible blue tint
- PainPointsSection (deep background): increase the contrast of cards
- MethodSection steps: make the left number bar wider and richer

### Step 8 — Fix HeroSection floating card animation
Add `animate-float-slow` to the floating badge. Make the hero right panel more alive with a subtle top border accent.

---

## Files to edit

| File | Changes |
|------|---------|
| `src/assets/logo-bpon.png` | Copy new logo |
| `src/components/BPOnLogo.tsx` | Use PNG image instead of SVG |
| `src/components/Header.tsx` | Use new BPOnLogo |
| `src/components/Footer.tsx` | Use new BPOnLogo |
| `src/index.css` | Color tokens, missing utilities, gradient-cta |
| `src/components/HumanSection.tsx` | Add Unsplash editorial photo |
| `src/components/TeamSection.tsx` | Add professional photo |
| `src/components/ForWhomSection.tsx` | Add person photo in left column |
| `src/components/AuthoritySection.tsx` | Add office photo |
| `src/components/CTASection.tsx` | Fix gradient, make section premium |
| `src/components/ServicesSection.tsx` | Card accent improvements |
| `src/components/BeforeAfterSection.tsx` | More visual contrast |
| `src/components/HeroSection.tsx` | Fix float animation, improve right panel |
