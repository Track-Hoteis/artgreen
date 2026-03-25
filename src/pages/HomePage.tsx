import { lazy, Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import { SEO } from '@/components/SEO';

const VideoTransition = lazy(() => import('@/components/VideoTransition'));
const GastronomySection = lazy(() => import('@/components/GastronomySection'));
const RoomsSection = lazy(() => import('@/components/RoomsSection'));
const ImmersiveScrollSection = lazy(() => import('@/components/ImmersiveScrollSection'));
const ExperiencesSection = lazy(() => import('@/components/ExperiencesSection'));
const PackagesSection = lazy(() => import('@/components/PackagesSection'));
const FazendinhaSection = lazy(() => import('@/components/FazendinhaSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const LocationSection = lazy(() => import('@/components/LocationSection'));

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
      <Suspense fallback={<div className="min-h-screen" />}>
        <VideoTransition />
        <GastronomySection />
        <RoomsSection />
        <ImmersiveScrollSection />
        <ExperiencesSection />
        <PackagesSection />
        <FazendinhaSection />
        <TestimonialsSection />
        <LocationSection />
      </Suspense>
    </main>
  );
}
