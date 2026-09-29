import React from 'react';
import { ArrowUp, Mail, Linkedin, Github, Heart } from 'lucide-react';
import { personalInfo, navigationLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 light:border-slate-200 bg-slate-950/60 light:bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 p-0.5">
                <div className="w-full h-full bg-slate-900 light:bg-white rounded-[6px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 text-xs">
                  RM
                </div>
              </div>
              <span className="font-bold text-slate-100 light:text-slate-900 text-base">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 light:text-slate-600 max-w-sm leading-relaxed">
              {personalInfo.tagline} • JECRC University (2026–2030). Exploring the intersections of artificial intelligence and modern web engineering.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 light:text-slate-600">
              {navigationLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-violet-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Action */}
          <div>
            <h4 className="text-xs font-semibold text-slate-300 light:text-slate-700 uppercase tracking-wider mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-violet-400 hover:bg-slate-700 transition-colors"
                aria-label="Email Ritvika"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-violet-400 hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-violet-400 hover:bg-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-800/80 light:bg-slate-200 text-slate-300 light:text-slate-700 hover:text-white hover:bg-violet-600 text-xs font-semibold transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/60 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 light:text-slate-600">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>using React, Vite & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
