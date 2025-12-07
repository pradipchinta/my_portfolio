import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-purple-500/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-white/5">
        <p>© 2025 Pradip Chinta. Built with React, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  );
}
