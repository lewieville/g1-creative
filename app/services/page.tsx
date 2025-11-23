"use client"

import { useEffect, useRef } from "react"
import { Palette, ShoppingCart, Sparkles, Wrench, TrendingUp, Code, Smartphone, Shield, LucideIcon } from "lucide-react"
import { ServiceCard } from "@/components/ServiceCard"
import { Section } from "@/components/ui/Section"
import { MotionSection } from "@/components/MotionSection"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { GradientMesh } from "@/components/GradientMesh"
import { DynamicCTA } from "@/components/DynamicCTA"
import { ScrollReveal } from "@/components/ScrollReveal"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const iconMap: Record<string, LucideIcon> = {
  Palette,
  ShoppingCart,
  Sparkles,
  Wrench,
  TrendingUp,
  Code,
  Smartphone,
  Shield,
}

const services = [
  {
    iconName: "Palette",
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
    iconName: "ShoppingCart",
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
    iconName: "Sparkles",
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
    iconName: "Wrench",
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
    iconName: "TrendingUp",
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
    iconName: "Code",
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
    iconName: "Sparkles",
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and competitive landscape to create a winning strategy.",
  },
  {
    iconName: "Palette",
    title: "Design & Prototyping",
    description: "Our designers create beautiful mockups and interactive prototypes for your review and feedback.",
  },
  {
    iconName: "Code",
    title: "Development & Testing",
    description: "Our developers bring the designs to life with clean, efficient code, followed by rigorous testing.",
  },
  {
    iconName: "TrendingUp",
    title: "Launch & Optimization",
    description: "We launch your site and continuously monitor and optimize for peak performance and results.",
  },
]

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const whyChooseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero text reveal
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector("h1"),
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        }
      )
      gsap.fromTo(
        heroRef.current.querySelector("p"),
        { opacity: 0, y: 30, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          delay: 0.3,
          ease: "power3.out",
        }
      )
    }

    // Services cards stagger
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll(".service-card")
      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }

    // Process steps reveal
    if (processRef.current) {
      const steps = processRef.current.querySelectorAll(".process-step")
      gsap.fromTo(
        steps,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }

    // Why Choose section
    if (whyChooseRef.current) {
      gsap.fromTo(
        whyChooseRef.current.querySelector("h2"),
        { opacity: 0, x: -50, filter: "blur(10px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
      const items = whyChooseRef.current.querySelectorAll(".why-item")
      gsap.fromTo(
        items,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyChooseRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <div ref={heroRef} className="bg-luxury-bg cinematic-overlay pt-32 pb-20 relative overflow-hidden">
        <GradientMesh intensity="low" speed="slow" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-luxury-text mb-6 tracking-wide leading-tight">
              Services That Drive Results
            </h1>
            <p className="text-xl text-luxury-muted leading-relaxed">
              Comprehensive digital solutions designed to help your business thrive online. From beautiful websites to powerful e-commerce platforms, we&apos;ve got you covered.
            </p>
          </div>
        </Container>
      </div>

      {/* Services Grid */}
      <MotionSection className="bg-luxury-surface py-32 lg:py-40">
        <div className="gold-divider" />
        <Container>
          <div ref={servicesRef} className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </Container>
      </MotionSection>

      {/* Process Section */}
      <MotionSection ref={processRef} className="bg-luxury-bg py-32 lg:py-40">
        <div className="gold-divider" />
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
              Our Process
            </h2>
            <p className="text-xl text-luxury-muted leading-relaxed">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.iconName] || Sparkles
              return (
                <div key={index} className="process-step text-center glass-panel p-6 hover:shadow-g1-glow transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full glass-panel mb-4 text-gold">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-gold font-bold mb-2 font-heading tracking-wide">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-luxury-text mb-2 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-luxury-muted">{step.description}</p>
                </div>
              )
            })}
          </div>
        </Container>
      </MotionSection>

      {/* Why Choose Us Section */}
      <MotionSection ref={whyChooseRef} className="bg-luxury-surface py-32 lg:py-40">
        <div className="gold-divider" />
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
                Why Choose G1 Creative?
              </h2>
              <div className="space-y-6">
                <div className="why-item flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg glass-panel text-gold flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-luxury-text mb-2 tracking-wide">
                      Proven Track Record
                    </h3>
                    <p className="text-luxury-muted">
                      Multiple success projects with an increase in client conversions.
                    </p>
                  </div>
                </div>
                <div className="why-item flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg glass-panel text-gold flex items-center justify-center">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-luxury-text mb-2 tracking-wide">
                      Mobile-First Approach
                    </h3>
                    <p className="text-luxury-muted">
                      Every website we build is optimized for mobile devices where most traffic comes from.
                    </p>
                  </div>
                </div>
                <div className="why-item flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg glass-panel text-gold flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-luxury-text mb-2 tracking-wide">
                      Results-Driven
                    </h3>
                    <p className="text-luxury-muted">
                      We focus on metrics that matter - conversions, engagement, and ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="bg-luxury-bg relative overflow-hidden py-32 lg:py-40">
        <div className="gold-divider" />
        <GradientMesh intensity="medium" speed="medium" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-luxury-muted mb-8 leading-relaxed">
              Let&apos;s discuss your project and create a custom solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DynamicCTA size="xl" href="/contact" />
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  )
}


