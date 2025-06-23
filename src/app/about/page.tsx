"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, Code2, Shield, Users, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const timeline = [
  {
    year: "2024",
    title: "Hashlock Security Certification",
    description: "Certified for audit-ready smart contract development with enterprise-grade security standards.",
    icon: Shield,
    color: "text-green-400",
  },
  {
    year: "2023",
    title: "DeFi Protocol Architecture",
    description: "Led development of multi-million dollar DeFi protocols with advanced tokenomics and governance.",
    icon: Zap,
    color: "text-blue-400",
  },
  {
    year: "2022",
    title: "Full-Stack Web3 Integration",
    description: "Specialized in seamless blockchain integration with traditional web applications.",
    icon: Code2,
    color: "text-purple-400",
  },
  {
    year: "2021",
    title: "Smart Contract Mastery",
    description: "Mastered ERC standards and complex contract interactions for enterprise clients.",
    icon: Award,
    color: "text-cyan-400",
  },
]

const skills = [
  { category: "Smart Contracts", items: ["Solidity", "Vyper", "OpenZeppelin", "Hardhat", "Foundry"] },
  { category: "Blockchain Protocols", items: ["Ethereum", "Polygon", "BSC", "Arbitrum", "Optimism"] },
  { category: "Token Standards", items: ["ERC20", "ERC721", "ERC1155", "ERC404", "ERC2981"] },
  { category: "Frontend Integration", items: ["React", "Next.js", "Web3.js", "Ethers.js", "Wagmi"] },
  { category: "DeFi Protocols", items: ["Uniswap", "Compound", "Aave", "MakerDAO", "Curve"] },
  { category: "Security & Auditing", items: ["Slither", "Mythril", "Securify", "MythX", "Certora"] },
]

const certifications = [
  { name: "Hashlock Security Audit", issuer: "Hashlock", year: "2024" },
  { name: "Smart Contract Security", issuer: "ConsenSys", year: "2023" },
  { name: "Ethereum Developer", issuer: "Ethereum Foundation", year: "2022" },
  { name: "DeFi Specialist", issuer: "DeFi Alliance", year: "2022" },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="neon" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              About Me
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Decentralized Finance
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              With over 4 years of experience in blockchain development, I specialize in creating 
              secure, scalable, and audit-ready smart contracts for enterprise clients.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 md:w-1/2">
                      <Card className="ml-12 md:ml-0 md:mr-8 md:ml-8">
                        <CardHeader>
                          <div className="flex items-center space-x-2">
                            <Icon className={`w-5 h-5 ${item.color}`} />
                            <Badge variant="outline">{item.year}</Badge>
                          </div>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            {item.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* Skills Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{skill.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer} • {cert.year}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}