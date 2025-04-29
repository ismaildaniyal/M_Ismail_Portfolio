"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    duration: "Jan 2024 - 2024",
    description: "Leading a team of developers to build scalable cloud solutions.",
    responsibilities: [
      "Designed and deployed microservices using Node.js and Docker, improving system scalability and maintainability.",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Reduced API response time by 40% through optimization",
    ],
  },
  {
    id: 2,
    role: "Python Programming Intern",
  company: "HiskyTech",
  duration: "Jul 2024 - Aug 2024",
  description: "Contributed to a Python-based project, completing tasks within strict deadlines to support real-world problem-solving.",
  responsibilities: [
    "Developed Python scripts to automate workflows, enhancing project efficiency",
    "Collaborated with team members via WhatsApp to receive and deliver project updates",
    "Completed assigned tasks within the specified time frame, ensuring internship requirements were met",
    "Engaged in learning opportunities to deepen Python programming skills",
    "Received positive feedback for timely task completion and proactive communication"
  ]
  },
  {
    id: 3,
    role: "Freelance Software Developer",
  company: "Self-Employed",
  duration: "2023 - Present",
  description: "Specialized in AI-powered bots, intelligent agents, and automation systems, delivering scalable solutions for diverse clients.",
  responsibilities: [
    "Developed AI-powered bots and automation systems using Python and Node.js, solving complex real-world problems",
    "Built web-based interfaces with React and Next.js, ensuring seamless user experiences",
    "Utilized AI/ML tools like TensorFlow and scikit-learn to enhance project functionality",
    "Mentored junior developers, providing guidance on best practices and code quality",
    "Collaborated with clients and teams to deliver high-impact, scalable solutions",
    "Completed student assignment projects, earning consistent positive feedback for technical expertise"
  ]
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the roles I've held throughout my career."
        />

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience }: { experience: (typeof experiences)[0] }) {
  return (
    <div className="relative flex items-start md:justify-between md:even:flex-row-reverse group">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow-sm text-muted-foreground z-10 md:order-1 md:group-even:-translate-x-1/2 md:group-odd:translate-x-1/2">
        {experience.id}
      </div>

      <div className="w-full md:w-[calc(50%-2.5rem)] md:group-even:pr-10 md:group-odd:pl-10">
        <Card>
          <CardHeader>
            <CardTitle>{experience.role}</CardTitle>
            <CardDescription>
              {experience.company} | {experience.duration}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{experience.description}</p>
            <ul className="space-y-2 list-disc pl-5">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {responsibility}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

