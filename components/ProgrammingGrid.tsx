

import React, { useState } from 'react';
import { DailySchedule, ProgramSlot, ProgramTheme } from '../types';

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

const MicIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
    <line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);

const FlaskIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 3h6"/>
    <path d="M12 3v7.5"/>
    <path d="M18.37 12.63L14 17.01a2 2 0 0 1-2.83 0l-4.37-4.38a2 2 0 0 1 0-2.83L11.17 5.17a2 2 0 0 1 2.83 0L18.37 9.8a2 2 0 0 1 0 2.83z"/>
  </svg>
);

const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="8.5" cy="7" r="4"/>
    <path d="M20 8v6"/>
    <path d="M23 11h-6"/>
  </svg>
);

const NewspaperIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4M4 9h16M4 15h16M10 3v18"/>
    </svg>
);

const DribbbleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 4.56-16.88 5.7"/>
        <path d="M2.75 8.56c3.12-4.5 7.85-5.96 17.72-8.03"/>
    </svg>
);

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 5v14l11-7z"></path></svg>
);

const SCHEDULE: DailySchedule[] = [
  { day: 'Lunes', slots: [{ name: 'Novela', theme: ProgramTheme.CULTURE, Icon: BookIcon, soundcloudEmbedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2210426801&color=%23459caa&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true' }, { name: 'Cultura', theme: ProgramTheme.CULTURE, Icon: MusicIcon }, { name: 'Académico', theme: ProgramTheme.ACADEMIC, Icon: BookIcon }] },
  { day: 'Martes', slots: [{ name: 'Noticiero', theme: ProgramTheme.NEWS, Icon: NewspaperIcon, soundcloudEmbedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2211388769&color=%23459caa&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true' }, { name: 'Ciencia', theme: ProgramTheme.SCIENCE, Icon: FlaskIcon }, { name: 'Debate', theme: ProgramTheme.ACADEMIC, Icon: UsersIcon }] },
  { day: 'Miércoles', slots: [{ name: 'Informativo', theme: ProgramTheme.NEWS, Icon: NewspaperIcon }, { name: 'Deportes', theme: ProgramTheme.SPORTS, Icon: DribbbleIcon }, { name: 'Historia', theme: ProgramTheme.CULTURE, Icon: BookIcon }] },
  { day: 'Jueves', slots: [{ name: 'Educativo', theme: ProgramTheme.ACADEMIC, Icon: BookIcon }, { name: 'Arte', theme: ProgramTheme.CULTURE, Icon: MusicIcon }, { name: 'Literatura', theme: ProgramTheme.CULTURE, Icon: BookIcon }] },
  { day: 'Viernes', slots: [{ name: 'Entretenimiento', theme: ProgramTheme.ENTERTAINMENT, Icon: MusicIcon, soundcloudEmbedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2211389876&color=%23459caa&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true' }, { name: 'Música', theme: ProgramTheme.MUSIC, Icon: MusicIcon }, { name: 'Tecnología', theme: ProgramTheme.SCIENCE, Icon: FlaskIcon }] },
  { day: 'Sábado', slots: [{ name: 'Sabatino', theme: ProgramTheme.ENTERTAINMENT, Icon: MicIcon }, { name: 'Juventud', theme: ProgramTheme.ENTERTAINMENT, Icon: UsersIcon }, { name: 'Entretenimiento', theme: ProgramTheme.ENTERTAINMENT, Icon: MusicIcon }] },
  { day: 'Domingo', slots: [{ name: 'Dominical', theme: ProgramTheme.OTHER, Icon: MicIcon }, { name: 'Familiar', theme: ProgramTheme.OTHER, Icon: UsersIcon }, { name: 'Reflexión', theme: ProgramTheme.OTHER, Icon: BookIcon }] },
];

const TIME_SLOTS = ['6:00 – 8:00 AM', '8:00 – 10:00 AM', '10:00 – 12:00 PM'];

const themeColors: Record<ProgramTheme, {bg: string, text: string, button: string}> = {
  [ProgramTheme.CULTURE]: { bg: 'bg-emerald-100', text: 'text-emerald-800', button: 'hover:bg-emerald-200' },
  [ProgramTheme.ACADEMIC]: { bg: 'bg-sky-100', text: 'text-sky-800', button: 'hover:bg-sky-200' },
  [ProgramTheme.SCIENCE]: { bg: 'bg-indigo-100', text: 'text-indigo-800', button: 'hover:bg-indigo-200' },
  [ProgramTheme.NEWS]: { bg: 'bg-amber-100', text: 'text-amber-800', button: 'hover:bg-amber-200' },
  [ProgramTheme.MUSIC]: { bg: 'bg-rose-100', text: 'text-rose-800', button: 'hover:bg-rose-200' },
  [ProgramTheme.ENTERTAINMENT]: { bg: 'bg-purple-100', text: 'text-purple-800', button: 'hover:bg-purple-200' },
  [ProgramTheme.SPORTS]: { bg: 'bg-orange-100', text: 'text-orange-800', button: 'hover:bg-orange-200' },
  [ProgramTheme.OTHER]: { bg: 'bg-slate-200', text: 'text-slate-800', button: 'hover:bg-slate-300' },
};

const themeNames: Record<ProgramTheme, string> = {
  [ProgramTheme.CULTURE]: 'Cultura',
  [ProgramTheme.ACADEMIC]: 'Académico',
  [ProgramTheme.SCIENCE]: 'Ciencia',
  [ProgramTheme.NEWS]: 'Noticias',
  [ProgramTheme.MUSIC]: 'Música',
  [ProgramTheme.ENTERTAINMENT]: 'Entretenimiento',
  [ProgramTheme.SPORTS]: 'Deportes',
  [ProgramTheme.OTHER]: 'Otros',
};

const ProgramCell: React.FC<{ slot: ProgramSlot; onPlay: (slot: ProgramSlot) => void; }> = ({ slot, onPlay }) => {
    const colors = themeColors[slot.theme];
    return (
        <div className={`p-3 rounded-lg h-full flex flex-col justify-between items-center text-center ${colors.bg} ${colors.text} transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md`}>
            <div className="flex flex-col items-center">
                <slot.Icon className="w-6 h-6 mb-2 opacity-70"/>
                <span className="font-semibold text-sm">{slot.name}</span>
            </div>
            {slot.soundcloudEmbedUrl && (
                <button 
                    onClick={() => onPlay(slot)}
                    className={`mt-2 p-1.5 rounded-full transition-colors duration-200 ${colors.button}`}
                    aria-label={`Reproducir ${slot.name}`}
                >
                    <PlayIcon className="w-5 h-5"/>
                </button>
            )}
        </div>
    );
};

const PlayerModal: React.FC<{ program: ProgramSlot | null; onClose: () => void }> = ({ program, onClose }) => {
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


const ProgrammingGrid: React.FC = () => {
    const [activeProgram, setActiveProgram] = useState<ProgramSlot | null>(null);

    const handleOpenPlayer = (slot: ProgramSlot) => {
        setActiveProgram(slot);
    };
    
    const handleClosePlayer = () => {
        setActiveProgram(null);
    };

  return (
    <section id="parrilla" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <PlayerModal program={activeProgram} onClose={handleClosePlayer} />
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Parrilla de Programación</h2>
          <div className="mt-4 w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-10">
            {Object.keys(themeNames).map((theme) => (
                <div key={theme} className="flex items-center space-x-2">
                    <span className={`w-4 h-4 rounded-full ${themeColors[theme as ProgramTheme].bg} border border-black/10`}></span>
                    <span className="text-sm font-medium text-gray-600">{themeNames[theme as ProgramTheme]}</span>
                </div>
            ))}
        </div>

        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-1 min-w-[700px]">
            {/* Time column */}
            <div className="hidden md:flex flex-col">
              <div className="h-12"></div> {/* Header space */}
              {TIME_SLOTS.map(time => (
                <div key={time} className="h-28 flex items-center justify-center font-semibold text-gray-600 p-2">{time}</div>
              ))}
            </div>
            
            {/* Schedule columns */}
            {SCHEDULE.map(({ day, slots }) => (
              <div key={day} className="flex flex-col gap-1">
                <div className="h-12 flex items-center justify-center bg-emerald-700 text-white font-bold rounded-t-lg">
                  {day}
                </div>
                {slots.map((slot, index) => (
                  <div key={`${day}-${slot.name}-${index}`} className="h-28">
                    <ProgramCell 
                        slot={slot} 
                        onPlay={handleOpenPlayer}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammingGrid;