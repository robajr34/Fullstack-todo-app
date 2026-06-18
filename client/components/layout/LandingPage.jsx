"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* --- NAVIGATION --- */}
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-indigo-600 text-white p-2 rounded-lg font-bold text-xl tracking-wider shadow-md shadow-indigo-200">
            ✓
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            TaskFlow
          </span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">
            Reviews
          </a>
        </div>
        <button
          onClick={() => router.push("/signup")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md shadow-indigo-100 transition duration-200"
        >
          Get Started Free
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-24 text-center md:text-left md:flex md:items-center md:justify-between gap-12">
        <div className="md:w-1/2 space-y-6">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full">
            🚀 Version 2.0 is now live
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Clear your mind. <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Crush your goals.
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
            The minimalist to-do list designed to help you organize your day,
            block out the noise, and actually get things done.
          </p>
        </div>

        {/* App Interactive Mockup Preview */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-400 to-violet-400 rounded-3xl filter blur-2xl opacity-20 -rotate-3"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 max-w-md mx-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <span className="font-bold text-slate-700">Today's Focus</span>
              <span className="text-xs text-slate-400 font-medium">
                3 of 5 completed
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="line-through text-slate-400 text-sm">
                  Morning cardio session 🏃‍♂️
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="line-through text-slate-400 text-sm">
                  Review code repository
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-indigo-100 shadow-sm shadow-indigo-50">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-slate-700 text-sm font-medium">
                  Draft landing page layout 🎨
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-100">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-slate-700 text-sm">Call the dentist</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- FEATURES SECTION --- */}
      <section
        id="features"
        className="bg-white py-20 border-y border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need, nothing you don't
            </h2>
            <p className="mt-4 text-slate-600">
              We stripped away the complex project management bloat so you can
              focus entirely on executing your day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold">
                ⚡
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                Lightning Fast
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Add tasks in seconds with keyboard shortcuts. No dropdowns, no
                friction, just pure speed.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold">
                🎯
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                Daily Highlight
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pick your absolute top priority item for the day to keep your
                primary objective front and center.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-4">
              <div className="bg-indigo-100 text-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold">
                🔄
              </div>
              <h3 className="font-bold text-lg text-slate-900">
                Seamless Sync
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your tasks automatically stay updated across your phone, tablet,
                and desktop securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section id="testimonials" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="flex justify-center text-amber-400 text-xl">
            ★★★★★
          </div>
          <blockquote className="text-2xl font-medium tracking-tight text-slate-900 italic">
            "This app completely replaced my messy notebook. It is fast, looks
            incredible, and doesn't stress me out with unnecessary features."
          </blockquote>
          <div>
            <p className="font-bold text-slate-900">Sarah Jenkins</p>
            <p className="text-sm text-slate-500">Product Designer at Stripe</p>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="bg-gradient-to-r from-indigo-600 to-violet-700 text-white py-16 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to take back your time?
          </h2>
          <p className="text-indigo-100 max-w-xl mx-auto">
            Join thousands of professionals, builders, and students who organize
            their lives using TaskFlow.
          </p>
          <button className="bg-white hover:bg-slate-50 text-indigo-600 font-bold px-8 py-3.5 rounded-xl transition shadow-lg inline-block">
            Get Started For Free
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-slate-400 border-t border-slate-100">
        <p>
          &copy; {new Date().getFullYear()} TaskFlow App. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
