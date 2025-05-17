import Link from "next/link";
import { ArrowRight, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navbar } from "@/components/navbar";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Wealthbridge Consulting
                </h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connecting You with the Right Solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Our Story
                </h2>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WealthBridge is a premier advisory firm based in Dubai,
                  U.A.E., dedicated to connecting individuals and businesses
                  with the optimal solutions for banking, insurance,
                  investments, estate planning, account management, and company
                  formation.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  In today&apos;s fast-paced world, where time is of utmost
                  importance and one needs to take swift actions to avoid a
                  missed opportunity, we seek help to make informed, effective,
                  and efficient choices in our decision-making processes. One
                  may want to avoid common mistakes and pitfalls that come from
                  inadequate or incomplete information.
                </p>
                <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Wealthbridge is here to assist you in getting tailored
                  solutions for banking, insurance, investments &ndash; real
                  estate or various asset classes, accounting, and company
                  formation in the U.A.E. Our mission is to empower clients with
                  the knowledge and resources required to make informed
                  decisions for various solutions they seek for a prosperous
                  future.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/companyaboutus.png"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Mission & Values
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Guiding principles that drive everything we do.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  “Bridging dreams with tangible opportunities, WealthBridge
                  Consulting is dedicated to connecting individuals and families
                  with trusted businesses by providing tailored solutions for
                  banking, insurance, investments &ndash; real estate or various asset
                  classes, accounting, and company formation. Our mission is to
                  empower our valued collaborators with the knowledge and
                  resources required to make informed decisions for various
                  solutions they seek for a prosperous future.”
                </p>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    To be recognized as the leading consulting firm that
                    seamlessly connects clients with the right solutions,
                    fostering literacy, independence, and peace of mind.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <h2 className="mb-6 text-3xl font-bold">Leadership</h2>
                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold">Sukain D'souza</h3>
                  <p className="mb-4 text-lg text-primary">
                    Founder & Managing Director
                  </p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      The founder, Ms. Sukain Dsouza, is a seasoned banker with
                      over 15 years of experience. Originally from Mumbai,
                      India, she has made Dubai, U.A.E., her home for the last 9
                      years. Sukain is a dedicated service professional. Her
                      work experience has been in banking, assets, investments,
                      and liabilities. She has worked with American Express,
                      Standard Chartered, HDFC, and ICICI bank, to name a few.
                    </p>
                    <p>
                      Known for her exceptional communication skills and a
                      genuine commitment to meeting clients&apos; needs, she is
                      known to deliver outstanding service. Passionate about
                      creating positive experiences, Sukain builds strong
                      relationships through trust, transparency, and consistency
                      in actions and communication. Attention to detail helps
                      her identify potential risks and opportunities. Her
                      mission is to empower you to make confident choices that
                      will lead to successful outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/+971547221116?text=Enquire%20Now"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white dark:border-white"
                    >
                      Contact Sukain
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
              <div className="order-1 md:order-2">
                <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/godma.jpg"
                    alt="James Chen, Founder & CEO"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Join Our Team
                </h2>
                <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're always looking for talented professionals who share our
                  values and commitment to excellence.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/careers">
                    <Button variant="outline" className="bg-white text-primary hover:bg-white/90 dark:text-black dark:hover:text-white dark:hover:bg-black">
                      View Open Positions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="/team.png"
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
