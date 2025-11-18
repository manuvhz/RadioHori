import React, { useState } from 'react';
import { FeaturedProgram, ProgramTheme } from '../types';

// --- Icons ---
const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v15H6.5A2.5 2.5 0 0 1 4 14.5V4.5A2.5 2.5 0 0 1 6.5 2z"/></svg>
);
const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>
);
const NewspaperIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4M4 9h16M4 15h16M10 3v18"/></svg>
);
const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M8 5v14l11-7z"></path></svg>
);


// --- New Program Data ---
const PROGRAMS: FeaturedProgram[] = [
  { 
    name: 'Actualidad al Instante', 
    description: 'El espacio informativo de Horizonte del Sinú que te conecta con las noticias más importantes de la comunidad escolar. Breve, dinámico y preciso: aquí encuentras lo que necesitas saber para empezar el día bien informado.', 
    theme: ProgramTheme.NEWS, 
    Icon: NewspaperIcon,
    soundcloudEmbedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2214506261&color=%23459caa&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  { 
    name: 'NextGenShow: Arranque Total', 
    description: 'Un inicio lleno de energía, música y diversión donde presentamos el jingle, la identidad del programa y un repaso rápido de lo que vendrá: retos, cultura pop, secciones interactivas y la mejor vibra juvenil.', 
    theme: ProgramTheme.ENTERTAINMENT, 
    Icon: UsersIcon,
    soundcloudEmbedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2214506267&color=%23459caa&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
  { 
    name: 'El Barrio Azul: Episodio de Estreno', 
    description: 'El capítulo inaugural que abre las puertas a un misterio oculto entre las calles de un barrio aparentemente normal. Voces, sombras y secretos que marcarán el inicio de esta primera temporada de relatos misteriosos.', 
    theme: ProgramTheme.MYSTERY, 
    Icon: BookIcon,
    soundcloudEmbedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2214506264&color=%23459caa&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  },
];

// --- Theme Styles ---
const themeStyles: Record<ProgramTheme, { bg: string; text: string; button: string; }> = {
    [ProgramTheme.NEWS]: { bg: 'bg-amber-100', text: 'text-amber-800', button: 'hover:bg-amber-200' },
    [ProgramTheme.ENTERTAINMENT]: { bg: 'bg-purple-100', text: 'text-purple-800', button: 'hover:bg-purple-200' },
    [ProgramTheme.CULTURE]: { bg: 'bg-emerald-100', text: 'text-emerald-800', button: 'hover:bg-emerald-200' },
    [ProgramTheme.MYSTERY]: { bg: 'bg-purple-100', text: 'text-purple-800', button: 'hover:bg-purple-200' },
    [ProgramTheme.MUSIC]: { bg: 'bg-rose-100', text: 'text-rose-800', button: 'hover:bg-rose-200' },
    [ProgramTheme.SCIENCE]: { bg: 'bg-sky-100', text: 'text-sky-800', button: 'hover:bg-sky-200' },
    [ProgramTheme.ACADEMIC]: { bg: 'bg-indigo-100', text: 'text-indigo-800', button: 'hover:bg-indigo-200' },
    [ProgramTheme.SPORTS]: { bg: 'bg-orange-100', text: 'text-orange-800', button: 'hover:bg-orange-200' },
    [ProgramTheme.OTHER]: { bg: 'bg-slate-200', text: 'text-slate-800', button: 'hover:bg-slate-300' },
};

// --- Player Modal ---
const PlayerModal: React.FC<{ program: { name: string, soundcloudEmbedUrl?: string } | null; onClose: () => void }> = ({ program, onClose }) => {
    if (!program || !program.soundcloudEmbedUrl) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl p-4 m-4 max-w-lg w-full transform transition-all duration-300" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">{program.name}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800" aria-label="Cerrar reproductor">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <iframe 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameBorder="no" 
                    allow="autoplay"
                    src={program.soundcloudEmbedUrl}>
                </iframe>
            </div>
        </div>
    );
};

// --- Updated Program Card ---
const ProgramCard: React.FC<{ program: FeaturedProgram, onPlay: (program: FeaturedProgram) => void; }> = ({ program, onPlay }) => {
    const styles = themeStyles[program.theme];
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div className={`w-full h-32 flex items-center justify-center ${styles.bg}`}>
                <program.Icon className={`w-16 h-16 ${styles.text} transition-transform duration-300 group-hover:scale-110`} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{program.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                 {program.soundcloudEmbedUrl && (
                    <div className="text-center pt-4 mt-auto">
                         <button
                            onClick={() => onPlay(program)}
                            className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 ${styles.bg} ${styles.text} ${styles.button}`}
                            aria-label={`Reproducir ${program.name}`}
                        >
                            <PlayIcon className="w-5 h-5"/>
                            <span>Reproducir</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

// --- Main Component ---
const FeaturedPrograms: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<FeaturedProgram | null>(null);

  const handleOpenPlayer = (program: FeaturedProgram) => {
      setActiveProgram(program);
  };
  
  const handleClosePlayer = () => {
      setActiveProgram(null);
  };
  
  return (
    <section id="programas" className="py-20 bg-white border-t border-gray-200">
      <PlayerModal program={activeProgram} onClose={handleClosePlayer} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Episodios Destacados</h2>
          <p className="mt-4 text-lg text-gray-600">Una muestra de nuestro contenido más reciente.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PROGRAMS.map(program => (
            <ProgramCard key={program.name} program={program} onPlay={handleOpenPlayer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;