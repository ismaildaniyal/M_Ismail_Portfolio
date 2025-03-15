// This file contains sample data for the portfolio
// Replace with your own data

export const personalInfo = {
  name: "John Doe",
  title: "Software Engineer",
  email: "contact@example.com",
  phone: "+1 (234) 567-890",
  location: "San Francisco, California",
  bio: "I'm a passionate software engineer with a focus on creating elegant, efficient, and user-friendly solutions. With over 5 years of experience in full-stack development, I've worked on a variety of projects ranging from small business websites to complex enterprise applications.",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}

export const skills = {
  frontend: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "Python", level: 70 },
    { name: "Django", level: 65 },
    { name: "GraphQL", level: 70 },
    { name: "REST API", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "MySQL", level: 65 },
    { name: "Firebase", level: 80 },
  ],
  devops: [
    { name: "Git", level: 85 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "CI/CD", level: 70 },
    { name: "Vercel", level: 80 },
  ],
  soft: [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Attention to Detail",
  ],
}

export const projects = [
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

export const experiences = [
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

export const achievements = {
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

