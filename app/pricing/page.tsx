import Link from "next/link"
import { Check, HelpCircle } from "lucide-react"
import { PricingTable } from "@/components/PricingTable"
import { Section } from "@/components/ui/Section"
import { MotionSection } from "@/components/MotionSection"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Web Design Pricing | Transparent Packages | G1 Creative",
  description: "Transparent web design pricing for small businesses. Custom website packages starting from $2,500. E-commerce, branding, and maintenance plans available. No hidden fees.",
  url: "/pricing",
})

const faqs = [
  {
    question: "What's included in the support period?",
    answer:
      "Support includes bug fixes, minor content updates, security patches, and technical assistance via email. Response time is typically within 24 hours on business days.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Absolutely! You can upgrade to a higher tier at any time. We'll credit your initial investment and only charge the difference.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment plans for projects over $5,000. Typically 50% upfront and 50% upon completion, or monthly installments for larger projects.",
  },
  {
    question: "What if I need custom features?",
    answer:
      "We love custom projects! Contact us for a detailed quote. We'll work with you to understand your requirements and provide a tailored proposal.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Hosting is not included in the base packages but we can recommend reliable hosting providers or manage hosting for you at an additional cost.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Starter packages typically take 2-3 weeks, Business packages 4-6 weeks, and E-commerce packages 6-8 weeks. Timeline depends on content availability and revisions.",
  },
]

const addons = [
  {
    name: "Additional Pages",
    price: "$800",
    description: "per page",
  },
  {
    name: "Logo Design",
    price: "$2,500",
    description: "3 concepts, unlimited revisions",
  },
  {
    name: "Copywriting",
    price: "$600",
    description: "per page",
  },
  {
    name: "Photography",
    price: "Custom",
    description: "Professional product/team photography",
  },
  {
    name: "Extended Support",
    price: "$800",
    description: "per month after initial period",
  },
  {
    name: "SEO Package",
    price: "$5,000",
    description: "Comprehensive SEO setup and optimization",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-luxury-bg cinematic-overlay pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-luxury-text mb-6 tracking-wide leading-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-luxury-muted leading-relaxed">
              Choose the package that fits your needs. All packages include responsive design, SEO basics, and ongoing support.
            </p>
          </div>
        </Container>
      </div>

      {/* Pricing Table */}
      <MotionSection className="bg-luxury-surface">
        <div className="gold-divider" />
        <PricingTable />
      </MotionSection>

      {/* Add-ons Section */}
      <MotionSection className="bg-luxury-bg">
        <div className="gold-divider" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            Optional Add-ons
          </h2>
          <p className="text-xl text-luxury-muted leading-relaxed">
            Enhance your package with these popular add-ons
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500"
            >
              <h3 className="text-xl font-heading font-semibold text-luxury-text mb-2 tracking-wide">
                {addon.name}
              </h3>
              <div className="text-3xl font-heading font-bold gold-shimmer mb-2">
                {addon.price}
              </div>
              <p className="text-sm text-luxury-muted">{addon.description}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* What's Included */}
      <MotionSection className="bg-luxury-surface">
        <div className="gold-divider" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            What&apos;s Always Included
          </h2>
          <p className="text-xl text-luxury-muted leading-relaxed">
            Every package comes with these essential features
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Fully responsive design",
            "Mobile-optimized",
            "Fast loading times",
            "SEO-friendly structure",
            "Security best practices",
            "Cross-browser compatible",
            "Analytics integration",
            "Contact form setup",
            "Social media integration",
            "Training & documentation",
            "Post-launch support",
            "Quality assurance testing",
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-luxury-muted">{feature}</span>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* FAQ Section */}
      <MotionSection className="bg-luxury-bg">
        <div className="gold-divider" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-luxury-muted leading-relaxed">
            Got questions? We&apos;ve got answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-heading font-semibold text-luxury-text mb-2 tracking-wide">
                    {faq.question}
                  </h3>
                  <p className="text-luxury-muted">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="bg-luxury-surface relative overflow-hidden">
        <div className="gold-divider" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-luxury-muted mb-8 leading-relaxed">
            Let&apos;s discuss your project and create a custom quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </>
  )
}


