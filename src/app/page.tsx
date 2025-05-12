import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Building,
  ChevronRight,
  CreditCard,
  DollarSign,
  LineChart,
  PiggyBank,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function Home() {
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
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
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
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Building Wealth, Securing Futures
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Wealthbridge Consulting provides comprehensive financial solutions tailored to your unique needs. From
                  banking solutions to investment strategies, we help you build and protect your wealth.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/services">
                    <Button className="bg-primary hover:bg-primary/90">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Financial Growth"
                  className="rounded-lg object-cover"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comprehensive Financial Solutions</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of financial services to help you achieve your financial goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Banking Solutions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Comprehensive banking services designed to meet your personal and business needs.
                </p>
                <Link href="/services/banking" className="mt-auto flex items-center text-sm font-medium text-primary">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Investment Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Strategic investment solutions to grow your wealth and secure your financial future.
                </p>
                <Link
                  href="/services/investments"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Financial Advisory</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Expert financial advice tailored to your unique circumstances and goals.
                </p>
                <Link href="/services/advisory" className="mt-auto flex items-center text-sm font-medium text-primary">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Retirement Planning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Secure your future with our comprehensive retirement planning services.
                </p>
                <Link
                  href="/services/retirement"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Insurance Solutions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Protect what matters most with our comprehensive insurance solutions.
                </p>
                <Link href="/services/insurance" className="mt-auto flex items-center text-sm font-medium text-primary">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tax Planning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Optimize your tax strategy to minimize liabilities and maximize your wealth.
                </p>
                <Link href="/services/tax" className="mt-auto flex items-center text-sm font-medium text-primary">
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Trusted Financial Partner
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Wealthbridge Consulting, we combine industry expertise with personalized service to deliver
                  exceptional financial solutions.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>Comprehensive financial solutions tailored to your needs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Proven track record of client success</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Secure and confidential handling of your financial information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Team of certified financial experts</span>
                  </li>
                </ul>
                <Link href="/about">
                  <Button className="bg-primary hover:bg-primary/90">Learn More About Us</Button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Financial Advisors"
                  className="rounded-lg object-cover"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied clients about their experience with Wealthbridge Consulting.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl mt-12">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Secure Your Financial Future?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule a consultation with one of our financial experts today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Explore Our Services
                  </Button>
                </Link>
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
