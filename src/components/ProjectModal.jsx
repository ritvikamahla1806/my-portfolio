import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-slate-900 light:bg-white border border-slate-700 light:border-slate-300 rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        {/* Modal Header Banner */}
        <div className={`p-6 bg-gradient-to-r ${project.gradient} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md mb-2">
            {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-400 light:text-slate-500 uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="text-slate-200 light:text-slate-700 text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 light:text-slate-500 uppercase tracking-wider mb-3">
              Key Architecture & Highlights
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm text-slate-300 light:text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-slate-400 light:text-slate-500 uppercase tracking-wider mb-3">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium rounded-xl bg-slate-800 light:bg-slate-100 text-violet-400 light:text-violet-700 border border-slate-700 light:border-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800 light:border-slate-200 flex items-center justify-between gap-4 bg-slate-900/50 light:bg-slate-50">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-slate-200 light:text-slate-800 text-sm font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Code</span>
          </a>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
