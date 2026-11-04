import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
        Get In <span className="text-cyan-400">Touch</span>
      </h2>
      <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
        I am currently looking for internships and full-stack development roles. Whether you have a question or just want to connect, my inbox is always open!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="mailto:srijana@example.com" 
          className="px-6 py-3 font-medium text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
        >
          Say Hello / Email Me
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-3 font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
        >
          LinkedIn Profile
        </a>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-6 py-3 font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:bg-slate-800 transition-colors"
        >
          GitHub Profile
        </a>
      </div>
    </section>
  );
}