import Link from "next/link"
import {
  ArrowRight,
  Building,
  CreditCard,
  LineChart,
  PiggyBank,
  Users,
  Briefcase,
  Shield,
  BarChart3,
  Handshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"

export default function ServicesPage() {
  const services = [
    {
      id: "banking",
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Banking Solutions",
      description:
        "Our comprehensive banking services are designed to meet your personal and business financial needs.",
      features: [
        "Personal and Business Checking Accounts",
        "Savings and Money Market Accounts",
        "Certificates of Deposit (CDs)",
        "Business Loans and Lines of Credit",
        "Merchant Services",
      ],
    },
    {
      id: "investment",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      title: "Investment Management",
      description: "Strategic investment solutions to grow your wealth and secure your financial future.",
      features: [
        "Portfolio Management",
        "Retirement Accounts (401(k), IRA)",
        "Mutual Funds and ETFs",
        "Stocks and Bonds",
        "Alternative Investments",
      ],
    },
    {
      id: "advisory",
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Financial Advisory",
      description: "Expert financial advice tailored to your unique circumstances and goals.",
      features: [
        "Comprehensive Financial Planning",
        "Wealth Management",
        "Estate Planning",
        "Tax Planning Strategies",
        "Risk Management",
      ],
    },
    {
      id: "business",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Business Solutions",
      description: "Comprehensive business financial solutions to help your company thrive and grow.",
      features: [
        "Business Strategy & Growth Planning",
        "Cash Flow Management",
        "Risk Assessment & Management",
        "Business Loans & Financing",
        "Succession Planning",
      ],
    },
    {
      id: "retirement",
      icon: <PiggyBank className="h-6 w-6 text-primary" />,
      title: "Retirement Planning",
      description: "Secure your future with our comprehensive retirement planning services.",
      features: [
        "Retirement Income Strategies",
        "401(k) and IRA Management",
        "Pension Planning",
        "Social Security Optimization",
        "Long-term Care Planning",
      ],
    },
    {
      id: "insurance",
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Insurance Solutions",
      description: "Protect what matters most with our comprehensive insurance solutions.",
      features: [
        "Life Insurance",
        "Health Insurance",
        "Property & Casualty Insurance",
        "Disability Insurance",
        "Long-term Care Insurance",
      ],
    },
    {
      id: "tax",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Tax Planning",
      description: "Optimize your tax strategy to minimize liabilities and maximize your wealth.",
      features: [
        "Tax-Efficient Investment Strategies",
        "Income Tax Planning",
        "Estate Tax Planning",
        "Business Tax Strategies",
        "Tax-Loss Harvesting",
      ],
    },
    {
      id: "setup",
      icon: <Handshake className="h-6 w-6 text-primary" />,
      title: "Setup and Acquisition",
      description: "Expert guidance for starting a new business or acquiring an existing one.",
      features: [
        "Business Formation & Structure",
        "Acquisition Financing",
        "Due Diligence",
        "Valuation Services",
        "Post-Acquisition Integration",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
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
          <div className="container px-4 md:px-6 mx-auto">
            <Tabs useHash defaultValue="banking" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                  {services.map((service) => (
                    <TabsTrigger key={service.id} value={service.id}>
                      {service.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {services.map((service) => (
                <TabsContent key={service.id} value={service.id} className="mt-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-primary/10 p-3">{service.icon}</div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <CardDescription className="text-lg mt-2">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary"
                                  >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                </div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-4">How We Can Help</h3>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">
                            Our team of experienced professionals will work closely with you to understand your unique
                            needs and develop customized solutions that align with your financial goals.
                          </p>
                          <div className="flex flex-col gap-4 sm:flex-row">
                            <Button variant="outline" className="bg-white text-black hover:bg-black hover:text-white  border-white dark:hover:bg-black dark:hover:text-white">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Link href="/contact">
                              <Button variant="outline" className="bg-white text-black hover:bg-black hover:text-white dark:hover:text-white dark:hover:bg-black">Contact Us</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            {/* <div className="mt-16">
              <h2 className="text-2xl font-bold text-center mb-8">All Our Services</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                  <Card key={service.id} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">{service.icon}</div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-1 text-sm">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="rounded-full bg-primary/10 p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div> */}
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule a consultation with one of our financial experts today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button variant="outline" className="bg-white border-white text-black hover:bg-black hover:text-white">
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
