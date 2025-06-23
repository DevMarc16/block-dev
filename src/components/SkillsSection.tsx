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

export function SkillsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-green-500/[0.02] to-background" />
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${category.color} rounded-full`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
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
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                  <Zap className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium">{tech}</span>
                </div>
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