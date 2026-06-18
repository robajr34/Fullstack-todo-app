'use client'
import { authContext } from "@/context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  return useContext(authContext);
};
export default useAuth;
