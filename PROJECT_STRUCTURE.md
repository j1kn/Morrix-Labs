# Morrix Labs Website - Project Structure

## Directory Tree

```
morrix-website/
│
├── 📄 Documentation Files
│   ├── README.md                 ← Start here for overview
│   ├── QUICK_START.md            ← Get running in 2 minutes
│   ├── DEPLOYMENT.md             ← Deploy to production
│   ├── IMPLEMENTATION_SUMMARY.md  ← What was built
│   └── PROJECT_STRUCTURE.md      ← This file
│
├── 🎯 App Directory (Next.js 14 App Router)
│   └── app/
│       ├── layout.tsx            ← Root layout with metadata
│       ├── page.tsx              ← Homepage with all sections
│       ├── not-found.tsx         ← 404 error page
│       ├── globals.css           ← Global styles and utilities
│       ├── sitemap.ts            ← Dynamic SEO sitemap
│       └── api/
│           └── contact/
│               └── route.ts      ← Contact form API endpoint
│
├── 🧩 Components (Reusable Building Blocks)
│   ├── components/
│   │   ├── common/               ← Layout components
│   │   │   ├── Header.tsx        ← Navigation & sticky header
│   │   │   └── Footer.tsx        ← Site footer
│   │   │
│   │   ├── sections/             ← Page sections
│   │   │   ├── Hero.tsx          ← Main headline & CTAs
│   │   │   ├── Services.tsx      ← 4-card service grid
│   │   │   ├── Projects.tsx      ← Portfolio showcase
│   │   │   ├── Process.tsx       ← 3-step workflow
│   │   │   ├── Pricing.tsx       ← 3 pricing tiers
│   │   │   └── Contact.tsx       ← Contact form & links
│   │   │
│   │   └── ui/                   ← Primitive components
│   │       ├── Button.tsx        ← 3 button variants
│   │       ├── Card.tsx          ← Reusable card container
│   │       └── Container.tsx     ← Responsive container
│   │
│   └── lib/
│       └── constants.ts          ← All content & config (edit here!)
│
├── 🎨 Configuration
│   ├── tailwind.config.ts        ← Tailwind CSS with dark theme
│   ├── tsconfig.json             ← TypeScript configuration
│   ├── next.config.ts            ← Next.js configuration
│   ├── postcss.config.mjs         ← PostCSS configuration
│   └── vercel.json               ← Vercel deployment config
│
├── 📦 Dependencies
│   ├── package.json              ← Project metadata & scripts
│   └── package-lock.json         ← Dependency lock file
│
├── 🌐 Static Assets
│   └── public/
│       └── robots.txt            ← SEO robots configuration
│
├── 🚫 Version Control
│   ├── .gitignore                ← Git ignore rules
│   └── .env.example              ← Example environment variables
│
└── 🔨 Build Output
    └── .next/                    ← Generated on `npm run build`
```

## Component Hierarchy

```
Root (app/page.tsx)
│
├── Header (sticky navigation)
│   ├── Logo
│   └── Navigation Links
│
├── Hero (main headline)
│   ├── h1 headline
│   ├── p description
│   └── 2 CTAs (primary, secondary)
│
├── Services (4-card grid)
│   ├── Card (Service 1)
│   ├── Card (Service 2)
│   ├── Card (Service 3)
│   └── Card (Service 4)
│
├── Projects (portfolio)
│   └── Card (Project: LC Labs)
│
├── Process (3-step)
│   ├── Step 1 (Discover)
│   ├── Step 2 (Build)
│   └── Step 3 (Launch & Iterate)
│
├── Pricing (3 plans)
│   ├── Card (Starter)
│   ├── Card (Growth) ← Highlighted
│   └── Card (Custom)
│
├── Contact (form + links)
│   ├── Form (name, email, message)
│   ├── Email link
│   └── Telegram link
│
└── Footer (navigation & info)
    ├── Navigation Links
    └── Contact Links
```

## File Organization Logic

### By Type
- **Pages**: `app/`
- **Components**: `components/`
- **Utilities**: `lib/`
- **Config**: Root level (`tailwind.config.ts`, `next.config.ts`, etc.)
- **Static**: `public/`

### By Purpose
- **Layout**: `components/common/`
- **Content Sections**: `components/sections/`
- **Reusable UI**: `components/ui/`
- **Data/Constants**: `lib/constants.ts`

## Key Technologies

```
Framework      │ Next.js 14 (App Router)
Language       │ TypeScript
Styling        │ Tailwind CSS
Package Mgr    │ npm
Node Version   │ 18+ (recommended 20+)
Deployment     │ Vercel (recommended)
```

## Development Workflow

```
Edit Code
    ↓
npm run dev (local testing)
    ↓
npm run build (verify production build)
    ↓
git commit
    ↓
git push
    ↓
Vercel auto-deploys ✨
```

## What to Edit When

| Want to... | Edit this file |
|-----------|----------------|
| Change copy/text | `lib/constants.ts` or specific component |
| Add a service | `lib/constants.ts` → `SERVICES` |
| Update pricing | `lib/constants.ts` → `PRICING_PLANS` |
| Change colors | `tailwind.config.ts` → `theme.colors` |
| Adjust spacing | `tailwind.config.ts` or `app/globals.css` |
| Add a section | Create new file in `components/sections/` |
| Setup email | `app/api/contact/route.ts` and `.env.local` |
| Update nav | `components/common/Header.tsx` |

## Build & Deployment

```
┌─────────────────────────────────────────┐
│         Local Development               │
│  npm run dev (http://localhost:3000)    │
└────────────────┬────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────┐
│         Build for Production            │
│  npm run build (.next folder created)   │
└────────────────┬────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────┐
│       Deploy to Vercel (Recommended)    │
│  vercel (or push to git)                │
└─────────────────────────────────────────┘
```

## Performance Metrics

- **First Load JS**: 108 kB
- **Shared JS**: 102 kB
- **Page Size**: ~2.5 kB
- **Build Time**: ~1.5 seconds
- **Optimization**: Static generation + minimal JavaScript

---

Happy coding! 🚀
