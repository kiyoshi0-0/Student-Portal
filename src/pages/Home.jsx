import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Award, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import StudentCard from '../components/StudentCard';
import CourseCard from '../components/CourseCard';
import { initialStudents, initialCourses } from '../data/mockData';

const Home = () => {
  const featuredStudents = initialStudents.slice(0, 3);
  const featuredCourses = initialCourses.slice(0, 3);

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-800/40 relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-4 border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Modern Academic Portal
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Student Information Portal
          </h1>
          <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
            Manage academic records, browse course offerings, and monitor student metrics in real-time across departments.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/students"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> View Students
            </Link>
            <Link
              to="/courses"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-xl border border-slate-700 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" /> Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 rounded-xl">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total Enrolled</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">1,248</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Active Courses</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">42</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-xl">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Average GPA</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">3.62</h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 rounded-xl">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Departments</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">8</h3>
          </div>
        </div>
      </section>

      {/* Top Students Section */}
      <section className="space-y-4">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Featured Honor Students</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Students maintaining exceptional academic standing</p>
          </div>
          <Link to="/students" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="space-y-4 pt-4">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Featured Courses</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Core courses available for registration</p>
          </div>
          <Link to="/courses" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1">
            Browse All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;