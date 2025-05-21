"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Building, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import Head from "next/head"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  // Default blog posts
  const defaultBlogPosts = [
    {
      id: "1",
      title: "Understanding Market Volatility: A Guide for Investors",
      excerpt:
        "Market volatility can be intimidating, but it's a normal part of investing. Learn how to navigate market ups and downs with confidence.",
      content: "Full content of the blog post would go here...",
      author: "Jonathan Reynolds",
      date: "May 10, 2025",
      readTime: "8 min read",
      category: "Investing",
      slug: "understanding-market-volatility",
    },
    {
      id: "2",
      title: "Retirement Planning in Your 30s: Why Starting Early Matters",
      excerpt:
        "Many people put off retirement planning until later in life, but starting in your 30s can make a significant difference in your financial future.",
      content: "Full content of the blog post would go here...",
      author: "Sophia Martinez",
      date: "May 5, 2025",
      readTime: "6 min read",
      category: "Retirement",
      slug: "retirement-planning-in-your-30s",
    },
    {
      id: "3",
      title: "Tax Strategies for Small Business Owners",
      excerpt:
        "Small business owners face unique tax challenges. Discover strategies to minimize your tax burden and maximize your business's financial health.",
      content: "Full content of the blog post would go here...",
      author: "David Kim",
      date: "April 28, 2025",
      readTime: "10 min read",
      category: "Tax Planning",
      slug: "tax-strategies-for-small-business-owners",
    },
    {
      id: "4",
      title: "The Basics of Estate Planning: Protecting Your Legacy",
      excerpt:
        "Estate planning isn't just for the wealthy. Learn why everyone should have a plan in place to protect their assets and loved ones.",
      content: "Full content of the blog post would go here...",
      author: "Emily Rodriguez",
      date: "April 20, 2025",
      readTime: "7 min read",
      category: "Estate Planning",
      slug: "basics-of-estate-planning",
    },
    {
      id: "5",
      title: "Navigating Student Loan Repayment: Options and Strategies",
      excerpt:
        "Student loan debt can be overwhelming. Explore repayment options and strategies to manage your debt effectively.",
      content: "Full content of the blog post would go here...",
      author: "Michael Chen",
      date: "April 15, 2025",
      readTime: "9 min read",
      category: "Debt Management",
      slug: "navigating-student-loan-repayment",
    },
    {
      id: "6",
      title: "Building an Emergency Fund: Your Financial Safety Net",
      excerpt:
        "An emergency fund is a crucial component of financial security. Learn how to build and maintain this important financial safety net.",
      content: "Full content of the blog post would go here...",
      author: "Sarah Johnson",
      date: "April 8, 2025",
      readTime: "5 min read",
      category: "Personal Finance",
      slug: "building-an-emergency-fund",
    },
  ]

  // Load blog posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts")
    if (storedPosts) {
      // Combine default posts with stored posts
      const combinedPosts = [...defaultBlogPosts, ...JSON.parse(storedPosts)]
      // Remove duplicates (if any) by ID
      const uniquePosts = combinedPosts.filter((post, index, self) => index === self.findIndex((p) => p.id === post.id))
      setBlogPosts(uniquePosts)
    } else {
      setBlogPosts(defaultBlogPosts)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Insights & Strategies &dash; WealthBridge Consulting Blog</title>
        <meta name="description" content="Read the latest financial insights, tips, and business strategies from the experts at WealthBridge Consulting. Stay informed and ahead in your journey." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Financial Insights & Resources
                </h1>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Expert advice, market insights, and financial strategies to help you make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col gap-2 rounded-lg border p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="space-y-2">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <h2 className="text-2xl font-bold">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">{post.excerpt}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href={`/blog/${post.slug}`} className="flex items-center text-sm font-medium text-primary">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Subscribe to Our Newsletter</h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest financial insights, market trends, and expert advice.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
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
