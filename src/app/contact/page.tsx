import Link from "next/link"
import { Building, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContactPage() {
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
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to answer your questions and help you achieve your financial goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and one of our financial experts will contact you shortly.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="banking">Banking Solutions</option>
                      <option value="investments">Investment Management</option>
                      <option value="advisory">Financial Advisory</option>
                      <option value="retirement">Retirement Planning</option>
                      <option value="insurance">Insurance Solutions</option>
                      <option value="tax">Tax Planning</option>
                      <option value="business">Business Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your financial goals and how we can help"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Submit</Button>
                </form>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Contact Information</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Reach out to us directly using the information below.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Main Office</h3>
                      <p className="text-gray-500 dark:text-gray-400">123 Financial District</p>
                      <p className="text-gray-500 dark:text-gray-400">New York, NY 10004</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500 dark:text-gray-400">(555) 123-4567</p>
                      <p className="text-gray-500 dark:text-gray-400">Monday - Friday, 9am - 5pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500 dark:text-gray-400">info@wealthbridge.com</p>
                      <p className="text-gray-500 dark:text-gray-400">support@wealthbridge.com</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Office Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-500 dark:text-gray-400">
                      <div>Monday - Friday</div>
                      <div>9:00 AM - 5:00 PM</div>
                      <div>Saturday</div>
                      <div>10:00 AM - 2:00 PM</div>
                      <div>Sunday</div>
                      <div>Closed</div>
                    </div>
                  </div>
                </div>
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
