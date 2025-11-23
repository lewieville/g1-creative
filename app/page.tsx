"use client"

import Link from "next/link"
import { Palette, ShoppingCart, Sparkles } from "lucide-react"
import { Hero } from "@/components/Hero"
import { ServiceCard } from "@/components/ServiceCard"
import { PortfolioCard } from "@/components/PortfolioCard"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { MotionSection } from "@/components/MotionSection"
import { CinematicSection } from "@/components/CinematicSection"
import { ScrollReveal } from "@/components/ScrollReveal"
import { DynamicCTA } from "@/components/DynamicCTA"
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
  },
  {
    title: "CTR Trades Journal",
    description: "Advanced trading journal platform with comprehensive analytics dashboard, real-time trade tracking, and multi-user database. Features auto-calculated metrics, performance analysis, and seamless backend integration for professional traders.",
    image: "/images/ctr-trades-main.png",
    category: "Trading Platform",
    tags: ["Backend", "Database", "Analytics", "React"],
  },
  {
    title: "Tradesvilles Crypto Program",
    description: "Comprehensive trading education platform with interactive learning journey, TradingView integration, and real-time market analysis. Built to teach trading from zero with step-by-step progression and progress tracking.",
    image: "/images/tradevilles-1.png",
    category: "Education Platform",
    tags: ["TradingView", "Interactive", "Education", "React"],
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
        problem="Your website isn't converting. Visitors leave in 8 seconds."
        agitate="Meanwhile, your competitors are capturing those leads."
        solution="We build websites that turn browsers into buyers."
        benefits={[
          "Get a website that converts 3x better than templates",
          "Launch in 4 weeks, not 4 months",
          "Built with cutting-edge tech that scales with you",
          "Average 142% increase in client conversions"
        ]}
        primaryCTA={{ text: "Let's Talk", href: "/contact" }}
        image="/images/hero-main.jpg"
        imageAlt="Bespoke web design showcase"
        showScrollCue={true}
      />

      {/* Cinematic Story: The Problem */}
      <CinematicSection
        subtitle="The Challenge"
        title="Most websites fail in the first 8 seconds"
        description="Your visitors judge your credibility instantly. A slow, outdated, or confusing website means lost revenue. Every second counts when it comes to converting browsers into buyers."
        image="/images/hero-main.jpg"
        imageAlt="Website analytics showing visitor behavior"
      >
        <div className="flex flex-wrap gap-3">
          <div className="glass-panel px-4 py-2 rounded-lg border border-gold/20">
            <span className="text-gold font-semibold">8 seconds</span>
            <span className="text-luxury-muted text-sm ml-2">Average attention span</span>
          </div>
          <div className="glass-panel px-4 py-2 rounded-lg border border-gold/20">
            <span className="text-gold font-semibold">75%</span>
            <span className="text-luxury-muted text-sm ml-2">Judge by design</span>
          </div>
        </div>
      </CinematicSection>

      {/* Cinematic Story: The Solution */}
      <CinematicSection
        subtitle="The Solution"
        title="We build experiences that convert"
        description="Every pixel, every interaction, every line of code is crafted with one goal: turning your visitors into customers. We combine stunning design with conversion psychology to create websites that actually work for your business."
        image="/images/mico-1.png"
        imageAlt="High-converting website design showcase"
        reverse
      >
        <Link href="/services">
          <Button size="lg" className="shadow-g1-glow">
            Explore Our Process →
          </Button>
        </Link>
      </CinematicSection>

      {/* Services Section */}
      <MotionSection className="bg-luxury-surface relative py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        
        {/* Subtle background accents - reduced on mobile */}
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3 sm:mb-4 font-medium">
              Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-luxury-text mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4 sm:px-0">
              What We Do
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              Bespoke digital solutions crafted to elevate your brand and drive measurable growth
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.2}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="group w-full sm:w-auto min-h-[56px]">
              <Link href="/services" className="flex items-center gap-2 justify-center">
                Explore All Capabilities
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </Button>
          </div>
        </Container>
      </MotionSection>

      {/* Insights Section */}
      <MotionSection className="bg-luxury-bg relative py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        
        {/* Subtle background accents - reduced on mobile */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-56 sm:w-96 h-56 sm:h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3 sm:mb-4 font-medium">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-luxury-text mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4 sm:px-0">
              Insights
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              Real results from real partnerships. See how we transform businesses through strategic design and development
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.15}>
                <PortfolioCard {...project} />
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="group w-full sm:w-auto min-h-[56px]">
              <Link href="/insights" className="flex items-center gap-2 justify-center">
                Explore the Change
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </Button>
          </div>
        </Container>
      </MotionSection>

      {/* Testimonials Section */}
      <MotionSection className="bg-luxury-surface relative py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        
        {/* Subtle background accents - reduced on mobile */}
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-56 sm:w-96 h-56 sm:h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-56 sm:w-96 h-56 sm:h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 relative z-10">
            <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3 sm:mb-4 font-medium">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-luxury-text mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4 sm:px-0">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              Don&apos;t just take our word for it—hear from the businesses we&apos;ve transformed
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <TestimonialsCarousel />
          </div>
        </Container>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="bg-luxury-surface relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        {/* Decorative gold orbs - reduced on mobile */}
        <div className="absolute top-0 right-0 w-56 sm:w-96 h-56 sm:h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 sm:w-96 h-56 sm:h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-xs sm:text-sm tracking-[0.2em] uppercase text-gold mb-3 sm:mb-4 font-medium">
              How We Deliver
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-luxury-text mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4 sm:px-0">
              Launch Faster. Launch Smarter.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0">
              We craft polished, ready-to-ship products designed to meet your business objectives from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <DynamicCTA 
                href="/contact#schedule-call"
                size="xl"
                className="shadow-g1-glow w-full sm:w-auto min-h-[56px]"
              />
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  )
}

