import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync dark mode state with the HTML tag class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 dark:bg-slate-950/80 bg-white/80 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
          Srijana<span className="text-cyan-500">.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
          <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
        </div>

        {/* Right side: Dark Mode Toggle & CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>

          <a 
            href="#contact" 
            className="px-4 py-2 text-sm font-medium text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button + Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-slate-700 dark:text-slate-300 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex flex-col gap-4 text-slate-700 dark:text-slate-300">
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-cyan-500">Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-cyan-500">Skills</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-500">About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-500">Contact</a>
        </div>
      )}
    </nav>
  );
}