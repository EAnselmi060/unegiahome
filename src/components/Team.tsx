import React from 'react';

const team = [
  {
    name: "Dra. Ana Martínez",
    role: "Directora de UNEGIA",
    image: "https://images.pexels.com/photos/3746314/pexels-photo-3746314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Especialista en Inteligencia Artificial con más de 15 años de experiencia en el sector académico y empresarial."
  },
  {
    name: "Dr. Carlos Gómez",
    role: "Coordinador de Blockchain",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Investigador y desarrollador de soluciones basadas en blockchain para sectores como finanzas, logística y educación."
  },
  {
    name: "Ing. Laura Rodríguez",
    role: "Coordinadora de Automatización",
    image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Experta en diseño e implementación de procesos automatizados para la optimización de operaciones empresariales."
  },
  {
    name: "Prof. Miguel Sánchez",
    role: "Coordinador Académico",
    image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Dedicado al desarrollo de programas educativos innovadores que combinan teoría y práctica en entornos reales."
  }
];

const Team = () => {
  return (
    <section id="equipo" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profesionales destacados en sus áreas con amplia experiencia académica y empresarial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;