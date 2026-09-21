import React from 'react';
import { User, Clock, Users, CheckCircle } from 'lucide-react';

const CourseCard = ({ course, onEnroll }) => {
  const enrollmentPercentage = Math.round((course.enrolled / course.capacity) * 100);

  const getDeptColor = (dept) => {
    switch (dept) {
      case 'Computer Science':
        return 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800';
      case 'Mathematics':
        return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/70 dark:text-purple-300 dark:border-purple-800';
      case 'Engineering':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/70 dark:text-amber-300 dark:border-amber-800';
      case 'Business':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-800';
      default:
        return 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/70 dark:text-indigo-300 dark:border-indigo-800';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getDeptColor(course.department)} mb-2`}>
              {course.department}
            </span>
            <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-500 block">{course.code}</span>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug">{course.title}</h3>
          </div>
          <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold px-2.5 py-1 rounded-lg shrink-0">
            {course.credits} Credits
          </span>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 border-t border-b border-slate-100 dark:border-slate-700/80 py-3 mb-4">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
            <span className="truncate">Instructor: <strong className="text-slate-700 dark:text-slate-200">{course.instructor}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
            <span>Schedule: <strong className="text-slate-700 dark:text-slate-200">{course.schedule}</strong></span>
          </div>
        </div>

        {/* Capacity Indicator */}
        <div className="mb-4">
          <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" /> Enrolled Seats
            </span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {course.enrolled} / {course.capacity} ({enrollmentPercentage}%)
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                enrollmentPercentage >= 90
                  ? 'bg-red-500'
                  : enrollmentPercentage >= 70
                  ? 'bg-amber-500'
                  : 'bg-indigo-600 dark:bg-indigo-500'
              }`}
              style={{ width: `${Math.min(enrollmentPercentage, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onEnroll && onEnroll(course)}
        disabled={course.enrolled >= course.capacity}
        className={`w-full py-2 px-4 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 ${
          course.enrolled >= course.capacity
            ? 'bg-slate-100 dark:bg-slate-700/50 text-slate-400 dark:text-slate-500 cursor-not-allowed'
            : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white'
        }`}
      >
        {course.enrolled >= course.capacity ? (
          'Class Full'
        ) : (
          <>
            <CheckCircle className="w-3.5 h-3.5" />
            Enroll Course
          </>
        )}
      </button>
    </div>
  );
};

export default CourseCard;