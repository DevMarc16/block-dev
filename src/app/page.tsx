import { HeroSection } from "@/components/HeroSection"
import { HeroStatsSection } from "@/components/HeroStatsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { SkillsSection } from "@/components/SkillsSection"
import { StatsSection } from "@/components/StatsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CTASection } from "@/components/CTASection"
import { PageWrapper } from "@/components/PageWrapper"

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      
      <div className="relative">
        <HeroStatsSection />
      </div>

      <div className="relative">
        <ServicesSection />
      </div>

      <div className="relative">
        <ProjectsSection />
      </div>

      <div className="relative">
        <SkillsSection />
      </div>

      <div className="relative">
        <StatsSection />
      </div>

      <div className="relative">
        <TestimonialsSection />
      </div>

      <div className="relative">
        <CTASection />
      </div>
    </PageWrapper>
  )
}
