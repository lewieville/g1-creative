import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { formatDate } from "@/lib/utils"
import { notFound } from "next/navigation"

// Sample blog post content - would typically come from CMS or markdown files
const posts: Record<string, any> = {
  "web-design-trends-2024": {
    title: "10 Web Design Trends Dominating 2024",
    excerpt:
      "Discover the latest web design trends that are shaping the digital landscape in 2024, from AI-powered personalization to immersive 3D experiences.",
    image: "/images/blog-1.jpg",
    category: "Design",
    date: "2024-01-15",
    readTime: "8 min read",
    author: {
      name: "Lewis",
      title: "Founder & Lead Designer",
      image: "/images/team-lewis.jpg",
    },
    content: `
      <p>The world of web design is constantly evolving, and 2024 is no exception. As we move further into the year, several exciting trends are emerging that are reshaping how we think about and create digital experiences.</p>
      
      <h2>1. AI-Powered Personalization</h2>
      <p>Artificial intelligence is revolutionizing how websites adapt to individual users. From dynamic content that changes based on user behavior to chatbots that provide personalized assistance, AI is making websites more intelligent and user-centric than ever before.</p>
      
      <h2>2. Immersive 3D Experiences</h2>
      <p>With improvements in web technologies like WebGL and Three.js, 3D elements are becoming more common in web design. These immersive experiences create memorable interactions that set brands apart from their competitors.</p>
      
      <h2>3. Dark Mode by Default</h2>
      <p>Dark mode is no longer just an option - many websites are now designing with dark mode as the primary interface, with light mode as the alternative. This shift reflects user preferences and reduces eye strain.</p>
      
      <h2>4. Micro-Interactions and Animations</h2>
      <p>Subtle animations and micro-interactions continue to enhance user experience by providing feedback, guiding users, and adding personality to interfaces. The key is keeping them purposeful and performant.</p>
      
      <h2>5. Sustainable Web Design</h2>
      <p>Environmental consciousness is extending to web design, with designers focusing on creating energy-efficient websites that reduce carbon footprints through optimized code, efficient hosting, and thoughtful design choices.</p>
      
      <p>These trends represent just the beginning of what's possible in modern web design. The key is to adopt trends that serve your users and business goals, rather than following them blindly.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = posts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-12">
        <Container size="lg">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <article>
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-heading">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary-200">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">
                    {post.author.name}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {post.author.title}
                  </div>
                </div>
              </div>
              <div className="h-8 w-px bg-secondary-300" />
              <div className="flex items-center gap-4 text-sm text-secondary-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              <div
                className="prose prose-lg prose-secondary max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-secondary-200">
              <div className="flex items-center gap-4">
                <span className="text-secondary-600 font-medium">
                  Share this article:
                </span>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </div>

      {/* Author Bio */}
      <div className="bg-secondary-50 py-12">
        <Container size="lg">
          <div className="max-w-3xl bg-white rounded-xl border border-secondary-200 p-8">
            <div className="flex items-start gap-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden bg-secondary-200 flex-shrink-0">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-heading">
                  About {post.author.name}
                </h3>
                <p className="text-secondary-600 mb-4">
                  Lewis is the founder of G1 Creative, bringing over 8 years of experience in web design and development. He&apos;s passionate about creating digital experiences that drive real business results.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <Container size="lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-heading">
              Ready to Transform Your Website?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let&apos;s discuss how we can help you achieve your digital goals.
            </p>
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </Container>
      </div>
    </>
  )
}

