# Chirag P C · Portfolio

My personal site: who I am, my journey, my work, and how to reach me.

**Live:** [chiragpc-portfolio.vercel.app](https://chiragpc-portfolio.vercel.app)

## Updating the site

Everything that changes lives in `content/`. Components never hardcode facts.

| To change | Edit |
| --- | --- |
| Name, pitch, intro, email, socials, "Looking for" line | `content/site.ts` |
| Journey rows, and the current role in the hero | `content/journey.ts` (move `current: true` when you change jobs) |
| "More builds" and "Product writing" lists | `content/lists.ts` |
| A project | `content/work/<slug>.mdx` |

### Adding a project

1. Copy any file in `content/work/` to `content/work/<new-slug>.mdx`.
2. Put its images in `public/work/<new-slug>/`.
3. Edit the frontmatter: `title`, `summary`, `year`, `role`, `type`, and a `cover`:
   - `kind: phones` with one to three phone screenshots, or
   - `kind: image` with one wide image.
4. Set `featured: true` and an `order` to put it in the carousel.
5. Write the case study below the frontmatter. `<Gallery images={[...]} />` (add `phones` for phone screenshots) and `<Note>` are available.

The project then appears in the carousel, gets its own page at `/work/<new-slug>`, and joins the "Next?" chain. The frontmatter is checked at build time, so a missing or misspelled field fails the build with a clear message.

## Built with

- Next.js 15 (App Router), React 19, TypeScript
- Motion for animation, Lenis for smooth scrolling, a small WebGL shader for the hero
- MDX case studies (next-mdx-remote), validated with Zod
- Inter and Inter Tight via next/font
- Deployed on Vercel

Animations respect the visitor's reduced-motion setting.

## Running locally

```
npm install
npm run dev
```
