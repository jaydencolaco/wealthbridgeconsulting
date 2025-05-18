"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? "/logodark.png" : "/logo.png";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary"
          >
            <img
                  src="/logo.png"
                  alt="logo"
                  className="rounded-lg object-cover"
                  width={100}
                  height={100}
                />
            <span className="hidden sm:inline">WealthBridge Consulting</span>
            <span className="sm:hidden">WealthBridge</span>
          </Link>
        </div> */}
        <div className="flex items-center gap-2">
      <Link
        href="/"
        className="flex items-center gap-2 font-bold text-xl text-primary"
      >
        <Image
          src={logoSrc}
          alt="logo"
          className="rounded-lg object-cover"
          width={100}
          height={100}
        />
        <span className="hidden sm:inline">WealthBridge Consulting</span>
        <span className="sm:hidden">WealthBridge</span>
      </Link>
    </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:block">
            <Button variant="outline">Book a Consultation</Button>
          </Link>
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[350px] text-white bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 dark:text-white">
              <div className="flex flex-col space-y-6 pt-6 pl-5">
                <div className="flex items-center space-x-2">
                <img
                  src="/logomobile.png"
                  alt="logo mobile"
                  className="rounded-lg object-cover"
                  width={50}
                  height={50}
                />
                  <span className="text-lg font-bold">
                    WealthBridge 
                  </span>
                </div>

                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/services"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    href="/blog"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>

                <div className="flex flex-col space-y-3 pt-4">
                <Link
                    href="https://wa.me/+971547221116?text=Enquire%20Now"
                    className="text-sm font-medium hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                  <Button variant="outline"
                      className="border-white text-black hover:bg-black hover:text-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white" onClick={() => setOpen(false)}>Book a Consultation</Button>
                  </Link>

                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
