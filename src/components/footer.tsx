import Link from "next/link"
import { Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2 text-primary">
          <Building className="h-6 w-6" />
          <p className="text-sm font-medium">Wealthbridge Consulting © 2025</p>
        </div>
        <div className="flex gap-4 md:gap-6">
          <Link href="/privacy" className="text-xs underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs underline-offset-4 hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-xs underline-offset-4 hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}
