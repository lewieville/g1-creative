# G1 Creative - Complete File Structure

## 📁 Project Organization

```
g1-creative/
├── 📄 Configuration Files
│   ├── package.json                 # Dependencies and scripts
│   ├── tsconfig.json               # TypeScript configuration
│   ├── next.config.js              # Next.js configuration
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── .eslintrc.json              # ESLint configuration
│   ├── jest.config.js              # Jest testing configuration
│   ├── jest.setup.js               # Jest setup file
│   ├── .gitignore                  # Git ignore rules
│   └── .env.local                  # Environment variables (create this)
│
├── 📚 Documentation
│   ├── README.md                   # Project overview
│   ├── SETUP.md                    # Detailed setup guide
│   ├── CUSTOMIZATION.md            # Customization guide
│   ├── DEPLOYMENT.md               # Deployment guide
│   ├── QUICK_START.md              # Quick start guide
│   ├── PROJECT_CHECKLIST.md        # Complete checklist
│   └── FILE_STRUCTURE.md           # This file
│
├── 📱 App Directory (Next.js App Router)
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   ├── globals.css                 # Global styles
│   │
│   ├── 🛍️ about/
│   │   └── page.tsx                # About page
│   │
│   ├── 🛍️ services/
│   │   └── page.tsx                # Services page
│   │
│   ├── 🎨 portfolio/
│   │   ├── page.tsx                # Portfolio listing
│   │   └── [slug]/
│   │       └── page.tsx            # Individual project page
│   │
│   ├── 💰 pricing/
│   │   └── page.tsx                # Pricing page
│   │
│   ├── 📧 contact/
│   │   └── page.tsx                # Contact page
│   │
│   ├── 📝 blog/
│   │   ├── page.tsx                # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx            # Individual blog post
│   │
│   └── 🔌 api/
│       └── contact/
│           └── route.ts            # Contact form API endpoint
│
├── 🧩 Components
│   ├── Header.tsx                  # Site header with navigation
│   ├── Footer.tsx                  # Site footer
│   ├── Hero.tsx                    # Hero section component
│   ├── ServiceCard.tsx             # Service card component
│   ├── PortfolioCard.tsx           # Portfolio card component
│   ├── Testimonial.tsx             # Testimonial component
│   ├── TestimonialsCarousel.tsx    # Testimonials carousel
│   ├── PricingTable.tsx            # Pricing table with toggle
│   ├── ContactForm.tsx             # Contact form
│   ├── StickyCTA.tsx               # Sticky call-to-action button
│   ├── SEO.tsx                     # SEO component (legacy)
│   │
│   └── 🎨 ui/                      # Reusable UI components
│       ├── Button.tsx              # Button component
│       ├── Badge.tsx               # Badge component
│       ├── Input.tsx               # Input component
│       ├── Textarea.tsx            # Textarea component
│       ├── Container.tsx           # Container wrapper
│       └── Section.tsx             # Section wrapper
│
├── 📚 Lib (Utilities & Helpers)
│   ├── utils.ts                    # Utility functions (cn, slugify, etc.)
│   ├── seo.ts                      # SEO utilities and metadata generators
│   └── analytics.ts                # Analytics tracking functions
│
├── 🎨 Styles
│   └── globals.css                 # Global CSS and Tailwind imports
│
├── 🖼️ Public
│   ├── logo.svg                    # Site logo
│   ├── robots.txt                  # Search engine instructions
│   │
│   └── images/                     # Image assets
│       ├── .gitkeep                # Placeholder for images
│       ├── hero-main.jpg           # Main hero image
│       ├── about-hero.jpg          # About page hero
│       ├── og-image.jpg            # Social media preview
│       ├── portfolio-1.jpg         # Portfolio images
│       ├── portfolio-2.jpg         # ...
│       ├── blog-1.jpg              # Blog post images
│       ├── team-lewis.jpg          # Team photos
│       └── testimonial-1.jpg       # Testimonial avatars
│
├── 🧪 Tests
│   └── __tests__/
│       └── Button.test.tsx         # Example component test
│
└── 🔧 CI/CD
    └── .github/
        └── workflows/
            └── ci.yml              # GitHub Actions workflow
```

## 📋 File Purpose Guide

### Configuration Files

| File | Purpose | Edit? |
|------|---------|-------|
| `package.json` | Dependencies and scripts | ✅ Rarely |
| `tsconfig.json` | TypeScript compiler options | ❌ No |
| `next.config.js` | Next.js configuration | ✅ Maybe |
| `tailwind.config.js` | Design tokens and colors | ✅ Yes |
| `.env.local` | Secret environment variables | ✅ Yes |

### Pages (App Directory)

| File | Purpose | Edit? |
|------|---------|-------|
| `app/page.tsx` | Home page | ✅ Yes |
| `app/services/page.tsx` | Services listing | ✅ Yes |
| `app/portfolio/page.tsx` | Portfolio grid | ✅ Yes |
| `app/portfolio/[slug]/page.tsx` | Project details | ✅ Yes |
| `app/pricing/page.tsx` | Pricing packages | ✅ Yes |
| `app/about/page.tsx` | About page | ✅ Yes |
| `app/contact/page.tsx` | Contact page | ✅ Yes |
| `app/blog/page.tsx` | Blog listing | ✅ Yes |

