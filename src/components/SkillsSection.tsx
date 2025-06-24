"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Shield, 
  Database, 
  Globe, 
  Cpu, 
  Lock,
  Blocks,
  GitBranch,
  Layers,
  Zap
} from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

const skillCategories = [
  {
    title: "Blockchain Development",
    icon: Blocks,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Solidity", level: 95 },
      { name: "Smart Contract Security", level: 92 },
      { name: "EVM & Gas Optimization", level: 90 },
      { name: "Hardhat & Foundry", level: 88 },
      { name: "OpenZeppelin", level: 93 }
    ]
  },
  {
    title: "Web3 Integration",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Ethers.js / Web3.js", level: 94 },
      { name: "Wallet Integration", level: 91 },
      { name: "IPFS & Arweave", level: 85 },
      { name: "TheGraph Protocol", level: 87 },
      { name: "Chainlink Oracles", level: 86 }
    ]
  },
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "React / Next.js", level: 93 },
      { name: "TypeScript", level: 91 },
      { name: "TailwindCSS", level: 94 },
      { name: "State Management", level: 89 },
      { name: "Web3 UI/UX", level: 88 }
    ]
  },
  {
    title: "Security & Testing",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Security Auditing", level: 90 },
      { name: "Unit & Integration Testing", level: 92 },
      { name: "Slither & Mythril", level: 85 },
      { name: "Formal Verification", level: 82 },
      { name: "Bug Bounty Experience", level: 87 }
    ]
  }
]

const technologies = [
  "Ethereum", "Polygon", "Arbitrum", "Optimism", "BSC", "Avalanche",
  "AAVE", "Uniswap", "Compound", "MakerDAO", "Curve", "Balancer",
  "NFTs", "DeFi", "DAOs", "Layer2", "Oracles", "MEV"
]

const techStack = [
  {
    name: "Solidity",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
    description: "Smart Contract Language"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Frontend Framework"
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "Full-Stack Framework"
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Type-Safe JavaScript"
  },
  {
    name: "Ethers.js",
    logo: "https://docs.ethers.org/v5/static/logo.svg",
    description: "Ethereum Library"
  },
  {
    name: "Wagmi",
    logo: "https://wagmi.sh/logo-dark.svg",
    description: "React Web3 Hooks"
  },
  {
    name: "Flare Network",
    logo: "https://flare.network/wp-content/uploads/FLR_Flare_Logo_Icon_Colour.svg",
    description: "Data-Rich Blockchain"
  },
  {
    name: "XRPL",
    logo: "https://xrpl.org/assets/img/xrp-ledger-logo.svg",
    description: "XRP Ledger"
  },
  {
    name: "Base",
    logo: "https://avatars.githubusercontent.com/u/108554348?s=280&v=4",
    description: "Coinbase L2 Chain"
  },
  {
    name: "Ethereum",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
    description: "Blockchain Platform"
  },
]

export function SkillsSection() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Enhanced gradient background with animated elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-500/[0.02] to-background" />
        
        {/* Animated circuit pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 25px 25px, 25px 25px'
          }} />
        </div>
        
        {/* Floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              delay: i * 2
            }}
            className={`absolute w-16 h-16 rounded-lg border border-green-500/20 ${
              i % 2 === 0 ? 'bg-green-500/5' : 'bg-emerald-500/5'
            }`}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`
            }}
          />
        ))}
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
            className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 dark:text-green-400 px-4 py-2 rounded-full mb-6"
          >
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-medium">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Mastery in
            </span>{" "}
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Blockchain Tech
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep expertise across the entire blockchain development stack with a focus on security and performance
          </p>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl blur opacity-0 group-hover:opacity-25 transition duration-500`} />
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ 
                          duration: 0.4,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05
                        }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium group-hover/skill:text-primary transition-colors">{skill.name}</span>
                          <motion.span 
                            className="text-sm text-muted-foreground"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1,
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full relative overflow-hidden`}
                          >
                            <motion.div 
                              className="absolute inset-0 bg-white/30"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: skillIndex * 0.2
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {isClient && [...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-primary/30 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`
                      }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0, 1.5, 0],
                        y: [0, -30]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.6 + categoryIndex * 0.3
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Technologies & Protocols
            </span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -8, 8, 0],
                  transition: { duration: 0.4 }
                }}
                className="group cursor-pointer relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-purple-500/20 to-green-500/20 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" />
                
                <div className="relative flex items-center gap-2 px-4 py-3 bg-card/90 backdrop-blur-md border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 overflow-hidden">
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <motion.div
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Zap className="w-3 h-3 text-primary" />
                  </motion.div>
                  
                  <span className="text-sm font-medium relative z-10 group-hover:text-primary transition-colors">{tech}</span>
                  
                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute top-1 right-1 w-1 h-1 bg-primary rounded-full"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.1
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack with Logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Tech Stack & Tools
            </span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center space-x-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-3 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 relative overflow-hidden"
              >
                {/* Logo */}
                <div className="relative w-6 h-6 flex-shrink-0">
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    fill
                    sizes="24px"
                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300">{tech.name}</span>
                  <span className="text-xs text-muted-foreground">{tech.description}</span>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Lock className="w-4 h-4" />
            <span className="text-sm">Security-First Development Approach</span>
            <Lock className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}