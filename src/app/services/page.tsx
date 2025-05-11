import Link from "next/link"
import { ArrowRight, Building, CreditCard, DollarSign, LineChart, PiggyBank, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
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
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary text-primary">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button variant="outline">Book a Consultation</Button>
            </Link>
            <Link href="/login">
              <Button>Client Portal</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Financial Services</h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive financial solutions tailored to your unique needs and goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:gap-24">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 p-3">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Banking Solutions</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our comprehensive banking services are designed to meet your personal and business financial needs.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span>Personal and Business Checking Accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span>Savings and Money Market Accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span>Certificates of Deposit (CDs)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span>Business Loans and Lines of Credit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span>Merchant Services</span>
                    </li>
                  </ul>
                  <Link href="/services/banking">
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Banking Solutions"
                    className="rounded-lg object-cover"
                    width={500}
                    height={400}
                  />
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex justify-center order-last lg:order-first">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Investment Management"
                    className="rounded-lg object-cover"
                    width={500}
                    height={400}
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 p-3">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Investment Management</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Strategic investment solutions to grow your wealth and secure your financial future.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Portfolio Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Retirement Accounts (401(k), IRA)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Mutual Funds and ETFs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Stocks and Bonds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span>Alternative Investments</span>
                    </li>
                  </ul>
                  <Link href="/services/investments">
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Financial Advisory</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Expert financial advice tailored to your unique circumstances and goals.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Comprehensive Financial Planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Wealth Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Estate Planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Tax Planning Strategies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span>Risk Management</span>
                    </li>
                  </ul>
                  <Link href="/services/advisory">
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Financial Advisory"
                    className="rounded-lg object-cover"
                    width={500}
                    height={400}
                  />
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex justify-center order-last lg:order-first">
                  <img
                    src="/placeholder.svg?height=400&width=500"
                    alt="Retirement Planning"
                    className="rounded-lg object-cover"
                    width={500}
                    height={400}
                  />
                </div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 p-3">
                    <PiggyBank className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Retirement Planning</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Secure your future with our comprehensive retirement planning services.
                  </p>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <PiggyBank className="h-5 w-5 text-primary" />
                      <span>Retirement Income Strategies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PiggyBank className="h-5 w-5 text-primary" />
                      <span>401(k) and IRA Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PiggyBank className="h-5 w-5 text-primary" />
                      <span>Pension Planning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PiggyBank className="h-5 w-5 text-primary" />
                      <span>Social Security Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <PiggyBank className="h-5 w-5 text-primary" />
                      <span>Long-term Care Planning</span>
                    </li>
                  </ul>
                  <Link href="/services/retirement">
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
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
