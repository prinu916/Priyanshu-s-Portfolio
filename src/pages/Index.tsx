import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CurrentlyWorking from "@/components/CurrentlyWorking";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import CursorEffect from "@/components/CursorEffect";
import ScrollProgress from "@/components/ScrollProgress";
import Stars from "@/components/Stars";


const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Stars />
      <ScrollProgress />
      <CursorEffect />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CurrentlyWorking />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  );

};

export default Index;
