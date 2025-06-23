"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Code2,
  Palette, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Lock,
  TrendingUp,
  Layers
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { BackgroundGradient } from "@/components/ui/background-gradient"

const services = {
  "smart-contracts": {
    title: "Smart Contract Development",
    subtitle: "Audit-Ready & Enterprise-Grade",
    icon: Shield,
    features: [
      "ERC20, ERC721, ERC1155, ERC404 Token Development",
      "UUPS Upgradeable Proxy Patterns", 
      "Gas-Optimized Contract Architecture",
      "Multi-signature Wallet Integration",
      "Cross-chain Bridge Contracts",
      "Comprehensive Test Suite Coverage",
      "Formal Verification & Security Audits",
      "Deployment & Monitoring Support"
    ],
    technologies: ["Solidity", "OpenZeppelin", "Hardhat", "Foundry", "Slither"],
    pricing: "Starting at $5,000",
    timeline: "2-4 weeks"
  },
  "defi": {
    title: "DeFi Protocol Development", 
    subtitle: "Advanced Financial Primitives",
    icon: TrendingUp,
    features: [
      "Automated Market Maker (AMM) Protocols",
      "Yield Farming & Staking Mechanisms",
      "Governance Token & DAO Implementation",
      "Flash Loan & Arbitrage Systems",
      "Liquidity Mining Programs",
      "Multi-token Vault Strategies",
      "Oracle Integration & Price Feeds",
      "Risk Management & Insurance Protocols"
    ],
    technologies: ["Uniswap V3", "Compound", "Aave", "Chainlink", "TheGraph"],
    pricing: "Starting at $15,000",
    timeline: "4-8 weeks"
  },
  "nft": {
    title: "NFT Platform Development",
    subtitle: "Complete Marketplace Solutions",
    icon: Palette,
    features: [
      "Custom NFT Collection Deployment",
      "Marketplace Contract Development",
      "Royalty & Revenue Sharing Systems",
      "Metadata & IPFS Integration",
      "Batch Minting & Lazy Minting",
      "Auction & Dutch Auction Systems",
      "Fractionalized NFT Implementation",
      "Cross-chain NFT Bridge Solutions"
    ],
    technologies: ["ERC721A", "IPFS", "Pinata", "OpenSea API", "Moralis"],
    pricing: "Starting at $8,000", 
    timeline: "3-6 weeks"
  },
  "integration": {
    title: "Web3 Integration",
    subtitle: "Seamless Blockchain Connection",
    icon: Code2,
    features: [
      "Wallet Connection & Authentication",
      "Transaction Management & Monitoring",
      "Real-time Blockchain Event Listening",
      "Multi-chain Support & Switching",
      "Gas Fee Optimization",
      "ENS Domain Integration",
      "Web3 Analytics & Dashboards",
      "Mobile App Blockchain Integration"
    ],
    technologies: ["Wagmi", "RainbowKit", "Ethers.js", "Web3.js", "WalletConnect"],
    pricing: "Starting at $3,000",
    timeline: "1-3 weeks"
  }
}

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "Understanding your requirements and defining technical specifications.",
    icon: Users
  },
  {
    step: "02", 
    title: "Architecture Design",
    description: "Creating secure, scalable smart contract architecture and system design.",
    icon: Layers
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Building audit-ready code with comprehensive test coverage.",
    icon: Code2
  },
  {
    step: "04",
    title: "Security Audit",
    description: "Professional security review and vulnerability assessment.",
    icon: Lock
  },
  {
    step: "05",
    title: "Deployment & Support",
    description: "Mainnet deployment with ongoing monitoring and support.",
    icon: Zap
  }
]

export default function Services() {
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
              <Shield className="w-4 h-4 mr-2" />
              Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Blockchain
              </span>{" "}
              Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From smart contract development to full-stack Web3 integration, 
              I deliver audit-ready solutions that meet enterprise security standards.
            </p>
          </motion.div>
        </div>

        {/* Services Tabs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <Tabs defaultValue="smart-contracts" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {Object.entries(services).map(([key, service]) => {
                const Icon = service.icon
                return (
                  <TabsTrigger key={key} value={key} className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{service.title.split(' ')[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon
              return (
                <TabsContent key={key} value={key}>
                  <Card className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Service Details */}
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{service.title}</h3>
                            <p className="text-muted-foreground">{service.subtitle}</p>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="lg:pl-8">
                        <div className="bg-card/50 border border-border rounded-lg p-6 mb-6">
                          <div className="text-center mb-6">
                            <div className="text-3xl font-bold text-primary mb-2">
                              {service.pricing}
                            </div>
                            <div className="text-sm text-muted-foreground mb-4">
                              Timeline: {service.timeline}
                            </div>
                            <Button variant="neon" className="w-full">
                              <Zap className="w-4 h-4 mr-2" />
                              Get Quote
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                          
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>Audit-Ready Code</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>Comprehensive Testing</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>Documentation Included</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              <span>30-Day Support</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              )
            })}
          </Tabs>
        </motion.section>

        {/* Process - Bento Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring security, quality, and timely delivery for every project.
            </p>
          </div>

          <BentoGrid className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <BentoGridItem
                  key={step.step}
                  title={
                    <div className="flex items-center space-x-2">
                      <span className="text-primary font-bold">{step.step}</span>
                      <span>{step.title}</span>
                    </div>
                  }
                  description={step.description}
                  header={
                    <BackgroundGradient className="rounded-xl p-4 h-32 flex items-center justify-center">
                      <Icon className="w-12 h-12 text-primary" />
                    </BackgroundGradient>
                  }
                  icon={<Icon className="w-4 h-4 text-primary" />}
                  className={index === 0 || index === 3 ? "md:col-span-2" : ""}
                />
              )
            })}
          </BentoGrid>
        </motion.section>

        {/* Additional Services Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive blockchain solutions beyond core development
            </p>
          </div>

          <BentoGrid className="max-w-6xl mx-auto">
            <BentoGridItem
              title="Security Audits"
              description="Professional smart contract security reviews with detailed vulnerability assessments and remediation recommendations."
              header={
                <BackgroundGradient className="rounded-xl p-4 h-32 flex items-center justify-center">
                  <Shield className="w-12 h-12 text-red-400" />
                </BackgroundGradient>
              }
              icon={<Shield className="w-4 h-4 text-red-400" />}
              className="md:col-span-2"
            />
            <BentoGridItem
              title="Gas Optimization"
              description="Reduce transaction costs through advanced optimization techniques and efficient contract patterns."
              header={
                <BackgroundGradient className="rounded-xl p-4 h-32 flex items-center justify-center">
                  <Zap className="w-12 h-12 text-yellow-400" />
                </BackgroundGradient>
              }
              icon={<Zap className="w-4 h-4 text-yellow-400" />}
            />
            <BentoGridItem
              title="Documentation"
              description="Complete technical documentation including architecture diagrams and user guides."
              header={
                <BackgroundGradient className="rounded-xl p-4 h-32 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-blue-400" />
                </BackgroundGradient>
              }
              icon={<Code2 className="w-4 h-4 text-blue-400" />}
            />
            <BentoGridItem
              title="Ongoing Support"
              description="Post-deployment monitoring, maintenance, and feature enhancements to keep your project running smoothly."
              header={
                <BackgroundGradient className="rounded-xl p-4 h-32 flex items-center justify-center">
                  <Users className="w-12 h-12 text-green-400" />
                </BackgroundGradient>
              }
              icon={<Users className="w-4 h-4 text-green-400" />}
              className="md:col-span-2"
            />
          </BentoGrid>
        </motion.section>
      </div>
    </div>
  )
}