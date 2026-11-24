import { useCallback, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { PROJECTS_BY_ID } from './data/content';
import { useActiveSection } from './hooks/useActiveSection';
import { useReveal } from './hooks/useReveal';

const SECTION_IDS = ['home', 'about', 'skills', 'work', 'contact'];

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS);
  const [activeProjectId, setActiveProjectId] = useState(null);

  useReveal();

  const closeProject = useCallback(() => setActiveProjectId(null), []);
  const activeProject = activeProjectId ? PROJECTS_BY_ID[activeProjectId] : null;

  return (
    <>
      <Navbar active={activeSection} onOpenProject={setActiveProjectId} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work onOpenProject={setActiveProjectId} />
        <Contact />
        <Footer />
      </main>
      <ProjectModal project={activeProject} onClose={closeProject} />
    </>
  );
}
