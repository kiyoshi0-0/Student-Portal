import React from 'react';
import { ShieldCheck, Code, Sparkles, CheckCircle } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React', desc: 'Component modularity & hooks', category: 'Frontend' },
    { name: 'React Router', desc: 'Client-side routing navigation', category: 'Routing' },
    { name: 'Tailwind CSS', desc: 'Utility-first styling system', category: 'Styling' },
    { name: 'Lucide Icons', desc: 'Clean UI vector icon set', category: 'Design' },
  ];

  const features = [
    'Reusable JSX components (StudentCard, CourseCard, Navbar)',
    'Dynamic routing between Home, Students, Courses, and About pages',
    'Real-time multi-field search and category filter options',
    'Interactive enrollment buttons with real-time class capacity tracking',
    'Modal overlays for student detail previews and registration',
    'Fully responsive layout for mobile, tablet, and desktop viewports',
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm text-center max-w-3xl mx-auto">
        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 mb-2">About Student Information Portal</h1>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Designed as a complete reference implementation demonstrating modular React components, client-side React Router navigation, dynamic state updates, and Tailwind CSS layouts.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/60">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" /> Technology Stack
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-100/60 dark:border-indigo-900/50">
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">{tech.category}</span>
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 mt-1">{tech.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;