import React, { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTag, setSelectedTag] = useState('All');

// Get unique tags from all projects
const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

// Filter projects based on click
const filteredProjects = selectedTag === 'All' 
  ? projects 
  : projects.filter(p => p.tags?.includes(selectedTag));

  useEffect(() => {
    // Fetch data from your running Express backend
    fetch('http://localhost:5000/api/projects')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch projects from backend');
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setError('Could not load projects. Make sure your backend server is running.');
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Featured <span className="text-cyan-500">Projects</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Fetched dynamically from my MongoDB database via Express & Mongoose.
        </p>
      </div>

      {/* Loading & Error States */}
      {loading && (
        <div className="text-center text-slate-500 dark:text-slate-400 py-12">
          Loading projects from database...
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 bg-red-50 dark:bg-red-950/30 p-4 rounded-xl border border-red-200 dark:border-red-900">
          {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && projects.length === 0 && (
        <div className="text-center text-slate-500 dark:text-slate-400 py-12">
          No projects found in the database yet.
        </div>
      )}


      <div className="flex flex-wrap justify-center gap-2 mb-10">
  {allTags.map((tag, idx) => (
    <button
      key={idx}
      onClick={() => setSelectedTag(tag)}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
        selectedTag === tag
          ? 'bg-cyan-500 text-white'
          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
      }`}
    >
      {tag}
    </button>
  ))}
</div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project._id}
            className="flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:underline"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}