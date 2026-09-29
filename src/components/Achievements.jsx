import React, { useState } from 'react';
import { Trophy, Award, BookOpen, Flame, PlusCircle, CheckCircle } from 'lucide-react';
import { achievementsData, achievementCategories } from '../data/portfolioData';

const categoryIconMap = {
  Certifications: Award,
  Hackathons: Flame,
  Courses: BookOpen,
  Awards: Trophy
};

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredAchievements = activeCategory === 'All'
    ? achievementsData
    : achievementsData.filter(item => item.category === activeCategory);

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 light:text-amber-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white light:text-slate-900 tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 light:text-slate-600">
            A growing portfolio of certified courses, hackathons, academic recognitions, and tech milestones.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {achievementCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/25 scale-105'
                    : 'bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-600 hover:bg-slate-700/60 light:hover:bg-slate-200 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => {
            const Icon = categoryIconMap[item.category] || Award;
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-800 light:bg-slate-200 text-amber-300 light:text-amber-700 border border-slate-700 light:border-slate-300">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 mb-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-400 light:text-slate-500 mb-3 font-medium">
                    <span className="text-violet-400">{item.issuer}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 light:border-slate-200 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Category: {item.category}</span>
                </div>
              </div>
            );
          })}

          {/* Add New Achievement Card Template */}
          <div className="glass-card rounded-2xl p-6 border-dashed border-2 border-slate-700/80 light:border-slate-300 flex flex-col items-center justify-center text-center p-8 hover:border-violet-500/60 transition-colors">
            <div className="w-12 h-12 rounded-full bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-200 light:text-slate-800 mb-1">
              Add Your Next Milestone
            </h3>
            <p className="text-xs text-slate-400 light:text-slate-500 max-w-xs leading-relaxed">
              Easily append your upcoming certifications, hackathon wins, and awards directly in <code className="text-violet-400 bg-slate-800/80 px-1.5 py-0.5 rounded">portfolioData.js</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
