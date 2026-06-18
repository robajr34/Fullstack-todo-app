import { Filter, Search, SortDesc } from 'lucide-react';
import React from 'react'

const SearchFilterBar = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6 items-center justify-between flex-shrink-0">
      <div className="relative w-full sm:max-w-md">
        <Search
          size={18}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
        />
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
        />
      </div>

      <div className="flex gap-2 w-full sm:w-auto">
        <button className="flex items-center justify-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-sm font-medium text-slate-300 transition-colors w-full sm:w-auto">
          <Filter size={16} />
          <span>Filter</span>
        </button>
        <button className="flex items-center justify-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-sm font-medium text-slate-300 transition-colors w-full sm:w-auto">
          <SortDesc size={16} />
          <span>Sort</span>
        </button>
      </div>
    </div>
  );
}

export default SearchFilterBar
