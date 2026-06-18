"use client";

import React, { useState } from "react";
import { Plus, Calendar, Tag, X } from "lucide-react";
import usePopups from "@/hook/usePopups";
import useTask from "@/hook/useTask";
import { createNewTask } from "@/services/task";
import useAuth from "@/hook/useAuth";

const TaskForm = () => {
  // Initialize state for each input
  const { user } = useAuth();
  const { formIsOpen, setFormIsOpen } = usePopups();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [list, setList] = useState("work");

  const { dispatch } = useTask();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "FETCH_START" });
      const res = await createNewTask({
        title,
        description,
        dueDate,
        user:user._id,
      });

      const data = await res.json();
      console.log(data.task);
      if (!res.ok) {
        throw new Error("Failed to create task ");
      }
      dispatch({ type: "ADD_TASK", payload: data.task });
      if(data.sucess){
        setFormIsOpen(false)
      }
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }

    console.log("Task Data Submitted:");
  };

  return (
    /* 1. Full-screen absolute backdrop overlay */
    <div
      className={`${!formIsOpen ? "hidden" : null} absolute inset-0 z-1000 bg-[#0b0f19]/1 backdrop-blur-xs flex items-center justify-center p-4 `}
    >
      {/* 2. The Floating Form Card */}
      <div className="relative w-full max-w-xl bg-slate-900 text-slate-100 rounded-xl border border-slate-400 p-6  shadow-2xl shadow-black/60 font-sans">
        {/* Absolute Positioned Close Button */}
        <button
          type="button"
          onClick={() => setFormIsOpen(false)}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-200 hover:bg-slate-800/60 p-1.5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-slate-700"
          aria-label="Close form"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          {" "}
          {/* Added padding-right so text never collides with the X button */}
          <h2 className="text-xl font-bold tracking-wide text-slate-100 flex items-center gap-2">
            <span className="bg-indigo-600 p-1.5 rounded-lg text-white">
              <Plus size={16} />
            </span>
            Create New Task
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Add a new item to your TaskFlow dashboard.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Review project proposal"
              className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              required
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details or notes about this task..."
              rows={3}
              className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
            />
          </div>

          {/* Grid for Due Date & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Due Date */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Calendar size={12} className="text-slate-500" />
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors scheme-dark"
                required
              />
            </div>

            {/* Category Selector */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Tag size={12} className="text-slate-500" />
                List / Category
              </label>
              <select
                value={list}
                onChange={(e) => setList(e.target.value)}
                className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors cursor-pointer text-left"
              >
                <option value="work" className="bg-slate-900 text-slate-300">
                  💼 Work Project
                </option>
                <option
                  value="personal"
                  className="bg-slate-900 text-slate-300"
                >
                  🛒 Personal Errands
                </option>
                <option value="fitness" className="bg-slate-900 text-slate-300">
                  🏋️‍♂️ Fitness Goals
                </option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 px-4 rounded-lg shadow-lg shadow-indigo-600/20 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
