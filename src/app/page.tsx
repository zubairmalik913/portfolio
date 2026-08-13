import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import FullStack from "@/components/sections/FullStack";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Learning from "@/components/sections/Learning";
import CareerObjective from "@/components/sections/CareerObjective";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FullStack />
        <Projects />
        <Education />
        <Learning />
        <CareerObjective />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
