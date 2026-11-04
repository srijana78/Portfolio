import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 px-6 pt-20 overflow-hidden transition-colors">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-cyan-600 dark:text-cyan-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            Available for Internships & Full-Stack Roles
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Hi, I'm <span className="text-cyan-500">Srijana Bhakri</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
            Full Stack Developer | MERN Stack
          </h2>

          {/* Short Bio Statement */}
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
            CSIT student building full-stack web apps with React, Node.js, and MongoDB.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 py-3 font-medium text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 text-center"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-6 py-3 font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-center"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right Side: Profile Picture Container */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-slate-300 dark:to-slate-800 shadow-2xl">
            {/* 
              To add your photo:
              Save your photo in the 'public' folder (e.g. public/profile.jpg) 
              and change the src below to src="/profile.jpg"
            */}
            <img 
              src="/placeholder-profile.jpg" 
              alt="Srijana Bhakri" 
              className="w-full h-full object-cover rounded-full bg-slate-100 dark:bg-slate-900"
            />
          </div>
        </div>

      </div>
    </section>
  );
}