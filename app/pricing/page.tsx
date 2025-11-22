import Link from "next/link"
import { Check, HelpCircle } from "lucide-react"
import { PricingTable } from "@/components/PricingTable"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Pricing - Transparent Web Design Packages",
  description: "Clear, transparent pricing for web design, e-commerce, and branding services. Flexible packages designed to fit your budget and goals.",
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
    price: "$200",
    description: "per page",
  },
  {
    name: "Logo Design",
    price: "$500",
    description: "3 concepts, unlimited revisions",
  },
  {
    name: "Copywriting",
    price: "$150",
    description: "per page",
  },
  {
    name: "Photography",
    price: "Custom",
    description: "Professional product/team photography",
  },
  {
    name: "Extended Support",
    price: "$200",
    description: "per month after initial period",
  },
  {
    name: "SEO Package",
    price: "$1,500",
    description: "Comprehensive SEO setup and optimization",
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-heading">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Choose the package that fits your needs. All packages include responsive design, SEO basics, and ongoing support.
            </p>
          </div>
        </Container>
      </div>

      {/* Pricing Table */}
      <Section className="bg-white">
        <PricingTable />
      </Section>

      {/* Add-ons Section */}
      <Section className="bg-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Optional Add-ons
          </h2>
          <p className="text-lg text-secondary-600">
            Enhance your package with these popular add-ons
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-secondary-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2 font-heading">
                {addon.name}
              </h3>
              <div className="text-2xl font-bold text-primary-600 mb-2 font-heading">
                {addon.price}
              </div>
              <p className="text-sm text-secondary-600">{addon.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What's Included */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            What&apos;s Always Included
          </h2>
          <p className="text-lg text-secondary-600">
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
              <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="text-secondary-700">{feature}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-secondary-600">
            Got questions? We&apos;ve got answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-secondary-200 p-6"
            >
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2 font-heading">
                    {faq.question}
                  </h3>
                  <p className="text-secondary-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let&apos;s discuss your project and create a custom quote tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">Request a Quote</Link>
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

