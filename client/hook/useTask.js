'use client'
import { taskContext } from "@/context/TaskContext";
import { useContext } from "react";

const useTask = () => {
  return useContext(taskContext);
};
export default useTask;
