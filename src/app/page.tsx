import { CompassNav } from "@/components/navigation/CompassNav";
import { TopNav } from "@/components/navigation/TopNav";
import { HomeHero } from "@/components/home/HomeHero";
import { AboutSection } from "@/components/about/AboutSection";
import { FeaturedProjects } from "@/components/featured/FeaturedProjects";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { TreasureMap } from "@/components/map/TreasureMap";
import { SkillArena } from "@/components/skills/SkillArena";
import { QuestBoard } from "@/components/quests/QuestBoard";
import { ResumeViewer } from "@/components/resume/ResumeViewer";
import { MessageHarbor } from "@/components/contact/MessageHarbor";
import { EasterEgg } from "@/components/easter-egg/EasterEgg";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <>
      <EasterEgg />
      <TopNav />
      <CompassNav />

      <main>
        <HomeHero />
        <AboutSection />
        <FeaturedProjects />
        <ExperienceSection />
        <TreasureMap />
        <SkillArena />
        <QuestBoard />
        <ResumeViewer />
        <MessageHarbor />
        <SiteFooter />
      </main>
    </>
  );
}
