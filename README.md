# Response Iranzi Portfolio

Personal software engineering portfolio by IRANZI Response, featuring Orch and practical projects for student life and everyday work.

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

The site is a Next.js static export. GitHub Actions publishes the `out` directory to GitHub Pages. The `public/CNAME` file points the custom domain to `spriteteam.com`.
