"use client"

import type React from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Code } from "lucide-react"
import { motion } from "framer-motion"

const achievements = {
  certifications: [
    {
      id: 1,
      title: "JavaScript Certificate",
      issuer: "Udemy",
      date: "2024",
      description: "Validated core concepts of JavaScript including ES6+, asynchronous programming, and DOM manipulation.",
    },
    {
      id: 2,
      title: "Python and Flask",
      issuer: "Udemy",
      date: "2024",
      description: "Demonstrated ability to build and deploy scalable web applications using Python and Flask framework.",
    },
    {
      id: 3,
      title: "Teaching Assistant Certificate",
      issuer: "FAST-NUCES",
      date: "2025",
      description: "Recognized for supporting 350+ students in Data Structures, Algorithms, and Web Development courses.",
    },
  ],
  publications: [
    {
      id: 1,
      title: "Diagnostic Reasoning with RAG",
      publisher: "Medium",
      date: "Apr 7, 2025",
      description: "Explored how Retrieval-Augmented Generation (RAG) can simulate diagnostic reasoning in medical or decision-making applications.",
      link: "https://medium.com/@ismailsarfraz/diagnostic-reasoning-with-rag-2644efba1419"
    },
    {
      id: 2,
      title: "EchoCaption: From Audio to AI-Generated Video",
      publisher: "Medium",
      date: "Mar 16, 2025",
      description: "Introduced a system that converts spoken content into synchronized video with captions using AI tools.",
      link: "https://medium.com/@ismailsarfraz/echocaption-from-audio-to-ai-generated-video-11c1690af69c"
    },
    {
      id: 3,
      title: "Automating Code Generation: Pseudocode to C++ with Transformers",
      publisher: "Medium",
      date: "Feb 27, 2025",
      description: "Detailed the process of using transformer models to generate C++ code from natural language pseudocode.",
      link: "https://medium.com/@ismailsarfraz/heres-an-optimized-version-tailored-for-a-medium-post-with-a-more-engaging-and-concise-writing-72a15c649863"
    },
    {
      id: 4,
      title: "AI-Powered Lyrics-to-Song Generator with Whisper & Gemini AI",
      publisher: "Medium",
      date: "Feb 14, 2025",
      description: "Built an end-to-end system that converts written lyrics into sung audio using speech synthesis and LLMs.",
      link: "https://medium.com/@ismailsarfraz/ai-powered-lyrics-to-song-generator-using-whisper-gemini-ai-and-streamlit-d46fdfa7b5d2"
    },
    {
      id: 5,
      title: "Automating Meeting Notes with AI",
      publisher: "Medium",
      date: "Feb 14, 2025",
      description: "Demonstrated an AI workflow that listens to meetings, summarizes key points, and identifies action items in real time.",
      link: "https://medium.com/@ismailsarfraz/automating-meeting-notes-c7d2ee8a6b3c"
    },
    {
      id: 6,
      title: "Real-time Language Learning Assistant with Streamlit",
      publisher: "Medium",
      date: "Feb 2025",
      description: "Showcased a Streamlit-based app that translates, speaks, and quizzes users for immersive language learning.",
      link: "https://medium.com/@ismailsarfraz/real-time-language-learning-assistant-with-streamlit-3a2fd77dc603"
    }
  ],
  contributions: [
    {
      id: 1,
      title: "Solar Cell Simulation with PVlib",
      description: "Contributed simulation logic and visualizations for analyzing photovoltaic system performance, including effects of shading and tilt using PVlib and Jupyter Notebooks.",
      link: "https://github.com/ismaildaniyal/solar-cell-shading-loss.git"
    },
    {
      id: 2,
      title: "Phone Number Location Tracker",
      description: "Collaborated on a Python-based geolocation tool that tracks mobile number regions using open-source libraries for education and privacy-safe demonstrations.",
      link: "https://github.com/ismaildaniyal/Phone-number-location-tracker-using-python.git"
    },
    {
      id: 3,
      title: "Railway Reservation System",
      description: "Built a web-based railway ticketing platform in a 3-member team with secure login, seat booking, and real-time train tracking. Designed using Node.js, MongoDB, and JWT.",
      link: "https://github.com/ismaildaniyal/Railway-systems.git"
    }
  ]
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Achievements & Certifications"
          subtitle="Recognition of my technical expertise and contributions to the tech community."
        />

        <Tabs defaultValue="certifications" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-8">
            <TabsTrigger value="certifications">
              <Award className="h-4 w-4 mr-2" />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="publications">
              <BookOpen className="h-4 w-4 mr-2" />
              Publications
            </TabsTrigger>
            <TabsTrigger value="contributions">
              <Code className="h-4 w-4 mr-2" />
              Open Source
            </TabsTrigger>
          </TabsList>

          <TabsContent value="certifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AchievementCard
                    title={cert.title}
                    subtitle={cert.issuer}
                    date={cert.date}
                    description={cert.description}
                  />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="publications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{pub.title}</CardTitle>
                      <CardDescription>
                        {pub.publisher} | {pub.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{pub.description}</p>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center"
                      >
                        Read Article
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="contributions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.contributions.map((contrib, index) => (
                <motion.div
                  key={contrib.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{contrib.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{contrib.description}</p>
                      <a
                        href={contrib.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center"
                      >
                        View Repository
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function AchievementCard({
  title,
  subtitle,
  date,
  description,
  icon,
}: {
  title: string
  subtitle: string
  date: string
  description: string
  icon?: React.ReactNode
}) {
  return (
    <Card className="h-full">
      <CardHeader>
        {icon && <div className="mb-2">{icon}</div>}
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {subtitle} | {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
