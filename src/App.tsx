import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AccommodationsPage from './pages/AccommodationsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import ExperiencesPage from './pages/ExperiencesPage';
import GastronomyPage from './pages/GastronomyPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acomodacoes" element={<AccommodationsPage />} />
        <Route path="/acomodacoes/:slug" element={<RoomDetailPage />} />
        <Route path="/experiencias" element={<ExperiencesPage />} />
        <Route path="/gastronomia" element={<GastronomyPage />} />
        <Route path="/contato" element={<ContactPage />} />
      </Routes>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}

export default App;
