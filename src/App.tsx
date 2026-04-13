import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';

const AccommodationsPage = lazy(() => import('./pages/AccommodationsPage'));
const RoomDetailPage = lazy(() => import('./pages/RoomDetailPage'));
const ExperiencesPage = lazy(() => import('./pages/ExperiencesPage'));
const GastronomyPage = lazy(() => import('./pages/GastronomyPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PackagesPage = lazy(() => import('./pages/PackagesPage'));
const PackageDetailPage = lazy(() => import('./pages/PackageDetailPage'));
const VacationsPage = lazy(() => import('./pages/VacationsPage'));
const VacationDetailPage = lazy(() => import('./pages/VacationDetailPage'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acomodacoes" element={<AccommodationsPage />} />
          <Route path="/acomodacoes/:slug" element={<RoomDetailPage />} />
          <Route path="/experiencias" element={<ExperiencesPage />} />
          <Route path="/gastronomia" element={<GastronomyPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/pacotes" element={<PackagesPage />} />
          <Route path="/pacotes/:slug" element={<PackageDetailPage />} />
          <Route path="/ferias" element={<VacationsPage />} />
          <Route path="/ferias/:slug" element={<VacationDetailPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton />
    </>
  );
}

export default App;
