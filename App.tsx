
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgrammingGrid from './components/ProgrammingGrid';
import AboutUniversity from './components/AboutUniversity';
import FeaturedPrograms from './components/FeaturedPrograms';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 antialiased">
      <Header />
      <main>
        <HeroSection />
        <ProgrammingGrid />
        <AboutUniversity />
        <FeaturedPrograms />
      </main>
      <Footer />
    </div>
  );
};

export default App;
