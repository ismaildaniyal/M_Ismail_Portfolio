"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const { toast } = useToast()
  const [mounted, setMounted] = React.useState(false)

  // After mounting, we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Handle theme change with visual feedback
  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)

    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme activated`,
      description: newTheme === "system" ? "Following your system preferences" : `Switched to ${newTheme} mode`,
      duration: 2000,
    })
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <Button variant="outline" size="icon" className="w-9 h-9" />
  }

  const isDark = theme === "dark" || (theme === "system" && resolvedTheme === "dark")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative overflow-hidden w-9 h-9 rounded-md"
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          {/* Animated highlight effect */}
          {isDark ? (
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-md"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 0.2, 0] }}
              transition={{ duration: 1 }}
            />
          ) : (
            <motion.div
              className="absolute inset-0 bg-yellow-300/20 rounded-md"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 0.2, 0] }}
              transition={{ duration: 1 }}
            />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleThemeChange("light")} className="gap-2 cursor-pointer">
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === "light" && (
            <motion.span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" layoutId="theme-indicator" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("dark")} className="gap-2 cursor-pointer">
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === "dark" && (
            <motion.span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" layoutId="theme-indicator" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleThemeChange("system")} className="gap-2 cursor-pointer">
          <span>System</span>
          {theme === "system" && (
            <motion.span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" layoutId="theme-indicator" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

