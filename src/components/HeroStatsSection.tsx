"use client"

import { motion, } from "framer-motion"
import { Trophy, Shield, Star, Sparkles, TrendingUp, Award, Target } from "lucide-react"
import { useEffect, useState } from "react"

const stats = [
  {
    label: "Projects Delivered",
    value: "50+",
    icon: Trophy,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGradient: "from-blue-500/10 via-blue-600/10 to-cyan-500/10",
    glowColor: "blue-500",
    particles: 12,
    description: "Successfully launched"
  },
  {
    label: "Smart Contracts",
    value: "200+",
    icon: Shield,
    gradient: "from-purple-500 via-violet-600 to-pink-500",
    bgGradient: "from-purple-500/10 via-violet-600/10 to-pink-500/10",
    glowColor: "purple-500",
    particles: 15,
    description: "Secure & audited"
  },
  {
    label: "Security Score",
    value: "100%",
    icon: Award,
    gradient: "from-green-500 via-emerald-600 to-teal-500",
    bgGradient: "from-green-500/10 via-emerald-600/10 to-teal-500/10",
    glowColor: "green-500",
    particles: 10,
    description: "Zero vulnerabilities"
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: Star,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    bgGradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10",
    glowColor: "orange-500",
    particles: 8,
    description: "Rating achieved"
  }
]

export function HeroStatsSection() {
  const [isClient, setIsClient] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {/* Smooth transitioning divider */}
      <div className="">
        {/* Wave divider */}
        <div className="absolute inset-0 -z-10">
          <svg
            className="absolute bottom-0 w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroStatsWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(99 102 241)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="rgb(139 92 246)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="rgb(236 72 153)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,40 C300,120 900,0 1200,80 L1200,120 L0,120 Z"
              fill="url(#heroStatsWaveGradient)"
              className="opacity-60"
            />
            <path
              d="M0,60 C300,10 900,100 1200,40 L1200,120 L0,120 Z"
              fill="url(#heroStatsWaveGradient)"
              className="opacity-40"
            />
          </svg>
        </div>

        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-background" />
      </div>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Top fading shadow for dark mode */}

        {/* Ultra Aesthetic Background */}
        <div className="absolute inset-0 -z-10">


          {/* Floating orbs */}
          {isClient && [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              className={`absolute w-32 h-32 rounded-full blur-3xl ${i % 4 === 0 ? 'bg-blue-500/20' :
                i % 4 === 1 ? 'bg-purple-500/20' :
                  i % 4 === 2 ? 'bg-green-500/20' : 'bg-orange-500/20'
                }`}
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${20 + (i * 10)}%`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 px-6 py-3 rounded-full mb-6"
            >
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Performance Metrics
              </span>
              <Sparkles className="w-4 h-4 text-primary/70" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Proven Track Record of
              </span>{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real metrics from years of blockchain development and client partnerships
            </p>
          </motion.div>

          {/* Ultra Aesthetic Stats Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative perspective-1000"
              >
                {/* Main Card */}
                <div className="relative">
                  {/* Card Container */}
                  <div className={`relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-3xl p-8 overflow-hidden group-hover:border-white/20 dark:group-hover:border-white/10 transition-all duration-500`}>


                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {isClient && [...Array(stat.particles)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-gradient-to-r ${stat.gradient} rounded-full`}
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`
                          }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                            y: [0, -30, -60],
                            x: [0, Math.random() * 20 - 10]
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.3 + index * 0.5,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </div>

                    <div className="relative z-10 text-center">
                      {/* Icon */}
                      <motion.div
                        animate={{
                          rotate: hoveredIndex === index ? [0, 5, -5, 0] : 0,
                          scale: hoveredIndex === index ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                      >
                        <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-2xl group-hover:shadow-xl transition-all duration-300`}>
                          <stat.icon className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                      </motion.div>

                      {/* Value */}
                      <motion.div
                        animate={{
                          scale: hoveredIndex === index ? 1.05 : 1,
                        }}
                        className="mb-3"
                      >
                        <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:animate-pulse`}>
                          {stat.value}
                        </div>
                        <div className={`text-xs text-muted-foreground/60 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-medium`}>
                          {stat.description}
                        </div>
                      </motion.div>

                      {/* Label */}
                      <div className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                        {stat.label}
                      </div>

                      {/* Progress Bar Effect */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="mt-4 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: index * 0.5
                          }}
                          className={`h-full w-1/3 bg-gradient-to-r ${stat.gradient} rounded-full`}
                        />
                      </motion.div>
                    </div>

                    {/* Corner Accent */}
                    <motion.div
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute -top-2 -right-2 w-12 h-12"
                    >
                      <div className={`w-full h-full bg-gradient-to-br ${stat.gradient} rounded-full blur-lg opacity-60`} />
                    </motion.div>

                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <div className="flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/5 to-purple-500/5 backdrop-blur-xl border border-primary/10 rounded-full">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Metrics updated in real-time
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}