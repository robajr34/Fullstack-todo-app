"use client";
import React, { useEffect, useState } from "react";
import {
  Circle,
  AlertCircle,
  CheckCircle2,
  Trash2,
  PenBoxIcon,
} from "lucide-react";
import { deleteTask, updateTask } from "@/services/task";
import useAuth from "@/hook/useAuth";
import useTask from "@/hook/useTask";
import {getRelativeDayName, isOverdue, } from "@/utils/dateFormatter";

const TaskCard = ({ task }) => {
  const { user } = useAuth();
  const { dispatch } = useTask();
  async function toggleComplete() {
    try {
      dispatch({ type: "FETCH_STARTS", payload: null });
      const res = await updateTask(task._id, {
        user: user._id,
        completed: !task.completed,
      });
      if (!res.ok) {
        throw new Error("Error while fetching the data");
      }
      const data = await res.json();
      dispatch({ type: "UPDATE_TASK", payload: data.task });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }

  async function deleteTodo() {
    try {
      dispatch({ type: "FETCH_STARTS", payload: null });
      const res = await deleteTask(task._id);
      if (!res.ok) {
        throw new Error("Error while deleting the data");
      }
      const data = await res.json();
      dispatch({ type: "DELETE_TASK", payload: task._id });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }

  const dayName = getRelativeDayName(task.dueDate)
  const overdueTasks = isOverdue(task.dueDate)
  return (
    <div className=" relative flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-slate-700 transition-colors group">
      <div className="flex items-center gap-3 min-w-0">
        <button
          className="text-slate-500 hover:text-indigo-400 transition-colors flex-shrink-0"
          onClick={() => toggleComplete()}
        >
          {task.completed ? (
            <CheckCircle2 size={20} className="text-green-500" />
          ) : (
            <Circle size={20} />
          )}
        </button>

        <div className="min-w-0">
          <p
            className={`text-sm font-medium truncate transition-colors ${
              task.completed
                ? "text-slate-400 line-through"
                : "text-slate-200 group-hover:text-white"
            }`}
          >
            {task.title}
          </p>

          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full">
              Task
            </span>

            {task.dueDate && (
              <span className="text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle size={12} />
                <span>
                  {overdueTasks ? "overdue" : dayName }
                </span>
              </span>
            )}
            {task.priority && (
              <span className="text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle size={12} />
                <span>{task.priority}</span>
              </span>
            )}
          </div>

          {task.description && (
            <p className="text-xs text-slate-400 mt-2 line-clamp-2">
              {task.description}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col relative right-0 top-1 gap-2 items-center justify-center">
        <button className="p-2 rounded-md hover:bg-red-200/40" onClick={()=>deleteTodo()}>
          <Trash2 strokeWidth={1.5} size={18} className="text-red-300" />
        </button>
        <button className="p-2 rounded-md hover:bg-slate-200/40">
          <PenBoxIcon
            strokeWidth={1.5}
            size={18}
            className="text-slate-300 hover:text-slate-100"
          />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
