# Agents

Bootboat is a semantic CSS component library built on Tailwind CSS v4. It uses Bootstrap-like class names and visual design from [Sailboat UI](https://sailboatui.com/).

## Key files

- `bootboat.css`: Source for all component classes and theme tokens.
- `website/content/*.html`: Component examples and the overview page.
- `website/layouts/layout.html`: Shared ERB layout.
- `website/layouts/nav.html`: Sidebar navigation.
- `website/assets/index.css`: Tailwind input, library imports, and website helpers.
- `website/nanoc.yaml`: Nanoc configuration, `dist/` output, and production link prefix.
- `website/Rules`: Compilation and routing rules.
- `website/lib/helpers.rb`: URL and active navigation helpers.
- `mise.toml`: Node.js 26 and Ruby 4.1 versions.
- `package.json` and `package-lock.json`: Build scripts, Node.js requirement, and npm dependencies.
- `Gemfile` and `Gemfile.lock`: Nanoc and preview server dependencies.
- `dist/`: Generated website output.

## Conventions

- Keep component styles in `bootboat.css`. Use `@utility name { :where(&) { @apply ...; } }` for zero specificity so Tailwind utilities can override them.
- Use `.component` for base classes, `.component-variant` for variants, and `.component-sm` or `.component-lg` for sizes.
- Use `@variant` for hover, focus, and disabled states.
- Keep website helpers in `website/assets/index.css`. Import library styles through the build.
- Do not add inline styles to HTML files.
- Use Alpine.js directives for interactive examples. Component examples are in `website/content/`; class definitions are in `bootboat.css`.
- Use `strategy: base` for `@tailwindcss/forms` to prevent conflicts with Bootboat form classes.
- Define default theme tokens in the `bootboat.css` `@theme` block: `--color-primary-{50..900}` (blue), `--color-secondary-{50..900}` (slate), and `--font-sans` (Inter).

## Setup and checks

Install tools with `mise install`, then dependencies with `npm ci` and `bundle install`.

| Command | Purpose |
|---------|---------|
| `npm run build` | Clean and build CSS and the website |
| `npm run build:css` | Compile CSS with Tailwind CLI |
| `npm run build:site` | Compile pages with Nanoc |
| `npm run dev` | Watch CSS and serve pages at <http://localhost:8082/> |
| `npm run watch:css` | Watch CSS changes |
| `npm run watch:site` | Serve pages and rebuild on source changes |
| `npm run clean` | Remove `dist/` |

Run the smallest relevant build after a change. Use `NANOC_ENV=production npm run build` to check links with the `/bootboat` prefix.

## Deployment

`.github/workflows/pages.yml` builds with Node.js 26 and Ruby 4.1 on pushes to `main` or manual dispatch. It runs `NANOC_ENV=production npm run build` and deploys `dist/` to GitHub Pages.

`.github/workflows/release.yml` creates a tag and publishes `bootboat.css` on manual dispatch.
