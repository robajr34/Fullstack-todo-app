import Signup from "@/components/auth/Signup";
import React from "react";

const SignupPage = () => {
  return (
    <div className="min-h-screen w-full bg-[#0b0f19] flex flex-col items-center justify-center px-4">
      <header className="flex items-center justify-center gap-3 p-4 w-full">
        <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
          ✓
        </div>

        <h1 className="text-xl font-bold text-white">TaskFlow</h1>
      </header>
      <Signup />
    </div>
  );
};

export default SignupPage;
