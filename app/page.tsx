import HeroSection from '@/components/home/hero-section';
import InfoSection from '@/components/home/info-section';
// import HealthImpactSection from '@/components/home/health-impact-section';
import CompanySection from '@/components/home/company-section';
import AboutSection from '@/components/home/about-section';
import DetailSection from '@/components/home/detail-section';
import { BenefitsSection } from '@/components/home/benefits-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        {/* Hero Section */}
        <HeroSection />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* About Section */}
        <AboutSection />

        {/* Info Section */}
        <InfoSection />

        {/* Detail Section */}
        <DetailSection />

        {/* Health Impact Section */}
        {/* <HealthImpactSection /> */}

        {/* Company Section */}
        <CompanySection />
      </div>
    </main>
  );
}
