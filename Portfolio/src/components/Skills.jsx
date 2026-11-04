import React from 'react';

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "Mongoose"]
  },
  {
    category: "Tools & DevOps",
    skills: ["Git & GitHub", "Postman", "Vercel", "Render"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50 dark:bg-slate-900/50 bg-slate-50 px-6 max-w-7xl mx-auto transition-colors">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
          Technical <span className="text-cyan-500">Skills</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Technologies and tools I use to build robust full-stack web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((group, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm transition-colors"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {group.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-slate-600 dark:text-slate-300 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}