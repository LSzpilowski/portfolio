# Portfolio — Łukasz Szpilowski

Personal developer portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Three.js**. Features interactive 3D models, scroll-driven animations, and a dark/light theme.

Live: [lszpilowski.com](https://lszpilowski.com)

---

## Tech Stack

| Category | Package | Version |
|---|---|---|
| Framework | `next` | 16.1.6 |
| UI | `react` / `react-dom` | 19.2.4 |
| Language | `typescript` | 5.9.3 |
| Styling | `tailwindcss` | **3.4.19** |
| Animations | `framer-motion` | 12.34.3 |
| 3D | `@react-three/fiber` | 9.5.0 |
| 3D helpers | `@react-three/drei` | 10.7.7 |
| 3D engine | `three` | 0.183.2 |
| UI primitives | `@radix-ui/*` | various |
| Package manager | `pnpm` | 10.28.0 |

---

## Why Tailwind v3 (not v4)

> **Short answer:** Tailwind v4's PostCSS plugin (`@tailwindcss/postcss`) has a critical incompatibility with Next.js 16's Turbopack that causes an infinite loop — the build worker hangs at 99% CPU and never finishes.

**Root cause:** Tailwind v4 rewrote its engine in Rust (Oxide) and communicates with Turbopack via a separate worker process (`postcss.js`). When the CSS contains `@theme { --color-x: hsl(var(--y)); }`, the engine attempts to statically resolve CSS variable references during compilation. This creates a circular dependency with Turbopack's module graph — the worker spins indefinitely with no output.

`@theme inline {}` is the v4 workaround that skips static resolution, but `@tailwindcss/postcss v4.2.1` + Turbopack still hangs even with `inline`, indicating a deeper bug in the worker IPC layer.

**Tailwind v3** uses a JavaScript-based PostCSS plugin that integrates cleanly with both Turbopack and webpack — no worker process, no hang.

**When to revisit v4:** Once `@tailwindcss/postcss` ships a patch for this Turbopack issue, migration requires:
1. Replace `postcss.config.mjs` plugin: `tailwindcss`+`autoprefixer` → `@tailwindcss/postcss`
2. Replace `globals.css` directives: `@tailwind base/components/utilities` → `@import "tailwindcss"`
3. Move `@layer base { :root }` variables to plain `:root` / `.dark`
4. Replace `tailwind.config.ts` theme colors with `@theme inline {}` in CSS
5. Delete `tailwind.config.ts` entirely

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, JSON-LD, CSP headers
│   ├── page.tsx            # Home page — wires all sections together
│   └── providers.tsx       # ThemeProvider (next-themes)
├── components/
│   ├── about/              # AboutMe, FlipCard, Skills hex grid, Work section
│   ├── background/         # BouncingPattern SVG animation, toggles
│   ├── experience/         # ExperienceSection with scroll-in animations
│   ├── fixed-info/         # Sticky left panel (name, links, MacbookScrollZoom)
│   ├── footer/             # Contact section / footer
│   ├── macbook/            # Three.js scenes: MacbookScrollZoom, VenomModel
│   ├── mode-toggle/        # Dark/light mode switcher
│   ├── projects/           # Horizontal scroll ProjectScroller, cards, Venom CTA
│   ├── quotes/             # Quotes carousel
│   └── ui/                 # shadcn/ui components (button, dialog, slider…)
├── hooks/
│   └── useTilt.ts
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
└── styles/
    └── globals.css         # Tailwind directives + CSS custom properties + utilities
public/
├── 3D/
│   ├── macbook/            # macbook_pro_m3_16_inch_2024.glb
│   └── venom/              # venom_trimmed.glb (14.8 MB, 5 animations)
├── hdr/                    # potsdamer_platz_1k.hdr (local, avoids CSP issues)
└── images/                 # Project covers, OG image, avatar
```

---

## 3D Assets

### MacBook Pro M3
- Model: `macbook_pro_m3_16_inch_2024.glb`
- Used in: sticky left panel via `MacbookScrollZoom`
- Features: hover tilt, HDR environment lighting (local `.hdr` file), screen texture via `useScreenTexture`

### Venom (Marvel Rivals)
- Source: `venom__marvel_rivals.glb` (91 MB — source only, not served)
- Optimised: `venom_trimmed.glb` (14.8 MB) — generated via `scripts/trim-venom.mjs`
- Animations kept: `Idle_C`, `Emote_10355012020`, `103571_Devouring_Appear`, `103541_Shackle`, `103531_Descent_Start`
- Used in: end-of-projects "Back to top" button (`ScrollToTopButton`)

To regenerate `venom_trimmed.glb` from source:
```bash
node scripts/trim-venom.mjs
```

---

## Getting Started

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build
pnpm start
```

> **Node.js:** Use **v22 LTS** (`node@22`). Node v25 was tested and works for dev, but is an unstable/current release — v22 is the recommended LTS.

---

## Security Headers

Configured in `next.config.mjs`:
- `Content-Security-Policy` — restricts scripts, styles, fonts, images, workers
- HDR environment map is served locally (`public/hdr/`) to avoid CSP violations from external CDNs
- `X-Frame-Options: DENY`, `Strict-Transport-Security`, `Permissions-Policy`

