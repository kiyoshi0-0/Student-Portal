import React from 'react';
import { Mail, BookOpen, Award, User } from 'lucide-react';

const StudentCard = ({ student, onViewDetails }) => {
  const getGpaBadge = (gpa) => {
    if (gpa >= 3.8) return 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-800';
    if (gpa >= 3.0) return 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/80 dark:text-blue-300 dark:border-blue-800';
    return 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-800';
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700 border-green-200 dark:bg-green-950/80 dark:text-green-300 dark:border-green-800';
      case 'On Leave':
        return 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/80 dark:text-amber-300 dark:border-amber-800';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between">
      <div>
        <div className="h-16 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-700 dark:to-blue-600 relative">
          <span
            className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadge(
              student.status
            )}`}
          >
            {student.status}
          </span>
        </div>

        <div className="px-5 pb-4 pt-0 relative">
          <div className="flex justify-between items-end -mt-10 mb-3">
            <div className="w-20 h-20 rounded-full border-4 border-white dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-300 flex items-center justify-center shrink-0">
              <User className="w-10 h-10" />
            </div>
            <div className={`px-2.5 py-1 rounded-lg border text-xs font-bold ${getGpaBadge(student.gpa)}`}>
              GPA: {student.gpa.toFixed(2)}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">{student.name}</h3>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">{student.major}</p>

            <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 mt-3">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                <span className="truncate">{student.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                <span>Year: <strong className="text-slate-700 dark:text-slate-200">{student.year}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 shrink-0" />
                <span>Enrolled: <strong className="text-slate-700 dark:text-slate-200">{student.coursesCount || 4} Courses</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/60 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between">
        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">ID: {student.studentId}</span>
        {onViewDetails && (
          <button
            onClick={() => onViewDetails(student)}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            View Details &rarr;
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentCard;