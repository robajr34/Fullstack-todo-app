"use client";

import React from "react";
import {
  Clock,
  AlertCircle,
  TrendingUp,
  SlidersHorizontal,
} from "lucide-react";
import useTask from "@/hook/useTask";
import { isOverdue } from "@/utils/dateFormatter";
const Status = () => {
  const {state} = useTask()
  const totalTasks = state.tasks ? state.tasks?.length : 0;
  const completed = state.tasks ? state.tasks.filter(task=> task.completed).length : 0;
  const inProgress = totalTasks - completed;
  const overdueTasks = state.tasks.filter((task) =>
    new Date(task.dueDate) < isOverdue(task.dueDate),
  ).length;
  console.log(overdueTasks)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 flex-shrink-0">
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Total Tasks
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">{totalTasks}</h3>
        </div>
        <div className="p-3 bg-slate-800 text-slate-400 rounded-xl">
          <SlidersHorizontal size={20} />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Completed
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">{completed}</h3>
        </div>
        <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
          <TrendingUp size={20} />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
            In Progress
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">{inProgress}</h3>
        </div>
        <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">
          <Clock size={20} />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
            Overdue
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">{overdueTasks}</h3>
        </div>
        <div className="p-3 bg-rose-500/10 text-rose-400 rounded-xl">
          <AlertCircle size={20} />
        </div>
      </div>
    </div>
  );
};

export default Status;
