"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageModal } from "@/components/ImageModal"

interface ClickableImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  containerClassName?: string
}

export function ClickableImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  quality,
  containerClassName = "",
}: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={`relative cursor-pointer group ${fill ? 'absolute inset-0 w-full h-full' : ''} ${containerClassName}`}
        onClick={() => setIsModalOpen(true)}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={`${className} group-hover:opacity-90 transition-opacity`}
            sizes={sizes}
            priority={priority}
            quality={quality}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`${className} group-hover:opacity-90 transition-opacity`}
            sizes={sizes}
            priority={priority}
            quality={quality}
          />
        )}
        {/* Hover overlay indicator */}
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold text-sm font-medium">
            Click to expand
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={src}
        alt={alt}
      />
    </>
  )
}

