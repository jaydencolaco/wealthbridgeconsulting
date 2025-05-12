import Link from "next/link"
import { ArrowRight, Building, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Building className="h-6 w-6" />
            <span>Wealthbridge Consulting</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary text-primary">
              About Us
            </Link>
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button variant="outline">Book a Consultation</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Wealthbridge Consulting
                </h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your trusted partner in financial success since 2005.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Story</h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded in 2005, Wealthbridge Consulting was established with a clear mission: to provide
                  comprehensive financial solutions that help individuals and businesses achieve their financial goals.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  What began as a small team of dedicated financial advisors has grown into a full-service financial
                  consulting firm with a reputation for excellence and client satisfaction.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Today, we serve clients across the country, providing personalized financial strategies that address
                  their unique needs and help them build and protect their wealth.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Wealthbridge Office"
                  className="rounded-lg object-cover"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission & Values</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Guiding principles that drive everything we do.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To empower our clients to achieve financial security and success through personalized strategies,
                  expert guidance, and unwavering commitment to their best interests.
                </p>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    To be the most trusted financial partner for our clients, known for our integrity, expertise, and
                    exceptional service.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Core Values</h3>
                <ul className="grid gap-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-bold">Integrity</span>
                      <p className="text-gray-500 dark:text-gray-400">
                        We act with honesty and transparency in all our dealings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-bold">Excellence</span>
                      <p className="text-gray-500 dark:text-gray-400">We strive for excellence in everything we do.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-bold">Client-Centered</span>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our clients' best interests are at the heart of every decision we make.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-bold">Innovation</span>
                      <p className="text-gray-500 dark:text-gray-400">
                        We continuously seek innovative solutions to meet our clients' evolving needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Leadership Team</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the experienced professionals guiding Wealthbridge Consulting.
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="CEO Portrait"
                  className="rounded-full object-cover w-40 h-40"
                  width={200}
                  height={200}
                />
                <h3 className="text-xl font-bold">Jonathan Reynolds</h3>
                <p className="text-primary font-medium">Chief Executive Officer</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[300px]">
                  With over 25 years of experience in financial services, Jonathan leads our firm with vision and
                  integrity.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="CFO Portrait"
                  className="rounded-full object-cover w-40 h-40"
                  width={200}
                  height={200}
                />
                <h3 className="text-xl font-bold">Sophia Martinez</h3>
                <p className="text-primary font-medium">Chief Financial Officer</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[300px]">
                  Sophia brings 20 years of financial expertise and strategic insight to our leadership team.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 text-center">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="CIO Portrait"
                  className="rounded-full object-cover w-40 h-40"
                  width={200}
                  height={200}
                />
                <h3 className="text-xl font-bold">David Kim</h3>
                <p className="text-primary font-medium">Chief Investment Officer</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[300px]">
                  David's investment strategies have consistently delivered results for our clients for over 15 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
                <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're always looking for talented professionals who share our values and commitment to excellence.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/careers">
                    <Button className="bg-white text-primary hover:bg-white/90">
                      View Open Positions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Team Working Together"
                  className="rounded-lg object-cover"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  )
}
