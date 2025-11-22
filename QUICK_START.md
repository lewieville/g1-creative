# G1 Creative - Quick Start Guide

Get up and running in 5 minutes!

## ⚡ Super Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env.local

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - Done! 🎉

## 📦 Complete Installation

### Step 1: Install All Dependencies

```bash
npm install
npm install lucide-react framer-motion class-variance-authority clsx tailwind-merge
npm install -D tailwindcss-animate
```

### Step 2: Configure Environment

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
FORMSPREE_ENDPOINT=your_formspree_id
NEXT_PUBLIC_GA_ID=
```

### Step 3: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Priority

### 1. Brand Identity (5 min)
**File**: `tailwind.config.js`
```js
primary: { DEFAULT: '#0284c7' },  // Your main color
```

**File**: `public/logo.svg`
- Replace with your logo

### 2. Contact Info (3 min)
**File**: `components/Footer.tsx`
- Update email, phone, address

**File**: `app/contact/page.tsx`
- Update contact details

### 3. Home Page Hero (2 min)
**File**: `app/page.tsx`
- Change title and subtitle
- Update CTA text

### 4. Services (5 min)
**File**: `app/services/page.tsx`
- Customize service offerings
- Update features

### 5. Portfolio (10 min)
**File**: `app/portfolio/page.tsx`
- Add your projects
- Update images and descriptions

## 📸 Images Quick Setup

Place these in `public/images/`:
1. `logo.svg` - Your logo
2. `hero-main.jpg` - Main hero image
3. `portfolio-1.jpg` to `portfolio-3.jpg` - Featured projects
4. `testimonial-1.jpg` to `testimonial-3.jpg` - Client photos

**Placeholder sources**:
- [Unsplash](https://unsplash.com) - Free high-quality photos
- [Pexels](https://pexels.com) - Free stock photos

## 🚀 Build & Test

```bash
# Build for production
npm run build

# Test production build
npm run start

# Run tests
npm run test
```

## 🌐 Deploy in 2 Minutes

### Vercel (Easiest)
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Deploy
npx vercel
```

Or use the Vercel dashboard - it's even easier!

## 📋 Essential Files to Edit

### Must Edit:
1. `app/page.tsx` - Home page content
2. `app/about/page.tsx` - Your bio
3. `app/contact/page.tsx` - Contact details
4. `components/Footer.tsx` - Footer info
5. `tailwind.config.js` - Brand colors

### Should Edit:
6. `app/services/page.tsx` - Service details
7. `app/pricing/page.tsx` - Pricing info
8. `app/portfolio/page.tsx` - Projects

### Can Edit Later:
9. `app/blog/` - Blog posts
10. `lib/seo.ts` - SEO defaults

## 🎯 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run linter
npm run test         # Run tests

# Deployment
vercel               # Deploy to Vercel
netlify deploy       # Deploy to Netlify
```

## ❓ Quick Troubleshooting

### "Module not found"
```bash
npm install
```

### "Port 3000 already in use"
```bash
npm run dev -- -p 3001
```

### Images not loading
- Check images exist in `public/images/`
- File names are case-sensitive

### Build errors
```bash
npm run lint
# Fix any errors shown
```

## 📚 Full Documentation

- **Setup**: `SETUP.md` - Complete installation guide
- **Customization**: `CUSTOMIZATION.md` - How to customize everything
- **Deployment**: `DEPLOYMENT.md` - Deploy to any platform
- **Checklist**: `PROJECT_CHECKLIST.md` - Complete project checklist

## 🆘 Need Help?

1. Check `README.md` for overview
2. Review `SETUP.md` for detailed setup
3. See `CUSTOMIZATION.md` for specific changes
4. Contact: lewis@g1creative.com

## 🎉 Next Steps

1. [ ] Customize brand colors
2. [ ] Add your logo
3. [ ] Update contact information
4. [ ] Add portfolio projects
5. [ ] Replace placeholder images
6. [ ] Configure Formspree
7. [ ] Test everything
8. [ ] Deploy!

---

**You're ready to go!** Start customizing and make it yours. 🚀

