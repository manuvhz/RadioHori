
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="creditos" className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-xl text-white">Radio Horizonte del Sinú</h3>
            <p className="text-sm text-emerald-200 mt-2 max-w-xs">
              La voz universitaria que fluye con el conocimiento.
            </p>
            <p className="text-xs text-emerald-300 mt-6">
              &copy; {new Date().getFullYear()} Universidad de Córdoba. Todos los derechos reservados.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase">Un Proyecto Académico de</h4>
            <ul className="mt-4 space-y-2 text-sm text-emerald-200">
              <li>Manuel Vargas</li>
              <li>Isaac Martinez</li>
              <li>Andres Buelvas</li>
              <li>Jean Alvarez</li>
              <li>Luis Noriega</li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold text-white tracking-wider uppercase">Para la Asignatura de Radio</h4>
             <p className="mt-4 text-sm text-emerald-200">
               Docente: <span className="font-medium text-white">Huber Castro</span>
             </p>
             <p className="mt-2 text-sm text-emerald-200">
               Licenciatura en Informática y Medios Audiovisuales
             </p>
             <p className="mt-2 text-sm font-medium text-white">
               Universidad de Córdoba
             </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;