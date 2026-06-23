"use client";

import React, { useEffect, useState } from "react";
import { User, Bell, Lock, Eye, Save, Trash2 } from "lucide-react";
import useAuth from "@/hook/useAuth";

const SettingsPage = () => {
  const { user } = useAuth();
  // 1. Profile State
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);
  // 2. Preferences State (Toggles)
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [isPrivateProfile, setIsPrivateProfile] = useState(false);

  // 3. Security State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  // Handle Settings Save
  const handleSaveSettings = (e) => {
    e.preventDefault();

    const settingsPayload = {
      profile: { username, email },
      preferences: { emailNotifications, pushNotifications, isPrivateProfile },
      security: { currentPassword, newPassword },
    };

    console.log("Saving all settings:", settingsPayload);
    // Add your API request or context update logic here
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0f19] text-slate-100 p-6 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-slate-100">
            Account Settings
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your profile, preferences, and security settings.
          </p>
        </div>

        <form onSubmit={handleSaveSettings} className="space-y-8">
          {/* Section 1: Profile Information */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-6 shadow-xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-6 flex items-center gap-2">
              <User size={16} /> Profile Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 2: Preferences & Toggles */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-6 shadow-xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-6 flex items-center gap-2">
              <Bell size={16} /> Preferences & Visibility
            </h2>
            <div className="space-y-5">
              {/* Email Notification Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-200">
                    Email Notifications
                  </h3>
                  <p className="text-xs text-slate-500">
                    Receive summary reports and task dead-lines via email.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${emailNotifications ? "bg-indigo-600" : "bg-slate-800"}`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${emailNotifications ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>

              <hr className="border-slate-800/60" />

              {/* Push Notification Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-200">
                    Push Notifications
                  </h3>
                  <p className="text-xs text-slate-500">
                    Get instant desktop alerts when a task is due.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    pushNotifications
                      ? setPushNotifications(false)
                      : setPushNotifications(true)
                  }
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${pushNotifications ? "bg-indigo-600" : "bg-slate-800"}`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${pushNotifications ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>

              <hr className="border-slate-800/60" />

              {/* Privacy Toggle */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-slate-200">
                    Private Profile
                  </h3>
                  <p className="text-xs text-slate-500">
                    Hide your tasks and progression metric boards from team
                    visibility.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsPrivateProfile(!isPrivateProfile)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${isPrivateProfile ? "bg-indigo-600" : "bg-slate-800"}`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isPrivateProfile ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Security */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-xl p-6 shadow-xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-indigo-400 mb-6 flex items-center gap-2">
              <Lock size={16} /> Password & Security
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  className="w-full bg-slate-800/40 border border-slate-800 rounded-lg px-3 py-2.5 text-sm text-slate-200 placeholder-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
            {/* Danger Zone Trigger */}
            <button
              type="button"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 text-xs font-medium px-4 py-2.5 rounded-lg border border-transparent hover:border-rose-500/20 transition-all"
              onClick={() => console.log("Account deletion requested")}
            >
              <Trash2 size={14} />
              Delete Account
            </button>

            {/* Save Buttons */}
            <div className="flex w-full sm:w-auto items-center gap-3">
              <button
                type="button"
                className="w-1/2 sm:w-auto text-sm font-medium text-slate-400 hover:text-slate-200 px-4 py-2.5 rounded-lg hover:bg-slate-800 transition-colors"
                onClick={() => console.log("Cancel clicked")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 px-5 rounded-lg shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
