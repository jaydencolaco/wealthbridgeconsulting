"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Building, Save, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"

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

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState("")
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    readTime: "",
  })
  const [successMessage, setSuccessMessage] = useState("")

  // Load blog posts from localStorage on component mount
  useEffect(() => {
    const storedPosts = localStorage.getItem("blogPosts")
    if (storedPosts) {
      setBlogPosts(JSON.parse(storedPosts))
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "sparky@1994" && password === "sparky1234") {
      setIsAuthenticated(true)
      setAuthError("")
    } else {
      setAuthError("Invalid username or password")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewPost((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate a unique ID and slug
    const id = Date.now().toString()
    const slug = newPost.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || id

    // Create the new blog post
    const blogPost: BlogPost = {
      id,
      title: newPost.title || "Untitled Post",
      excerpt: newPost.excerpt || "",
      content: newPost.content || "",
      author: newPost.author || "Admin",
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      readTime: newPost.readTime || "5 min read",
      category: newPost.category || "General",
      slug,
    }

    // Add the new post to the list
    const updatedPosts = [...blogPosts, blogPost]
    setBlogPosts(updatedPosts)

    // Save to localStorage
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))

    // Reset the form
    setNewPost({
      title: "",
      excerpt: "",
      content: "",
      author: "",
      category: "",
      readTime: "",
    })

    // Show success message
    setSuccessMessage("Blog post created successfully!")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  const handleDeletePost = (id: string) => {
    const updatedPosts = blogPosts.filter((post) => post.id !== id)
    setBlogPosts(updatedPosts)
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))
  }

  if (!isAuthenticated) {
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
        <main className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md p-8 space-y-8 border rounded-lg shadow-md">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Admin Login</h1>
              <p className="text-gray-500 dark:text-gray-400">Enter your credentials to access the admin panel</p>
            </div>
            {authError && (
              <div className="p-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-md">
                {authError}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
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
          <div className="flex items-center gap-4">
            <Link href="/blog">
              <Button variant="outline">View Blog</Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <Button onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-md">
            {successMessage}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Create New Blog Post</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" value={newPost.title} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={newPost.excerpt}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief summary of the blog post"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={newPost.content}
                    onChange={handleInputChange}
                    required
                    className="min-h-[200px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="author">Author</Label>
                    <Input id="author" name="author" value={newPost.author} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      name="category"
                      value={newPost.category}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="Investing">Investing</option>
                      <option value="Retirement">Retirement</option>
                      <option value="Tax Planning">Tax Planning</option>
                      <option value="Estate Planning">Estate Planning</option>
                      <option value="Debt Management">Debt Management</option>
                      <option value="Personal Finance">Personal Finance</option>
                      <option value="Business Finance">Business Finance</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="readTime">Read Time</Label>
                  <Input
                    id="readTime"
                    name="readTime"
                    value={newPost.readTime}
                    onChange={handleInputChange}
                    placeholder="e.g. 5 min read"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Save className="mr-2 h-4 w-4" />
                  Create Blog Post
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Existing Blog Posts</h2>
              {blogPosts.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">No blog posts yet. Create your first post!</p>
              ) : (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="border rounded p-4 relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                        onClick={() => handleDeletePost(post.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <h3 className="font-bold">{post.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {post.category} • {post.date} • {post.readTime}
                      </p>
                      <p className="text-sm line-clamp-2">{post.excerpt}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
