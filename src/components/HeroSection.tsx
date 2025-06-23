"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, Code2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const features = [
  "Audit-Ready Smart Contracts",
  "Enterprise-Grade Security",
  "Full-Stack Web3 Integration",
  "Hashlock Certified"
]

const techStack = [
  { name: "Solidity", color: "bg-blue-500" },
  { name: "React", color: "bg-cyan-500" },
  { name: "Next.js", color: "bg-gray-800" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Web3", color: "bg-orange-500" },
  { name: "Ethers", color: "bg-purple-500" },
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Badge variant="neon" className="px-4 py-2 text-sm">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Blockchain Development
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Secure</span>
              <span className="block bg-gradient-to-r from-primary via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Blockchain
              </span>
              <span className="block text-foreground">Solutions</span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building audit-ready smart contracts and enterprise-grade Web3 applications.
              Specialized in <span className="text-primary font-semibold">ERC20</span>, <span className="text-primary font-semibold">ERC721</span>, <span className="text-primary font-semibold">ERC1155</span> & <span className="text-primary font-semibold">ERC404</span> tokens.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-lg px-4 py-2 neon-border"
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="neon" className="text-base px-8 py-3 glow-effect">
                <Zap className="w-5 h-5 mr-2" />
                Book Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-3">
                <Code2 className="w-5 h-5 mr-2" />
                View Services
              </Button>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
                Trusted Technology Stack
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + techIndex * 0.1 }}
                    className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2 hover:border-primary/50 transition-colors duration-200"
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>
    </section>
  )
}