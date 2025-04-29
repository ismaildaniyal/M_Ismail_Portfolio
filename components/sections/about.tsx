"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, User } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="About Me"
          subtitle="More about my background, journey, and what drives me as a developer"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProfilePhoto />
          </motion.div>

          <div className="md:col-span-2 space-y-6">
            <motion.h3
              className="text-2xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Hi, I'm Ismail Daniyal
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I'm a passionate software engineer with a focus on creating elegant, efficient, and user-friendly solutions. With over two years of experience in freelancing, I've worked on a variety of projects ranging from small projects to complex enterprise applications.
            </motion.p>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              My journey into the field of software development began when I built my first project. Since then, I've been captivated by the endless possibilities of technology and its power to solve real-world problems. I'm particularly interested in web technologies, DevOps, Generative AI, and Artificial Intelligence.
            </motion.p>

            <Tabs defaultValue="experience" className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experience">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Education
                </TabsTrigger>
                <TabsTrigger value="personal">
                  <User className="h-4 w-4 mr-2" />
                  Personal
                </TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="space-y-4 mt-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">Software Developer</h4>
                      <span className="text-sm text-muted-foreground">2024 - 2024</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Developed, and maintained scalable web applications using React, Node.js, Next.js and Docker, while integrating Machine Learning, AI, and Generative AI components. Applied DevOps best practices for continuous integration, deployment, and efficient model delivery in production environments.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                <CardContent className="p-4 space-y-2">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">Teaching Assistant</h4>
                    <span className="text-sm text-muted-foreground">2022 - Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                      FAST-NUCES  
                      <br /> • Data Structures – Fall 2023  
                      <br /> • Social Networking – Spring 2024  
                      <br /> • Web Development, Design and Analysis of Algorithms – Ongoing  
                      <br /> ○ Conducted tutorials, prepared assessments, and provided academic support to help students grasp software engineering, algorithmic problem-solving, and web technologies.  
                      <br /> ○ Supported over 300 students, consistently earning positive feedback for technical expertise and mentoring.
                    </p>

                  
                </CardContent>
              </Card>
              <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">Freelancing</h4>
                      <span className="text-sm text-muted-foreground">2023 - Present</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                    I specialize in developing AI-powered bots, intelligent agents, and automation systems to address complex real-world challenges through web-based interfaces. My expertise spans AI/ML, full-stack development, and bot automation, leveraging modern tools and best practices to deliver scalable, high-impact solutions. I mentor junior developers and collaborate effectively across teams, ensuring successful project outcomes. Throughout my journey, I’ve tackled diverse projects, including student assignments, consistently earning positive feedback for my technical solutions and problem-solving skills.
                      </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="education" className="space-y-4 mt-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">BS. Computer Science</h4>
                      <span className="text-sm text-muted-foreground">2021 - 2025</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      FAST National University of Computer and Emerging Sciences in Computer Science
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">FSC Pre-Engineering</h4>
                      <span className="text-sm text-muted-foreground">2019 - 2021</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      GOVT ISLAMIA Collage Chiniot
                    </p>
                  </CardContent>
                </Card>
               
              </TabsContent>
              <TabsContent value="personal" className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                When I'm not coding, you can find me enjoying E-Gaming, playing indoor games, or spending time with friends. I also love traveling and exploring new places.
                </p>
                <p className="text-muted-foreground">
                  I believe in continuous learning and regularly attend tech conferences, contribute to open-source
                  projects.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      {/* Profile image container */}
      <div className="relative">
        {/* Border decoration */}
        <motion.div
          className="absolute inset-0 border-2 border-primary rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Image */}
        <div className="relative z-10 p-2">
          <div className="aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src="WhatsApp Image 2025-03-15 at 7.01.37 PM.jpeg"
              alt="Ismail Daniyal - Software Engineer"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                e.currentTarget.src = "placeholder.svgheight=400&width=400"
              }}
            />
          </div>
        </div>

        {/* Floating badge */}
        <motion.div
          className="absolute -bottom-5 -right-5 bg-background shadow-lg rounded-full px-4 py-2 border border-border z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.p
            className="text-sm font-medium"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <span className="text-primary">Fresher</span> 
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

