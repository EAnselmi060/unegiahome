import React from 'react';

const Stats = () => {
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">95%</div>
            <p className="text-blue-200">Tasa de empleabilidad</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">18+</div>
            <p className="text-blue-200">Proyectos implementados</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">24</div>
            <p className="text-blue-200">Profesores especializados</p>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
            <p className="text-blue-200">Estudiantes graduados</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;