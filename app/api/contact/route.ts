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

    // Use environment variable or fallback to default Formspree endpoint
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT || "mrbdaybo"

    // Format body for Formspree
    const formspreeBody = {
      name: body.name,
      email: body.email,
      company: body.company || "",
      phone: body.phone || "",
      service: body.service || "",
      budget: body.budget || "",
      message: body.message,
    }

    // Forward to Formspree
    const response = await fetch(
      `https://formspree.io/f/${formspreeEndpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formspreeBody),
      }
    )

    const responseData = await response.json().catch(() => ({}))
    
    // Formspree returns 200 on success, but also might return other statuses
    if (!response.ok) {
      console.error("Formspree error:", {
        status: response.status,
        statusText: response.statusText,
        data: responseData,
      })
      
      // Return more specific error message
      return NextResponse.json(
        { 
          error: responseData.error || "Failed to submit form. Please try again." 
        },
        { status: response.status || 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    
    // Return more detailed error in development
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    
    return NextResponse.json(
      { 
        error: "Failed to send message. Please try again.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined
      },
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

