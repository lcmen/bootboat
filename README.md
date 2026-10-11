# Bootboat

Bootboat provides reusable CSS component classes for Tailwind CSS v4, with visual design from [Sailboat UI](https://sailboatui.com/).

## Installation

Download `bootboat.css` from the [latest release](https://github.com/lcmen/bootboat/releases/latest). Install Tailwind CSS v4 and `@tailwindcss/forms`, then add these imports to your CSS entry file:

```css
@import "tailwindcss";
@plugin "@tailwindcss/forms" { strategy: base }
@import "./bootboat.css";
```

Use `strategy: base` to prevent conflicts with Bootboat form classes.

## Usage

```html
<button class="btn btn-primary btn-lg">Get Started</button>
<div class="card-md"><div class="card-body">Content</div></div>
<input class="form-input" placeholder="Email">
<span class="badge-success">Active</span>
```

See [component pages](website/content/) for examples. Interactive examples use Alpine.js.

## Customization

Component utilities use `:where()` for zero specificity. Use Tailwind utilities to override them:

```html
<button class="btn btn-primary rounded-full px-8">Pill Button</button>
```

Override theme tokens in an `@theme` block after the imports. Defaults are blue (`--color-primary-{50..900}`), slate (`--color-secondary-{50..900}`), and Inter (`--font-sans`).

```css
@theme {
  --color-primary-500: #8b5cf6;
}
```

## Website development

Use Node.js 26 and Ruby 4.0.7, as set in `mise.toml`:

```sh
mise install
npm ci
bundle install
npm run dev
```

Open <http://localhost:8082/>. Nanoc rebuilds pages and Tailwind watches CSS and HTML files.

Run `npm run build` to build the website in `dist/`. For GitHub Pages, use `NANOC_ENV=production npm run build` to add the `/bootboat/` link prefix.

## Credits and license

Visual design by [Jeremie Carlson](https://github.com/nickcarlson), from [Sailboat UI](https://sailboatui.com/). Licensed under [MIT](LICENSE).
