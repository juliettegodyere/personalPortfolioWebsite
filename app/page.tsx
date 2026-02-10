import { PageShell } from "@/components/PageShell";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </PageShell>
  );
}

