"use client"

import { useState } from "react"
import { PortfolioCard } from "@/components/PortfolioCard"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const categories = ["All", "Business", "E-commerce", "Branding"]

const projects = [
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
  {
    title: "FitLife Wellness",
    description: "Wellness brand identity and website that boosted member signups by 200%.",
    image: "/images/portfolio-4.jpg",
    category: "Branding",
    tags: ["Branding", "Web Design", "Content"],
    href: "/portfolio/fitlife-wellness",
  },
  {
    title: "Artisan Coffee Co",
    description: "E-commerce store with subscription model generating $50K monthly recurring revenue.",
    image: "/images/portfolio-5.jpg",
    category: "E-commerce",
    tags: ["E-commerce", "Subscriptions", "SEO"],
    href: "/portfolio/artisan-coffee",
  },
  {
    title: "Summit Consulting",
    description: "Lead generation website that generates 100+ qualified leads per month.",
    image: "/images/portfolio-6.jpg",
    category: "Business",
    tags: ["Lead Generation", "SEO", "Marketing"],
    href: "/portfolio/summit-consulting",
  },
  {
    title: "Bloom & Co",
    description: "Complete brand refresh including logo, website, and marketing materials.",
    image: "/images/portfolio-7.jpg",
    category: "Branding",
    tags: ["Branding", "Print Design", "Web Design"],
    href: "/portfolio/bloom-co",
  },
  {
    title: "TechGear Store",
    description: "Multi-vendor marketplace with advanced filtering and payment processing.",
    image: "/images/portfolio-8.jpg",
    category: "E-commerce",
    tags: ["Marketplace", "Advanced Features", "Mobile App"],
    href: "/portfolio/techgear-store",
  },
  {
    title: "Green Energy Solutions",
    description: "Corporate website with interactive calculators and lead capture forms.",
    image: "/images/portfolio-9.jpg",
    category: "Business",
    tags: ["Web Design", "Interactive Tools", "Lead Gen"],
    href: "/portfolio/green-energy",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-heading">
              Our Portfolio
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Explore our recent projects and see how we&apos;ve helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </Container>
      </div>

      {/* Filter Section */}
      <Section className="bg-white pt-12">
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "transition-all",
                selectedCategory === category && "shadow-lg"
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-secondary-600 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let&apos;s create something amazing together. Schedule a free consultation to discuss your project.
          </p>
          <Button asChild size="lg" variant="accent">
            <a href="/contact">Start Your Project</a>
          </Button>
        </div>
      </Section>
    </>
  )
}

