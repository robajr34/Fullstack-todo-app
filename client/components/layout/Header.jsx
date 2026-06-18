"use client";

import React from "react";
import { Menu, Plus, Sidebar } from "lucide-react";
import useAuth from "@/hook/useAuth";
import { greetTime } from "@/utils/time";
import usePopups from "@/hook/usePopups";

const Header = () => {
  const { setFormIsOpen, sidebarIsOpen, setSidebarIsOpen } = usePopups();
  const { user } = useAuth();
  const greet = greetTime();
  return (
    <header className="bg-slate-950 text-slate-100 relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
      <button
        onClick={() => setSidebarIsOpen((prev) => !prev)}
        className=" hover:bg-slate-800 p-2 rounded-sm hover:text-slate-200"
      >
        <Sidebar
          size={18}
          className="text-slate-400 hidden md:flex hover:text-slate-200"
        />
      </button>
      <button
        className="md:hidden absolute top-4 right-4 p-2"
        onClick={() => setSidebarIsOpen((prev) => !prev)}
      >
        <Menu size={20} />
      </button>

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          {`${greet}, ${user?.username} `}
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          You have 5 high priority tasks to tackle today.
        </p>
      </div>

      <button
        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-indigo-600/10 transition-all flex-shrink-0"
        onClick={() => setFormIsOpen(true)}
      >
        <Plus size={18} />
        <span>Add New Task</span>
      </button>
    </header>
  );
};

export default Header;
