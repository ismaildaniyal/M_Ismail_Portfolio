"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { useActiveSection } from "@/hooks/use-active-section"
import { motion } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const isMobile = useMobile()
  const activeSection = useActiveSection()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            M ISMAIL DANIYAL
          </motion.span>
        </Link>

        {isMobile ? (
          <MobileNav activeSection={activeSection} />
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} active={activeSection === item.href.substring(1)}>
                  {item.name}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild>
                <a href="/MuhammadIsmailDaniyal_Resume(3).pdf" download>
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium transition-colors hover:text-primary",
        active ? "text-primary" : "text-muted-foreground",
      )}
    >
      {children}
      {active && (
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
          layoutId="navbar-indicator"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </Link>
  )
}

function MobileNav({ activeSection }: { activeSection: string }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4 mt-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-primary flex items-center",
                  activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"
                    layoutId="mobile-nav-indicator"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <a href="/resume.pdf" download>
                Download Resume
              </a>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

