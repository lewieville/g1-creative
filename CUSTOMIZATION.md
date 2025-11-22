# Customization Guide for G1 Creative

Quick reference for customizing the G1 Creative website.

## 🎨 Brand Colors

**File**: `tailwind.config.js`

```js
colors: {
  primary: {
    DEFAULT: '#0284c7',  // Main brand color
    // Change all shades from 50-950
  },
  secondary: {
    DEFAULT: '#64748b',  // Secondary/text color
    // Change all shades
  },
  accent: {
    DEFAULT: '#ef4444',  // CTA/accent color
    // Change all shades
  },
}
```

**Pro Tip**: Use a tool like [UI Colors](https://uicolors.app) to generate complete color palettes.

## 🔤 Fonts

**File**: `app/layout.tsx`

Current fonts:
- **Body**: Inter
- **Headings**: Poppins

To change:
```tsx
import { YourBodyFont, YourHeadingFont } from "next/font/google"

const bodyFont = YourBodyFont({
  subsets: ["latin"],
  variable: "--font-your-body",
})

const headingFont = YourHeadingFont({
  subsets: ["latin"],
  variable: "--font-your-heading",
})
```

Then update `tailwind.config.js`:
```js
fontFamily: {
  sans: ['var(--font-your-body)', 'system-ui', 'sans-serif'],
  heading: ['var(--font-your-heading)', 'system-ui', 'sans-serif'],
}
```

## 📝 Content Updates

### Site-wide Information

**File**: `lib/seo.ts`

Update:
- Site name
- Default descriptions
- Social media handles
- Contact email
- Business address

### Navigation Menu

**File**: `components/Header.tsx`

```tsx
const navigation = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  // Add/remove/modify menu items
]
```

### Footer

**File**: `components/Footer.tsx`

Update:
- Footer links
- Contact information
- Social media links
- Newsletter text

## 📄 Page Content

### Home Page
**File**: `app/page.tsx`

Sections to update:
- Hero title and subtitle
- Services (3 cards)
- Featured projects (3 cards)
- Stats/metrics
- Pricing preview

### Services Page
**File**: `app/services/page.tsx`

Update:
- Service offerings
- Features lists
- Process steps
- Why choose us section

### Portfolio Page
**File**: `app/portfolio/page.tsx`

Update projects array:
```tsx
const projects = [
  {
    title: "Your Project",
    description: "Description",
    image: "/images/portfolio-X.jpg",
    category: "Business" | "E-commerce" | "Branding",
    tags: ["Tag1", "Tag2"],
    href: "/portfolio/your-slug",
  },
]
```

### Portfolio Details
**File**: `app/portfolio/[slug]/page.tsx`

Add new project details in the `projects` object:
```tsx
const projects: Record<string, any> = {
  "your-slug": {
    title: "Project Name",
    category: "Category",
    description: "Description",
    // ... full project details
  },
}
```

### Pricing Page
**File**: `components/PricingTable.tsx`

Update pricing tiers:
```tsx
const tiers: PricingTier[] = [
  {
    name: "Starter",
    monthlyPrice: 2499,
    yearlyPrice: 24990,
    features: [...],
    // ...
  },
]
```

### About Page
**File**: `app/about/page.tsx`

Update:
- Founder bio and photo
- Company timeline
- Values
- Process steps

### Contact Page
**File**: `app/contact/page.tsx`

Update:
- Contact information
- Business hours
- FAQs
- Calendly link (book a call CTA)

### Blog
**Files**: `app/blog/page.tsx` and `app/blog/[slug]/page.tsx`

Update `posts` array with your blog content.

## 🖼️ Images

**Directory**: `public/images/`

### Required Images:
1. **Logo**: `logo.svg` or `logo.png` (200x50px recommended)
2. **Hero**: `hero-main.jpg` (1920x1080px)
3. **Portfolio**: `portfolio-1.jpg` through `portfolio-9.jpg` (800x600px)
4. **Portfolio Details**: `portfolio-X-detail-Y.jpg` (1200x800px)
5. **Blog**: `blog-1.jpg` through `blog-6.jpg` (1200x675px)
6. **Team**: `team-lewis.jpg` (800x800px)
7. **About**: `about-hero.jpg` (1200x800px)
8. **Testimonials**: `testimonial-1.jpg` through `testimonial-3.jpg` (200x200px)
9. **OG Image**: `og-image.jpg` (1200x630px for social media)

### Image Optimization Tips:
- Use WebP format when possible
- Compress images (use TinyPNG or Squoosh)
- Always provide meaningful alt text
- Use Next.js `<Image>` component

## 💬 Testimonials

**File**: `components/TestimonialsCarousel.tsx`

Update the testimonials array:
```tsx
const testimonials = [
  {
    quote: "Your testimonial text",
    author: {
      name: "Client Name",
      title: "Position",
      company: "Company",
      image: "/images/testimonial-X.jpg",
    },
    rating: 5,
  },
]
```

## 💰 Pricing

**File**: `components/PricingTable.tsx`

Modify pricing details:
- Package names
- Prices (monthly and yearly)
- Features included
- CTA text

**File**: `app/pricing/page.tsx`

Update:
- Add-ons
- FAQs
- What's included list

## 📊 Analytics & Tracking

### Google Analytics

**File**: `.env.local`

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Get your ID from [analytics.google.com](https://analytics.google.com)

### Custom Event Tracking

**File**: `lib/analytics.ts`

Add custom events:
```tsx
export const trackCustomEvent = (eventName: string, data?: any) => {
  event({
    action: eventName,
    category: "custom",
    label: JSON.stringify(data),
  })
}
```

## 📧 Contact Form

### Formspree Setup

1. Go to [formspree.io](https://formspree.io)
2. Create a form
3. Copy the form ID
4. Add to `.env.local`:

```env
FORMSPREE_ENDPOINT=your_form_id_here
```

### Alternative Email Services

**File**: `app/api/contact/route.ts`

Replace Formspree with:
- SendGrid
- Mailgun
- Resend
- Your own SMTP server

## 🔗 Social Media Links

**File**: `components/Footer.tsx`

Update social media links:
```tsx
const navigation = {
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/yourpage",
      icon: Facebook,
    },
    // ... add more
  ],
}
```

## ⚙️ SEO Configuration

### Page Meta Tags

Each page has metadata. Example from any page file:

```tsx
export const metadata = generateSEOMetadata({
  title: "Your Page Title",
  description: "Your page description",
  url: "/your-page",
})
```

### Structured Data

**File**: `lib/seo.ts`

Update organization schema:
- Company name
- Contact info
- Social profiles
- Logo URL

## 🎨 Design Tokens

**File**: `tailwind.config.js`

Customize:
- Border radius: `--radius`
- Spacing scale (default Tailwind)
- Container width
- Breakpoints

## 📱 Mobile Menu

**File**: `components/Header.tsx`

The mobile menu automatically mirrors the desktop navigation.

## 🚀 Performance

### Image Loading

Use `priority` prop for above-the-fold images:
```tsx
<Image src="/hero.jpg" alt="Hero" fill priority />
```

### Font Loading

Already optimized with `next/font`. Fonts are self-hosted and optimized.

## 🎯 Call-to-Action (CTA) Text

Search for common CTA phrases and update:
- "Get Started"
- "Start Your Project"
- "Book a Call"
- "Contact Us"

## 📋 Quick Reference

### Where to Change Common Things

| What | File | Section |
|------|------|---------|
| Logo | `components/Header.tsx` & `Footer.tsx` | Logo components |
| Colors | `tailwind.config.js` | `colors` object |
| Fonts | `app/layout.tsx` | Google Fonts imports |
| Nav Menu | `components/Header.tsx` | `navigation` array |
| Footer Links | `components/Footer.tsx` | `navigation` object |
| Home Hero | `app/page.tsx` | `<Hero>` component |
| Services | `app/services/page.tsx` | `services` array |
| Portfolio | `app/portfolio/page.tsx` | `projects` array |
| Pricing | `components/PricingTable.tsx` | `tiers` array |
| Testimonials | `components/TestimonialsCarousel.tsx` | `testimonials` array |
| Contact Info | `app/contact/page.tsx` | `contactInfo` array |
| About Bio | `app/about/page.tsx` | Founder section |
| Blog Posts | `app/blog/page.tsx` | `posts` array |

## Need Help?

- Check `README.md` for setup instructions
- Check `SETUP.md` for detailed setup guide
- Review component files for inline comments
- Contact: lewis@g1creative.com

