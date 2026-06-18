"use client";

import React from "react";
import Link from "next/link";
import {
  CheckSquare,
  Calendar,
  List,
  Hash,
  Settings,
  Plus,
  User,
  SidebarOpen,
  SidebarClose,
  X,
} from "lucide-react";
import useAuth from "@/hook/useAuth";
import usePopups from "@/hook/usePopups";
import useTask from "@/hook/useTask";
import UserSetting from "../Popups/UserSetting";

const Sidebar = () => {
  const { user } = useAuth();
  const { state } = useTask();
  const {
    sidebarIsOpen,
    setSidebarIsOpen,
    userSettingIsOpen,
    setUserSettingIsOpen,
  } = usePopups();
  const todayTasks = state.tasks?.filter((task) => {
    const taskDate = new Date(task.dueDate).toDateString();
    const currentDate = new Date().toDateString();

    return taskDate === currentDate;
  }).length;
  const totalTasks = state.tasks?.length;
  return (
    <div
       className={` w-full md:w-80 ${sidebarIsOpen ? "flex flex-col" : "hidden"} flex-col fixed top-0 left-0 md:static z-50
    transition-transform duration-300  h-screen bg-slate-900 text-slate-100 justify-between border-r border-slate-800 p-4 font-sans`}
    >
      {/* Top Section: App Logo & Brand */}
      <div className="relative">
        <button
          className=" md:hidden absolute top-0 right-0 hover:bg-slate-800 p-1 rounded-sm hover:text-slate-400"
          onClick={() => setSidebarIsOpen(false)}
        >
          <X className="text-slate-400 hover:text-slate-200" />
        </button>
        <div className="flex items-center gap-3 px-2 py-3 mb-6">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <CheckSquare size={20} />
          </div>
          <span className="text-xl font-bold tracking-wide">TaskFlow</span>
        </div>

        {/* Primary Navigation */}
        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-indigo-600/20 text-indigo-400 font-medium transition-colors"
          >
            <div className="flex items-center gap-3">
              <Calendar size={18} />
              <span>Today</span>
            </div>
            <span className="text-xs font-semibold bg-indigo-600/30 text-indigo-300 px-2 py-0.5 rounded-full">
              {todayTasks}
            </span>
          </Link>

          <Link
            href="/dashboard/all"
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
          >
            <div className="flex items-center gap-3">
              <List size={18} />
              <span>All Tasks</span>
            </div>
            <span className="text-xs font-semibold bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
              {totalTasks}
            </span>
          </Link>
        </nav>

        <hr className="border-slate-800 my-6" />

        {/* Lists / Categories Section */}
        <div>
          <div className="flex items-center justify-between px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <span>Lists</span>
            <button
              className="hover:text-indigo-400 p-0.5 rounded transition-colors"
              aria-label="Add list"
            >
              <Plus size={14} />
            </button>
          </div>

          <div className="space-y-1">
            <Link
              href="/dashboard/list/work"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3 truncate">
                <Hash size={16} className="text-emerald-500" />
                <span className="truncate">Work Project</span>
              </div>
              <span className="text-xs text-slate-500">3</span>
            </Link>

            <Link
              href="/dashboard/list/personal"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3 truncate">
                <Hash size={16} className="text-amber-500" />
                <span className="truncate">Personal Errands</span>
              </div>
              <span className="text-xs text-slate-500">8</span>
            </Link>

            <Link
              href="/dashboard/list/fitness"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
            >
              <div className="flex items-center gap-3 truncate">
                <Hash size={16} className="text-purple-500" />
                <span className="truncate">Fitness Goals</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Settings & User Profile */}
      <div className="space-y-4">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>

        <UserSetting/>

        <div
          className="cursor-pointer border-t relative border-slate-700 pt-4 flex items-center gap-3 px-2"
          onClick={() => setUserSettingIsOpen((prev) => !prev)}
        >
          <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0">
            <User size={18} />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium text-slate-200 truncate">
              {user?.username}
            </span>
            <span className="text-xs text-slate-500 truncate">
              {user?.email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
