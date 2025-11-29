import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProgrammingGrid from './components/ProgrammingGrid';
import AboutSchool from './components/AboutUniversity';
import MissionVision from './components/MissionVision';
import FeaturedPrograms from './components/FeaturedPrograms';
import Footer from './components/Footer';
import JingleSection from './components/JingleSection';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 text-gray-800 antialiased">
      <Header />
      <main>
        <HeroSection />
        <JingleSection />
        <ProgrammingGrid />
        <FeaturedPrograms />
        <AboutSchool />
        <MissionVision />
      </main>
      <Footer />
    </div>
  );
};

export default App;