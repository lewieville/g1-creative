"use client"

import { useEffect } from "react"

interface CalendlyWidgetProps {
  url: string
  className?: string
}

export function CalendlyWidget({ url, className = "" }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (typeof window === "undefined") return

    const existingScript = document.querySelector('script[src*="calendly.com"]')
    if (existingScript) return

    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className={`calendly-inline-widget ${className}`}
      data-url={url}
      style={{ minWidth: "320px", height: "700px", width: "100%" }}
    />
  )
}

