import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { formatDate } from "@/lib/utils"

export const metadata = generateSEOMetadata({
  title: "Blog - Web Design Tips & Insights",
  description: "Expert insights on web design, development, SEO, and digital marketing. Learn from our experience building high-performance websites.",
  url: "/blog",
})

// Sample blog posts - would typically come from CMS or markdown files
const posts = [
  {
    title: "10 Web Design Trends Dominating 2024",
    slug: "web-design-trends-2024",
    excerpt:
      "Discover the latest web design trends that are shaping the digital landscape in 2024, from AI-powered personalization to immersive 3D experiences.",
    image: "/images/blog-1.jpg",
    category: "Design",
    date: "2024-01-15",
    readTime: "8 min read",
    author: {
      name: "Lewis",
      image: "/images/team-lewis.jpg",
    },
  },
  {
    title: "How to Optimize Your Website for Conversions",
    slug: "optimize-website-conversions",
    excerpt:
      "Learn proven strategies to increase your website conversion rate, from improving page speed to crafting compelling calls-to-action.",
    image: "/images/blog-2.jpg",
    category: "Marketing",
    date: "2024-01-10",
    readTime: "6 min read",
    author: {
      name: "Lewis",
      image: "/images/team-lewis.jpg",
    },
  },
  {
    title: "The Complete Guide to E-commerce SEO",
    slug: "ecommerce-seo-guide",
    excerpt:
      "Master the fundamentals of e-commerce SEO and learn how to drive organic traffic to your online store with this comprehensive guide.",
    image: "/images/blog-3.jpg",
    category: "SEO",
    date: "2024-01-05",
    readTime: "12 min read",
    author: {
      name: "Lewis",
      image: "/images/team-lewis.jpg",
    },
  },
  {
    title: "Why Every Business Needs a Mobile-First Website",
    slug: "mobile-first-website-importance",
    excerpt:
      "With over 60% of web traffic coming from mobile devices, learn why mobile-first design is no longer optional but essential for business success.",
    image: "/images/blog-4.jpg",
    category: "Development",
    date: "2023-12-28",
    readTime: "5 min read",
    author: {
      name: "Lewis",
      image: "/images/team-lewis.jpg",
    },
  },
  {
    title: "Building a Brand That Stands Out",
    slug: "building-standout-brand",
    excerpt:
      "Explore the key elements of creating a memorable brand identity that resonates with your target audience and differentiates you from competitors.",
    image: "/images/blog-5.jpg",
    category: "Branding",
    date: "2023-12-20",
    readTime: "7 min read",
    author: {
      name: "Lewis",
      image: "/images/team-lewis.jpg",
    },
  },
  {
    title: "Web Accessibility: Why It Matters and How to Implement It",
    slug: "web-accessibility-guide",
    excerpt:
      "Make your website accessible to everyone with this practical guide to WCAG compliance and inclusive design practices.",
    image: "/images/blog-6.jpg",
    category: "Development",
    date: "2023-12-15",
    readTime: "10 min read",
    author: {
      name: "Lewis",
      image: "/images/team-lewis.jpg",
    },
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-heading">
              Blog & Insights
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Expert tips, industry insights, and practical advice to help you succeed online.
            </p>
          </div>
        </Container>
      </div>

      {/* Featured Post */}
      {posts.length > 0 && (
        <Section className="bg-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <Badge className="mb-4">{posts[0].category}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {posts[0].title}
                </Link>
              </h2>
              <p className="text-lg text-secondary-600 mb-6">
                {posts[0].excerpt}
              </p>
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <Calendar className="w-4 h-4" />
                  {formatDate(posts[0].date)}
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <Clock className="w-4 h-4" />
                  {posts[0].readTime}
                </div>
              </div>
              <Button asChild>
                <Link href={`/blog/${posts[0].slug}`} className="group">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      )}

      {/* Blog Grid */}
      <Section className="bg-secondary-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-secondary-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <Badge className="mb-3">{post.category}</Badge>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-secondary-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center gap-2 group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Never Miss an Update
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Subscribe to our newsletter for the latest tips, insights, and industry news delivered to your inbox.
          </p>
          <Button asChild size="lg" variant="accent">
            <Link href="/#newsletter">Subscribe Now</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}

