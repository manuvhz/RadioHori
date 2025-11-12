
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: `url('https://picsum.photos/1600/900?grayscale&blur=2')` }}>
      <div className="absolute inset-0 bg-emerald-800 bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
          Radio Horizonte del Sinú
        </h1>
        <p className="text-lg md:text-2xl font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
          La voz universitaria que fluye con el conocimiento.
        </p>
        <a href="#parrilla" className="mt-8 px-8 py-3 bg-emerald-700 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-600 transform hover:scale-105 transition-all duration-300">
          Ver programación
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
