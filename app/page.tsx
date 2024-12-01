import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { skills, projects } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-8 md:px-16 py-12">
      <div className="w-full max-w-4xl terminal-window">
        <div className="terminal-header">
          <div className="terminal-button bg-destructive"></div>
          <div className="terminal-button bg-primary"></div>
          <div className="terminal-button bg-secondary"></div>
          <span className="text-sm text-muted-foreground ml-2">portfolio.tsx</span>
        </div>
        <div className="terminal-content">
          <div className="space-y-8">
            <Hero />
            <div className="command-prompt">$ cat about.md</div>
            <About />
            <div className="command-prompt">$ ls skills/</div>
            <Skills skills={skills} />
            <div className="command-prompt">$ ls projects/</div>
            <Projects projects={projects} />
          </div>
        </div>
      </div>
    </main>
  );
}