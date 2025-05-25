import React from 'react';
import { ChevronRight, BookOpen, Code, Database, BrainCircuit } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "Fundamentos de Automatización",
    description: "Aprende los conceptos básicos de la automatización de procesos y su aplicación en entornos empresariales.",
    icon: <Code className="w-8 h-8 text-blue-600" />,
    duration: "4 meses",
    level: "Básico"
  },
  {
    id: 2,
    title: "Blockchain para Automatización",
    description: "Descubre cómo la tecnología blockchain puede transformar los procesos automatizados haciéndolos más seguros y transparentes.",
    icon: <Database className="w-8 h-8 text-blue-600" />,
    duration: "6 meses",
    level: "Intermedio"
  },
  {
    id: 3,
    title: "Inteligencia Artificial Aplicada",
    description: "Implementa soluciones de IA para optimizar procesos empresariales y crear sistemas inteligentes de toma de decisiones.",
    icon: <BrainCircuit className="w-8 h-8 text-blue-600" />,
    duration: "5 meses",
    level: "Avanzado"
  },
  {
    id: 4,
    title: "Maestría en Gestión de la Automatización",
    description: "Programa completo para liderar la transformación digital mediante la implementación estratégica de tecnologías disruptivas.",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    duration: "18 meses",
    level: "Postgrado"
  }
];

const Programs = () => {
  return (
    <section id="programas" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Programas Académicos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diseñados para desarrollar las competencias necesarias en la era de la automatización y la inteligencia artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <span>{program.duration}</span>
                  <span>{program.level}</span>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Más información 
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#inscripcion" 
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
          >
            Ver todos los programas
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;