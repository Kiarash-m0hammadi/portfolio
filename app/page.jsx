'use client';

import Hero from '../components/main/Hero';
import Projects from '../components/main/Projects';
import Skills from '../components/main/Skills';

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col w-full gap-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
