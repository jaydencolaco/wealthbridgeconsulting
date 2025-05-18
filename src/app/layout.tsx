import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components//scroll-to-top"
import { MobileCTA } from "@/components/mobile-cta"

export const metadata = {
  title: "Wealthbridge Consulting - Financial Services & Advisory",
  description:
    "Comprehensive financial solutions including banking, investment management, financial advisory, retirement planning, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
          <ScrollToTop />
          {children}
          <MobileCTA />
        </ThemeProvider>
      </body>
    </html>
  )
}
