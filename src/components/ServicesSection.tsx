"use client"

import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Code2, Shield, Rocket, Zap, Lock, Globe } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Smart Contract Development",
    description: "Custom ERC20, ERC721, ERC1155, and ERC404 token contracts with gas optimization and security-first approach",
    icon: Code2,
    features: ["Audit-Ready Code", "Gas Optimized", "Upgradeable Contracts"],
    gradient: "from-blue-500 to-cyan-500",
    href: "/services#smart-contracts"
  },
  {
    title: "DeFi Protocol Engineering",
    description: "Build decentralized exchanges, lending protocols, and yield farming platforms with battle-tested security",
    icon: Shield,
    features: ["AMM Development", "Staking Systems", "Liquidity Pools"],
    gradient: "from-purple-500 to-pink-500",
    href: "/services#defi"
  },
  {
    title: "Web3 Full-Stack Solutions",
    description: "Complete dApp development from smart contracts to intuitive user interfaces with wallet integration",
    icon: Rocket,
    features: ["React/Next.js", "Wallet Connect", "IPFS Integration"],
    gradient: "from-orange-500 to-red-500",
    href: "/services#fullstack"
  }
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
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
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Blockchain Services</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Enterprise-Grade
            </span>{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Blockchain Solutions
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering secure, scalable, and innovative blockchain solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="w-full"
                  >
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${service.gradient} mb-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-neutral-600 dark:text-white mb-3"
                  >
                    {service.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-neutral-500 text-sm mb-4 dark:text-neutral-300"
                  >
                    {service.description}
                  </CardItem>

                  <CardItem translateZ="30" className="w-full mb-4">
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Lock className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-neutral-600 dark:text-neutral-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={service.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-normal dark:text-white group-hover/card:bg-primary/10 transition-colors duration-200"
                  >
                    Learn More →
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            <Globe className="w-5 h-5" />
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}