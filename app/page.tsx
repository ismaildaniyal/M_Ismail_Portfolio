"use client"

import React from "react"

import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Achievements from "@/components/sections/achievements"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import Navbar from "@/components/navbar"
// import Testimonials from "@/components/sections/testominals"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FloatingThemeToggle } from "@/components/floating-theme-toggle"

export default function Home() {
  // Smooth scroll to section when clicking on nav links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          // Add a small delay to ensure smooth scrolling
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" })
          }, 100)
        }
      }
    }

    // Handle initial hash on page load
    handleHashChange()

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          {/* <Testimonials /> */}
          <Contact />
        </main>
        <Footer />

        {/* Floating theme toggle button */}
        <FloatingThemeToggle />

        {/* Scroll to top button */}
        <ScrollToTopButton />
      </motion.div>
    </AnimatePresence>
  )
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = React.useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}

