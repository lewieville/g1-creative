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
          "100% custom coded—no templates or page builders",
          "Launch in 4 weeks, not 4 months",
          "Built with cutting-edge tech that scales with you",
          "Average 142% increase in client conversions"
        ]}
        primaryCTA={{ text: "Let's Talk", href: "/contact" }}
        secondaryCTA={{ text: "Behind the Code", href: "/about" }}
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

      {/* What Makes Us Different Section */}
      <MotionSection className="bg-luxury-bg relative py-20 sm:py-24 md:py-28 lg:py-40">
        <div className="gold-divider" />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <span className="inline-block text-xs sm:text-sm tracking-caps uppercase text-gold mb-3 sm:mb-4 font-medium">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-luxury-text mb-4 sm:mb-6 lg:mb-8 tracking-tight leading-tight px-4 sm:px-0">
              No Templates. No Page Builders. Just Pure Custom Code.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-muted leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
              While other agencies use cookie-cutter templates and drag-and-drop builders, we write every line of code from scratch. Your website is built specifically for your business—not a modified template that hundreds of others are using.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-g1-glow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-luxury-text mb-3 sm:mb-4">
                100% Custom Coded
              </h3>
              <p className="text-luxury-muted leading-relaxed text-sm sm:text-base">
                Every website is built from the ground up with clean, hand-written code. No bloated page builders, no template limitations—just pure, optimized code that performs exactly how you need it to.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-g1-glow"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-luxury-text mb-3 sm:mb-4">
                Lightning Fast Performance
              </h3>
              <p className="text-luxury-muted leading-relaxed text-sm sm:text-base">
                Custom code means no unnecessary plugins or bloated frameworks. Your site loads faster, ranks better, and converts more visitors—because it&apos;s built lean and optimized from day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-g1-glow md:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-luxury-text mb-3 sm:mb-4">
                Unlimited Flexibility
              </h3>
              <p className="text-luxury-muted leading-relaxed text-sm sm:text-base">
                Need a unique feature? Want to integrate with a specific tool? Custom code means we can build anything you imagine—no template restrictions, no &quot;that&apos;s not possible&quot; limitations.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-6 glass-panel rounded-2xl border border-gold/20">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm sm:text-base font-semibold text-luxury-text mb-1">
                  Your website is one-of-a-kind
                </p>
                <p className="text-xs sm:text-sm text-luxury-muted">
                  Built specifically for your business, not a template shared by hundreds of others
                </p>
              </div>
            </div>
          </motion.div>
        </Container>
      </MotionSection>

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

