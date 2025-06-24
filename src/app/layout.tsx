import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { headers } from 'next/headers';
import ContextProvider from '@/context';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlockchainDev - Enterprise Blockchain Development",
  description: "Professional blockchain developer specializing in audit-ready smart contracts, DeFi protocols, and full-stack Web3 integration. Enterprise-grade security with Hashlock certification.",
  keywords: "blockchain developer, smart contracts, solidity, web3, defi, nft, ethereum, audit, enterprise",
  authors: [{ name: "BlockchainDev" }],
  creator: "BlockchainDev",
  openGraph: {
    title: "BlockchainDev - Enterprise Blockchain Development",
    description: "Professional blockchain developer specializing in audit-ready smart contracts and full-stack Web3 integration.",
    type: "website",
    locale: "en_US",
    siteName: "BlockchainDev",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlockchainDev - Enterprise Blockchain Development",
    description: "Professional blockchain developer specializing in audit-ready smart contracts and full-stack Web3 integration.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie');

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <ContextProvider cookies={cookies}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen relative">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
