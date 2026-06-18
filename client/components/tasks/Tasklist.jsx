"use client";

import React, { useEffect, useState } from "react";
import { getTasks } from "@/services/task";
import useTask from "@/hook/useTask";
import TaskCard from "./TaskCard";
import Spinner from "../common/Spinner";

const TaskList = () => {
  const { state } = useTask();
  const activeTasks = state.tasks?.filter((task) => !task.completed) || [];
  const completedTasks = state.tasks?.filter((task) => task.completed) || [];

  if (state.loading) {
    return <Spinner />;
  }

  if (state.error) {
    return <div className="text-center py-6 text-red-500">{state.error}</div>;
  }

  return (
    <div className="space-y-8 pb-8">
      {/* In Progress */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">
          In Progress
        </h2>

        <div className="space-y-2">
          {activeTasks.length > 0 ? (
            activeTasks.map((task) => <TaskCard key={task._id} task={task} />)
          ) : (
            <div className="text-sm text-slate-500 px-3 rounded-2xl py-4 bg-slate-800">
              <span className="mx-auto">No active tasks.</span>
            </div>
          )}
        </div>
      </div>

      {/* Completed */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">
          Completed
        </h2>

        <div className="space-y-2 opacity-60">
          {completedTasks.length > 0 ? (
            completedTasks.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))
          ) : (
            <div className="text-sm text-slate-500 px-3 rounded-2xl py-4 bg-slate-800">
              <span className="mx-auto">No completed tasks.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
