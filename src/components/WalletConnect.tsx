"use client"

import { motion } from "framer-motion"
import { useAccount, useDisconnect, useEnsName } from "wagmi"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Wallet, 
  ExternalLink, 
  Copy, 
  Check,
  LogOut,
  Zap
} from "lucide-react"
import { useState } from "react"

export function WalletConnect() {
  const { address, isConnected, chain } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { disconnect } = useDisconnect()
  const [copied, setCopied] = useState(false)

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (!isConnected) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-4 p-8 bg-card/50 backdrop-blur-sm border border-border rounded-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Connect Your Wallet</h3>
            <p className="text-sm text-muted-foreground">
              Connect to interact with blockchain applications
            </p>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500 animate-pulse" />
          <appkit-button />
        </motion.div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Badge variant="outline" className="text-xs">
            <Zap className="w-3 h-3 mr-1" />
            MetaMask
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Zap className="w-3 h-3 mr-1" />
            WalletConnect
          </Badge>
          <Badge variant="outline" className="text-xs">
            <Zap className="w-3 h-3 mr-1" />
            Coinbase
          </Badge>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-card/50 backdrop-blur-sm border border-border rounded-2xl space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Wallet Connected</h3>
            <p className="text-sm text-muted-foreground">
              {ensName || formatAddress(address!)}
            </p>
          </div>
        </div>
        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
          Connected
        </Badge>
      </div>

      {chain && (
        <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg">
          <div className="w-3 h-3 bg-primary rounded-full" />
          <span className="text-sm font-medium">{chain.name}</span>
          <Badge variant="secondary" className="ml-auto text-xs">
            ID: {chain.id}
          </Badge>
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={copyAddress}
          className="flex-1"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 mr-2" />
              Copy Address
            </>
          )}
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => window.open(`https://etherscan.io/address/${address}`, '_blank')}
        >
          <ExternalLink className="w-4 h-4" />
        </Button>
        
        <Button
          size="sm"
          variant="outline"
          onClick={() => disconnect()}
          className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>

      <div className="pt-4 border-t border-border">
        <appkit-button />
      </div>
    </motion.div>
  )
}