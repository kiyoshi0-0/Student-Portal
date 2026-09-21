import React, { useState } from 'react';
import { Search, BookOpen, CheckCircle2 } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import { initialCourses } from '../data/mockData';

const Courses = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [toastMessage, setToastMessage] = useState(null);

  const departments = ['All', 'Computer Science', 'Mathematics', 'Software Engineering', 'Cybersecurity', 'Business'];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || course.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleEnroll = (courseToEnroll) => {
    setCourses((prevCourses) =>
      prevCourses.map((c) =>
        c.id === courseToEnroll.id && c.enrolled < c.capacity
          ? { ...c, enrolled: c.enrolled + 1 }
          : c
      )
    );
    setToastMessage(`Enrolled in ${courseToEnroll.code}: ${courseToEnroll.title}`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Toast Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 dark:bg-slate-800 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Course Offerings</h1>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Search code, title, instructor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-white dark:bg-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">Department:</span>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-colors ${
                selectedDept === dept
                  ? 'bg-indigo-600 text-white dark:bg-indigo-500'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-700">
          <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-200">No Courses Match Criteria</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try switching department filters or clearing search terms.</p>
        </div>
      )}
    </div>
  );
};

export default Courses;