import { generateMetadata as generateSEOMetadata } from "@/lib/seo"

export const metadata = generateSEOMetadata({
  title: "Web Design Services | UI/UX, SEO & Development | G1 Creative",
  description: "Professional web design services including custom website development, e-commerce solutions, UI/UX design, SEO optimization, and ongoing maintenance. Transform your online presence.",
  url: "/services",
})

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

