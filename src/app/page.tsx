import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Education from '@/components/Education';

export default function Home() {
  return (
    <main className="min-h-screen bg-smoky-black">
      <Hero />
      <div className="bg-gradient-to-b from-smoky-black to-eerie-black-1">
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </div>
      <Certificates />
      <Contact />
    </main>
  );
}
