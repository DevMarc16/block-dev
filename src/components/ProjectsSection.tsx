"use client"

import { motion } from "framer-motion"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { 
  Sparkles, 
  FileCode2, 
  Wallet, 
  TrendingUp, 
  Users, 
  Shield,
  Coins,
  LineChart
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "DeFi Yield Aggregator",
    description: "Automated yield farming protocol optimizing returns across multiple DeFi platforms with advanced rebalancing strategies",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500 via-violet-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <LineChart className="absolute right-4 bottom-4 w-20 h-20 text-white/20" />
        <div className="relative z-10 p-4">
          <div className="text-white/90 text-sm font-medium">TVL</div>
          <div className="text-white text-2xl font-bold">$12.4M</div>
        </div>
      </div>
    ),
    className: "md:col-span-2",
    icon: <TrendingUp className="h-4 w-4 text-purple-500" />,
    techStack: ["Solidity", "Hardhat", "React", "TheGraph"]
  },
  {
    title: "NFT Marketplace",
    description: "Full-featured marketplace with lazy minting, royalties, and auction mechanisms",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500 to-red-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="grid grid-cols-3 gap-1 p-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-8 h-8 bg-white/20 rounded" />
          ))}
        </div>
      </div>
    ),
    className: "md:col-span-1",
    icon: <Sparkles className="h-4 w-4 text-orange-500" />,
    techStack: ["ERC721", "IPFS", "Next.js"]
  },
  {
    title: "Cross-Chain Bridge",
    description: "Secure asset bridge supporting EVM chains with optimistic validation",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="flex items-center justify-center h-full gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-full" />
          <div className="w-1 h-16 bg-white/20 rotate-45" />
          <div className="w-12 h-12 bg-white/20 rounded-full" />
        </div>
      </div>
    ),
    className: "md:col-span-1",
    icon: <Shield className="h-4 w-4 text-cyan-500" />,
    techStack: ["LayerZero", "Chainlink", "TypeScript"]
  },
  {
    title: "DAO Governance Platform",
    description: "On-chain governance with quadratic voting and timelock mechanisms for decentralized organizations",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <Users className="absolute right-4 bottom-4 w-20 h-20 text-white/20" />
        <div className="relative z-10 p-4">
          <div className="text-white/90 text-sm font-medium">Active DAOs</div>
          <div className="text-white text-2xl font-bold">23</div>
        </div>
      </div>
    ),
    className: "md:col-span-2",
    icon: <Users className="h-4 w-4 text-green-500" />,
    techStack: ["OpenZeppelin", "Snapshot", "React", "Aragon"]
  }
]

export function ProjectsSection() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/[0.02] to-background" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Floating Elements & Particle System */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Animated particle grid */}
          {isClient && [...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{ 
                opacity: 0,
                x: Math.random() * 1200,
                y: Math.random() * 800
              }}
              animate={{
                opacity: [0, 0.3, 0],
                x: Math.random() * 1200 + (Math.random() - 0.5) * 300,
                y: Math.random() * 800 + (Math.random() - 0.5) * 200,
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className={`absolute w-1 h-1 rounded-full ${
                i % 4 === 0 ? 'bg-purple-500/30' :
                i % 4 === 1 ? 'bg-blue-500/30' :
                i % 4 === 2 ? 'bg-cyan-500/30' : 'bg-pink-500/30'
              }`}
            />
          ))}

          {/* Large transparent tech images */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ 
              opacity: [0.03, 0.08, 0.03],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-80 h-80"
          >
            <Image
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop"
              alt="Tech matrix"
              fill
              sizes="320px"
              className="object-cover rounded-full opacity-5 mix-blend-multiply dark:mix-blend-screen"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ 
              opacity: [0.02, 0.06, 0.02],
              scale: [1.5, 0.5, 1.5],
              rotate: [0, -180, -360]
            }}
            transition={{ duration: 30, repeat: Infinity, delay: 5 }}
            className="absolute top-1/2 -right-32 w-96 h-96"
          >
            <Image
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop"
              alt="Blockchain network"
              fill
              sizes="400px"
              className="object-cover opacity-4 mix-blend-multiply dark:mix-blend-screen"
            />
          </motion.div>
        </div>
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
            className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-500 dark:text-purple-400 px-4 py-2 rounded-full mb-6"
          >
            <FileCode2 className="w-4 h-4" />
            <span className="text-sm font-medium">Featured Projects</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Blockchain Projects
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              That Scale
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world blockchain applications handling millions in TVL with battle-tested security
          </p>
        </motion.div>

        {/* Enhanced Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative">
                  <BentoGridItem
                    title={project.title}
                    description={
                      <div>
                        <p className="mb-4 text-muted-foreground/80">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary dark:from-primary/20 dark:to-purple-500/20 text-xs font-medium border border-primary/20 hover:border-primary/40 transition-colors cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    }
                    header={project.header}
                    className={`${project.className} group-hover:border-primary/30 transition-all duration-300`}
                    icon={project.icon}
                  />
                </div>
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { label: "Smart Contracts Deployed", value: "50+", icon: FileCode2, color: "from-blue-500 to-cyan-500" },
            { label: "Total Value Secured", value: "$25M+", icon: Coins, color: "from-green-500 to-emerald-500" },
            { label: "Active Users", value: "10K+", icon: Users, color: "from-purple-500 to-pink-500" },
            { label: "Audit Score", value: "98%", icon: Shield, color: "from-orange-500 to-red-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300`} />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 group-hover:border-primary/50 transition-all duration-300">
                <motion.div 
                  className="flex flex-col items-center gap-3"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {isClient && [...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/50 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`
                      }}
                      animate={{
                        opacity: [0, 0.5, 0],
                        scale: [0, 1, 0],
                        y: [0, -20]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5 + index * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}