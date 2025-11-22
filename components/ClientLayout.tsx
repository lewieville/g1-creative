"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { LoadingScreen } from "./LoadingScreen"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(pathname === "/")
  const [hasLoaded, setHasLoaded] = useState(pathname !== "/")

  // Update loading state when route changes
  useEffect(() => {
    if (pathname === "/") {
      setIsLoading(true)
      setHasLoaded(false)
    } else {
      setIsLoading(false)
      setHasLoaded(true)
    }
  }, [pathname])

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

