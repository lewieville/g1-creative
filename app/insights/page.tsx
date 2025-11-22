"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { MotionSection } from "@/components/MotionSection"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { ArrowUpRight, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const categories = ["All", "Case Studies", "Web Design", "E-commerce", "Branding", "SEO"]

const insights = [
  {
    title: "How We Increased Conversion Rates by 150% for TechStart",
    description: "A complete website redesign that transformed user experience and drove measurable business growth through strategic UX improvements and conversion optimization.",
    image: "/images/portfolio-1.jpg",
    category: "Case Studies",
    type: "Case Study",
    tags: ["Web Design", "UX", "Conversion Optimization"],
    results: "+150% conversion rate, -45% bounce rate",
    href: "/insights/techstart-conversion-optimization",
    featured: true,
  },
  {
    title: "Building a High-Performance E-commerce Platform",
    description: "From concept to launch: How we built Urban Boutique's custom e-commerce solution that doubled their online revenue in 3 months.",
    image: "/images/portfolio-2.jpg",
    category: "Case Studies",
    type: "Case Study",
    tags: ["E-commerce", "Shopify", "Performance"],
    results: "2x revenue in 90 days",
    href: "/insights/urban-boutique-ecommerce",
    featured: true,
  },
  {
    title: "Complete Brand & Website Transformation for GrowthLabs",
    description: "A comprehensive rebrand and web redesign that positioned GrowthLabs as a premium B2B service provider and generated 3x more qualified leads.",
    image: "/images/portfolio-3.jpg",
    category: "Case Studies",
    type: "Case Study",
    tags: ["Branding", "Web Design", "B2B"],
    results: "3x qualified leads",
    href: "/insights/growthlabs-rebrand",
    featured: false,
  },
  {
    title: "The Psychology of Premium Web Design",
    description: "Discover the design principles and psychological triggers that make luxury websites convert at higher rates than standard designs.",
    image: "/images/blog-1.jpg",
    category: "Web Design",
    type: "Article",
    tags: ["Design", "Psychology", "UX"],
    results: null,
    href: "/insights/premium-web-design-psychology",
    featured: false,
  },
  {
    title: "SEO Strategies That Actually Work in 2025",
    description: "The latest proven SEO tactics we use to get our clients' websites ranking on page 1 of Google and driving organic traffic.",
    image: "/images/blog-2.jpg",
    category: "SEO",
    type: "Article",
    tags: ["SEO", "Marketing", "Strategy"],
    results: null,
    href: "/insights/seo-strategies-2025",
    featured: false,
  },
  {
    title: "Why Your Business Needs a Custom Website",
    description: "Templates vs. custom development: A comprehensive analysis of long-term ROI, scalability, and brand differentiation.",
    image: "/images/blog-3.jpg",
    category: "Web Design",
    type: "Article",
    tags: ["Business", "Strategy", "Web Design"],
    results: null,
    href: "/insights/custom-vs-template-websites",
    featured: false,
  },
]

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredInsights =
    selectedCategory === "All"
      ? insights
      : insights.filter((item) => 
          item.category === selectedCategory || item.tags.includes(selectedCategory)
        )

  return (
    <>
      {/* Hero Section */}
      <div className="bg-luxury-bg cinematic-overlay pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="accent" className="mb-6 shadow-g1-glow">
                Case Studies & Insights
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-heading font-bold text-luxury-text mb-6 tracking-wide leading-tight"
            >
              Real Results, Real Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-luxury-muted leading-relaxed"
            >
              Explore our client success stories, in-depth case studies, and insights on web design, development, and digital strategy.
            </motion.p>
          </div>
        </Container>
      </div>

      {/* Filter & Content Section */}
      <MotionSection className="bg-luxury-surface pt-12">
        <div className="gold-divider" />
        <Container>
          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "primary" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "transition-all",
                  selectedCategory === category && "shadow-g1-glow"
                )}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Case Studies (Large Cards) */}
          {selectedCategory === "All" && (
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-luxury-text mb-8 tracking-wide">
                Featured Case Studies
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {insights.filter(item => item.featured).map((item, index) => (
                  <Link key={index} href={item.href} className="group">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="glass-panel overflow-hidden shadow-g1-card hover:shadow-g1-glow transition-all duration-500 relative"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-luxury-panel">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                          className="w-full h-full"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </motion.div>
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                        
                        {/* Type badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <Badge variant="accent" className="shadow-g1-soft">
                            {item.type}
                          </Badge>
                        </div>

                        {/* View icon */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="absolute top-4 right-4 z-10"
                        >
                          <div className="glass-panel p-3 shadow-g1-glow">
                            <ArrowUpRight className="w-6 h-6 text-gold" />
                          </div>
                        </motion.div>

                        {/* Results badge */}
                        {item.results && (
                          <div className="absolute bottom-4 left-4 right-4 z-10">
                            <div className="glass-panel px-4 py-2 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-gold" />
                              <span className="text-sm font-semibold text-gold">{item.results}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <h3 className="text-2xl font-heading font-semibold text-luxury-text mb-3 group-hover:text-gold transition-colors tracking-wide">
                          {item.title}
                        </h3>
                        <p className="text-luxury-muted mb-4 leading-relaxed">{item.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-3 py-1 rounded-full glass-panel text-luxury-muted border border-gold/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom gold line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold/0 group-hover:bg-gold transition-all duration-500" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Insights Grid */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-luxury-text mb-8 tracking-wide">
              {selectedCategory === "All" ? "All Insights" : selectedCategory}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((item, index) => (
                <Link key={index} href={item.href} className="group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="glass-panel overflow-hidden shadow-g1-card hover:shadow-g1-glow transition-all duration-500 relative h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-luxury-panel">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-bg via-luxury-bg/30 to-transparent opacity-60" />
                      
                      <div className="absolute top-4 left-4 z-10">
                        <Badge variant="accent" className="shadow-g1-soft text-xs">
                          {item.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-heading font-semibold text-luxury-text mb-2 group-hover:text-gold transition-colors tracking-wide line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-luxury-muted mb-4 line-clamp-3 flex-1">{item.description}</p>

                      {item.results && (
                        <div className="flex items-center gap-2 mb-4 text-gold text-sm font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          {item.results}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {item.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full glass-panel text-luxury-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold/0 group-hover:bg-gold transition-all duration-500" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {filteredInsights.length === 0 && (
            <div className="text-center py-20">
              <p className="text-luxury-muted text-lg">
                No insights found in this category.
              </p>
            </div>
          )}
        </Container>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="bg-luxury-bg relative overflow-hidden">
        <div className="gold-divider" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-luxury-text mb-6 tracking-wide">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-luxury-muted mb-8 leading-relaxed">
              Let&apos;s discuss how we can create a custom web solution that drives real results for your business.
            </p>
            <Button asChild size="xl">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </Container>
      </MotionSection>
    </>
  )
}

