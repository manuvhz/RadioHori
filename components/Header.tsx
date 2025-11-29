import React, { useState } from 'react';
import type { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Institución', href: '#institucion' },
  { name: 'Programas', href: '#programas' },
  { name: 'Parrilla', href: '#parrilla' },
  { name: 'Misión y Visión', href: '#mision-vision' },
  { name: 'Créditos', href: '#creditos' },
];

const Logo: React.FC = () => (
  <div className="flex flex-col justify-center">
    <span className="font-bold text-xl md:text-2xl text-emerald-800 leading-tight">Horizonte del Sinú</span>
    <span className="text-xs text-emerald-600 font-medium tracking-wide uppercase">I.E. El Dorado</span>
  </div>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (isOpen) {
        setIsOpen(false);
    }
  };

  return (
    <header id="inicio" className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative text-gray-600 hover:text-emerald-700 font-medium transition-colors duration-300 group cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-emerald-700 focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-600 hover:text-emerald-700 font-medium cursor-pointer text-lg" 
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;