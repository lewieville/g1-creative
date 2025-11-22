import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Contact - Get in Touch with G1 Creative",
  description: "Ready to start your project? Contact G1 Creative today for a free consultation. We're here to help bring your vision to life.",
  url: "/contact",
})

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "g1.creative.web@gmail.com",
    link: "mailto:g1.creative.web@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "(239) 255-4733",
    link: "tel:+12392554733",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lexington, Virginia",
    link: null,
  },
  {
    icon: Clock,
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
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-heading">
              Let&apos;s Start Your Project
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Ready to transform your digital presence? Get in touch today for a free consultation. We typically respond within 24 hours.
            </p>
          </div>
        </Container>
      </div>

      {/* Contact Section */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4 font-heading">
              Send Us a Message
            </h2>
            <p className="text-secondary-600 mb-8">
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4 font-heading">
              Get in Touch
            </h2>
            <p className="text-secondary-600 mb-8">
              Prefer to reach out directly? Here&apos;s how you can contact us.
            </p>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-secondary-600 mb-1">
                      {item.title}
                    </div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-secondary-900 font-medium hover:text-primary-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-secondary-900 font-medium">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule Call CTA */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl p-8 text-white">
              <div className="flex items-start gap-4 mb-6">
                <MessageSquare className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-heading">
                    Schedule a Call
                  </h3>
                  <p className="text-primary-100">
                    Prefer to talk? Book a free 30-minute consultation to discuss your project.
                  </p>
                </div>
              </div>
              <Button
                asChild
                variant="accent"
                size="lg"
                className="w-full"
              >
                <a
                  href="https://calendly.com/g1creative"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Quick Answers
          </h2>
          <p className="text-lg text-secondary-600">
            Common questions we get from new clients
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-secondary-200 p-6"
            >
              <h3 className="text-lg font-semibold text-secondary-900 mb-2 font-heading">
                {faq.question}
              </h3>
              <p className="text-secondary-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Map Section (Placeholder) */}
      <Section className="bg-white">
        <div className="aspect-[21/9] bg-secondary-200 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-secondary-400 mx-auto mb-4" />
              <p className="text-secondary-600">
                Interactive map would go here
                <br />
                <span className="text-sm">
                  (Integrate Google Maps or similar service)
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

