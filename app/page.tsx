import React from 'react';
import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import TechnologySection from './components/TechnologySection';
import Footer from './components/Footer';

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-white" role="main">
      {/* Hero Section - Main visual and greeting */}
      <HeroSection />
      
      {/* Concept Section - 2026 theme explanation */}
      <ConceptSection />
      
      {/* Technology Section - AI technologies used */}
      <TechnologySection />
      
      {/* Footer - Copyright and author information */}
      <Footer />
    </main>
  );
};

export default Home;
