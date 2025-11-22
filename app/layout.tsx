import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { StickyCTA } from "@/components/StickyCTA"
import { AnimatedCursor } from "@/components/AnimatedCursor"
import { ClientLayout } from "@/components/ClientLayout"
import { generateMetadata as generateSEOMetadata } from "@/lib/seo"
import { GA_TRACKING_ID } from "@/lib/analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  ...generateSEOMetadata(),
  icons: {
    icon: '/g1-logo.png',
    apple: '/g1-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased bg-luxury-bg text-luxury-text">
        <ClientLayout>
          <AnimatedCursor />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <StickyCTA />
        </ClientLayout>
      </body>
    </html>
  )
}

