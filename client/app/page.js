"use client";

import Spinner from "@/components/common/Spinner";
import LandingPage from "@/components/layout/LandingPage";
import useAuth from "@/hook/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Home = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false); // NEW
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/dashboard", {
          credentials: "include",
        });

        if (!res.ok) throw new Error();

        const data = await res.json();
        setUser(data.user);

        // NEW: Show spinner while redirecting
        setIsRedirecting(true);
        router.replace("/dashboard");
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Show spinner during initial load OR while redirecting
  if (loading || isRedirecting) {
    return (
      <div className="h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <LandingPage />
    </>
  );
};

export default Home;
