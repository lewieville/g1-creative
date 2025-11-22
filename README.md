# G1 Creative - Web Design Agency Website

A complete, production-ready Next.js website for G1 Creative web design agency.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn

## 🛠️ Installation & Setup

1. **Clone and install dependencies**:
```bash
npm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your keys:
- `NEXT_PUBLIC_SITE_URL` - Your production URL
- `FORMSPREE_ENDPOINT` - Your Formspree form ID (get from formspree.io)
- `NEXT_PUBLIC_GA_ID` - Google Analytics 4 Measurement ID (optional)

3. **Run development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deploy

### Build for production:
```bash
npm run build
npm run start
```

### Deploy to Vercel:
1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🎨 Customization Guide

### Change Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: { ... },    // Main brand color
  secondary: { ... },  // Secondary color
  accent: { ... }      // Accent/CTA color
}
```

### Update Content
- **Home Page**: `/app/page.tsx`
- **About**: `/app/about/page.tsx`
- **Services**: `/app/services/page.tsx`
- **Pricing**: `/app/pricing/page.tsx`
- **Contact**: `/app/contact/page.tsx`

### Site-wide Settings
- **Navigation**: `/components/Header.tsx`
- **Footer**: `/components/Footer.tsx`
- **SEO Defaults**: `/lib/seo.ts`

### Replace Placeholder Images
Images are in `/public/images/`. Replace:
- `logo.svg` - Your logo
- `hero-*.jpg` - Hero images
- `portfolio-*.jpg` - Portfolio screenshots
- `team-*.jpg` - Team photos

## 📱 Features

- ✅ Fully responsive (mobile/tablet/desktop)
- ✅ SEO optimized with meta tags and JSON-LD schema
- ✅ Accessible (WCAG 2.1 AA compliant)
- ✅ Contact form with Formspree integration
- ✅ Google Analytics 4 ready
- ✅ Performance optimized (lazy loading, image optimization)
- ✅ Smooth animations with Framer Motion
- ✅ Blog with markdown support
- ✅ Portfolio with case studies
- ✅ Pricing table with toggle
- ✅ Newsletter signup
- ✅ Testimonials carousel
- ✅ Sticky CTA

## 🧪 Testing

Run tests:
```bash
npm run test        # Watch mode
npm run test:ci     # CI mode
```

## 📁 Project Structure

```
g1-creative/
├── app/                    # Next.js app router pages
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── portfolio/
│   ├── pricing/
│   ├── services/
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                  # Utilities and helpers
│   ├── utils.ts
│   └── seo.ts
├── public/               # Static assets
│   └── images/
├── styles/              # Global styles
│   └── globals.css
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json
```

## 🔐 Environment Variables

Required for production:
- `NEXT_PUBLIC_SITE_URL` - Your domain (e.g., https://g1creative.com)
- `FORMSPREE_ENDPOINT` - Formspree form endpoint ID

Optional:
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID
- `NEWSLETTER_API_KEY` - Newsletter service API key (Mailchimp, ConvertKit, etc.)

## 📊 Analytics

Google Analytics 4 is pre-configured. To enable:
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local` as `NEXT_PUBLIC_GA_ID`

## 📝 Content Management

This starter uses file-based content. For a CMS, consider:
- **Sanity.io** - Structured content platform
- **Contentful** - API-first CMS
- **WordPress (Headless)** - Use existing WordPress backend
- **Markdown** - Keep it simple with local files

## 🤝 Contributing

This is a custom project for G1 Creative. For issues or improvements, contact the development team.

## 📄 License

© 2024 G1 Creative. All rights reserved.

## 🆘 Support

For technical support or questions:
- Email: lewis@g1creative.com
- Website: www.g1creative.com
