import { MetadataRoute } from 'next'

// Blog posts data - matches the structure in app/blog/page.tsx
// Update this array when adding new blog posts
const posts = [
  {
    slug: "web-design-trends-2024",
    date: "2024-01-15",
  },
  {
    slug: "optimize-website-conversions",
    date: "2024-01-10",
  },
  {
    slug: "ecommerce-seo-guide",
    date: "2024-01-05",
  },
  {
    slug: "mobile-first-website-importance",
    date: "2023-12-28",
  },
  {
    slug: "building-standout-brand",
    date: "2023-12-20",
  },
  {
    slug: "web-accessibility-guide",
    date: "2023-12-15",
  },
]

// Base URL - update this to your production domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://g1creative.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()
  
  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Portfolio pages
  const portfolioPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/portfolio/ctr-trades`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/mico`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/tradesvilles`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Blog posts - dynamic from posts array
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all pages
  return [...staticPages, ...portfolioPages, ...blogPosts]
}

