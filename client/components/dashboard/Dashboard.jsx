"use client";

import React from "react";
import Header from "../layout/Header";
import Status from "./Status";
import Tasklist from "../tasks/Tasklist";
import SearchFilterBar from "./SearchFilterBar";

const Dashboard = () => {
  return (
    /* Changed to h-full and added overflow-y-auto to manage long list heights elegantly */
    <div className="flex-1 h-full overflow-y-auto bg-slate-950 text-slate-100 p-8 font-sans">
      <Header/>
      {/* Stats Summary Strip */}
      <Status/>

      {/* Search & Filter Utility Bar */}
      <SearchFilterBar/>

      {/* Main Tasks Lists Workspace */}
      <Tasklist/>
    </div>
  );
};

export default Dashboard;
