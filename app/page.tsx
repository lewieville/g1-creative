"use client"

import Link from "next/link"
import { Palette, ShoppingCart, Sparkles } from "lucide-react"
import dynamic from "next/dynamic"
import { Hero } from "@/components/Hero"
import { ServiceCard } from "@/components/ServiceCard"
import { PortfolioCard } from "@/components/PortfolioCard"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { MotionSection } from "@/components/MotionSection"
import { CinematicSection } from "@/components/CinematicSection"
import { DynamicCTA } from "@/components/DynamicCTA"
import { motion } from "framer-motion"
import { generateOrganizationSchema, generateWebsiteSchema, generateLocalBusinessSchema } from "@/lib/seo"

// Lazy load heavy components below the fold
const TestimonialsCarousel = dynamic(() => import("@/components/TestimonialsCarousel").then(mod => ({ default: mod.TestimonialsCarousel })), {
  ssr: false,
  loading: () => <div className="h-64 flex items-center justify-center text-luxury-muted">Loading testimonials...</div>,
})

const FAQ = dynamic(() => import("@/components/FAQ").then(mod => ({ default: mod.FAQ })), {
  ssr: true,
  loading: () => null,
})

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      {/* Hero Section */}
      <Hero
        problem="You deserve a digital presence that attracts customers, not scares them away."
        agitate="Whether you're starting from scratch or need a complete overhaul,"
        solution="We build websites that turn browsers into buyers."
        benefits={[
          "Get a website that converts 3x better than templates",
          "Launch in 4 weeks, not 4 months",
          "Built with cutting-edge tech that scales with you",
          "Average 142% increase in client conversions"
        ]}
        primaryCTA={{ text: "Let's Talk", href: "/contact" }}
        secondaryCTA={{ text: "Learn Who's Behind the Code", href: "/about" }}
        image="/images/hero-main.jpg"
        imageAlt="Bespoke web design showcase"
        showScrollCue={true}
      />

      {/* Cinematic Story: The Problem */}
      <CinematicSection
        subtitle="The Challenge"
        title="Most websites fail in the first 8 seconds"
        description="Your visitors judge your credibility instantly. A slow, outdated, or confusing website means lost revenue. Every second counts when it comes to converting browsers into buyers."
        image="/images/the-challenge.png"
        imageAlt="Website analytics showing visitor behavior"
      >
        <div className="flex flex-wrap gap-3">
          <div className="glass-panel px-4 py-2 rounded-lg border border-gold/20">
            <span className="text-gold font-semibold font-accent">8 seconds</span>
            <span className="text-luxury-muted text-sm ml-2">Average attention span</span>
          </div>
          <div className="glass-panel px-4 py-2 rounded-lg border border-gold/20">
            <span className="text-gold font-semibold font-accent">75%</span>
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
        
        {/* GradientMesh removed - performance optimization */}
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              <span className="inline-block text-xs sm:text-sm tracking-caps uppercase text-gold mb-3 sm:mb-4 font-medium">
                Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-luxury-text mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4 sm:px-0">
                What We Do
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                Bespoke digital solutions crafted to elevate your brand and drive measurable growth
              </p>
            </div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center">
              <Button asChild size="lg" variant="outline" className="group w-full sm:w-auto min-h-[56px]">
                <Link href="/services" className="flex items-center gap-2 justify-center">
                  Explore All Capabilities
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </MotionSection>

      {/* Insights Section */}
      <MotionSection className="bg-luxury-bg relative py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        
        {/* GradientMesh removed - performance optimization */}
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              <span className="inline-block text-xs sm:text-sm tracking-caps uppercase text-gold mb-3 sm:mb-4 font-medium">
                Case Studies
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-luxury-text mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4 sm:px-0">
                Insights
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                Real results from real partnerships. See how we transform businesses through strategic design and development
              </p>
            </div>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                style={{ willChange: "transform, opacity" }}
              >
                <PortfolioCard {...project} />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center">
              <Button asChild size="lg" className="group w-full sm:w-auto min-h-[56px]">
                <Link href="/insights" className="flex items-center gap-2 justify-center">
                  Explore the Change
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </MotionSection>

      {/* Testimonials Section */}
      <MotionSection className="bg-luxury-surface relative py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        
        {/* Animated gradient mesh background - removed duplicate */}
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20 relative z-10">
            <span className="inline-block text-xs sm:text-sm tracking-caps uppercase text-gold mb-3 sm:mb-4 font-medium">
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

      {/* FAQ Section */}
      <MotionSection className="bg-luxury-bg relative py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        {/* GradientMesh removed - too many instances */}
        
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block text-xs sm:text-sm tracking-caps uppercase text-gold mb-3 sm:mb-4 font-medium">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-luxury-text mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4 sm:px-0">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              Everything you need to know about working with G1 Creative
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FAQ
              items={[
                {
                  question: "How long does a new website take?",
                  answer: "Most projects take 4-6 weeks depending on complexity. Simple brochure sites can be completed in 3-4 weeks, while e-commerce platforms with custom features typically take 6-8 weeks. We'll provide a detailed timeline during your consultation.",
                },
                {
                  question: "Do you work with small businesses?",
                  answer: "Absolutely! We specialize in creating high-converting websites for small businesses and startups. Our packages are designed to be affordable while delivering enterprise-level quality and results.",
                },
                {
                  question: "What's included in your web design services?",
                  answer: "Our web design services include responsive design, custom UI/UX, SEO optimization, content management system setup, performance optimization, and 30 days of free support. We also provide training on how to manage your website.",
                },
                {
                  question: "Can you redesign my existing website?",
                  answer: "Yes! We offer website redesign services to modernize your current site, improve conversions, and enhance user experience. We'll analyze your current site and create a strategy to improve performance and results.",
                },
                {
                  question: "Do you provide ongoing maintenance?",
                  answer: "Yes, we offer monthly maintenance plans that include security updates, performance monitoring, content updates, and technical support. This ensures your website stays fast, secure, and up-to-date.",
                },
                {
                  question: "Will my website be mobile-friendly?",
                  answer: "Absolutely! All our websites are built mobile-first and fully responsive. Your site will look and function perfectly on all devices - phones, tablets, and desktops. Mobile optimization is crucial for SEO and user experience.",
                },
              ]}
            />
          </div>
        </Container>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="bg-luxury-surface relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        {/* GradientMesh removed - too many instances */}
        
        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-xs sm:text-sm tracking-caps uppercase text-gold mb-3 sm:mb-4 font-medium">
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

