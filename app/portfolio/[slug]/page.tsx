import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { notFound } from "next/navigation"

// This would typically come from a CMS or database
const projects: Record<string, any> = {
  "mico": {
    title: "MICO",
    category: "Web3 & AI Platform",
    description: "A comprehensive blockchain platform featuring custom AI agents, real-time crypto statistics, and an elegant interface for a company pioneering human-centered intelligence and co-creation in Web3.",
    image: "/images/project-4-mico.png",
    tags: ["AI Agent", "API Integration", "Web3", "React", "Blockchain", "Chat Interface"],
    client: "MICO",
    industry: "Cryptocurrency & AI",
    year: "2024",
    website: "https://micocopilots.xyz/",
    challenge:
      "MICO needed a sophisticated web platform that could showcase their vision for human-centered intelligence while integrating complex blockchain data and AI-powered features. The platform required an interactive AI chat interface, real-time crypto statistics, community features, and a seamless user experience that made cutting-edge technology feel accessible and engaging.",
    approach:
      "We developed a custom AI copilot with an interactive chat interface that guides users through AI-powered trading. Built an educational onboarding system with modular lessons ('The Spark', 'The Vision', 'The Wave') featuring progress tracking and interactive completion states. Created an animated loading screen with $MICO branding, integrated real-time blockchain statistics via API connections, and designed community sections for Discord and X/Twitter engagement. The entire platform features a stunning purple/cyan gradient interface built with React for optimal performance and includes animated character interactions.",
    results: [
      "Interactive AI chat interface with real-time responses",
      "Educational onboarding system with modular lessons and progress tracking",
      "Custom animated loading screen with $MICO branding",
      "Real-time blockchain data integration via API",
      "Beautiful character-based UI with chat functionality",
      "Community integration (Discord, X/Twitter)",
      "High-performance React architecture with smooth animations",
      "Mobile-responsive design across all devices",
      "Engaging purple/cyan gradient theme throughout",
    ],
    screenshots: [
      "/images/mico-screenshot-1.png",
      "/images/mico-screenshot-2.png",
      "/images/mico-screenshot-3.png",
    ],
    testimonial: {
      quote:
        "Working with Lewis was exceptional. He understood our vision for human-centered AI and delivered a platform that perfectly balances sophisticated technology with elegant design. The custom AI chat interface and real-time blockchain integration exceeded our expectations. The interactive character and smooth animations bring the whole experience to life.",
      author: "MICO Team",
      title: "Founders, MICO",
    },
  },
  "techstart-inc": {
    title: "TechStart Inc",
    category: "Business Website",
    description: "A complete website redesign for a fast-growing tech startup that needed to establish credibility and generate more qualified leads.",
    image: "/images/portfolio-1.jpg",
    tags: ["Web Design", "SEO", "CMS", "Lead Generation"],
    client: "TechStart Inc",
    industry: "Technology & Software",
    year: "2024",
    website: "https://techstart.example.com",
    challenge:
      "TechStart Inc was experiencing rapid growth but their outdated website wasn't converting visitors effectively. They had a 75% bounce rate and struggled to communicate their value proposition clearly.",
    approach:
      "We conducted extensive user research and competitor analysis to understand the target audience. The new design focused on clear messaging, intuitive navigation, and strategic CTAs throughout the user journey. We implemented a modern tech stack with Next.js for optimal performance.",
    results: [
      "150% increase in conversion rate",
      "45% reduction in bounce rate",
      "3x increase in demo requests",
      "90+ PageSpeed score",
      "200% increase in organic traffic",
    ],
    screenshots: [
      "/images/portfolio-1-detail-1.jpg",
      "/images/portfolio-1-detail-2.jpg",
      "/images/portfolio-1-detail-3.jpg",
    ],
    testimonial: {
      quote:
        "G1 Creative transformed our online presence completely. Our conversion rate increased by 150% within 3 months of launching the new site. Lewis and his team are true professionals who understand both design and business strategy.",
      author: "Sarah Johnson",
      title: "CEO, TechStart Inc",
    },
  },
  "urban-boutique": {
    title: "Urban Boutique",
    category: "E-commerce",
    description: "A modern e-commerce platform for a fashion boutique that needed to expand their brick-and-mortar success online.",
    image: "/images/portfolio-2.jpg",
    tags: ["Shopify", "E-commerce", "Branding", "Marketing"],
    client: "Urban Boutique",
    industry: "Fashion & Retail",
    year: "2023",
    website: "https://urbanboutique.example.com",
    challenge:
      "Urban Boutique had a strong local presence but struggled with online sales. Their previous website had poor mobile experience and a complicated checkout process that led to cart abandonment.",
    approach:
      "We built a custom Shopify store with a focus on mobile-first design and streamlined checkout. Implemented high-quality product photography, size guides, and customer reviews to build trust. Integrated email marketing and abandoned cart recovery.",
    results: [
      "200% increase in online sales",
      "65% reduction in cart abandonment",
      "Mobile conversion rate increased by 180%",
      "40% increase in average order value",
      "$50K+ monthly revenue within 3 months",
    ],
    screenshots: [
      "/images/portfolio-2-detail-1.jpg",
      "/images/portfolio-2-detail-2.jpg",
      "/images/portfolio-2-detail-3.jpg",
    ],
    testimonial: {
      quote:
        "Working with G1 Creative was an absolute pleasure. They delivered a beautiful, high-performing e-commerce site that exceeded our expectations. Our online sales have doubled since launch!",
      author: "Michael Chen",
      title: "Founder, Urban Boutique",
    },
  },
  "growthlabs": {
    title: "GrowthLabs",
    category: "Business Website",
    description: "A professional corporate website with integrated CRM and marketing automation for a B2B consulting firm.",
    image: "/images/portfolio-3.jpg",
    tags: ["Web Design", "CRM", "Analytics", "Marketing Automation"],
    client: "GrowthLabs",
    industry: "Business Consulting",
    year: "2024",
    website: "https://growthlabs.example.com",
    challenge:
      "GrowthLabs needed a sophisticated website that could nurture leads through a complex B2B sales cycle while integrating with their existing CRM and marketing tools.",
    approach:
      "We created a comprehensive digital ecosystem with custom lead scoring, automated email sequences, and detailed analytics. The design emphasizes thought leadership with case studies, whitepapers, and an integrated blog.",
    results: [
      "100+ qualified leads per month",
      "35% increase in lead-to-client conversion",
      "Automated 80% of lead nurturing",
      "50% reduction in sales cycle length",
      "$500K+ in attributed revenue",
    ],
    screenshots: [
      "/images/portfolio-3-detail-1.jpg",
      "/images/portfolio-3-detail-2.jpg",
      "/images/portfolio-3-detail-3.jpg",
    ],
    testimonial: {
      quote:
        "The attention to detail and professionalism is unmatched. G1 Creative didn't just build us a website - they created a powerful marketing tool that drives real business results.",
      author: "Emily Rodriguez",
      title: "Marketing Director, GrowthLabs",
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projects[params.slug]

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-12">
        <Container>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4 font-heading">
                {project.title}
              </h1>
              <p className="text-xl text-secondary-600 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm text-secondary-600 mb-1">Client</div>
                  <div className="font-semibold text-secondary-900">
                    {project.client}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-secondary-600 mb-1">Industry</div>
                  <div className="font-semibold text-secondary-900">
                    {project.industry}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-secondary-600 mb-1">Year</div>
                  <div className="font-semibold text-secondary-900">
                    {project.year}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-secondary-600 mb-1">Website</div>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
                  >
                    Visit Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Challenge Section */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-heading">
              The Challenge
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6 font-heading">
              Our Approach
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="bg-secondary-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center font-heading">
            Results That Matter
          </h2>
          <div className="space-y-4">
            {project.results.map((result: string, index: number) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg text-secondary-700">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Screenshots Section */}
      <Section className="bg-white">
        <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center font-heading">
          Project Screenshots
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {project.screenshots.map((screenshot: string, index: number) => (
            <div
              key={index}
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <Section className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl text-secondary-700 mb-8 leading-relaxed">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <div className="font-semibold text-secondary-900">
              {project.testimonial.author}
            </div>
            <div className="text-secondary-600">{project.testimonial.title}</div>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let&apos;s discuss how we can help transform your digital presence.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}

