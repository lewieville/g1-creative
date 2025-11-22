"use client"

import { useState, useEffect } from "react"
import { LoadingScreen } from "./LoadingScreen"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoaded, setHasLoaded] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    
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

