"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-luxury-bg/95 backdrop-blur-md z-[9998]"
            onClick={onClose}
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-7xl w-full max-h-[90vh] pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full bg-luxury-panel/80 backdrop-blur-sm border border-gold/30 hover:border-gold hover:bg-luxury-panel flex items-center justify-center transition-all duration-300 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full max-h-[90vh] rounded-2xl overflow-hidden bg-luxury-panel border border-gold/20 shadow-g1-glow">
                <Image
                  src={src}
                  alt={alt}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-contain"
                  priority
                  quality={95}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

