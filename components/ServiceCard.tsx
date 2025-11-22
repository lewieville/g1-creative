import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  href?: string
  className?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
  className,
}: ServiceCardProps) {
  const cardContent = (
    <>
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-100 text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
        <Icon className="w-7 h-7" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-secondary-900 mb-3 font-heading">
        {title}
      </h3>
      <p className="text-secondary-600 mb-6 leading-relaxed">{description}</p>

      {/* Features list */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-secondary-700">
            <svg
              className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Link arrow */}
      {href && (
        <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
          <span className="text-sm">Learn more</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}

      {/* Decorative element */}
      <div className="absolute top-0 right-0 -z-10 w-32 h-32 bg-primary-100 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
    </>
  )

  const cardClassName = cn(
    "group relative bg-white rounded-xl border border-secondary-200 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary-300 hover:-translate-y-1",
    href && "cursor-pointer",
    className
  )

  if (href) {
    return (
      <Link href={href} className={cardClassName}>
        {cardContent}
      </Link>
    )
  }

  return (
    <div className={cardClassName}>
      {cardContent}
    </div>
  )
}

