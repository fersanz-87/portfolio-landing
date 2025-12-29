import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import About from "@/components/About";
// import Projects from "@/components/Projects"; // Comentado temporalmente
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
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
  );
}
