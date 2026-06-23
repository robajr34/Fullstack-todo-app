import ProtectedRoute from "@/components/auth/ProtectedRoute";
import SettingsPage from "@/components/layout/SettingsPage";
import React from "react";

const page = () => {
  return (
    <ProtectedRoute>
      <SettingsPage />
    </ProtectedRoute>
  );
};

export default page;
