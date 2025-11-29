import React from 'react';

const AboutSchool: React.FC = () => {
  return (
    <section id="institucion" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">Sobre Nuestra Institución</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              La Institución Educativa El Dorado está comprometida con la formación integral de niños, niñas y jóvenes, fomentando el liderazgo, la excelencia académica y los valores ciudadanos para construir un futuro mejor.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700 bg-emerald-50 p-4 rounded-r-lg">
              “Educación, disciplina y liderazgo para la transformación social.”
            </blockquote>
          </div>
          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-full max-w-sm h-80 group">
              <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-emerald-200 transform -rotate-6 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105"></div>
              <img 
                src="https://www.ieldorado.edu.co/wp-content/uploads/2020/11/sede-principal-secundaria-1024x478.jpg" 
                alt="Sede principal de la Institución Educativa El Dorado" 
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl transition-shadow duration-500 group-hover:shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;