"use client"

import { motion } from "framer-motion"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Code2, Shield, Rocket, Zap, Lock, Globe, CreditCard, Building2, ArrowRightLeft, Star, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Smart Contract Development",
    description: "Custom ERC20, ERC721, ERC1155, and ERC404 token contracts with gas optimization and security-first approach",
    icon: Code2,
    features: ["Audit-Ready Code", "Gas Optimized", "Upgradeable Contracts"],
    gradient: "from-blue-500 to-cyan-500",
    href: "/services#smart-contracts",
    popular: false
  },
  {
    title: "Crypto Payment Gateway",
    description: "Enterprise-grade payment solutions for businesses to accept Bitcoin, Ethereum, USDC, and other cryptocurrencies",
    icon: CreditCard,
    features: ["Multi-Chain Support", "Instant Settlement", "Regulatory Compliant"],
    gradient: "from-green-500 to-emerald-500",
    href: "/services#payments",
    popular: true
  },
  {
    title: "DeFi Protocol Engineering",
    description: "Build decentralized exchanges, lending protocols, and yield farming platforms with battle-tested security",
    icon: Shield,
    features: ["AMM Development", "Staking Systems", "Liquidity Pools"],
    gradient: "from-purple-500 to-pink-500",
    href: "/services#defi",
    popular: false
  },
  {
    title: "Stablecoin Integration",
    description: "Seamless USDC, USDT, and DAI payment processing for e-commerce, SaaS, and enterprise applications",
    icon: ArrowRightLeft,
    features: ["Low Volatility", "Fast Settlements", "Global Reach"],
    gradient: "from-indigo-500 to-purple-500",
    href: "/services#stablecoin",
    popular: false
  },
  {
    title: "Enterprise Blockchain",
    description: "Custom blockchain solutions for supply chain, identity management, and business process automation",
    icon: Building2,
    features: ["Private Networks", "Consortium Chains", "Enterprise APIs"],
    gradient: "from-orange-500 to-red-500",
    href: "/services#enterprise",
    popular: false
  },
  {
    title: "Web3 Full-Stack Solutions",
    description: "Complete dApp development from smart contracts to intuitive user interfaces with wallet integration",
    icon: Rocket,
    features: ["React/Next.js", "Wallet Connect", "IPFS Integration"],
    gradient: "from-cyan-500 to-blue-500",
    href: "/services#fullstack",
    popular: false
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium layered background - Dark/Light mode responsive */}
      <div className="absolute inset-0 -z-10">
        {/* Dark mode backgrounds */}
        <div className="absolute inset-0 hidden dark:block dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900" />
        <div className="absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 hidden dark:block dark:bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.2),transparent_50%)]" />

        {/* Light mode backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-50 dark:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99, 101, 241, 0),transparent_50%)] dark:hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)] dark:hidden" />

        {/* Universal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/100" />

      </div>

      <div className="max-w-7xl mx-auto">
        {/* Premium Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Elite Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
            whileInView={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-border text-primary px-6 py-3 rounded-2xl mb-8 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Elite Blockchain Development
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
              Enterprise-Grade
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Blockchain Excellence
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Delivering <span className="text-indigo-500 dark:text-indigo-400 font-semibold">secure</span>, <span className="text-purple-500 dark:text-purple-400 font-semibold">scalable</span>, and <span className="text-pink-500 dark:text-pink-400 font-semibold">innovative</span> blockchain solutions that transform enterprises and accelerate digital evolution
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12 text-sm"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-green-500 dark:text-green-400" />
              <span>500+ Smart Contracts Deployed</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span>Zero Security Breaches</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-4 h-4 text-yellow-500 dark:text-yellow-400" />
              <span>99.9% Uptime Guaranteed</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              className="group"
            >
              <CardContainer className="inter-var h-full">
                <CardBody className="relative group/card h-full bg-gradient-to-br from-background/80 via-muted/50 to-background/80 backdrop-blur-sm border border-border hover:border-border/60 w-full rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
                  {/* Premium badge for popular services */}
                  {service.popular && (
                    <CardItem translateZ="100" className="absolute -top-2 -right-2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </CardItem>
                  )}

                  {/* Floating gradient orb */}
                  <div className={`absolute top-6 right-6 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-20 group-hover/card:opacity-40 transition-opacity duration-500`} />

                  {/* Icon with enhanced styling */}
                  <CardItem translateZ="80" className="w-full relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg relative overflow-hidden group-hover/card:scale-110 transition-transform duration-300`}>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl" />
                      <service.icon className="w-7 h-7 text-white relative z-10" />
                    </div>
                  </CardItem>

                  {/* Enhanced title */}
                  <CardItem
                    translateZ="70"
                    className="text-2xl font-bold text-foreground mb-4 group-hover/card:text-transparent group-hover/card:bg-gradient-to-r group-hover/card:from-foreground group-hover/card:to-muted-foreground group-hover/card:bg-clip-text transition-all duration-300"
                  >
                    {service.title}
                  </CardItem>

                  {/* Enhanced description */}
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-muted-foreground text-base mb-6 leading-relaxed"
                  >
                    {service.description}
                  </CardItem>

                  {/* Enhanced features */}
                  <CardItem translateZ="50" className="w-full mb-6">
                    <div className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                            <Lock className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardItem>

                  {/* Enhanced CTA button */}
                  <CardItem
                    translateZ={40}
                    as={Link}
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group/button"
                  >
                    <span>Learn More</span>
                    <ArrowRightLeft className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-200" />
                  </CardItem>

                  {/* Subtle border glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>

        {/* Premium Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="relative inline-block">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />

            {/* CTA Container */}
            <div className="relative bg-gradient-to-r from-background/80 via-muted/80 to-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Globe className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />
                </div>

                <h3 className="text-2xl font-bold text-foreground">
                  Ready to Build the Future?
                </h3>

                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  Join industry leaders who trust our blockchain expertise to transform their businesses
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group"
                  >
                    <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                    <span>Explore All Services</span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-border hover:border-border/60 text-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-muted/50"
                  >
                    <span>Get Free Consultation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}