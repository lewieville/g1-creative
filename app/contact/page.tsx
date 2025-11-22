import { Mail, Phone, MapPin, Clock, MessageSquare, LucideIcon } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { Section } from "@/components/ui/Section"
import { MotionSection } from "@/components/MotionSection"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Phone,
  MapPin,
  Clock,
}

export const metadata = generateSEOMetadata({
  title: "Contact Us - Book Your Free Consultation | G1 Creative",
  description: "Ready to grow your business with a premium website? Contact G1 Creative today to book your free consultation and discuss your project.",
  url: "/contact",
})

const contactInfo = [
  {
    iconName: "Mail",
    title: "Email",
    value: "g1.creative.web@gmail.com",
    link: "mailto:g1.creative.web@gmail.com",
  },
  {
    iconName: "Phone",
    title: "Phone",
    value: "(239) 255-4733",
    link: "tel:+12392554733",
  },
  {
    iconName: "MapPin",
    title: "Location",
    value: "Lexington, Virginia",
    link: null,
  },
  {
    iconName: "Clock",
    title: "Business Hours",
    value: "Mon-Fri: 9:00 AM - 5:00 PM EST",
    link: null,
  },
]

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity. A standard website takes 4-6 weeks, while e-commerce sites may take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What information do you need to get started?",
    answer:
      "We'll need details about your business, goals, target audience, design preferences, and any specific features you need. Don't worry - we'll guide you through this during our discovery call.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes! All packages include initial support, and we offer monthly maintenance plans starting at $200/month for ongoing updates, security, and support.",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-luxury-bg cinematic-overlay pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-luxury-text mb-6 tracking-wide leading-tight">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-xl text-luxury-muted leading-relaxed">
              Book your free consultation today. We&apos;d love to hear about your project and show you how we can help grow your business with a premium website.
            </p>
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <MotionSection className="bg-luxury-surface">
        <div className="gold-divider" />
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
              Send Us a Message
            </h2>
            <p className="text-luxury-muted mb-8 text-lg">
              Have a question or ready to get started? Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
              Get in Touch
            </h2>
            <p className="text-luxury-muted mb-8 text-lg">
              Prefer to reach out directly? Here&apos;s how you can contact us.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = iconMap[item.iconName] || Mail
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg glass-panel text-gold flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gold mb-1 tracking-wide">
                        {item.title}
                      </div>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-luxury-text font-medium hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-luxury-text font-medium">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Schedule Call CTA */}
            <div className="glass-panel rounded-xl p-8 shadow-g1-glow border border-gold/20">
              <div className="flex items-start gap-4 mb-6">
                <MessageSquare className="w-8 h-8 flex-shrink-0 text-gold" />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-luxury-text mb-2 tracking-wide">
                    Book a Free Consultation
                  </h3>
                  <p className="text-luxury-muted">
                    Prefer to talk directly? Schedule a 30-minute consultation call to discuss your project goals and how we can help.
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full"
              >
                <a
                  href="https://calendly.com/g1creative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Your Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* FAQ Section */}
      <MotionSection className="bg-luxury-bg">
        <div className="gold-divider" />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
            Quick Answers
          </h2>
          <p className="text-xl text-luxury-muted leading-relaxed">
            Common questions we get from new clients
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-panel p-6 hover:shadow-g1-glow transition-all duration-500"
            >
              <h3 className="text-xl font-heading font-semibold text-luxury-text mb-2 tracking-wide">
                {faq.question}
              </h3>
              <p className="text-luxury-muted">{faq.answer}</p>
            </div>
          ))}
        </div>
      </MotionSection>
    </>
  )
}


