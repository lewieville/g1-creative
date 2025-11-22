import { Palette, ShoppingCart, Sparkles, Wrench, TrendingUp, Code, Smartphone, Shield } from "lucide-react"
import { ServiceCard } from "@/components/ServiceCard"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Services - Professional Web Design & Development",
  description: "Comprehensive web design, e-commerce, branding, maintenance, and SEO services. Expert solutions tailored to grow your business online.",
  url: "/services",
})

const services = [
  {
    icon: Palette,
    title: "Web Design & Development",
    description: "Custom websites that combine stunning aesthetics with powerful functionality to deliver exceptional user experiences and drive conversions.",
    features: [
      "Responsive mobile-first design",
      "User-centered UX/UI design",
      "Custom WordPress or React development",
      "Fast loading & optimized performance",
      "Accessibility (WCAG 2.1 AA compliant)",
      "SEO-friendly architecture",
      "Content Management System (CMS)",
      "Analytics & conversion tracking",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Powerful online stores built on platforms like Shopify or custom solutions that maximize sales and provide seamless shopping experiences.",
    features: [
      "Custom store design & branding",
      "Product catalog setup (up to 100+ products)",
      "Secure payment gateway integration",
      "Shopping cart & checkout optimization",
      "Inventory management system",
      "Order tracking & notifications",
      "Customer account portal",
      "Email marketing integration",
      "Analytics & sales reporting",
    ],
  },
  {
    icon: Sparkles,
    title: "Brand Identity & Design",
    description: "Distinctive brand identities that make your business memorable and stand out in a crowded marketplace.",
    features: [
      "Logo design & variations",
      "Brand strategy & positioning",
      "Color palette & typography",
      "Brand style guide",
      "Business card design",
      "Marketing collateral",
      "Social media templates",
      "Brand guidelines documentation",
    ],
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    description: "Ongoing maintenance, updates, and support to keep your website secure, fast, and running smoothly.",
    features: [
      "Monthly software updates",
      "Security monitoring & patches",
      "Performance optimization",
      "Regular backups",
      "Content updates (up to 5 hours/month)",
      "Bug fixes & troubleshooting",
      "Uptime monitoring",
      "Priority email support",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Strategic search engine optimization and digital marketing services to increase your visibility and drive qualified traffic.",
    features: [
      "Keyword research & strategy",
      "On-page SEO optimization",
      "Technical SEO audit",
      "Local SEO (Google Business Profile)",
      "Content strategy & creation",
      "Link building",
      "Analytics & reporting",
      "Conversion rate optimization",
    ],
  },
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Bespoke web applications tailored to your specific business processes and requirements.",
    features: [
      "Custom feature development",
      "API integrations",
      "Database design & optimization",
      "User authentication systems",
      "Admin dashboards",
      "Third-party service integration",
      "Scalable architecture",
      "Documentation & training",
    ],
  },
]

const processSteps = [
  {
    icon: Sparkles,
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and competitive landscape to create a winning strategy.",
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Our designers create beautiful mockups and interactive prototypes for your review and feedback.",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Our developers bring the designs to life with clean, efficient code, followed by rigorous testing.",
  },
  {
    icon: TrendingUp,
    title: "Launch & Optimization",
    description: "We launch your site and continuously monitor and optimize for peak performance and results.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-heading">
              Services That Drive Results
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Comprehensive digital solutions designed to help your business thrive online. From beautiful websites to powerful e-commerce platforms, we&apos;ve got you covered.
            </p>
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Our Process
          </h2>
          <p className="text-lg text-secondary-600">
            A proven methodology that ensures successful project delivery
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <step.icon className="w-8 h-8" />
              </div>
              <div className="text-primary-600 font-bold mb-2 font-heading">
                Step {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-heading">
                {step.title}
              </h3>
              <p className="text-secondary-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-heading">
              Why Choose G1 Creative?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-heading">
                    Proven Track Record
                  </h3>
                  <p className="text-secondary-600">
                    50+ successful projects with an average 125% increase in client conversions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-heading">
                    Mobile-First Approach
                  </h3>
                  <p className="text-secondary-600">
                    Every website we build is optimized for mobile devices where most traffic comes from.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-heading">
                    Results-Driven
                  </h3>
                  <p className="text-secondary-600">
                    We focus on metrics that matter - conversions, engagement, and ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-12">
            <div className="space-y-6">
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2 font-heading">
                  98%
                </div>
                <div className="text-secondary-700">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2 font-heading">
                  50+
                </div>
                <div className="text-secondary-700">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary-600 mb-2 font-heading">
                  125%
                </div>
                <div className="text-secondary-700">Avg. Conversion Increase</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let&apos;s discuss your project and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

