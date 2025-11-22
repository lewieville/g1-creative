import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialProps {
  quote: string
  author: {
    name: string
    title: string
    company: string
    image: string
  }
  rating?: number
}

export function Testimonial({
  quote,
  author,
  rating = 5,
}: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl border border-secondary-200 p-8 shadow-sm hover:shadow-md transition-shadow">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-secondary-700 leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary-200 flex-shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <div className="font-semibold text-secondary-900">{author.name}</div>
          <div className="text-sm text-secondary-600">
            {author.title} at {author.company}
          </div>
        </div>
      </div>
    </div>
  )
}

