"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2021 - Present",
    description: "Leading a team of developers to build scalable cloud solutions.",
    responsibilities: [
      "Architected and implemented microservices using Node.js and Docker",
      "Led migration from monolithic architecture to microservices",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Reduced API response time by 40% through optimization",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "WebSolutions Co.",
    duration: "Mar 2018 - Dec 2020",
    description: "Developed and maintained web applications for enterprise clients.",
    responsibilities: [
      "Built responsive web applications using React and Redux",
      "Developed RESTful APIs using Node.js and Express",
      "Implemented authentication and authorization using JWT",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Participated in agile development processes",
    ],
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "StartupHub",
    duration: "Jun 2017 - Feb 2018",
    description: "Assisted in developing user interfaces for startup products.",
    responsibilities: [
      "Developed responsive UI components using HTML, CSS, and JavaScript",
      "Fixed bugs and improved performance of existing applications",
      "Participated in daily stand-ups and sprint planning",
      "Collaborated with backend developers to integrate APIs",
    ],
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

