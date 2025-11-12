
import React from 'react';

const HeroSection: React.FC = () => {
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.getElementById('parrilla');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

  return (
    <section className="relative h-[70vh] min-h-[500px]">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://colombia.travel/sites/default/files/rio-sinu.jpg')`,
          filter: 'grayscale(100%)' 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/30 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>
          Radio Horizonte del Sinú
        </h1>
        <p className="text-lg md:text-2xl font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
          La voz universitaria que fluye con el conocimiento.
        </p>
        <a 
            href="#parrilla" 
            onClick={handleScrollClick}
            className="mt-8 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-500 transform hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          Ver programación
        </a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;