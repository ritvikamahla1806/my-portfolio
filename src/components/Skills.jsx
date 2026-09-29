import React, { useState } from 'react';
import { 
  Code, 
  Palette, 
  FileCode, 
  Terminal, 
  Cpu, 
  Sparkles, 
  Globe, 
  Zap,
  Wrench,
  Check
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/portfolioData';

// Map icon string names to actual Lucide components
const iconMap = {
  code: Code,
  palette: Palette,
  braces: FileCode,
  terminal: Terminal,
  cpu: Cpu,
  sparkles: Sparkles,
  globe: Globe,
  zap: Zap
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 light:text-cyan-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white light:text-slate-900 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 light:text-slate-600">
            A versatile toolkit spanning modern web development, programming languages, and practical artificial intelligence.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-600/25 scale-105'
                    : 'bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-600 hover:bg-slate-700/60 light:hover:bg-slate-200 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={skill.id}
                className="group glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl hover:border-violet-500/50 flex flex-col justify-between"
              >
                {/* Glowing border top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 shadow-md flex items-center justify-center`}>
                      <div className="w-full h-full bg-slate-900 light:bg-white rounded-[10px] flex items-center justify-center text-slate-100 light:text-slate-900 group-hover:bg-transparent group-hover:text-white transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800/80 light:bg-slate-200/80 text-violet-300 light:text-violet-700 border border-slate-700/50 light:border-slate-300">
                      {skill.proficiency}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 group-hover:text-violet-400 transition-colors mb-1.5">
                    {skill.name}
                  </h3>
                  <div className="text-xs text-indigo-400 light:text-indigo-600 font-medium mb-3">
                    {skill.category}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 light:border-slate-200 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>Applied in practical projects</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
