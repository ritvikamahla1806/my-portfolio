import React from 'react';
import { ArrowRight, Mail, Sparkles, Code2, Bot, GraduationCap, MapPin, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] light:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center z-10">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 light:bg-slate-100/90 border border-violet-500/30 text-xs sm:text-sm font-medium text-slate-300 light:text-slate-700 mb-8 shadow-sm backdrop-blur-md animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3.5" />
          <span>{personalInfo.status}</span>
        </div>

        {/* Main Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white light:text-slate-900 mb-4">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 text-glow">
            {personalInfo.name}
          </span>
        </h1>

        {/* Tagline / Subtitle */}
        <div className="inline-block px-4 py-1 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 light:text-violet-700 font-semibold text-base sm:text-xl md:text-2xl mb-6">
          {personalInfo.tagline}
        </div>

        {/* Short Professional Introduction */}
        <p className="max-w-2xl text-slate-300 light:text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
          {personalInfo.headline}{" "}
          <span className="text-slate-400 light:text-slate-500">
            Passionate about transforming creative ideas into intuitive digital solutions through clean code and modern workflows.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 rounded-xl shadow-lg shadow-violet-600/30 hover:shadow-cyan-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold text-slate-200 light:text-slate-700 bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700/80 light:hover:bg-slate-200 border border-slate-700 light:border-slate-300 rounded-xl hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <Mail className="w-4 h-4 text-violet-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Quick Highlights / Cards Pill Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 hover:border-violet-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-violet-500/15 text-violet-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Pursuing</div>
              <div className="text-sm font-bold text-slate-200 light:text-slate-800">B.Tech (2026-30)</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 hover:border-indigo-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Institution</div>
              <div className="text-sm font-bold text-slate-200 light:text-slate-800">JECRC University</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 hover:border-cyan-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Specialization</div>
              <div className="text-sm font-bold text-slate-200 light:text-slate-800">AI & Web Tech</div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl flex items-center gap-3.5 hover:border-pink-500/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-pink-500/15 text-pink-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Location</div>
              <div className="text-sm font-bold text-slate-200 light:text-slate-800">{personalInfo.location}</div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#about"
          className="mt-12 text-slate-500 hover:text-violet-400 transition-colors flex flex-col items-center gap-1 group"
          aria-label="Scroll to About section"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Explore</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
