'use client'
import React, { useState } from "react";
import Sidebar from "../layout/Sidebar";
import Dashboard from "./Dashboard";
import Header from "../layout/Header";
import TaskForm from "../tasks/TaskForm";

const DashboardLayout = () => {
  return (
    <div className="relative">
      <TaskForm />
      <div className="flex flex-row w-full h-screen">
        <Sidebar />
        <div className="flex flex-col w-full h-screen">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
