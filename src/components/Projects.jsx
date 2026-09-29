import React from 'react';
import { FolderGit2, ExternalLink, Github, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 light:text-pink-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white light:text-slate-900 tracking-tight">
            Projects & Practical Builds
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 light:text-slate-600">
            Real-world applications combining responsive web design, AI experimentation, and student productivity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-700/60 light:border-slate-300 flex flex-col justify-between group hover:border-violet-500/60 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300"
            >
              {/* Card Banner Preview */}
              <div className={`h-48 bg-gradient-to-tr ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
                {/* Background decorative pattern */}
                <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                    backgroundSize: '16px 16px'
                  }}
                />
                
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/60 backdrop-blur-md text-white border border-white/20">
                    {project.category}
                  </span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 transition-all backdrop-blur-md"
                    title="View Project Details"
                    aria-label={`View details for ${project.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2 shadow-sm">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white drop-shadow-sm">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-slate-300 light:text-slate-600 text-sm leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-800/80 light:bg-slate-200/80 text-violet-300 light:text-violet-700 border border-slate-700/50 light:border-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-700/40 light:border-slate-200 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-md shadow-violet-600/20 hover:shadow-violet-600/30 transition-all"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 light:bg-slate-200 hover:bg-slate-700 light:hover:bg-slate-300 text-slate-300 light:text-slate-700 hover:text-white border border-slate-700/50 light:border-slate-300 transition-colors"
                    title="View GitHub Repository"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
