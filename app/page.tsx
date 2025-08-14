import HeroSection from '@/components/home/hero-section';
import InfoSection from '@/components/home/info-section';
import AboutSection from '@/components/home/about-section';
import DetailSection from '@/components/home/detail-section';
import { BenefitsSection } from '@/components/home/benefits-section';
import AdvantageSection from '@/components/home/advantage-section';
import MilestoneSection from '@/components/home/milestone-section';
import TeamSection from '@/components/home/team-section';
import CTA from '@/components/home/cta-section';
import TestimonialSection from '@/components/home/testimonial-section';
import StatsSection from '@/components/home/stats-section';
import InnovationSection from '@/components/home/innovation-section';

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

        {/* Innovation Section */}
        <InnovationSection />

        {/* Milestone Section */}
        <MilestoneSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Team Section */}
        <TeamSection />

        {/* Testimonial Section */}
        <TestimonialSection />

        {/* CTA Section */}
        <CTA />
      </div>
    </main>
  );
}
