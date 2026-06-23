"use client";
import { useState } from "react";
import { login } from "@/services/auth";
import useAuth from "@/hook/useAuth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useAuth();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true); // Added this to toggle your loading state on submit
    try {
      const res = await login({ email: email, password: password });
      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        throw new Error(data.error.message);
      }
      setUser(data.user);
      setMessage(data.message);
      router.push("/dashboard");
    } catch (error) {
      setUser(null);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center  px-4 font-sans w-full">
      <div className="w-full max-w-sm space-y-4 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/40">
        <div className="space-y-1 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
            Welcome back
          </h1>
          <p className="text-xs text-slate-500">
            Enter your credentials to access your account
          </p>
        </div>

        <form className="space-y-3" onSubmit={(e) => handleSubmit(e)}>
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
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Password
              </label>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>

        <div className="flex items-center justify-between gap-2 bg-slate-800/30 border border-slate-800/50 px-3 py-2 rounded-md">
          <p className="text-xs text-slate-400">Don't have an account?</p>
          <button
            type="button"
            className="text-xs font-semibold text-slate-200 hover:text-indigo-400 transition"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
