
import React, { useState } from 'react';
import type { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Universidad', href: '#universidad' },
  { name: 'Programas', href: '#programas' },
  { name: 'Parrilla', href: '#parrilla' },
  { name: 'Créditos', href: '#creditos' },
];

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-700">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2h2v2a5 5 0 0 0 10 0v-2h2z" fill="currentColor"/>
      <path d="M5 19h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" fill="currentColor" fillOpacity="0.7"/>
    </svg>
    <span className="font-bold text-xl text-emerald-800">Radio Horizonte del Sinú</span>
  </div>
);


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="inicio" className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-emerald-700 font-medium transition-colors duration-300">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-emerald-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-600 hover:text-emerald-700 font-medium" onClick={() => setIsOpen(false)}>
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
