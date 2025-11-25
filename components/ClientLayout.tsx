"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { LoadingScreen } from "./LoadingScreen"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(true)

  // Check if loading screen has been shown before
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasSeenLoading = localStorage.getItem("g1-creative-has-seen-loading")
      
      // Only show loading screen on homepage if user hasn't seen it before
      if (pathname === "/" && !hasSeenLoading) {
        setIsLoading(true)
        setHasLoaded(false)
      } else {
        setIsLoading(false)
        setHasLoaded(true)
      }
    }
  }, [pathname])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    
    // Mark that user has seen the loading screen
    if (typeof window !== "undefined") {
      localStorage.setItem("g1-creative-has-seen-loading", "true")
    }
    
    // Slight delay before showing content for smooth transition
    setTimeout(() => {
      setHasLoaded(true)
    }, 100)
  }

  return (
    <>
      {isLoading && !hasLoaded && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      <div style={{ opacity: hasLoaded ? 1 : 0, transition: "opacity 0.5s ease-in" }}>
        {children}
      </div>
    </>
  )
}

