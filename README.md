# Tulane Math Club

The official website of the Tulane Math Club.

[tulanemathsociety.github.io](https://tulanemathsociety.github.io/)

Built with [Jekyll](https://jekyllrb.com/) and the
[al-folio](https://github.com/alshedivat/al-folio) theme (v1.1), deployed to GitHub Pages.

> **Repository layout:** the Jekyll source lives in `src/`. Everything else at the repository
> root is *generated* and is overwritten on every deploy. Never edit files at the root by hand.
> See [Deployment](#deployment) for why it is arranged this way.

## Editing content

No Ruby needed for routine content changes. Everything is Markdown with YAML front matter.

| What | Where |
| :--- | :--- |
| Homepage | `src/_pages/about.md` |
| Officers | `src/_pages/officers.md` |
| Resources | `src/_pages/resources.md` |
| Events | `src/_data/events.yml` |
| Weekly puzzles | `src/_posts/YYYY-MM-DD-slug.md` |
| Short announcements on the homepage | `src/_news/` |
| Site title, description, feature flags | `src/_config.yml` |
| Contact and social links | `src/_data/socials.yml` |
| Tulane colors and fonts | `src/_sass/_tulane.scss` |

Navbar order comes from each page's `nav_order` front matter, not from a central list.

## Running locally

al-folio v1.x needs Ruby, and the CI build pins 3.3.5.

```bash
brew install ruby@3.3 imagemagick
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
gem install bundler
cd src && bundle install && bundle exec jekyll serve
```

The site is then at <http://localhost:4000>. `imagemagick` is what generates the responsive
WebP variants; without `convert` on your PATH the build still succeeds but silently skips them.

Docker is the alternative if the native install gives trouble:

```bash
docker compose pull && docker compose up   # http://localhost:8080
```

## Deployment

GitHub Pages for this repo is set to **Deploy from a branch: `main` / (root)**, and only the
account that owns the repository can change that setting. So the root of `main` has to literally
be the built site.

That is why the source sits in `src/`: it keeps generated files at the root from colliding with
source files of the same name. `.nojekyll` at the root tells GitHub to serve those files as-is
rather than trying to build them, which it cannot do, since al-folio ships its layouts as gems
that GitHub's Pages builder does not have.

`.github/workflows/deploy.yml` runs `bin/publish` on every push to `main` and commits the result
back to `main` with `[skip ci]` so it does not retrigger itself.

To publish by hand:

```bash
bin/publish
git add -A && git commit -m "Publish site" && git push
```

### Preferred setup, if someone gets owner access

Pointing Pages at a `gh-pages` branch is cleaner, and keeps generated files out of `main`
entirely. To switch: set Settings, Pages, Source to `gh-pages`, move `src/*` back to the root,
delete the generated files, and change the last workflow step back to
`JamesIves/github-pages-deploy-action` with `folder: _site`.

## Theme overrides

al-folio v1.x keeps its layouts, includes, and Sass inside gems, so there is no `_layouts/` or
`_includes/` here by default. A local file at the same path shadows the gem's copy. Two such
overrides currently exist:

- `src/assets/css/main.scss`, a copy of the gem's file with one added `@use "tulane"` line
- `src/_sass/_tulane.scss`, entirely local

Because Git cannot see when the gem's version changes underneath an override, check for drift
after `bundle update`:

```bash
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade overrides diff assets/css/main.scss  # run from src/
```

## Branding

Colors and typography follow the Tulane University Brand Guide (August 2024). Note that Tulane
rebranded in 2024 and most third-party "school colors" sites still publish the older palette.
The current values live in `src/_sass/_tulane.scss`.

Tulane's print typefaces (Adobe Caslon Pro, Freight Sans Pro) are commercially licensed and
cannot be served from a public site, so the site uses Libre Caslon Text and Source Sans 3 with
Georgia and Verdana, the guide's own web-safe fallbacks, behind them.

## License

[MIT](./LICENSE) © Tulane Math Society. The al-folio theme is separately MIT licensed.
