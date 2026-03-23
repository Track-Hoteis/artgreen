import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import VideoTransition from '@/components/VideoTransition';
import GastronomySection from '@/components/GastronomySection';
import RoomsSection from '@/components/RoomsSection';
import ImmersiveScrollSection from '@/components/ImmersiveScrollSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import PackagesSection from '@/components/PackagesSection';
import FazendinhaSection from '@/components/FazendinhaSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import LocationSection from '@/components/LocationSection';
import { SEO } from '@/components/SEO';

export default function HomePage() {
  return (
    <main className="bg-cream mobile-center-content">
      <SEO
        title="Art Green Teresópolis"
        description="Pousada em Teresópolis"
        url="/"
      />
      <HeroSection />
      <AboutSection />
      <VideoTransition />
      <GastronomySection />
      <RoomsSection />
      <ImmersiveScrollSection />
      <ExperiencesSection />
      <PackagesSection />
      <FazendinhaSection />
      <TestimonialsSection />
      <LocationSection />
    </main>
  );
}
