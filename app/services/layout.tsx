import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Services - Professional Web Design & Development",
  description: "Comprehensive web design, e-commerce, branding, maintenance, and SEO services. Expert solutions tailored to grow your business online.",
  url: "/services",
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

