import Link from "next/link";
import Head from 'next/head';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building,
  ChevronRight,
  CreditCard,
  DollarSign,
  LineChart,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>WealthBridge Consulting &dash; Shaping Dreams, Securing Futures</title>
        <meta name="description" content="WealthBridge Consulting empowers individuals and businesses with strategic financial solutions, personalized guidance, and global expertise to secure a prosperous future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Shaping Dreams, Securing Futures
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Wealthbridge Consulting provides comprehensive financial
                  solutions tailored to your unique needs. From banking
                  solutions to investment strategies, we help you build and
                  protect your wealth.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-white bg-white text-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                    >
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/+971547221116?text=Enquire%20Now"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-white text-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                    >
                      Contact Us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 48 48"
                        className="w-5 h-5"
                      >
                        <path
                          fill="#fff"
                          d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                        ></path>
                        <path
                          fill="#40c351"
                          d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                        ></path>
                        <path
                          fill="#fff"
                          fillRule="evenodd"
                          d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        ></path>
                      </svg>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/home.svg"
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
                <div className="inline-block text-black dark:text-white rounded-lg bg-white dark:bg-primary px-3 py-1 ">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive Financial Solutions
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of financial services to help you
                  achieve your financial goals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Banking Solutions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Comprehensive banking services designed to meet your personal
                  and business needs.
                </p>
                <Link
                  href="/services#banking"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Investment Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Strategic investment solutions to grow your wealth and secure
                  your financial future.
                </p>
                <Link
                  href="/services#investment"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              {/* <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Financial Advisory</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Expert financial advice tailored to your unique circumstances
                  and goals.
                </p>
                <Link
                  href="/services#advisory"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div> */}
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Business Solutions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We provide expert support from planning to financing at every
                  stage of your business.
                </p>
                <Link
                  href="/services#business"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              {/* <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <PiggyBank className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Retirement Planning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Secure your future with our comprehensive retirement planning
                  services.
                </p>
                <Link
                  href="/services#retirement"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div> */}
              {/* <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Insurance Solutions</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Protect what matters most with our comprehensive insurance
                  solutions.
                </p>
                <Link
                  href="/services#insurance"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div> */}
              <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tax Planning</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Optimize your tax strategy to minimize liabilities and
                  maximize your wealth.
                </p>
                <Link
                  href="/services#tax"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              {/* <div className="flex flex-col items-start gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-primary/10 p-3">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Setup and Acquisition</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We simplify the setup and acquisition process to help you
                  start and scale with confidence.
                </p>
                <Link
                  href="/services#setup"
                  className="mt-auto flex items-center text-sm font-medium text-primary"
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div> */}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg px-3 py-1 text-sm dark:text-white ">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Your Trusted Financial Partner
                </h2>
                <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Wealthbridge Consulting, we combine industry expertise with
                  personalized service to deliver exceptional financial
                  solutions.
                </p>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <span>
                      Comprehensive financial solutions tailored to your needs
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Proven track record of client success</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>
                      Secure and confidential handling of your financial
                      information
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Team of certified financial experts</span>
                  </li>
                </ul>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="bg-white text-black hover:bg-black hover:text-white"
                  >
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src="/whychooseus.svg"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied clients about their experience with
                  Wealthbridge Consulting.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-6xl mt-12">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Secure Your Financial Future?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Schedule a consultation with one of our financial experts
                  today.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white bg-white text-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
                  >
                    Book a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="border-white text-primary hover:bg-black hover:text-white"
                  >
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
            <p className="text-sm font-medium">
              Wealthbridge Consulting © 2025
            </p>
          </div>
          <div className="flex gap-4 md:gap-6">
            <Link
              href="/privacy"
              className="text-xs underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs underline-offset-4 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-xs underline-offset-4 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
