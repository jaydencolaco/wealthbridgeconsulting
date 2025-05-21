// components/blog-header.tsx
import Link from "next/link"
import { Building } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Building className="h-6 w-6" />
          <span>Wealthbridge Consulting</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
