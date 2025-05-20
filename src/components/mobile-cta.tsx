"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function MobileCTA() {
  const [showCTA, setShowCTA] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling down 300px
      setShowCTA(window.scrollY > 300)

      // Show scroll to top button after scrolling down 500px
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <AnimatePresence>
        {showCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 z-40 md:hidden"
          >
            <Link href="/contact">
              <Button className="w-full bg-black text-white hover:bg-black hover:text-white dark:border-white dark:bg-white dark:text-black shadow-lg">Book a Consultation</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-40 rounded-full bg-white dark:bg-black p-2 text-white shadow-lg md:bottom-8 md:right-8"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 text-black dark:text-white w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
