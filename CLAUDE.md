# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a **blockchain developer portfolio** built with **Next.js 15** using the **App Router** architecture:

- **Framework**: Next.js 15.3.4 with App Router and React 19
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with custom CSS variables and Radix UI components
- **UI System**: Custom component library built on Radix UI primitives + Aceternity UI
- **Animations**: Framer Motion for interactive animations + Aceternity 3D effects
- **Icons**: Lucide React icon library + Tabler Icons
- **3D Graphics**: Three.js with React Three Fiber for interactive elements

### Key Architecture Details

- **App Router Structure**: Multi-page portfolio with `/about`, `/projects`, `/services`, `/contact` routes
- **Component Organization**: Shared UI components in `src/components/ui/` with page-specific components at root level
- **Path Aliases**: `@/*` maps to `./src/*` for clean imports
- **Design System**: CVA (Class Variance Authority) for component variant management
- **Utility System**: clsx + tailwind-merge via `cn()` utility function

### Component Architecture

- **Layout Components**: `Navbar` and `Footer` included in root layout for all pages
- **UI Primitives**: Button, Card, Input, Textarea, Tabs, Badge components with variant support
- **Aceternity Components**: 3D Cards, Spotlight effects, Background Gradients, Bento Grid, Globe
- **Business Components**: `HeroSection`, `WalletConnect` for blockchain-specific functionality
- **Styling Pattern**: Tailwind classes with CVA variants + Aceternity's 3D effect system

### Blockchain/Web3 Integration

- **WalletConnect Component**: Suggests Web3 wallet integration capabilities
- **Enterprise Focus**: Metadata indicates professional blockchain development services
- **SEO Optimized**: Comprehensive OpenGraph and Twitter meta tags for blockchain keywords

### Development Notes

- Uses Geist Sans and Geist Mono fonts with CSS variable integration
- TypeScript target ES2017 with bundler module resolution
- No test framework currently configured
- Radix UI provides accessible component primitives
- Aceternity UI adds modern 3D effects and interactive animations
- Three.js integration for complex 3D globe and particle effects
- Custom "neon" button variant suggests blockchain/crypto aesthetic
- Background gradients and spotlight effects enhance visual appeal