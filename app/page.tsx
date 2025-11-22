import Link from "next/link"
import { Palette, ShoppingCart, Sparkles, TrendingUp, Award, Zap } from "lucide-react"
import { Hero } from "@/components/Hero"
import { ServiceCard } from "@/components/ServiceCard"
import { PortfolioCard } from "@/components/PortfolioCard"
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
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
        title="Transform Your Business with Award-Winning Web Design"
        subtitle="We craft stunning, high-performance websites that drive real results. From startups to established businesses, we bring your digital vision to life."
        primaryCTA={{ text: "Start Your Project", href: "/contact" }}
        secondaryCTA={{ text: "View Our Work", href: "/portfolio" }}
        image="/images/hero-main.jpg"
        imageAlt="Modern web design showcase"
      />

      {/* Stats Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-900 mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Our Services
          </h2>
          <p className="text-lg text-secondary-600">
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
      </Section>

      {/* Portfolio Section */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary-600">
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
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary-600">
            Don&apos;t just take our word for it - hear from our satisfied clients
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <TestimonialsCarousel />
        </div>
      </Section>

      {/* Pricing Teaser */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Affordable Pricing That Fits Your Budget
          </h2>
          <p className="text-lg text-secondary-600">
            Launch-ready packages starting at just $97/month • No hidden fees • Cancel anytime
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border-2 border-secondary-200 p-8 text-center hover:border-primary-300 transition-all">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2 font-heading">
              Starter
            </h3>
            <div className="text-4xl font-bold text-primary-600 mb-1 font-heading">
              $97
            </div>
            <div className="text-sm text-secondary-600 mb-4">/month or $997/year</div>
            <p className="text-secondary-600 mb-6">
              Perfect for small businesses and startups
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/pricing">Learn More</Link>
            </Button>
          </div>
          <div className="bg-white rounded-xl border-2 border-primary-600 p-8 text-center shadow-lg scale-105">
            <div className="bg-primary-600 text-white text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
              Best Value
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2 font-heading">
              Professional
            </h3>
            <div className="text-4xl font-bold text-primary-600 mb-1 font-heading">
              $197
            </div>
            <div className="text-sm text-secondary-600 mb-4">/month or $1,997/year</div>
            <p className="text-secondary-600 mb-6">
              Ideal for growing businesses
            </p>
            <Button asChild className="w-full">
              <Link href="/pricing">Learn More</Link>
            </Button>
          </div>
          <div className="bg-white rounded-xl border-2 border-secondary-200 p-8 text-center hover:border-primary-300 transition-all">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2 font-heading">
              E-commerce
            </h3>
            <div className="text-4xl font-bold text-primary-600 mb-1 font-heading">
              $297
            </div>
            <div className="text-sm text-secondary-600 mb-4">/month or $2,997/year</div>
            <p className="text-secondary-600 mb-6">
              Complete solution for online stores
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/pricing">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-4">
            🎁 <strong>Limited Time Offer:</strong> Get 2 months FREE when you pay annually!
          </p>
          <p className="text-sm text-secondary-500">
            All packages include FREE revisions • Money-back guarantee • Flexible payment plans
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let&apos;s discuss your project and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

