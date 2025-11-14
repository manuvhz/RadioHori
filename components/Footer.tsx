import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="creditos" className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-xl text-white">Horizonte del Sinú</h3>
            <p className="text-sm text-emerald-200 mt-2 max-w-xs">
              La voz que inspira a nuestra comunidad educativa.
            </p>
            <p className="text-xs text-emerald-300 mt-6">
              &copy; {new Date().getFullYear()} Institución Educativa El Dorado. Todos los derechos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Un Proyecto de</h4>
            <ul className="mt-4 space-y-2 text-sm text-emerald-200">
              <li>Manuel Vargas</li>
              <li>Isaac Martinez</li>
              <li>Andres Buelvas</li>
              <li>Jean Alvarez</li>
              <li>Luis Noriega</li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold text-white tracking-wider uppercase">Créditos</h4>
             <p className="mt-4 text-sm text-emerald-200">
               Un proyecto para la comunidad educativa de la I.E. El Dorado.
             </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;