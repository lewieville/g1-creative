"use client"

import Link from "next/link"
import { Palette, ShoppingCart, Sparkles } from "lucide-react"
import { Hero } from "@/components/Hero"
import { ServiceCard } from "@/components/ServiceCard"
import { PortfolioCard } from "@/components/PortfolioCard"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { MotionSection } from "@/components/MotionSection"
import { motion } from "framer-motion"
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo"

const services = [
  {
    iconName: "Palette",
    title: "Web Design",
    description: "Beautiful, conversion-optimized websites that captivate your audience and drive results.",
    features: [
      "Responsive design for all devices",
      "User-centered UX/UI",
      "Modern, clean aesthetics",
      "Brand consistency",
    ],
    href: "/services#web-design",
  },
  {
    iconName: "ShoppingCart",
    title: "E-commerce",
    description: "Powerful online stores built to maximize sales and provide seamless shopping experiences.",
    features: [
      "Payment gateway integration",
      "Inventory management",
      "Secure checkout process",
      "Product catalog setup",
    ],
    href: "/services#ecommerce",
  },
  {
    iconName: "Sparkles",
    title: "Branding",
    description: "Distinctive brand identities that make your business stand out in the marketplace.",
    features: [
      "Logo design",
      "Brand strategy",
      "Style guides",
      "Marketing collateral",
    ],
    href: "/services#branding",
  },
]

const featuredProjects = [
  {
    title: "MICO",
    description: "Built a comprehensive web3 platform featuring custom AI agents, real-time blockchain stats via API integration, and an elegant interface for a crypto company pioneering human-centered intelligence.",
    image: "/images/project-4-mico.png",
    category: "Web3 & AI",
    tags: ["AI Agent", "API Integration", "Web3", "React"],
    href: "/portfolio/mico",
  },
  {
    title: "CTR Trades Journal",
    description: "Advanced trading journal platform with comprehensive analytics dashboard, real-time trade tracking, and multi-user database. Features auto-calculated metrics, performance analysis, and seamless backend integration for professional traders.",
    image: "/images/portfolio-2.jpg",
    category: "Trading Platform",
    tags: ["Backend", "Database", "Analytics", "React"],
    href: "/portfolio/ctr-trades",
  },
  {
    title: "GrowthLabs",
    description: "Professional corporate website with integrated CRM and marketing automation.",
    image: "/images/portfolio-3.jpg",
    category: "Business",
    tags: ["Web Design", "CRM", "Analytics"],
    href: "/portfolio/growthlabs",
  },
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema()),
        }}
      />

      {/* Hero Section */}
      <Hero
        title="Web Experiences Engineered for Growth"
        subtitle="Websites engineered to convert visitors into customers."
        primaryCTA={{ text: "Let's Talk", href: "/contact" }}
        image="/images/hero-main.jpg"
        imageAlt="Bespoke web design showcase"
        showScrollCue={true}
      />

      {/* Services Section */}
      <MotionSection className="bg-luxury-surface relative py-32 lg:py-40">
        <div className="gold-divider" />
        
        {/* Subtle background accents */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-gold mb-4 font-medium">
            Expertise
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-luxury-text mb-8 tracking-tight leading-tight">
            What We Do
          </h2>
          <p className="text-xl md:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto">
            Bespoke digital solutions crafted to elevate your brand and drive measurable growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/services" className="flex items-center gap-2">
              Explore All Capabilities
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </Button>
        </div>
      </MotionSection>

      {/* Insights Section */}
      <MotionSection className="bg-luxury-bg relative py-32 lg:py-40">
        <div className="gold-divider" />
        
        {/* Subtle background accents */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-block text-sm tracking-[0.2em] uppercase text-gold mb-4 font-medium">
            Case Studies
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-luxury-text mb-8 tracking-tight leading-tight">
            Insights
          </h2>
          <p className="text-xl md:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto">
            Real results from real partnerships. See how we transform businesses through strategic design and development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {featuredProjects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="group">
            <Link href="/insights" className="flex items-center gap-2">
              Explore the Change
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </Button>
        </div>
      </MotionSection>

      {/* Testimonials Section */}
      <MotionSection className="bg-luxury-surface">
        <div className="gold-divider" />
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            What Our Clients Say
          </h2>
          <p className="text-xl text-luxury-muted leading-relaxed">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <TestimonialsCarousel />
        </div>
      </MotionSection>

      {/* Pricing Teaser */}
      <MotionSection className="bg-luxury-bg">
        <div className="gold-divider" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            Affordable Pricing That Fits Your Budget
          </h2>
          <p className="text-xl text-luxury-muted leading-relaxed">
            Launch-ready packages starting at just $97/month • No hidden fees • Cancel anytime
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-panel p-8 text-center hover:shadow-g1-glow transition-all group">
            <h3 className="text-2xl font-heading font-bold text-luxury-text mb-2 tracking-wide">
              Starter
            </h3>
            <div className="text-5xl font-heading font-bold gold-shimmer mb-1">
              $97
            </div>
            <div className="text-sm text-luxury-muted mb-4">/month or $997/year</div>
            <p className="text-luxury-muted mb-6">
              Perfect for small businesses and startups
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/pricing">Learn More</Link>
            </Button>
          </div>
          <div className="glass-panel p-8 text-center ring-2 ring-gold shadow-g1-glow scale-105 group">
            <div className="bg-gold text-luxury-bg text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4 tracking-wide">
              Best Value
            </div>
            <h3 className="text-2xl font-heading font-bold text-luxury-text mb-2 tracking-wide">
              Professional
            </h3>
            <div className="text-5xl font-heading font-bold gold-shimmer mb-1">
              $197
            </div>
            <div className="text-sm text-luxury-muted mb-4">/month or $1,997/year</div>
            <p className="text-luxury-muted mb-6">
              Ideal for growing businesses
            </p>
            <Button asChild className="w-full">
              <Link href="/pricing">Learn More</Link>
            </Button>
          </div>
          <div className="glass-panel p-8 text-center hover:shadow-g1-glow transition-all group">
            <h3 className="text-2xl font-heading font-bold text-luxury-text mb-2 tracking-wide">
              E-commerce
            </h3>
            <div className="text-5xl font-heading font-bold gold-shimmer mb-1">
              $297
            </div>
            <div className="text-sm text-luxury-muted mb-4">/month or $2,997/year</div>
            <p className="text-luxury-muted mb-6">
              Complete solution for online stores
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/pricing">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-luxury-muted mb-4">
            <span className="text-gold">✦</span> <strong>Limited Time Offer:</strong> Get 2 months FREE when you pay annually!
          </p>
          <p className="text-sm text-luxury-muted">
            All packages include FREE revisions • Money-back guarantee • Flexible payment plans
          </p>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="bg-luxury-surface relative overflow-hidden">
        <div className="gold-divider" />
        {/* Decorative gold orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-luxury-muted mb-8 leading-relaxed">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </>
  )
}

