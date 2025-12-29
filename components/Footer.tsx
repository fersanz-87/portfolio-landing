"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">FS</h3>
            <p className="text-gray-400 leading-relaxed">Desarrollador web especializado en crear soluciones digitales modernas y escalables.</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              {/* <li><a href="#proyectos" className="text-gray-400 hover:text-white transition-colors">Proyectos</a></li> */}
              <li><a href="#sobre-mi" className="text-gray-400 hover:text-white transition-colors">Sobre Mí</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          {/* Redes Sociales - Comentado temporalmente hasta agregar enlaces reales */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Sígueme</h4>
            <div className="flex gap-4">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="mailto:tu@email.com" className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div> */}
        </div>
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {currentYear} Fer Sanz Desarrollo Web. Todos los derechos reservados.</p>
          <p className="text-gray-500 text-sm mt-2">León, Gto. México</p>
        </div>
      </div>
    </footer>
  );
}
