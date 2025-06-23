"use client"

import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { StatsSection } from "@/components/StatsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CTASection } from "@/components/CTASection"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Parallax transforms for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0.3])

  return (
    <div ref={containerRef} className="relative">
      {/* Global parallax background layers */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {/* Layer 1 - Slowest */}
        <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
          <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[30%] right-[15%] w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* Layer 2 - Medium */}
        <motion.div style={{ y: y2 }} className="absolute inset-0">
          <div className="absolute top-[60%] left-[60%] w-[400px] h-[400px] bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[10%] right-[20%] w-[350px] h-[350px] bg-gradient-to-br from-orange-500/5 via-yellow-500/5 to-transparent rounded-full blur-3xl" />
        </motion.div>

        {/* Layer 3 - Fastest */}
        <motion.div style={{ y: y3 }} className="absolute inset-0">
          <div className="absolute top-[40%] right-[40%] w-[300px] h-[300px] bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[20%] left-[30%] w-[250px] h-[250px] bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Sections with smooth transitions */}
      <div className="relative z-10">
        <HeroSection />
        
        <div className="relative">
          <ServicesSection />
        </div>

        <div className="relative">
          <ProjectsSection />
        </div>

        <div className="relative">
          <SkillsSection />
        </div>

        <div className="relative">
          <StatsSection />
        </div>

        <div className="relative">
          <TestimonialsSection />
        </div>

        <div className="relative">
          <CTASection />
        </div>
      </div>
    </div>
  )
}
