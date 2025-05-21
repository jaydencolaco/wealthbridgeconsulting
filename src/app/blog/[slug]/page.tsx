"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Building, Calendar, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import BlogHeader from "@/components/blog-header"

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

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)


  // Default blog posts
  const defaultBlogPosts = [
    {
      id: "1",
      title: "Understanding Market Volatility: A Guide for Investors",
      excerpt:
        "Market volatility can be intimidating, but it's a normal part of investing. Learn how to navigate market ups and downs with confidence.",
      content: `
        <h2>What is Market Volatility?</h2>
        <p>Market volatility refers to the rate at which the price of assets increases or decreases. High volatility is characterized by rapid and significant price fluctuations, while low volatility indicates more stable and predictable market conditions.</p>
        
        <h2>Why Markets Experience Volatility</h2>
        <p>Several factors contribute to market volatility:</p>
        <ul>
          <li><strong>Economic indicators:</strong> Changes in inflation rates, employment figures, and GDP growth can trigger market reactions.</li>
          <li><strong>Geopolitical events:</strong> Elections, international conflicts, and policy changes often create uncertainty in markets.</li>
          <li><strong>Industry disruptions:</strong> Technological advancements or regulatory changes can impact entire sectors.</li>
          <li><strong>Market sentiment:</strong> Investor psychology and emotional reactions can amplify price movements.</li>
        </ul>
        
        <h2>Strategies for Navigating Volatile Markets</h2>
        <p>While volatility can be unsettling, it also presents opportunities for long-term investors. Here are some strategies to consider:</p>
        
        <h3>1. Maintain a Long-Term Perspective</h3>
        <p>Short-term market fluctuations are normal and expected. Historically, markets have trended upward over the long term despite periods of volatility. Focusing on your long-term financial goals can help you avoid making emotional decisions during market downturns.</p>
        
        <h3>2. Diversify Your Portfolio</h3>
        <p>A well-diversified portfolio spread across different asset classes, sectors, and geographic regions can help mitigate the impact of volatility. When some investments are performing poorly, others may be performing well, helping to stabilize your overall returns.</p>
        
        <h3>3. Consider Dollar-Cost Averaging</h3>
        <p>Investing a fixed amount at regular intervals, regardless of market conditions, can help reduce the impact of volatility on your portfolio. This approach allows you to purchase more shares when prices are low and fewer shares when prices are high.</p>
        
        <h3>4. Maintain an Emergency Fund</h3>
        <p>Having sufficient liquid assets to cover 3-6 months of expenses can prevent you from having to sell investments during market downturns to meet short-term financial needs.</p>
        
        <h3>5. Rebalance Regularly</h3>
        <p>Periodically adjusting your portfolio back to your target asset allocation helps maintain your desired risk level and can improve returns by systematically "buying low and selling high."</p>
        
        <h2>When to Seek Professional Guidance</h2>
        <p>During periods of significant market volatility, working with a financial advisor can provide valuable perspective and help you stay focused on your long-term goals. A professional can help you assess whether your current investment strategy remains appropriate for your financial situation and risk tolerance.</p>
        
        <h2>Conclusion</h2>
        <p>Market volatility is an inherent part of investing. By understanding its causes and implementing sound investment strategies, you can navigate market fluctuations with greater confidence and potentially use volatility to your advantage in building long-term wealth.</p>
      `,
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
      content: `
        <h2>The Power of Starting Early</h2>
        <p>Your 30s represent a critical decade for retirement planning. While retirement may seem distant, the financial decisions you make during this decade can significantly impact your retirement lifestyle. The primary advantage of starting early is the power of compound interest—the process by which your investment returns generate their own returns over time.</p>
        
        <h2>The Compound Interest Advantage</h2>
        <p>Consider this example: If you begin investing $500 monthly at age 30 with an average annual return of 7%, you would have approximately $1,000,000 by age 65. Wait until age 40 to start the same investment strategy, and your retirement fund would only reach about $500,000—half the amount, despite only starting 10 years later.</p>
        
        <h2>Key Retirement Planning Strategies for Your 30s</h2>
        
        <h3>1. Maximize Employer Retirement Benefits</h3>
        <p>If your employer offers a 401(k) or similar retirement plan, contribute at least enough to receive the full employer match—this is essentially free money. As your income increases, gradually increase your contribution percentage until you reach the maximum allowed contribution.</p>
        
        <h3>2. Open an IRA</h3>
        <p>In addition to employer-sponsored plans, consider opening an Individual Retirement Account (IRA). A Traditional IRA offers tax-deductible contributions, while a Roth IRA provides tax-free withdrawals in retirement. For many people in their 30s, a Roth IRA can be particularly advantageous if you expect to be in a higher tax bracket in retirement.</p>
        
        <h3>3. Develop an Investment Strategy</h3>
        <p>With retirement decades away, you can generally afford to take on more investment risk in exchange for potentially higher returns. Consider a diversified portfolio weighted toward growth investments like stocks or stock mutual funds. As you approach retirement, you can gradually shift to more conservative investments.</p>
        
        <h3>4. Create a Retirement Budget</h3>
        <p>Even though retirement is years away, start thinking about what your retirement lifestyle might cost. Having a target helps you determine how much you need to save and can make the abstract goal of "retirement" more concrete and motivating.</p>
        
        <h3>5. Manage and Reduce Debt</h3>
        <p>High-interest debt can significantly impede your retirement savings progress. Prioritize paying off credit cards and personal loans while making minimum payments on lower-interest debt like mortgages. Entering retirement debt-free provides much more financial flexibility.</p>
        
        <h2>Balancing Retirement with Other Financial Goals</h2>
        <p>Your 30s often come with competing financial priorities—buying a home, starting a family, or paying off student loans. While these goals are important, try not to completely sacrifice retirement savings. Even small contributions can grow significantly over time.</p>
        
        <h2>Adjusting Your Plan Over Time</h2>
        <p>Retirement planning isn't a set-it-and-forget-it activity. Review your retirement strategy annually and after major life events like marriage, having children, or changing jobs. Adjust your savings rate, investment allocation, and retirement age expectations as needed.</p>
        
        <h2>Conclusion</h2>
        <p>Starting retirement planning in your 30s gives you a tremendous advantage through the power of time and compound growth. By making retirement savings a priority now, you're giving your future self the gift of financial security and more retirement options. Remember that even modest beginnings can lead to significant results when you have decades for your investments to grow.</p>
      `,
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

  useEffect(() => {
    // Combine default posts with stored posts
    const fetchPost = async () => {
      setLoading(true)

      // Get stored posts from localStorage
      const storedPosts = localStorage.getItem("blogPosts")
      let allPosts = [...defaultBlogPosts]

      if (storedPosts) {
        // Add stored posts to default posts
        allPosts = [...allPosts, ...JSON.parse(storedPosts)]
      }

      // Find the post with the matching slug
      const foundPost = allPosts.find((p) => p.slug === slug)

      if (foundPost) {
        setPost(foundPost)
      }

      setLoading(false)
    }

    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <BlogHeader/>
        <main className="flex-1 container py-12">
          <div className="flex justify-center items-center h-full">
            <p>Loading article...</p>
          </div>
        </main>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <Building className="h-6 w-6" />
              <span>Wealthbridge Consulting</span>
            </Link>
            <ThemeToggle />
          </div>
        </header>
        <main className="flex-1 container py-12">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

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
            <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary text-primary">
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
        <article className="container py-12 md:py-24">
          <div className="mx-auto max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-primary mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-8">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
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
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
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
