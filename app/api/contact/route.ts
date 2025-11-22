import { NextRequest, NextResponse } from "next/server"

/**
 * Contact form API route
 * Proxies form submissions to Formspree (or can be modified for other services)
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT

    if (!formspreeEndpoint) {
      // If Formspree isn't configured, log to console (for development)
      console.log("Contact form submission:", body)
      
      // In production, you'd want to send an error or use a fallback
      return NextResponse.json(
        { 
          success: true, 
          message: "Message received (demo mode - configure FORMSPREE_ENDPOINT for production)" 
        },
        { status: 200 }
      )
    }

    // Forward to Formspree
    const response = await fetch(
      `https://formspree.io/f/${formspreeEndpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )

    if (!response.ok) {
      throw new Error("Failed to submit form")
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}

/**
 * Handle OPTIONS request for CORS
 */
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  )
}

