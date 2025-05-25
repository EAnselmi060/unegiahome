import React from 'react';

const CTA = () => {
  return (
    <section id="inscripcion" className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para transformar tu futuro profesional?</h2>
            <p className="text-xl text-blue-100 max-w-2xl">
              Inscríbete hoy y comienza tu camino en la automatización con blockchain e inteligencia artificial.
            </p>
          </div>
          <div>
            <a 
              href="#" 
              className="inline-block bg-white text-blue-900 hover:bg-blue-100 font-bold px-8 py-4 rounded-md text-lg transition-colors duration-300"
            >
              Inscríbete Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;