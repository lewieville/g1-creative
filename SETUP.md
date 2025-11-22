# G1 Creative - Complete Setup Guide

This guide will walk you through setting up the G1 Creative website from scratch.

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git (for version control)
- A code editor (VS Code recommended)

## Step-by-Step Installation

### 1. Create the Project

If you're starting from scratch with the provided files, skip to step 2. If you want to create a fresh Next.js project:

```bash
npx create-next-app@latest g1-creative --typescript --tailwind --app --no-src-dir --import-alias "@/*"
cd g1-creative
```

### 2. Install Dependencies

```bash
npm install lucide-react framer-motion class-variance-authority clsx tailwind-merge
npm install -D @types/node tailwindcss-animate
```

### 3. Set Up Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your values:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="G1 Creative"
FORMSPREE_ENDPOINT=your_formspree_form_id
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Getting a Formspree Endpoint:

1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy the form ID (the part after `/f/` in the URL)
5. Add it to your `.env.local` as `FORMSPREE_ENDPOINT`

#### Setting Up Google Analytics:

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a new GA4 property
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Add it to `.env.local` as `NEXT_PUBLIC_GA_ID`

### 4. Add Images

Create your image assets in the `public/images/` directory:

Required images (you can use placeholders initially):
- `logo.svg` or `logo.png` - Your logo (recommended size: 200x50)
- `hero-main.jpg` - Main hero image (1920x1080)
- `portfolio-1.jpg` through `portfolio-9.jpg` - Portfolio previews (800x600)
- `portfolio-*-detail-*.jpg` - Portfolio detail images (1200x800)
- `blog-1.jpg` through `blog-6.jpg` - Blog post images (1200x675)
- `testimonial-1.jpg` through `testimonial-3.jpg` - Client photos (200x200)
- `team-lewis.jpg` - Founder photo (800x800)
- `about-hero.jpg` - About page hero (1200x800)
- `og-image.jpg` - Social media preview (1200x630)

**Quick Tip**: Use placeholder services like [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com) for temporary images.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
npm run start
```

## Customization Guide

### Brand Colors

Edit `tailwind.config.js` to change your brand colors:

```js
colors: {
  primary: {
    // Main brand color (currently blue)
    DEFAULT: '#0284c7',
    50: '#f0f9ff',
    // ... other shades
  },
  secondary: {
    // Secondary color (currently gray/slate)
    // ... 
  },
  accent: {
    // Accent/CTA color (currently red)
    DEFAULT: '#ef4444',
    // ...
  },
}
```

### Fonts

The project uses Google Fonts (Inter and Poppins). To change fonts, edit `app/layout.tsx`:

```tsx
import { YourFont } from "next/font/google"

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
  display: "swap",
})
```

### Content Updates

#### Site-wide Settings:
- **Navigation**: `components/Header.tsx` - Update menu items
- **Footer**: `components/Footer.tsx` - Update links and contact info
- **SEO Defaults**: `lib/seo.ts` - Update site name, description, etc.

#### Page Content:
- **Home**: `app/page.tsx`
- **Services**: `app/services/page.tsx`
- **Portfolio**: `app/portfolio/page.tsx` and `app/portfolio/[slug]/page.tsx`
- **Pricing**: `app/pricing/page.tsx` - Update packages and prices
- **About**: `app/about/page.tsx`
- **Contact**: `app/contact/page.tsx`
- **Blog**: `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`

### Contact Information

Update contact details in multiple places:
1. `components/Footer.tsx` - Footer contact info
2. `app/contact/page.tsx` - Contact page details
3. `lib/seo.ts` - Schema.org contact point

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `FORMSPREE_ENDPOINT`
   - `NEXT_PUBLIC_GA_ID`
6. Click "Deploy"

Your site will be live in minutes!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Add environment variables in Site Settings
7. Deploy!

### Other Hosting Options

The site will work on any platform that supports Next.js:
- AWS Amplify
- Cloudflare Pages
- Railway
- Render
- DigitalOcean App Platform

## Testing

Run tests:
```bash
npm run test        # Watch mode
npm run test:ci     # CI mode
```

Add more tests in the `__tests__/` directory.

## Continuous Integration

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that:
- Runs on every push to `main` and `develop`
- Tests on Node.js 18 and 20
- Runs linting
- Runs tests
- Builds the project

## Performance Optimization

The site is already optimized, but here are some tips:

1. **Images**: Always use Next.js `<Image>` component
2. **Fonts**: Use `next/font` for font optimization
3. **Analytics**: Only load in production
4. **Code Splitting**: Next.js handles this automatically
5. **Caching**: Configure in `next.config.js`

## SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] JSON-LD structured data
- [x] Sitemap (auto-generated by Next.js)
- [x] Robots.txt (create in `public/robots.txt`)
- [x] Alt text on images
- [x] Semantic HTML
- [x] Fast loading times
- [x] Mobile-responsive

## Common Issues

### "Module not found" errors

Run: `npm install`

### Images not loading

Make sure images exist in `public/images/` directory.

### Styles not applying

1. Check `tailwind.config.js` includes all file paths
2. Restart dev server: `npm run dev`

### Environment variables not working

1. Must start with `NEXT_PUBLIC_` for client-side access
2. Restart dev server after changing `.env.local`

## Support

For issues or questions:
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Contact: lewis@g1creative.com

## Next Steps

1. Replace placeholder images with your actual images
2. Update all content to reflect your brand
3. Set up Formspree and Google Analytics
4. Test on multiple devices
5. Run Lighthouse audit
6. Deploy to production!

## License

© 2024 G1 Creative. All rights reserved.

