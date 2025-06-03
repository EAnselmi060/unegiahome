import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#010080] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <img src="/Imagen146.png" alt="UNEG Logo" className="h-10 w-auto" />
            <span className="text-white font-bold text-xl md:text-2xl">UNEGIA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-white hover:text-blue-200 transition-colors">Inicio</a>
            <a href="#programas" className="text-white hover:text-blue-200 transition-colors">Programas</a>
            <a href="#tecnologias" className="text-white hover:text-blue-200 transition-colors">Tecnologías</a>
            <a href="#equipo" className="text-white hover:text-blue-200 transition-colors">Equipo</a>
            <a href="#contacto" className="text-white hover:text-blue-200 transition-colors">Contacto</a>
          </nav>

          {/* Enrollment Button */}
          <div className="hidden md:block">
            <a 
              href="#inscripcion" 
              className="bg-[#002AD3] hover:bg-[#0020A0] text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
            >
              Inscripción
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#010080]">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#programas" 
                className="text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Programas
              </a>
              <a 
                href="#tecnologias" 
                className="text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tecnologías
              </a>
              <a 
                href="#equipo" 
                className="text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipo
              </a>
              <a 
                href="#contacto" 
                className="text-white hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <a 
                href="#inscripcion" 
                className="bg-[#002AD3] hover:bg-[#0020A0] text-white font-medium px-6 py-2 rounded-md transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Inscripción
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;