import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Client-side simulation of sending message
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 light:text-emerald-600 text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white light:text-slate-900 tracking-tight">
            Let's Connect & Collaborate
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 light:text-slate-600">
            Have a question, collaboration idea, or project to discuss? Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-slate-700/60 light:border-slate-300">
              <h3 className="text-xl font-bold text-slate-100 light:text-slate-900">
                Contact Information
              </h3>
              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                I am always excited to connect with fellow students, tech enthusiasts, mentors, and developers. Reach out anytime!
              </p>

              {/* Email Card with Copy Action */}
              <div className="p-4 rounded-2xl bg-slate-800/60 light:bg-slate-100/90 border border-slate-700/50 light:border-slate-200">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-violet-500/15 text-violet-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-slate-400 light:text-slate-500 font-medium">Email Address</span>
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-violet-300 light:text-violet-600 hover:text-white hover:bg-violet-600 rounded-lg transition-all"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-semibold text-slate-100 light:text-slate-900 hover:text-violet-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-slate-800/60 light:bg-slate-100/90 border border-slate-700/50 light:border-slate-200 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-pink-500/15 text-pink-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Location</div>
                  <div className="text-sm font-semibold text-slate-100 light:text-slate-900">{personalInfo.location}</div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-700/50 light:border-slate-200 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                  Social & Professional Profiles
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* LinkedIn */}
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 light:bg-slate-100 hover:bg-blue-600/15 hover:border-blue-500/40 border border-slate-700/50 light:border-slate-200 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-semibold text-slate-200 light:text-slate-800">LinkedIn</div>
                      <div className="text-[11px] text-slate-400 light:text-slate-500">Ritvika Mahla</div>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-800/60 light:bg-slate-100 hover:bg-purple-600/15 hover:border-purple-500/40 border border-slate-700/50 light:border-slate-200 transition-all group"
                  >
                    <Github className="w-5 h-5 text-slate-300 light:text-slate-700 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs font-semibold text-slate-200 light:text-slate-800">GitHub</div>
                      <div className="text-[11px] text-slate-400 light:text-slate-500">@ritvikamahla</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-700/60 light:border-slate-300 shadow-xl">
              <h3 className="text-xl font-bold text-slate-100 light:text-slate-900 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-400 light:text-slate-600 mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {/* Status alerts */}
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 light:text-emerald-700 flex items-center gap-3 animate-fadeIn">
                  <Check className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                  <p className="text-sm">
                    Thank you! Your message has been prepared. You can also reach me directly at <strong>{personalInfo.email}</strong>.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-300 light:text-red-700 flex items-center gap-3 animate-fadeIn">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                      Your Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Tech Discussion"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-1.5">
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 text-slate-100 light:text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
