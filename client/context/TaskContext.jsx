"use client";
import { getTasks } from "@/services/task";
import React, {
  createContext,
  useState,
  useEffect,
  useReducer,
  act,
} from "react";
import reducer from "./taskReducer";
export const taskContext = createContext();
const TaskProvider = ({ children }) => {
  const initialState = {
    tasks: [],
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getAllTasks = async () => {
      try {
        dispatch({ type: "FETCH_START" });
        const res = await getTasks();
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await res.json();
        dispatch({ type: "FETCH_SUCCESS", payload: data.tasks });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };

    getAllTasks();
  }, []);

  return (
    <taskContext.Provider value={{ state, dispatch }}>
      {children}
    </taskContext.Provider>
  );
};

export default TaskProvider;
