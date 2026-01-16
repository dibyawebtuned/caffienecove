This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.









caffeinecove/
├── src/
│   ├── app/
│   │   ├── (routes)/                # Route groups (not in URL)
│   │   │   ├── page.tsx             # Home page
│   │   │   ├── about/
│   │   │   │   └── page.tsx         # /about
│   │   │   ├── menu/
│   │   │   │   └── page.tsx         # /menu
│   │   │   ├── contact/
│   │   │   │   └── page.tsx         # /contact
│   │   │   └── blog/
│   │   │       ├── page.tsx         # /blog
│   │   │       └── [slug]/
│   │   │           └── page.tsx     # /blog/coffee-benefits
│   │   │
│   │   ├── layout.tsx               # Root layout
│   │   ├── not-found.tsx            # Custom 404
│   │   ├── loading.tsx              # Global loading UI
│   │   └── sitemap.ts               # SEO sitemap
│   │
│   ├── components/
│   │   ├── ui/                      # Buttons, inputs, modals
│   │   ├── layout/                  # Header, Footer, Navbar
│   │   ├── sections/                # Hero, MenuSection, CTA
│   │   └── seo/                     # SEO helpers (Meta, JSON-LD)
│   │
│   ├── lib/
│   │   ├── seo.ts                   # Metadata helpers
│   │   ├── constants.ts             # App constants
│   │   └── utils.ts                 # Reusable utilities
│   │
│   ├── content/                     # SEO content
│   │   └── blog/
│   │       ├── coffee-benefits.md
│   │       └── brewing-guide.md
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── hooks/
│       └── useScroll.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── menu/
│   │   └── blog/
│   ├── icons/
│   ├── favicon.ico
│   └── robots.txt
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
