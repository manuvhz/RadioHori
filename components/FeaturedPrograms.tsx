
import React from 'react';
// FIX: Changed import type to a regular import to allow using the ProgramTheme enum as a value.
import { FeaturedProgram, ProgramTheme } from '../types';

const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5V4.5A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const MusicIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 18V5l12-2v13"/>
    <circle cx="6" cy="18" r="3"/>
    <circle cx="18" cy="16" r="3"/>
  </svg>
);

const FlaskIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 3h6"/>
    <path d="M12 3v7.5"/>
    <path d="M18.37 12.63L14 17.01a2 2 0 0 1-2.83 0l-4.37-4.38a2 2 0 0 1 0-2.83L11.17 5.17a2 2 0 0 1 2.83 0L18.37 9.8a2 2 0 0 1 0 2.83z"/>
  </svg>
);

const PaintbrushIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        <path d="m15 5 4 4" />
    </svg>
);


const PROGRAMS: FeaturedProgram[] = [
  { name: 'Sinfonía del Saber', description: 'Un viaje por la historia de la música clásica y sus grandes compositores.', schedule: 'Viernes, 10:00 AM', theme: ProgramTheme.MUSIC, Icon: MusicIcon },
  { name: 'Páginas Vivas', description: 'Análisis y debate sobre las obras más influyentes de la literatura universal.', schedule: 'Jueves, 10:00 AM', theme: ProgramTheme.CULTURE, Icon: BookIcon },
  { name: 'Eureka', description: 'Descubrimientos, avances y curiosidades del mundo de la ciencia y la tecnología.', schedule: 'Martes, 8:00 AM', theme: ProgramTheme.SCIENCE, Icon: FlaskIcon },
  { name: 'Lienzo Sonoro', description: 'Explorando las artes visuales a través de las ondas, desde el renacimiento hasta el arte digital.', schedule: 'Jueves, 8:00 AM', theme: ProgramTheme.CULTURE, Icon: PaintbrushIcon },
];

const themeStyles: Record<ProgramTheme, { bg: string; text: string; }> = {
    [ProgramTheme.MUSIC]: { bg: 'bg-rose-100', text: 'text-rose-600' },
    [ProgramTheme.CULTURE]: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
    [ProgramTheme.SCIENCE]: { bg: 'bg-sky-100', text: 'text-sky-600' },
    [ProgramTheme.ACADEMIC]: { bg: 'bg-indigo-100', text: 'text-indigo-600' },
    [ProgramTheme.NEWS]: { bg: 'bg-amber-100', text: 'text-amber-600' },
    [ProgramTheme.ENTERTAINMENT]: { bg: 'bg-purple-100', text: 'text-purple-600' },
    [ProgramTheme.SPORTS]: { bg: 'bg-orange-100', text: 'text-orange-600' },
    [ProgramTheme.OTHER]: { bg: 'bg-slate-200', text: 'text-slate-600' },
};


const ProgramCard: React.FC<{ program: FeaturedProgram }> = ({ program }) => {
    const styles = themeStyles[program.theme];
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group">
            <div className={`w-full h-32 flex items-center justify-center ${styles.bg}`}>
                <program.Icon className={`w-16 h-16 ${styles.text} transition-transform duration-300 group-hover:scale-110`} />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
                <p className="text-gray-600 text-sm mb-4 h-16">{program.description}</p>
                <p className={`font-semibold text-sm ${styles.text}`}>{program.schedule}</p>
            </div>
        </div>
    );
}

const FeaturedPrograms: React.FC = () => {
  return (
    <section id="programas" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Programas Destacados</h2>
          <p className="mt-4 text-lg text-gray-600">Una muestra de nuestro contenido de calidad.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map(program => (
            <ProgramCard key={program.name} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;