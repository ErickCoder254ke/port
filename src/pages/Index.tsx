import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="erick-portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Services />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
