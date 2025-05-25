import React from 'react';
import { Shield, Lightbulb, LineChart, RefreshCw, Server, Building } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-10 h-10 text-blue-600" />,
    title: "Seguridad Inmutable",
    description: "Implementa sistemas basados en blockchain que garantizan la integridad y seguridad de los procesos automatizados."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
    title: "Decisiones Inteligentes",
    description: "Utiliza algoritmos de IA para optimizar la toma de decisiones y generar insights valiosos para tu organización."
  },
  {
    icon: <LineChart className="w-10 h-10 text-blue-600" />,
    title: "Optimización de Procesos",
    description: "Mejora la eficiencia operativa mediante la identificación y automatización de procesos repetitivos."
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-blue-600" />,
    title: "Automatización Continua",
    description: "Desarrolla sistemas que se adaptan y mejoran constantemente gracias al aprendizaje automático."
  },
  {
    icon: <Server className="w-10 h-10 text-blue-600" />,
    title: "Infraestructura Descentralizada",
    description: "Implementa soluciones distribuidas que eliminan puntos únicos de fallo y aumentan la disponibilidad."
  },
  {
    icon: <Building className="w-10 h-10 text-blue-600" />,
    title: "Transformación Organizacional",
    description: "Prepara a tu organización para la era digital mediante la integración estratégica de tecnologías disruptivas."
  }
];

const Features = () => {
  return (
    <section id="tecnologias" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Automatización con Blockchain e Inteligencia Artificial</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo estas tecnologías revolucionan la forma en que las organizaciones operan y crean valor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;