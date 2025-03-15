"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export function FloatingThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const { toast } = useToast()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      description: `Switched to ${newTheme} mode`,
      duration: 2000,
    })
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={isDark ? "dark" : "light"}
        className={`fixed bottom-8 left-8 p-3 rounded-full shadow-lg z-50 ${
          isDark ? "bg-white text-black" : "bg-gray-800 text-white"
        }`}
        onClick={toggleTheme}
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      >
        {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </motion.button>
    </AnimatePresence>
  )
}

