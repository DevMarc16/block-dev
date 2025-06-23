"use client"

import { motion } from "framer-motion"
import { Github, Shield, TrendingUp, Palette, Code2, Users, Zap, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"

const projects = [
  {
    title: "DeFiVault Protocol",
    category: "DeFi Protocol",
    description: "Multi-strategy yield farming protocol with automated portfolio rebalancing and risk management. Handles $2M+ TVL with advanced tokenomics.",
    image: "/api/placeholder/400/250",
    technologies: ["Solidity", "Hardhat", "React", "Ethers.js", "Chainlink"],
    features: [
      "Auto-compounding yield strategies",
      "Multi-token vault system",
      "Risk-adjusted portfolio rebalancing",
      "Governance token with voting mechanisms"
    ],
    links: {
      live: "https://defivault.example.com",
      github: "https://github.com/example/defivault",
      etherscan: "0x742d35Cc6251D4E9Ca2F6D1b8E8B0c6E5F8A9B3D",
      audit: "https://hashlock.com/audit/defivault"
    },
    status: "Live",
    tvl: "$2.1M",
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    title: "ArtChain NFT Marketplace",
    category: "NFT Platform",
    description: "Complete NFT marketplace with advanced royalty system, auction mechanisms, and cross-chain bridging for digital art collections.",
    image: "/api/placeholder/400/250",
    technologies: ["Solidity", "ERC721A", "Next.js", "IPFS", "Polygon"],
    features: [
      "Gas-optimized batch minting",
      "Dutch & English auction systems",
      "Creator royalty enforcement",
      "Cross-chain NFT transfers"
    ],
    links: {
      live: "https://artchain.example.com",
      github: "https://github.com/example/artchain",
      etherscan: "0x8F7A3C4B2E9D6F1A5B3C8E7F2A1D4B6C9E8F7A2B",
      audit: "https://hashlock.com/audit/artchain"
    },
    status: "Live",
    volume: "15.2K ETH",
    icon: Palette,
    color: "text-purple-400"
  },
  {
    title: "SecureDAO Governance",
    category: "DAO Platform",
    description: "Comprehensive DAO governance system with advanced proposal mechanisms, treasury management, and multi-sig integration.",
    image: "/api/placeholder/400/250",
    technologies: ["Solidity", "OpenZeppelin", "Snapshot", "Gnosis Safe", "React"],
    features: [
      "Quadratic voting mechanisms",
      "Treasury fund management",
      "Multi-signature proposal execution",
      "Delegation and vote weighting"
    ],
    links: {
      live: "https://securedao.example.com",
      github: "https://github.com/example/securedao",
      etherscan: "0x3A7F8B2C1E9D4B6A8F7C3E2A5D8B9F6C4E1A7B3D",
      audit: "https://hashlock.com/audit/securedao"
    },
    status: "Live",
    members: "2.8K",
    icon: Users,
    color: "text-blue-400"
  },
  {
    title: "FlashArb MEV Bot",
    category: "MEV/Arbitrage",
    description: "High-frequency arbitrage bot leveraging flash loans across multiple DEXs with advanced slippage protection and gas optimization.",
    image: "/api/placeholder/400/250",
    technologies: ["Solidity", "Node.js", "Web3.py", "Flashloans", "MEV"],
    features: [
      "Cross-DEX arbitrage detection",
      "Flash loan integration",
      "Gas price optimization",
      "MEV protection mechanisms"
    ],
    links: {
      github: "https://github.com/example/flasharb",
      etherscan: "0xB6C4E8F2A9D7B3F5C8E1A4D7B9F2C5E8A3B6D9F1"
    },
    status: "Active",
    profit: "$45K+",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    title: "CrossChain Bridge",
    category: "Infrastructure",
    description: "Secure cross-chain bridge supporting multiple networks with advanced security measures and automated liquidity management.",
    image: "/api/placeholder/400/250",
    technologies: ["Solidity", "LayerZero", "Chainlink", "React", "Multi-chain"],
    features: [
      "Multi-chain asset transfers",
      "Automated liquidity balancing",
      "Oracle-based security validation",
      "Fee optimization algorithms"
    ],
    links: {
      live: "https://bridge.example.com",
      github: "https://github.com/example/bridge",
      etherscan: "0xD9F3A7B5C2E8F1A6B4D7C9E2A5F8B3D6C1E4A7B9",
      audit: "https://hashlock.com/audit/bridge"
    },
    status: "Live",
    volume: "$8.5M",
    icon: Code2,
    color: "text-cyan-400"
  },
  {
    title: "StakingRewards Platform",
    category: "Staking Protocol",
    description: "Flexible staking platform with multiple reward mechanisms, lock periods, and yield boost multipliers for various tokens.",
    image: "/api/placeholder/400/250",
    technologies: ["Solidity", "OpenZeppelin", "React", "Web3", "Compound"],
    features: [
      "Flexible lock period staking",
      "Multi-token reward distribution",
      "Yield boost multipliers",
      "Emergency withdrawal mechanisms"
    ],
    links: {
      live: "https://staking.example.com",
      github: "https://github.com/example/staking",
      etherscan: "0xE1A4B7C9F2D5E8A3B6C9F2E5A8D1B4C7F9E2A5B8"
    },
    status: "Live",
    staked: "$1.8M",
    icon: Shield,
    color: "text-emerald-400"
  }
]

const stats = [
  { label: "Total Value Locked", value: "$15.2M", icon: TrendingUp },
  { label: "Smart Contracts Deployed", value: "47", icon: Code2 },
  { label: "Security Audits Passed", value: "12", icon: Shield },
  { label: "Active Projects", value: "8", icon: Zap },
]

export default function Projects() {
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
              <Code2 className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of enterprise-grade blockchain solutions, from DeFi protocols
              to NFT marketplaces, all built with security-first principles.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="text-center p-6">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <CardContainer className="inter-var">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                      >
                        {project.title}
                      </CardItem>
                      <CardItem
                        translateZ="20"
                        className="mb-4"
                      >
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">
                            {project.category}
                          </Badge>
                          {(project.tvl || project.volume || project.profit || project.members || project.staked) && (
                            <div className="text-sm font-semibold text-primary">
                              {project.tvl || project.volume || project.profit || project.members || project.staked}
                            </div>
                          )}
                        </div>
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4"
                      >
                        {project.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mt-4 mb-6">
                        <div className="relative h-48 bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center rounded-xl">
                          <Icon className={`w-16 h-16 ${project.color}`} />
                          <div className="absolute top-4 right-4">
                            <Badge variant={project.status === "Live" ? "neon" : "secondary"}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                      </CardItem>

                      <CardItem translateZ="40" className="mb-4">
                        <div className="space-y-4">
                          {/* Features */}
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                            <ul className="space-y-1">
                              {project.features.slice(0, 2).map((feature, idx) => (
                                <li key={idx} className="flex items-center space-x-2 text-sm">
                                  <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardItem>

                      <div className="flex justify-between items-center mt-6">
                        <CardItem
                          translateZ={20}
                          as="a"
                          href={project.links.live || project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                          View Project →
                        </CardItem>
                        {project.links.github && (
                          <CardItem
                            translateZ={20}
                            as="a"
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                          >
                            <Github className="w-3 h-3 mr-1 inline" />
                            Code
                          </CardItem>
                        )}
                      </div>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-cyan-400/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                Ready to Build Your Next Project?
              </CardTitle>
              <CardDescription className="text-base mb-6">
                Let&apos;s discuss your requirements and create a custom blockchain solution
                that meets your enterprise needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="neon" className="mr-4">
                <Zap className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                <Users className="w-5 h-5 mr-2" />
                Schedule Call
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}