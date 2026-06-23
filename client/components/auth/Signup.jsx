"use client";

import useAuth from "@/hook/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signup } from "@/services/auth";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { setUser, user } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      setIsLoading(true);

      const res = await signup({
        username: username,
        email: email,
        password: password,
      });

      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(data?.message || "Signup failed");
      }

      await setUser(data.user);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f19] px-4 font-sans">
      <div className="w-full max-w-sm space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/40">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
            Create an account
          </h1>
          <p className="text-xs text-slate-500">
            Enter your details below to get started
          </p>
        </div>

        <form className="space-y-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="space-y-0.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-md border border-slate-800 bg-slate-800/40 px-3 py-1.5 text-sm text-slate-200 placeholder-slate-600 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="johndoe"
            />
          </div>

          <div className="space-y-0.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-800 bg-slate-800/40 px-3 py-1.5 text-sm text-slate-200 placeholder-slate-600 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-0.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-slate-800 bg-slate-800/40 px-3 py-1.5 text-sm text-slate-200 placeholder-slate-600 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <div className="space-y-0.5">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border border-slate-800 bg-slate-800/40 px-3 py-1.5 text-sm text-slate-200 placeholder-slate-600 transition focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {error ? (
            <div className="text-rose-500 text-sm my-3 font-medium">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 flex items-center justify-center mt-4 shadow-lg shadow-indigo-600/20"
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <div className="flex items-center justify-between gap-2 bg-slate-800/30 border border-slate-800/50 px-3 py-2 rounded-md">
          <p className="text-xs text-slate-400">Already have an account?</p>
          <button
            type="button"
            className="text-xs font-semibold text-slate-200 hover:text-indigo-400 transition"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
