"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "AI-Powered Note Taking App",
    description:
      "An intelligent note-taking system that uses natural language processing to categorize and summarize notes automatically.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "TensorFlow.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "ai",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, payment processing, and order tracking.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "web",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description:
      "A comprehensive task management system with real-time updates, team collaboration features, and analytics.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Redux", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "web",
  },
  {
    id: 4,
    title: "Automated Form Filling Bot",
    description: "A bot that automates form filling for visa applications, saving hours of manual data entry.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "Selenium", "Docker"],
    github: "https://github.com",
    category: "automation",
  },
  {
    id: 5,
    title: "Real-time Chat Application",
    description:
      "A real-time messaging platform with features like read receipts, typing indicators, and file sharing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "web",
  },
  {
    id: 6,
    title: "Image Recognition API",
    description: "A REST API that uses machine learning to identify objects in images with high accuracy.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "TensorFlow", "Flask", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "ai",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Apps" },
  { id: "ai", name: "AI Projects" },
  { id: "automation", name: "Automation" },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my best work, demonstrating my skills and experience."
        />

        <motion.div
          className="flex justify-center mb-8 gap-2 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full"
              >
                {category.name}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col group">
      <div className="aspect-video overflow-hidden">
        <motion.img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <motion.div
              key={tag}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Badge variant="secondary">{tag}</Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild variant="outline" size="sm">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </motion.div>
        {project.demo && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="sm">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          </motion.div>
        )}
      </CardFooter>
    </Card>
  )
}

