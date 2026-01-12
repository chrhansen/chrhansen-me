# Ultra-high-level plan: Next.js + MDX blog on GitHub Pages (chrhansen/chrhansen-me)

## Outcome
A static personal blog (Next.js + MDX) deployed to GitHub Pages from `main`, while Lovable keeps auto-committing UI changes to `lovable-dev`. The repository is: https://github.com/chrhansen/chrhansen-me

## 1) Inspect the repo and decide the minimal approach
- Confirm the current stack (Lovable output is a Vite + React app today).
- Decide on a clean migration to Next.js (App Router) while preserving existing components and styling.
- Identify what’s needed for GitHub Pages static hosting (static export constraints, routing/basePath, images, CNAME).
- Choose the smallest set of changes that keeps the UI intact and avoids new infrastructure.

## 2) Add “blog as content” without introducing infrastructure
- Add an MDX-based content system:
  - A `content/` folder for posts (MDX + frontmatter).
  - A build-time loader (filesystem + frontmatter parsing).
- Add routes:
  - `/blog` list page with category filtering
  - `/blog/[slug]` post page rendered from MDX
- Make blog pages use the existing Lovable layout/components.

## 3) Make the site deployable as static files on GitHub Pages
- Configure Next.js for static export (`output: "export"`, `trailingSlash: true`).
- Set `basePath`/`assetPrefix` from an env var for non-root deployments, but default to empty for the custom domain.
- Add a `public/CNAME` with `chrhansen.me` to keep Pages domain configuration in-repo.
- Add a GitHub Actions workflow that builds on `main` and deploys `out/` to Pages.

## 4) Make the branch workflow safe and boring
- Confirm Lovable only writes to `lovable-dev`.
- `main` is protected, can only be updated by PRs merged into it.
- make any changes in a feature-branch (not named `lovable-dev`) and open a PR to `main`
- Document the release flow: PR `lovable-dev` → `main` triggers deploy.

## 5) Validate end-to-end
- Local: run dev server, build, and static export; verify blog routes and images.
- Remote: merge to `main`, confirm GitHub Pages deploy, confirm `/blog` works publicly.

## 6) Update contributor guidance
- Refresh `AGENTS.md` to describe the Next.js + GitHub Pages deployment model and content workflow.

## Deliverable
- One repo, two pemanent branches (`lovable-dev` for Lovable, `main` for production), with MDX blog + GitHub Pages deployment fully working.
