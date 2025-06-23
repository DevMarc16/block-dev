"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { 
  TrendingUp, 
  Award, 
  Clock, 
  Users2,
  DollarSign,
  FileCheck,
  Rocket,
  Globe
} from "lucide-react"

const stats = [
  {
    label: "Total Value Locked",
    value: 125,
    suffix: "M+",
    prefix: "$",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500",
    description: "Across all deployed contracts"
  },
  {
    label: "Smart Contracts",
    value: 87,
    suffix: "+",
    prefix: "",
    icon: FileCheck,
    color: "from-blue-500 to-cyan-500",
    description: "Audited and deployed"
  },
  {
    label: "Active Projects",
    value: 24,
    suffix: "",
    prefix: "",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
    description: "Currently in production"
  },
  {
    label: "Global Clients",
    value: 15,
    suffix: "+",
    prefix: "",
    icon: Globe,
    color: "from-orange-500 to-red-500",
    description: "Across 4 continents"
  }
]

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, value, isInView])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`
      }
    })
  }, [springValue, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}

export function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-yellow-500/[0.02] to-background" />
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
            className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full mb-6"
          >
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Proven Track Record</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Numbers That
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Speak Volumes
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Years of experience delivering secure, scalable blockchain solutions for enterprises worldwide
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Number */}
                <div className="text-4xl sm:text-5xl font-bold mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                  />
                </div>

                {/* Label */}
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                
                {/* Description */}
                <div className="text-sm text-muted-foreground">{stat.description}</div>

                {/* Decorative element */}
                <motion.div
                  className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-6 bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-border">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">5+ Years</div>
                <div className="text-sm text-muted-foreground">In Blockchain</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-border" />
            
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div className="text-left">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Record</div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-border" />
            
            <div className="flex items-center gap-3">
              <Users2 className="w-5 h-5 text-purple-500" />
              <div className="text-left">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}