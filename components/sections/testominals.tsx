"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Updated testimonials with more content matching the screenshot
const testimonials = [
  {
    id: 1,
    name: "David Kim",
    title: "Founder, StartupLaunch",
    description:
      "Saad helped us build our MVP in record time. His full-stack skills and ability to quickly understand our vision were invaluable. I highly recommend him for any challenging project.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "John Doe",
    title: "Automation Client – Fiverr",
    description:
      "Brilliant automation work! Exceeded expectations. His attention to detail and problem-solving skills made our project a success. Highly recommend!",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Ali Raza",
    title: "Web Scraping & Dashboard Client – WhatsApp",
    description:
      "Timely delivery with strong communication. Very professional! The dashboard exceeded our expectations and the data extraction was flawless.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  // Automatic sliding every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000) // 5 seconds

    return () => clearInterval(interval) // Clean up interval on component unmount
  }, [])

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>

        <div className="relative mt-12 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="bg-[#131320] text-white border-none rounded-2xl shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col items-center">
                    {/* Quote marks */}
                    <div className="text-6xl text-cyan-400 font-serif opacity-50 mb-4">"</div>

                    {/* Testimonial text */}
                    <p className="text-center text-lg md:text-xl text-gray-200 italic mb-6">
                      {testimonials[currentTestimonialIndex].description}
                    </p>

                    {/* Stars */}
                    <div className="flex items-center justify-center space-x-1 mb-8">
                      {Array(testimonials[currentTestimonialIndex].rating)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i} className="text-yellow-400 text-2xl">
                            ★
                          </span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-6"></div>

                    {/* Avatar and info */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-cyan-400 mb-4">
                        <Image
                          src={testimonials[currentTestimonialIndex].image || "/placeholder.svg"}
                          alt={testimonials[currentTestimonialIndex].name}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-cyan-400 font-bold text-xl">{testimonials[currentTestimonialIndex].name}</h3>
                      <p className="text-gray-400">{testimonials[currentTestimonialIndex].title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-4 rounded-full bg-[#1a1a2e] text-white hover:bg-[#252540] transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 p-4 rounded-full bg-[#1a1a2e] text-white hover:bg-[#252540] transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonialIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentTestimonialIndex === index ? "bg-cyan-400 scale-110" : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
