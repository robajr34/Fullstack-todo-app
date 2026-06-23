"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

import React, { useState } from "react";
import {
  User,
  Mail,
  Shield,
  CheckCircle2,
  Clock,
  ListTodo,
  Camera,
} from "lucide-react";
import useAuth from "@/hook/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();

  // Initialize editable profile fields with fallback data
  const [displayName, setDisplayName] = useState(
    user?.username || "Alex Mercer",
  );
  const [bio, setBio] = useState(
    "Frontend developer working on building sleek, intuitive SaaS product systems.",
  );
  const [location, setLocation] = useState("San Francisco, CA");

  const [isEditing, setIsEditing] = useState(false);

  // Mock analytics data matching your sidebar categories
  const stats = [
    {
      label: "Completed",
      count: 24,
      icon: <CheckCircle2 className="text-emerald-500" size={18} />,
    },
    {
      label: "Pending",
      count: 5,
      icon: <Clock className="text-amber-500" size={18} />,
    },
    {
      label: "Total Tasks",
      count: 29,
      icon: <ListTodo className="text-indigo-400" size={18} />,
    },
  ];

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("Updating profile database values:", {
      displayName,
      bio,
      location,
    });
    setIsEditing(false);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen w-full bg-[#0b0f19] text-slate-100 p-6 md:p-10 font-sans">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header Title */}
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-slate-100">
              My Profile
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Manage your identity layout information across the application.
            </p>
          </div>

          {/* Profile Card Header Banner Section */}
          <div className="relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
            {/* Accent Color Band */}
            <div className="h-24 w-full bg-gradient-to-r from-indigo-600 to-purple-600" />

            <div className="p-6 pt-0 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              {/* Avatar Stack Wrapper */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-10">
                <div className="relative group w-20 h-20 rounded-xl bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-slate-300 flex-shrink-0 shadow-md">
                  <User size={36} />
                  <button className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-1000 transition-opacity cursor-pointer">
                    <Camera size={16} className="text-slate-200" />
                  </button>
                </div>

                <div className="space-y-0.5">
                  <h2 className="text-lg font-bold text-slate-100">
                    {displayName}
                  </h2>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <Mail size={12} />{" "}
                    {user?.email || "alex.mercer@example.com"}
                  </p>
                </div>
              </div>

              {/* Quick Action Toggle button */}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs font-semibold px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg border border-slate-700/60 transition-colors"
              >
                {isEditing ? "View Profile" : "Edit Details"}
              </button>
            </div>
          </div>

          {/* Task Metric Stats Grid Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between shadow-md"
              >
                <div className="space-y-0.5">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-xl font-bold text-slate-200">
                    {stat.count}
                  </p>
                </div>
                <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-800">
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Main Details Body Blocks */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
            {!isEditing ? (
              /* View Mode Template */
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                    Short Biography
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-800/20 border border-slate-800/40 rounded-lg p-3">
                    {bio}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Location
                    </h3>
                    <p className="text-sm font-medium text-slate-300">
                      {location}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                      Account Role
                    </h3>
                    <p className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
                      <Shield size={14} className="text-indigo-400" /> Member
                      Workspace
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Interactive State Update Form Mode */
              <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Biography
                  </label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={3}
                    className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="text-xs font-semibold text-slate-400 hover:text-slate-200 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs py-2 px-4 rounded-lg shadow-md shadow-indigo-600/10 transition-all"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default ProfilePage;