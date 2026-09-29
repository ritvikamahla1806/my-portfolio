import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 light:text-indigo-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white light:text-slate-900 tracking-tight">
            Education & Learning Path
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 light:text-slate-600">
            Building strong engineering foundations and technical depth through structured academic programs.
          </p>
        </div>

        {/* Education Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-slate-700/60 light:border-slate-300 shadow-xl"
            >
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 light:text-violet-600 text-xs font-semibold mb-2">
                    {edu.status}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 light:text-slate-900">
                    {edu.degree}
                  </h3>
                  <div className="text-lg font-medium text-indigo-400 light:text-indigo-600 mt-1">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-sm text-slate-400 light:text-slate-500">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 light:bg-slate-200/70">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{edu.duration}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/60 light:bg-slate-200/70">
                    <MapPin className="w-3.5 h-3.5 text-pink-400" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-slate-300 light:text-slate-600 text-base leading-relaxed mb-6">
                {edu.description}
              </p>

              {/* Learning Areas */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 light:text-slate-800 mb-3">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>Relevant Learning Areas & Coursework</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.learningAreas.map((area, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-800/40 light:bg-slate-100/70 border border-slate-700/40 light:border-slate-200 text-xs sm:text-sm text-slate-300 light:text-slate-700 hover:border-violet-500/40 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-700/50 light:border-slate-200">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-200 light:text-slate-800 mb-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Key Academic Focus</span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400 light:text-slate-600">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-violet-400 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
