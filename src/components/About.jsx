import React from 'react';
import { User, Sparkles, Compass, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "AI & Emerging Tech",
      desc: "Curious about neural architectures, intelligent automation, and hands-on Generative AI applications.",
      icon: Sparkles,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20"
    },
    {
      title: "Web Engineering",
      desc: "Building clean, responsive, and accessible user interfaces with modern frameworks and CSS.",
      icon: Rocket,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "Digital Productivity",
      desc: "Mastering organized workflows, agile task frameworks, and developer tooling for peak focus.",
      icon: Lightbulb,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Lifelong Learning",
      desc: "Driven by continuous exploration, academic dedication, and collaborative project building.",
      icon: Compass,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 light:text-violet-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white light:text-slate-900 tracking-tight">
            Passionate about Technology, AI & Creative Problem Solving
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-5 shadow-lg relative">
              <div className="inline-block px-3 py-1 rounded-lg bg-slate-800 light:bg-slate-200 text-xs font-semibold text-violet-400 light:text-violet-600">
                Student Profile
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 light:text-slate-800">
                Hello! I am {personalInfo.name}
              </h3>
              <p className="text-slate-300 light:text-slate-600 text-base leading-relaxed">
                {personalInfo.aboutIntro}
              </p>
              {personalInfo.aboutStory.map((paragraph, index) => (
                <p key={index} className="text-slate-300 light:text-slate-600 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 border-t border-slate-700/50 light:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 light:text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>College: <strong>{personalInfo.college}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Degree: <strong>B.Tech (2026-2030)</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Location: <strong>{personalInfo.location}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Core Interest: <strong>AI & Web Dev</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl flex items-start gap-4 hover:translate-y-[-2px] transition-transform duration-300"
                >
                  <div className={`p-3 rounded-xl border ${pillar.color} flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 light:text-slate-900 text-base mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
