import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen font-['Inter',sans-serif] text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-slate-950 transition-colors">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}