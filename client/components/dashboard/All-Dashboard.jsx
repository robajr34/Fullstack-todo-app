import React from 'react'
import TaskList from '../tasks/Tasklist';
import TaskForm from '../tasks/TaskForm';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

const All = () => {
  return (
    <div className="relative bg-slate-950 ">
      <TaskForm />
      <div className="flex flex-row w-full h-screen">
        <Sidebar />
        <div className="flex flex-col w-full h-screen overflow-y-auto p-8">
          <Header />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default All
