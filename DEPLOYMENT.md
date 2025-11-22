# Deployment Guide

Complete guide for deploying G1 Creative to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] All images added to `public/images/`
- [ ] Content updated with your information
- [ ] Environment variables configured
- [ ] Tested locally (`npm run build && npm run start`)
- [ ] No console errors or warnings
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Tested on multiple devices and browsers
- [ ] Meta tags and SEO configured
- [ ] Contact form tested with real Formspree endpoint
- [ ] Analytics configured (if using)

## Vercel (Recommended)

Vercel is the easiest option for Next.js deployments.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables**
   In Vercel dashboard, go to Settings > Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   FORMSPREE_ENDPOINT=your_formspree_form_id
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in 2-3 minutes!

5. **Custom Domain**
   - Go to Settings > Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Vercel CLI (Alternative)

```bash
npm i -g vercel
vercel login
vercel
```

## Netlify

### Steps:

1. **Push to GitHub** (same as above)

2. **Import to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect to GitHub
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

4. **Environment Variables**
   Go to Site settings > Build & deploy > Environment:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   FORMSPREE_ENDPOINT=your_formspree_form_id
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

6. **Custom Domain**
   - Go to Domain settings
   - Add custom domain
   - Configure DNS

### Netlify CLI (Alternative)

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## AWS Amplify

### Steps:

1. **Push to GitHub**

2. **Create New App**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" > "Host web app"
   - Connect your Git provider

3. **Build Settings**
   Amplify should auto-detect Next.js. If not, use:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Environment Variables**
   Add in Console under App settings > Environment variables

5. **Deploy**
   - Save and deploy
   - Amplify will build and deploy automatically

## Cloudflare Pages

### Steps:

1. **Push to GitHub**

2. **Create New Project**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect to GitHub

3. **Build Configuration**
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `.next`

4. **Environment Variables**
   Add in Settings > Environment variables

5. **Deploy**
   - Click "Save and Deploy"

## Railway

### Steps:

1. **Push to GitHub**

2. **New Project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"

3. **Configuration**
   Railway auto-detects Next.js. Add environment variables in Variables tab.

4. **Deploy**
   - Railway will automatically deploy
   - Get your URL from Settings

## DigitalOcean App Platform

### Steps:

1. **Push to GitHub**

2. **Create App**
   - Go to [DigitalOcean Apps](https://cloud.digitalocean.com/apps)
   - Click "Create App"
   - Choose GitHub source

3. **Configuration**
   - Detected as Next.js
   - Set build command: `npm run build`
   - Set run command: `npm run start`

4. **Environment Variables**
   Add in Settings

5. **Deploy**
   - Click "Create Resources"

## Custom VPS/Server

If you want to deploy on your own server:

### 1. Set Up Server

```bash
# SSH into your server
ssh user@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 (process manager)
sudo npm install -g pm2
```

### 2. Clone and Build

```bash
# Clone your repository
git clone your-repo-url
cd g1-creative

# Install dependencies
npm ci

# Create environment file
nano .env.local
# Add your environment variables

# Build
npm run build
```

### 3. Run with PM2

```bash
# Start application
pm2 start npm --name "g1-creative" -- start

# Save PM2 configuration
pm2 save

# Set up PM2 to start on boot
pm2 startup
```

### 4. Set Up Nginx (Reverse Proxy)

```bash
sudo apt install nginx

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/g1creative
```

Add:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/g1creative /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 5. SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Post-Deployment

### 1. Verify Deployment

- [ ] Visit your live URL
- [ ] Test all pages
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Verify analytics tracking
- [ ] Test all links

### 2. Set Up Monitoring

**Vercel Analytics** (if using Vercel):
- Automatically included
- View in Vercel dashboard

**Google Search Console**:
- Go to [search.google.com/search-console](https://search.google.com/search-console)
- Add your property
- Verify ownership
- Submit sitemap: `https://yourdomain.com/sitemap.xml`

**Uptime Monitoring**:
- Use services like:
  - UptimeRobot
  - Pingdom
  - StatusCake

### 3. Performance Optimization

Run Lighthouse audit:
```bash
npm install -g @lhci/cli
lhci autorun
```

Aim for scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### 4. Configure CDN (Optional)

For additional speed:
- Cloudflare (free)
- Amazon CloudFront
- Fastly

### 5. Set Up Backups

- Automated daily backups of database (if applicable)
- Version control (Git)
- Environment variables backup

## Continuous Deployment

Set up automatic deployments on git push:

### Vercel
- Automatically set up
- Every push to `main` triggers deployment

### Netlify
- Automatically set up
- Configure in Build settings

### GitHub Actions
Already configured in `.github/workflows/ci.yml`

Add deployment step:
```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v20
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.ORG_ID }}
    vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Troubleshooting

### Build Fails

Check:
- All dependencies installed
- No TypeScript errors
- Environment variables set
- Node version (18+)

### Images Not Loading

- Ensure images exist in `public/images/`
- Check file paths (case-sensitive)
- Verify image formats (jpg, png, svg, webp)

### Environment Variables Not Working

- Must start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding new variables
- Check for typos

### 404 Errors

- Ensure all dynamic routes have data
- Check `generateStaticParams()` functions
- Verify deployment settings

### Slow Performance

- Optimize images (compress, use WebP)
- Check bundle size
- Enable CDN
- Optimize fonts

## Domain Configuration

### DNS Settings

For most setups, you'll need:

**A Record**:
```
Type: A
Name: @
Value: [Server IP or provided by host]
```

**CNAME Record** (www):
```
Type: CNAME
Name: www
Value: yourdomain.com
```

**Vercel/Netlify**:
Follow their specific DNS instructions in the dashboard.

### SSL Certificate

Most platforms (Vercel, Netlify) automatically provision SSL certificates.

For custom servers, use Let's Encrypt (free).

## Cost Estimates

### Vercel (Recommended)
- **Hobby**: Free for personal projects
- **Pro**: $20/month for professional use

### Netlify
- **Starter**: Free
- **Pro**: $19/month

### AWS Amplify
- Pay as you go
- ~$10-30/month for typical traffic

### DigitalOcean
- Starts at $5/month

### Custom VPS
- $5-10/month (DigitalOcean, Linode, Vultr)
- Plus domain (~$12/year)

## Support

For deployment issues:
- Check platform documentation
- Review build logs
- Contact: lewis@g1creative.com

## Next Steps After Deployment

1. Submit site to Google Search Console
2. Set up Google Analytics
3. Create sitemap (auto-generated at `/sitemap.xml`)
4. Monitor performance and errors
5. Set up regular backups
6. Plan content updates
7. Monitor form submissions

---

Congratulations! Your site is now live! 🎉

