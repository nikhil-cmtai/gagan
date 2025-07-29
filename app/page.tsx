import HeroSection from '@/components/home/hero-section';
import InfoSection from '@/components/home/info-section';
import HealthImpactSection from '@/components/home/health-impact-section';
import CompanySection from '@/components/home/company-section';
import AboutSection from '@/components/home/about-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E6F3FF]">
      <div>
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Info Section */}
        <InfoSection />

        {/* Health Impact Section */}
        <HealthImpactSection />

        {/* Company Section */}
        <CompanySection />
      </div>
    </main>
  );
}
