"use client";
import useAuth from "@/hook/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/dashboard",
          {
            credentials: "include",
          },
        );

        // Parse the JSON data (and fix the missing parentheses bug)
        const data = await response.json();

        console.log(data);
        console.log(data.user) // Equivalent to your console.log(re)
        setUser(data.user);
        console.log("done");
      } catch (error) {
        console.error("Fetch error:", error); // Good practice to log the actual error
        setUser(null);
        router.replace("/login");
      }
    };

    fetchDashboard();
  }, []);
  return children;
};

export default ProtectedRoute;
