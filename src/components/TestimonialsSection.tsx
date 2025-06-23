"use client"

import { motion } from "framer-motion"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Quote, Star, Building2, Globe, Shield } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "DeFi Innovations",
    content: "Their smart contract expertise is exceptional. They delivered a complex DeFi protocol that has processed over $50M in transactions without a single security incident.",
    rating: 5,
    image: "/testimonials/sarah.jpg",
    companyIcon: Shield,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Michael Rodriguez",
    role: "Founder",
    company: "NFT Marketplace Pro",
    content: "Working with them transformed our vision into reality. The NFT marketplace they built handles thousands of daily transactions with incredible gas efficiency.",
    rating: 5,
    image: "/testimonials/michael.jpg",
    companyIcon: Globe,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Emily Watson",
    role: "Head of Engineering",
    company: "CrossChain Labs",
    content: "Their deep understanding of cross-chain protocols helped us launch our bridge 3 months ahead of schedule. Security audits came back with zero critical issues.",
    rating: 5,
    image: "/testimonials/emily.jpg",
    companyIcon: Building2,
    gradient: "from-orange-500 to-red-500"
  }
]

const trustedBy = [
  "Ethereum Foundation",
  "Polygon Studios",
  "Chainlink Labs",
  "OpenZeppelin",
  "ConsenSys",
  "Alchemy"
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-pink-500/[0.02] to-background" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-500 dark:text-pink-400 px-4 py-2 rounded-full mb-6"
          >
            <Quote className="w-4 h-4" />
            <span className="text-sm font-medium">Client Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Trusted by
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the teams who've shipped successful blockchain products with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <BackgroundGradient className="rounded-[22px] h-full p-6 bg-card">
                <div className="flex flex-col h-full">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  
                  {/* Content */}
                  <p className="text-sm leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <span className="text-lg font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                    
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${testimonial.gradient} opacity-10`}>
                      <testimonial.companyIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Trusted by Leading Blockchain Organizations
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedBy.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <div className="text-xl font-semibold text-muted-foreground/60 group-hover:text-primary transition-colors duration-300">
                  {company}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
            <Shield className="w-5 h-5" />
            <span className="font-medium">100% Security Audit Success Rate</span>
            <Shield className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}