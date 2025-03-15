"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "achievements", "contact"]

    const handleScroll = () => {
      // Get current scroll position
      const scrollY = window.scrollY

      // Find the current active section
      let currentSection = sections[0]

      // Check each section's position
      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        // If the section is in view (with some offset for better UX)
        // We use -100 to trigger the section a bit before it reaches the top
        if (rect.top <= 150) {
          currentSection = section
        }
      }

      setActiveSection(currentSection)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return activeSection
}

