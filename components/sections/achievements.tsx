"use client"

import type React from "react"

import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, BookOpen, Code, Trophy } from "lucide-react"
import { motion } from "framer-motion"

const achievements = {
  certifications: [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Validated expertise in designing distributed systems on AWS.",
    },
    {
      id: 2,
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2021",
      description: "Demonstrated ability to build scalable applications using Google Cloud.",
    },
    {
      id: 3,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB",
      date: "2020",
      description: "Proven knowledge of MongoDB application development.",
    },
  ],
  awards: [
    {
      id: 1,
      title: "Hackathon Winner",
      issuer: "TechCrunch Disrupt",
      date: "2023",
      description: "First place for developing an AI-powered accessibility tool.",
    },
    {
      id: 2,
      title: "Outstanding Contributor",
      issuer: "Open Source Initiative",
      date: "2022",
      description: "Recognized for significant contributions to open-source projects.",
    },
  ],
  publications: [
    {
      id: 1,
      title: "Optimizing React Performance",
      publisher: "Medium",
      date: "2023",
      description: "A comprehensive guide to improving React application performance.",
      link: "https://medium.com",
    },
    {
      id: 2,
      title: "Microservices Architecture Patterns",
      publisher: "Dev.to",
      date: "2022",
      description: "Exploring common patterns in microservices architecture.",
      link: "https://dev.to",
    },
  ],
  contributions: [
    {
      id: 1,
      title: "React",
      description: "Contributed performance improvements and bug fixes.",
      link: "https://github.com/facebook/react",
    },
    {
      id: 2,
      title: "TypeScript",
      description: "Added new type definitions and improved documentation.",
      link: "https://github.com/microsoft/typescript",
    },
    {
      id: 3,
      title: "Next.js",
      description: "Implemented new features and fixed critical bugs.",
      link: "https://github.com/vercel/next.js",
    },
  ],
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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="certifications">
              <Award className="h-4 w-4 mr-2" />
              Certifications
            </TabsTrigger>
            <TabsTrigger value="awards">
              <Trophy className="h-4 w-4 mr-2" />
              Awards
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

          <TabsContent value="awards" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.awards.map((award, index) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AchievementCard
                    title={award.title}
                    subtitle={award.issuer}
                    date={award.date}
                    description={award.description}
                    icon={<Trophy className="h-8 w-8 text-primary" />}
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

