
import React from 'react';

const AboutUniversity: React.FC = () => {
  return (
    <section id="universidad" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">Sobre la Universidad</h2>
            <p className="text-lg text-gray-600 mb-6">
              Una institución pública comprometida con la educación superior, la investigación y la extensión, que impacta positivamente el desarrollo social, económico y cultural del Caribe colombiano.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700">
              “Comprometidos con la educación, la ciencia y la cultura desde el corazón del Sinú.”
            </blockquote>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-sm h-80 group">
              <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-emerald-200 transform -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
              <img 
                src="https://caribenoticias247.com/wp-content/uploads/2023/04/Photo_1681361320200.webp" 
                alt="Campus de la Universidad de Córdoba" 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl transition-shadow duration-500 group-hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUniversity;