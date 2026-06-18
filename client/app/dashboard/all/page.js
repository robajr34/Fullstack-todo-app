import ProtectedRoute from "@/components/auth/ProtectedRoute";
import All from "@/components/dashboard/All-Dashboard";
import React, { Children } from "react";
import Dashboard from "@/components/dashboard/Dashboard";

const page = () => {
  return (
    <ProtectedRoute>
      <All/>
    </ProtectedRoute>
  );
};

export default page;
