# Response Iranzi Portfolio

Personal software engineering portfolio by IRANZI Response, featuring Orch and practical projects for student life and everyday work.

The canonical portfolio is [iranzi.spriteteam.com](https://iranzi.spriteteam.com/). The legacy GitHub Pages address redirects visitors to the canonical site.

## Local development

```bash
pnpm install
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

The site is a Next.js static export; `pnpm build` generates the static files in `out`. GitHub Actions runs lint, type-check, and build validation.
