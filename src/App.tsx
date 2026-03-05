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

function App() {
  return (
    <>
      <Header />
      <main className="pt-20 md:pt-24 bg-primary">
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <ExperiencesSection />
        <PackagesSection />
        <GastronomySection />
        <FazendinhaSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
