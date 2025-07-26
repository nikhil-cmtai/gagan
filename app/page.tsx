import HeroSection from '@/components/home/hero-section';
import InfoSection from '@/components/home/info-section';
import HealthImpactSection from '@/components/home/health-impact-section';
import CompanySection from '@/components/home/company-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F1F5F9] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Health Impact Section */}
        <HealthImpactSection />

        {/* Info Section */}
        <InfoSection />

        {/* Company Section */}
        <CompanySection />
      </div>
    </main>
  );
}
