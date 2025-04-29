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
    title: "ArchiTexture: Linguistic-Driven 3D House Plan Generator",
    description: "An AI-powered platform that transforms natural language descriptions into detailed 2D and 3D house plans using NLP and Machine Learning.",
    image: "https://via.placeholder.com/600x400.png/FF6F61/FFFFFF?text=ArchiTexture",
    tags: ["React.js", "Tailwind CSS", "Django", "Django REST Framework", "MySQL", "Python", "SpaCy", "NLTK"],
    github: "https://github.com",
    demo: undefined,
    category: "ai",
  },
  {
    id: 2,
    title: "Medscope-AI: Virtual Medical Assistant",
    description: "A Virtual Medical Assistant that answers health-related queries using retrieval-augmented generation (RAG), Google's Gemini API, and FAISS-based vector search.",
    image: "https://via.placeholder.com/600x400.png/6B7280/FFFFFF?text=Medscope-AI",
    tags: ["Python", "Gemini API", "FAISS"],
    github: "https://github.com",
    demo: "https://v0-virtual-documentation.vercel.app/",
    category: "ai",
  },
  {
    id: 3,
    title: "VisionRaise: AI-Powered Poker Game Agent",
    description: "An autonomous poker game agent that plays online poker using computer vision, automation, and probability logic, interacting via screen analysis without API access.",
    image: "https://via.placeholder.com/600x400.png/88B04B/FFFFFF?text=VisionRaise",
    tags: ["Python", "OCR", "PyAutoGUI"],
    github: "https://github.com",
    demo: undefined,
    category: "ai",
  },
  {
    id: 4,
    title: "SmartClassifier: EDA to Model Pipeline",
    description: "A complete machine learning pipeline for classification, covering EDA, preprocessing, model implementation, and evaluation with visualizations.",
    image: "https://via.placeholder.com/600x400.png/F7CAC9/FFFFFF?text=SmartClassifier",
    tags: ["Python", "Scikit-learn", "Matplotlib", "Seaborn"],
    github: "https://github.com",
    demo: undefined,
    category: "dataScience",
  },
  {
    id: 5,
    title: "Arabic to English Translator",
    description: "A neural machine translation system using a Transformer model to translate Arabic text into English, with a Streamlit interface.",
    image: "https://via.placeholder.com/600x400.png/92A8D1/FFFFFF?text=Arabic+Translator",
    tags: ["Python", "PyTorch", "Streamlit"],
    github: "https://github.com",
    demo: undefined,
    category: "ai",
  },
  {
    id: 6,
    title: "Pseudocode to Code Generator",
    description: "A Streamlit-based app that converts pseudocode into executable C++ code using a transformer model.",
    image: "https://via.placeholder.com/600x400.png/034F84/FFFFFF?text=Pseudocode+Generator",
    tags: ["Python", "PyTorch", "Streamlit", "C++"],
    github: "https://github.com",
    demo: "https://pseudotocplusplus-m4rkwiwc8swqbopknbhpml.streamlit.app/",
    category: "ai",
  },
  {
    id: 7,
    title: "EchoCaption: Audio to Video Caption Generator",
    description: "A Streamlit app that transcribes audio, generates captions using Gemini API, and creates avatar-based videos with HeyGen API.",
    image: "https://via.placeholder.com/600x400.png/F9A825/FFFFFF?text=EchoCaption",
    tags: ["Python", "Whisper AI", "Gemini API", "HeyGen API", "Streamlit"],
    github: "https://github.com",
    demo: "https://echocaptions-fwavya3nvt2xvgghfhyx4m.streamlit.app/",
    category: "ai",
  },
  {
    id: 8,
    title: "Real-time Language Learning Assistant",
    description: "A Streamlit app for language learning with real-time audio transcription, grammar checking, and pronunciation analysis.",
    image: "https://via.placeholder.com/600x400.png/0288D1/FFFFFF?text=Language+Assistant",
    tags: ["Python", "Deepgram API", "LanguageTool API", "Streamlit"],
    github: "https://github.com",
    demo: "https://learningassistant-dp8h9k52tvx3uvngkapphu2.streamlit.app/",
    category: "ai",
  },
  {
    id: 9,
    title: "Network Traffic Classification",
    description: "A project for network traffic classification using Logistic Regression and SVM, with data preprocessing and hyperparameter tuning.",
    image: "https://via.placeholder.com/600x400.png/7B1FA2/FFFFFF?text=Network+Traffic",
    tags: ["Python", "Scikit-learn", "Matplotlib"],
    github: "https://github.com",
    demo: undefined,
    category: "dataScience",
  },
  {
    id: 10,
    title: "AI-VoiceFlow: AI-Powered Speech Translator",
    description: "A speech-processing app for real-time transcription, translation, and text-to-speech conversion across multiple languages.",
    image: "https://via.placeholder.com/600x400.png/D81B60/FFFFFF?text=AI-VoiceFlow",
    tags: ["Python", "Whisper AI", "Gemini API", "gTTS", "Streamlit"],
    github: "https://github.com",
    demo: undefined,
    category: "ai",
  },
  {
    id: 11,
    title: "Solar Cell Simulation and Analysis with PVlib",
    description: "A simulation framework for analyzing solar cell performance using PVlib, with visualizations in Jupyter Notebooks.",
    image: "https://via.placeholder.com/600x400.png/FBC02D/FFFFFF?text=Solar+Cell",
    tags: ["Python", "PVlib", "Jupyter Notebooks"],
    github: "https://github.com/ismaildaniyal/solar-cell-shading-loss.git",
    demo: undefined,
    category: "dataScience",
  },
  {
    id: 12,
    title: "Chromium Browser Automation",
    description: "A Python script for browser automation using DrissionPage, handling login and UI interactions.",
    image: "https://via.placeholder.com/600x400.png/8E24AA/FFFFFF?text=Browser+Automation",
    tags: ["Python", "DrissionPage"],
    github: "https://github.com",
    demo: undefined,
    category: "automation",
  },
  {
    id: 13,
    title: "Sudoku Puzzle Solver Agent",
    description: "An AI agent that solves Sudoku puzzles using backtracking, constraint propagation, and heuristics, with visualizations.",
    image: "https://via.placeholder.com/600x400.png/FFCA28/FFFFFF?text=Sudoku+Solver",
    tags: ["Python", "Jupyter Notebooks"],
    github: "https://github.com",
    demo: undefined,
    category: "ai",
  },
  {
    id: 14,
    title: "Weather Application",
    description: "A dynamic weather app that displays city weather details with interactive UI and dynamic backgrounds.",
    image: "https://via.placeholder.com/600x400.png/1E88E5/FFFFFF?text=Weather+App",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ismaildaniyal/weather_app.git",
    demo: "https://ismaildaniyal.github.io/weather_app/",
    category: "web",
  },
  {
    id: 15,
    title: "Library Management System",
    description: "A C++ application for managing library operations using object-oriented programming principles.",
    image: "https://via.placeholder.com/600x400.png/DCE775/FFFFFF?text=Library+System",
    tags: ["C++", "OOP"],
    github: "https://github.com",
    demo: undefined,
    category: "web",
  },
  {
    id: 16,
    title: "Database Mini-Project: Library Management System",
    description: "A C# mini-project for library management with file handling for data storage and CRUD operations.",
    image: "https://via.placeholder.com/600x400.png/AB47BC/FFFFFF?text=Library+Mini-Project",
    tags: ["C#", "File Handling"],
    github: "https://github.com",
    demo: undefined,
    category: "web",
  },
  {
    id: 17,
    title: "Text Editor with Trie and Huffman Coding",
    description: "A C++ notepad application with Trie-based autocomplete and Huffman coding for text compression.",
    image: "https://via.placeholder.com/600x400.png/FF8A65/FFFFFF?text=Text+Editor",
    tags: ["C++", "Trie", "Huffman Coding"],
    github: "https://github.com",
    demo: undefined,
    category: "web",
  },
  {
    id: 18,
    title: "Automated Exam Management System",
    description: "A system that uses k-means clustering to automate exam seating plans and faculty allocation.",
    image: "https://via.placeholder.com/600x400.png/4CAF50/FFFFFF?text=Exam+Management",
    tags: ["Python", "Scikit-learn", "K-Means Clustering"],
    github: "https://github.com",
    demo: undefined,
    category: "dataScience",
  },
  {
    id: 19,
    title: "Battleship Game in C++",
    description: "A classic Battleship game with Player vs Player and Computer vs Player modes, featuring customizable difficulty levels and a console-based interface.",
    image: "https://via.placeholder.com/600x400.png/FF5722/FFFFFF?text=Battleship+Game",
    tags: ["C++"],
    github: "https://github.com",
    demo: undefined,
    category: "web",
  },
  {
    id: 20,
    title: "Tic-Tac-Toe Game",
    description: "A 3x3 grid-based Tic-Tac-Toe game in C++ with a two-player mode, featuring a console interface and error handling for invalid moves.",
    image: "https://via.placeholder.com/600x400.png/2196F3/FFFFFF?text=Tic-Tac-Toe",
    tags: ["C++"],
    github: "https://github.com",
    demo: undefined,
    category: "web",
  },
  {
    id: 21,
    title: "Wi-Fi Jammer",
    description: "A Python-based tool for simulating deauthentication attacks on Wi-Fi networks, designed for educational purposes to highlight network vulnerabilities.",
    image: "https://via.placeholder.com/600x400.png/9C27B0/FFFFFF?text=Wi-Fi+Jammer",
    tags: ["Python"],
    github: "https://github.com",
    demo: undefined,
    category: "automation",
  },
]

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Apps" },
  { id: "ai", name: "AI Projects" },
  { id: "automation", name: "Automation" },
  { id: "dataScience", name: "Data Science" },
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