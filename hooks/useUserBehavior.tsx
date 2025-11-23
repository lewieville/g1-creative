"use client"

import { useEffect, useState } from "react"

interface UserBehavior {
  isFirstVisit: boolean
  hasViewedPricing: boolean
  hasViewedCaseStudies: boolean
  timeOnSite: number
  visitCount: number
  lastVisitDate: string | null
}

export function useUserBehavior() {
  const [behavior, setBehavior] = useState<UserBehavior>({
    isFirstVisit: true,
    hasViewedPricing: false,
    hasViewedCaseStudies: false,
    timeOnSite: 0,
    visitCount: 1,
    lastVisitDate: null,
  })

  useEffect(() => {
    // Load existing behavior from localStorage
    const stored = localStorage.getItem("g1_user_behavior")
    const storedBehavior = stored ? JSON.parse(stored) : null

    // Check if first visit
    const isFirstVisit = !storedBehavior || !storedBehavior.visitCount

    // Get current page
    const currentPath = window.location.pathname
    const hasViewedPricing = storedBehavior?.hasViewedPricing || currentPath.includes("/pricing")
    const hasViewedCaseStudies = storedBehavior?.hasViewedCaseStudies || currentPath.includes("/insights") || currentPath.includes("/portfolio")

    // Update visit count
    const visitCount = storedBehavior ? storedBehavior.visitCount + 1 : 1

    // Track time on site
    const startTime = Date.now()
    let timeOnSite = storedBehavior?.timeOnSite || 0

    // Update behavior
    const newBehavior: UserBehavior = {
      isFirstVisit,
      hasViewedPricing,
      hasViewedCaseStudies,
      timeOnSite,
      visitCount,
      lastVisitDate: storedBehavior?.lastVisitDate || null,
    }

    setBehavior(newBehavior)

    // Save to localStorage
    localStorage.setItem("g1_user_behavior", JSON.stringify(newBehavior))

    // Track time on site
    const timeInterval = setInterval(() => {
      timeOnSite = timeOnSite + 1
      const updatedBehavior = { ...newBehavior, timeOnSite }
      setBehavior(updatedBehavior)
      localStorage.setItem("g1_user_behavior", JSON.stringify(updatedBehavior))
    }, 1000) // Update every second

    // Track page views
    const handleRouteChange = () => {
      const path = window.location.pathname
      const updatedBehavior = {
        ...newBehavior,
        hasViewedPricing: hasViewedPricing || path.includes("/pricing"),
        hasViewedCaseStudies: hasViewedCaseStudies || path.includes("/insights") || path.includes("/portfolio"),
      }
      setBehavior(updatedBehavior)
      localStorage.setItem("g1_user_behavior", JSON.stringify(updatedBehavior))
    }

    // Listen for route changes (Next.js)
    window.addEventListener("popstate", handleRouteChange)

    // Cleanup
    return () => {
      clearInterval(timeInterval)
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  return behavior
}

