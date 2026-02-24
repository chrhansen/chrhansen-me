# chrhansen.me

Personal site + blog for Christian Hansen.

Live site: https://chrhansen.me

## Stack

- Next.js App Router (`output: "export"`)
- TypeScript + React
- Tailwind CSS
- MDX blog posts in `content/posts/`
- GitHub Pages deploy via `.github/workflows/ci.yml`

## Scripts

- `npm run dev`: start local dev server
- `npm run build`: static export build (`out/`)
- `npm run preview`: serve static build from `out/`
- `npm run lint`: run ESLint

## Blog Authoring

Create a file in `content/posts/<slug>.mdx`.
The filename becomes URL `/blog/<slug>`.

Frontmatter schema:

```mdx
---
title: "Post title"
excerpt: "Short summary for cards + metadata."
date: "2026-02-23"
category: "projects"
readTime: "5 min read"
coverImage: "/images/blog/<slug>/hero.png"
---
```

Notes:

- `category` must be one of: `software`, `skiing`, `projects`, `thoughts`
- `coverImage` is optional and rendered on the post page header
- MDX supports custom `<ImageCarousel />` (wired in `src/app/blog/[slug]/page.tsx`)

Carousel usage:

```mdx
<ImageCarousel
  images={[
    { src: "/images/blog/<slug>/screen-1.png", alt: "Screen 1", caption: "Optional caption" },
    { src: "/images/blog/<slug>/screen-2.png", alt: "Screen 2" },
  ]}
/>
```

Store post images under `public/images/blog/<slug>/`.
Reference with absolute paths from site root, e.g. `"/images/blog/<slug>/foo.png"`.

## Local Preview

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

Static preview:

```sh
npm run build
npm run preview
```

## Project Layout

- `src/app/`: app routes/pages
- `src/components/`: shared components
- `src/components/ui/`: shadcn/ui primitives
- `src/lib/posts.ts`: MDX loading + frontmatter parsing
- `src/data/projects.ts`: projects page data
- `content/posts/`: blog post source
- `public/`: static assets

## Deployment

- PRs to `main`: CI build/lint runs
- Push/merge to `main`: GitHub Pages deploy runs

## Config Notes

- `next.config.mjs` uses static export and `trailingSlash: true`
- Dev build cache uses `.next-dev` to avoid collisions with production `.next`
- Optional `NEXT_PUBLIC_BASE_PATH` supported for subpath deploys
