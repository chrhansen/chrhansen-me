# Repository Guidelines

## Project Structure & Module Organization

- `src/app/` contains Next.js App Router pages (e.g., `src/app/blog/[slug]/page.tsx`).
- `src/components/` holds shared UI components; `src/components/ui/` is the shadcn-ui component set.
- `content/posts/` holds MDX blog posts with frontmatter.
- `src/data/` contains local structured data (e.g., `src/data/projects.ts`).
- `src/hooks/` and `src/lib/` contain custom hooks and utilities.
- `public/` serves static assets like `favicon.ico` and `robots.txt`.
- `.github/workflows/` contains the GitHub Pages deployment workflow.

## Build, Test, and Development Commands

- `npm run dev`: Start the Next.js dev server.
- `npm run build`: Create a static export in `out/` for GitHub Pages.
- `npm run preview`: Serve the `out/` folder locally with a static file server.
- `npm run lint`: Run ESLint across the codebase.

## Coding Style & Naming Conventions

- Use 2-space indentation, semicolons, and double quotes (match existing `src/*.tsx` files).
- Favor TypeScript with TSX for React components.
- Keep component files in PascalCase (e.g., `ProjectCard.tsx`).
- Prefer the `@/` alias for imports from `src/` (configured in `tsconfig.json`).
- Run `npm run lint` before submitting changes.

## Testing Guidelines

- No automated test runner is configured yet.
- If adding tests, align them with the framework you introduce and document the command in `package.json`.
- Use clear, page- or component-based naming (e.g., `Blog.test.tsx`).

## Commit & Pull Request Guidelines

- Commits are short and imperative (e.g., `Add blog pages setup`).
- Keep commits focused and avoid mixing unrelated changes.
- PRs should include a concise summary and note any UI changes with screenshots or screen captures.
- Link related issues or tasks when applicable.

## Configuration Notes

- This is a Next.js + React + TypeScript site for `https://chrhansen.me`, deployed via GitHub Pages.
- `next.config.mjs` uses static export; set `NEXT_PUBLIC_BASE_PATH` only if deploying under a subpath.
- Blog content lives in `content/posts/` and is rendered from MDX at build time.
