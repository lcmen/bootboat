# Bootboat

[Sailboat UI](https://sailboatui.com/) component styles as reusable CSS classes, similar to how Bootstrap works. Built on Tailwind CSS v4.

Write `class="btn btn-primary"` instead of copying long utility strings from Sailboat UI examples. Same visual design, semantic class names.

## Installation

1. Download `bootboat.css` from the [latest release](https://github.com/lcmen/bootboat/releases/latest)
2. Add it to your Tailwind CSS v4 project:

```css
@import "tailwindcss";
@plugin "@tailwindcss/forms" { strategy: base }
@import "./bootboat.css";
```

**Requirements:** Tailwind CSS v4+ and `@tailwindcss/forms` plugin with `base` strategy.

## Requirements

- Tailwind CSS v4+
- `@tailwindcss/forms` (with `base` strategy — see setup below)
- Alpine.js (only for interactive components: dropdown, modal, tabs)

## Usage

Import after Tailwind in your CSS entry file:

```css
@import "tailwindcss";
@plugin "@tailwindcss/forms" { strategy: base }
@import "./bootboat.css";
```

**Important:** Use `strategy: base` for the forms plugin. This styles form elements globally by tag (`input`, `select`, etc.) without creating `.form-input` classes that would conflict with Bootboat's own form utilities.

Bootboat ships with a default theme (blue primary, slate secondary, Inter font). To customize, override tokens in your own `@theme` block:

```css
@import "tailwindcss";
@plugin "@tailwindcss/forms" { strategy: base }
@import "./bootboat.css";

@theme {
  --color-primary-500: #8b5cf6;  /* purple instead of blue */
}
```

Then use classes in your HTML. Buttons use a base + variant pattern (like Bootstrap):

```html
<button class="btn btn-primary btn-lg">Get Started</button>
<div class="card-md"><div class="card-body">Content</div></div>
<input class="form-input" placeholder="Email">
<span class="badge-success">Active</span>
<div class="alert-danger">Something went wrong.</div>
```

## Components

| Component    | Classes |
|-------------|---------|
| Typography  | `.h1`–`.h6`, `.h1-light`–`.h3-light`, `.text-body`, `.text-body-lg`, `.text-body-xs`, `.text-muted`, `.text-lead` |
| Links       | `.link`, `.link-sm`, `.link-xs`, `.link-danger` |
| Buttons     | `.btn` + `.btn-primary`, `-secondary`, `-danger`, `-warning`, `-success`, `-info`, `-dark`, `-ghost`, `-glass`, `-white` + `.btn-sm`, `.btn-lg`, `.btn-full` |
| Icon Buttons| `.btn-icon` + `.btn-icon-primary`, `.btn-icon-secondary` |
| Button Group| `.btn-group`, `.btn-group-item`, `.btn-group-item-active`, `.btn-group-label` |
| Forms       | `.form-input`, `.form-input-error`, `.form-select`, `.form-checkbox`, `.form-radio`, `.form-textarea`, `.form-textarea-error`, `.form-file`, `.form-file-dropzone`, `.form-toggle`, `.form-toggle-track`, `.form-toggle-track-sm`, `.form-toggle-track-lg`, `.form-label`, `.form-label-required`, `.form-help`, `.form-error`, `.form-group`, `.form-row`, `.form-addon`, `.form-addon-left`, `.form-addon-right`, `.has-addon-left`, `.has-addon-right` |
| Cards       | `.card`, `.card-body`, `.card-sm`, `.card-md`, `.card-lg` |
| Accordion   | `.accordion`, `.accordion-bordered`, `.accordion-item`, `.accordion-trigger`, `.accordion-panel`, `.accordion-icon` |
| Navbar      | `.navbar`, `.navbar-inner`, `.navbar-brand`, `.navbar-brand-icon`, `.navbar-actions` |
| Dropdown    | `.dropdown`, `.dropdown-trigger`, `.dropdown-panel`, `.dropdown-panel-left`, `.dropdown-panel-right`, `.dropdown-panel-wide`, `.dropdown-section`, `.dropdown-item`, `.dropdown-item-danger`, `.dropdown-item-icon` |
| Modal       | `.modal`, `.modal-lg`, `.modal-xl`, `.modal-overlay`, `.modal-wrapper`, `.modal-body`, `.modal-close`, `.modal-footer` |
| Alerts      | `.alert-info`, `.alert-success`, `.alert-warning`, `.alert-danger`, `.alert-icon` |
| Badges      | `.badge-primary`, `-success`, `-warning`, `-danger`, `-info`, `-gray`, `-dark` + `.badge-square`, `.badge-lg`, `.badge-dot` |
| Tables      | `.table-base`, `.table-wrapper`, `.table-head`, `.table-th`, `.table-body`, `.table-td`, `.table-th-row`, `.table-striped`, `.table-hover` |
| Tabs        | `.tab-list`, `.tab-list-inner`, `.tab-item`, `.tab-item-active`, `.tab-panel`, `.tab-badge` |
| Breadcrumb  | `.breadcrumb`, `.breadcrumb-bg`, `.breadcrumb-item`, `.breadcrumb-separator`, `.breadcrumb-current` |
| List        | `.list-icon`, `.list-icon-item`, `.list-icon-marker`, `.list-bordered`, `.list-bordered-item` |
| Media Object| `.media`, `.media-center`, `.media-bottom`, `.media-img`, `.media-img-lg`, `.media-body` |
| Pagination  | `.pagination`, `.pagination-item`, `.pagination-item-active`, `.pagination-prev`, `.pagination-next`, `.pagination-icon` |
| Dividers    | `.divider`, `.divider-text`, `.divider-line` |
| Utilities   | `.page-shell`, `.center-page`, `.flex-between` |
| Borders     | `.border-primary`, `-secondary`, `-danger`, `-warning`, `-success`, `-info`, `-dark`, `-light`, `-muted` |

## Customization

All `@utility` classes use `:where()` for zero specificity — override anything with standard Tailwind utilities:

```html
<button class="btn btn-primary rounded-full px-8">Pill Button</button>
```

## Theme Tokens

Defaults are built in. Override any of these in your `@theme`:

- `--color-primary-{50..900}` (default: blue)
- `--color-secondary-{50..900}` (default: slate)
- `--font-sans` (default: Inter)

## Credits

Visual design based on [Sailboat UI](https://sailboatui.com/) by [Jeremie Carlson](https://github.com/nickcarlson).

## License

[MIT](LICENSE)
