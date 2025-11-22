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
                Creating Digital Experiences That Drive Results
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed mb-6">
                G1 Creative is a web design and development agency passionate about helping businesses succeed online. Founded in 2020, we&apos;ve helped over 50 businesses transform their digital presence and achieve remarkable growth.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                We believe that great web design is more than just aesthetics - it&apos;s about creating intuitive, conversion-optimized experiences that help businesses achieve their goals.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-hero.jpg"
                alt="G1 Creative team at work"
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
              alt="Lewis - Founder of G1 Creative"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-heading">
              Meet Lewis, Founder & Lead Designer
            </h2>
            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                With over 8 years of experience in web design and development, Lewis founded G1 Creative to bridge the gap between beautiful design and business results. His passion for creating digital experiences that truly serve businesses and their customers drives everything we do.
              </p>
              <p>
                Before founding G1 Creative, Lewis led design teams at several tech startups, where he developed his expertise in user experience, conversion optimization, and modern web technologies.
              </p>
              <p>
                When not designing websites, Lewis enjoys mentoring aspiring designers, contributing to open-source projects, and exploring new technologies that can benefit our clients.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <Button asChild>
                <Link href="/contact">Work With Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Our Values
          </h2>
          <p className="text-lg text-secondary-600">
            The principles that guide everything we do
          </p>
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

      {/* Timeline Section */}
      <Section className="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            Our Journey
          </h2>
          <p className="text-lg text-secondary-600">
            From a one-person operation to an award-winning agency
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg font-heading flex-shrink-0">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-1 h-full bg-primary-200 mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-2 font-heading">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4 font-heading">
            How We Work
          </h2>
          <p className="text-lg text-secondary-600">
            Our proven process ensures successful project delivery every time
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-secondary-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl font-bold text-primary-600 mb-4 font-heading opacity-50">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2 font-heading">
                {step.title}
              </h3>
              <p className="text-secondary-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team Note Section */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6 font-heading">
            Our Extended Team
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed mb-8">
            While G1 Creative is led by Lewis, we work with a carefully curated network of specialized contractors and partners - including expert developers, copywriters, photographers, and marketing specialists - to ensure every project gets exactly the expertise it needs.
          </p>
          <p className="text-lg text-secondary-600 leading-relaxed">
            This flexible approach means you get access to top talent across multiple disciplines, without the overhead of a large agency.
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

