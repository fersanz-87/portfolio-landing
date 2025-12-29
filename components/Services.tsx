"use client";
import { Code, Smartphone, Settings, Lightbulb, Wrench, Database } from "lucide-react";
import type { Service } from "@/types";

const services: Service[] = [
  { id: "1", icon: "code", title: "Desarrollo Web", description: "Sitios web profesionales, modernos y optimizados con Next.js, React y TypeScript." },
  { id: "2", icon: "smartphone", title: "Aplicaciones Móviles", description: "Apps nativas y multiplataforma diseñadas para ofrecer la mejor experiencia de usuario." },
  { id: "3", icon: "database", title: "Bases de Datos", description: "Diseño e implementación de bases de datos escalables con PostgreSQL y optimización de queries." },
  { id: "4", icon: "settings", title: "Sistemas Personalizados", description: "Desarrollo de sistemas a la medida para optimizar y automatizar tus procesos internos." },
  { id: "5", icon: "lightbulb", title: "Consultoría IT", description: "Asesoramiento experto para tomar las mejores decisiones tecnológicas en tu negocio." },
  { id: "6", icon: "wrench", title: "Mantenimiento", description: "Soporte continuo y actualizaciones para mantener tus sistemas funcionando óptimamente." },
];

const IconComponent = ({ icon }: { icon: string }) => {
  const iconClass = "w-8 h-8";
  switch (icon) {
    case "code": return <Code className={iconClass} />;
    case "smartphone": return <Smartphone className={iconClass} />;
    case "database": return <Database className={iconClass} />;
    case "settings": return <Settings className={iconClass} />;
    case "lightbulb": return <Lightbulb className={iconClass} />;
    case "wrench": return <Wrench className={iconClass} />;
    default: return null;
  }
};

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Servicios</h2>
          <p className="section-subtitle text-blue-100">Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="card group" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                  <div className="text-blue-600"><IconComponent icon={service.icon} /></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
