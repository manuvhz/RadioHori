import React from 'react';

const CheckShieldIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
);

const HandshakeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M14.5 18H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.4a2 2 0 0 0 1.9-1.1L10 2"/><path d="M9.5 18H19a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1.4a2 2 0 0 1-1.9-1.1L14 2"/>
    </svg>
);

const UsersRoundIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 21a8 8 0 0 0-12 0"/><circle cx="12" cy="11" r="4"/><path d="M6 21a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/>
    </svg>
);

const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
);

const ValueCard: React.FC<{ title: string; children: React.ReactNode; Icon: React.FC<{className?: string}> }> = ({ title, children, Icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-3">
            <Icon className="w-7 h-7 text-emerald-600 mr-3" />
            <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
        </div>
        <p className="text-gray-600">{children}</p>
    </div>
);

const MissionVision: React.FC = () => {
  return (
    <section id="mision-vision" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">Nuestra Identidad</h2>
          <p className="mt-4 text-lg text-gray-600">Los pilares que guían nuestro quehacer educativo.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                    <TargetIcon className="w-8 h-8 text-emerald-700 mr-4" />
                    <h3 className="text-2xl font-bold text-gray-800">Misión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Brindar una educación de calidad, inclusiva y pertinente, que promueva el desarrollo de competencias académicas, tecnológicas, culturales y sociales en nuestros estudiantes, preparándolos para enfrentar los retos del siglo XXI con un alto sentido de responsabilidad y compromiso con su entorno.
                </p>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                 <div className="flex items-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-emerald-700 mr-4"><path d="M2.5 16a7.5 7.5 0 1 0 15 0"/><path d="M2.5 16V6a2 2 0 0 1 2-2h3"/><path d="M21.5 6V16a2 2 0 0 1-2 2h-3"/><path d="M10 16s.5-1 2-1 2 1 2 1"/><path d="M7.5 8h.01"/><path d="M16.5 8h.01"/></svg>
                    <h3 className="text-2xl font-bold text-gray-800">Visión</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    Ser en el 2030 una institución educativa líder en Montería, reconocida por su excelencia académica, su innovación pedagógica y la formación de ciudadanos íntegros, críticos y emprendedores, capaces de transformar positivamente su comunidad.
                </p>
            </div>
        </div>

        <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-emerald-800">Valores Institucionales</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard title="Respeto" Icon={HandshakeIcon}>
            Reconocemos y valoramos la diversidad de ideas, culturas y personas, fomentando un ambiente de sana convivencia.
          </ValueCard>
          <ValueCard title="Responsabilidad" Icon={CheckShieldIcon}>
            Asumimos nuestros deberes y compromisos con dedicación, cumpliendo con nuestras obligaciones académicas y personales.
          </ValueCard>
          <ValueCard title="Pertenencia" Icon={UsersRoundIcon}>
            Promovemos el amor y el orgullo por nuestra institución, cuidando sus recursos y representando sus ideales con honor.
          </ValueCard>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
