"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "./LoadingScreen"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already seen loading screen this session
    const hasSeenLoading = sessionStorage.getItem("g1-loading-complete")
    
    if (hasSeenLoading) {
      setIsLoading(false)
      setHasLoaded(true)
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Mark as seen in session storage so it doesn't show again on page navigation
    sessionStorage.setItem("g1-loading-complete", "true")
    
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

