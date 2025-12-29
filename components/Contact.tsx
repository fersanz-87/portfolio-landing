"use client";
import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import type { ContactFormData } from "@/types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar datos a la API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el mensaje");
      }

      // Éxito: limpiar formulario y mostrar mensaje
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al enviar tu mensaje. Por favor intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Hablemos de tu Proyecto</h2>
          <p className="section-subtitle">
            Estoy listo para ayudarte a materializar tus ideas
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="card">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Envíame un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-orange w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
            {isSuccess && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="text-green-600" size={24} />
                <div>
                  <p className="font-semibold text-green-900">
                    ¡Mensaje enviado!
                  </p>
                  <p className="text-sm text-green-700">Te contactaré pronto</p>
                </div>
              </div>
            )}
          </div>
          <div className="space-y-6 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 p-8 rounded-xl">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Información de Contacto
              </h3>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Prefiero conectar directamente. Elige la forma más conveniente
                para ti:
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:tu@email.com"
                className="card flex items-center gap-4 hover:border-blue-300 transition-colors"
              >
                <div className="p-4 bg-blue-50 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-blue-600">fersanzdev@gmail.com</p>
                </div>
              </a>
              {/* WhatsApp - Comentado temporalmente hasta integración */}
              {/* <a href="https://wa.me/521234567890" target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 hover:border-green-300 transition-colors">
                <div className="p-4 bg-green-50 rounded-lg">
                  <MessageSquare className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <p className="text-green-600">Enviar Mensaje</p>
                </div>
              </a> */}
            </div>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6">
              <h4 className="font-bold text-white mb-2">
                ¿Listo para empezar?
              </h4>
              <p className="text-blue-100 leading-relaxed">
                Cuéntame sobre tu proyecto y te responderé en menos de 24 horas
                con una propuesta inicial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
