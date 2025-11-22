import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://g1creative.com"
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "G1 Creative"

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  author?: string
  noIndex?: boolean
}

export function generateMetadata({
  title = "G1 Creative - Award-Winning Web Design & Development Agency",
  description = "Transform your business with stunning, high-performance websites. G1 Creative specializes in web design, e-commerce, branding, and digital marketing solutions that drive results.",
  image = "/images/og-image.jpg",
  url = "",
  type = "website",
  publishedTime,
  author,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullUrl = `${siteUrl}${url}`
  const ogImage = image.startsWith("http") ? image : `${siteUrl}${image}`

  const metadata: Metadata = {
    title: title.includes(siteName) ? title : `${title} | ${siteName}`,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@g1creative",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  }

  if (type === "article" && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: "article",
      publishedTime,
      authors: author ? [author] : undefined,
    }
  }

  return metadata
}

/**
 * Generate JSON-LD schema for organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.svg`,
    description:
      "G1 Creative is a web design and development agency specializing in creating high-performance, conversion-optimized websites for businesses.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "g1.creative.web@gmail.com",
      telephone: "+1-239-255-4733",
    },
    sameAs: [
      "https://twitter.com/g1creative",
      "https://linkedin.com/company/g1creative",
      "https://github.com/g1creative",
    ],
  }
}

/**
 * Generate JSON-LD schema for website
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

/**
 * Generate JSON-LD schema for local business
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    image: `${siteUrl}/images/logo.svg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: "+1-239-255-4733",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lexington",
      addressRegion: "VA",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  }
}

