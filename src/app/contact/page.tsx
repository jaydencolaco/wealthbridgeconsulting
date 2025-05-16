"use client";
import Link from "next/link";
import { Building, Loader2, Mail, MapPin, Phone, ChevronDownIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import { Toaster } from "@/components/ui/sonner";
import axios from "axios";
import { toast } from "sonner";
import React, { useId, useState } from "react"
import * as RPNInput from "react-phone-number-input"
import flags from "react-phone-number-input/flags"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [firstname, setFirstname] = useState("");
  const [service, setService] = useState("");
  const id = useId()
  const [value, setValue] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/sendContactMail", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        service: service,
        message: message,
      });
      toast("Thank you for contacting Wealthbridge Consulting", {
        description: "We will revert back to you soon",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      });
      console.log("Mail sent successfully");
    } catch (error) {
      console.error("Failed to send request", error);
      toast("Error sending message", {
        description: "Please check your connectivity",
        action: {
          label: "Done",
          onClick: () => console.log("Done"),
        },
      });
    } finally {
      setIsLoading(false);
    }
    e.target.reset();
    setEmail("");
    setFirstname("");
    setLastname("");
    setMessage("");
    setPhone("");
    setService("")
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <Building className="h-6 w-6" />
            <span>Wealthbridge Consulting</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary text-primary"
            >
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
                  Contact Us
                </h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're here to answer your questions and help you achieve your
                  financial goals.
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
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Get in Touch
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fill out the form below and one of our financial experts
                    will contact you shortly.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input
                        type="text"
                        value={firstname}
                        onChange={(e: any) => {
                          setFirstname(e.target.value);
                        }}
                        id="first-name"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input
                        type="text"
                        value={lastname}
                        onChange={(e: any) => {
                          setLastname(e.target.value);
                        }}
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="Enter your email"
                      type="email"
                      value={email}
                      onChange={(e: any) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      type="tel"
                      value={phone}
                      required
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const inputValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                        if (inputValue.length <= 10) {
                          setPhone(inputValue); // Set only if it's within 10 digits
                        }
                      }}
                      id="phone"
                      name="phone"
                      maxLength={10} // Ensures max input length at the HTML level
                      pattern="\d{10}" // Ensures only 10-digit numbers on form submission
                      title="Enter a valid 10-digit phone number"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                      value={message}
                      onChange={(e: any) => {
                        setMessage(e.target.value);
                      }}
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your financial goals and how we can help"
                      className="min-h-[120px]"
                    />
                  </div>
                  {isLoading ? (
                    <Button
                      type="submit"
                      className="bg-black text-white border hover:border-b-black hover:text-black"
                    >
                      <Loader2 className="animate-spin" />
                      Send Message
                    </Button>
                  ) : (
                    <Button variant="oasis" type="submit">
                      Send Message
                    </Button>
                  )}
                </form>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Contact Information
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Reach out to us directly using the information below.
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Main Office</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Building A1, Dubai Digital Park,
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Dubai Silicon Oasis,
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Dubai, United Arab Emrirates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        +971547770292
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div className="space-y-1">
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        info@wealthbridgefzco.net
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        support@wealthbridge.com
                      </p>
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
