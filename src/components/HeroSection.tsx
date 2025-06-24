"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Code2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import Spline from '@splinetool/react-spline'

const features = [
  "Audit-Ready Smart Contracts",
  "Enterprise-Grade Security",
  "Full-Stack Web3 Integration",
  "Hashlock Certified"
]


export function HeroSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Spline 3D Background */}
      {isClient && (
        <div className="absolute  w-full h-full">
          <Spline
            scene="https://prod.spline.design/JOlvaw8D4CRhWYuQ/scene.splinecode"
            style={{
              width: '100%',
              height: '100%',
              background: 'transparent'
            }}
          />
        </div>
      )}

      {/* Elegant overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/40 to-background/0 z-[1]" />

      {/* Sleek aesthetic background effects */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient orb */}
        <div className="absolute top-1/4 -left-32 w-96 h-96">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/15 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Secondary accent orb */}
        <div className="absolute bottom-1/4 -right-32 w-80 h-80">
          <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="space-y-8 text-center max-w-4xl">
            {/* Clean Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Badge className="px-4 py-2 text-sm bg-muted/50 backdrop-blur-sm border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-muted-foreground font-medium">
                    Available for Projects
                  </span>
                </div>
              </Badge>
            </motion.div>

            {/* Clean Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-foreground mb-3">
                  Building the
                </span>
                <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Future of Web3
                </span>
              </h1>
            </motion.div>

            {/* Sleek Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Crafting secure, scalable blockchain solutions with
                <span className="text-primary font-medium"> precision</span> and
                <span className="text-primary font-medium"> excellence</span>.
              </p>
            </motion.div>

            {/* Sleek Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* Modern CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors group"
              >
                <Zap className="w-4 h-4 mr-2" />
                Start Building
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 border-border hover:bg-muted/50 font-medium rounded-lg transition-colors"
              >
                <Code2 className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </div>

      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10" />

    </section>
  )
}