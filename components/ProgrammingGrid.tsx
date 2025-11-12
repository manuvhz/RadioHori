import React, { useState, useRef } from 'react';
// FIX: Changed import type to a regular import to allow using the ProgramTheme enum as a value.
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

const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
);

const SCHEDULE: DailySchedule[] = [
  { day: 'Lunes', slots: [{ name: 'Novela', theme: ProgramTheme.CULTURE, Icon: BookIcon, audioSrc: '/audio/novela.mp3' }, { name: 'Cultura', theme: ProgramTheme.CULTURE, Icon: MusicIcon }, { name: 'Académico', theme: ProgramTheme.ACADEMIC, Icon: BookIcon }] },
  { day: 'Martes', slots: [{ name: 'Matutino', theme: ProgramTheme.NEWS, Icon: NewspaperIcon, audioSrc: '/audio/matutino.mp3' }, { name: 'Ciencia', theme: ProgramTheme.SCIENCE, Icon: FlaskIcon }, { name: 'Debate', theme: ProgramTheme.ACADEMIC, Icon: UsersIcon }] },
  { day: 'Miércoles', slots: [{ name: 'Informativo', theme: ProgramTheme.NEWS, Icon: NewspaperIcon }, { name: 'Deportes', theme: ProgramTheme.SPORTS, Icon: DribbbleIcon }, { name: 'Historia', theme: ProgramTheme.CULTURE, Icon: BookIcon }] },
  { day: 'Jueves', slots: [{ name: 'Educativo', theme: ProgramTheme.ACADEMIC, Icon: BookIcon }, { name: 'Arte', theme: ProgramTheme.CULTURE, Icon: MusicIcon }, { name: 'Literatura', theme: ProgramTheme.CULTURE, Icon: BookIcon }] },
  { day: 'Viernes', slots: [{ name: 'Entretenimiento', theme: ProgramTheme.ENTERTAINMENT, Icon: MusicIcon, audioSrc: '/audio/entretenimiento.mp3' }, { name: 'Música', theme: ProgramTheme.MUSIC, Icon: MusicIcon }, { name: 'Tecnología', theme: ProgramTheme.SCIENCE, Icon: FlaskIcon }] },
  { day: 'Sábado', slots: [{ name: 'Sabatino', theme: ProgramTheme.ENTERTAINMENT, Icon: MicIcon }, { name: 'Juventud', theme: ProgramTheme.ENTERTAINMENT, Icon: UsersIcon }, { name: 'Entretenimiento', theme: ProgramTheme.ENTERTAINMENT, Icon: MusicIcon }] },
  { day: 'Domingo', slots: [{ name: 'Dominical', theme: ProgramTheme.OTHER, Icon: MicIcon }, { name: 'Familiar', theme: ProgramTheme.OTHER, Icon: UsersIcon }, { name: 'Reflexión', theme: ProgramTheme.OTHER, Icon: BookIcon }] },
];

const TIME_SLOTS = ['6:00 – 8:00 AM', '8:00 – 10:00 AM', '10:00 – 12:00 PM'];

const themeColors: Record<ProgramTheme, {bg: string, text: string, button: string}> = {
  [ProgramTheme.CULTURE]: { bg: 'bg-emerald-50', text: 'text-emerald-800', button: 'hover:bg-emerald-200' },
  [ProgramTheme.ACADEMIC]: { bg: 'bg-sky-50', text: 'text-sky-800', button: 'hover:bg-sky-200' },
  [ProgramTheme.SCIENCE]: { bg: 'bg-indigo-50', text: 'text-indigo-800', button: 'hover:bg-indigo-200' },
  [ProgramTheme.NEWS]: { bg: 'bg-amber-50', text: 'text-amber-800', button: 'hover:bg-amber-200' },
  [ProgramTheme.MUSIC]: { bg: 'bg-rose-50', text: 'text-rose-800', button: 'hover:bg-rose-200' },
  [ProgramTheme.ENTERTAINMENT]: { bg: 'bg-purple-50', text: 'text-purple-800', button: 'hover:bg-purple-200' },
  [ProgramTheme.SPORTS]: { bg: 'bg-orange-50', text: 'text-orange-800', button: 'hover:bg-orange-200' },
  [ProgramTheme.OTHER]: { bg: 'bg-slate-100', text: 'text-slate-800', button: 'hover:bg-slate-200' },
};

const ProgramCell: React.FC<{ slot: ProgramSlot; onPlay: (slot: ProgramSlot) => void; isPlaying: boolean; isCurrent: boolean }> = ({ slot, onPlay, isPlaying, isCurrent }) => {
    const colors = themeColors[slot.theme];
    return (
        <div className={`p-3 rounded-lg h-full flex flex-col justify-between items-center text-center ${colors.bg} ${colors.text}`}>
            <div className="flex flex-col items-center">
                <slot.Icon className="w-6 h-6 mb-2 opacity-70"/>
                <span className="font-semibold text-sm">{slot.name}</span>
            </div>
            {slot.audioSrc && (
                <button 
                    onClick={() => onPlay(slot)}
                    className={`mt-2 p-1.5 rounded-full transition-colors duration-200 ${colors.button}`}
                    aria-label={isPlaying && isCurrent ? `Pausar ${slot.name}` : `Reproducir ${slot.name}`}
                >
                    {isCurrent && isPlaying ? <PauseIcon className="w-5 h-5"/> : <PlayIcon className="w-5 h-5"/>}
                </button>
            )}
        </div>
    );
};

const ProgrammingGrid: React.FC = () => {
    const [currentProgram, setCurrentProgram] = useState<ProgramSlot | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = (slot: ProgramSlot) => {
        if (currentProgram?.name === slot.name) {
            if (isPlaying) {
                audioRef.current?.pause();
            } else {
                audioRef.current?.play();
            }
        } else {
            setCurrentProgram(slot);
            if(audioRef.current && slot.audioSrc) {
                audioRef.current.src = slot.audioSrc;
                audioRef.current.load();
                audioRef.current.play();
            }
        }
    };
    
  return (
    <section id="parrilla" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <audio 
            ref={audioRef} 
            preload="none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
                setIsPlaying(false);
                setCurrentProgram(null);
            }}
        />
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Parrilla de Programación</h2>
          <div className="mt-4 w-24 h-1 bg-emerald-600 mx-auto"></div>
        </div>
        
        <div className="overflow-x-a-auto">
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
                        onPlay={handlePlay}
                        isPlaying={isPlaying}
                        isCurrent={currentProgram?.name === slot.name}
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