"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Code, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              {/* Logo background glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Logo container */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl border border-border/50 flex items-center justify-center backdrop-blur-sm group-hover:border-primary/30 transition-all duration-300">
                <Shield className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                
                {/* Floating code accent */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <Code className="h-2.5 w-2.5 text-white" />
                </div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent whitespace-nowrap group-hover:from-primary group-hover:via-primary/90 group-hover:to-primary/70 transition-all duration-300">
                BlockchainDev
              </span>
              <span className="text-xs text-muted-foreground/60 -mt-1 hidden sm:block">
                Security First
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-muted-foreground hover:text-foreground px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-muted/50 group"
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-6 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <appkit-button />
            
            {/* Enhanced CTA Button */}
            <Button className="relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground border-0 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group">
              <Zap className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
              Get Quote
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-primary/10 blur-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
            >
              <div className="relative z-10">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
              
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden"
        >
          <div className="px-4 pt-4 pb-6 space-y-3 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className="relative text-muted-foreground hover:text-foreground block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-muted/50 group"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Mobile hover indicator */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-6 bg-gradient-to-r from-primary to-primary/60 rounded-r-lg group-hover:w-1 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            
            <div className="pt-4 space-y-4 border-t border-border/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex justify-center"
              >
                <appkit-button />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25">
                  <Zap className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}