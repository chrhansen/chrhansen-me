# chrhansen.me

Personal website and blog for Christian Hansen, built with Next.js (App Router), MDX, and Tailwind CSS. The site statically exports to `out/` for GitHub Pages deployment, with blog content sourced from `content/posts/`.

Live site: https://chrhansen.me

## High-level overview

- Purpose: showcase portfolio work, writing, and content for `chrhansen.me`.
- Rendering: Next.js App Router with static export (`output: "export"`).
- Content: blog posts are MDX files compiled at build time.
- Deployment: GitHub Pages (see `.github/workflows/`).

## Working with blog posts

### Create a new post

1. Add a new MDX file to `content/posts/` with a kebab-case filename (this becomes the slug).
2. Include frontmatter using the existing schema:

```mdx
---
title: "Post Title"
excerpt: "Short summary used in listings and metadata."
date: "2025-01-15"
category: "software"
readTime: "6 min read"
coverImage: "/images/blog/post-title/cover.jpg"
---

# Post Title

Write your content here...
```

Notes:
- `category` must be one of `software`, `skiing`, `projects`, or `thoughts` (see `src/lib/posts-types.ts`).
- `coverImage` is optional and not currently rendered, but is available in post metadata.
- The filename (minus `.mdx`) is the slug used in URLs under `/blog/[slug]`.

### Add images

- Store images in `public/` so they are served statically.
- Recommended convention: `public/images/blog/<slug>/...`
- Reference images in MDX with absolute paths from the site root:

```md
![Alt text](/images/blog/post-title/diagram.png)
```

### Preview locally

```sh
npm i
npm run dev
```

Open `http://localhost:3000/blog` and navigate to your post. Static export preview:

```sh
npm run build
npm run preview
```

## Project structure

Key locations:

- `src/app/`: Next.js App Router routes and pages.
- `src/components/`: shared React components (`src/components/ui/` is shadcn-ui).
- `src/lib/`: utilities and server-only helpers (blog parsing lives in `src/lib/posts.ts`).
- `content/posts/`: MDX source files for the blog.
- `public/`: static assets (images, `favicon.ico`, `robots.txt`, etc).
- `.github/workflows/`: GitHub Pages build/deploy workflow.

### How Next.js is used here

- App Router is the primary routing system (see `src/app/`).
- Static export is enabled in `next.config.mjs` (`output: "export"`).
- Blog pages are statically generated from MDX via `getPostSlugs()` and `generateStaticParams()` in `src/app/blog/[slug]/page.tsx`.
- If deploying under a subpath, set `NEXT_PUBLIC_BASE_PATH` (see `next.config.mjs`).

## Lovable workflow

Lovable work happens on a dedicated branch:

- Branch: `lovable-dev` (remote: `origin/lovable-dev`)
- Purpose: isolate UI experimentation and AI-generated changes from production-ready code in `main`.

### Merging Lovable UI edits into main

Recommended flow:

```sh
git fetch origin
git checkout main
git merge origin/lovable-dev
```

If you want more control, cherry-pick individual commits:

```sh
git checkout main
git cherry-pick <commit-sha>
```

Tips:
- Resolve conflicts in `src/` and `public/` with a bias toward `main` unless you explicitly want the Lovable change.
- After merging, run `npm run lint` and `npm run build` to validate the export.

## Development commands

- `npm run dev`: local dev server
- `npm run build`: static export to `out/`
- `npm run preview`: serve `out/` locally
- `npm run lint`: lint the codebase

## Conventions

- Indentation: 2 spaces, use semicolons and double quotes in TS/TSX.
- Imports: prefer the `@/` alias for `src/` modules.
- Components: PascalCase filenames under `src/components/`.

## Notes for future development

- MDX is compiled at build time with `next-mdx-remote/rsc` (see `src/app/blog/[slug]/page.tsx`).
- If you add new post categories, update `PostCategory` in `src/lib/posts-types.ts` and the category mappings in `src/app/blog/[slug]/page.tsx`.
- For new shared UI, prefer `src/components/` and keep any shadcn additions under `src/components/ui/`.
- The site is static-exported, so avoid runtime server-only features that require a Node server.
