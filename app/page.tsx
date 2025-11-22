import Link from "next/link"
import { Palette, ShoppingCart, Sparkles, TrendingUp, Award, Zap } from "lucide-react"
import { Hero } from "@/components/Hero"
import { ServiceCard } from "@/components/ServiceCard"
import { PortfolioCard } from "@/components/PortfolioCard"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { MotionSection } from "@/components/MotionSection"
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo"

export const metadata = generateSEOMetadata()

const services = [
  {
    icon: Palette,
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
    icon: ShoppingCart,
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
    icon: Sparkles,
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
    title: "TechStart Inc",
    description: "Complete website redesign that increased conversion rates by 150% and reduced bounce rate by 45%.",
    image: "/images/portfolio-1.jpg",
    category: "Business",
    tags: ["Web Design", "SEO", "CMS"],
    href: "/portfolio/techstart-inc",
  },
  {
    title: "Urban Boutique",
    description: "Modern e-commerce platform that doubled online sales within 3 months of launch.",
    image: "/images/portfolio-2.jpg",
    category: "E-commerce",
    tags: ["Shopify", "Branding", "Marketing"],
    href: "/portfolio/urban-boutique",
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

const stats = [
  { label: "Projects Completed", value: "50+", icon: Award },
  { label: "Happy Clients", value: "40+", icon: Sparkles },
  { label: "Avg. Conversion Increase", value: "125%", icon: TrendingUp },
  { label: "Client Satisfaction", value: "98%", icon: Zap },
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
        title="Websites Built to Impress—and Convert"
        subtitle="Custom, results-driven websites for businesses that want more than templates."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Work", href: "/portfolio" }}
        image="/images/hero-main.jpg"
        imageAlt="Modern web design showcase"
        showScrollCue={true}
      />

      {/* Services Section */}
      <MotionSection className="bg-luxury-surface relative">
        <div className="gold-divider" />
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            Our Services
          </h2>
          <p className="text-xl text-luxury-muted leading-relaxed">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </MotionSection>

      {/* Portfolio Section */}
      <MotionSection className="bg-luxury-bg">
        <div className="gold-divider" />
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            Featured Projects
          </h2>
          <p className="text-xl text-luxury-muted leading-relaxed">
            See how we&apos;ve helped businesses achieve their digital goals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/portfolio">View Full Portfolio</Link>
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