### Components

| File | Purpose | Edit? |
|------|---------|-------|
| `Header.tsx` | Navigation | ✅ Yes (menu) |
| `Footer.tsx` | Footer content | ✅ Yes |
| `Hero.tsx` | Hero sections | ✅ Maybe |
| `ServiceCard.tsx` | Service display | ✅ Maybe |
| `PortfolioCard.tsx` | Portfolio items | ✅ Maybe |
| `PricingTable.tsx` | Pricing display | ✅ Yes (prices) |
| `ContactForm.tsx` | Contact form | ✅ Maybe |
| `ui/Button.tsx` | Button styles | ❌ No |
| `ui/Input.tsx` | Input styles | ❌ No |

### Utilities (Lib)

| File | Purpose | Edit? |
|------|---------|-------|
| `lib/utils.ts` | Helper functions | ✅ Add more |
| `lib/seo.ts` | SEO defaults | ✅ Yes |
| `lib/analytics.ts` | Tracking | ✅ Add events |

### Public Assets

| Directory | Purpose | Edit? |
|-----------|---------|-------|
| `public/images/` | All images | ✅ Yes (replace) |
| `public/logo.svg` | Site logo | ✅ Yes |
| `public/robots.txt` | SEO instructions | ✅ Maybe |

## 🎯 Key Files to Customize

### Essential (Edit First)
1. **`app/page.tsx`** - Home page hero and content
2. **`app/about/page.tsx`** - Your story and bio
3. **`app/contact/page.tsx`** - Contact information
4. **`tailwind.config.js`** - Brand colors
5. **`public/logo.svg`** - Your logo
6. **`components/Footer.tsx`** - Footer links and contact
7. **`.env.local`** - API keys and configuration

### Important (Edit Soon)
8. **`app/services/page.tsx`** - Service offerings
9. **`app/pricing/page.tsx`** - Pricing packages
10. **`app/portfolio/page.tsx`** - Your projects
11. **`lib/seo.ts`** - SEO defaults

### Optional (Edit Later)
12. **`app/blog/`** - Blog content
13. **`components/TestimonialsCarousel.tsx`** - Testimonials
14. **`components/PricingTable.tsx`** - Advanced pricing

## 🔍 Where to Find Things

### "Where do I change...?"

**Colors**: `tailwind.config.js`
**Fonts**: `app/layout.tsx` + `tailwind.config.js`
**Logo**: `public/logo.svg` + `components/Header.tsx` + `components/Footer.tsx`
**Navigation**: `components/Header.tsx`
**Footer Links**: `components/Footer.tsx`
**Contact Info**: `app/contact/page.tsx` + `components/Footer.tsx`
**Meta Tags**: Each `page.tsx` file (metadata export)
**Analytics**: `lib/analytics.ts` + `app/layout.tsx`
**Prices**: `components/PricingTable.tsx`
**Services**: `app/services/page.tsx`
**About Text**: `app/about/page.tsx`
**Portfolio Items**: `app/portfolio/page.tsx`
**Blog Posts**: `app/blog/page.tsx` + `app/blog/[slug]/page.tsx`

## 📦 Dependencies Explained

### Core
- **next** - React framework
- **react** - UI library
- **typescript** - Type safety

### UI
- **tailwindcss** - Styling
- **lucide-react** - Icons
- **framer-motion** - Animations
- **class-variance-authority** - Component variants
- **clsx** + **tailwind-merge** - Class merging

### Testing
- **jest** - Test runner
- **@testing-library/react** - React testing utilities

### Development
- **eslint** - Code linting
- **autoprefixer** - CSS prefixing

## 🚀 Build Output

After `npm run build`:
```
.next/
├── cache/           # Build cache
├── server/          # Server-side code
├── static/          # Static assets
└── ...
```

Don't edit `.next/` - it's auto-generated!

## 🔒 Files to Never Commit

Already in `.gitignore`:
- `.env.local` - Secret keys
- `node_modules/` - Dependencies
- `.next/` - Build output
- `*.log` - Log files

## 📊 File Count Summary

- **Total Pages**: 7 main pages + dynamic routes
- **Total Components**: 20+
- **Total Utilities**: 3 lib files
- **Total Tests**: 1 (example - add more!)
- **Total Config Files**: 7
- **Documentation Files**: 7

## 💡 Tips

1. **Start with content** - Edit page.tsx files first
2. **Then styling** - Customize tailwind.config.js
3. **Finally components** - Modify components if needed
4. **Don't touch** - Leave ui/ components and config alone unless necessary

## 🆘 Need Help?

- Can't find a file? Use your editor's search (Ctrl/Cmd + P)
- Need to change content? Check the page's `.tsx` file
- Want to change styling? Check `tailwind.config.js`
- Everything else? Check `CUSTOMIZATION.md`

---

This file structure is designed to be intuitive and scalable. Each directory has a clear purpose, making it easy to find and modify what you need.

