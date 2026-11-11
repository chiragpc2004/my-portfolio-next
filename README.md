# Chirag P C · Portfolio

My personal site: who I am, what I've built, and how to reach me.

**Live:** [chiragpc-portfolio.vercel.app](https://chiragpc-portfolio.vercel.app)

## What's on it

- **Hero:** a short intro and links to GitHub, LinkedIn and Kaggle
- **About:** my background in testing, data science and product
- **Projects:** selected work, including **Iris Lab**, an interactive demo where you drag petal length and width and watch a depth-2 decision tree classify the flower live, plotted against Fisher's original 150 samples
- **Contact:** a form that sends through [FormSubmit](https://formsubmit.co), with a direct email fallback

## Built with

- [Next.js 15](https://nextjs.org) (App Router) and React 19
- TypeScript
- Tailwind CSS
- Framer Motion for animation; Lucide and React Icons for icons
- Deployed on [Vercel](https://vercel.com)

## Project structure

```
app/          layout, page and global styles
sections/     Hero, About, Projects, Contact
components/   Navbar, IrisLab and its data, scroll-reveal hook
public/       images and icons
```

## Run locally

```bash
git clone https://github.com/chiragpc2004/my-portfolio-next.git
cd my-portfolio-next
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Image credits

The iris photos are from Wikimedia Commons (CC BY / CC BY-SA). The painting is from the Art Institute of Chicago (CC0). Each image is credited on the site.
