"use client";
import { MapPin, Award, Briefcase, Infinity } from "lucide-react";
import type { Stat } from "@/types";

const stats: Stat[] = [
  { label: "Años de Experiencia", value: "5+" },
  { label: "Proyectos Completados", value: "50+" },
  { label: "Compromiso con la Calidad", value: "100%" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="section-title text-left">Sobre Mí</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                Desarrollador full stack con amplia experiencia en la creación
                de soluciones web modernas y escalables que realmente impactan
                en los negocios de mis clientes.
              </p>
              <p>
                Mi enfoque está en desarrollar sistemas a la medida utilizando
                las tecnologías más modernas como{" "}
                <span className="font-semibold text-blue-600">Next.js</span>,{" "}
                <span className="font-semibold text-blue-600">TypeScript</span>,{" "}
                <span className="font-semibold text-blue-600">React</span> y{" "}
                <span className="font-semibold text-blue-600">PostgreSQL</span>.
              </p>
              <p>
                No solo resuelvo problemas técnicos, sino que optimizo procesos,
                reduzco costos y mejoro la presencia digital de cada proyecto
                que desarrollo.
              </p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-blue-600" size={24} />
              <span className="font-medium">León, Gto.</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card text-center lg:text-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full">
                    {index === 0 && <Award className="w-8 h-8 text-blue-600" />}
                    {index === 1 && (
                      <Briefcase className="w-8 h-8 text-blue-600" />
                    )}
                    {index === 2 && (
                      <Infinity className="w-8 h-8 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
