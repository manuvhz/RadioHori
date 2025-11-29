import React from 'react';

const JingleSection: React.FC = () => {
  // Actualizado con el nuevo track ID proporcionado: 2220844736
  // Se mantiene el color del tema (verde esmeralda #059669) para consistencia visual
  const soundcloudUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2220844736&color=%23059669&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                            Jingle Oficial
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">Sintoniza con el sonido de nuestra institución.</p>
                    </div>
                    <div className="hidden sm:block">
                         <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                            <span className="w-2 h-2 mr-1.5 rounded-full bg-gray-400"></span>
                            Fuera del aire
                        </span>
                    </div>
                </div>
                <div className="bg-gray-50">
                    <iframe 
                        width="100%" 
                        height="166" 
                        scrolling="no" 
                        frameBorder="no" 
                        allow="autoplay" 
                        src={soundcloudUrl}
                        title="Jingle Radio Horizonte"
                    ></iframe>
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default JingleSection;