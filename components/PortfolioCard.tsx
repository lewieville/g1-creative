import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/Badge"
import { ArrowUpRight } from "lucide-react"

interface PortfolioCardProps {
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  href: string
}

export function PortfolioCard({
  title,
  description,
  image,
  category,
  tags,
  href,
}: PortfolioCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl overflow-hidden border border-secondary-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>

        {/* View icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-secondary-900" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors font-heading">
          {title}
        </h3>
        <p className="text-secondary-600 mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-secondary-100 text-secondary-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

