"use client";
import { ExternalLink, Rocket } from "lucide-react";
import type { Project } from "@/types";

const projects: Project[] = [
  { id: "1", title: "E-commerce Platform", description: "Plataforma de comercio electrónico completa con panel administrativo, procesamiento de pagos y gestión de inventario.", image: "/api/placeholder/600/400", tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"], link: "#" },
  { id: "2", title: "Task Management SaaS", description: "Sistema de gestión de tareas y proyectos con colaboración en tiempo real y análisis de productividad.", image: "/api/placeholder/600/400", tags: ["React", "Node.js", "MongoDB", "Socket.io"], link: "#" },
  { id: "3", title: "Real Estate Portal", description: "Portal inmobiliario con búsqueda avanzada, tours virtuales y sistema de gestión de propiedades.", image: "/api/placeholder/600/400", tags: ["Next.js", "Prisma", "PostgreSQL", "Cloudinary"], link: "#" },
  { id: "4", title: "Healthcare Dashboard", description: "Dashboard para gestión de citas médicas, expedientes electrónicos y telemedicina.", image: "/api/placeholder/600/400", tags: ["React", "TypeScript", "Express", "PostgreSQL"], link: "#" },
  { id: "5", title: "Restaurant Ordering System", description: "Sistema de pedidos en línea para restaurantes con integración de pagos y seguimiento en tiempo real.", image: "/api/placeholder/600/400", tags: ["Next.js", "Tailwind", "Supabase"], link: "#" },
  { id: "6", title: "Analytics Platform", description: "Plataforma de análisis de datos con visualizaciones interactivas y reportes personalizados.", image: "/api/placeholder/600/400", tags: ["React", "D3.js", "Python", "FastAPI"], link: "#" },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Rocket size={20} />
            <span className="font-semibold">Proyectos Destacados</span>
          </div>
          <h2 className="section-title">Galería de Proyectos</h2>
          <p className="section-subtitle">Ejemplos de soluciones web que he desarrollado para diferentes industrias</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="card group overflow-hidden" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-blue-600">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-blue-200 rounded-lg flex items-center justify-center">
                      <Rocket size={32} />
                    </div>
                    <p className="text-sm font-medium">Vista del Proyecto</p>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group/link">
                Ver proyecto
                <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
