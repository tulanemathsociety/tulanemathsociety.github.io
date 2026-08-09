# Tulane Math Club

The official website of the Tulane Math Club.

[tulanemathsociety.github.io](https://tulanemathsociety.github.io/)

Built with [Jekyll](https://jekyllrb.com/) and the
[al-folio](https://github.com/alshedivat/al-folio) theme (v1.1), deployed to GitHub Pages.

## Editing content

No Ruby needed for routine content changes. Everything is Markdown with YAML front matter.

| What | Where |
| :--- | :--- |
| Homepage | `_pages/about.md` |
| Officers | `_pages/officers.md` |
| Resources | `_pages/resources.md` |
| Events | `_pages/events.md` |
| Weekly puzzles | `_posts/YYYY-MM-DD-slug.md` |
| Short announcements on the homepage | `_news/` |
| Site title, description, feature flags | `_config.yml` |
| Contact and social links | `_data/socials.yml` |
| Tulane colors and fonts | `_sass/_tulane.scss` |

Navbar order comes from each page's `nav_order` front matter, not from a central list.

## Running locally

al-folio v1.x needs Ruby, and the CI build pins 3.3.5.

```bash
brew install ruby@3.3 imagemagick
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
gem install bundler
bundle install
bundle exec jekyll serve
```

The site is then at <http://localhost:4000>. `imagemagick` is what generates the responsive
WebP variants; without `convert` on your PATH the build still succeeds but silently skips them.

Docker is the alternative if the native install gives trouble:

```bash
docker compose pull && docker compose up   # http://localhost:8080
```

## Deployment

`.github/workflows/deploy.yml` builds the site on every push to `main` and pushes the result to
the `gh-pages` branch via `JamesIves/github-pages-deploy-action`. GitHub Pages then serves
`gh-pages`.

Two repository settings this depends on:

1. Settings, Actions, General, Workflow permissions: **Read and write permissions**. Without it
   the deploy step cannot push `gh-pages`.
2. Settings, Pages, Build and deployment: Source **Deploy from a branch**, branch **`gh-pages`**.
   If this is left pointing at `main`, GitHub runs its own sandboxed Jekyll over the source and
   the build fails on the theme's custom tags.

Do not commit to `gh-pages` by hand; the workflow owns it.

## Theme overrides

al-folio v1.x keeps its layouts, includes, and Sass inside gems, so there is no `_layouts/` or
`_includes/` here by default. A local file at the same path shadows the gem's copy. Two such
overrides currently exist:

- `assets/css/main.scss`, a copy of the gem's file with one added `@use "tulane"` line
- `_sass/_tulane.scss`, entirely local

Because Git cannot see when the gem's version changes underneath an override, check for drift
after `bundle update`:

```bash
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade overrides diff assets/css/main.scss
```

## Branding

Colors and typography follow the Tulane University Brand Guide (August 2024). Note that Tulane
rebranded in 2024 and most third-party "school colors" sites still publish the older palette.
The current values live in `_sass/_tulane.scss`.

Tulane's print typefaces (Adobe Caslon Pro, Freight Sans Pro) are commercially licensed and
cannot be served from a public site, so the site uses Libre Caslon Text and Source Sans 3 with
Georgia and Verdana, the guide's own web-safe fallbacks, behind them.

## License

[MIT](./LICENSE) © Tulane Math Society. The al-folio theme is separately MIT licensed.
