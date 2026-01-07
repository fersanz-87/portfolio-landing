import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import About from "@/components/About";
// import Projects from "@/components/Projects"; // Comentado temporalmente
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  // JSON-LD Structured Data para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Fer Sanz',
    alternateName: 'Fernando Sanz',
    jobTitle: 'Desarrollador Web Full Stack',
    description: 'Desarrollador Web Full Stack especializado en Next.js, React, TypeScript y PostgreSQL',
    url: 'https://portfolio-landing-fersanz.vercel.app', // Actualiza con tu dominio personalizado
    sameAs: [
      // Agrega tus redes sociales aquí
      // 'https://www.linkedin.com/in/fersanz',
      // 'https://github.com/fersanz-87',
      // 'https://twitter.com/fersanz',
    ],
    knowsAbout: [
      'Desarrollo Web',
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Node.js',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Fer Sanz Desarrollo Web',
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Benefits />
        <Services />
        <About />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
