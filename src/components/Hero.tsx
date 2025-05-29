import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#010080] via-[#010070] to-[#010080] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-64 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
        <div className="grid grid-cols-10 gap-2 h-full w-full">
          {Array.from({ length: 200 }).map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-white opacity-30"
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 3}s infinite`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              <span className="block">GESTIÓN DE LA</span>
              <span className="block text-blue-300">AUTOMATIZACIÓN E</span>
              <span className="block">INTELIGENCIA ARTIFICIAL</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-xl mx-auto md:mx-0">
              Formamos profesionales capaces de transformar organizaciones mediante 
              la implementación de tecnologías disruptivas.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="#programas" 
                className="bg-[#002AD3] hover:bg-[#0020A0] text-white font-medium px-8 py-3 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Explorar Programas
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a 
                href="#contacto" 
                className="bg-transparent border border-white text-white hover:bg-white hover:text-[#010080] font-medium px-8 py-3 rounded-md transition-colors duration-300"
              >
                Contactar
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02]">
              <img 
                src="/Unegia1.png" 
                alt="UNEGIA Avatar" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010080]/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Automatización con Blockchain e IA</h3>
                <p className="text-blue-100">Potencia tu carrera con las tecnologías del futuro</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#f8fafc" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;