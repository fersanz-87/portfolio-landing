"use client";
import { Clock, DollarSign, TrendingUp } from "lucide-react";
import type { Benefit } from "@/types";

const benefits: Benefit[] = [
  { id: "1", icon: "clock", title: "Entrega Rápida", description: "Desarrollos a la medida en tiempos reducidos sin comprometer la calidad." },
  { id: "2", icon: "dollar", title: "Flexibilidad de Pago", description: "Opciones de pago adaptadas a las necesidades de tu proyecto y presupuesto." },
  { id: "3", icon: "trending", title: "Valor para tus Clientes", description: "Soluciones que mejoran la imagen de tu negocio y el valor que ofreces." },
];

const IconComponent = ({ icon }: { icon: string }) => {
  const iconClass = "w-12 h-12 text-blue-600";
  switch (icon) {
    case "clock": return <Clock className={iconClass} />;
    case "dollar": return <DollarSign className={iconClass} />;
    case "trending": return <TrendingUp className={iconClass} />;
    default: return null;
  }
};

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={benefit.id} className="card text-center" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-50 rounded-full"><IconComponent icon={benefit.icon} /></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
