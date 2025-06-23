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
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle animated gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/[0.02] to-background" />
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

        {/* Bento Grid */}
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
                transition={{ 
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              >
                <BentoGridItem
                  title={project.title}
                  description={
                    <div>
                      <p className="mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  }
                  header={project.header}
                  className={project.className}
                  icon={project.icon}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          {[
            { label: "Smart Contracts Deployed", value: "50+", icon: FileCode2 },
            { label: "Total Value Secured", value: "$25M+", icon: Coins },
            { label: "Active Users", value: "10K+", icon: Users },
            { label: "Audit Score", value: "98%", icon: Shield }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col items-center gap-2">
                <stat.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}