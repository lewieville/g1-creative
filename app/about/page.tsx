import Image from "next/image"
import Link from "next/link"
import { Award, Users, Target, Heart, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "About - Meet the Team Behind G1 Creative",
  description: "Learn about Lewis and the G1 Creative team. Passionate web designers and developers creating exceptional digital experiences since 2020.",
  url: "/about",
})

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We're committed to delivering exceptional quality in every project, never settling for 'good enough'.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients, treating each project as a true partnership.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Beautiful design is just the start - we focus on metrics that matter to your business.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We genuinely love what we do and it shows in the enthusiasm we bring to every project.",
  },
]

const timeline = [
  {
    year: "2020",
    title: "Founded",
    description:
      "Lewis founded G1 Creative with a vision to help businesses thrive online through exceptional web design.",
  },
  {
    year: "2021",
    title: "First Major Success",
    description:
      "Helped a local e-commerce business triple their online revenue, establishing our reputation.",
  },
  {
    year: "2022",
    title: "Team Expansion",
    description:
      "Brought on specialized designers and developers to expand our service offerings.",
  },
  {
    year: "2023",
    title: "50+ Projects",
    description:
      "Reached the milestone of 50+ completed projects with a 98% client satisfaction rate.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description:
      "Featured in leading design publications and won multiple awards for our work.",
  },
]

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by deeply understanding your business, goals, and target audience through comprehensive research and strategy sessions.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We develop a detailed project roadmap, including sitemap, wireframes, and a clear timeline with milestones.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create beautiful, on-brand mockups and interactive prototypes for your review and feedback.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our developers bring the designs to life with clean, efficient code, rigorously tested across all devices.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We handle all technical aspects of the launch and provide comprehensive training on managing your new site.",
  },
  {
    number: "06",
    title: "Optimize",
    description:
      "We monitor performance, gather user feedback, and continuously optimize for better results.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-32 pb-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6 font-heading">
                Building Digital Solutions That Actually Work
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed mb-6">
                Hi, I&apos;m Lewis Miller, the founder of G1 Creative. I&apos;m a full-stack developer and entrepreneur with a passion for creating websites that don&apos;t just look good—they deliver real results for businesses.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                From building my first e-commerce store to managing SEO for a trading education platform, I&apos;ve learned what it takes to succeed online. Now, I help businesses like yours harness that same power through strategic web development and digital marketing.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="Lewis Miller - Founder of G1 Creative"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Founder Section */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/team-lewis.jpg"
              alt="Lewis Miller - Founder of G1 Creative"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-heading">
              Meet Lewis Miller, Founder & Developer
            </h2>
            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                My journey into web development started not in a classroom, but in the trenches of real business. While pursuing my Bachelor&apos;s in Computer Science at Southern Virginia University, I founded <strong>LEWON Styles</strong>, an e-commerce business where I built the entire website from scratch, managed all the marketing, and learned firsthand what makes online businesses succeed or fail.
              </p>
              <p>
                That experience taught me something crucial: <em>technology is only valuable when it solves real problems.</em> As an IT Specialist at Seed to Table, I supported hardware and software systems while building custom computers. As CEO of CTR Trades, I managed SEO strategies, built an engaged community, and developed a complete trading education module. Each role sharpened my technical skills while keeping me grounded in what businesses actually need.
              </p>
              <p>
                Today, G1 Creative combines all those lessons. I don&apos;t just build websites—I create digital solutions that help you reach more customers, close more sales, and grow your business. Whether it&apos;s a sleek landing page, a full e-commerce platform, or custom development work, every project gets my full attention and expertise.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new frameworks (lately Flutter and Dart), studying the latest in SEO and conversion optimization, or working on side projects that push my skills further. I believe in continuous learning—because the web never stops evolving, and neither should we.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/contact">Work With Me</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            What Drives G1 Creative
          </h2>
          <p className="text-lg text-secondary-600">
            My mission is simple: help businesses thrive online with websites that actually work
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4 font-heading">
              Why I Started G1 Creative
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              After running my own e-commerce business and seeing firsthand how a well-built website could transform sales, I realized most small businesses don&apos;t have access to quality web development at reasonable prices. They&apos;re stuck choosing between expensive agencies that overcharge or cheap templates that underdeliver. G1 Creative exists to change that—offering professional, custom web solutions at prices that make sense for growing businesses.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4 font-heading">
              My Philosophy: Real Results, Not Just Pretty Designs
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              I believe a website is a tool, not just art. Every design decision should serve a purpose—whether that&apos;s getting more leads, increasing sales, or building trust with your audience. That&apos;s why I combine clean, modern aesthetics with proven conversion tactics, SEO best practices, and lightning-fast performance. When we build your site, we&apos;re building a growth engine for your business.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-4 font-heading">
              How I Work With Clients
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              You&apos;re not just hiring a developer—you&apos;re getting a partner who cares about your success. I start every project by understanding your business goals, target audience, and competitive landscape. Then, I craft a custom solution that fits your needs and budget. Throughout the process, you&apos;ll have direct access to me (no account managers or middlemen), regular updates, and complete transparency. After launch, I provide ongoing support to ensure your site continues performing at its best.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-heading">
                {value.title}
              </h3>
              <p className="text-secondary-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            My Expertise
          </h2>
          <p className="text-lg text-secondary-600">
            A full-stack skill set honed through real-world projects and continuous learning
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
            <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
              🚀 Full-Stack Development
            </h3>
            <p className="text-secondary-600">
              React, Next.js, Node.js, Flutter/Dart, and modern web frameworks. I build everything from simple landing pages to complex web applications.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
            <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
              🛍️ E-commerce & Business Systems
            </h3>
            <p className="text-secondary-600">
              Built and ran my own e-commerce store. I understand inventory, payments, shipping, customer experience—and how to make it all work seamlessly.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
            <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
              📈 SEO & Digital Marketing
            </h3>
            <p className="text-secondary-600">
              Managed SEO for multiple businesses, driving organic traffic and building engaged communities. I know how to get your site found by the right people.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
            <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
              🎨 UI/UX Design
            </h3>
            <p className="text-secondary-600">
              Clean, modern interfaces that users love. Every element is designed with both aesthetics and usability in mind.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
            <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
              🛠️ IT & Technical Support
            </h3>
            <p className="text-secondary-600">
              From building computers to troubleshooting complex systems, I have a deep understanding of how technology works at every level.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200">
            <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
              💡 Problem Solving & Innovation
            </h3>
            <p className="text-secondary-600">
              Whether it&apos;s optimizing site speed, fixing bugs, or implementing custom features, I thrive on finding solutions that work.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Note Section */}
      <Section className="bg-secondary-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-heading">
            A Lean, Agile Approach
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed mb-8">
            G1 Creative operates as a lean agency, which means you get direct access to me—no account managers, no middlemen, just straight-to-the-point communication and faster turnaround times. For specialized needs like photography, copywriting, or advanced marketing, I work with a curated network of trusted professionals to ensure every project gets exactly the expertise it needs.
          </p>
          <p className="text-lg text-secondary-600 leading-relaxed">
            This flexible approach means you get top-tier talent across multiple disciplines without the overhead of a large agency. Better service, lower prices, and better results.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Let&apos;s Create Something Amazing Together
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Whether you&apos;re starting from scratch or looking to revamp your existing website, we&apos;re here to help.
          </p>
          <Button asChild size="lg" variant="accent">
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>
      </Section>
    </>
  )
}

