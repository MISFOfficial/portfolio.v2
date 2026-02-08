import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
