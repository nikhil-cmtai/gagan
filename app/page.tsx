import HeroSection from '@/components/home/hero-section';
import InfoSection from '@/components/home/info-section';
import AboutSection from '@/components/home/about-section';
import DetailSection from '@/components/home/detail-section';
import { BenefitsSection } from '@/components/home/benefits-section';
import AdvantageSection from '@/components/home/advantage-section';
import MilestoneSection from '@/components/home/milestone-section';
import TeamSection from '@/components/home/team-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Info Section */}
        <InfoSection />

        {/* Detail Section */}
        <DetailSection />

        {/* Health Impact Section */}
        <BenefitsSection />

        {/* Advantage Section */}
        <AdvantageSection />

        {/* Milestone Section */}
        <MilestoneSection />

        {/* Team Section */}
        <TeamSection />
      </div>
    </main>
  );
}
