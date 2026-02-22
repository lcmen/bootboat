# Agents

## Project Overview

Bootboat is a semantic CSS component library built on Tailwind CSS v4. It provides Bootstrap-like class names (`.btn-primary`, `.form-input`, `.card`) using Tailwind's `@utility` directive.

## Key Files

- `bootboat.css` — The library. Single source of truth for all component classes and theme tokens. Uses `@utility` with `:where()` for zero specificity.
- `reference/index.html` — Visual showcase of all components. Links to compiled CSS at `reference/dist/index.css`.
- `reference/index.css` — Tailwind v4 input file. Imports tailwindcss, @tailwindcss/forms plugin, and bootboat.css. Also contains reference-page-only helper classes.
- `package.json` — Build scripts: `npm run build` (production), `npm run dev` (watch + serve).

## Architecture

- All component styles live in `bootboat.css` using `@utility name { :where(&) { @apply ...; } }` pattern.
- Theme colors (primary, secondary) and font are defined in `@theme {}` block in `bootboat.css`.
- The reference page does NOT duplicate any bootboat styles — it imports them via the build.
- Interactive components (dropdown, modal, tabs) use Alpine.js for state.

## Build

```
npm run build    # Compile CSS (Tailwind CLI)
npm run dev      # Watch mode
npm run serve    # Local HTTP server on port 3000
```

## Conventions

- Naming: `.component`, `.component-variant`, `.component-sm` / `.component-lg`
- All utilities use `:where()` wrapper for zero specificity so Tailwind utilities can override them.
- Use `@variant` for pseudo-class variants (hover, focus, disabled).
- Do not add styles to `reference/index.html` inline — put reference-page helpers in `reference/index.css`, library styles in `bootboat.css`.

## Deployment

GitHub Pages via GitHub Actions (`.github/workflows/pages.yml`). Builds CSS and deploys the repo root on push to `main`.
