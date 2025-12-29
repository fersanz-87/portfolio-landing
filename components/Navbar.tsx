"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  // { name: "Proyectos", href: "#proyectos" }, // Comentado temporalmente
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="text-2xl font-bold">
            <span className={isScrolled ? "text-blue-600" : "text-white"}>FS</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={isScrolled ? "text-gray-900" : "text-white"} size={24} />
            ) : (
              <Menu className={isScrolled ? "text-gray-900" : "text-white"} size={24} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
