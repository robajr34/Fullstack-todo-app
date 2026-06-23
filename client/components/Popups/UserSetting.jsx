import Link from "next/link";
import useAuth from "@/hook/useAuth";
import usePopups from "@/hook/usePopups";
import { logout } from "@/services/auth";
import { LogOut, Settings, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const UserSetting = () => {
  const { setUser } = useAuth();
  const router = useRouter();
  const { userSettingIsOpen } = usePopups();

  async function handleLogout() {
    const res = await logout();
    const data = await res.json();
    setUser(null);
    router.replace("/login");
    console.log(data);
  }

  const linkClass =
    "flex items-center gap-2 p-1 rounded-md hover:bg-slate-600 w-full text-left";

  return (
    <div
      className={`absolute ${
        userSettingIsOpen ? "flex" : "hidden"
      } flex-col z-50 bottom-20 bg-slate-700 text-slate-300 gap-2 p-2 rounded-xl w-54`}
    >
      {/* Profile */}
      <Link href="/dashboard/profile/" className={linkClass}>
        <User size={18} />
        <span>Profile</span>
      </Link>

      {/* Settings */}
      <Link
        href="/dashboard/settings/"
        onClick={() => console.log("Link clicked")}
        className={linkClass}
      >
        <Settings size={18} />
        <span>Settings</span>
      </Link>

      {/* Logout stays button (NOT a link) */}
      <button className={linkClass} onClick={handleLogout}>
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserSetting;
