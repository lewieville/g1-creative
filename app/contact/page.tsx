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
  description: "Ready to grow your business with a bespoke website? Contact G1 Creative today to book your free consultation and discuss your project.",
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
              Your Next Big Step Starts Here
            </h1>
            <p className="text-xl text-luxury-muted leading-relaxed">
              Schedule your free consultation and discover how a strategic, custom-built website can move your business forward.
            </p>
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <MotionSection className="bg-luxury-surface">
        <div className="gold-divider" />
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="mt-12 lg:mt-0 lg:pl-8">
            <h2 className="text-4xl font-heading font-bold text-luxury-text mb-4 tracking-wide">
              Get in Touch
            </h2>
            <p className="text-luxury-muted mb-10 text-lg">
              Prefer to reach out directly? Here&apos;s how you can contact us.
            </p>

            <div className="space-y-8 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = iconMap[item.iconName] || Mail
                return (
                  <div key={index}>
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg glass-panel text-gold flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="text-sm text-gold mb-2 tracking-wide font-medium">
                          {item.title}
                        </div>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-luxury-text font-medium hover:text-gold transition-colors text-base"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-luxury-text font-medium text-base">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </div>
                    {index < contactInfo.length - 1 && (
                      <div className="mt-8 h-px bg-luxury-panel/50" />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Schedule Call CTA */}
            <div className="glass-panel rounded-xl p-6 border border-gold/10 shadow-g1-soft">
              <div className="flex items-start gap-4 mb-5">
                <MessageSquare className="w-6 h-6 flex-shrink-0 text-gold/80" />
                <div>
                  <h3 className="text-xl font-heading font-bold text-luxury-text mb-2 tracking-wide">
                    Book a Free Consultation
                  </h3>
                  <p className="text-luxury-muted text-sm leading-relaxed">
                    Prefer to talk directly? Schedule a 30-minute consultation call to discuss your project goals and how we can help.
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full"
                variant="outline"
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


