import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import ExperiencesSection from './components/ExperiencesSection';
import PackagesSection from './components/PackagesSection';
import GastronomySection from './components/GastronomySection';
import FazendinhaSection from './components/FazendinhaSection';
import TestimonialsSection from './components/TestimonialsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import VideoTransition from './components/VideoTransition';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <HeroSection />
        <AboutSection />
        <VideoTransition />
        <GastronomySection />
        <RoomsSection />
        <ExperiencesSection />
        <PackagesSection />
        <FazendinhaSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}

export default App;
