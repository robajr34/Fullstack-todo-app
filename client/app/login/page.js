import Login from "@/components/auth/Login";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0b0f19] px-4 w-full">
      <header className="flex items-center justify-center gap-3 p-4 w-full">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
          ✓
        </div>

        <h1 className="text-xl font-bold text-white">TaskFlow</h1>
      </header>
      <Login />
    </div>
  );
};

export default LoginPage;
